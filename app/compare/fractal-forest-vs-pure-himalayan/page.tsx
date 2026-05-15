import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fractal Forest vs Pure Himalayan Shilajit: COA, Source & Format Compared (2026)",
  description:
    "Fractal Forest vs Pure Himalayan Shilajit: both A-tier, both Himalayan-sourced, both A2LA ISO 17025 tested. Fractal Forest Himalayan Drops have all 4 HMs ND. Which is right for you?",
  alternates: { canonical: "https://www.shilajitprice.com/compare/fractal-forest-vs-pure-himalayan" },
  openGraph: {
    title: "Fractal Forest vs Pure Himalayan Shilajit: COA, Source & Format Compared (2026)",
    description:
      "Fractal Forest vs Pure Himalayan Shilajit: both A-tier, both Himalayan-sourced, both A2LA ISO 17025 tested. Fractal Forest Himalayan Drops have all 4 HMs ND. Which is right for you?",
    url: "https://www.shilajitprice.com/compare/fractal-forest-vs-pure-himalayan",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fractal Forest vs Pure Himalayan Shilajit: COA, Source & Format Compared (2026)",
  description: "Fractal Forest vs Pure Himalayan Shilajit: both A-tier, both Himalayan-sourced, both A2LA ISO 17025 tested. Fractal Forest Himalayan Drops have all 4 HMs ND. Which is right for you?",
  url: "https://www.shilajitprice.com/compare/fractal-forest-vs-pure-himalayan",
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
    { "@type": "ListItem", position: 3, name: "Fractal Forest vs Pure Himalayan", item: "https://www.shilajitprice.com/compare/fractal-forest-vs-pure-himalayan" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Both Fractal Forest and Pure Himalayan use A2LA ISO 17025 accredited labs — how do their COAs compare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both brands use Certified Laboratories in Burbank, CA (A2LA ISO 17025, Cert 3034.01) for their Himalayan products. Pure Himalayan's COA (September 2024) covers their resin and reports a full heavy metals panel — all results within safe limits. Fractal Forest's Himalayan Drops (LOT 1001, March 2026) also from Certified Laboratories return all four heavy metals completely not detected: Lead ND, Arsenic ND, Cadmium ND, Mercury ND. Additionally, Fractal Forest's Wild American Drops are tested at IAS Laboratories in Phoenix, AZ (Batch 24E0373, November 2024), documenting 71.31% fulvic acid. Both brands meet a rigorous standard; the ND result across all four heavy metals on Fractal Forest's Himalayan Drops is a notably clean result.",
      },
    },
    {
      "@type": "Question",
      name: "Pure Himalayan is a resin brand — how does that compare to Fractal Forest's liquid drops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Himalayan Shilajit specializes in resin — their primary product is a 30g Himalayan resin at $39.99 ($1.33/g) with free shipping, available alongside tablets and liquid drops. Fractal Forest focuses on liquid drops: Himalayan Drops (30ml, Certified Laboratories A2LA ISO 17025, all HMs ND) and Wild American Drops (30ml, IAS Laboratories, 71.31% FA, North American sourced). Resin generally offers higher concentration per serving and faster bioavailability when dissolved in warm water. Liquid drops offer convenience, no preparation needed, and the ability to mix directly into any drink. The format difference is the primary practical distinction between these two A-tier brands.",
      },
    },
    {
      "@type": "Question",
      name: "Are Fractal Forest and Pure Himalayan both A-tier in the ShilajitPrice.com database?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both Fractal Forest and Pure Himalayan Shilajit are rated A-tier in the ShilajitPrice.com database. A-tier indicates a brand with verified COA data from a credible third-party lab, clean heavy metals results, and disclosed sourcing — a strong classification. Neither holds S-tier status (which is reserved for brands like Black Lotus and Lotus Blooming Herbs based on additional documentation depth and specific criteria). Within A-tier, the choice between these two brands comes down to format preference: resin for Pure Himalayan, liquid drops for Fractal Forest.",
      },
    },
    {
      "@type": "Question",
      name: "Which should I buy — Fractal Forest or Pure Himalayan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you want traditional resin format with free shipping and a well-established brand, Pure Himalayan is the stronger choice — $1.33/g with free shipping, ISO/IEC 17025 accredited lab, all heavy metals pass. If you want liquid drops — for convenience, travel, or format preference — Fractal Forest's Himalayan Drops (all four HMs completely not detected, A2LA ISO 17025 accredited lab) are the stronger choice, and their Wild American Drops (71.31% FA, North American sourced, IAS Laboratories) are unique in the market with no direct competitor. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.",
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
  bestFor: "Liquid drops format · Himalayan Drops all 4 HMs ND · only NA-sourced drops w/ verified COA",
  affiliateUrl: "https://fractalforest.co/SHILAJIT-PRICE",
  productLabel: "Himalayan Drops / Wild American Drops — 15% off w/ code SHILAJIT-PRICE",
  price: "From $44 (15% off)",
  reviewSlug: "fractal-forest-shilajit-review",
};

