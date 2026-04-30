import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pürblack vs Natural Shilajit — Full Comparison (2026)",
  description:
    "Pürblack vs Natural Shilajit: head-to-head comparison of US patents vs DBP verification, sourcing, COA depth, price per gram, and which brand is right for you. Full 2026 review.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/purblack-vs-natural-shilajit" },
  openGraph: {
    title: "Pürblack vs Natural Shilajit — Full Comparison (2026)",
    description:
      "Pürblack vs Natural Shilajit: patent-backed US live resin vs DBP-verified UNESCO Altai resin. Compare sourcing, COA depth, price per gram, and overall value.",
    url: "https://www.shilajitprice.com/compare/purblack-vs-natural-shilajit",
    type: "article",
  },
};

// ── Schema ──────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pürblack vs Natural Shilajit — Full Comparison (2026)",
  description:
    "Pürblack vs Natural Shilajit: head-to-head comparison of US patents vs DBP verification, sourcing, COA depth, price per gram, and which brand is right for you.",
  url: "https://www.shilajitprice.com/compare/purblack-vs-natural-shilajit",
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
      name: "Pürblack vs Natural Shilajit",
      item: "https://www.shilajitprice.com/compare/purblack-vs-natural-shilajit",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DBP verification and does Pürblack have it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DBP stands for Dibenzo-α-pyrones, a class of bioactive compounds found in authentic shilajit that work synergistically with fulvic acid. DBP verification confirms the presence of these secondary markers — providing strong evidence that a product is genuine shilajit rather than a fulvic acid isolate or adulterated product. Natural Shilajit publishes DBP verification as part of their triple-method COA (ICP-MS, LC-MS, FTIR). Pürblack does not publish DBP-specific testing in their public COA documentation. For buyers who prioritize biomarker authenticity verification as their primary quality signal, this is a meaningful distinction in Natural Shilajit's favor.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Pürblack so much more expensive than Natural Shilajit per gram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pürblack's True Gold 30g at $93.33 ($3.11/g) costs roughly 27% more per gram than Natural Shilajit's 20g at $49.00 ($2.45/g) — already a premium brand. That gap widens further on Pürblack's White Rabbit line at $5.00/g. The premium reflects three factors: (1) US pharmaceutical-grade manufacturing with 5 patent-protected processing steps, which adds significant production cost; (2) multi-region raw material sourcing from Caucasus, Siberia, and Himalayas simultaneously; and (3) precious metal infusion in select SKUs (555 PPM gold in True Gold). Natural Shilajit's price reflects UNESCO-protected Altai sourcing, triple-method COA, and DBP verification — a premium over mass-market brands but still substantially below Pürblack's ceiling.",
      },
    },
    {
      "@type": "Question",
      name: "Has Natural Shilajit been independently verified as a legitimate brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Natural Shilajit was established in 2014 and has served over 180,000 customers globally. Their COA is publicly available on their website (naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests), tested by a third-party lab using ICP-MS, LC-MS, and FTIR methodology. They hold DBP verification — the most specific authenticity test for genuine shilajit — GMP certification, and FDA facility registration. Their raw material is sourced from UNESCO-protected Altai Mountains in Siberia. ShilajitPrice.com rates Natural Shilajit S-tier, the highest classification in our database. Their decade-long track record and six-figure customer base provide strong real-world validation alongside their documented laboratory credentials.",
      },
    },
    {
      "@type": "Question",
      name: "Which brand is better for long-term daily supplementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For long-term daily supplementation, Natural Shilajit offers the more practical case: lower price per gram ($2.45/g vs $3.11–$5.00/g for Pürblack), DBP-verified Altai resin with a triple-method COA, GMP certification, and a bulk 150g option at $0.67/g that makes sustained use much more cost-effective. Pürblack is an excellent product but the sustained cost is significant at scale — a 300mg daily dose from Pürblack True Gold 30g costs roughly $0.93/serving vs Natural Shilajit's $0.75/serving on the 20g jar (and as low as $0.20/serving on the 150g bulk). Both brands have the documented quality for confident long-term use; Natural Shilajit is the more sustainable financial choice for daily supplementation.",
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
  bestFor: "Patent-backed US live resin & precious metal infusions",
  affiliateUrl: "https://purblack.pxf.io/c/7221460/3041684/36963",
  productLabel: "True Gold Live Resin 30g — $93.33",
  price: "$93.33",
  reviewSlug: "purblack-shilajit-review",
};

const NATURAL_SHILAJIT = {
  name: "Natural Shilajit",
  shortName: "Natural Shilajit",
  tier: "S",
  tierColor: "bg-amber-400 text-amber-900",
  fulvicAcid: "~70%",
  pricePerGram: "$2.45/g",
  origin: "UNESCO-protected Altai Mountains, Siberia",
  coa: true,
  coaDetail: "ICP-MS · LC-MS · FTIR — DBP verified",
  dbpVerified: true,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: false,
  bestFor: "DBP verification + triple-method COA + bulk value",
  affiliateUrl: "https://naturalshilajit.com/?rfsn=9069392.c841fa",
  productLabel: "Altai Shilajit Resin 20g — $49.00",
  price: "$49.00",
  reviewSlug: "natural-shilajit-review",
};

