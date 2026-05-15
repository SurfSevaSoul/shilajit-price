import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fractal Forest vs Black Lotus Shilajit: COA, Source & Format Compared (2026)",
  description:
    "Fractal Forest vs Black Lotus Shilajit: liquid drops with all HMs ND vs Altai resin with 64–74% verified FA. Compare COA labs, sourcing, heavy metals data, price, and which is right for you.",
  alternates: { canonical: "https://www.shilajitprice.com/compare/fractal-forest-vs-black-lotus" },
  openGraph: {
    title: "Fractal Forest vs Black Lotus Shilajit: COA, Source & Format Compared (2026)",
    description:
      "Fractal Forest vs Black Lotus Shilajit: liquid drops with all HMs ND vs Altai resin with 64–74% verified FA. Compare COA labs, sourcing, heavy metals data, price, and which is right for you.",
    url: "https://www.shilajitprice.com/compare/fractal-forest-vs-black-lotus",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fractal Forest vs Black Lotus Shilajit: COA, Source & Format Compared (2026)",
  description:
    "Fractal Forest vs Black Lotus Shilajit: liquid drops with all HMs ND vs Altai resin with 64–74% verified FA. Compare COA labs, sourcing, heavy metals data, price, and which is right for you.",
  url: "https://www.shilajitprice.com/compare/fractal-forest-vs-black-lotus",
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
    { "@type": "ListItem", position: 3, name: "Fractal Forest vs Black Lotus", item: "https://www.shilajitprice.com/compare/fractal-forest-vs-black-lotus" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Fractal Forest's heavy metals data compare to Black Lotus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractal Forest's Himalayan Shilajit Drops (LOT 1001, March 2026, Certified Laboratories Burbank CA — A2LA ISO 17025 accredited) have all four heavy metals completely not detected: Lead ND, Arsenic ND, Cadmium ND, Mercury ND. This is the cleanest liquid shilajit heavy metals result in our database. Black Lotus's Batch 93 (IAS Laboratories, Phoenix AZ, June 2025) resin shows Lead 1.17 ppm, Arsenic 0.88 ppm, Cadmium 0.15 ppm, Mercury ND — all within safe limits and verified by a named third-party lab. Both brands use ISO-accredited labs and both pass standard safety thresholds; Fractal Forest's Himalayan Drops simply return not-detected results on all four metals specifically for that liquid product.",
      },
    },
    {
      "@type": "Question",
      name: "Does Fractal Forest have a higher fulvic acid percentage than Black Lotus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractal Forest's Wild American Shilajit Drops (IAS Laboratories, Batch 24E0373, November 2024) document 71.31% fulvic acid by the Verploegh method — a verified figure for that specific product. Black Lotus publishes 64.51% fulvic acid for their resin (Batch 93, IAS Laboratories) and 74.30% for their capsules. Fulvic acid percentage is product-form-specific — comparing resin FA% to drops FA% involves different concentrations and testing matrices. Both brands use IAS Laboratories in Phoenix, AZ for some products, meaning the testing methodology is comparable for those specific COAs.",
      },
    },
    {
      "@type": "Question",
      name: "Is Fractal Forest A-tier and Black Lotus S-tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In the ShilajitPrice.com database, Black Lotus Shilajit is rated S-tier — the highest classification — based on their verified fulvic acid percentages (64–74% by form), batch-level IAS Laboratories COA, full heavy metals panel (Mercury ND), and best-in-class price per gram at $1.23/g. Fractal Forest is rated A-tier — a strong classification indicating verified COA data, ISO-accredited lab testing (Certified Laboratories Burbank CA for Himalayan products; IAS Laboratories for Wild American), and clean heavy metals results. The tier difference reflects that Black Lotus provides more comprehensive batch-level documentation across more product forms.",
      },
    },
    {
      "@type": "Question",
      name: "Which brand should I buy — Fractal Forest or Black Lotus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most buyers, Black Lotus is the stronger overall recommendation: S-tier rating, 64.51% verified fulvic acid (resin, Batch 93), Mercury ND, $1.23/g with free shipping and a 30-day money-back guarantee. Fractal Forest is the right choice if you specifically want liquid drops format — their Himalayan Drops have all four heavy metals not detected (the cleanest result in our liquid drops database) and their Wild American Drops are the only North American sourced shilajit drops with a verified COA (71.31% FA, IAS Labs). Use code SHILAJIT-PRICE for 15% off at fractalforest.co. If format is your primary consideration, Fractal Forest has no competitor in the North American sourced liquid drops category.",
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
  bestFor: "Liquid drops format · Himalayan Drops all 4 HMs ND · Only NA-sourced drops w/ verified COA",
  affiliateUrl: "https://fractalforest.co/SHILAJIT-PRICE",
  productLabel: "Himalayan Drops / Wild American Drops — 15% off w/ code SHILAJIT-PRICE",
  price: "From $44 (15% off)",
  reviewSlug: "fractal-forest-shilajit-review",
};

