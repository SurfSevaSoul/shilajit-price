import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fractal Forest vs Pürblack Shilajit: COA, Source & Price Compared (2026)",
  description:
    "Fractal Forest vs Pürblack: both A-tier. Fractal Forest offers liquid drops with all HMs ND at accessible pricing; Pürblack offers 5 US patents and precious metal infusions at $3.11/g. Compared by COA data.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/fractal-forest-vs-purblack" },
  openGraph: {
    title: "Fractal Forest vs Pürblack Shilajit: COA, Source & Price Compared (2026)",
    description:
      "Fractal Forest vs Pürblack: both A-tier. Fractal Forest offers liquid drops with all HMs ND at accessible pricing; Pürblack offers 5 US patents and precious metal infusions at $3.11/g. Compared by COA data.",
    url: "https://www.shilajitprice.com/compare/fractal-forest-vs-purblack",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fractal Forest vs Pürblack Shilajit: COA, Source & Price Compared (2026)",
  description: "Fractal Forest vs Pürblack: both A-tier. Fractal Forest offers liquid drops with all HMs ND at accessible pricing; Pürblack offers 5 US patents and precious metal infusions at $3.11/g.",
  url: "https://www.shilajitprice.com/compare/fractal-forest-vs-purblack",
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  author: { "@type": "Person", name: "Adrian Voss", url: "https://www.shilajitprice.com/about" },
  publisher: { "@type": "Organization", name: "ShilajitPrice.com", url: "https://www.shilajitprice.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shilajitprice.com/" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.shilajitprice.com/compare" },
    { "@type": "ListItem", position: 3, name: "Fractal Forest vs Pürblack", item: "https://www.shilajitprice.com/compare/fractal-forest-vs-purblack" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Pürblack disclose a fulvic acid percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pürblack does not publish a specific fulvic acid percentage. Their COA (Pürblack Inc., Temecula, CA, May–Dec 2025) documents DBP (dibenzo-alpha-pyrones) verification and a heavy metals panel, but fulvic acid content is not reported as a standalone percentage figure. Pürblack's quality philosophy emphasizes their patented 5th-generation processing technology, DBP preservation, and pharmaceutical-grade US manufacturing over FA% marketing. Fractal Forest's Wild American Drops (IAS Laboratories, Batch 24E0373, November 2024) publish 71.31% fulvic acid by the Verploegh method — a specific, verifiable figure. Their Himalayan Drops do not state a FA% for that product specifically.",
      },
    },
    {
      "@type": "Question",
      name: "How do Fractal Forest's heavy metals results compare to Pürblack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractal Forest's Himalayan Drops (LOT 1001, March 2026, Certified Laboratories Burbank CA — A2LA ISO 17025, Cert 3034.01) have all four heavy metals completely not detected: Lead ND, Arsenic ND, Cadmium ND, Mercury ND. Their Wild American Drops (IAS Laboratories) report Lead ND, Arsenic 0.07, Cadmium 0.07, Mercury 0.02 ppm — all within safe limits. Pürblack's COA (Pürblack Inc., Temecula, CA) is their own lab documentation and reports all heavy metals passing safety thresholds. Both brands produce clean heavy metals results; Fractal Forest's Himalayan Drops ND result and use of an ISO-accredited third-party lab (Certified Laboratories) represents a more independently verifiable data point.",
      },
    },
    {
      "@type": "Question",
      name: "Are both Fractal Forest and Pürblack A-tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both Fractal Forest and Pürblack are rated A-tier in the ShilajitPrice.com database. A-tier indicates verified COA data, clean heavy metals results, and credible sourcing disclosure — a strong classification. Pürblack holds A-tier based on their DBP-verified proprietary process, 5 US patents, pharmaceutical-grade US manufacturing, and multi-region sourcing. Fractal Forest holds A-tier based on their A2LA ISO 17025 accredited COAs (Certified Laboratories Burbank CA for Himalayan products; IAS Laboratories for Wild American), all-ND heavy metals on Himalayan Drops, and documented 71.31% FA on Wild American Drops.",
      },
    },
    {
      "@type": "Question",
      name: "Which brand should I choose — Fractal Forest or Pürblack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose Pürblack if you specifically want the patent-backed 5th-generation live resin processing, US pharmaceutical-grade manufacturing, DBP verification, or the True Gold colloidal gold infusion — these are unique differentiators that Fractal Forest does not offer. Pürblack at $3.11/g is a premium-tier price point within A-tier. Choose Fractal Forest if you want liquid drops with the cleanest heavy metals data in the liquid shilajit category (Himalayan Drops: all 4 HMs ND), a verified fulvic acid percentage (Wild American Drops: 71.31% FA), third-party ISO-accredited lab testing (Certified Laboratories Burbank CA + IAS Laboratories), and a more accessible price point. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.",
      },
    },
  ],
};

