import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lotus Blooming Herbs vs Natural Shilajit: Ayurvedic vs Altai — Full Comparison (2026)",
  description:
    "Lotus Blooming Herbs vs Natural Shilajit: Himalayan Ayurvedic resin vs UNESCO Altai DBP-verified resin. Compare sourcing, tier, COA labs, heavy metals data, and which is right for you.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/lotus-blooming-vs-natural-shilajit" },
  openGraph: {
    title: "Lotus Blooming Herbs vs Natural Shilajit: Ayurvedic vs Altai — Full Comparison (2026)",
    description:
      "Lotus Blooming Herbs vs Natural Shilajit: Himalayan Ayurvedic resin vs UNESCO Altai DBP-verified resin. Compare sourcing, tier, COA labs, heavy metals data, and which is right for you.",
    url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-natural-shilajit",
    type: "article",
  },
};

// ── Schema ─────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lotus Blooming Herbs vs Natural Shilajit: Ayurvedic vs Altai — Full Comparison (2026)",
  description:
    "Lotus Blooming Herbs vs Natural Shilajit: Himalayan Ayurvedic resin vs UNESCO Altai DBP-verified resin. Compare sourcing, tier, COA labs, heavy metals data, and which is right for you.",
  url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-natural-shilajit",
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
  author: { "@type": "Person", name: "Adrian Voss", url: "https://www.shilajitprice.com/about" },
  publisher: { "@type": "Organization", name: "ShilajitPrice.com", url: "https://www.shilajitprice.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shilajitprice.com/" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.shilajitprice.com/compare" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lotus Blooming Herbs vs Natural Shilajit",
      item: "https://www.shilajitprice.com/compare/lotus-blooming-vs-natural-shilajit",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Himalayan and UNESCO Altai shilajit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Himalayan shilajit — as sourced by Lotus Blooming Herbs — comes from the high-altitude ranges of the Himalayas (16,000–18,000ft in LBH's case) and has the deepest documentation in the Ayurvedic pharmacopoeia, with thousands of years of traditional use. UNESCO Altai shilajit — as sourced by Natural Shilajit — comes from the Altai Mountains in Russia, a UNESCO World Heritage site known for exceptional biodiversity and mineral richness. The two ecosystems produce shilajit with overlapping but not identical mineral and bioactive compound profiles. Neither is categorically superior; the choice reflects whether you prioritize the Ayurvedic tradition rooted in Himalayan sourcing or the scientific documentation associated with Altai resin, including DBP verification and multi-method lab testing.",
      },
    },
    {
      "@type": "Question",
      name: "Natural Shilajit is DBP-verified — why doesn't Lotus Blooming Herbs have DBP verification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DBP (dibenzo-alpha-pyrones) verification is a relatively recent analytical method used to confirm the authenticity of shilajit as a distinct biological material — DBPs are considered a marker compound not present in counterfeit or adulterated products. Natural Shilajit holds DBP verification through DaaneLabs and Harken Research using ICP-MS, LC-MS, and FTIR methods. Lotus Blooming Herbs' quality verification approach is rooted in the Ayurvedic practitioner ownership model — sourcing at 16,000–18,000ft Himalayan altitude, A2LA ISO 17025 accredited lab COA (Certified Laboratories, Cert 3034.01), and per-serving heavy metal reporting. DBP verification adds an important authenticity layer; its absence from LBH's testing panel does not mean the product is inauthentic, but it does mean LBH cannot document authenticity through that specific modern analytical marker.",
      },
    },
    {
      "@type": "Question",
      name: "Natural Shilajit's heavy metals are higher in ppm — is that a safety concern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Natural Shilajit's published heavy metals data (Lead 4.714 ppm, Arsenic 3.757 ppm, Cadmium 0.477 ppm, Mercury 0.029 ppm in resin) are reported in ppm by weight — a different measurement standard than Lotus Blooming Herbs' per-serving microgram reporting. Both formats represent all-pass results against established safety thresholds. Ppm-by-weight figures tend to look larger numerically because they measure concentration in the raw material rather than the actual amount consumed in a typical serving. Natural Shilajit's values pass California Prop 65 and standard supplement safety thresholds. Lotus Blooming Herbs' Lead 0.040 mcg per serving is exceptionally low on a per-serving basis. Both brands meet safety standards; LBH's per-serving measurements are simply more consumer-transparent and numerically smaller.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for strict purity buyers: Lotus Blooming Herbs or Natural Shilajit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The answer depends on how you define purity. For per-serving heavy metal minimization and per-serving measurement transparency, Lotus Blooming Herbs leads — their Lead 0.040 mcg per serving is one of the lowest documented figures in our database. For scientific documentation depth and authenticity verification, Natural Shilajit leads — their triple-method testing panel (ICP-MS + LC-MS + FTIR) across two independent labs (DaaneLabs + Harken Research) with DBP verification is the most comprehensive analytical documentation of any brand in our database. Strict safety-focused buyers will find comfort in LBH's Himalayan provenance and per-serving metal readings; strict authenticity-focused buyers will find Natural Shilajit's DBP verification and multi-method testing panel uniquely reassuring.",
      },
    },
  ],
};

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