// ── Comparison table rows ────────────────────────────────────────────────────

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  {
    label: "Tier",
    a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURBLACK.tierColor}`}>{PURBLACK.tier}</span>,
    b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${NATURAL_SHILAJIT.tierColor}`}>{NATURAL_SHILAJIT.tier}</span>,
  },
  {
    label: "Fulvic Acid",
    a: <strong className="text-[#0D1F14]">{PURBLACK.fulvicAcid}</strong>,
    b: <strong className="text-[#0D1F14]">{NATURAL_SHILAJIT.fulvicAcid}</strong>,
  },
  {
    label: "Price / Gram",
    a: PURBLACK.pricePerGram,
    b: NATURAL_SHILAJIT.pricePerGram,
  },
  {
    label: "Origin",
    a: PURBLACK.origin,
    b: NATURAL_SHILAJIT.origin,
  },
  {
    label: "COA",
    a: <span><CheckIcon pass={PURBLACK.coa} /> {PURBLACK.coaDetail}</span>,
    b: <span><CheckIcon pass={NATURAL_SHILAJIT.coa} /> {NATURAL_SHILAJIT.coaDetail}</span>,
  },
  {
    label: "DBP Verified",
    a: <CheckIcon pass={PURBLACK.dbpVerified} />,
    b: <CheckIcon pass={NATURAL_SHILAJIT.dbpVerified} />,
  },
  {
    label: "US Patents",
    a: <span className="text-[#10B981] font-bold">5 Patents</span>,
    b: <span className="text-[#4A6358]">None</span>,
  },
  {
    label: "Est. / Track Record",
    a: <span className="text-[#4A6358]">Patent-backed</span>,
    b: <span className="text-[#0D1F14] font-medium">Since 2014 · 180k+ customers</span>,
  },
  {
    label: "Heavy Metals",
    a: <HMBadge status={PURBLACK.heavyMetals} />,
    b: <HMBadge status={NATURAL_SHILAJIT.heavyMetals} />,
  },
  {
    label: "GMP Certified",
    a: <CheckIcon pass={PURBLACK.gmpCertified} />,
    b: <CheckIcon pass={NATURAL_SHILAJIT.gmpCertified} />,
  },
  {
    label: "Bulk Option",
    a: <span className="text-[#4A6358]">210g ($2.38/g)</span>,
    b: <span className="text-[#10B981] font-bold">150g ($0.67/g)</span>,
  },
  {
    label: "Best For",
    a: <span className="text-[#4A6358]">{PURBLACK.bestFor}</span>,
    b: <span className="text-[#4A6358]">{NATURAL_SHILAJIT.bestFor}</span>,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PurblackVsNaturalShilajitPage() {
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
              <span className="text-white">Pürblack vs Natural Shilajit</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Pürblack vs Natural Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              Pürblack and Natural Shilajit represent two distinct approaches to premium quality assurance. Pürblack is a US-manufactured live resin backed by 5 patents and a pharmaceutical-grade purification process developed across more than a decade of iteration — sourcing raw material from the Caucasus, Siberia, and Himalayas simultaneously. Natural Shilajit is a single-origin Altai brand established in 2014 that has served over 180,000 customers, holds DBP (Dibenzo-α-pyrones) verification, and uses a triple-method COA (ICP-MS, LC-MS, FTIR) that represents the deepest publicly documented shilajit testing stack we have reviewed. Both brands have third-party verified COAs, GMP certification, and heavy metals testing — but their quality philosophies, sourcing strategies, price points, and verification approaches differ in ways that matter to different buyer profiles.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Natural Shilajit</span>
              <span className="text-[#9EC9AD] text-xs">(DBP verified, S-tier, best per-gram value)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* ── Side-by-side CTA cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: PURBLACK, isWinner: false },
              { brand: NATURAL_SHILAJIT, isWinner: true },
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
            <h2 className="text-xl font-black text-[#0D1F14]">Pürblack: US-Made, Patent-Backed Live Resin</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pürblack is the most technologically distinctive shilajit brand in our database. Their defining credential is the <strong>5 US patents</strong> covering their live resin purification methodology — an intellectual property position no other shilajit brand has established. Their 5th and 6th generation live resin formulas are manufactured entirely in the United States using raw material collected from three high-altitude source regions simultaneously: the Caucasus Mountains, Siberia, and the Himalayas. This multi-origin sourcing philosophy is designed to capture the widest possible mineral and bioactive compound diversity rather than optimizing for a single geographic source.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              All Pürblack products are tested by a US pharmaceutical-grade third-party facility, GMP certified, and ship with COA documentation covering heavy metals and purity markers. Their <strong>True Gold</strong> SKU (available in 15g and 30g) incorporates 555 PPM colloidal gold as a premium differentiator, while the White Rabbit line (Vive, Slim, Serene) extends into further precious metal infusion variants targeting specific wellness profiles. For buyers who prize manufacturing innovation and US-controlled quality assurance above all else, Pürblack offers a compelling and unique argument.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The primary limitation is cost. At $3.11/g for True Gold 30g — and up to $5.00/g for the White Rabbit line — Pürblack is among the most expensive shilajit products on the market. Their public COA documentation, while legitimate, does not publish granular compound measurements (specific mg per serving of fulvic acid, humic acid) at the same level of detail as some competitors. Buyers who want to see exact batch-level numbers will find Natural Shilajit's documentation more exhaustive.
            </p>
          </section>

          {/* ── Brand overview: Natural Shilajit ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Natural Shilajit: DBP-Verified, Decade-Long Track Record</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Natural Shilajit was founded in 2014 and has grown to serve over <strong>180,000 customers</strong> worldwide — one of the largest verified customer bases of any direct-to-consumer shilajit brand. Their raw material is sourced exclusively from <strong>UNESCO-protected Altai Mountains</strong> in Siberia, a legally designated conservation zone that provides documented origin traceability. Their purification process uses cold water extraction with microfiltration at 0.45–1.0 micron — no solvents, no intensive heat — preserving the full bioactive compound spectrum.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The most significant quality differentiator Natural Shilajit holds is <strong>DBP (Dibenzo-α-pyrones) verification</strong>. DBPs are secondary biomarkers specific to genuine shilajit — their presence in a COA confirms the product is authentic shilajit rather than a fulvic acid isolate or adulterated compound. Combined with their triple-method COA (ICP-MS for mineral analysis, LC-MS for organic compounds, FTIR for molecular fingerprinting), Natural Shilajit's testing stack is the most comprehensive publicly documented analysis in our database. Their lab is ISO-certified and FDA-registered.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Natural Shilajit is S-tier in our database — the highest classification — and holds GMP certification alongside their FDA facility registration. Their product range covers resin (20g and 150g bulk), vegan tablets, sun-dried tablets, capsules, and NutriHoney blend, giving long-term users flexible format options. The <strong>150g bulk resin at $0.67/g</strong> is one of the most cost-effective entry points for documented S-tier shilajit available anywhere, making Natural Shilajit the standout choice for buyers who want premium verification at a sustainable long-term price.
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
              Natural Shilajit wins this comparison on the metrics that matter most for documented supplement quality: S-tier rating, DBP verification (the most specific authenticity test for genuine shilajit), a triple-method COA using ICP-MS, LC-MS, and FTIR, a decade-long track record, and a lower price per gram — including a 150g bulk option at $0.67/g that makes sustained use genuinely cost-effective. Pürblack wins on process innovation: 5 US patents covering their live resin methodology, multi-region sourcing across three mountain ranges, and US pharmaceutical-grade manufacturing represent a distinct and credentialed production approach. If you are an experienced buyer specifically interested in patent-backed live resin technology or precious metal infusions, Pürblack is the strongest available option for that exploration. For most buyers — especially those optimizing for verification depth, biomarker authenticity, and long-term value — Natural Shilajit is the clearer choice.
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
                  "Multi-region sourcing (Caucasus, Siberia, Himalayas) — broadest geographic raw material base",
                  "US pharmaceutical-grade manufacturing with GMP certification and domestic quality oversight",
                  "True Gold formula with 555 PPM colloidal gold — unique precious metal infusion unavailable elsewhere",
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
                  "DBP (Dibenzo-α-pyrones) verified — the only S-tier brand to confirm shilajit's secondary biomarkers",
                  "Triple-method COA (ICP-MS + LC-MS + FTIR) — deepest publicly documented testing stack in our database",
                  "UNESCO-protected Altai source — legally documented origin with conservation-zone traceability",
                  "10+ year track record, 180,000+ customers, GMP + FDA-registered facility, bulk 150g at $0.67/g",
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
                  You are an experienced shilajit user who has already used high-quality Altai resins and wants to explore a fundamentally different purification approach. Pürblack is the right choice if US patents, multi-region sourcing, and pharmaceutical-grade domestic manufacturing are your primary quality signals — or if you specifically want to try a precious-metal-infused live resin formula. Budget for $3.11–$5.00/g depending on the SKU.
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
                  Buy Natural Shilajit if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want the most thoroughly verified shilajit product at a price that supports long-term daily use. Natural Shilajit's DBP verification, triple-method COA, UNESCO Altai sourcing, decade-long track record, and 180,000+ customer base represent the deepest verification stack of any brand in our database at a reasonable price. The 150g bulk option at $0.67/g makes it one of the best long-term value propositions among S-tier products.
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
              <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline">
                Best shilajit brands ranked →
              </Link>
              <Link href="/blog/altai-vs-himalayan-shilajit" className="text-[#10B981] hover:underline">
                Altai vs Himalayan shilajit →
              </Link>
              <Link href="/blog/purblack-shilajit-review" className="text-[#10B981] hover:underline">
                Full Pürblack review →
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