function CheckIcon({ pass }: { pass: boolean }) {
  return pass ? <span className="text-[#10B981] font-bold">✓</span> : <span className="text-red-500 font-bold">✗</span>;
}

function HMBadge({ status }: { status: "pass" | "tested" | "none" }) {
  if (status === "pass") return <span className="text-[#10B981] font-bold">All Pass</span>;
  if (status === "tested") return <span className="text-amber-600 font-bold">Tested</span>;
  return <span className="text-red-500 font-bold">Not tested</span>;
}

const FF = {
  name: "Fractal Forest",
  shortName: "Fractal Forest",
  tier: "A",
  tierColor: "bg-emerald-500 text-white",
  fulvicAcid: "71.31% (Wild American Drops, COA)",
  pricePerGram: "Use code SHILAJIT-PRICE (15% off)",
  origin: "Himalayan Mts., Gilgit Baltistan 16,000ft · North American (Wild American Drops)",
  coa: true,
  coaDetail: "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01) — LOT 1001 Mar 2026 (Himalayan Drops); IAS Laboratories, Phoenix AZ — Batch 24E0373 Nov 2024 (Wild American Drops)",
  heavyMetals: "pass" as const,
  gmpCertified: false,
  freeShipping: false,
  bestFor: "Liquid drops format · Himalayan Drops all 4 HMs ND · accessible price + discount code",
  affiliateUrl: "https://fractalforest.co/SHILAJIT-PRICE",
  productLabel: "Himalayan Drops / Wild American Drops — 15% off w/ code SHILAJIT-PRICE",
  price: "From $44 (15% off)",
  reviewSlug: "fractal-forest-shilajit-review",
};

const PURBLACK = {
  name: "Pürblack",
  shortName: "Pürblack",
  tier: "A",
  tierColor: "bg-emerald-500 text-white",
  fulvicAcid: "Not reported — DBP verified",
  pricePerGram: "$3.11/g",
  origin: "Multi-region (Caucasus, Siberia, Himalayas)",
  coa: true,
  coaDetail: "Pürblack Inc., Temecula, CA (May–Dec 2025)",
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: false,
  bestFor: "5 US patents · pharmaceutical-grade processing · precious metal infusions",
  affiliateUrl: "https://purblack.pxf.io/c/7221460/3041684/36963",
  productLabel: "True Gold Live Resin 30g — $93.33",
  price: "$93.33",
  reviewSlug: "purblack-shilajit-review",
};

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  { label: "Tier", a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${FF.tierColor}`}>{FF.tier}</span>, b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURBLACK.tierColor}`}>{PURBLACK.tier}</span> },
  { label: "Fulvic Acid", a: <strong className="text-[#0D1F14]">{FF.fulvicAcid}</strong>, b: <strong className="text-[#0D1F14]">{PURBLACK.fulvicAcid}</strong> },
  { label: "Price / Gram", a: FF.pricePerGram, b: PURBLACK.pricePerGram },
  { label: "Product Forms", a: "Liquid Drops, Resin", b: "Live Resin (5th-gen patented process)" },
  { label: "Origin", a: FF.origin, b: PURBLACK.origin },
  { label: "COA Lab", a: <span><CheckIcon pass={FF.coa} /> {FF.coaDetail}</span>, b: <span><CheckIcon pass={PURBLACK.coa} /> {PURBLACK.coaDetail}</span> },
  { label: "Heavy Metals", a: <><HMBadge status={FF.heavyMetals} /><span className="block text-[10px] text-[#10B981] font-semibold mt-0.5">Himalayan Drops: All 4 ND</span></>, b: <><HMBadge status={PURBLACK.heavyMetals} /><span className="block text-[10px] text-[#4A6358] mt-0.5">All pass — proprietary lab</span></> },
  { label: "3rd-Party Lab", a: <span className="text-[#10B981] font-semibold">✓ A2LA ISO 17025 (Certified Labs) + IAS Labs</span>, b: <span className="text-amber-600 font-semibold">Proprietary lab (Pürblack Inc.)</span> },
  { label: "GMP Certified", a: <CheckIcon pass={FF.gmpCertified} />, b: <CheckIcon pass={PURBLACK.gmpCertified} /> },
  { label: "Free Shipping", a: <CheckIcon pass={FF.freeShipping} />, b: <CheckIcon pass={PURBLACK.freeShipping} /> },
  { label: "Best For", a: <span className="text-[#4A6358]">{FF.bestFor}</span>, b: <span className="text-[#4A6358]">{PURBLACK.bestFor}</span> },
];