const PURE_HIMALAYAN = {
  name: "Pure Himalayan Shilajit",
  shortName: "Pure Himalayan",
  tier: "A",
  tierColor: "bg-emerald-500 text-white",
  fulvicAcid: "~58% (2021 COA)",
  pricePerGram: "$1.33/g",
  origin: "Himalayan Mountains, 16,000ft",
  coa: true,
  coaDetail: "Certified Laboratories + MQL, Burbank CA (A2LA ISO 17025, Cert 3034.01), Sep 2024",
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: true,
  bestFor: "Himalayan resin at accessible price · free shipping · ISO 17025 verified COA",
  affiliateUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
  productLabel: "Authentic Shilajit Resin 30g — $39.99",
  price: "$39.99",
  reviewSlug: "pure-himalayan-shilajit-review",
};

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  { label: "Tier", a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${FF.tierColor}`}>{FF.tier}</span>, b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${PURE_HIMALAYAN.tierColor}`}>{PURE_HIMALAYAN.tier}</span> },
  { label: "Fulvic Acid", a: <strong className="text-[#0D1F14]">{FF.fulvicAcid}</strong>, b: <strong className="text-[#0D1F14]">{PURE_HIMALAYAN.fulvicAcid}</strong> },
  { label: "Price / Gram", a: FF.pricePerGram, b: PURE_HIMALAYAN.pricePerGram },
  { label: "Product Forms", a: "Liquid Drops, Resin", b: "Resin, Tablets, Liquid Drops" },
  { label: "Sourcing Altitude", a: "16,000ft (Himalayan) / North American", b: "16,000ft (Himalayan)" },
  { label: "Origin", a: FF.origin, b: PURE_HIMALAYAN.origin },
  { label: "COA Lab", a: <span><CheckIcon pass={FF.coa} /> {FF.coaDetail}</span>, b: <span><CheckIcon pass={PURE_HIMALAYAN.coa} /> {PURE_HIMALAYAN.coaDetail}</span> },
  { label: "Heavy Metals", a: <><HMBadge status={FF.heavyMetals} /><span className="block text-[10px] text-[#10B981] font-semibold mt-0.5">Himalayan Drops: All 4 ND</span></>, b: <><HMBadge status={PURE_HIMALAYAN.heavyMetals} /><span className="block text-[10px] text-[#4A6358] mt-0.5">All pass — Sep 2024 COA</span></> },
  { label: "GMP Certified", a: <CheckIcon pass={FF.gmpCertified} />, b: <CheckIcon pass={PURE_HIMALAYAN.gmpCertified} /> },
  { label: "Free Shipping", a: <CheckIcon pass={FF.freeShipping} />, b: <CheckIcon pass={PURE_HIMALAYAN.freeShipping} /> },
  { label: "Best For", a: <span className="text-[#4A6358]">{FF.bestFor}</span>, b: <span className="text-[#4A6358]">{PURE_HIMALAYAN.bestFor}</span> },
];

