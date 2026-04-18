import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AFFILIATE_LINKS,
  PURE_HIMALAYAN_LINKS,
  NATURAL_SHILAJIT_LINKS,
} from "@/app/data/products";

// ── Affiliate helpers ──────────────────────────────────────────────────────
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=shilajit0a-20`;

// ── Brand data ─────────────────────────────────────────────────────────────
interface BrandData {
  name: string;
  shortName: string;
  tier: string;
  tierColor: string;
  fulvicAcid: string;
  pricePerGram: string;
  origin: string;
  coa: boolean;
  coaDetail: string;
  dbpVerified: boolean;
  heavyMetals: "pass" | "tested" | "none";
  gmpCertified: boolean;
  freeShipping: boolean;
  bestFor: string;
  purityScore: number;
  affiliateUrl: string;
  productLabel: string;
  price: string;
  reviewSlug?: string;
}

const BRANDS: Record<string, BrandData> = {
  "black-lotus": {
    name: "Black Lotus Shilajit",
    shortName: "Black Lotus",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    fulvicAcid: "85%+",
    pricePerGram: "$1.23/g",
    origin: "Altai Mountains, Siberia",
    coa: true,
    coaDetail: "Full-panel 3rd-party COA",
    dbpVerified: false,
    heavyMetals: "pass",
    gmpCertified: true,
    freeShipping: true,
    bestFor: "Highest verified FA + best value",
    purityScore: 10,
    affiliateUrl: AFFILIATE_LINKS.resin,
    productLabel: "Pure Altai Resin 30g — $36.99",
    price: "$36.99",
    reviewSlug: "black-lotus-shilajit-review",
  },
  "pure-himalayan": {
    name: "Pure Himalayan Shilajit",
    shortName: "Pure Himalayan",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    fulvicAcid: "60%",
    pricePerGram: "$1.33/g",
    origin: "Himalayas & Altai (dual-source)",
    coa: true,
    coaDetail: "ISO/IEC 17025 Accredited Lab",
    dbpVerified: false,
    heavyMetals: "pass",
    gmpCertified: true,
    freeShipping: true,
    bestFor: "ISO/IEC 17025 accreditation",
    purityScore: 9,
    affiliateUrl: PURE_HIMALAYAN_LINKS.resin,
    productLabel: "Authentic Shilajit Resin 30g — $39.99",
    price: "$39.99",
    reviewSlug: "pure-himalayan-shilajit-review",
  },
  "natural-shilajit": {
    name: "Natural Shilajit",
    shortName: "Natural Shilajit",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    fulvicAcid: "~70%",
    pricePerGram: "$2.45/g",
    origin: "UNESCO-protected Altai Mountains, Siberia",
    coa: true,
    coaDetail: "ICP-MS · LC-MS · FTIR verified",
    dbpVerified: true,
    heavyMetals: "pass",
    gmpCertified: true,
    freeShipping: false,
    bestFor: "DBP verification + triple-method COA",
    purityScore: 9,
    affiliateUrl: NATURAL_SHILAJIT_LINKS.resin20g,
    productLabel: "Altai Shilajit Resin 20g — $49.00",
    price: "$49.00",
    reviewSlug: undefined,
  },
  sayan: {
    name: "Sayan Health Shilajit",
    shortName: "Sayan",
    tier: "A",
    tierColor: "bg-emerald-500 text-white",
    fulvicAcid: "~32%",
    pricePerGram: "$1.33/g",
    origin: "Altai Mountains, Siberia",
    coa: true,
    coaDetail: "Micro Quality Lab (ISO Accredited)",
    dbpVerified: false,
    heavyMetals: "tested",
    gmpCertified: false,
    freeShipping: true,
    bestFor: "Budget Altai resin with ISO-accredited COA",
    purityScore: 7,
    affiliateUrl: amz("B072BY1WLK"),
    productLabel: "Altai Shilajit Resin 30g — $39.99",
    price: "$39.99",
    reviewSlug: undefined,
  },
  primavie: {
    name: "PrimaVie® (Nootropics Depot)",
    shortName: "PrimaVie",
    tier: "A",
    tierColor: "bg-emerald-500 text-white",
    fulvicAcid: "50% (standardized)",
    pricePerGram: "$1.50/g",
    origin: "Himalayas (India)",
    coa: true,
    coaDetail: "ISO/IEC Accredited, BSCG Certified",
    dbpVerified: false,
    heavyMetals: "pass",
    gmpCertified: true,
    freeShipping: true,
    bestFor: "Clinically-studied, BSCG-certified extract",
    purityScore: 8,
    affiliateUrl: amz("B078K1F7ZK"),
    productLabel: "PrimaVie® Capsules 250mg 90ct — $32.99",
    price: "$32.99",
    reviewSlug: undefined,
  },
};

// ── Matchup-specific editorial content ────────────────────────────────────
interface MatchupContent {
  title: string;
  metaDescription: string;
  intro: string;
  winnerSlug: string;
  verdict: string;
  whyAWins: string[];
  whyBWins: string[];
  buyA: string;
  buyB: string;
  faqs: { q: string; a: string }[];
}

const MATCHUP_CONTENT: Record<string, MatchupContent> = {
  "black-lotus-vs-pure-himalayan": {
    title: "Black Lotus vs Pure Himalayan Shilajit — Full Comparison (2026)",
    metaDescription:
      "Black Lotus vs Pure Himalayan Shilajit: head-to-head comparison of fulvic acid %, COA lab standards, price per gram, origin, and overall value. Which should you buy?",
    intro:
      "Black Lotus and Pure Himalayan Shilajit are the two highest-rated brands in our database — both hold S-tier rankings, both publish verified third-party COAs, and both come with free shipping. The differences are real but nuanced: fulvic acid percentage, lab accreditation type, and sourcing philosophy. This comparison breaks down every metric to help you choose.",
    winnerSlug: "black-lotus",
    verdict:
      "Black Lotus wins on fulvic acid potency (85%+ vs 60%) and price-per-gram ($1.23 vs $1.33). Pure Himalayan wins on lab accreditation specificity — their ISO/IEC 17025-accredited testing is the most rigorous internationally recognized standard available. Both are genuinely excellent; the right pick depends on what you prioritize.",
    whyAWins: [
      "85%+ verified fulvic acid vs 60% — meaningfully higher bioactive compound concentration",
      "$1.23/g vs $1.33/g — lower price per gram for higher documented purity",
      "30-day money-back guarantee with no-hassle return policy",
    ],
    whyBWins: [
      "ISO/IEC 17025 lab accreditation — the gold standard for laboratory testing worldwide",
      "Dual-source formula (Himalayan & Altai) offering broader mineral profile diversity",
      "Traditional water purification method aligned with Ayurvedic preparation principles",
    ],
    buyA:
      "Choose Black Lotus if you want the highest verified fulvic acid concentration and best price-per-gram among S-tier brands. If maximizing the bioactive compound that drives shilajit's effects is your primary criterion, Black Lotus is the clear choice.",
    buyB:
      "Choose Pure Himalayan if ISO/IEC 17025 lab accreditation matters to you — it's the most rigorous testing standard in our database. Also the right pick if you want a dual-source Himalayan + Altai product or prefer traditional water purification methods.",
    faqs: [
      {
        q: "Which has higher fulvic acid — Black Lotus or Pure Himalayan?",
        a: "Black Lotus reports 85%+ fulvic acid on their COA. Pure Himalayan reports 60%. Both are verified by third-party labs, but Black Lotus has a 25+ percentage point lead on this key quality metric.",
      },
      {
        q: "Is Pure Himalayan's ISO/IEC 17025 certification worth paying more for?",
        a: "ISO/IEC 17025 is the highest internationally recognized standard for laboratory testing competence. It means the lab itself has been independently audited — not just the product. If lab accreditation rigor is a priority, Pure Himalayan's testing standard is the strongest in our database. However, Black Lotus's full-panel COA still verifies the same core metrics (FA%, heavy metals, microbials) with strong third-party credentials.",
      },
      {
        q: "Can I try both before committing to one brand long-term?",
        a: "Both brands offer 30-day money-back guarantees. A practical approach: start with Black Lotus (lower price-per-gram, higher FA%) for 30 days, evaluate your results, then try Pure Himalayan if you want to compare the ISO-certified product. Many users settle on the brand whose sourcing and lab philosophy aligns best with their values.",
      },
    ],
  },
  "black-lotus-vs-natural-shilajit": {
    title: "Black Lotus vs Natural Shilajit — Full Comparison (2026)",
    metaDescription:
      "Black Lotus vs Natural Shilajit: compare fulvic acid %, DBP verification, price per gram, COA depth, and overall value. Both are S-tier Altai brands — here's how they differ.",
    intro:
      "Both Black Lotus and Natural Shilajit are S-tier Altai-sourced brands with verified COAs. The key differentiators: Natural Shilajit holds DBP (Dibenzo-α-pyrones) verification and uses a triple-method COA (ICP-MS, LC-MS, FTIR), while Black Lotus leads on fulvic acid percentage and price-per-gram. This comparison covers every metric to help you choose.",
    winnerSlug: "black-lotus",
    verdict:
      "Black Lotus wins on value — $1.23/g vs $2.45/g is a significant gap for a product that reports higher fulvic acid (85%+ vs ~70%). Natural Shilajit wins on verification depth: DBP testing and a triple-method COA represent the most comprehensive analysis in our database. If budget matters, Black Lotus is the stronger value. If you want the most thoroughly verified product available, Natural Shilajit earns that distinction.",
    whyAWins: [
      "85%+ fulvic acid vs ~70% — higher documented potency of the primary bioactive compound",
      "$1.23/g vs $2.45/g — nearly half the price per gram with higher FA documentation",
      "Free shipping included — Natural Shilajit charges for shipping on the flagship 20g product",
    ],
    whyBWins: [
      "DBP (Dibenzo-α-pyrones) verification — the only brand in our database to verify this secondary biomarker",
      "Triple-method COA (ICP-MS + LC-MS + FTIR) — the most comprehensive testing stack we've reviewed",
      "UNESCO-protected Altai source region — legally protected origin documentation",
    ],
    buyA:
      "Choose Black Lotus for the best verified potency-to-price ratio: 85%+ fulvic acid at $1.23/g with free shipping. If you're optimizing for cost-effectiveness and high documented FA%, this is the stronger everyday choice.",
    buyB:
      "Choose Natural Shilajit if you want the most thoroughly verified product available. DBP verification, a triple-method COA, and UNESCO-protected sourcing represent the deepest documentation stack in our database — worth the premium if verification depth is your priority.",
    faqs: [
      {
        q: "What is DBP verification and why does it matter?",
        a: "DBP stands for Dibenzo-α-pyrones (DBPs), a class of bioactive compounds found in authentic shilajit that are thought to work synergistically with fulvic acid. DBP verification confirms the presence of these secondary markers, providing additional evidence that the product is genuine shilajit — not a fulvic acid isolate or adulterated product. Natural Shilajit is the only brand in our database to publish DBP testing on their COA.",
      },
      {
        q: "Why is Natural Shilajit priced at $2.45/g when Black Lotus is $1.23/g?",
        a: "Natural Shilajit's higher price reflects their 20g jar format (vs Black Lotus's 30g), UNESCO-protected sourcing, triple-method COA (ICP-MS + LC-MS + FTIR), and DBP verification — all of which add real cost to their production and testing pipeline. Black Lotus achieves excellent value by offering a larger 30g jar at a lower per-gram price, with high FA% documentation. Neither is overpriced for what it delivers, but they represent different positions on the value spectrum.",
      },
      {
        q: "Both are Altai-sourced — is there a meaningful origin difference?",
        a: "Both brands source from the Altai Mountains in Siberia, but Natural Shilajit specifically sources from UNESCO-protected Altai regions, which offers an additional layer of legal origin protection and ecological credential. Black Lotus sources from the broader Altai mountain range. For most consumers, both represent genuine high-altitude Altai sourcing with comparable mineral profiles.",
      },
    ],
  },
  "natural-shilajit-vs-pure-himalayan": {
    title: "Natural Shilajit vs Pure Himalayan Shilajit — Full Comparison (2026)",
    metaDescription:
      "Natural Shilajit vs Pure Himalayan: compare DBP verification, ISO/IEC 17025 lab accreditation, origin, fulvic acid %, and price. Both are S-tier — here's the difference.",
    intro:
      "Natural Shilajit and Pure Himalayan Shilajit represent two different philosophies of verification excellence: Natural Shilajit leads on biomarker depth (DBP testing, triple-method COA), while Pure Himalayan leads on lab accreditation standard (ISO/IEC 17025). Both are S-tier brands with strong documentation. The sourcing differs too — Altai vs Himalayan.",
    winnerSlug: "natural-shilajit",
    verdict:
      "Natural Shilajit edges ahead on verification depth — DBP testing and a triple-method COA (ICP-MS + LC-MS + FTIR) represent the most comprehensive analysis in our database. Pure Himalayan counters with ISO/IEC 17025 lab accreditation, a higher fulvic acid claim (well, they report 60% vs NS's ~70%), and a lower price per gram ($1.33 vs $2.45). Both earn S-tier; the right pick depends on whether verification depth or price matters more.",
    whyAWins: [
      "DBP (Dibenzo-α-pyrones) verified — confirms the presence of shilajit's secondary biomarkers",
      "Triple-method COA (ICP-MS + LC-MS + FTIR) — the most comprehensive testing stack in our database",
      "~70% fulvic acid vs 60% — modestly higher documented FA%",
    ],
    whyBWins: [
      "ISO/IEC 17025 accreditation — the gold standard for testing lab certification",
      "$1.33/g vs $2.45/g — significantly lower price per gram",
      "Free shipping on all orders vs no free shipping on Natural Shilajit flagship",
    ],
    buyA:
      "Choose Natural Shilajit if verification depth is your priority: DBP testing and triple-method COA represent the most thorough analysis available. Also a strong choice if UNESCO-protected Altai sourcing matters to you.",
    buyB:
      "Choose Pure Himalayan if ISO/IEC 17025 lab accreditation is a priority and you want a lower price-per-gram. Their dual-source Himalayan + Altai formula and free shipping also give them a practical edge for everyday value.",
    faqs: [
      {
        q: "Which brand has the more rigorous lab testing?",
        a: "They're rigorous in different dimensions. Natural Shilajit tests more compounds — using ICP-MS, LC-MS, and FTIR methods plus DBP verification. Pure Himalayan uses a lab that holds ISO/IEC 17025 accreditation, meaning the lab itself has been audited to international standards. Both approaches represent genuine verification excellence; the choice depends on whether compound breadth or lab accreditation standard matters more to you.",
      },
      {
        q: "Does origin (Altai vs Himalayan) affect quality?",
        a: "The scientific consensus is that both Altai and Himalayan shilajit can be high quality — what matters more is altitude, rock type, and processing method than the specific mountain range. Natural Shilajit (Altai) and Pure Himalayan (Himalayan + Altai dual-source) both source from high-altitude regions. Mineral profiles can differ slightly between mountain ranges, but verified fulvic acid content and heavy metals testing are more reliable quality indicators than geography alone.",
      },
      {
        q: "What is a DBP test and does Pure Himalayan do it?",
        a: "DBP (Dibenzo-α-pyrones) testing checks for a class of secondary biomarkers specific to genuine shilajit. These compounds are structurally distinct from fulvic acid and help confirm the product is real shilajit rather than a fulvic acid isolate. Pure Himalayan does not publish DBP testing on their COA — this is one of Natural Shilajit's distinguishing verification advantages.",
      },
    ],
  },
  "black-lotus-vs-sayan": {
    title: "Black Lotus vs Sayan Shilajit — Full Comparison (2026)",
    metaDescription:
      "Black Lotus vs Sayan Shilajit: both are Altai-sourced with COAs, but they differ significantly on fulvic acid %, GMP certification, and purity score. Full comparison inside.",
    intro:
      "Black Lotus and Sayan are both Altai-sourced with third-party COAs — but they occupy meaningfully different positions in our database. Black Lotus is S-tier with 85%+ fulvic acid; Sayan is A-tier with ~32% fulvic acid. Sayan competes strongly on price-per-gram for bulk options. This comparison breaks down where each brand earns its place.",
    winnerSlug: "black-lotus",
    verdict:
      "Black Lotus wins decisively on fulvic acid percentage (85%+ vs ~32%) and purity score (10 vs 7). Sayan's COA is published and ISO-lab-accredited, which puts them well above unverified budget brands — but the 53-point gap in fulvic acid means Black Lotus delivers substantially more of the primary bioactive compound per gram. Sayan is best for budget-conscious buyers who still want a documented Altai product.",
    whyAWins: [
      "85%+ vs ~32% fulvic acid — more than double the documented bioactive compound concentration",
      "Purity score 10/10 vs 7/10 — composite COA + sourcing + FA% assessment",
      "GMP certified facility vs no GMP certification for Sayan",
    ],
    whyBWins: [
      "100g bulk option at $0.56/g — the lowest price per gram of any COA-verified Altai product",
      "ISO-accredited lab (Micro Quality Lab) — strong third-party credential for the price point",
      "Large Amazon review base (2,800+ reviews, 4.4★) — extensive real-world user validation",
    ],
    buyA:
      "Choose Black Lotus for the highest verified potency at a fair price. At $1.23/g with 85%+ documented fulvic acid, it outperforms Sayan on every quality metric while remaining competitively priced.",
    buyB:
      "Choose Sayan if you're buying in bulk and budget is a primary constraint. Their 100g jar at $0.56/g is the best price-per-gram of any COA-documented Altai product in our database. Acceptable for those who want a basic verified product without S-tier specifications.",
    faqs: [
      {
        q: "Is Sayan's 32% fulvic acid enough to be effective?",
        a: "32% falls below what we consider premium grade (60%+) but is above the threshold where documented effects tend to drop off significantly. Most high-quality Ayurvedic preparations work with 40–60% FA. Sayan is adequate for general supplementation but delivers substantially less of the primary bioactive compound compared to Black Lotus's 85%+. If potency is the goal, Black Lotus is the clear upgrade.",
      },
      {
        q: "Does Sayan have GMP certification?",
        a: "No. Sayan does not list GMP certification in our database, which is one reason they're rated A-tier vs S-tier. GMP (Good Manufacturing Practices) certification requires facility audits and quality control standards — its absence doesn't make a product dangerous, but it removes one layer of verified manufacturing oversight.",
      },
      {
        q: "Why do both Black Lotus and Sayan cost $1.33/g for the 30g jar?",
        a: "Sayan's 30g jar is priced at $39.99 which works out to $1.33/g — the same per-gram price as Black Lotus's 30g option (though Black Lotus's flagship is the slightly smaller 30g at $36.99 = $1.23/g). At the same price point, Black Lotus's 85%+ fulvic acid vs Sayan's 32% represents a major quality gap. The price parity makes Sayan's 30g option difficult to recommend against Black Lotus.",
      },
    ],
  },
  "natural-shilajit-vs-sayan": {
    title: "Natural Shilajit vs Sayan Shilajit — Full Comparison (2026)",
    metaDescription:
      "Natural Shilajit vs Sayan: both are Altai-sourced COA-verified brands, but they differ on DBP verification, fulvic acid %, price, and overall tier. Full comparison.",
    intro:
      "Natural Shilajit and Sayan are both Altai-sourced products with published COAs — but they sit at very different points on the quality spectrum. Natural Shilajit is S-tier with DBP verification and triple-method testing; Sayan is A-tier with a solid ISO-accredited COA but lower fulvic acid and no GMP. This comparison covers everything.",
    winnerSlug: "natural-shilajit",
    verdict:
      "Natural Shilajit wins on every quality metric: higher fulvic acid (~70% vs ~32%), DBP verification, GMP certification, and deeper COA methodology. Sayan wins on price — their bulk 100g option is among the cheapest documented Altai products available. For buyers who want maximum quality documentation, Natural Shilajit is the clear choice. For budget-first buyers, Sayan remains a credible option.",
    whyAWins: [
      "~70% vs ~32% fulvic acid — more than double the documented bioactive concentration",
      "DBP-verified — confirms presence of shilajit's secondary biomarkers (Dibenzo-α-pyrones)",
      "Triple-method COA (ICP-MS + LC-MS + FTIR) vs Sayan's standard single-method analysis",
    ],
    whyBWins: [
      "100g bulk jar at $0.56/g — dramatically cheaper per gram for high-volume buyers",
      "2,800+ Amazon reviews at 4.4★ — one of the strongest user validation sets in our database",
      "ISO-accredited lab (Micro Quality Lab) — still a credible third-party verification credential",
    ],
    buyA:
      "Choose Natural Shilajit if quality depth is the priority: DBP verification, triple-method COA, and GMP certification represent the most thorough documentation of any Altai-sourced product at this tier. Worth the premium price for serious buyers.",
    buyB:
      "Choose Sayan if you're buying in bulk and working with a strict budget. Their 100g option at $0.56/g is the most accessible entry point for documented Altai shilajit. A reasonable choice for those who want a basic COA-verified product without S-tier specifications.",
    faqs: [
      {
        q: "Are both brands really sourced from the same Altai Mountains?",
        a: "Yes, both source from the Altai mountain range in Siberia. Natural Shilajit specifically emphasizes UNESCO-protected Altai regions; Sayan sources from Altai at 14,500–16,000 ft altitude. The mineral profiles can vary within the Altai range, which is why COA data matters more than general geographic claims.",
      },
      {
        q: "Does Natural Shilajit's higher price per gram reflect better quality?",
        a: "In this case, yes — the $2.45/g vs $0.56/g (bulk) price gap corresponds to real differences: DBP verification, triple-method COA, GMP facility certification, and higher fulvic acid %. These aren't cosmetic premiums; they represent measurable additional testing and manufacturing standards. Whether those differences justify the price difference depends on how much verification depth matters to you.",
      },
      {
        q: "Is Sayan's fulvic acid low enough to be a concern?",
        a: "32% is at the lower end of acceptable — below what we consider premium (60%+) but not so low that the product is inert. It falls into 'adequate' territory. If you're taking shilajit for a specific outcome and dosing precisely, the lower FA concentration means you need to account for that vs higher-FA products. For casual supplementation, Sayan's COA-verified Altai product is still a significant step above unverified budget brands.",
      },
    ],
  },
  "black-lotus-vs-primavie": {
    title: "Black Lotus vs PrimaVie® Shilajit — Full Comparison (2026)",
    metaDescription:
      "Black Lotus vs PrimaVie® shilajit: resin vs standardized capsule extract, fulvic acid %, BSCG certification, price, and which form factor is right for you. Full comparison.",
    intro:
      "Black Lotus (pure resin, 85%+ FA) and PrimaVie® (standardized capsule extract, 50% FA, BSCG certified) represent fundamentally different approaches to shilajit supplementation. Black Lotus is a raw verified resin; PrimaVie® is a patented, clinically-researched standardized extract used in multiple brands. Understanding the difference between these formats is key to choosing correctly.",
    winnerSlug: "black-lotus",
    verdict:
      "Black Lotus wins on fulvic acid concentration (85%+ vs 50%), sourcing transparency, and price-per-gram ($1.23 vs $1.50). PrimaVie® wins on clinical research citation count and BSCG (Banned Substance Control Group) certification — a credential relevant for athletes subject to drug testing. Both have legitimate third-party verification, but they serve different use cases.",
    whyAWins: [
      "85%+ vs 50% fulvic acid — 35 percentage points higher documented bioactive concentration",
      "$1.23/g vs $1.50/g — lower price per gram with higher documented purity",
      "Full-spectrum resin vs standardized extract — broader bioactive compound profile retained",
    ],
    whyBWins: [
      "BSCG (Banned Substance Control Group) certified — critical credential for drug-tested athletes",
      "Patented PrimaVie® extract with clinical study citations backing specific health claims",
      "Capsule format — more convenient for travel and consistent daily dosing without measuring",
    ],
    buyA:
      "Choose Black Lotus if you want the highest verified fulvic acid content in a full-spectrum resin format. Better value-per-gram and more comprehensive bioactive profile. The right choice for most general supplementation purposes.",
    buyB:
      "Choose PrimaVie® if you're a drug-tested athlete (BSCG certification matters), or if you specifically want a patented, clinically-studied extract in capsule form. Also worth considering if you prioritize convenience over raw potency.",
    faqs: [
      {
        q: "What is BSCG certification and why does it matter?",
        a: "BSCG (Banned Substance Control Group) is an independent third-party organization that certifies supplements are free from substances banned by WADA, NFL, MLB, NBA, and other sports organizations. It's the most stringent sports-certification credential for supplement quality control. If you compete in drug-tested sports, BSCG certification is a meaningful credential. For general consumers, it provides an additional layer of purity verification but isn't required.",
      },
      {
        q: "Is a standardized extract better or worse than raw resin?",
        a: "Neither is universally 'better' — they serve different goals. Standardized extracts (like PrimaVie®) deliver a consistent, measured dose of specific compounds and come with clinical research backing. Raw resins (like Black Lotus) retain the full spectrum of bioactive compounds including trace minerals, DBPs, and humic substances beyond just fulvic acid. Traditional use and many experts prefer full-spectrum products; clinical researchers prefer standardized extracts for measurability.",
      },
      {
        q: "Does the form factor (resin vs capsule) affect absorption?",
        a: "Resin dissolved directly in warm water is generally considered the most bioavailable format — the fulvic acid goes directly into solution without capsule dissolution time. Capsules add a digestion step before absorption begins. However, the practical difference for most users is modest, and capsule convenience often supports better adherence. Both formats work; the absorption advantage of resin is real but not dramatic for most users.",
      },
    ],
  },
  "pure-himalayan-vs-primavie": {
    title: "Pure Himalayan vs PrimaVie® Shilajit — Full Comparison (2026)",
    metaDescription:
      "Pure Himalayan vs PrimaVie® shilajit: ISO/IEC 17025 vs BSCG certification, resin vs capsules, fulvic acid %, price per gram, and which brand is right for you.",
    intro:
      "Pure Himalayan Shilajit (ISO/IEC 17025 accredited lab, 60% FA resin) and PrimaVie® (BSCG-certified standardized extract, 50% FA capsules) are both highly credentialed but appeal to different buyer profiles. This comparison covers their verification approaches, form factors, pricing, and who should choose which.",
    winnerSlug: "pure-himalayan",
    verdict:
      "Pure Himalayan wins on fulvic acid percentage (60% vs 50%), lab accreditation standard (ISO/IEC 17025 vs ISO/IEC accredited — similar tier), and price-per-gram ($1.33 vs $1.50). PrimaVie® wins on form-factor convenience, BSCG sports certification, and extensive clinical study backing. For general supplementation, Pure Himalayan has the edge; for drug-tested athletes or capsule-preferred users, PrimaVie® is the choice.",
    whyAWins: [
      "ISO/IEC 17025 accredited lab — gold standard for laboratory testing competence",
      "60% vs 50% fulvic acid — higher documented FA in a full-spectrum resin",
      "$1.33/g vs $1.50/g — lower price per gram with comparable or better quality documentation",
    ],
    whyBWins: [
      "BSCG certification — essential for competitive athletes in drug-tested sports",
      "Patented extract with clinical research citations — the most studied shilajit format available",
      "Capsule convenience — no measuring, no mess, consistent dosing anywhere",
    ],
    buyA:
      "Choose Pure Himalayan for the better-documented resin at a lower price per gram. ISO/IEC 17025 accreditation + 60% FA + free shipping makes this a strong all-around choice for everyday supplementation.",
    buyB:
      "Choose PrimaVie® if you're a competitive athlete who needs BSCG certification, or if you strongly prefer capsule form for convenience. Also a reasonable choice if you want a clinically-studied standardized extract over a full-spectrum raw resin.",
    faqs: [
      {
        q: "How do ISO/IEC 17025 and BSCG accreditation differ?",
        a: "ISO/IEC 17025 is an international standard for testing laboratory competence — it means the lab conducting the tests has been independently audited for accuracy, methodology, and equipment calibration. BSCG (Banned Substance Control Group) certification is a product-level certification specifically focused on screening for sports-banned substances. ISO/IEC 17025 is broader (applies to any lab test); BSCG is more specific (relevant for athletes). Both represent meaningful third-party oversight.",
      },
      {
        q: "Is 60% vs 50% fulvic acid a meaningful difference?",
        a: "A 10-percentage-point difference in fulvic acid is meaningful for those optimizing potency, though both products fall in the 'good-to-premium' range. The practical impact depends on dosing: at 300mg serving, the difference is 30mg more fulvic acid with Pure Himalayan — roughly 10% more per dose. For most users, both will deliver noticeable effects; power users optimizing specifically for FA may notice the difference over time.",
      },
      {
        q: "Which brand is better for women specifically?",
        a: "Both brands are suitable for women — neither contains ingredients that are contraindicated for women, and both support general energy, cognitive function, and mineral supplementation. Pure Himalayan's resin format and higher FA may be preferred for energy optimization; PrimaVie® capsules are often cited in women's health contexts because of the standardized extract's cleaner dosing profile. See our dedicated guide: Best Shilajit for Women for a more detailed breakdown.",
      },
    ],
  },
};

// ── Static params ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(MATCHUP_CONTENT).map((matchup) => ({ matchup }));
}

// ── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ matchup: string }>;
}): Promise<Metadata> {
  const { matchup } = await params;
  const content = MATCHUP_CONTENT[matchup];
  if (!content) return { title: "Comparison Not Found" };
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: `https://shilajitprice.com/compare/${matchup}` },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `https://shilajitprice.com/compare/${matchup}`,
      type: "article",
    },
  };
}

