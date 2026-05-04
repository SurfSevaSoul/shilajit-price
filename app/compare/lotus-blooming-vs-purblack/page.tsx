import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lotus Blooming Herbs vs Pürblack: Traditional vs Science-Forward Shilajit (2026)",
  description:
    "Lotus Blooming Herbs vs Pürblack: Himalayan Ayurvedic resin vs US-patented live resin. Compare sourcing, COA standards, price per gram, heavy metals, and which philosophy fits your needs.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/lotus-blooming-vs-purblack" },
  openGraph: {
    title: "Lotus Blooming Herbs vs Pürblack: Traditional vs Science-Forward Shilajit (2026)",
    description:
      "Lotus Blooming Herbs vs Pürblack: Himalayan Ayurvedic resin vs US-patented live resin. Compare sourcing, COA standards, price per gram, heavy metals, and which philosophy fits your needs.",
    url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-purblack",
    type: "article",
  },
};

// ── Schema ─────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lotus Blooming Herbs vs Pürblack: Traditional vs Science-Forward Shilajit (2026)",
  description:
    "Lotus Blooming Herbs vs Pürblack: Himalayan Ayurvedic resin vs US-patented live resin. Compare sourcing, COA standards, price per gram, heavy metals, and which philosophy fits your needs.",
  url: "https://www.shilajitprice.com/compare/lotus-blooming-vs-purblack",
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
      name: "Lotus Blooming Herbs vs Pürblack",
      item: "https://www.shilajitprice.com/compare/lotus-blooming-vs-purblack",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Lotus Blooming Herbs different from Pürblack's patent-backed live resin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotus Blooming Herbs is rooted in the Ayurvedic tradition: sourced from 16,000–18,000ft in the Himalayan Mountains, operated by an Ayurvedic practitioner with NAMA and AHPA memberships, and credited as the first brand to bring pure resin shilajit to the Western market. Its quality philosophy centers on sourcing altitude, traditional processing, and per-serving safety purity. Pürblack takes a fundamentally different approach: five US patents covering live resin purification, pharmaceutical-grade manufacturing in the United States from multi-region raw material (Caucasus, Siberia, Himalayas), and premium product variants including precious metal infusions. Both brands verify via COA and neither discloses a fulvic acid percentage. The distinction is ancient tradition versus patented process innovation — one is about where the raw material comes from and how it has always been used; the other is about how the purification process has been engineered.",
      },
    },
    {
      "@type": "Question",
      name: "Pürblack has 5 US patents — doesn't that make it more rigorous than Lotus Blooming Herbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "US patents protect Pürblack's purification methodology, which is a meaningful indicator of process innovation and investment in intellectual property. However, patents protect process, not necessarily end-product purity. Lotus Blooming Herbs holds an A2LA ISO 17025 accredited COA from Certified Laboratories in Burbank, CA (Certificate 3034.01) — a laboratory accreditation standard that is among the most rigorous available for supplement testing — and reports per-serving heavy metal measurements that are among the lowest in our database (Lead 0.040 mcg per serving). Patents and ISO 17025 lab accreditation serve different quality assurance purposes. Pürblack's patents speak to manufacturing innovation; LBH's A2LA-accredited COA speaks to verified end-product safety at the per-serving level. Neither is categorically more rigorous — they document different dimensions of quality.",
      },
    },
    {
      "@type": "Question",
      name: "Is $6.00/g for Lotus Blooming Herbs worth it compared to Pürblack at $3.11/g?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On a pure price-per-gram basis, Pürblack at $3.11/g is nearly half the cost of Lotus Blooming Herbs at $6.00/g — so Pürblack is actually the more affordable option in this comparison despite its premium positioning. The question is whether the specific differentiators of Lotus Blooming Herbs — Himalayan altitude up to 18,000ft, Ayurvedic practitioner ownership with NAMA/AHPA credentials, A2LA ISO 17025 lab accreditation, and per-serving heavy metal readings among the lowest in our database — are worth paying roughly double the per-gram cost of Pürblack. For buyers who place high value on Himalayan sourcing transparency, Ayurvedic provenance, and the founding position of the brand in the Western pure resin market, LBH's premium can be justified. For buyers who prioritize US patent-backed process innovation and pharmaceutical-grade manufacturing, Pürblack delivers those credentials at a lower per-gram cost.",
      },
    },
    {
      "@type": "Question",
      name: "Which brand is better for someone interested in traditional Ayurvedic shilajit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotus Blooming Herbs is unambiguously the better choice for traditional Ayurvedic shilajit. It is operated by a practicing Ayurvedic practitioner with NAMA (National Ayurvedic Medical Association) and AHPA (American Herbal Products Association) memberships, sources exclusively from the Himalayan Mountains at 16,000–18,000ft — the traditional geographic origin of Ayurvedic shilajit — and is recognized as the first brand to bring pure resin shilajit to the Western market. Pürblack's multi-region sourcing (Caucasus, Siberia, Himalayas) and patent-backed US manufacturing are aligned with a modern, process-innovation philosophy that is quite distinct from traditional Ayurvedic practice. Pürblack is an excellent choice for buyers who value technological process differentiation; Lotus Blooming Herbs is the choice for buyers who want the authentic Ayurvedic tradition.",
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

const PURBLACK = {
  name: "Pürblack",
  shortName: "Pürblack",
  tier: "A",
  tierColor: "bg-emerald-500 text-white",
  fulvicAcid: "Not reported — DBP & Urolithin A verified",
  pricePerGram: "$3.11/g",
  origin: "Multi-region (Caucasus, Siberia, Himalayas)",
  coa: true,
  coaDetail: "Pürblack Inc., Temecula CA — Dec 2025",
  dbpVerified: true,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: false,
  bestFor: "5 US patents, pharmaceutical-grade US manufacturing, precious metal infusions",
  purityScore: 9,
  affiliateUrl: "https://purblack.pxf.io/c/7221460/3041684/36963",
  productLabel: "True Gold Live Resin 30g — $93.33",
  price: "$93.33",
  reviewSlug: "purblack-shilajit-review",
};

// ── Comparison table rows ──────────────────────────────────────────────────

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  {
    label: "Tier",
    a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${LBH.tierColor}`}>{LBH.tier}</span>,
    b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURBLACK.tierColor}`}>{PURBLACK.tier}</span>,
  },
  {
    label: "Fulvic Acid",
    a: <strong className="text-[#0D1F14]">{LBH.fulvicAcid}</strong>,
    b: <strong className="text-[#0D1F14]">{PURBLACK.fulvicAcid}</strong>,
  },
  {
    label: "Price / Gram",
    a: LBH.pricePerGram,
    b: PURBLACK.pricePerGram,
  },
  {
    label: "Origin",
    a: LBH.origin,
    b: PURBLACK.origin,
  },
  {
    label: "COA",
    a: <span><CheckIcon pass={LBH.coa} /> {LBH.coaDetail}</span>,
    b: <span><CheckIcon pass={PURBLACK.coa} /> {PURBLACK.coaDetail}</span>,
  },
  {
    label: "US Patents",
    a: <span className="text-[#4A6358]">None</span>,
    b: <span className="text-[#10B981] font-bold">5 Patents</span>,
  },
  {
    label: "Production",
    a: <span className="text-[#0D1F14]">Traditional Himalayan</span>,
    b: <span className="text-[#0D1F14]">Made in USA</span>,
  },
  {
    label: "Heavy Metals",
    a: <HMBadge status={LBH.heavyMetals} />,
    b: <HMBadge status={PURBLACK.heavyMetals} />,
  },
  {
    label: "GMP Certified",
    a: <CheckIcon pass={LBH.gmpCertified} />,
    b: <CheckIcon pass={PURBLACK.gmpCertified} />,
  },
  {
    label: "Free Shipping",
    a: <CheckIcon pass={LBH.freeShipping} />,
    b: <CheckIcon pass={PURBLACK.freeShipping} />,
  },
  {
    label: "Best For",
    a: <span className="text-[#4A6358]">{LBH.bestFor}</span>,
    b: <span className="text-[#4A6358]">{PURBLACK.bestFor}</span>,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function LotusBloomingVsPurblackPage() {
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
              <span className="text-white">Lotus Blooming Herbs vs Pürblack</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Lotus Blooming Herbs vs Pürblack
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              This is the purest philosophical contrast in our comparison database. Lotus Blooming Herbs represents ancient Himalayan tradition at 16,000–18,000ft — Ayurvedic practitioner-owned, A2LA ISO 17025 verified by Certified Laboratories Burbank, and the brand that first brought pure resin shilajit to the Western market. Pürblack represents maximum scientific process innovation: 5 US patents covering live resin purification, pharmaceutical-grade manufacturing in the United States from multi-region raw material (Caucasus, Siberia, Himalayas), and precious metal infusions including True Gold at 555 PPM colloidal gold. S-tier versus A-tier. $6.00/g versus $3.11/g — notably, Pürblack is less expensive per gram. Neither brand discloses a fulvic acid percentage. Both are COA-verified. Both pass heavy metals testing.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Lotus Blooming Herbs</span>
              <span className="text-[#9EC9AD] text-xs">(S-tier vs A-tier, Himalayan origin, A2LA ISO 17025)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* ── Side-by-side CTA cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: LBH, isWinner: true },
              { brand: PURBLACK, isWinner: false },
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
            <h2 className="text-xl font-black text-[#0D1F14]">Lotus Blooming Herbs: Ancient Himalayan Tradition, Modern Lab Verification</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Lotus Blooming Herbs is operated by an Ayurvedic practitioner holding memberships in NAMA (National Ayurvedic Medical Association), AHPA (American Herbal Products Association), and the Conservation Alliance. The brand is recognized as the first to introduce pure resin shilajit to the Western market. Raw material is sourced from the <strong>Himalayan Mountains at 16,000–18,000 feet</strong> — the highest documented sourcing altitude in our database — and processed according to traditional Ayurvedic methods. This places Lotus Blooming Herbs squarely within the classical shilajit tradition as documented in the Ayurvedic pharmacopoeia.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Third-party testing is conducted by <strong>Certified Laboratories in Burbank, CA</strong>, which holds A2LA ISO 17025 accreditation (Certificate 3034.01) — one of the most rigorous laboratory accreditation standards available for supplement testing. Their COA for Batch BHC4429/2024057703 (August 2025) documents heavy metals at the per-serving microgram level: <strong>Lead 0.040 mcg · Arsenic 0.091 mcg · Cadmium 0.004 mcg · Mercury 0.001 mcg</strong>. These are among the lowest per-serving heavy metal readings in our database. Lotus Blooming Herbs earns an <strong>S-tier rating</strong>, placing it one tier above Pürblack's A-tier in our scoring methodology.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              At <strong>$59.99 for 10g ($6.00/g)</strong>, Lotus Blooming Herbs is notably more expensive per gram than Pürblack ($3.11/g). That premium is not driven by manufacturing technology or product innovation — it reflects altitude premium (up to 18,000ft Himalayan), Ayurvedic practitioner ownership, and small-batch traditional sourcing from one of the world's most remote high-altitude environments. For buyers who specifically value those dimensions, the premium has a clear rationale. For buyers focused on process innovation and US pharmaceutical-grade manufacturing at a lower per-gram cost, Pürblack is the more efficient choice.
            </p>
          </section>

          {/* ── Brand overview: Pürblack ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Pürblack: 5 US Patents, Pharmaceutical-Grade US Manufacturing</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pürblack is the most technologically differentiated shilajit brand in our database. Founded with a pharmaceutical-grade production philosophy, Pürblack holds <strong>5 US patents</strong> covering their live resin purification methodology — a credential unique among all shilajit brands we have reviewed. Their manufacturing takes place in the United States using raw material sourced from multiple high-altitude regions: the Caucasus Mountains, Siberia, and the Himalayas. This multi-region sourcing approach is designed to capture the broadest possible mineral and bioactive compound profile from geographically distinct shilajit ecosystems.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Their flagship <strong>True Gold</strong> product contains 555 PPM (parts per million) of colloidal gold — a premium differentiation not found in any other brand in our database. Pürblack also holds DBP (dibenzo-alpha-pyrone) and Urolithin A verification, which are modern authenticity and bioavailability markers absent from Lotus Blooming Herbs' testing panel. All products are GMP certified and third-party tested, with COA documentation available. The White Rabbit product line extends the concept further with additional formulations targeting specific wellness outcomes.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              At <strong>$93.33 for 30g ($3.11/g)</strong>, Pürblack is the higher-sticker-price option in absolute terms — but on a per-gram basis it is nearly half the cost of Lotus Blooming Herbs. Pürblack earns an <strong>A-tier rating</strong> in our scoring system, one tier below Lotus Blooming Herbs' S-tier. The tier gap reflects LBH's specific Himalayan sourcing altitude, Ayurvedic practitioner ownership, and A2LA ISO 17025 accredited lab verification. Pürblack's strength is process innovation; LBH's strength is sourcing provenance. They are not competing on the same quality dimensions.
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
                      Pürblack
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
              Lotus Blooming Herbs wins on tier (S vs A), specific Himalayan sourcing transparency (16,000–18,000ft single-origin vs Pürblack's multi-region blend), Ayurvedic practitioner ownership with NAMA and AHPA credentials, and A2LA ISO 17025 accredited lab verification (Certified Laboratories, Cert 3034.01) with per-serving heavy metal readings among the lowest in our database (Lead 0.040 mcg/serving). Pürblack wins on process innovation: 5 US patents covering live resin purification — a credential unique in the shilajit category — multi-region raw material sourcing, US pharmaceutical-grade manufacturing, DBP and Urolithin A verification, and precious metal infusion options including True Gold at 555 PPM colloidal gold. Pürblack also wins on price per gram ($3.11/g vs $6.00/g for LBH). For buyers who want the highest-altitude Himalayan resin from an Ayurvedic practitioner source, Lotus Blooming Herbs is the pick. For buyers who want US patent-backed purification technology, pharmaceutical-grade manufacturing, and multi-region raw material breadth, Pürblack is the choice — at a lower per-gram cost.
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
                  "S-tier vs A-tier — one tier higher on our scoring, reflecting Himalayan altitude, Ayurvedic practitioner ownership, and A2LA ISO 17025 accredited lab verification",
                  "Specific 16,000–18,000ft Himalayan sourcing — single-origin high-altitude provenance vs Pürblack's multi-region blend of Caucasus, Siberia, and Himalayas",
                  "Ayurvedic practitioner-owned with NAMA, AHPA, and Conservation Alliance memberships — the only brand in our database with this combination of professional credentials",
                  "Lead 0.040 mcg per serving — A2LA ISO 17025 accredited lab (Certified Laboratories, Cert 3034.01) with per-serving microbiology panel among the lowest in our database",
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
                Why Pürblack wins
              </h3>
              <ul className="space-y-2">
                {[
                  "5 US patents covering live resin purification process — unique intellectual property protection in the shilajit category, no other brand holds this credential",
                  "Multi-region raw material (Caucasus, Siberia, Himalayas) processed in a US pharmaceutical-grade facility with GMP certification and DBP + Urolithin A verification",
                  "True Gold formula with 555 PPM colloidal gold infusion — ultra-premium differentiation not available from any other brand in our database",
                  "$3.11/g vs $6.00/g — Pürblack is nearly half the per-gram cost of Lotus Blooming Herbs despite its premium absolute price ($93.33 for 30g)",
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
                  You want an S-tier Himalayan resin from an Ayurvedic practitioner-owned source with NAMA and AHPA credentials, the highest sourcing altitude in our database (16,000–18,000ft), and A2LA ISO 17025 accredited lab verification with per-serving heavy metals among the lowest documented. Also the right choice if traditional Ayurvedic provenance and the founding position of the brand in the Western pure resin market are meaningful purchasing factors — and price-per-gram is a secondary concern.
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
                  Buy Pürblack if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You are an experienced shilajit user who wants to explore a patent-backed, US pharmaceutical-grade live resin with multi-region sourcing. Pürblack is also the right pick if precious metal infusions (True Gold 555 PPM colloidal gold) or US intellectual property credentials are important quality signals to you — and you want to pay less per gram than Lotus Blooming Herbs ($3.11/g vs $6.00/g) while still accessing a well-documented, GMP-certified premium resin.
                </p>
                <a
                  href={PURBLACK.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors"
                >
                  Shop Pürblack →
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
              <Link href="/blog/purblack-shilajit-review" className="text-[#10B981] hover:underline">
                Full Pürblack review →
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