export default function FractalForestVsPureHimalayanPage() {
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
              <span className="text-white">Fractal Forest vs Pure Himalayan</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Fractal Forest vs Pure Himalayan Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              Two A-tier brands sharing the same Himalayan source region and the same A2LA ISO 17025 accredited testing lab (Certified Laboratories Burbank, CA — Cert 3034.01), but serving different format preferences. Pure Himalayan is a resin specialist: 30g Himalayan resin at $1.33/g with free shipping, full heavy metals pass on a September 2024 COA, GMP certified. Fractal Forest is a liquid drops specialist: their Himalayan Drops (LOT 1001, March 2026) return all four heavy metals completely not detected (Lead ND, Arsenic ND, Cadmium ND, Mercury ND), and their Wild American Drops (IAS Laboratories, Batch 24E0373) document 71.31% fulvic acid — the only North American sourced shilajit drops with a verified COA. Format preference drives this comparison more than quality differential.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Format drives the choice:</span>
              <span className="text-white font-semibold">Resin → Pure Himalayan · Drops → Fractal Forest</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          <div className="grid sm:grid-cols-2 gap-4">
            {[FF, PURE_HIMALAYAN].map((brand) => (
              <div key={brand.shortName} className="rounded-2xl border-2 border-[#D1EDD8] p-5 bg-white flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded flex items-center justify-center font-black text-xs ${brand.tierColor}`}>{brand.tier}</span>
                  <span className="font-bold text-[#0D1F14] text-sm">{brand.name}</span>
                </div>
                <div className="text-xs text-[#4A6358]">{brand.productLabel}</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#F0FAF4] text-[#0D1F14] text-xs px-2 py-0.5 rounded-full font-medium">{brand.fulvicAcid} FA</span>
                  <span className="bg-[#F0FAF4] text-[#0D1F14] text-xs px-2 py-0.5 rounded-full font-medium">{brand.pricePerGram}</span>
                  {brand.freeShipping && <span className="bg-[#F0FAF4] text-[#10B981] text-xs px-2 py-0.5 rounded-full font-medium">Free shipping</span>}
                </div>
                <a href={brand.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-auto w-full text-center text-sm font-bold py-2.5 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors">
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
            <h2 className="text-xl font-black text-[#0D1F14]">Fractal Forest: The Liquid Drops Specialist</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Fractal Forest's primary product category is liquid shilajit drops — a format that delivers shilajit pre-dissolved in solution, with no preparation required. Their <strong>Himalayan Drops</strong> (LOT 1001, March 2026) source from Gilgit Baltistan at 16,000ft and are tested by Certified Laboratories in Burbank, CA — the same A2LA ISO 17025 accredited lab (Cert 3034.01) used by Pure Himalayan for their resin COA. The Himalayan Drops result: Lead ND, Arsenic ND, Cadmium ND, Mercury ND — all four heavy metals completely not detected. This is the cleanest heavy metals result for any liquid shilajit product in our database. Use code <strong>SHILAJIT-PRICE</strong> for 15% off.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Their <strong>Wild American Drops</strong> (Batch 24E0373, November 2024, IAS Laboratories Phoenix AZ) are in a category of their own: the only North American sourced shilajit drops in our database with a published batch-specific COA. That COA documents <strong>71.31% fulvic acid</strong> (Verploegh method), 4.17% humic acid, and a mineral panel including Potassium 58,800 ppm, Calcium 27,519 ppm, Magnesium 10,000 ppm. Heavy metals: Lead ND, Arsenic 0.07, Cadmium 0.07, Mercury 0.02 ppm — all within safe limits. No other brand offers a domestically sourced shilajit drops product with this level of COA documentation.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Pure Himalayan: A-Tier Himalayan Resin at the Best Price With Free Shipping</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Pure Himalayan Shilajit sources from the Himalayan Mountains at 16,000ft — the same altitude and region as Fractal Forest's Himalayan products — and processes their resin through traditional water filtration without intensive heat. Their September 2024 COA is issued by Certified Laboratories plus Micro Quality Labs (MQL), both in Burbank, CA, holding A2LA ISO 17025 accreditation (Cert 3034.01). The COA covers a full heavy metals panel — all results within safe limits — and a comprehensive microbiology panel. Fulvic acid percentage is approximately 58% by a 2021 COA reference, though the current September 2024 COA format focuses on safety verification.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              At <strong>$39.99 for 30g ($1.33/g) with free shipping</strong>, Pure Himalayan delivers GMP-certified Himalayan resin at one of the most competitive price-per-gram rates of any A-tier brand in our database. Their product lineup extends to tablets (100ct), liquid drops (50ml), and resin in multiple sizes. The combination of ISO/IEC 17025 accredited lab testing, free shipping, and accessible price point makes Pure Himalayan a strong default recommendation for buyers who prefer traditional resin format.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0D1F14] mb-4">Head-to-head comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#D1EDD8] bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D1EDD8]">
                    <th className="text-left px-4 py-3 text-[#4A6358] font-semibold w-1/3">Metric</th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">Fractal Forest</th>
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3">Pure Himalayan</th>
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
              Both are A-tier brands using the same A2LA ISO 17025 accredited lab for their Himalayan products, from the same source region. The decision is primarily about format. Pure Himalayan wins on resin format: $1.33/g with free shipping, GMP certified, well-established brand, and a straightforward resin product with a comprehensive COA. Fractal Forest wins on liquid drops: Himalayan Drops with all four heavy metals completely not detected (the cleanest liquid shilajit result in our database), and Wild American Drops that offer 71.31% FA from a North American source — a genuinely unique product with no direct competitor. If you want Himalayan resin, Pure Himalayan is the cleaner choice. If you want liquid drops, Fractal Forest is the clear recommendation. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.
            </p>
          </section>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">Why Fractal Forest wins</h3>
              <ul className="space-y-2">
                {[
                  "Himalayan Drops: all 4 heavy metals completely not detected — Lead ND, Arsenic ND, Cadmium ND, Mercury ND — from the same A2LA ISO 17025 lab as Pure Himalayan",
                  "Wild American Drops: 71.31% FA (IAS Labs) — the only North American sourced shilajit drops with a verified COA in our database",
                  "Liquid drops format — no preparation required, pre-dissolved shilajit in solution",
                  "Code SHILAJIT-PRICE for 15% off — making entry price competitive even without free shipping",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#0D1F14] leading-relaxed">
                    <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">Why Pure Himalayan wins</h3>
              <ul className="space-y-2">
                {[
                  "$1.33/g with free shipping — best price per gram of any A-tier Himalayan resin with a published COA",
                  "GMP certified facility — manufacturing quality documentation not confirmed for Fractal Forest's liquid products",
                  "Traditional resin format — higher concentration per serving, direct bioavailability when dissolved in warm water",
                  "Certified Laboratories + MQL dual-lab COA (Sep 2024) — comprehensive safety verification for the resin product",
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
                  You want liquid shilajit drops — either Himalayan (all four HMs completely not detected) or North American sourced (the only domestically sourced drops with a verified COA at 71.31% FA). Best for experienced shilajit users who want a unique format, or buyers who prefer pre-dissolved liquid delivery over resin dissolving. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.
                </p>
                <a href={FF.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors">
                  Shop Fractal Forest →
                </a>
              </div>
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">Buy Pure Himalayan if…</div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want a traditional Himalayan resin with free shipping at $1.33/g, GMP-certified manufacturing, and a comprehensive A2LA ISO 17025 accredited COA. The best format choice for buyers who want the highest concentration per serving, prefer dissolving resin in warm water, or want a well-established Himalayan resin brand at an accessible price.
                </p>
                <a href={PURE_HIMALAYAN.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors">
                  Shop Pure Himalayan →
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
              <Link href="/blog/pure-himalayan-shilajit-review" className="text-[#10B981] hover:underline">Full Pure Himalayan review →</Link>
              <Link href="/blog/best-shilajit-liquid-drops" className="text-[#10B981] hover:underline">Best shilajit liquid drops →</Link>
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
