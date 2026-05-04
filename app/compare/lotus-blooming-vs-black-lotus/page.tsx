import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lotus Blooming Herbs vs Black Lotus Shilajit: COA, Source & Price Compared (2026)",
  description:
    "Lotus Blooming Herbs vs Black Lotus Shilajit: Himalayan Ayurvedic resin vs Altai high-FA resin. Compare COA labs, sourcing altitude, heavy metals data, price per gram, and which is right for you.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/lotus-blooming-vs-black-lotus" },
  openGraph: {
    title: "Lotus Blooming Herbs vs Black Lotus Shilajit: COA, Source & Price Compared (2026)",
    description:
      "Lotus Blooming Herbs vs Black Lotus Shilajit: Himalayan Ayurvedic resin vs Altai high-FA resin. Compare COA labs, sourcing altitude, heavy metals data, price per gram, and which is right for you.",
    url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-black-lotus",
    type: "article",
  },
};

// ── Schema ─────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lotus Blooming Herbs vs Black Lotus Shilajit: COA, Source & Price Compared (2026)",
  description:
    "Lotus Blooming Herbs vs Black Lotus Shilajit: Himalayan Ayurvedic resin vs Altai high-FA resin. Compare COA labs, sourcing altitude, heavy metals data, price per gram, and which is right for you.",
  url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-black-lotus",
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
      name: "Lotus Blooming Herbs vs Black Lotus",
      item: "https://www.shilajitprice.com/compare/lotus-blooming-vs-black-lotus",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Lotus Blooming Herbs' Himalayan sourcing compare to Black Lotus's Altai sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotus Blooming Herbs sources exclusively from the Himalayan Mountains at 16,000–18,000 feet — among the highest documented sourcing altitudes in our database — and is operated by an Ayurvedic practitioner with memberships in NAMA and AHPA. Black Lotus sources from the Altai Mountains of Siberia at 14,000+ feet, a distinct geological and mineral ecosystem. Himalayan shilajit is rooted in the Ayurvedic pharmacopoeia with thousands of years of traditional use, while Altai shilajit comes from a colder, more northerly mountain range. Neither is definitively superior — the choice reflects whether you prioritize Himalayan Ayurvedic provenance or the documented fulvic acid percentages and value that Black Lotus delivers from its Siberian source.",
      },
    },
    {
      "@type": "Question",
      name: "Both brands use A2LA-level labs — which COA is more detailed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotus Blooming Herbs uses Certified Laboratories in Burbank, CA, which holds A2LA ISO 17025 accreditation (Certificate 3034.01), and publishes batch-specific data including Batch BHC4429/2024057703 from August 2025. Their COA covers heavy metals at the per-serving microgram level — Lead 0.040 mcg, Arsenic 0.091 mcg, Cadmium 0.004 mcg, Mercury 0.001 mcg — which is an exceptionally granular and conservative measurement standard. Black Lotus uses IAS Laboratories in Phoenix, AZ and publishes a full-panel batch-level COA (Batch 93, June 2025) including fulvic acid percentage (64.51% resin), humic acid, heavy metals in ppm, and microbiology. Both are strong; LBH's per-serving microgram measurements are uniquely precise, while Black Lotus provides compound concentration data (fulvic acid %) that LBH does not disclose.",
      },
    },
    {
      "@type": "Question",
      name: "Lotus Blooming Herbs doesn't disclose fulvic acid — should that concern me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Lotus Blooming Herbs is an Ayurvedic practitioner-owned brand that prioritizes sourcing altitude, traditional provenance, and safety purity over marketing fulvic acid percentage figures. Their COA from Certified Laboratories (A2LA ISO 17025 accredited) covers heavy metals at the per-serving microgram level and confirms authenticity and safety. The absence of a disclosed fulvic acid percentage does not indicate low FA content — it reflects a different quality philosophy that emphasizes sourcing altitude and traditional processing over compound marketing. That said, if a documented FA percentage is important to your purchasing decision, Black Lotus publishes 64.51% (resin, Batch 93, IAS Laboratories) and is the stronger choice on that specific metric.",
      },
    },
    {
      "@type": "Question",
      name: "Which brand should a first-time shilajit buyer choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most first-time buyers, Black Lotus is the lower-risk starting point. At $36.99 for 30g ($1.23/g) with free shipping and a 30-day money-back guarantee, you get a well-documented S-tier resin with a published batch-level COA from IAS Laboratories covering fulvic acid (64.51% resin), heavy metals (all pass), and microbiology — at a fraction of the cost of most premium brands. Lotus Blooming Herbs at $59.99 for 10g ($6.00/g) is the right choice if you specifically want an Ayurvedic practitioner-sourced Himalayan resin with the highest altitude provenance in our database and the NAMA/AHPA credentialing that comes with it. Both are S-tier — the difference is philosophy and price, not quality.",
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
  gmpCertified: false,
  freeShipping: false,
  bestFor: "Ayurvedic practitioner-owned, 16,000–18,000ft Himalayan sourcing, A2LA ISO 17025",
  purityScore: 10,
  affiliateUrl: "https://lotusbloomingherbs.com/products/authentic-shilajit?variant=1734489987&aff=380",
  productLabel: "Authentic Shilajit™ 10g — $59.99",
  price: "$59.99",
  reviewSlug: "lotus-blooming-herbs-shilajit-review",
};

