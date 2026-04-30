import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pürblack vs Pure Himalayan Shilajit — Full Comparison (2026)",
  description:
    "Pürblack vs Pure Himalayan Shilajit: head-to-head comparison of US patents vs ISO/IEC 17025 lab accreditation, sourcing, COA depth, price per gram, and which brand is worth it. Full 2026 review.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/purblack-vs-pure-himalayan" },
  openGraph: {
    title: "Pürblack vs Pure Himalayan Shilajit — Full Comparison (2026)",
    description:
      "Pürblack vs Pure Himalayan: patent-backed US live resin vs ISO/IEC 17025-accredited Himalayan resin. Compare sourcing, COA standards, price per gram, and overall value.",
    url: "https://www.shilajitprice.com/compare/purblack-vs-pure-himalayan",
    type: "article",
  },
};

// ── Schema ──────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pürblack vs Pure Himalayan Shilajit — Full Comparison (2026)",
  description:
    "Pürblack vs Pure Himalayan Shilajit: head-to-head comparison of US patents vs ISO/IEC 17025 lab accreditation, sourcing, COA depth, price per gram, and which brand is worth it.",
  url: "https://www.shilajitprice.com/compare/purblack-vs-pure-himalayan",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  author: { "@type": "Organization", name: "ShilajitPrice.com" },
  publisher: {
    "@type": "Organization",
    name: "ShilajitPrice.com",
    url: "https://www.shilajitprice.com",
  },
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
      name: "Pürblack vs Pure Himalayan",
      item: "https://www.shilajitprice.com/compare/purblack-vs-pure-himalayan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Pürblack's US patent protection compare to Pure Himalayan's ISO/IEC 17025 accreditation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are credentials that measure different things. Pürblack's 5 US patents protect their purification process methodology — they describe how the product is made and provide legal exclusivity over that production approach. ISO/IEC 17025 is a laboratory testing standard that certifies the lab conducting Pure Himalayan's COA analysis has been independently audited for accuracy, calibration, and methodology. Patents speak to manufacturing innovation; ISO/IEC 17025 speaks to testing rigor. A product can hold patents without having the most rigorous third-party testing, and vice versa. For consumers evaluating quality, ISO/IEC 17025 accreditation is arguably the more directly relevant credential — it confirms the lab results you rely on are trustworthy.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pure Himalayan Shilajit have a money-back guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pure Himalayan Shilajit offers a money-back guarantee on their products, making it a lower-risk first purchase for new buyers. Pürblack does not prominently offer a comparable money-back guarantee across their product line. For buyers who want to evaluate a premium shilajit without full financial commitment, Pure Himalayan's guarantee provides a meaningful advantage — especially given that their 30g resin at $39.99 ($1.33/g) is substantially less expensive than Pürblack True Gold at $93.33 ($3.11/g).",
      },
    },
    {
      "@type": "Question",
      name: "Is Pürblack's gold infusion (True Gold, 555 PPM) worth the extra cost over Pure Himalayan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pürblack True Gold 30g costs $93.33 vs Pure Himalayan's 30g resin at approximately $39.99 — a $53 premium for the same jar size. The primary differentiators for that premium are: Pürblack's 5-patent purification process, multi-region sourcing, and 555 PPM colloidal gold infusion. The scientific literature on oral colloidal gold remains limited compared to the established research base on fulvic acid and shilajit bioactive compounds. Pure Himalayan's 60% fulvic acid, ISO/IEC 17025-accredited COA, and 16,000+ ft Himalayan sourcing represent well-documented quality at a fraction of the price. The gold infusion is a premium positioning feature rather than a clinically validated potency advantage — buyers should evaluate it accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Which brand is better for someone new to shilajit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Himalayan Shilajit is the stronger starting point for new buyers. At approximately $39.99 for 30g ($1.33/g), it offers 60% verified fulvic acid, an ISO/IEC 17025-accredited third-party COA, heavy metals testing (all pass), free shipping, GMP certification, and a money-back guarantee — giving you a comprehensive quality baseline at a reasonable entry price. Pürblack's True Gold at $93.33 for 30g is a significant financial commitment for a first experience, and the premium features (patents, gold infusion) are best appreciated by buyers who already understand the shilajit quality spectrum. Start with Pure Himalayan to establish your response to high-quality shilajit; explore Pürblack if you later want to compare a patent-backed live resin approach.",
      },
    },
  ],
};

