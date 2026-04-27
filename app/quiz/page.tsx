"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { getAffiliateName } from "../lib/trackAffiliate";

// ── GA4 helper ────────────────────────────────────────────────────────────────
function ga(event: string, params?: Record<string, string>) {
  if (
    typeof window !== "undefined" &&
    (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag
  ) {
    (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      event,
      params ?? {}
    );
  }
}

// ── Schema ────────────────────────────────────────────────────────────────────
const quizSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find Your Perfect Shilajit — Personalized 7-Question Quiz",
  description:
    "Answer 7 questions about your goals, budget, and purity preferences to get matched with the best shilajit brand for you.",
  url: "https://www.shilajitprice.com/quiz",
  author: {
    "@type": "Person",
    name: "Adrian Voss",
    description: "Anthropologist and founder of ShilajitPrice.com",
    url: "https://www.shilajitprice.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "ShilajitPrice",
    url: "https://www.shilajitprice.com",
  },
  datePublished: "2026-04-01",
  dateModified: "2026-04-16",
  inLanguage: "en-US",
  isAccessibleForFree: true,
};

// ── Types ─────────────────────────────────────────────────────────────────────
type Step = "intro" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | "result";
type OutcomeKey = "bl" | "ph" | "ns" | "mst" | "blConv" | "pb";

// ── Questions ─────────────────────────────────────────────────────────────────
const QUESTIONS: {
  id: number;
  question: string;
  skippable?: boolean;
  options: { label: string; value: string }[];
}[] = [
  {
    id: 1,
    question: "What's your main goal with Shilajit?",
    options: [
      { label: "Boost daily energy and reduce fatigue", value: "energy" },
      { label: "Support testosterone and male vitality", value: "testosterone" },
      { label: "Improve focus, memory and cognitive function", value: "cognitive" },
      { label: "Longevity, recovery and mitochondrial health", value: "longevity" },
      { label: "General wellness and mineral support", value: "general" },
    ],
  },
  {
    id: 2,
    question: "How important is convenience to you?",
    options: [
      { label: "Most potent and authentic — happy to dissolve resin", value: "resin" },
      { label: "Quick and travel friendly — capsules or tablets", value: "capsules" },
      { label: "Easy on the go — gummies, drops or honey", value: "convenience" },
      { label: "Show me the best value regardless of form", value: "value" },
    ],
  },
  {
    id: 3,
    question: "What is your monthly budget?",
    options: [
      { label: "Under $30", value: "budget" },
      { label: "$30 to $50", value: "mid" },
      { label: "$50 or more", value: "premium" },
      { label: "Not sure, show all options", value: "any" },
    ],
  },
  {
    id: 4,
    question: "How do you prefer to take supplements?",
    options: [
      { label: "Traditional resin — highest bioavailability", value: "resin" },
      { label: "Capsules or tablets — easy dosing, no taste", value: "capsules" },
      { label: "Gummies, liquid drops, honey or powder", value: "convenience" },
    ],
  },
  {
    id: 5,
    question: "How important is purity and lab testing?",
    options: [
      { label: "Very — I only want full COA and heavy metals tested", value: "strict" },
      { label: "Somewhat — basic testing is fine", value: "moderate" },
      { label: "Not a big concern right now", value: "relaxed" },
    ],
  },
  {
    id: 6,
    question: "Any dietary preferences?",
    skippable: true,
    options: [
      { label: "Vegan or vegetarian", value: "vegan" },
      { label: "No restrictions", value: "none" },
      { label: "Avoid sweeteners or additives", value: "clean" },
    ],
  },
  {
    id: 7,
    question: "How experienced are you with Shilajit?",
    skippable: true,
    options: [
      { label: "Complete beginner", value: "beginner" },
      { label: "Tried it before, want to upgrade", value: "intermediate" },
      { label: "Regular user looking for better value or purity", value: "experienced" },
    ],
  },
];

const TOTAL_QUESTIONS = 7;

// ── Goal labels for personalization ──────────────────────────────────────────
const GOAL_LABELS: Record<string, string> = {
  energy: "boosting energy and reducing fatigue",
  testosterone: "testosterone and male vitality",
  cognitive: "focus, memory and cognitive function",
  longevity: "longevity and mitochondrial health",
  general: "general wellness and mineral support",
};

