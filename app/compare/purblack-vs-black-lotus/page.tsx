import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pürblack vs Black Lotus Shilajit — Full Comparison (2026)",
  description:
    "Pürblack vs Black Lotus shilajit: head-to-head comparison of US patents, sourcing, fulvic acid %, COA lab standards, price per gram, and which brand is worth it. Full 2026 review.",
  alternates: { canonical: "https://shilajitprice.com/compare/purblack-vs-black-lotus" },
  openGraph: {
    title: "Pürblack vs Black Lotus Shilajit — Full Comparison (2026)",
    description:
      "Pürblack vs Black Lotus shilajit: US patents vs high-FA Altai resin. Compare sourcing, COA depth, price per gram, and overall value.",
    url: "https://shilajitprice.com/compare/purblack-vs-black-lotus",
    type: "article",
  },
};

// ── Schema ─────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pürblack vs Black Lotus Shilajit — Full Comparison (2026)",
  description:
    "Pürblack vs Black Lotus shilajit: head-to-head comparison of US patents, sourcing, fulvic acid %, COA lab standards, price per gram, and which brand is worth it.",
  url: "https://shilajitprice.com/compare/purblack-vs-black-lotus",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
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
      name: "Pürblack vs Black Lotus",
      item: "https://shilajitprice.com/compare/purblack-vs-black-lotus",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Pürblack different from conventional shilajit resins like Black Lotus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pürblack holds 5 US patents covering their purification process — a distinction no other shilajit brand in our database can claim. Their 5th and 6th generation live resin formula uses a pharmaceutical-grade purification method developed and refined over more than a decade, and select SKUs include precious metal infusions (True Gold contains 555 PPM gold). Black Lotus, by contrast, is a cold-processed Altai Mountain resin that leads on documented fulvic acid percentage (85%+) and price-per-gram value. They represent different philosophies: Pürblack prioritizes process innovation and US-manufactured quality control; Black Lotus prioritizes raw bioactive potency at a competitive price.",
      },
    },
    {
      "@type": "Question",
      name: "Does Black Lotus have as rigorous third-party testing as Pürblack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both brands use legitimate third-party testing, but they differ in transparency. Black Lotus publishes a full-panel COA from IAS Laboratories in Phoenix, AZ — a named, verifiable third-party lab — and tests every batch with results publicly accessible on their website. The COA covers fulvic acid (161mg/serving), humic acid (22mg/serving), heavy metals (all pass), and microbiology. Pürblack tests at a US pharmaceutical-grade facility and publishes COA data, but their testing details are less granular in public-facing documentation. For consumers who want to see exact batch-level compound measurements, Black Lotus's full-panel batch-by-batch COA gives the most complete transparency.",
      },
    },
    {
      "@type": "Question",
      name: "Is Pürblack's gold infusion (555 PPM) backed by science?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Colloidal gold at 555 PPM is an interesting differentiation, but the scientific literature on oral colloidal gold supplementation remains limited compared to the robust research base for fulvic acid and shilajit bioactive compounds. Pürblack's True Gold product is a premium, niche offering positioned at buyers who value precious metal infusion as a qualitative differentiator. It is third-party tested and US-made, which provides baseline quality assurance. However, buyers primarily motivated by documented bioactive compound concentration — fulvic acid, humic acid, DBPs — will find stronger published evidence supporting conventional high-FA resins like Black Lotus. Gold infusion is a luxury positioning feature, not a clinically validated potency advantage at this time.",
      },
    },
    {
      "@type": "Question",
      name: "Which should I choose for a first-time shilajit purchase: Pürblack or Black Lotus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For first-time buyers, Black Lotus is the stronger starting point. At $36.99 for 30g ($1.23/g), it delivers 85%+ fulvic acid with a full-panel third-party COA, free shipping, and a 30-day money-back guarantee — giving you a low-risk entry into high-quality, documented shilajit. Pürblack's True Gold 30g at $93.33 ($3.11/g) is a significant premium that makes more sense for buyers already familiar with shilajit who want to explore patent-backed live resin technology or precious metal infusions. Start with Black Lotus to establish your baseline response to quality shilajit, then explore Pürblack if you want to compare a more technologically differentiated product.",
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

const PURBLACK = {
  name: "Pürblack",
  shortName: "Pürblack",
  tier: "A",
  tierColor: "bg-emerald-500 text-white",
  fulvicAcid: "Verified",
  pricePerGram: "$3.11/g",
  origin: "Multi-region (Caucasus, Siberia, Himalayas)",
  coa: true,
  coaDetail: "US pharmaceutical-grade 3rd-party",
  dbpVerified: false,
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: false,
  bestFor: "Patent-backed process & precious metal infusions",
  purityScore: 9,
  affiliateUrl: "https://purblack.pxf.io/c/7221460/3041684/36963",
  productLabel: "True Gold Live Resin 30g — $93.33",
  price: "$93.33",
  reviewSlug: "purblack-shilajit-review",
};

const BLACK_LOTUS = {
  name: "Black Lotus Shilajit",
  shortName: "Black Lotus",
  tier: "S",
  tierColor: "bg-amber-400 text-amber-900",
  fulvicAcid: "85%+",
  pricePerGram: "$1.23/g",
  origin: "Altai Mountains, Siberia",
  coa: true,
  coaDetail: "Full-panel 3rd-party COA (IAS Labs)",
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
    a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURBLACK.tierColor}`}>{PURBLACK.tier}</span>,
    b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${BLACK_LOTUS.tierColor}`}>{BLACK_LOTUS.tier}</span>,
  },
  {
    label: "Fulvic Acid",
    a: <strong className="text-[#0D1F14]">{PURBLACK.fulvicAcid}</strong>,
    b: <strong className="text-[#0D1F14]">{BLACK_LOTUS.fulvicAcid}</strong>,
  },
  {
    label: "Price / Gram",
    a: PURBLACK.pricePerGram,
    b: BLACK_LOTUS.pricePerGram,
  },
  {
    label: "Origin",
    a: PURBLACK.origin,
    b: BLACK_LOTUS.origin,
  },
  {
    label: "COA",
    a: <span><CheckIcon pass={PURBLACK.coa} /> {PURBLACK.coaDetail}</span>,
    b: <span><CheckIcon pass={BLACK_LOTUS.coa} /> {BLACK_LOTUS.coaDetail}</span>,
  },
  {
    label: "US Patents",
    a: <span className="text-[#10B981] font-bold">5 Patents</span>,
    b: <span className="text-[#4A6358]">None</span>,
  },
  {
    label: "Production",
    a: <span className="text-[#0D1F14]">Made in USA</span>,
    b: <span className="text-[#0D1F14]">Made in USA</span>,
  },
  {
    label: "Heavy Metals",
    a: <HMBadge status={PURBLACK.heavyMetals} />,
    b: <HMBadge status={BLACK_LOTUS.heavyMetals} />,
  },
  {
    label: "GMP Certified",
    a: <CheckIcon pass={PURBLACK.gmpCertified} />,
    b: <CheckIcon pass={BLACK_LOTUS.gmpCertified} />,
  },
  {
    label: "Free Shipping",
    a: <CheckIcon pass={PURBLACK.freeShipping} />,
    b: <CheckIcon pass={BLACK_LOTUS.freeShipping} />,
  },
  {
    label: "Best For",
    a: <span className="text-[#4A6358]">{PURBLACK.bestFor}</span>,
    b: <span className="text-[#4A6358]">{BLACK_LOTUS.bestFor}</span>,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function PurblackVsBlackLotusPage() {
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
              <span className="text-white">Pürblack vs Black Lotus</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Pürblack vs Black Lotus Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              Pürblack and Black Lotus sit at opposite ends of the premium shilajit spectrum. Pürblack holds 5 US patents, produces its live resin in the USA from multi-region sources (Caucasus, Siberia, Himalayas), and offers precious-metal-infused formulas. Black Lotus cold-processes single-origin Altai resin, publishes a full-panel batch-level COA from IAS Laboratories in Phoenix, AZ, and delivers the highest documented fulvic acid concentration in our database at the lowest price per gram among S-tier brands. Both are GMP certified, both are made in the USA, and both have verified COAs — the decision comes down to what you value more: patent-backed process innovation or maximum documented bioactive potency per dollar.
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
              { brand: PURBLACK, isWinner: false },
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
              Pürblack is the most technologically differentiated shilajit brand in our database. Founded with a focus on pharmaceutical-grade production standards, Pürblack holds <strong>5 US patents</strong> covering their purification and processing methodology — a credential unique among shilajit brands. Their 5th and 6th generation live resin formulas are manufactured in the United States from raw material sourced from multiple high-altitude regions: the Caucasus Mountains, Siberia, and the Himalayas. This multi-source approach is intended to capture the broadest possible mineral and bioactive compound profile from the world's highest-quality shilajit deposits.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Their flagship <strong>True Gold</strong> product contains 555 PPM (parts per million) of colloidal gold alongside the base live resin — a premium differentiation that positions Pürblack in the ultra-luxury supplement tier. All Pürblack products are third-party tested at a US pharmaceutical-grade facility, GMP certified, and ship with COA documentation. Their White Rabbit line extends the concept further with additional precious metal infusion variants (Vive, Slim, Serene), each targeting specific wellness outcomes.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The core trade-off with Pürblack is price. At $3.11/g for True Gold 30g and $5.00/g for White Rabbit variants, they command a significant premium over other high-quality brands. For buyers who prioritize process pedigree, US patents, and precious metal infusion as quality signals, that premium is justified. For buyers optimizing for documented fulvic acid concentration per dollar, Pürblack is not the value play — but it was never intended to be.
            </p>
          </section>

          {/* ── Brand overview: Black Lotus ── */}
          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Black Lotus: Highest Documented FA% at Best Value</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Black Lotus Shilajit sources exclusively from the Altai Mountains of Siberia at 16,000+ feet altitude and cold-processes their resin to preserve the full spectrum of bioactive compounds. Their COA is published by <strong>IAS Laboratories in Phoenix, AZ</strong> — a named, verifiable third-party lab — and covers every batch individually. Batch #93–94 COA data shows 161mg fulvic acid and 22mg humic acid per 300mg serving, equating to <strong>85%+ fulvic acid by content weight</strong> — the highest documented figure in our entire database.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Black Lotus is <strong>GMP certified</strong>, non-GMO, vegan, gluten-free, and made in the USA. Heavy metals testing covers lead, mercury, arsenic, and cadmium — all pass. Their product line spans resin, capsules, tinctures, gummies, honey blend, and tablets, making them the most comprehensive single-brand product lineup among our S-tier brands. At <strong>$36.99 for 30g ($1.23/g)</strong> with free shipping and a 30-day money-back guarantee, they offer the best price-to-documented-purity ratio in our database.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              For consumers who want the most transparency in supplement quality — exact batch numbers, named testing labs, published compound measurements — Black Lotus's COA documentation is best-in-class. The IAS Laboratories relationship is long-standing, and results are accessible on their website without having to request them. This level of proactive documentation builds trust with educated supplement consumers and is a meaningful differentiator in a market where many brands provide COA data only on request.
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
              Black Lotus wins on documented bioactive value: 85%+ fulvic acid at $1.23/g with a full-panel batch-level COA from a named US third-party lab is the strongest potency-to-price combination in our database. For most buyers — especially first-timers — this is the clear choice. Pürblack wins on process differentiation: 5 US patents, multi-region sourcing, pharmaceutical-grade US manufacturing, and precious metal infusions (555 PPM gold in True Gold) represent a level of production innovation no other brand matches. If you are an experienced shilajit user who has already explored high-FA Altai resins and wants to investigate a fundamentally different purification technology, Pürblack is the most credentialed option for that exploration. For everyday high-quality supplementation optimized for documented fulvic acid per dollar, Black Lotus is the pick.
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
                  "5 US patents covering live resin purification process — unique in the shilajit category",
                  "Multi-region sourcing (Caucasus, Siberia, Himalayas) — broadest raw material base of any brand",
                  "True Gold formula with 555 PPM colloidal gold infusion — ultra-premium differentiation",
                  "US pharmaceutical-grade manufacturing and third-party testing with GMP certification",
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
                  "85%+ fulvic acid — highest documented FA% in our database, verified by IAS Laboratories per batch",
                  "$1.23/g — best price per gram of any S-tier brand; $93.33 vs $36.99 for a 30g jar",
                  "Full-panel batch-level COA: named lab (IAS Laboratories Phoenix AZ), exact compound measurements, publicly posted",
                  "Free shipping + 30-day money-back guarantee — lowest-risk entry into premium shilajit",
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
                  You are an experienced shilajit user who wants to explore a patent-backed, US-manufactured live resin with multi-region sourcing. Also the right pick if you are drawn to precious metal infusion formulas (True Gold 555 PPM gold) or if you specifically value US intellectual property protection as a proxy for manufacturing rigor. Pürblack is a premium exploration purchase, not an everyday value play — budget accordingly at $3.11–$5.00/g depending on the product line.
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
                  Buy Black Lotus if…
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want the highest documented fulvic acid concentration at the best price-per-gram among S-tier brands. Black Lotus is the strongest everyday choice for buyers who prioritize batch-level COA transparency, verified compound measurements from a named US third-party lab, free shipping, and a 30-day guarantee. Whether you are new to shilajit or a returning user looking for the best value in a well-documented premium resin, Black Lotus is the default recommendation.
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
              <Link href="/blog/purblack-shilajit-review" className="text-[#10B981] hover:underline">
                Full Pürblack review →
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