// ── Helpers ─────────────────────────────────────────────────────────────────

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

// ── Brand data ───────────────────────────────────────────────────────────────

const PURBLACK = {
  name: "Pürblack",
  shortName: "Pürblack",
  tier: "A",
  tierColor: "bg-emerald-500 text-white",
  fulvicAcid: "Not Reported — DBP verified",
  pricePerGram: "$3.11/g",
  origin: "Multi-region (Caucasus, Siberia, Himalayas)",
  coa: true,
  coaDetail: "Pürblack Inc., Temecula, CA (May–Dec 2025)",
  dbpVerified: true,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: false,
  moneyBack: false,
  bestFor: "Patent-backed US live resin & precious metal infusions",
  affiliateUrl: "https://purblack.pxf.io/c/7221460/3041684/36963",
  productLabel: "True Gold Live Resin 30g — $93.33",
  price: "$93.33",
  reviewSlug: "purblack-shilajit-review",
};

const PURE_HIMALAYAN = {
  name: "Pure Himalayan Shilajit",
  shortName: "Pure Himalayan",
  tier: "S",
  tierColor: "bg-amber-400 text-amber-900",
  fulvicAcid: "60%",
  pricePerGram: "$1.33/g",
  origin: "Himalayan Mountains, 16,000+ ft",
  coa: true,
  coaDetail: "ISO/IEC 17025 Accredited US Lab",
  dbpVerified: false,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: true,
  moneyBack: true,
  bestFor: "ISO/IEC 17025 accreditation + best value vs Pürblack",
  affiliateUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
  productLabel: "Authentic Shilajit Resin 30g — $39.99",
  price: "$39.99",
  reviewSlug: "pure-himalayan-shilajit-review",
};