// ── Brand data ─────────────────────────────────────────────────────────────

const LBH = {
  name: "Lotus Blooming Herbs",
  shortName: "Lotus Blooming Herbs",
  tier: "S",
  tierColor: "bg-amber-400 text-amber-900",
  fulvicAcid: "Not disclosed",
  pricePerGram: "$6.00/g",
  origin: "Himalayan Mountains, 16,000–18,000ft",
  coa: true,
  coaDetail: "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01) — Batch BHC4429/2024057703, Aug 2025",
  dbpVerified: false,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: false,
  bestFor: "Ayurvedic practitioner-owned, GMP Certified, 16,000–18,000ft Himalayan sourcing, A2LA ISO 17025",
  purityScore: 10,
  affiliateUrl: "https://lotusbloomingherbs.com/products/authentic-shilajit?variant=1734489987&aff=380",
  productLabel: "Authentic Shilajit™ 10g — $59.99",
  price: "$59.99",
  reviewSlug: "lotus-blooming-herbs-shilajit-review",
};

const NATURAL_SHILAJIT = {
  name: "Natural Shilajit",
  shortName: "Natural Shilajit",
  tier: "A",
  tierColor: "bg-emerald-500 text-white",
  fulvicAcid: "Not disclosed",
  pricePerGram: "$2.45/g (20g)",
  origin: "UNESCO Altai Mountains",
  coa: true,
  coaDetail: "DaaneLabs + Harken Research, LA — Nov 2024",
  dbpVerified: true,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: false,
  bestFor: "DBP verification, UNESCO Altai source, ICP-MS + LC-MS + FTIR testing",
  purityScore: 9,
  affiliateUrl: "https://naturalshilajit.com/?rfsn=9069392.c841fa",
  productLabel: "Natural Shilajit Resin 20g — $48.95",
  price: "$48.95",
  reviewSlug: "natural-shilajit-review",
};