const BLACK_LOTUS = {
  name: "Black Lotus Shilajit",
  shortName: "Black Lotus",
  tier: "S",
  tierColor: "bg-amber-400 text-amber-900",
  fulvicAcid: "64–74% (by form)",
  pricePerGram: "$1.23/g",
  origin: "Altai Mountains, Siberia",
  coa: true,
  coaDetail: "IAS Laboratories, Phoenix AZ — Batch 93, June 2025",
  dbpVerified: false,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: true,
  bestFor: "Highest verified FA% + best value per gram",
  purityScore: 10,
  affiliateUrl: "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE",
  productLabel: "Pure Altai Resin 30g — $36.99",
  price: "$36.99",
  reviewSlug: "black-lotus-shilajit-review",
};

// ── Comparison table rows ──────────────────────────────────────────────────

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  {
    label: "Tier",
    a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${LBH.tierColor}`}>{LBH.tier}</span>,
    b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${BLACK_LOTUS.tierColor}`}>{BLACK_LOTUS.tier}</span>,
  },
  {
    label: "Fulvic Acid",
    a: <strong className="text-[#0D1F14]">{LBH.fulvicAcid}</strong>,
    b: <strong className="text-[#0D1F14]">{BLACK_LOTUS.fulvicAcid}</strong>,
  },
  {
    label: "Price / Gram",
    a: LBH.pricePerGram,
    b: BLACK_LOTUS.pricePerGram,
  },
  {
    label: "Sourcing Altitude",
    a: "16,000–18,000ft",
    b: "14,000ft+",
  },
  {
    label: "Origin",
    a: LBH.origin,
    b: BLACK_LOTUS.origin,
  },
  {
    label: "COA",
    a: <span><CheckIcon pass={LBH.coa} /> {LBH.coaDetail}</span>,
    b: <span><CheckIcon pass={BLACK_LOTUS.coa} /> {BLACK_LOTUS.coaDetail}</span>,
  },
  {
    label: "Heavy Metals",
    a: <HMBadge status={LBH.heavyMetals} />,
    b: <HMBadge status={BLACK_LOTUS.heavyMetals} />,
  },
  {
    label: "GMP Certified",
    a: <CheckIcon pass={LBH.gmpCertified} />,
    b: <CheckIcon pass={BLACK_LOTUS.gmpCertified} />,
  },
  {
    label: "Free Shipping",
    a: <CheckIcon pass={LBH.freeShipping} />,
    b: <CheckIcon pass={BLACK_LOTUS.freeShipping} />,
  },
  {
    label: "Best For",
    a: <span className="text-[#4A6358]">{LBH.bestFor}</span>,
    b: <span className="text-[#4A6358]">{BLACK_LOTUS.bestFor}</span>,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function LotusBloomingVsBlackLotusPage() {
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
              <span className="text-white">Lotus Blooming Herbs vs Black Lotus</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Lotus Blooming Herbs vs Black Lotus Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              Both brands earn S-tier ratings — but they represent genuinely different philosophies. Lotus Blooming Herbs is an Ayurvedic practitioner-owned brand sourcing pure Himalayan resin from 16,000–18,000 feet, verified by a Certified Laboratories A2LA ISO 17025 accredited COA (Cert 3034.01), and is credited as the first brand to bring pure resin shilajit to the Western market. Black Lotus sources cold-processed resin from the Altai Mountains of Siberia and publishes a batch-level COA from IAS Laboratories in Phoenix, AZ, showing 64.51% fulvic acid by weight — one of the highest documented figures in our database — at just $1.23/g with free shipping. The key trade-off: traditional Himalayan altitude and Ayurvedic pedigree versus the most documented fulvic acid percentage at the best value per gram.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Black Lotus</span>
              <span className="text-[#9EC9AD] text-xs">(best value, highest verified FA%)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* ── Side-by-side CTA cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: LBH, isWinner: false },
              { brand: BLACK_LOTUS, isWinner: true },
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
            <h2 className="text-xl font-black text-[#0D1F14]">Lotus Blooming Herbs: The Original Western Himalayan Resin</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs holds a unique place in the shilajit market: it is widely credited as the <strong>first brand to introduce pure resin shilajit to the Western market</strong>. The brand is operated by an Ayurvedic practitioner holding memberships in NAMA (National Ayurvedic Medical Association) and AHPA (American Herbal Products Association), as well as membership in the Conservation Alliance — a set of credentials that distinguish it from all other brands in our database. Their raw material is hand-harvested from the <strong>Himalayan Mountains at 16,000–18,000 feet</strong> altitude, among the highest documented sourcing elevations we have verified.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Third-party testing is conducted by <strong>Certified Laboratories in Burbank, CA</strong>, which holds A2LA ISO 17025 accreditation (Certificate 3034.01) — one of the most rigorous laboratory accreditation standards available. Their published COA for Batch BHC4429/2024057703 (August 2025) reports heavy metals at the per-serving microgram level: Lead 0.040 mcg, Arsenic 0.091 mcg, Cadmium 0.004 mcg, Mercury 0.001 mcg. These figures are among the lowest per-serving heavy metal readings in our entire database, reflecting both the purity of the high-altitude Himalayan source and the sensitivity of the measurement methodology.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs does not disclose a fulvic acid percentage, a choice consistent with their Ayurvedic philosophy that prioritizes provenance, sourcing altitude, and safety verification over compound marketing metrics. At <strong>$59.99 for 10g ($6.00/g)</strong>, they are the premium-priced option in this comparison. For buyers who specifically want the highest Himalayan altitude, Ayurvedic practitioner ownership, and the brand that pioneered pure resin shilajit in the West, Lotus Blooming Herbs is in a category of its own.
            </p>
          </section>

          {/* ── Brand overview: Black Lotus ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Black Lotus: Highest Documented Fulvic Acid at Best Value</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Black Lotus Shilajit sources exclusively from the <strong>Altai Mountains of Siberia</strong> at 14,000+ feet and cold-processes their resin to preserve the full bioactive compound profile. Their COA is published by <strong>IAS Laboratories in Phoenix, AZ</strong> — a named, verifiable US third-party laboratory — and covers every batch individually. Batch 93 COA data (June 2025) documents <strong>64.51% fulvic acid by weight</strong> (161mg per 250mg serving) for the resin and 74.30% for the capsule form — one of the highest verified figures in our database. Heavy metals testing shows all passing results: Lead 1.17 ppm, Arsenic 0.88 ppm, Cadmium 0.15 ppm, Mercury ND.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Black Lotus is <strong>GMP certified</strong>, non-GMO, vegan, gluten-free, and made in the USA. Their product line spans resin, capsules, tinctures, gummies, honey blend, and tablets — the most comprehensive single-brand lineup among our S-tier brands. At <strong>$36.99 for 30g ($1.23/g)</strong> with free shipping and a 30-day money-back guarantee, Black Lotus delivers the highest documented fulvic acid concentration at the best price-per-gram of any S-tier brand in our database.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              For buyers who want maximum transparency in supplement quality — exact batch numbers, a named US testing lab, published compound measurements — Black Lotus's COA documentation is best-in-class. Their batch-by-batch testing results are accessible on their website without needing to request them, which is a meaningful differentiator in a market where COA accessibility varies widely. The combination of S-tier quality, verified bioactive data, free shipping, and a money-back guarantee makes Black Lotus the strongest value proposition in this matchup.
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
                      Lotus Blooming Herbs
                    </th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">
                      <span className="text-[#10B981] text-xs mr-1">★</span>
                      Black Lotus
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
              Black Lotus wins on documented bioactive value and price: 64.51% fulvic acid (resin, Batch 93, IAS Labs) at $1.23/g with free shipping and a 30-day money-back guarantee is the strongest potency-to-price combination in our S-tier database. For most buyers — especially those new to shilajit or optimizing for verified compound content per dollar — Black Lotus is the clear recommendation. Lotus Blooming Herbs wins on Himalayan altitude (16,000–18,000ft, the highest in our database), Ayurvedic practitioner ownership and credentialing (NAMA, AHPA, Conservation Alliance), per-serving heavy metals that rank among the cleanest we have documented, and the historical distinction of being the first brand to bring pure resin shilajit to the Western market. If you specifically want the highest-altitude Himalayan resin with traditional Ayurvedic provenance, Lotus Blooming Herbs has no direct competitor on those criteria.
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
                  "Sourced at 16,000–18,000ft Himalayan altitude — the highest documented sourcing elevation in our database",
                  "Ayurvedic practitioner-owned with NAMA, AHPA, and Conservation Alliance memberships — unique credentialing in the shilajit market",
                  "A2LA ISO 17025 accredited lab (Certified Laboratories, Cert 3034.01) — same rigorous accreditation standard as Pure Himalayan",
                  "First brand to introduce pure resin shilajit to the Western market — a founding provenance no other brand can claim",
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
                Why Black Lotus wins
              </h3>
              <ul className="space-y-2">
                {[
                  "64.51% fulvic acid (resin) — Batch 93 verified by IAS Laboratories, Phoenix AZ — one of the highest documented FA figures in our database",
                  "$1.23/g — best price per gram of any S-tier brand; $36.99 for 30g vs $59.99 for 10g",
                  "Full-panel batch-level COA from a named US third-party lab with exact compound measurements, publicly posted online",
                  "Free shipping + 30-day money-back guarantee — lowest-risk entry into S-tier shilajit",
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
                  You want the highest-altitude Himalayan resin from an Ayurvedic practitioner-owned source, with NAMA and AHPA credentialing and the historical distinction of being the first pure resin shilajit brought to the Western market. Also the right pick if you prioritize per-serving heavy metal purity (Lead 0.040 mcg per serving — among the lowest in our database) and A2LA ISO 17025 accredited lab verification over a disclosed fulvic acid percentage.
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
                  Buy Black Lotus if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want the highest documented fulvic acid percentage at the best price-per-gram among S-tier brands. Black Lotus is ideal for buyers who prioritize batch-level COA transparency with exact compound measurements from a named US third-party lab, free shipping, and a 30-day money-back guarantee. Whether you are new to shilajit or a returning user seeking maximum bioactive value per dollar, Black Lotus is the default recommendation in this matchup.
                </p>
                <a
                  href={BLACK_LOTUS.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors"
                >
                  Shop Black Lotus →
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
              <Link href="/blog/black-lotus-shilajit-review" className="text-[#10B981] hover:underline">
                Full Black Lotus review →
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
