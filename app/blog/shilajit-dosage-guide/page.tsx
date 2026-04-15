import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

const AFFILIATE_RESIN = "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_CAPS = "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-resin-powder-capsules-extra-strength?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_BASE = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const PURE_HIMALAYAN_BASE = "https://www.purehimalayanshilajit.com/?ref=4792";
const PURE_HIMALAYAN_RESIN = "https://www.purehimalayanshilajit.com/buy-shilajit/?ref=4792";
const BASE_URL = "https://shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-dosage-guide`;

export const metadata: Metadata = {
  title: "How Much Shilajit Should You Take? Complete Dosage Guide 2026",
  description:
    "Research-backed shilajit dosage guide: recommended amounts by form factor, timing, cycling, what happens with too much, and how to start safely as a new user.",
  keywords:
    "shilajit dosage, how much shilajit to take, shilajit serving size, shilajit resin dosage, shilajit capsules dosage, shilajit cycling, when to take shilajit",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "How Much Shilajit Should You Take? Complete Dosage Guide 2026",
    description:
      "Research-backed shilajit dosage guide: recommended amounts by form factor, timing, cycling, what happens with too much, and how to start safely as a new user.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-15",
    modifiedTime: "2026-04-15",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Shilajit Should You Take? Complete Dosage Guide 2026",
  description:
    "Research-backed shilajit dosage guide: recommended amounts by form factor, timing, cycling, what happens with too much, and how to start safely as a new user.",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  url: POST_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  author: [
    { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
    {
      "@type": "Person",
      name: "ShilajitPrice Research Team",
      jobTitle: "Supplement Research & Price Analysis",
      worksFor: { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
      knowsAbout: ["shilajit dosage", "supplement research", "fulvic acid", "adaptogenic herbs"],
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "ShilajitPrice.com",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 200, height: 60 },
  },
  keywords:
    "shilajit dosage, how much shilajit to take, shilajit serving size, shilajit resin dosage, shilajit cycling",
  articleSection: "Buying Guide",
  wordCount: 1700,
};

const faqItems: FaqItem[] = [
  {
    question: "How much shilajit should I take per day?",
    answer:
      "Most clinical research has used 200–500 mg/day of standardized shilajit extract. A common starting point is 200–300 mg/day, increasing to 400–500 mg/day after assessing tolerance. The exact amount depends on the form (resin, capsules, powder) and the concentration of active compounds like fulvic acid. Follow the serving size on your specific product as a baseline.",
  },
  {
    question: "When should I take shilajit?",
    answer:
      "Most published research uses morning or afternoon dosing protocols. Taking shilajit on an empty stomach may support absorption. Many users avoid evening doses because shilajit's energizing properties can interfere with sleep in some individuals. Consistent daily timing tends to matter more than a precise window.",
  },
  {
    question: "Can you take too much shilajit?",
    answer:
      "Research has not established a defined toxicity threshold at standard supplemental doses. However, very high doses beyond the studied ranges may be associated with digestive discomfort, elevated uric acid levels, or dizziness. These effects appear dose-dependent and generally reversible. Starting low and increasing gradually is the safest approach.",
  },
  {
    question: "How long until shilajit works?",
    answer:
      "Most users in clinical studies reported noticeable effects after 2–4 weeks of consistent daily use. Some subjective effects (like improved energy) may be noticed sooner, while others (like changes in physical performance markers) tend to emerge over longer periods of consistent supplementation.",
  },
  {
    question: "Should I cycle shilajit?",
    answer:
      "Some traditional practitioners recommend cycling patterns such as 8 weeks on followed by 2 weeks off. There is no strong clinical evidence that mandates cycling for safety reasons. Cycling is often recommended as a precautionary practice to prevent potential tolerance, though the evidence supporting this is limited. It remains a personal choice rather than a documented requirement.",
  },
];

export default function ShilajitDosageGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostLayout
        heading={
          <>
            How Much Shilajit Should You Take?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              Complete Dosage Guide 2026
            </span>
          </>
        }
        description="Research-backed shilajit dosage guide: recommended amounts by form factor, timing, cycling, what happens with too much, and how to start safely as a new user."
        tags={["Dosage", "Buying Guide", "Science"]}
        publishedAt="2026-04-15"
        updatedAt="2026-04-15"
        readingTimeMin={7}
        currentSlug="shilajit-dosage-guide"
        breadcrumbLabel="Shilajit Dosage Guide"
        faqItems={faqItems}
      >
        {/* FTC Disclosure */}
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
          <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page
          are affiliate links. If you purchase through them, we may earn a commission at no extra
          cost to you. This does not affect our rankings — see our{" "}
          <Link href="/disclaimer" className="text-[#10B981] hover:underline">
            full disclosure policy
          </Link>
          .
        </div>

        {/* Intro */}
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit dosage is one of the most common questions new users have — and one of the most
            inconsistently answered across the internet. Some sources recommend a rice grain, others
            say a teaspoon. Some brands list 200 mg, others 600 mg.
          </p>
          <p>
            We cut through the noise by looking at what the published research actually used. The
            numbers below reflect clinical study protocols, not marketing copy. Use them as a
            reference point alongside your product&apos;s label.
          </p>
        </div>

        {/* Section 1: What the research says */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            What the Research Says About Effective Dosage
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              The majority of peer-reviewed clinical studies examining shilajit have used{" "}
              <strong>200–500 mg/day</strong> of standardized shilajit extract. Here are notable
              examples from the published literature:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                A 2016 study referenced in the <em>Journal of Ethnopharmacology</em> used{" "}
                <strong>200 mg twice daily</strong> (400 mg total) in its protocol.
              </li>
              <li>
                Studies using PrimaVie-standardized shilajit extract — the most clinically studied
                form — have typically used <strong>250–500 mg/day</strong>.
              </li>
              <li>
                Research focused on physical performance outcomes has generally used{" "}
                <strong>300–500 mg/day</strong> over periods ranging from 8 to 12 weeks.
              </li>
            </ul>
            <p>
              These are the doses <em>research used</em>, not prescriptions. Your individual
              response may differ based on body weight, the form you&apos;re taking, and the
              concentration of active compounds like fulvic acid in your specific product.
            </p>
          </div>
        </div>

        {/* Dosage Table */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Dosage by Form Factor
          </h2>
          <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4]">
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Form</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Starting Dose</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Typical Effective Range</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">How to Take</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Resin", "100–150 mg", "200–500 mg/day", "Dissolved in warm water or sublingual"],
                  ["Capsules", "1 capsule (300–500 mg)", "1–2 capsules/day", "With water"],
                  ["Powder", "200–300 mg", "300–600 mg/day", "Mixed in liquid"],
                  ["Tincture", "½ dropper", "1 full dropper/day", "Sublingual or in liquid"],
                  ["Gummies", "1 gummy", "1–2 gummies/day", "As directed"],
                ].map(([form, start, range, how], i) => (
                  <tr key={form} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{form}</td>
                    <td className="px-4 py-3 text-[#2D6A4F]">{start}</td>
                    <td className="px-4 py-3 text-[#0D1F14]">{range}</td>
                    <td className="px-4 py-3 text-[#555]">{how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#7BA899] mt-2">
            Ranges based on published clinical literature. Always refer to your specific product&apos;s
            label for serving size.
          </p>
        </div>

        {/* Section: First 2 weeks */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            How to Start — The First 2 Weeks
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              If you&apos;re new to shilajit, a gradual approach is sensible. Your body needs time to
              adjust, and starting low lets you identify any sensitivity before committing to a full
              dose.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Week 1</h3>
                <p className="text-sm text-[#0D1F14]">
                  Take <strong>150–200 mg/day</strong>. Pay close attention to how you feel —
                  energy, digestion, sleep quality. Most people tolerate this range without issue.
                </p>
              </div>
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Week 2</h3>
                <p className="text-sm text-[#0D1F14]">
                  If Week 1 went well, increase to <strong>300–400 mg/day</strong>. This puts you
                  in the range most research has used for studying effects over 8–12 weeks.
                </p>
              </div>
            </div>
            <p>
              Most people report noticing meaningful effects after <strong>2–4 weeks</strong> of
              consistent daily use. Shilajit is not an acute supplement — consistent use over time
              is what the research reflects.
            </p>
          </div>
        </div>

        {/* Section: Best time to take */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Best Time to Take Shilajit
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Most published research uses morning or afternoon dosing protocols. There are a few
              practical considerations worth knowing:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Empty stomach:</strong> Taking shilajit before eating may support absorption.
                Some users prefer dissolving resin in warm water first thing in the morning.
              </li>
              <li>
                <strong>Avoid late evening:</strong> Shilajit has energizing properties that can
                interfere with sleep for some users. Dosing before 3–4 PM is generally recommended.
              </li>
              <li>
                <strong>Consistency matters most:</strong> The specific hour is less important than
                taking it at a consistent time daily. Sporadic dosing makes it difficult to assess
                effects.
              </li>
            </ul>
          </div>
        </div>

        {/* Section: Cycling */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Should You Cycle Shilajit?
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Cycling refers to taking shilajit for a period, then pausing before resuming. A common
              pattern recommended by some practitioners is <strong>8 weeks on, 2 weeks off</strong>.
            </p>
            <p>
              There is no strong clinical data that mandates cycling for safety reasons. It&apos;s a
              precautionary practice — the theory is that breaks may prevent tolerance from
              developing, though direct evidence for this in humans is limited.
            </p>
            <p>
              Many users take shilajit continuously without reported issues. If you choose to cycle,
              the 8/2 pattern is the most commonly cited in traditional use contexts. If you prefer
              continuous use, current research does not indicate this is harmful at standard doses.
            </p>
          </div>
        </div>

        {/* Section: Too much */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            What Happens With Too Much Shilajit?
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Research has not established a defined toxicity threshold at standard supplemental doses
              (200–500 mg/day). However, exceeding studied ranges is worth approaching with caution.
            </p>
            <p>Very high doses beyond studied ranges may be associated with:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Digestive discomfort</strong> — nausea or loose stools, particularly when
                taken on an empty stomach at high doses.
              </li>
              <li>
                <strong>Elevated uric acid levels</strong> — shilajit contains purines, and very
                high intake may be relevant for individuals monitoring uric acid.
              </li>
              <li>
                <strong>Dizziness or lightheadedness</strong> — reported anecdotally at high doses,
                likely circulatory in origin.
              </li>
            </ul>
            <p>
              These effects appear dose-dependent and generally reversible with dose reduction.
              Starting low remains the simplest strategy to avoid these outcomes.
            </p>
          </div>
        </div>

        {/* Section: Dosage for specific goals */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Dosage for Specific Goals
          </h2>
          <div className="space-y-3 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Different areas of research have used slightly different dose ranges. These reflect
              what studies used — not individual prescriptions:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Energy Support Research</h3>
                <p className="text-sm text-[#0D1F14]">
                  Studies examining fatigue and energy outcomes have typically used{" "}
                  <strong>300–400 mg/day</strong> of standardized extract over 8+ weeks.
                </p>
              </div>
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Physical Performance Research</h3>
                <p className="text-sm text-[#0D1F14]">
                  Research focused on exercise and performance metrics has used{" "}
                  <strong>300–500 mg/day</strong>, often with PrimaVie-standardized extract.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Measuring resin */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            How to Measure Resin Dosage
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Resin is the most bioavailable form of shilajit, but it&apos;s also the trickiest to dose
              accurately. It&apos;s a sticky, tar-like substance that doesn&apos;t portion evenly like a
              capsule.
            </p>
            <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
              <h3 className="text-lg font-bold text-[#10B981] mb-2">Practical Measurement Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#0D1F14]">
                <li>
                  A <strong>pea-sized amount</strong> of resin is roughly 300 mg — a useful visual
                  reference for most users.
                </li>
                <li>
                  Most quality brands include a <strong>measuring scoop</strong>. Black Lotus includes
                  a 300 mg measuring scoop with their resin.
                </li>
                <li>
                  For precise dosing, a <strong>kitchen scale</strong> accurate to 0.1 g is the most
                  reliable method.
                </li>
                <li>
                  Warm the resin slightly (in warm water) if it&apos;s too stiff to portion — cold
                  temperatures make resin firmer and harder to measure.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Brands with clear serving sizes */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Brands With Clear Serving Size Information
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Transparent serving size labeling is a green flag — it means the brand has standardized
              their product and isn&apos;t leaving you to guess. Here&apos;s how our database brands compare:
            </p>
            <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#F0FAF4]">
                    <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Brand</th>
                    <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Serving Size</th>
                    <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Black Lotus", "300 mg", "Clearly labeled; measuring scoop included"],
                    ["Pure Himalayan", "300 mg", "Clearly labeled; consistent across products"],
                    ["Sayan", "200 mg", "Labeled; lower serving size than most"],
                  ].map(([brand, size, note], i) => (
                    <tr key={brand} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                      <td className="px-4 py-3 font-semibold text-[#0D1F14]">{brand}</td>
                      <td className="px-4 py-3 text-[#2D6A4F] font-medium">{size}</td>
                      <td className="px-4 py-3 text-[#555]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Brands that don&apos;t list a specific serving size — or only say &quot;use a pea-sized
              amount&quot; without any mg equivalent — make it impossible to stay within research-studied
              ranges consistently.
            </p>
          </div>
        </div>

        {/* Internal links */}
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Not sure which form factor to choose?{" "}
            <Link href="/blog/shilajit-resin-vs-capsules" className="text-[#10B981] hover:underline">
              Our resin vs. capsules comparison
            </Link>{" "}
            breaks down the tradeoffs in detail. If you&apos;re just starting out, the{" "}
            <Link href="/blog/shilajit-beginners-guide" className="text-[#10B981] hover:underline">
              beginner&apos;s guide
            </Link>{" "}
            covers everything from sourcing to first use.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
          <h3 className="text-lg font-bold text-[#10B981] mb-2">
            Our Top Pick for Consistent Dosing
          </h3>
          <p className="text-sm text-[#0D1F14] mb-4">
            Black Lotus includes a 300 mg measuring scoop with their Pure Altai Resin, making
            accurate dosing straightforward from day one. At $36.99 for 30g with 85%+ fulvic acid
            and a verified COA, it&apos;s the highest-value option in our database for users who want to
            stay within research-studied ranges.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={AFFILIATE_RESIN}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
            >
              Shop Black Lotus Resin →
            </a>
            <a
              href={AFFILIATE_CAPS}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#D1EDD8] hover:border-emerald-400 text-[#0D1F14] text-sm font-semibold transition-colors"
            >
              Shop Capsules →
            </a>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#D1EDD8] hover:border-emerald-400 text-[#0D1F14] text-sm font-semibold transition-colors"
            >
              Compare All Brands
            </Link>
          </div>
        </div>
      </BlogPostLayout>
    </>
  );
}