// ── Comparison table rows ──────────────────────────────────────────────────

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  {
    label: "Tier",
    a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${LBH.tierColor}`}>{LBH.tier}</span>,
    b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${NATURAL_SHILAJIT.tierColor}`}>{NATURAL_SHILAJIT.tier}</span>,
  },
  {
    label: "Fulvic Acid",
    a: <strong className="text-[#0D1F14]">{LBH.fulvicAcid}</strong>,
    b: <strong className="text-[#0D1F14]">{NATURAL_SHILAJIT.fulvicAcid}</strong>,
  },
  {
    label: "Price / Gram",
    a: LBH.pricePerGram,
    b: NATURAL_SHILAJIT.pricePerGram,
  },
  {
    label: "Origin",
    a: LBH.origin,
    b: NATURAL_SHILAJIT.origin,
  },
  {
    label: "COA",
    a: <span><CheckIcon pass={LBH.coa} /> {LBH.coaDetail}</span>,
    b: <span><CheckIcon pass={NATURAL_SHILAJIT.coa} /> {NATURAL_SHILAJIT.coaDetail}</span>,
  },
  {
    label: "DBP Verified",
    a: <CheckIcon pass={LBH.dbpVerified} />,
    b: <span className="text-[#10B981] font-bold">✓ Verified</span>,
  },
  {
    label: "Heavy Metals",
    a: <HMBadge status={LBH.heavyMetals} />,
    b: <HMBadge status={NATURAL_SHILAJIT.heavyMetals} />,
  },
  {
    label: "GMP Certified",
    a: <CheckIcon pass={LBH.gmpCertified} />,
    b: <CheckIcon pass={NATURAL_SHILAJIT.gmpCertified} />,
  },
  {
    label: "Free Shipping",
    a: <CheckIcon pass={LBH.freeShipping} />,
    b: <CheckIcon pass={NATURAL_SHILAJIT.freeShipping} />,
  },
  {
    label: "Best For",
    a: <span className="text-[#4A6358]">{LBH.bestFor}</span>,
    b: <span className="text-[#4A6358]">{NATURAL_SHILAJIT.bestFor}</span>,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function LotusBloomingVsNaturalShilajitPage() {
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
            <nav className="text-xs text-[#9EC9AD] mb-4 flex items-center gap-1.5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
              <span>/</span>
              <span className="text-white">Lotus Blooming Herbs vs Natural Shilajit</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Lotus Blooming Herbs vs Natural Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              This comparison pits Himalayan Ayurvedic tradition against comprehensive Altai scientific documentation. Lotus Blooming Herbs is an S-tier Ayurvedic practitioner-owned brand sourcing from 16,000–18,000ft in the Himalayan Mountains, with an A2LA ISO 17025 accredited COA from Certified Laboratories Burbank and Lead at just 0.040 mcg per serving — among the lowest in our database. Natural Shilajit is an A-tier brand sourcing from the UNESCO-recognized Altai Mountains, holding DBP verification, and publishing a comprehensive triple-method testing panel (ICP-MS + LC-MS + FTIR) across two independent labs (DaaneLabs + Harken Research, November 2024). The core question: traditional Himalayan pedigree and per-serving heavy metal purity versus the most comprehensively documented Altai scientific testing in our database.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Lotus Blooming Herbs</span>
              <span className="text-[#9EC9AD] text-xs">(S-tier vs A-tier, Himalayan, ISO 17025, Ayurvedic ownership)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* ── Side-by-side CTA cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: LBH, isWinner: true },
              { brand: NATURAL_SHILAJIT, isWinner: false },
            ].map(({ brand, isWinner }) => (
              <div
                key={brand.shortName}
                className={`rounded-2xl border-2 p-5 bg-white flex flex-col gap-3 ${
                  isWinner ? "border-[#10B981]" : "border-[#D1EDD8]"
                }`}
              >
                {isWinner && (
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
                    isWinner
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

          {/* ── Brand overview: Lotus Blooming Herbs ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Lotus Blooming Herbs: Himalayan Tradition Meets Modern Lab Standards</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs is an Ayurvedic practitioner-owned brand credited as the first to introduce pure resin shilajit to the Western market, holding memberships in NAMA, AHPA, and the Conservation Alliance. Their raw material is sourced from the <strong>Himalayan Mountains at 16,000–18,000 feet</strong> — among the highest documented sourcing altitudes in our database — and is processed according to traditional Ayurvedic methods. The Himalayan source places this product squarely within the classical shilajit tradition that underpins thousands of years of documented use in Ayurvedic medicine.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Third-party testing is conducted by <strong>Certified Laboratories in Burbank, CA</strong>, which holds A2LA ISO 17025 accreditation (Certificate 3034.01). Their published COA for Batch BHC4429/2024057703 (August 2025) documents heavy metals at the per-serving microgram level: <strong>Lead 0.040 mcg · Arsenic 0.091 mcg · Cadmium 0.004 mcg · Mercury 0.001 mcg</strong>. Compared to Natural Shilajit's ppm-by-weight figures (Lead 4.714 ppm), LBH's per-serving microgram measurements are measured on a more consumer-relevant basis — and at 0.040 mcg/serving, their lead figure is one of the lowest we have documented across all brands.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs earns an <strong>S-tier rating</strong> in our scoring system, placing it one tier above Natural Shilajit's A-tier. This gap reflects the combination of Himalayan sourcing altitude, Ayurvedic practitioner ownership, GMP certification, and A2LA ISO 17025 accredited lab verification. The brand does not hold DBP verification or disclose a fulvic acid percentage — but the specific quality dimensions it does document are among the strongest in our database. At <strong>$59.99 for 10g ($6.00/g)</strong>, it is the most expensive brand in this comparison.
            </p>
          </section>

          {/* ── Brand overview: Natural Shilajit ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Natural Shilajit: The Most Comprehensively Lab-Tested Altai Resin</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Natural Shilajit sources from the <strong>UNESCO Altai Mountains</strong> — a World Heritage site in Russia recognized for exceptional biodiversity and geological significance. Their testing protocol is the most analytically comprehensive in our database: <strong>DaaneLabs and Harken Research</strong> in Los Angeles conduct independent verification using three distinct methods: ICP-MS (inductively coupled plasma mass spectrometry) for elemental analysis, LC-MS (liquid chromatography-mass spectrometry) for organic compound identification, and FTIR (Fourier-transform infrared spectroscopy) for molecular authentication. This triple-method, dual-lab testing panel exceeds what any other brand in our database publishes.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Natural Shilajit additionally holds <strong>DBP (dibenzo-alpha-pyrone) verification</strong> — the strongest modern marker for shilajit authenticity. DBPs are marker compounds that differentiate genuine shilajit from counterfeit or adulterated products, and their presence cannot be easily replicated by diluted or synthetic alternatives. GMP certification is also confirmed. Their heavy metals (Lead 4.714 ppm, Arsenic 3.757 ppm, Cadmium 0.477 ppm, Mercury 0.029 ppm — resin, ppm by weight) all pass established safety thresholds. Neither fulvic acid percentage nor sourcing altitude is specified.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              At <strong>$48.95 for 20g ($2.45/g)</strong>, Natural Shilajit is more accessible than Lotus Blooming Herbs on a per-gram basis while delivering A-tier quality with industry-leading analytical documentation. The brand earns its A-tier rating through the depth of its scientific verification rather than sourcing altitude or traditional provenance. For buyers who want the strongest available scientific evidence that their shilajit is authentic and analytically characterized — and are prepared to accept that it comes from the Altai rather than the Himalayas — Natural Shilajit is the most rigorously documented option in its tier.
            </p>
          </section>

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
                      <span className="text-[#10B981] text-xs mr-1">★</span>
                      Lotus Blooming Herbs
                    </th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">
                      Natural Shilajit
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
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs wins on tier (S vs A), specific Himalayan sourcing altitude (16,000–18,000ft), Ayurvedic practitioner ownership with NAMA and AHPA credentialing, and per-serving heavy metal readings that rank among the cleanest in our database (Lead 0.040 mcg/serving). For buyers who define quality through sourcing provenance, traditional Ayurvedic pedigree, and per-serving safety data, LBH is the stronger choice. Natural Shilajit wins on scientific documentation depth: DBP verification (the most reliable modern authenticity marker), triple-method lab testing (ICP-MS + LC-MS + FTIR), and dual-lab verification (DaaneLabs + Harken Research) represent a level of analytical rigor that no other brand in our database matches. At $2.45/g vs $6.00/g, Natural Shilajit also wins on price-per-gram. For buyers who want the strongest available scientific proof of shilajit authenticity and compound characterization — regardless of mountain origin — Natural Shilajit delivers the most comprehensive documentation in our database.
            </p>
          </section>

          {/* ── Why each wins ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">
                Why Lotus Blooming Herbs wins
              </h3>
              <ul className="space-y-2">
                {[
                  "S-tier vs A-tier — one tier higher on our scoring methodology, reflecting Himalayan sourcing altitude, practitioner ownership, and A2LA ISO 17025 lab accreditation",
                  "Himalayan Mountains at 16,000–18,000ft — the highest documented sourcing altitude in our database vs Natural Shilajit's Altai source with no altitude specified",
                  "Lead 0.040 mcg per serving — among the lowest documented per-serving heavy metal figures in our database, measured at the consumer-relevant serving level",
                  "Ayurvedic practitioner-owned with NAMA, AHPA, and Conservation Alliance memberships — unique professional credentialing and the brand that pioneered pure resin shilajit in the West",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#0D1F14] leading-relaxed">
                    <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">
                Why Natural Shilajit wins
              </h3>
              <ul className="space-y-2">
                {[
                  "DBP (dibenzo-alpha-pyrone) verification — the strongest modern scientific marker for shilajit authenticity, absent from Lotus Blooming Herbs' testing panel",
                  "Triple-method lab testing (ICP-MS + LC-MS + FTIR) — the most comprehensive analytical method combination documented by any brand in our database",
                  "Dual-lab verification (DaaneLabs + Harken Research, LA, Nov 2024) — two independent labs confirming results vs LBH's single-lab approach",
                  "$2.45/g vs $6.00/g — more than 60% less expensive per gram, with DBP verification and a UNESCO-recognized source region",
                ].map((item, i) => (
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
                  Buy Lotus Blooming Herbs if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You specifically want a Himalayan-sourced S-tier resin from an Ayurvedic practitioner-owned brand with NAMA and AHPA credentials, the highest sourcing altitude in our database (up to 18,000ft), and per-serving heavy metal readings among the lowest we have documented. Also the right pick if Ayurvedic tradition and the founding provenance of pure resin shilajit in the Western market matter to your purchasing decision.
                </p>
                <a
                  href={LBH.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors"
                >
                  Shop Lotus Blooming Herbs →
                </a>
              </div>
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">
                  Buy Natural Shilajit if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want the most scientifically documented shilajit in terms of authenticity verification — specifically DBP verification and triple-method lab testing (ICP-MS + LC-MS + FTIR) confirmed by two independent laboratories. Also the right choice if you want a UNESCO Altai resin at $2.45/g — more than 60% less per gram than Lotus Blooming Herbs — and are comfortable with Altai rather than Himalayan sourcing.
                </p>
                <a
                  href={NATURAL_SHILAJIT.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors"
                >
                  Shop Natural Shilajit →
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
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
                  <div className="font-bold text-[#0D1F14] text-sm mb-2">{item.name}</div>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{item.acceptedAnswer.text}</p>
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
              <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline">
                Best shilajit brands ranked →
              </Link>
              <Link href="/blog/lotus-blooming-herbs-shilajit-review" className="text-[#10B981] hover:underline">
                Full Lotus Blooming Herbs review →
              </Link>
              <Link href="/blog/natural-shilajit-review" className="text-[#10B981] hover:underline">
                Full Natural Shilajit review →
              </Link>
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