// ── Helpers ────────────────────────────────────────────────────────────────
function CheckIcon({ pass }: { pass: boolean }) {
  return pass ? (
    <span className="text-[#10B981] font-bold">✓</span>
  ) : (
    <span className="text-red-500 font-bold">✗</span>
  );
}

function HMBadge({ status }: { status: "pass" | "tested" | "none" }) {
  if (status === "pass") return <span className="text-[#10B981] font-bold">All Pass</span>;
  if (status === "tested") return <span className="text-amber-600 font-bold">Tested</span>;
  return <span className="text-red-500 font-bold">Not tested</span>;
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ matchup: string }>;
}) {
  const { matchup } = await params;
  const content = MATCHUP_CONTENT[matchup];
  if (!content) notFound();

  // Parse brand slugs from matchup string (e.g. "black-lotus-vs-pure-himalayan")
  const vsIndex = matchup.indexOf("-vs-");
  if (vsIndex === -1) notFound();
  const slugA = matchup.slice(0, vsIndex);
  const slugB = matchup.slice(vsIndex + 4);
  const brandA = BRANDS[slugA];
  const brandB = BRANDS[slugB];
  if (!brandA || !brandB) notFound();

  const winner = content.winnerSlug === slugA ? brandA : brandB;
  const loser = content.winnerSlug === slugA ? brandB : brandA;

  // Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.metaDescription,
    url: `https://shilajitprice.com/compare/${matchup}`,
    datePublished: "2026-04-17",
    dateModified: "2026-04-17",
    author: { "@type": "Organization", name: "ShilajitPrice.com" },
    publisher: {
      "@type": "Organization",
      name: "ShilajitPrice.com",
      url: "https://shilajitprice.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shilajitprice.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://shilajitprice.com/compare" },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: `https://shilajitprice.com/compare/${matchup}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const TABLE_ROWS: {
    label: string;
    a: ReactNode;
    b: ReactNode;
    winnerSlug?: string;
  }[] = [
    {
      label: "Tier",
      a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${brandA.tierColor}`}>{brandA.tier}</span>,
      b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${brandB.tierColor}`}>{brandB.tier}</span>,
    },
    {
      label: "Fulvic Acid",
      a: <strong className="text-[#0D1F14]">{brandA.fulvicAcid}</strong>,
      b: <strong className="text-[#0D1F14]">{brandB.fulvicAcid}</strong>,
    },
    {
      label: "Price / Gram",
      a: brandA.pricePerGram,
      b: brandB.pricePerGram,
    },
    {
      label: "Origin",
      a: brandA.origin,
      b: brandB.origin,
    },
    {
      label: "COA",
      a: (
        <span>
          <CheckIcon pass={brandA.coa} /> {brandA.coaDetail}
        </span>
      ),
      b: (
        <span>
          <CheckIcon pass={brandB.coa} /> {brandB.coaDetail}
        </span>
      ),
    },
    {
      label: "DBP Verified",
      a: <CheckIcon pass={brandA.dbpVerified} />,
      b: <CheckIcon pass={brandB.dbpVerified} />,
    },
    {
      label: "Heavy Metals",
      a: <HMBadge status={brandA.heavyMetals} />,
      b: <HMBadge status={brandB.heavyMetals} />,
    },
    {
      label: "GMP Certified",
      a: <CheckIcon pass={brandA.gmpCertified} />,
      b: <CheckIcon pass={brandB.gmpCertified} />,
    },
    {
      label: "Free Shipping",
      a: <CheckIcon pass={brandA.freeShipping} />,
      b: <CheckIcon pass={brandB.freeShipping} />,
    },
    {
      label: "Best For",
      a: <span className="text-[#4A6358]">{brandA.bestFor}</span>,
      b: <span className="text-[#4A6358]">{brandB.bestFor}</span>,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#F5F9F6]">
        {/* ── Header ── */}
        <div className="bg-[#0D1F14] text-white">
          <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <nav className="text-xs text-[#9EC9AD] mb-4 flex items-center gap-1.5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
              <span>/</span>
              <span className="text-white">{brandA.shortName} vs {brandB.shortName}</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              {brandA.shortName} vs {brandB.shortName}
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              {content.intro}
            </p>

            {/* Winner badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">{winner.shortName}</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* ── Side-by-side CTA cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: brandA, slug: slugA },
              { brand: brandB, slug: slugB },
            ].map(({ brand, slug }) => (
              <div
                key={slug}
                className={`rounded-2xl border-2 p-5 bg-white flex flex-col gap-3 ${
                  slug === content.winnerSlug
                    ? "border-[#10B981]"
                    : "border-[#D1EDD8]"
                }`}
              >
                {slug === content.winnerSlug && (
                  <div className="text-xs font-bold text-[#10B981] uppercase tracking-widest">
                    ★ Our Pick
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded flex items-center justify-center font-black text-xs ${brand.tierColor}`}>
                    {brand.tier}
                  </span>
                  <span className="font-bold text-[#0D1F14] text-sm">{brand.name}</span>
                </div>
                <div className="text-xs text-[#4A6358]">{brand.productLabel}</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#F0FAF4] text-[#0D1F14] text-xs px-2 py-0.5 rounded-full font-medium">
                    {brand.fulvicAcid} FA
                  </span>
                  <span className="bg-[#F0FAF4] text-[#0D1F14] text-xs px-2 py-0.5 rounded-full font-medium">
                    {brand.pricePerGram}
                  </span>
                  {brand.freeShipping && (
                    <span className="bg-[#F0FAF4] text-[#10B981] text-xs px-2 py-0.5 rounded-full font-medium">
                      Free shipping
                    </span>
                  )}
                </div>
                <a
                  href={brand.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`mt-auto w-full text-center text-sm font-bold py-2.5 rounded-xl transition-colors ${
                    slug === content.winnerSlug
                      ? "bg-[#10B981] text-white hover:bg-[#0DA872]"
                      : "bg-[#0D1F14] text-white hover:bg-[#182B1F]"
                  }`}
                >
                  Shop {brand.shortName} →
                </a>
                {brand.reviewSlug && (
                  <Link
                    href={`/blog/${brand.reviewSlug}`}
                    className="text-center text-xs text-[#10B981] hover:underline"
                  >
                    Read full {brand.shortName} review →
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* ── Comparison table ── */}
          <section>
            <h2 className="text-xl font-black text-[#0D1F14] mb-4">
              Head-to-head comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[#D1EDD8] bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D1EDD8]">
                    <th className="text-left px-4 py-3 text-[#4A6358] font-semibold w-1/3">Metric</th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">
                      {slugA === content.winnerSlug && (
                        <span className="text-[#10B981] text-xs mr-1">★</span>
                      )}
                      {brandA.shortName}
                    </th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">
                      {slugB === content.winnerSlug && (
                        <span className="text-[#10B981] text-xs mr-1">★</span>
                      )}
                      {brandB.shortName}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-[#F0FAF4] ${i % 2 === 0 ? "bg-white" : "bg-[#F9FDFB]"}`}
                    >
                      <td className="px-4 py-3 text-[#4A6358] font-medium">{row.label}</td>
                      <td className="px-4 py-3 text-center text-[#0D1F14]">{row.a}</td>
                      <td className="px-4 py-3 text-center text-[#0D1F14]">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Verdict ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6">
            <h2 className="text-xl font-black text-[#0D1F14] mb-3">The verdict</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">{content.verdict}</p>
          </section>

          {/* ── Why A wins / Why B wins ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">
                Why {brandA.shortName} wins
              </h3>
              <ul className="space-y-2">
                {content.whyAWins.map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#0D1F14] leading-relaxed">
                    <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">
                Why {brandB.shortName} wins
              </h3>
              <ul className="space-y-2">
                {content.whyBWins.map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#0D1F14] leading-relaxed">
                    <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Who should buy each ── */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#0D1F14]">Who should buy which</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">
                  Buy {brandA.shortName} if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">{content.buyA}</p>
                <a
                  href={brandA.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors"
                >
                  Shop {brandA.shortName} →
                </a>
              </div>
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">
                  Buy {brandB.shortName} if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">{content.buyB}</p>
                <a
                  href={brandB.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors"
                >
                  Shop {brandB.shortName} →
                </a>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-xl font-black text-[#0D1F14] mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {content.faqs.map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
                  <div className="font-bold text-[#0D1F14] text-sm mb-2">{q}</div>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Quiz CTA ── */}
          <div className="bg-[#E8F5EC] border-2 border-[#9EC9AD] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="text-3xl shrink-0">🎯</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-black text-[#0D1F14] text-base mb-1">
                Still not sure which is right for you?
              </h3>
              <p className="text-sm text-[#4A6358]">
                Take our 60-second quiz and get a personalized recommendation based on your goals, budget, and experience level.
              </p>
            </div>
            <Link
              href="/quiz"
              className="shrink-0 bg-[#182B1F] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#10B981] transition-colors"
            >
              Take the Quiz →
            </Link>
          </div>

          {/* ── Internal links ── */}
          <section className="text-sm text-[#4A6358]">
            <p className="font-semibold text-[#0D1F14] mb-2">Related pages</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare" className="text-[#10B981] hover:underline">
                Full brand comparison table →
              </Link>
              <Link href="/methodology" className="text-[#10B981] hover:underline">
                How we score brands →
              </Link>
              <Link href="/lab-data" className="text-[#10B981] hover:underline">
                COA lab data →
              </Link>
              {brandA.reviewSlug && (
                <Link href={`/blog/${brandA.reviewSlug}`} className="text-[#10B981] hover:underline">
                  {brandA.shortName} full review →
                </Link>
              )}
              {brandB.reviewSlug && (
                <Link href={`/blog/${brandB.reviewSlug}`} className="text-[#10B981] hover:underline">
                  {brandB.shortName} full review →
                </Link>
              )}
            </div>
          </section>

          {/* ── FTC Disclosure ── */}
          <div className="text-xs text-[#4A6358] bg-white rounded-2xl border border-[#D1EDD8] p-4 leading-relaxed">
            <strong className="text-[#0D1F14]">Affiliate disclosure:</strong> ShilajitPrice.com earns a commission when you purchase through links on this page at no extra cost to you. Our editorial ratings are independent of affiliate relationships — brands are ranked on documented quality metrics only. See our{" "}
            <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclaimer</Link>.
          </div>
        </div>
      </main>
    </>
  );
}