export default function FractalForestVsPurblackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-[#F5F9F6]">

        <div className="bg-[#0D1F14] text-white">
          <div className="max-w-4xl mx-auto px-4 py-10">
            <nav className="text-xs text-[#9EC9AD] mb-4 flex items-center gap-1.5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
              <span>/</span>
              <span className="text-white">Fractal Forest vs Pürblack</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Fractal Forest vs Pürblack Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              Two A-tier brands with sharply different approaches. Pürblack is the research-oriented premium brand: 5 US patents, 5th-generation pharmaceutical-grade US processing, DBP verification, and a True Gold variant with 555 PPM colloidal gold — at $3.11/g, the most expensive A-tier product in our database. Fractal Forest is the liquid drops specialist: Himalayan Drops with all four heavy metals completely not detected (Lead ND, Arsenic ND, Cadmium ND, Mercury ND) tested by Certified Laboratories Burbank CA (A2LA ISO 17025), and Wild American Drops with 71.31% verified fulvic acid (IAS Laboratories) — the only North American sourced shilajit drops with a published COA. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Fractal Forest</span>
              <span className="text-[#9EC9AD] text-xs">(accessible price · ISO-accredited 3rd-party labs · all HMs ND on Himalayan Drops)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: FF, isWinner: true },
              { brand: PURBLACK, isWinner: false },
            ].map(({ brand, isWinner }) => (
              <div key={brand.shortName} className={`rounded-2xl border-2 p-5 bg-white flex flex-col gap-3 ${isWinner ? "border-[#10B981]" : "border-[#D1EDD8]"}`}>
                {isWinner && <div className="text-xs font-bold text-[#10B981] uppercase tracking-widest">★ Our Pick</div>}
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded flex items-center justify-center font-black text-xs ${brand.tierColor}`}>{brand.tier}</span>
                  <span className="font-bold text-[#0D1F14] text-sm">{brand.name}</span>
                </div>
                <div className="text-xs text-[#4A6358]">{brand.productLabel}</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#F0FAF4] text-[#0D1F14] text-xs px-2 py-0.5 rounded-full font-medium">{brand.fulvicAcid} FA</span>
                  <span className="bg-[#F0FAF4] text-[#0D1F14] text-xs px-2 py-0.5 rounded-full font-medium">{brand.pricePerGram}</span>
                </div>
                <a href={brand.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className={`mt-auto w-full text-center text-sm font-bold py-2.5 rounded-xl transition-colors ${isWinner ? "bg-[#10B981] text-white hover:bg-[#0DA872]" : "bg-[#0D1F14] text-white hover:bg-[#182B1F]"}`}>
                  Shop {brand.shortName} →
                </a>
                {brand.reviewSlug && (
                  <Link href={`/blog/${brand.reviewSlug}`} className="text-center text-xs text-[#10B981] hover:underline">
                    Read full {brand.shortName} review →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Fractal Forest: Accessible A-Tier Liquid Drops With Independent Lab Verification</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Fractal Forest's Himalayan Drops (LOT 1001, March 2026) source from Gilgit Baltistan at 16,000ft and are tested independently at <strong>Certified Laboratories in Burbank, CA</strong> — which holds A2LA ISO 17025 accreditation (Certificate 3034.01). The published COA shows Lead ND, Arsenic ND, Cadmium ND, Mercury ND — all four heavy metals completely not detected. This is an independently verifiable result from a named, ISO-accredited third-party lab, a meaningfully different level of COA independence than brand-operated lab documentation. Use code <strong>SHILAJIT-PRICE</strong> for 15% off at fractalforest.co.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Their Wild American Drops (Batch 24E0373, November 2024) are tested at <strong>IAS Laboratories in Phoenix, AZ</strong> — the same lab that tests Black Lotus products — and document 71.31% fulvic acid (Verploegh method), 4.17% humic acid, and heavy metals within safe limits. No other brand in our database offers North American sourced shilajit drops with a batch-specific COA from a named third-party lab. The combination of two separate ISO-accredited labs, a published FA% figure, and all-ND heavy metals on the Himalayan product makes Fractal Forest the most COA-transparent liquid shilajit brand in our database.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Pürblack: The Patent-Backed Research-Grade Premium Brand</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pürblack is the most research-documented live resin brand in our database: <strong>5 US patents</strong> covering their 5th-generation processing technology, pharmaceutical-grade US manufacturing (Pürblack Inc., Temecula, CA), and a product lineup that includes the True Gold variant with 555 PPM colloidal gold. Their processing removes heavy metals while preserving the full bioactive compound spectrum, with DBP (dibenzo-alpha-pyrones) verification confirming compound integrity. They source from multi-region raw materials (Caucasus, Siberia, Himalayas) processed domestically.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The COA is issued by <strong>Pürblack Inc.</strong> — a brand-operated lab rather than an independent third party. Their COA documentation covers heavy metals and DBP content, all passing their stated thresholds. Fulvic acid percentage is not reported. At <strong>$3.11/g</strong> for the True Gold 30g resin ($93.33), Pürblack is the premium-priced A-tier product in this comparison — justified for buyers who specifically want the patented processing, US pharmaceutical-grade manufacturing, or the gold-infused formulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0D1F14] mb-4">Head-to-head comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#D1EDD8] bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D1EDD8]">
                    <th className="text-left px-4 py-3 text-[#4A6358] font-semibold w-1/3">Metric</th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3"><span className="text-[#10B981] text-xs mr-1">★</span>Fractal Forest</th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">Pürblack</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr key={row.label} className={`border-b border-[#F0FAF4] ${i % 2 === 0 ? "bg-white" : "bg-[#F9FDFB]"}`}>
                      <td className="px-4 py-3 text-[#4A6358] font-medium">{row.label}</td>
                      <td className="px-4 py-3 text-center text-[#0D1F14]">{row.a}</td>
                      <td className="px-4 py-3 text-center text-[#0D1F14]">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6">
            <h2 className="text-xl font-black text-[#0D1F14] mb-3">The verdict</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Fractal Forest wins on independent COA transparency, accessible price, and the liquid drops format niche. Their Himalayan Drops use two separately ISO-accredited labs, return all four heavy metals ND, and come with a discount code (SHILAJIT-PRICE, 15% off). Their Wild American Drops document a specific FA% (71.31%) from a named third-party lab — the kind of independently verifiable data point that distinguishes the most COA-transparent brands in our database. For most buyers comparing these two A-tier options, Fractal Forest is the more accessible and independently verifiable choice. Pürblack wins for a specific buyer: those who want pharmaceutical-grade US manufacturing, the patent-backed processing technology, or the True Gold colloidal gold formulation. Pürblack's research pedigree and patented processing are genuine differentiators, but at $3.11/g without a disclosed FA% and with a brand-operated COA, they require more trust in the brand's proprietary standards than in independently verifiable third-party data.
            </p>
          </section>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">Why Fractal Forest wins</h3>
              <ul className="space-y-2">
                {[
                  "Himalayan Drops: all 4 heavy metals completely not detected — from an independent A2LA ISO 17025 accredited lab (Certified Laboratories Burbank CA, Cert 3034.01)",
                  "Wild American Drops: 71.31% FA (IAS Labs) — only North American sourced shilajit drops with a verified batch-specific COA",
                  "Two independent ISO-accredited third-party labs (Certified Laboratories + IAS Laboratories) vs. Pürblack's brand-operated COA",
                  "More accessible price point with code SHILAJIT-PRICE (15% off) vs. $3.11/g for Pürblack True Gold",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#0D1F14] leading-relaxed">
                    <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">Why Pürblack wins</h3>
              <ul className="space-y-2">
                {[
                  "5 US patents on 5th-generation live resin processing — the most research-documented proprietary shilajit technology in our database",
                  "Pharmaceutical-grade US manufacturing (Temecula, CA) — the most domestically processed A-tier brand we track",
                  "True Gold variant with 555 PPM colloidal gold — a unique formulation with no direct competitor",
                  "DBP (dibenzo-alpha-pyrones) verified — one of the few brands that documents this key bioactive fraction specifically",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#0D1F14] leading-relaxed">
                    <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#0D1F14]">Who should buy which</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">Buy Fractal Forest if…</div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want liquid shilajit drops with verified COA data from independent ISO-accredited labs, all-ND heavy metals on the Himalayan drops, and an accessible price point. Also the right choice if you want the unique Wild American sourced drops — the only domestically sourced shilajit drops with a batch-specific COA from a named third-party lab. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.
                </p>
                <a href={FF.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#10B981] text-white hover:bg-[#0DA872] transition-colors">
                  Shop Fractal Forest →
                </a>
              </div>
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">Buy Pürblack if…</div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want pharmaceutical-grade US processing backed by 5 US patents, DBP verification, and a premium formulation that can include 555 PPM colloidal gold (True Gold variant). The right choice for the research-focused buyer who prioritizes patented processing technology and US pharmaceutical-grade manufacturing over format variety or price efficiency.
                </p>
                <a href={PURBLACK.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors">
                  Shop Pürblack →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0D1F14] mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
                  <div className="font-bold text-[#0D1F14] text-sm mb-2">{item.name}</div>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-[#E8F5EC] border-2 border-[#9EC9AD] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="text-3xl shrink-0">🎯</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-black text-[#0D1F14] text-base mb-1">Still not sure which is right for you?</h3>
              <p className="text-sm text-[#4A6358]">Take our 60-second quiz and get a personalized recommendation based on your goals, budget, and experience level.</p>
            </div>
            <Link href="/quiz" className="shrink-0 bg-[#182B1F] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#10B981] transition-colors">Take the Quiz →</Link>
          </div>

          <section className="text-sm text-[#4A6358]">
            <p className="font-semibold text-[#0D1F14] mb-2">Related pages</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare" className="text-[#10B981] hover:underline">Full brand comparison table →</Link>
              <Link href="/methodology" className="text-[#10B981] hover:underline">How we score brands →</Link>
              <Link href="/blog/fractal-forest-shilajit-review" className="text-[#10B981] hover:underline">Full Fractal Forest review →</Link>
              <Link href="/blog/purblack-shilajit-review" className="text-[#10B981] hover:underline">Full Pürblack review →</Link>
              <Link href="/compare/purblack-vs-black-lotus" className="text-[#10B981] hover:underline">Pürblack vs Black Lotus →</Link>
            </div>
          </section>

          <div className="text-xs text-[#4A6358] bg-white rounded-2xl border border-[#D1EDD8] p-4 leading-relaxed">
            <strong className="text-[#0D1F14]">Affiliate disclosure:</strong> ShilajitPrice.com earns a commission when you purchase through links on this page at no extra cost to you. Our editorial ratings are independent of affiliate relationships — brands are ranked on documented quality metrics only. See our <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclaimer</Link>.
          </div>

        </div>
      </main>
    </>
  );
}