// ── Comparison table rows ────────────────────────────────────────────────────

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  {
    label: "Tier",
    a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURBLACK.tierColor}`}>{PURBLACK.tier}</span>,
    b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURE_HIMALAYAN.tierColor}`}>{PURE_HIMALAYAN.tier}</span>,
  },
  {
    label: "Fulvic Acid",
    a: <strong className="text-[#0D1F14]">{PURBLACK.fulvicAcid}</strong>,
    b: <strong className="text-[#0D1F14]">{PURE_HIMALAYAN.fulvicAcid}</strong>,
  },
  {
    label: "Price / Gram",
    a: <span className="text-[#0D1F14]">{PURBLACK.pricePerGram}</span>,
    b: <span className="text-[#10B981] font-bold">{PURE_HIMALAYAN.pricePerGram}</span>,
  },
  {
    label: "Origin",
    a: PURBLACK.origin,
    b: PURE_HIMALAYAN.origin,
  },
  {
    label: "COA Standard",
    a: <span><CheckIcon pass={PURBLACK.coa} /> {PURBLACK.coaDetail}</span>,
    b: <span><CheckIcon pass={PURE_HIMALAYAN.coa} /> {PURE_HIMALAYAN.coaDetail}</span>,
  },
  {
    label: "US Patents",
    a: <span className="text-[#10B981] font-bold">5 Patents</span>,
    b: <span className="text-[#4A6358]">None</span>,
  },
  {
    label: "Heavy Metals",
    a: <HMBadge status={PURBLACK.heavyMetals} />,
    b: <HMBadge status={PURE_HIMALAYAN.heavyMetals} />,
  },
  {
    label: "GMP Certified",
    a: <CheckIcon pass={PURBLACK.gmpCertified} />,
    b: <CheckIcon pass={PURE_HIMALAYAN.gmpCertified} />,
  },
  {
    label: "No Fillers / Additives",
    a: <CheckIcon pass={true} />,
    b: <CheckIcon pass={true} />,
  },
  {
    label: "Free Shipping",
    a: <CheckIcon pass={PURBLACK.freeShipping} />,
    b: <CheckIcon pass={PURE_HIMALAYAN.freeShipping} />,
  },
  {
    label: "Money-Back Guarantee",
    a: <CheckIcon pass={PURBLACK.moneyBack} />,
    b: <CheckIcon pass={PURE_HIMALAYAN.moneyBack} />,
  },
  {
    label: "Best For",
    a: <span className="text-[#4A6358]">{PURBLACK.bestFor}</span>,
    b: <span className="text-[#4A6358]">{PURE_HIMALAYAN.bestFor}</span>,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PurblackVsPureHimalayanPage() {
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
              <span className="text-white">Pürblack vs Pure Himalayan</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Pürblack vs Pure Himalayan Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              Pürblack and Pure Himalayan Shilajit approach quality assurance from opposite ends of the spectrum. Pürblack is a US-manufactured live resin backed by 5 patents and a pharmaceutical-grade purification process, sourcing raw material from the Caucasus, Siberia, and Himalayas simultaneously — with select SKUs infused with 555 PPM colloidal gold. Pure Himalayan Shilajit sources from the Himalayan Mountains at 16,000+ feet altitude, uses traditional water purification methods with no fillers or additives, and tests through an ISO/IEC 17025-accredited US laboratory — the highest internationally recognized standard for testing lab competence. Both are GMP certified and third-party COA verified, but their quality philosophies, price points, sourcing approaches, and lab accreditation standards differ in ways that should inform your choice. Pure Himalayan also offers a money-back guarantee and free shipping — practical advantages Pürblack does not match.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Pure Himalayan</span>
              <span className="text-[#9EC9AD] text-xs">(S-tier, ISO/IEC 17025, best value vs Pürblack)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* ── Side-by-side CTA cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: PURBLACK, isWinner: false },
              { brand: PURE_HIMALAYAN, isWinner: true },
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
                  {brand.moneyBack && (
                    <span className="bg-[#F0FAF4] text-[#10B981] text-xs px-2 py-0.5 rounded-full font-medium">
                      Money-back guarantee
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
                <Link
                  href={`/blog/${brand.reviewSlug}`}
                  className="text-center text-xs text-[#10B981] hover:underline"
                >
                  Read full {brand.shortName} review →
                </Link>
              </div>
            ))}
          </div>

          {/* ── Brand overview: Pürblack ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Pürblack: Patent-Backed US Live Resin</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pürblack holds a unique position in the shilajit market: <strong>5 US patents</strong> covering their live resin purification methodology, manufactured entirely in the United States from raw material sourced across three distinct high-altitude regions — the Caucasus Mountains, Siberia, and the Himalayas. This multi-origin sourcing philosophy, combined with a 5th and 6th generation refining process developed over more than a decade, underpins their claim to produce the most technologically advanced shilajit available. Their GMP-certified US facility operates under pharmaceutical-grade quality controls, and all products are third-party tested by a US pharmaceutical-grade testing laboratory.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The product line spans the standard <strong>Research Grade</strong> live resin, the <strong>True Gold</strong> formula (15g and 30g) featuring 555 PPM colloidal gold infusion, a bulk <strong>True Gold X7</strong> (210g), and the <strong>White Rabbit</strong> series (Vive, Slim, Serene) targeting specific wellness profiles with precious metal infusions. Each SKU is COA verified and includes heavy metals testing. For buyers who view US intellectual property protection as a meaningful proxy for manufacturing rigor — and who want to explore formulations that go beyond conventional shilajit resin — Pürblack offers a compelling, credentialed case.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The trade-off is straightforward: Pürblack is expensive. True Gold 30g at $93.33 ($3.11/g) costs more than double Pure Himalayan's flagship 30g resin. That price gap is not bridged by a money-back guarantee, and Pürblack does not offer free shipping. Buyers considering Pürblack should approach it as a premium exploration — a technologically differentiated product — rather than an everyday supplement optimized for long-term cost-effectiveness.
            </p>
          </section>

          {/* ── Brand overview: Pure Himalayan ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Pure Himalayan: ISO/IEC 17025 Accreditation & Traditional Purity</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pure Himalayan Shilajit sources exclusively from the Himalayan Mountains at <strong>16,000+ feet altitude</strong> — one of the highest confirmed sourcing elevations among the brands we track. At that altitude, the mineral concentration and bioactive compound profile of naturally exuded shilajit is typically at its most concentrated. Their purification process uses traditional water filtration technology with no intensive heat, no solvents, and <strong>no fillers or additives</strong> — 100% pure shilajit, nothing added.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The defining quality credential Pure Himalayan holds is their <strong>ISO/IEC 17025-accredited US laboratory</strong> COA. ISO/IEC 17025 is the international gold standard for testing laboratory competence — it means the lab conducting the analysis has been independently audited for accuracy, equipment calibration, methodology consistency, and staff qualifications. This is the most rigorous lab credential in our database, and it directly validates the reliability of their published COA results: 60% fulvic acid, heavy metals all pass, purity up to 99.9%.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pure Himalayan is S-tier in our database, holds GMP certification, and offers the broadest product range among Himalayan-sourced brands: resin, liquid drops, tablets, soft resin, and solid shilajit. They offer <strong>free shipping</strong> on all orders and a <strong>money-back guarantee</strong> — reducing the financial risk for first-time buyers significantly. At $1.33/g for the 30g resin, they deliver ISO-accredited quality at a price that supports daily long-term supplementation without strain.
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
                      Pürblack
                    </th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">
                      <span className="text-[#10B981] text-xs mr-1">★</span>
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
              Pure Himalayan Shilajit wins this comparison on value, lab accreditation, and practical buyer experience. ISO/IEC 17025 is the strongest lab credential in our database — it validates that the COA numbers you are reading were produced by a lab held to the highest internationally audited standard. At $1.33/g with free shipping, a money-back guarantee, 60% verified fulvic acid, GMP certification, and 16,000+ ft Himalayan sourcing, Pure Himalayan delivers S-tier quality at a price point that makes long-term supplementation straightforward. Pürblack wins on process differentiation: 5 US patents, multi-region sourcing, and pharmaceutical-grade domestic manufacturing are genuine differentiators for buyers who want to explore a technologically distinct product. The True Gold gold infusion (555 PPM) is a further premium for buyers drawn to precious metal formulations. For most buyers — especially those evaluating these two brands side by side — Pure Himalayan represents the clearer, more cost-efficient choice for documented quality.
            </p>
          </section>

          {/* ── Why each wins ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">
                Why Pürblack wins
              </h3>
              <ul className="space-y-2">
                {[
                  "5 US patents on live resin purification — the only patent-protected shilajit process in our database",
                  "Multi-region raw material sourcing across Caucasus, Siberia, and Himalayas simultaneously",
                  "True Gold formula with 555 PPM colloidal gold — unique precious metal infusion not offered elsewhere",
                  "US pharmaceutical-grade manufacturing with domestic quality control and GMP certification",
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
                  "ISO/IEC 17025-accredited US lab — the gold standard for testing lab competence; strongest credential in our database",
                  "$1.33/g vs $3.11/g — more than half the price per gram at S-tier quality with free shipping included",
                  "Money-back guarantee — risk-free first purchase that Pürblack does not offer",
                  "16,000+ ft Himalayan altitude sourcing, no fillers or additives, 60% fulvic acid, GMP certified",
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
                  Buy Pürblack if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You are an experienced shilajit user who has already tried premium Himalayan and Altai resins and wants to explore a patent-backed, US-manufactured live resin technology. Pürblack is the right pick if US patents and multi-region sourcing are important quality signals for you — or if you want to experience a precious-metal-infused formula (True Gold, 555 PPM gold). Budget $3.11–$5.00/g and approach it as a premium experiment rather than an everyday supplement.
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
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">
                  Buy Pure Himalayan if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want the highest lab accreditation standard (ISO/IEC 17025) at a price that makes daily use genuinely practical. Pure Himalayan's S-tier resin at $1.33/g with free shipping, a money-back guarantee, 60% verified fulvic acid, and no fillers is the most defensible choice for buyers comparing these two brands. Whether you are new to shilajit or looking for a well-documented premium Himalayan resin, Pure Himalayan offers the stronger practical value proposition.
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
              <Link href="/blog/purblack-shilajit-review" className="text-[#10B981] hover:underline">
                Full Pürblack review →
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