// ── BL Convenience format options ─────────────────────────────────────────────
const BL_CONV_OPTIONS = [
  {
    emoji: "🍬",
    label: "Gummies",
    url: "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-gummies?sca_ref=5188496.BbHTin3axE",
  },
  {
    emoji: "💧",
    label: "Tincture",
    url: "https://black-lotus-shilajit-shop.myshopify.com/products/pure-shilajit-tincture?sca_ref=5188496.BbHTin3axE",
  },
  {
    emoji: "🍯",
    label: "Honey Blend",
    url: "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-honey?sca_ref=5188496.BbHTin3axE",
  },
];

// ── Outcome data ──────────────────────────────────────────────────────────────
const OUTCOME_DATA: Record<
  OutcomeKey,
  {
    name: string;
    headline: string;
    subhead: string;
    tier: string;
    fulvicAcid: string;
    pricePerGram: string;
    form: string;
    origin: string;
    badges: string[];
    primaryCta: { label: string; url: string };
    secondaryCta?: { label: string; url: string };
    runnerUp: { name: string; url: string; label: string };
    tip: string;
    gaName: string;
  }
> = {
  bl: {
    name: "Black Lotus Shilajit",
    headline: "Your best match is Black Lotus Shilajit",
    subhead:
      "Highest fulvic acid in our database — 85% — perfect for your goals",
    tier: "S",
    fulvicAcid: "85%",
    pricePerGram: "$1.23/g",
    form: "Resin",
    origin: "Altai",
    badges: ["✓ COA Verified", "✓ Heavy Metals Pass", "✓ DBP Present"],
    primaryCta: {
      label: "View Current Deal →",
      url: "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE",
    },
    secondaryCta: {
      label: "View Bundle →",
      url: "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE",
    },
    runnerUp: {
      name: "Natural Shilajit Resin 20g",
      url: "https://naturalshilajit.com/products/natural-shilajit-resin?rfsn=9069392.c841fa",
      label: "Runner-up pick →",
    },
    tip: "💡 Pro tip: Store Black Lotus resin in a cool, dry place. Dissolve a pea-sized amount (250–300mg) in warm water or milk — avoid boiling to preserve bioactive compounds.",
    gaName: "black_lotus_premium",
  },
  ph: {
    name: "Pure Himalayan Shilajit",
    headline: "Your best match is Pure Himalayan Shilajit",
    subhead:
      "Authentic Himalayan sourcing with full lab verification — ideal for your needs",
    tier: "S",
    fulvicAcid: "60%",
    pricePerGram: "$1.33/g",
    form: "Resin",
    origin: "Himalayan",
    badges: ["✓ COA Verified", "✓ Heavy Metals Pass", "✓ ISO Certified"],
    primaryCta: {
      label: "View Current Deal →",
      url: "https://www.purehimalayanshilajit.com/buy-shilajit/?ref=4792",
    },
    runnerUp: {
      name: "Black Lotus Shilajit Resin",
      url: "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE",
      label: "Also consider →",
    },
    tip: "💡 Pro tip: Start with a pea-sized amount of Pure Himalayan resin (~150–250mg) dissolved in warm water. Most users notice improved energy and clarity within 7–14 days of consistent use.",
    gaName: "pure_himalayan",
  },
  ns: {
    name: "Natural Shilajit",
    headline: "Your best match is Natural Shilajit",
    subhead:
      "UNESCO Altai source with DBP verification — the most rigorously tested resin in our database",
    tier: "S",
    fulvicAcid: "Verified",
    pricePerGram: "$2.45/g (20g) · $1.66/g (150g)",
    form: "Resin",
    origin: "Altai UNESCO",
    badges: ["✓ COA Verified", "✓ DBP Verified", "✓ ICP-MS + LC-MS + FTIR"],
    primaryCta: {
      label: "View Current Deal →",
      url: "https://naturalshilajit.com/products/natural-shilajit-resin?rfsn=9069392.c841fa",
    },
    secondaryCta: {
      label: "Best Bulk Value →",
      url: "https://naturalshilajit.com/products/natural-shilajit-resin-150-grams?rfsn=9069392.c841fa",
    },
    runnerUp: {
      name: "Black Lotus Shilajit Resin",
      url: "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE",
      label: "Also consider →",
    },
    tip: "💡 Pro tip: Natural Shilajit uses cold-water microfiltration (0.45–1.0μm) with no solvents — preserving the full bioactive spectrum. Take on an empty stomach for optimal absorption.",
    gaName: "natural_shilajit",
  },
  mst: {
    name: "MST PrimaVie Shilajit",
    headline: "Your best match is MST PrimaVie Shilajit",
    subhead:
      "Clinically studied extract at the best price per serving in our database",
    tier: "A",
    fulvicAcid: "50%",
    pricePerGram: "$1.53/g",
    form: "Capsules",
    origin: "Himalayan",
    badges: ["✓ COA Verified", "✓ BSCG Certified", "✓ cGMP"],
    primaryCta: {
      label: "Check Price →",
      url: "https://www.amazon.com/dp/B08NZ39J8D?tag=shilajit0a-20",
    },
    runnerUp: {
      name: "Pure Himalayan Shilajit",
      url: "https://www.purehimalayanshilajit.com/buy-shilajit/?ref=4792",
      label: "Premium alternative →",
    },
    tip: "💡 Pro tip: PrimaVie® is one of the only shilajit extracts used in human clinical trials. Take with a small amount of healthy fat (coconut oil, nuts) to maximize absorption of fat-soluble compounds.",
    gaName: "mst_primavie_value",
  },
  blConv: {
    name: "Black Lotus — Convenience Format",
    headline: "Your best match is Black Lotus — Convenience Format",
    subhead: "S-tier quality in formats made for your lifestyle",
    tier: "S",
    fulvicAcid: "85%",
    pricePerGram: "Varies by format",
    form: "Gummies / Tincture / Honey",
    origin: "Altai",
    badges: ["✓ COA Verified", "✓ Heavy Metals Pass", "✓ S-Tier Quality"],
    primaryCta: {
      label: "Shop All Formats →",
      url: "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE",
    },
    runnerUp: {
      name: "Black Lotus Resin (Most Potent)",
      url: "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE",
      label: "Upgrade to resin →",
    },
    tip: "💡 Pro tip: Black Lotus gummies and honey blends use the same S-tier Altai resin as their flagship product. For maximum potency, consider alternating with the resin on days when you have more time.",
    gaName: "black_lotus_convenience",
  },
  pb: {
    name: "Pürblack Live Resin",
    headline: "Your best match is Pürblack Live Resin",
    subhead:
      "5 US patents and pharmaceutical-grade US processing — built for the research-focused buyer",
    tier: "A",
    fulvicAcid: "Verified",
    pricePerGram: "$3.11/g",
    form: "Live Resin",
    origin: "Multi-region",
    badges: ["✓ COA Verified", "✓ US Patents (x5)", "✓ Made in USA"],
    primaryCta: {
      label: "View Current Deal →",
      url: "https://purblack.pxf.io/c/7221460/3041684/36963",
    },
    runnerUp: {
      name: "Natural Shilajit Resin 20g",
      url: "https://naturalshilajit.com/products/natural-shilajit-resin?rfsn=9069392.c841fa",
      label: "Runner-up pick →",
    },
    tip: "💡 Pro tip: Pürblack's 5th-generation live resin uses a patented US pharmaceutical-grade process that removes heavy metals while preserving the full bioactive spectrum. Dissolve a pea-sized amount in warm water — the True Gold variant adds 555 PPM colloidal gold for an added premium edge.",
    gaName: "purblack_premium",
  },
};

