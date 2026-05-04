import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lotus Blooming Herbs vs Pure Himalayan Shilajit: Himalayan Sourcing Compared (2026)",
  description:
    "Lotus Blooming Herbs vs Pure Himalayan Shilajit: both Himalayan, both A2LA ISO 17025 verified. Compare altitude, COA depth, heavy metals, price per gram, and Ayurvedic credentials.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/lotus-blooming-vs-pure-himalayan" },
  openGraph: {
    title: "Lotus Blooming Herbs vs Pure Himalayan Shilajit: Himalayan Sourcing Compared (2026)",
    description:
      "Lotus Blooming Herbs vs Pure Himalayan Shilajit: both Himalayan, both A2LA ISO 17025 verified. Compare altitude, COA depth, heavy metals, price per gram, and Ayurvedic credentials.",
    url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-pure-himalayan",
    type: "article",
  },
};

// ── Schema ─────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lotus Blooming Herbs vs Pure Himalayan Shilajit: Himalayan Sourcing Compared (2026)",
  description:
    "Lotus Blooming Herbs vs Pure Himalayan Shilajit: both Himalayan, both A2LA ISO 17025 verified. Compare altitude, COA depth, heavy metals, price per gram, and Ayurvedic credentials.",
  url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-pure-himalayan",
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
      name: "Lotus Blooming Herbs vs Pure Himalayan",
      item: "https://www.shilajitprice.com/compare/lotus-blooming-vs-pure-himalayan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Both brands use Certified Laboratories Burbank — what's the difference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both Lotus Blooming Herbs and Pure Himalayan Shilajit use Certified Laboratories in Burbank, CA, which holds A2LA ISO 17025 accreditation (Certificate 3034.01) — the same lab and the same accreditation standard. The key difference is in what each brand publishes from their testing. Lotus Blooming Herbs reports heavy metals at the per-serving microgram level (Lead 0.040 mcg, Arsenic 0.091 mcg, Cadmium 0.004 mcg, Mercury 0.001 mcg per serving, Batch BHC4429/2024057703, August 2025) — an exceptionally granular measurement. Pure Himalayan's COA (also Certified Laboratories + MQL, September 2024) includes heavy metals at the per-200mg serving level (Lead 0.095 mcg, Arsenic 0.192 mcg, Cadmium 0.066 mcg, Mercury ND, Batch STH11) and additionally discloses approximately 58% fulvic acid from a 2021 COA — a compound measurement LBH does not publish.",
      },
    },
    {
      "@type": "Question",
      name: "Lotus Blooming Herbs sources at 16,000–18,000ft vs Pure Himalayan's 16,000ft — does altitude matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Altitude is considered a meaningful quality indicator in traditional Ayurvedic standards and by many shilajit researchers, because higher-altitude deposits are believed to form in more minerally dense, less contaminated environments. Lotus Blooming Herbs' 16,000–18,000ft sourcing represents a 0–2,000ft altitude advantage over Pure Himalayan's 16,000ft sourcing — and that upper range of 18,000ft is notably high. In practice, both brands produce shilajit that passes rigorous third-party safety testing from the same A2LA-accredited lab. Whether the altitude difference meaningfully impacts the final resin composition is difficult to verify without a direct compound comparison using a disclosed FA% from Lotus Blooming Herbs. What is documentable is that Lotus Blooming Herbs' heavy metals per serving are lower across all four tested metals.",
      },
    },
    {
      "@type": "Question",
      name: "Pure Himalayan discloses ~58% fulvic acid but Lotus Blooming Herbs doesn't — which is better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is the central comparison point between these two brands. Pure Himalayan's ~58% fulvic acid disclosure (from a 2021 COA, Certified Laboratories) is a concrete bioactive data point that Lotus Blooming Herbs does not provide. However, the absence of a disclosed FA% from Lotus Blooming Herbs does not mean their fulvic acid content is lower — it reflects a philosophical approach that prioritizes sourcing altitude, Ayurvedic practitioner ownership, and safety purity over compound percentage marketing. For buyers who specifically need a documented FA%, Pure Himalayan is the clear answer at $1.33/g with free shipping. For buyers who value altitude provenance and Ayurvedic credentialing over FA disclosure, Lotus Blooming Herbs delivers on those criteria at a higher price per gram.",
      },
    },
    {
      "@type": "Question",
      name: "Which Himalayan brand offers better value: Lotus Blooming Herbs or Pure Himalayan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On price-per-gram value, Pure Himalayan is not close: $1.33/g vs $6.00/g for Lotus Blooming Herbs — nearly five times less expensive. Pure Himalayan also includes free shipping and discloses ~58% fulvic acid. For buyers whose primary concern is accessible, well-documented Himalayan shilajit at a competitive price, Pure Himalayan is the stronger value proposition. Lotus Blooming Herbs commands its premium through altitude advantage (up to 18,000ft vs 16,000ft), Ayurvedic practitioner ownership with NAMA/AHPA credentials, lower per-serving heavy metals, and its founding position in the Western pure resin market. The $4.67/g premium is meaningful — it should only be paid if those specific differentiators genuinely matter to you.",
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

const PURE_HIMALAYAN = {
  name: "Pure Himalayan Shilajit",
  shortName: "Pure Himalayan",
  tier: "S",
  tierColor: "bg-amber-400 text-amber-900",
  fulvicAcid: "~58% (2021 COA)",
  pricePerGram: "$1.33/g",
  origin: "Himalayan Mountains, 16,000ft",
  coa: true,
  coaDetail: "Certified Laboratories + MQL, Burbank CA (A2LA ISO 17025, Cert 3034.01), Sep 2024",
  dbpVerified: false,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: true,
  bestFor: "Himalayan sourcing, ISO 17025 verified COA, competitive price per gram",
  purityScore: 9,
  affiliateUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
  productLabel: "Authentic Shilajit Resin 30g — $39.99",
  price: "$39.99",
  reviewSlug: "pure-himalayan-shilajit-review",
};

// ── Comparison table rows ──────────────────────────────────────────────────

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  {
    label: "Tier",
    a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${LBH.tierColor}`}>{LBH.tier}</span>,
    b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURE_HIMALAYAN.tierColor}`}>{PURE_HIMALAYAN.tier}</span>,
  },
  {
    label: "Fulvic Acid",
    a: <strong className="text-[#0D1F14]">{LBH.fulvicAcid}</strong>,
    b: <strong className="text-[#0D1F14]">{PURE_HIMALAYAN.fulvicAcid}</strong>,
  },
  {
    label: "Price / Gram",
    a: LBH.pricePerGram,
    b: PURE_HIMALAYAN.pricePerGram,
  },
  {
    label: "Sourcing Altitude",
    a: "16,000–18,000ft",
    b: "16,000ft",
  },
  {
    label: "Origin",
    a: LBH.origin,
    b: PURE_HIMALAYAN.origin,
  },
  {
    label: "COA",
    a: <span><CheckIcon pass={LBH.coa} /> {LBH.coaDetail}</span>,
    b: <span><CheckIcon pass={PURE_HIMALAYAN.coa} /> {PURE_HIMALAYAN.coaDetail}</span>,
  },
  {
    label: "Heavy Metals",
    a: <HMBadge status={LBH.heavyMetals} />,
    b: <HMBadge status={PURE_HIMALAYAN.heavyMetals} />,
  },
  {
    label: "GMP Certified",
    a: <CheckIcon pass={LBH.gmpCertified} />,
    b: <CheckIcon pass={PURE_HIMALAYAN.gmpCertified} />,
  },
  {
    label: "Free Shipping",
    a: <CheckIcon pass={LBH.freeShipping} />,
    b: <CheckIcon pass={PURE_HIMALAYAN.freeShipping} />,
  },
  {
    label: "Best For",
    a: <span className="text-[#4A6358]">{LBH.bestFor}</span>,
    b: <span className="text-[#4A6358]">{PURE_HIMALAYAN.bestFor}</span>,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function LotusBloomingVsPureHimalayanPage() {
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
              <span className="text-white">Lotus Blooming Herbs vs Pure Himalayan</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Lotus Blooming Herbs vs Pure Himalayan Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              This is a uniquely close comparison — both brands source from the Himalayan Mountains and both use <strong>Certified Laboratories in Burbank, CA</strong>, an A2LA ISO 17025 accredited testing facility (Certificate 3034.01). Lotus Blooming Herbs sits at 16,000–18,000 feet altitude, is operated by an Ayurvedic practitioner with NAMA and AHPA memberships, and reports heavy metals at the per-serving microgram level — with Lead at 0.040 mcg, among the lowest in our database. Pure Himalayan Shilajit sources at 16,000ft, discloses approximately 58% fulvic acid (2021 COA), ships free, and costs $1.33/g — nearly five times less per gram. Both are S-tier. The decision comes down to altitude advantage and Ayurvedic pedigree versus price transparency and FA disclosure.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Lotus Blooming Herbs</span>
              <span className="text-[#9EC9AD] text-xs">(higher altitude, Ayurvedic ownership, cleaner heavy metals per serving)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* ── Side-by-side CTA cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: LBH, isWinner: true },
              { brand: PURE_HIMALAYAN, isWinner: false },
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
            <h2 className="text-xl font-black text-[#0D1F14]">Lotus Blooming Herbs: Deeper Himalayan Altitude, Ayurvedic Pedigree</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs is operated by an Ayurvedic practitioner with memberships in NAMA (National Ayurvedic Medical Association), AHPA (American Herbal Products Association), and the Conservation Alliance. It is credited as the first brand to introduce pure resin shilajit to the Western market. Their raw material is sourced from the <strong>Himalayan Mountains at 16,000–18,000 feet</strong> — up to 2,000 feet higher than Pure Himalayan's documented sourcing altitude of 16,000ft. This altitude range is among the highest documented collection elevations in our entire brand database.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Third-party testing is conducted at <strong>Certified Laboratories in Burbank, CA</strong> (A2LA ISO 17025, Certificate 3034.01) — the same lab used by Pure Himalayan. Their COA for Batch BHC4429/2024057703 (August 2025) reports heavy metals at the per-serving microgram level: <strong>Lead 0.040 mcg · Arsenic 0.091 mcg · Cadmium 0.004 mcg · Mercury 0.001 mcg</strong>. These are the lowest per-serving heavy metal readings of the two brands on every measured metal, and rank among the lowest in our full database. The use of microgram-per-serving measurements (rather than ppm by weight) reflects a more consumer-relevant reporting standard.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs does not disclose a fulvic acid percentage — consistent with an Ayurvedic philosophy that emphasizes sourcing provenance and safety verification over compound marketing. At <strong>$59.99 for 10g ($6.00/g)</strong>, they command the highest per-gram price in this comparison. The premium reflects altitude advantage, practitioner ownership, and the brand's founding position in the Western pure resin shilajit market. For buyers who place significant value on these differentiators, it is a justified premium. For buyers optimizing for price-per-gram with a disclosed FA%, Pure Himalayan is the better fit.
            </p>
          </section>

          {/* ── Brand overview: Pure Himalayan ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Pure Himalayan Shilajit: Accessible Himalayan Quality at Competitive Price</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pure Himalayan Shilajit sources from the Himalayan Mountains at 16,000 feet and is tested by <strong>Certified Laboratories and MQL in Burbank, CA</strong> (A2LA ISO 17025, Certificate 3034.01, September 2024) — the same accredited testing facility used by Lotus Blooming Herbs. Their batch-specific COA (Batch STH11) covers heavy metals at the per-200mg serving level: Lead 0.095 mcg, Arsenic 0.192 mcg, Cadmium 0.066 mcg, Mercury ND — all passing results. They additionally disclose approximately <strong>58% fulvic acid from a 2021 COA</strong>, providing a documented bioactive benchmark that Lotus Blooming Herbs does not publish.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pure Himalayan is <strong>GMP certified</strong> and ships free with a verified 30g resin jar at <strong>$39.99 ($1.33/g)</strong>. At that price point — nearly five times less per gram than Lotus Blooming Herbs — they offer exceptional value for Himalayan-sourced, ISO 17025 verified shilajit. The combination of S-tier quality rating, Himalayan sourcing, A2LA-accredited lab COA, disclosed fulvic acid percentage, GMP certification, and free shipping makes Pure Himalayan one of the most accessible high-quality options in our database.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              For first-time buyers who specifically want a Himalayan resin with documented fulvic acid content and lab accreditation comparable to Lotus Blooming Herbs at a fraction of the price, Pure Himalayan is a highly logical entry point. The brand does not hold the Ayurvedic practitioner ownership credentials of Lotus Blooming Herbs, and its sourcing altitude (16,000ft) is at the lower end of LBH's reported 16,000–18,000ft range — but both brands use the same A2LA-accredited lab and both carry S-tier ratings on our scoring methodology.
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
                      Pure Himalayan
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
              This is genuinely one of the closest matchups in our database — both brands are S-tier Himalayan resins tested by the same A2LA ISO 17025 accredited lab. Lotus Blooming Herbs earns the edge on altitude (up to 18,000ft vs 16,000ft), Ayurvedic practitioner ownership with NAMA and AHPA credentials, and per-serving heavy metals that are lower across all four tested metals (Lead 0.040 mcg vs 0.095 mcg; Arsenic 0.091 mcg vs 0.192 mcg). Pure Himalayan wins clearly on price ($1.33/g vs $6.00/g — nearly 5× less expensive), discloses ~58% fulvic acid that LBH does not, and includes free shipping. If price is a meaningful consideration, Pure Himalayan is an exceptional value for Himalayan-sourced S-tier shilajit. If you want the highest-altitude Himalayan resin from a practitioner-owned Ayurvedic source with the cleanest per-serving heavy metal readings, Lotus Blooming Herbs is the pick — but be prepared to pay a significant premium.
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
                  "Altitude 16,000–18,000ft — up to 2,000ft higher than Pure Himalayan's documented 16,000ft sourcing elevation",
                  "Ayurvedic practitioner-owned with NAMA and AHPA memberships — unique professional credentialing in the shilajit market",
                  "Lead 0.040 mcg per serving vs 0.095 mcg — lower per-serving heavy metals on all four tested metals",
                  "First brand to introduce pure resin shilajit to the Western market — founding provenance and traditional Ayurvedic pedigree",
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
                Why Pure Himalayan wins
              </h3>
              <ul className="space-y-2">
                {[
                  "$1.33/g vs $6.00/g — nearly five times less expensive per gram for the same A2LA ISO 17025 lab accreditation standard",
                  "~58% fulvic acid disclosed (2021 COA, Certified Laboratories) — a concrete bioactive benchmark Lotus Blooming Herbs does not publish",
                  "Free shipping included — Lotus Blooming Herbs does not offer free shipping",
                  "GMP certified — Lotus Blooming Herbs does not hold GMP certification",
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
                  You want the highest-altitude Himalayan resin (up to 18,000ft) from an Ayurvedic practitioner with NAMA and AHPA credentials, and the cleanest per-serving heavy metal readings of any Himalayan brand in our database. Also the right pick if you specifically value the brand's founding position as the first to bring pure resin shilajit to the Western market, and the traditional Ayurvedic provenance that comes with practitioner ownership — and budget is not the deciding factor.
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
                  Buy Pure Himalayan if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want a well-documented, S-tier Himalayan shilajit at a price-per-gram that is accessible for regular supplementation. Pure Himalayan delivers ~58% fulvic acid disclosed, the same A2LA ISO 17025 accredited lab as Lotus Blooming Herbs, GMP certification, free shipping, and Himalayan sourcing — all for $1.33/g. This is the right choice for the majority of Himalayan-focused buyers, especially first-timers and those who value a disclosed FA% alongside strong safety testing.
                </p>
                <a
                  href={PURE_HIMALAYAN.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors"
                >
                  Shop Pure Himalayan →
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
              <Link href="/blog/pure-himalayan-shilajit-review" className="text-[#10B981] hover:underline">
                Full Pure Himalayan review →
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