const BLACK_LOTUS = {
  name: "Black Lotus Shilajit",
  shortName: "Black Lotus",
  tier: "S",
  tierColor: "bg-amber-400 text-amber-900",
  fulvicAcid: "64–74% (by form, COA verified)",
  pricePerGram: "$1.23/g",
  origin: "Altai Mountains, Siberia",
  coa: true,
  coaDetail: "IAS Laboratories, Phoenix AZ — Batch 93, June 2025",
  heavyMetals: "pass" as const,
  gmpCertified: true,
  freeShipping: true,
  bestFor: "Highest verified FA% · best price per gram · S-tier full-panel COA",
  affiliateUrl: "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE",
  productLabel: "Pure Altai Resin 30g — $36.99",
  price: "$36.99",
  reviewSlug: "black-lotus-shilajit-review",
};

const TABLE_ROWS: { label: string; a: ReactNode; b: ReactNode }[] = [
  { label: "Tier", a: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${FF.tierColor}`}>{FF.tier}</span>, b: <span className={`inline-block px-2 py-0.5 rounded font-black text-xs ${BLACK_LOTUS.tierColor}`}>{BLACK_LOTUS.tier}</span> },
  { label: "Fulvic Acid", a: <strong className="text-[#0D1F14]">{FF.fulvicAcid}</strong>, b: <strong className="text-[#0D1F14]">{BLACK_LOTUS.fulvicAcid}</strong> },
  { label: "Price / Gram", a: FF.pricePerGram, b: BLACK_LOTUS.pricePerGram },
  { label: "Product Forms", a: "Liquid Drops, Resin", b: "Resin, Capsules, Tincture, Gummies, Tablets, Honey" },
  { label: "Origin", a: FF.origin, b: BLACK_LOTUS.origin },
  { label: "COA Lab", a: <span><CheckIcon pass={FF.coa} /> {FF.coaDetail}</span>, b: <span><CheckIcon pass={BLACK_LOTUS.coa} /> {BLACK_LOTUS.coaDetail}</span> },
  { label: "Heavy Metals", a: <><HMBadge status={FF.heavyMetals} /><span className="block text-[10px] text-[#10B981] font-semibold mt-0.5">Himalayan Drops: All 4 ND</span></>, b: <><HMBadge status={BLACK_LOTUS.heavyMetals} /><span className="block text-[10px] text-[#4A6358] mt-0.5">Mercury ND, all pass</span></> },
  { label: "GMP Certified", a: <CheckIcon pass={FF.gmpCertified} />, b: <CheckIcon pass={BLACK_LOTUS.gmpCertified} /> },
  { label: "Free Shipping", a: <CheckIcon pass={FF.freeShipping} />, b: <CheckIcon pass={BLACK_LOTUS.freeShipping} /> },
  { label: "Best For", a: <span className="text-[#4A6358]">{FF.bestFor}</span>, b: <span className="text-[#4A6358]">{BLACK_LOTUS.bestFor}</span> },
];

export default function FractalForestVsBlackLotusPage() {
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
              <span className="text-white">Fractal Forest vs Black Lotus</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              Fractal Forest vs Black Lotus Shilajit
            </h1>
            <p className="text-sm text-[#9EC9AD] leading-relaxed max-w-2xl">
              Two brands with verified COA data, different formats and different tiers. Black Lotus is S-tier — the highest classification in our database — with 64–74% verified fulvic acid (by form), IAS Laboratories Batch 93 COA, Mercury ND, and the best price per gram of any S-tier brand at $1.23/g with free shipping. Fractal Forest is A-tier with a unique liquid drops lineup: their Himalayan Drops (LOT 1001, Certified Laboratories Burbank CA — A2LA ISO 17025) have all four heavy metals completely not detected, and their Wild American Drops are the only North American sourced shilajit drops with a verified COA (71.31% FA, IAS Laboratories). The core trade-off: S-tier resin potency and value vs. a liquid drops format with exceptional heavy metals purity.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full px-4 py-1.5 text-sm">
              <span className="text-[#10B981] font-bold">Our Pick:</span>
              <span className="text-white font-semibold">Black Lotus</span>
              <span className="text-[#9EC9AD] text-xs">(S-tier, highest verified FA%, best value/gram)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { brand: FF, isWinner: false },
              { brand: BLACK_LOTUS, isWinner: true },
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
                  {brand.freeShipping && <span className="bg-[#F0FAF4] text-[#10B981] text-xs px-2 py-0.5 rounded-full font-medium">Free shipping</span>}
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
            <h2 className="text-xl font-black text-[#0D1F14]">Fractal Forest: Liquid Drops Specialist With Exceptional Heavy Metals Data</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Fractal Forest occupies a specific niche in the shilajit market: they are the only brand in our database with verified COA data for both Himalayan-sourced and North American-sourced liquid shilajit drops. Their <strong>Himalayan Shilajit Drops</strong> (LOT 1001, March 2026) are tested by Certified Laboratories in Burbank, CA — which holds A2LA ISO 17025 accreditation (Certificate 3034.01), the same lab and accreditation as Lotus Blooming Herbs and Pure Himalayan. The result: Lead ND, Arsenic ND, Cadmium ND, Mercury ND — all four heavy metals completely not detected, the cleanest liquid shilajit heavy metals result in our database. Use code <strong>SHILAJIT-PRICE</strong> for 15% off.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Their <strong>Wild American Shilajit Drops</strong> (Batch 24E0373, November 2024) are tested at IAS Laboratories in Phoenix, AZ — the same lab that tests Black Lotus products — and document <strong>71.31% fulvic acid</strong> by the Verploegh method, along with a mineral panel (Potassium 58,800 ppm, Calcium 27,519 ppm, Magnesium 10,000 ppm) and heavy metals (Lead ND, Arsenic 0.07, Cadmium 0.07, Mercury 0.02 ppm — all within safe limits). This is the only North American sourced shilajit drops product with a published, batch-specific COA in our database.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              The trade-off relative to Black Lotus: Fractal Forest is A-tier (vs. BL's S-tier), does not publish full-panel resin data across the same depth of product forms, and their liquid drops format has inherently lower concentration per serving than resin. For buyers who specifically want liquid drops — for absorption speed, format convenience, or format preference — Fractal Forest has no meaningful competition in this specific category.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-[#D1EDD8] p-6 space-y-3">
            <h2 className="text-xl font-black text-[#0D1F14]">Black Lotus: Highest Verified FA%, Best Value, S-Tier Across Every Format</h2>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Black Lotus Shilajit holds the S-tier rating in our database — the highest classification — based on the combination of verified fulvic acid percentages (64.51% resin, 73.11% tablets, 74.30% capsules — all Batch 93, IAS Laboratories, Phoenix AZ, June 2025), a Mercury ND result across all product forms, and the best price per gram of any S-tier brand at <strong>$1.23/g with free shipping</strong>. Their COA is published at the batch level with exact compound measurements — not just pass/fail status — and is publicly accessible on their website without needing to contact the brand.
            </p>
            <p className="text-sm text-[#0D1F14] leading-relaxed">
              Black Lotus sources from the <strong>Altai Mountains of Siberia</strong> — a distinct geological and mineral ecosystem from the Himalayan range. Their product lineup is the most comprehensive of any S-tier brand: resin, capsules, tincture, gummies, honey blend, and tablets — all tested under the same Batch 93 program. GMP certified, non-GMO, vegan, gluten-free, made in the USA. The 30-day money-back guarantee and free shipping make this the lowest-risk entry into S-tier shilajit in our database.
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
                    <th className="text-center px-4 py-3 font-black text-[#0D1F14] w-1/3"><span className="text-[#10B981] text-xs mr-1">★</span>Black Lotus</th>
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
              Black Lotus wins on tier, verified compound concentration, product range, and price-per-gram. For the majority of shilajit buyers — especially those choosing between resin, capsules, or tablets — Black Lotus is the default recommendation: S-tier, 64.51% verified FA (resin), Mercury ND, $1.23/g, free shipping, money-back guarantee. Fractal Forest wins on a specific dimension: liquid drops format with exceptional heavy metals purity. Their Himalayan Drops (all four HMs ND) are a genuinely exceptional result for a liquid product, and the Wild American Drops (71.31% FA, North American sourced) have no competitor in their specific niche. If you specifically want liquid drops — for format preference, absorption speed, or the North American sourcing story — Fractal Forest is the pick. Use code SHILAJIT-PRICE for 15% off.
            </p>
          </section>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">Why Fractal Forest wins</h3>
              <ul className="space-y-2">
                {[
                  "Himalayan Drops: all 4 heavy metals completely not detected (Lead ND, Arsenic ND, Cadmium ND, Mercury ND) — cleanest HMs result of any liquid shilajit in our database",
                  "Wild American Drops: 71.31% FA (IAS Labs, Batch 24E0373) — the only North American sourced shilajit drops with a verified COA",
                  "Certified Laboratories Burbank CA (A2LA ISO 17025, Cert 3034.01) — same rigorous accreditation standard as Pure Himalayan and Lotus Blooming Herbs",
                  "Use code SHILAJIT-PRICE for 15% off — the only brand in our database with a publicly available discount code",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#0D1F14] leading-relaxed">
                    <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#D1EDD8] p-5">
              <h3 className="font-black text-[#0D1F14] text-sm mb-3">Why Black Lotus wins</h3>
              <ul className="space-y-2">
                {[
                  "S-tier rating — the highest classification in our database, based on verified FA%, batch-level COA, and full heavy metals panel",
                  "64.51% FA (resin) / 74.30% FA (capsules) — Batch 93, IAS Laboratories, Phoenix AZ — some of the highest verified figures in our database",
                  "$1.23/g with free shipping and 30-day money-back — best price-per-gram of any S-tier brand",
                  "Most comprehensive S-tier product lineup: resin, capsules, tincture, gummies, honey blend, tablets — all under the same Batch 93 COA program",
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
                  You want liquid shilajit drops specifically — either Himalayan (all four HMs completely ND, the cleanest result in our database) or North American sourced (the only domestically sourced drops with a verified COA at 71.31% FA). Also the right choice if you want a unique product for experienced users who want something genuinely different from mainstream resin or capsules. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.
                </p>
                <a href={FF.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors">
                  Shop Fractal Forest →
                </a>
              </div>
              <div className="bg-[#F0FAF4] rounded-2xl border border-[#D1EDD8] p-5">
                <div className="font-black text-[#0D1F14] text-sm mb-2">Buy Black Lotus if…</div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  You want the highest verified fulvic acid percentage in a resin or capsule format, at the best price per gram of any S-tier brand. Black Lotus is the default recommendation for buyers who prioritize maximum bioactive concentration per dollar, batch-level COA transparency, free shipping, and a 30-day money-back guarantee. The most comprehensive S-tier lineup for any delivery format preference except liquid drops.
                </p>
                <a href={BLACK_LOTUS.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-4 block text-center text-xs font-bold py-2 rounded-xl bg-[#0D1F14] text-white hover:bg-[#182B1F] transition-colors">
                  Shop Black Lotus →
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
              <Link href="/blog/black-lotus-shilajit-review" className="text-[#10B981] hover:underline">Full Black Lotus review →</Link>
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