// ── Scoring ───────────────────────────────────────────────────────────────────
function computeScores(answers: Record<number, string>): Record<OutcomeKey, number> {
  const s: Record<OutcomeKey, number> = { bl: 0, ph: 0, ns: 0, mst: 0, blConv: 0, pb: 0 };

  switch (answers[1]) {
    case "energy":       s.bl += 3; s.ph += 1; s.ns += 1; s.mst += 1; s.blConv += 1; break;
    case "testosterone": s.bl += 4; s.ph += 1; s.ns += 1; s.mst += 1; break;
    case "cognitive":    s.bl += 1; s.ph += 2; s.ns += 3; s.pb += 4; break;
    case "longevity":    s.bl += 1; s.ph += 1; s.ns += 4; s.pb += 2; break;
    case "general":      s.bl += 1; s.ph += 3; s.ns += 1; s.mst += 2; break;
  }

  switch (answers[2]) {
    case "resin":        s.bl += 3; s.ns += 3; s.pb += 2; break;
    case "capsules":     s.bl += 2; s.ph += 2; s.mst += 3; break;
    case "convenience":  s.blConv += 5; s.ph += 1; break;
    case "value":        s.mst += 3; s.bl += 1; s.ns += 1; break;
  }

  switch (answers[3]) {
    case "budget":  s.mst += 5; break;
    case "mid":     s.bl += 2; s.ph += 2; s.ns += 1; break;
    case "premium": s.bl += 2; s.ns += 3; s.pb += 5; break;
    case "any":     s.ph += 2; s.mst += 1; s.bl += 1; break;
  }

  switch (answers[4]) {
    case "resin":       s.bl += 2; s.ns += 2; s.pb += 2; break;
    case "capsules":    s.bl += 1; s.ph += 2; s.mst += 3; break;
    case "convenience": s.blConv += 4; s.ph += 1; break;
  }

  switch (answers[5]) {
    case "strict":   s.bl += 3; s.ns += 4; s.pb += 3; break;
    case "moderate": s.mst += 2; s.ph += 2; s.bl += 1; break;
    case "relaxed":  s.mst += 3; s.blConv += 1; break;
  }

  switch (answers[6]) {
    case "vegan": s.ph += 1; s.ns += 1; break;
    case "none":  s.bl += 1; break;
    case "clean": s.ns += 2; s.bl += 1; s.pb += 2; break;
  }

  switch (answers[7]) {
    case "beginner":     s.ph += 4; break;
    case "intermediate": s.bl += 2; s.mst += 1; s.pb += 1; break;
    case "experienced":  s.ns += 3; s.bl += 1; s.pb += 3; break;
  }

  return s;
}

function getTopOutcome(scores: Record<OutcomeKey, number>): OutcomeKey {
  return (Object.entries(scores) as [OutcomeKey, number][]).sort(
    (a, b) => b[1] - a[1]
  )[0][0];
}

function getReasonBullets(
  outcome: OutcomeKey,
  answers: Record<number, string>
): string[] {
  const goal = GOAL_LABELS[answers[1]] ?? "your wellness goals";
  switch (outcome) {
    case "bl":
      return [
        `Highest fulvic acid concentration (85%) in our database — ideal for ${goal}`,
        answers[5] === "strict"
          ? "Third-party COA verified with full heavy metals panel — meets your strict purity standard"
          : "Lab-verified purity with Certificate of Analysis available on brand website",
        answers[3] === "budget"
          ? "Best purity-to-value ratio in the S-tier resin category"
          : "Premium Altai sourcing with S-tier quality assurance at a competitive price per gram",
      ];
    case "ph":
      return [
        `Authentic Himalayan sourcing with ISO/IEC 17025 lab certification — perfect for ${goal}`,
        answers[7] === "beginner"
          ? "Highly recommended for first-time shilajit users — straightforward formats and clean taste"
          : "Trusted by thousands with full sourcing transparency and verifiable COAs",
        "60% verified fulvic acid with full heavy metals panel — exceptional quality at $1.33/g",
      ];
    case "ns":
      return [
        `UNESCO-protected Altai source with DBP verification — the gold standard for ${goal}`,
        "ICP-MS, LC-MS, and FTIR testing — the most comprehensive lab panel in our entire database",
        answers[3] === "premium"
          ? "Premium pricing fully justified by unmatched purity documentation and sourcing transparency"
          : "For serious shilajit users who prioritize documentation over price — best-in-class verification",
      ];
    case "mst":
      return [
        `Clinically studied PrimaVie® extract with 50% verified fulvic acid — effective for ${goal}`,
        "Best price per serving in our database for a fully COA-verified, third-party tested product",
        "BSCG certified and cGMP manufactured — pharmaceutical-grade quality standards at a budget price",
      ];
    case "blConv":
      return [
        `S-tier Black Lotus quality in convenient formats — perfect for ${goal} on the go`,
        "Same Altai resin source as the #1-ranked Black Lotus Resin — zero quality compromise",
        "Three formats available — gummies, tincture, and honey blend — choose what fits your lifestyle",
      ];
    case "pb":
      return [
        `5 US patents and pharmaceutical-grade US manufacturing — the most scientifically documented shilajit for ${goal}`,
        answers[5] === "strict"
          ? "COA verified at a US pharmaceutical-grade third-party lab — meets the strictest purity standard in our database"
          : "Third-party tested with full heavy metals panel and COA — fully verified purity at a premium tier",
        answers[3] === "premium"
          ? "Premium pricing reflects patented processing, US manufacturing, and unmatched research-grade documentation"
          : "Gold-infused True Gold variant (555 PPM colloidal gold) and 5 US patents set Pürblack apart from every competitor",
      ];
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function QuizPage() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [fading, setFading] = useState(false);

  const currentQ = typeof step === "number" ? QUESTIONS[step - 1] : null;
  const progress =
    typeof step === "number" ? ((step - 1) / TOTAL_QUESTIONS) * 100 : step === "result" ? 100 : 0;

  const transitionTo = useCallback((nextStep: Step) => {
    setFading(true);
    setTimeout(() => {
      setStep(nextStep);
      setFading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  }, []);

  const handleAnswer = (questionId: number, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    const nextStep = questionId + 1;
    if (nextStep > TOTAL_QUESTIONS) {
      ga("quiz_completed", {
        outcome_name: getTopOutcome(computeScores(newAnswers)),
      });
      transitionTo("result");
    } else {
      transitionTo(nextStep as Step);
    }
  };

  const handleSkip = (questionId: number) => {
    const nextStep = questionId + 1;
    if (nextStep > TOTAL_QUESTIONS) {
      ga("quiz_completed", {
        outcome_name: getTopOutcome(computeScores(answers)),
      });
      transitionTo("result");
    } else {
      transitionTo(nextStep as Step);
    }
  };

  const handleBack = () => {
    if (typeof step === "number" && step > 1) {
      transitionTo((step - 1) as Step);
    }
  };

  const handleStart = () => {
    ga("quiz_started");
    transitionTo(1);
  };

  const handleRetake = () => {
    setAnswers({});
    transitionTo("intro");
  };

  // Compute result data
  const scores = computeScores(answers);
  const outcomeKey = getTopOutcome(scores);
  const outcome = OUTCOME_DATA[outcomeKey];
  const goalLabel = GOAL_LABELS[answers[1]] ?? "your wellness goals";
  const bullets = getReasonBullets(outcomeKey, answers);

  return (
    <div className="min-h-screen flex flex-col bg-[#E8F5EC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D1EDD8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span
              className="text-lg font-extrabold text-[#10B981]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              ShilajitPrice
            </span>
            <span
              className="text-lg font-extrabold text-[#0D1F14]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              .com
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <a href="/#deals" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">Deals</a>
            <a href="/compare" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">Compare</a>
            <a href="/blog" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">Blog</a>
            <a href="/quiz" className="text-[#10B981] font-semibold">Quiz</a>
          </div>
          <a
            href="/"
            className="hidden sm:inline-flex shrink-0 px-4 py-1.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white text-xs font-semibold transition-colors duration-200"
          >
            ← Compare All Prices
          </a>
        </div>
      </nav>

      {/* Progress bar */}
      {step !== "intro" && (
        <div className="w-full h-1.5 bg-[#D1EDD8]">
          <div
            className="h-full bg-[#10B981] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          {/* Fade wrapper */}
          <div
            className="transition-all duration-250"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(8px)" : "translateY(0)",
            }}
          >
            {/* ── INTRO SCREEN ──────────────────────────────────────────────── */}
            {step === "intro" && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#9EC9AD] text-[#4A6358] text-xs font-semibold mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  7 questions · 60 seconds · Free
                </div>

                <h1
                  className="text-4xl sm:text-5xl font-extrabold text-[#0D1F14] leading-tight mb-4"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Find Your{" "}
                  <span className="text-[#10B981]">Perfect</span>{" "}
                  Shilajit
                </h1>

                <p className="text-base text-[#4A6358] leading-relaxed mb-8 max-w-md mx-auto">
                  Answer 7 quick questions about your goals, budget, and purity preferences.
                  We&apos;ll match you with the best shilajit brand based on real lab data — not paid rankings.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 mb-8 text-left">
                  {[
                    { icon: "🎯", label: "Personalized match", desc: "Based on your goals and lifestyle" },
                    { icon: "🔬", label: "Lab data backed", desc: "COA, fulvic acid, heavy metals" },
                    { icon: "💰", label: "Budget aware", desc: "Best value for your price range" },
                  ].map(({ icon, label, desc }) => (
                    <div
                      key={label}
                      className="bg-white rounded-2xl border border-[#D1EDD8] p-4 shadow-sm"
                    >
                      <div className="text-2xl mb-2">{icon}</div>
                      <div className="text-sm font-bold text-[#0D1F14] mb-0.5">{label}</div>
                      <div className="text-xs text-[#7BA899]">{desc}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleStart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-bold text-base transition-all duration-200 shadow-md min-h-[52px]"
                >
                  Start the Free Quiz →
                </button>

                <p className="text-xs text-[#7BA899] mt-4">
                  No email required. Results shown instantly.
                </p>
              </div>
            )}

            {/* ── QUESTION SCREEN ───────────────────────────────────────────── */}
            {typeof step === "number" && currentQ && (
              <div>
                {/* Step label */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-[#10B981] uppercase tracking-widest">
                    Question {step} of {TOTAL_QUESTIONS}
                  </span>
                  {currentQ.skippable && (
                    <button
                      onClick={() => handleSkip(currentQ.id)}
                      className="text-xs text-[#7BA899] hover:text-[#4A6358] transition-colors underline underline-offset-2"
                    >
                      Skip this question →
                    </button>
                  )}
                </div>

                {/* Question */}
                <h2
                  className="text-2xl sm:text-3xl font-extrabold text-[#0D1F14] mb-8 leading-snug"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {currentQ.question}
                </h2>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {currentQ.options.map((opt) => {
                    const selected = answers[currentQ.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(currentQ.id, opt.value)}
                        className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-medium text-sm transition-all duration-150 min-h-[52px] flex items-center gap-3 group
                          ${
                            selected
                              ? "bg-[#182B1F] border-[#182B1F] text-white shadow-md"
                              : "bg-white border-[#D1EDD8] text-[#0D1F14] hover:border-[#10B981] hover:shadow-sm"
                          }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                            ${selected ? "border-white bg-white" : "border-[#9EC9AD] group-hover:border-[#10B981]"}`}
                        >
                          {selected && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                          )}
                        </span>
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                {/* Back button */}
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-sm text-[#7BA899] hover:text-[#0D1F14] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}
              </div>
            )}

            {/* ── RESULT SCREEN ─────────────────────────────────────────────── */}
            {step === "result" && (
              <div>
                {/* Match badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-5 uppercase tracking-widest">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Your personalized match
                </div>

                {/* Personalized headline */}
                <h1
                  className="text-3xl sm:text-4xl font-extrabold text-[#0D1F14] leading-tight mb-2"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {outcome.headline}
                </h1>
                <p className="text-base text-[#4A6358] leading-relaxed mb-6">
                  {outcomeKey !== "blConv"
                    ? `Based on your goal of ${goalLabel} — ${outcome.subhead.toLowerCase()}`
                    : outcome.subhead}
                </p>

                {/* Product card */}
                <div className="bg-white rounded-2xl border-2 border-[#10B981] shadow-md p-6 mb-6">
                  {/* Tier + badges row */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 text-amber-800 ring-1 ring-amber-300 text-sm font-extrabold">
                      {outcome.tier}
                    </span>
                    {outcome.badges.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[10px] font-bold"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* 4 metrics grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                      { label: "Fulvic Acid", value: outcome.fulvicAcid },
                      { label: "Price / gram", value: outcome.pricePerGram },
                      { label: "Form", value: outcome.form },
                      { label: "Origin", value: outcome.origin },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="bg-[#F0FAF4] rounded-xl p-3 border border-[#D1EDD8]"
                      >
                        <div className="text-[10px] text-[#7BA899] font-semibold uppercase tracking-wider mb-1">
                          {label}
                        </div>
                        <div className="text-sm font-bold text-[#0D1F14] leading-snug">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Why it matches */}
                  <div className="mb-6">
                    <div className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-3">
                      Why it matches your answers
                    </div>
                    <ul className="space-y-2">
                      {bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#0D1F14]">
                          <span className="text-[#10B981] mt-0.5 shrink-0 font-bold">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Convenience format options for blConv */}
                  {outcomeKey === "blConv" && (
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {BL_CONV_OPTIONS.map((opt) => (
                        <a
                          key={opt.label}
                          href={opt.url}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          onClick={() =>
                            ga("quiz_affiliate_click", {
                              affiliate_brand: getAffiliateName(opt.url) ?? "Black Lotus",
                              quiz_outcome: outcome.gaName,
                              click_location: "quiz_results",
                            })
                          }
                          className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 border-[#D1EDD8] hover:border-[#10B981] bg-[#F0FAF4] hover:bg-white transition-all text-center"
                        >
                          <span className="text-2xl">{opt.emoji}</span>
                          <span className="text-xs font-bold text-[#0D1F14]">{opt.label}</span>
                          <span className="text-[10px] text-[#10B981]">Shop →</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={outcome.primaryCta.url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() =>
                        ga("quiz_affiliate_click", {
                          affiliate_brand: getAffiliateName(outcome.primaryCta.url) ?? outcome.gaName,
                          quiz_outcome: outcome.gaName,
                          click_location: "quiz_results",
                        })
                      }
                      className="flex-1 flex items-center justify-center py-3.5 px-5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-bold text-sm transition-all duration-200 shadow-sm min-h-[48px]"
                    >
                      {outcome.primaryCta.label}
                    </a>
                    {outcome.secondaryCta && (
                      <a
                        href={outcome.secondaryCta.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        onClick={() =>
                          ga("quiz_affiliate_click", {
                            affiliate_brand: getAffiliateName(outcome.secondaryCta!.url) ?? outcome.gaName,
                            quiz_outcome: outcome.gaName,
                            click_location: "quiz_results",
                          })
                        }
                        className="flex-1 flex items-center justify-center py-3.5 px-5 rounded-full border-2 border-[#182B1F] text-[#182B1F] hover:bg-[#182B1F] hover:text-white font-bold text-sm transition-all duration-200 min-h-[48px]"
                      >
                        {outcome.secondaryCta.label}
                      </a>
                    )}
                  </div>
                </div>

                {/* Secondary CTA */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Link
                    href="/compare"
                    className="flex-1 flex items-center justify-center py-3 px-5 rounded-full border-2 border-[#D1EDD8] text-[#4A6358] hover:border-[#9EC9AD] hover:text-[#0D1F14] font-semibold text-sm transition-all min-h-[48px]"
                  >
                    See Full Comparison →
                  </Link>
                  <button
                    onClick={handleRetake}
                    className="flex-1 flex items-center justify-center py-3 px-5 rounded-full border-2 border-[#D1EDD8] text-[#4A6358] hover:border-[#9EC9AD] hover:text-[#0D1F14] font-semibold text-sm transition-all min-h-[48px]"
                  >
                    Retake Quiz ↺
                  </button>
                </div>

                {/* Runner-up */}
                <div className="bg-white rounded-2xl border border-[#D1EDD8] p-4 mb-5">
                  <div className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">
                    Runner-up recommendation
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-[#0D1F14] font-medium">
                      {outcome.runnerUp.name}
                    </span>
                    <a
                      href={outcome.runnerUp.url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() =>
                        ga("quiz_affiliate_click", {
                          affiliate_brand: getAffiliateName(outcome.runnerUp.url) ?? "unknown",
                          quiz_outcome: outcome.gaName,
                          click_location: "quiz_results",
                        })
                      }
                      className="text-xs font-semibold text-[#10B981] hover:text-[#182B1F] transition-colors whitespace-nowrap"
                    >
                      {outcome.runnerUp.label}
                    </a>
                  </div>
                </div>

                {/* Educational tip */}
                <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-4 mb-5">
                  <p className="text-sm text-[#4A6358] leading-relaxed">{outcome.tip}</p>
                </div>

                {/* FTC + disclaimer */}
                <div className="space-y-2">
                  <p className="text-[11px] text-[#7BA899] leading-relaxed">
                    <strong className="text-[#4A6358]">Affiliate disclosure:</strong> This
                    recommendation includes affiliate links. We earn a commission at no extra
                    cost to you. Rankings are based on independent lab data, COA analysis, and
                    price per gram — not paid placements.
                  </p>
                  <p className="text-[11px] text-[#7BA899]">
                    Not medical advice. Consult your doctor before starting any supplement.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
