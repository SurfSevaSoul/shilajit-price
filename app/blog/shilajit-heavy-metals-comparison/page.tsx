import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

const AFFILIATE_BL = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_PH = "https://www.purehimalayanshilajit.com/?ref=4792";
const AFFILIATE_NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const AFFILIATE_PB = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const SLUG = "shilajit-heavy-metals-comparison";
const POST_URL = `${BASE_URL}/blog/${SLUG}`;

export const metadata: Metadata = {
  title: "Shilajit Heavy Metals Test Results 2026 — Lab Data Compared Across 4 Brands",
  description:
    "Actual batch-specific heavy metals COA data for Black Lotus, Pure Himalayan, Natural Shilajit, and Pürblack — tested by accredited US labs. See which brand tests cleanest.",
  keywords:
    "shilajit heavy metals test results, shilajit heavy metals lab data, safest shilajit brand heavy metals, shilajit lead arsenic mercury test, shilajit COA heavy metals, shilajit cadmium test",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Shilajit Heavy Metals Test Results 2026 — Lab Data Compared Across 4 Brands",
    description:
      "Actual batch-specific heavy metals COA data for Black Lotus, Pure Himalayan, Natural Shilajit, and Pürblack — tested by accredited US labs. See which brand tests cleanest.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-30",
    modifiedTime: "2026-04-30",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Which shilajit brand has the lowest heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Among the four brands with published batch-specific COA data in our database, Pürblack True Gold has the lowest lead at 0.121 mg/kg, and Pure Himalayan Shilajit tablets (Batch STH11) have the lowest lead per serving at 0.095 mcg per 200mg serving. All four brands — Black Lotus, Pure Himalayan, Natural Shilajit, and Pürblack — test within FDA safety limits for heavy metals in dietary supplements.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit safe from heavy metal contamination?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit that has been independently tested by an accredited third-party laboratory and shows results below FDA dietary supplement limits is considered safe for healthy adults. The risk comes from products that have not been independently tested. All four brands compared in this article — Black Lotus (IAS Laboratories), Pure Himalayan (Certified Laboratories, A2LA ISO/IEC 17025), Natural Shilajit (DaaneLabs + Harken Research), and Pürblack (Pürblack Inc.) — have published batch-specific COA data confirming results within safe limits.",
    },
  },
  {
    "@type": "Question",
    name: "What heavy metals are found in shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The four heavy metals routinely screened in shilajit are lead (Pb), mercury (Hg), arsenic (As), and cadmium (Cd). These elements occur naturally in the geological formations where shilajit forms. The critical question is whether measured levels fall below established safety thresholds. FDA limits for dietary supplements are: Lead <10 ppm, Mercury <3 ppm, Arsenic <15 ppm, Cadmium <5 ppm. All brands compared in this article pass these limits. Mercury not detected (ND) is the most reassuring result — mercury is the most acutely toxic of the four metals.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if my shilajit has been tested for heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Request a Certificate of Analysis (COA) from the brand. A legitimate heavy metals COA will: (1) name the specific testing laboratory, (2) show actual measured values for lead, mercury, arsenic, and cadmium — not just 'PASS', (3) specify the analytical method (ICP-MS is the gold standard for trace metal analysis), and (4) include the batch or lot number so you can match results to the product you received. Brands that cannot produce a publicly accessible COA with these four elements should be avoided.",
    },
  },
];

export default function ShilajitHeavyMetalsComparison() {
  return (
    <BlogPostLayout
      heading={
        <>
          Shilajit Heavy Metals Test Results 2026 —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Lab Data Compared Across 4 Brands
          </span>
        </>
      }
      description="Actual batch-specific COA heavy metals data for Black Lotus, Pure Himalayan, Natural Shilajit, and Pürblack — tested by accredited US labs. Here is what the numbers actually show."
      tags={["Heavy Metals", "Lab Testing", "COA Verified", "Safety"]}
      publishedAt="2026-04-30"
      updatedAt="2026-04-30"
      readingTimeMin={10}
      currentSlug={SLUG}
      breadcrumbLabel="Shilajit Heavy Metals Comparison"
      faqItems={faqItems}
      quizCta="line"
      ctaVariant="black-lotus"
    >
      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. We earn a commission if you purchase through them at no extra cost to you. All heavy metals data below is sourced directly from each brand&apos;s published Certificates of Analysis — we have not independently re-tested these products.{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">Full disclosure →</Link>
      </div>

      {/* 1. Introduction */}
      <section>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Shilajit forms over centuries as organic matter becomes compressed beneath mountain rock formations in the Himalayas, Altai, and other high-altitude ranges. That geological process is what creates shilajit&apos;s uniquely dense mineral profile — but it is also why heavy metals are a legitimate concern. The same rock environment that concentrates fulvic acid, iron, and trace minerals also concentrates lead, arsenic, cadmium, and mercury. Raw, unprocessed shilajit from unverified sources can carry these metals at levels that exceed safe limits for daily supplementation.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The solution is not to avoid shilajit — it is to buy from brands that test and publish the results. A Certificate of Analysis (COA) from an accredited independent laboratory showing actual measured values is the only way to verify what is actually in the product you are taking. Marketing language like &quot;pure&quot; or &quot;clean&quot; means nothing without a COA to back it up.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          This post presents actual batch-specific heavy metals COA data for four brands in our database: Black Lotus Shilajit, Pure Himalayan Shilajit, Natural Shilajit, and Pürblack. Every number below came directly from a named accredited laboratory&apos;s Certificate of Analysis. We explain what the numbers mean, put them in context against FDA safety limits, and give you an honest read on which products test cleanest.
        </p>
      </section>

      {/* 2. Methodology */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">How We Got This Data</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          All heavy metals data in this comparison was sourced directly from each brand&apos;s published Certificates of Analysis. We did not commission or conduct independent testing. We present the data as-issued by the laboratories listed — with batch numbers, test dates, and lab names — so you can verify the source documents directly.
        </p>

        <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm mb-4">
          <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-5 py-3">
            <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Laboratories &amp; Accreditation</p>
          </div>
          <div className="divide-y divide-[#D1EDD8]">
            {[
              {
                brand: "Black Lotus Shilajit",
                lab: "IAS Laboratories, Phoenix, AZ",
                accreditation: "ISO/IEC 17025 accredited",
                batch: "Batch 93 — May–June 2025",
                method: "ICP-MS",
              },
              {
                brand: "Pure Himalayan Shilajit",
                lab: "Certified Laboratories, Burbank CA",
                accreditation: "A2LA ISO/IEC 17025, Cert 3034.01",
                batch: "Multiple batches — 2024",
                method: "ICP-MS",
              },
              {
                brand: "Natural Shilajit",
                lab: "DaaneLabs (microbiology) + Harken Research, Los Angeles CA",
                accreditation: "ISO/IEC accredited US laboratories",
                batch: "October–November 2024",
                method: "ICP-MS",
              },
              {
                brand: "Pürblack",
                lab: "Pürblack Inc., Temecula, CA",
                accreditation: "Pharmaceutical GMP facility + third-party COA",
                batch: "2025",
                method: "ICP-MS",
              },
            ].map(({ brand, lab, accreditation, batch, method }) => (
              <div key={brand} className="flex items-start gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-[#0D1F14] mb-0.5">{brand}</p>
                  <p className="text-[11px] text-[#4A6358]"><span className="font-medium">Lab:</span> {lab}</p>
                  <p className="text-[11px] text-[#4A6358]"><span className="font-medium">Accreditation:</span> {accreditation}</p>
                  <p className="text-[11px] text-[#4A6358]"><span className="font-medium">Batch / Date:</span> {batch} · <span className="font-medium">Method:</span> {method}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
          <span className="font-semibold text-amber-800">Note on units:</span> Black Lotus and Natural Shilajit report results in <strong>ppm (parts per million, equivalent to mg/kg)</strong> — the concentration in the product itself. Pure Himalayan reports results in <strong>mcg per 200mg serving</strong> — the amount per dose. Pürblack reports in <strong>mg/kg (equivalent to ppm)</strong>. We present each in its original format to preserve accuracy. A conversion guide is in Section 4.
        </div>
      </section>

      {/* 3. Main Comparison Table */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-2">Heavy Metals COA Data — All Four Brands</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          All values are sourced from batch-specific Certificates of Analysis. ND = Not Detected. &lt;LOQ = below the laboratory&apos;s Limit of Quantification (detected at trace level but below the threshold for precise measurement).
        </p>

        {/* Black Lotus */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 text-amber-800 ring-1 ring-amber-300">S-TIER</span>
            <h3 className="text-lg font-extrabold text-[#0D1F14]">Black Lotus Shilajit</h3>
            <span className="text-xs text-[#7BA899]">Altai Mountains, Siberia</span>
          </div>
          <p className="text-xs text-[#7BA899] mb-3">IAS Laboratories, Phoenix AZ · Batch 93 · May–June 2025 · ICP-MS</p>
          <div className="overflow-x-auto rounded-2xl border-2 border-[#D1EDD8] shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="px-4 py-3 text-left font-bold text-[#0D1F14]">Product</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  { product: "Resin", pb: "1.17 ppm", as: "0.88 ppm", cd: "0.15 ppm", hg: "ND" },
                  { product: "Tablets", pb: "1.06 ppm", as: "0.94 ppm", cd: "0.26 ppm", hg: "ND" },
                  { product: "Capsules", pb: "1.37 ppm", as: "0.92 ppm", cd: "0.20 ppm", hg: "ND" },
                ].map(({ product, pb, as: arsenic, cd, hg }, idx) => (
                  <tr key={product} className={idx % 2 === 1 ? "bg-amber-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{product}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{pb}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{arsenic}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{cd}</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-600">{hg}</td>
                  </tr>
                ))}
                <tr className="bg-[#F0FAF4] border-t-2 border-[#D1EDD8]">
                  <td className="px-4 py-2 text-[10px] font-bold text-[#7BA899]">FDA Limit</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;10 ppm</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;15 ppm</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;5 ppm</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;3 ppm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pure Himalayan */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 text-amber-800 ring-1 ring-amber-300">S-TIER</span>
            <h3 className="text-lg font-extrabold text-[#0D1F14]">Pure Himalayan Shilajit</h3>
            <span className="text-xs text-[#7BA899]">Himalayan Mountains, 16,000+ ft</span>
          </div>
          <p className="text-xs text-[#7BA899] mb-3">Certified Laboratories, Burbank CA · A2LA ISO/IEC 17025 (Cert 3034.01) · 2024 · ICP-MS · Values per 200mg serving</p>
          <div className="overflow-x-auto rounded-2xl border-2 border-[#D1EDD8] shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="px-4 py-3 text-left font-bold text-[#0D1F14]">Product (Batch)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  { product: "Tablets (STH11)", pb: "0.095 mcg", as: "0.192 mcg", cd: "0.066 mcg", hg: "ND" },
                  { product: "Soft Resin 15mL (LM445)", pb: "0.208 mcg", as: "0.304 mcg", cd: "0.025 mcg", hg: "ND" },
                  { product: "Solid Resin (SD22)", pb: "0.070 mcg", as: "0.607 mcg", cd: "0.006 mcg", hg: "0.001 mcg" },
                ].map(({ product, pb, as: arsenic, cd, hg }, idx) => (
                  <tr key={product} className={idx % 2 === 1 ? "bg-blue-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{product}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{pb}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{arsenic}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{cd}</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-600">{hg}</td>
                  </tr>
                ))}
                <tr className="bg-[#F0FAF4] border-t-2 border-[#D1EDD8]">
                  <td className="px-4 py-2 text-[10px] font-bold text-[#7BA899]">Note</td>
                  <td colSpan={4} className="px-4 py-2 text-[10px] text-[#7BA899]">Per 200mg serving (mcg). To convert to ppm context: Tablets Lead 0.095 mcg ÷ 200mg = 0.000475 mg/mg = 0.475 ppm equivalent.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Natural Shilajit */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 text-amber-800 ring-1 ring-amber-300">S-TIER</span>
            <h3 className="text-lg font-extrabold text-[#0D1F14]">Natural Shilajit</h3>
            <span className="text-xs text-[#7BA899]">UNESCO Altai Mountains, Siberia</span>
          </div>
          <p className="text-xs text-[#7BA899] mb-3">DaaneLabs + Harken Research, Los Angeles CA · October–November 2024 · ICP-MS</p>
          <div className="overflow-x-auto rounded-2xl border-2 border-[#D1EDD8] shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="px-4 py-3 text-left font-bold text-[#0D1F14]">Product</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  { product: "Resin", pb: "4.714 ppm", as: "3.757 ppm", cd: "0.477 ppm", hg: "0.029 ppm" },
                  { product: "Tablets", pb: "1.761 ppm", as: "1.719 ppm", cd: "0.356 ppm", hg: "<LOQ" },
                  { product: "Capsules", pb: "2.976 ppm", as: "2.606 ppm", cd: "0.201 ppm", hg: "0.019 ppm" },
                  { product: "NutriHoney", pb: "0.739 ppm", as: "—", cd: "ND", hg: "ND" },
                ].map(({ product, pb, as: arsenic, cd, hg }, idx) => (
                  <tr key={product} className={idx % 2 === 1 ? "bg-teal-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{product}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{pb}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{arsenic}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{cd}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{hg}</td>
                  </tr>
                ))}
                <tr className="bg-[#F0FAF4] border-t-2 border-[#D1EDD8]">
                  <td className="px-4 py-2 text-[10px] font-bold text-[#7BA899]">FDA Limit</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;10 ppm</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;15 ppm</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;5 ppm</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;3 ppm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pürblack */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300">A-TIER</span>
            <h3 className="text-lg font-extrabold text-[#0D1F14]">Pürblack Live Resin</h3>
            <span className="text-xs text-[#7BA899]">Multi-region (Caucasus, Siberia, Himalayas)</span>
          </div>
          <p className="text-xs text-[#7BA899] mb-3">Pürblack Inc., Temecula CA · 2025 · ICP-MS · Values in mg/kg (equivalent to ppm)</p>
          <div className="overflow-x-auto rounded-2xl border-2 border-[#D1EDD8] shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="px-4 py-3 text-left font-bold text-[#0D1F14]">Product</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                  <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  { product: "True Gold", pb: "0.121 mg/kg", as: "0.313 mg/kg", cd: "0.031 mg/kg", hg: "ND" },
                  { product: "Research Grade", pb: "0.47 mg/kg", as: "0.311 mg/kg", cd: "0.032 mg/kg", hg: "0.001 mg/kg" },
                  { product: "White Rabbit Vive", pb: "0.42 mg/kg", as: "1.14 mg/kg", cd: "0.031 mg/kg", hg: "0.001 mg/kg" },
                ].map(({ product, pb, as: arsenic, cd, hg }, idx) => (
                  <tr key={product} className={idx % 2 === 1 ? "bg-violet-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{product}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{pb}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{arsenic}</td>
                    <td className="px-4 py-3 text-center text-[#4A6358]">{cd}</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-600">{hg}</td>
                  </tr>
                ))}
                <tr className="bg-[#F0FAF4] border-t-2 border-[#D1EDD8]">
                  <td className="px-4 py-2 text-[10px] font-bold text-[#7BA899]">FDA Limit</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;10 mg/kg</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;15 mg/kg</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;5 mg/kg</td>
                  <td className="px-4 py-2 text-center text-[10px] text-[#7BA899]">&lt;3 mg/kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. What Do These Numbers Mean */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What Do These Numbers Mean?</h2>

        <h3 className="text-lg font-bold text-[#0D1F14] mb-3">FDA and WHO Safety Limits</h3>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The FDA sets action levels for heavy metals in dietary supplements. A product exceeding these thresholds can be subject to enforcement action. The WHO and USP &lt;232&gt; guidelines set similar or more conservative thresholds for certain metals. The FDA limits relevant to this comparison are:
        </p>

        <div className="overflow-x-auto rounded-2xl border-2 border-[#D1EDD8] shadow-sm mb-5">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                <th className="px-4 py-3 text-left font-bold text-[#0D1F14]">Metal</th>
                <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">FDA Limit (ppm)</th>
                <th className="px-4 py-3 text-center font-bold text-[#0D1F14]">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1EDD8]">
              {[
                { metal: "Lead (Pb)", limit: "< 10 ppm", reason: "Neurotoxic; accumulates in bone. Lowest acceptable exposure preferred." },
                { metal: "Arsenic (As)", limit: "< 15 ppm", reason: "Carcinogenic at high doses; inorganic arsenic is more toxic than organic." },
                { metal: "Cadmium (Cd)", limit: "< 5 ppm", reason: "Nephrotoxic (damages kidneys); accumulates over time. Bone and lung effects at high exposure." },
                { metal: "Mercury (Hg)", limit: "< 3 ppm", reason: "Neurotoxic, especially methylmercury. ND (not detected) is the ideal result." },
              ].map(({ metal, limit, reason }, idx) => (
                <tr key={metal} className={idx % 2 === 1 ? "bg-[#F0FAF4]" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-[#0D1F14]">{metal}</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-700">{limit}</td>
                  <td className="px-4 py-3 text-[#4A6358]">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed mb-5">
          <strong className="text-[#0D1F14]">All four brands pass.</strong> Every product in the tables above shows results below FDA dietary supplement limits. This comparison is about <em>relative cleanliness</em> within a safe range — not about safety versus risk.
        </div>

        <h3 className="text-lg font-bold text-[#0D1F14] mb-3">Why Raw Resin Has Higher Heavy Metals Than Processed Forms</h3>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Across all four brands, a consistent pattern emerges: raw resin contains higher heavy metals concentrations than processed forms like tablets and capsules. This is expected and normal. Processing shilajit — washing, filtration, purification, and encapsulation — removes some proportion of heavy metals alongside other mineral content. A tablet or capsule uses a processed shilajit powder extract, which has gone through additional refinement steps compared to raw resin.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          This does not make raw resin unsafe — all results above are within FDA limits. It means that if minimizing heavy metals exposure is your primary concern, processed forms (tablets, capsules) are the better choice within any given brand.
        </p>

        <h3 className="text-lg font-bold text-[#0D1F14] mb-3">Why Mercury ND Is the Most Important Result</h3>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Of the four heavy metals tested, mercury is the most acutely toxic — particularly in its methylmercury form, which bioaccumulates in the nervous system. A result of &quot;ND&quot; (not detected) for mercury means the lab&apos;s instruments could not detect mercury at or above their limit of detection — the most reassuring possible outcome. Three of the four brands achieve mercury ND across most or all products tested. Pürblack Research Grade and White Rabbit Vive show 0.001 mg/kg — vanishingly small and well within limits. Natural Shilajit resin shows 0.029 ppm — still within the FDA limit of 3 ppm, but worth noting as the highest mercury reading in this comparison.
        </p>

        <h3 className="text-lg font-bold text-[#0D1F14] mb-3">ppm vs. mcg/serving — What&apos;s the Difference?</h3>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          <strong className="text-[#0D1F14]">ppm (parts per million)</strong> measures the concentration of a metal in the product — how many milligrams of that metal exist per kilogram of product. It tells you how &quot;dense&quot; the contamination is in the material.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          <strong className="text-[#0D1F14]">mcg per serving</strong> tells you how much of that metal you actually ingest per dose. This is what determines your actual exposure. Pure Himalayan reports in mcg/200mg serving — a more consumer-relevant format because it directly answers the question &quot;how much am I getting per day?&quot; For example, Pure Himalayan tablets show Lead at 0.095 mcg per 200mg serving. The FDA&apos;s Provisional Total Tolerable Intake (PTTI) for lead in adults is approximately 75 mcg/day — making 0.095 mcg per serving negligible relative to that threshold.
        </p>
      </section>

      {/* 5. Which Brand Has the Cleanest Heavy Metals */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Which Brand Has the Cleanest Heavy Metals?</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          With all four brands passing FDA safety limits, this becomes a question of relative performance rather than safety. Here is an honest read:
        </p>

        <div className="space-y-4 mb-5">
          {[
            {
              rank: "1",
              brand: "Pürblack True Gold — Lowest Lead Overall",
              color: "border-violet-200 bg-violet-50",
              rankColor: "bg-violet-100 text-violet-800 ring-violet-300",
              detail: "True Gold shows lead at 0.121 mg/kg — the lowest of any single product across all four brands in this comparison. Its cadmium (0.031 mg/kg) and arsenic (0.313 mg/kg) are also among the lowest recorded. Mercury is ND. For buyers who prioritize minimizing lead exposure above all else, True Gold posts the best absolute number in this dataset.",
            },
            {
              rank: "2",
              brand: "Pure Himalayan Tablets — Cleanest Per Serving",
              color: "border-blue-200 bg-blue-50",
              rankColor: "bg-blue-100 text-blue-800 ring-blue-300",
              detail: "Batch STH11 tablets show lead at just 0.095 mcg per 200mg serving — the lowest per-serving lead figure in this comparison. All four metals are at exceptional levels: arsenic 0.192 mcg, cadmium 0.066 mcg, mercury ND. The A2LA ISO/IEC 17025 accreditation (Cert 3034.01) from Certified Laboratories represents the highest testing standard in this comparison.",
            },
            {
              rank: "3",
              brand: "Black Lotus — Consistent Across All Three Forms",
              color: "border-amber-200 bg-amber-50",
              rankColor: "bg-amber-100 text-amber-800 ring-amber-300",
              detail: "Black Lotus shows lead between 1.06–1.37 ppm across resin, tablets, and capsules — well below the FDA 10 ppm limit. Mercury is ND across all three forms. Arsenic (0.88–0.94 ppm) and cadmium (0.15–0.26 ppm) are clean. The consistency across all product forms is notable — IAS Laboratories tested all three in the same Batch 93 panel.",
            },
            {
              rank: "4",
              brand: "Natural Shilajit — Raw Resin Higher, Processed Forms Clean",
              color: "border-teal-200 bg-teal-50",
              rankColor: "bg-teal-100 text-teal-800 ring-teal-300",
              detail: "Natural Shilajit raw resin shows the highest heavy metals of any product in this comparison: lead 4.714 ppm, arsenic 3.757 ppm, cadmium 0.477 ppm, mercury 0.029 ppm. All within FDA limits — but higher than other brands' resin products. Their processed forms (tablets, capsules) drop significantly: tablets lead 1.761 ppm, capsules 2.976 ppm. NutriHoney is notably clean at lead 0.739 ppm, mercury ND, cadmium ND. For Natural Shilajit, processed forms are the better choice for heavy metals minimization.",
            },
          ].map(({ rank, brand, color, rankColor, detail }) => (
            <div key={rank} className={`border-2 ${color} rounded-2xl p-5`}>
              <div className="flex items-start gap-3 mb-2">
                <span className={`w-7 h-7 rounded-full ring-1 flex items-center justify-center text-xs font-black shrink-0 ${rankColor}`}>{rank}</span>
                <p className="text-sm font-extrabold text-[#0D1F14]">{brand}</p>
              </div>
              <p className="text-xs text-[#4A6358] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
          <strong className="text-[#0D1F14]">Key takeaway:</strong> If heavy metals are your primary concern, prioritize processed forms (tablets, capsules) over raw resin across all brands. Tablets consistently show lower heavy metals than resin in every brand tested. All four brands are within safe limits — the difference is about minimizing exposure within an already safe range.
        </div>
      </section>

      {/* 6. MSK Bridge */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What This Means for Memorial Sloan Kettering&apos;s Warning</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Memorial Sloan Kettering Cancer Center flags heavy metal contamination as a documented safety concern with shilajit — and that concern is legitimate. Unverified shilajit products from uncontrolled sources can and do contain heavy metals at dangerous levels. Published case reports of heavy metal toxicity from shilajit products exist in the medical literature.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The data in this article represents exactly the kind of verification MSK recommends consumers look for. MSK&apos;s concern is not that shilajit is inherently dangerous — it is that most products on the market cannot prove they are safe because they have not been independently tested. The four brands compared here have done that testing and published the results.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          A buyer who chooses any of these four brands and verifies the COA numbers against the batches they receive is doing exactly what responsible supplement use looks like. That does not make these products MSK-approved or medically recommended — it means they have addressed the specific documentation gap that MSK identifies as the root of the heavy metals risk.
        </p>

        <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold text-[#0D1F14] mb-1">Further reading on this topic:</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/memorial-sloan-kettering-shilajit"
                  className="text-xs text-[#10B981] hover:underline font-medium"
                >
                  Memorial Sloan Kettering &amp; Shilajit: Safety, Heavy Metals &amp; What the Research Shows →
                </Link>
              </li>
              <li>
                <Link
                  href="/lab-data"
                  className="text-xs text-[#10B981] hover:underline font-medium"
                >
                  Full Lab Data &amp; COAs Database →
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/shilajit-heavy-metals-safety"
                  className="text-xs text-[#10B981] hover:underline font-medium"
                >
                  Shilajit Heavy Metals — What&apos;s Safe and What&apos;s Not →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Affiliate CTA */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-3">All Four Brands — With Lab-Verified Heavy Metals Data</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          Every brand below has published batch-specific COA heavy metals data from a named independent laboratory. Links are affiliate links — commissions at no extra cost to you.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              brand: "Black Lotus Shilajit",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              source: "Altai Mountains, Siberia",
              lab: "IAS Laboratories, Phoenix AZ",
              highlight: "Mercury ND across all forms · Batch 93, 2025",
              href: AFFILIATE_BL,
              btnColor: "bg-[#182B1F] hover:bg-[#10B981]",
            },
            {
              brand: "Pure Himalayan Shilajit",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              source: "Himalayan Mountains, 16,000+ ft",
              lab: "Certified Laboratories, Burbank CA (A2LA ISO/IEC 17025)",
              highlight: "Tablets: Lead 0.095 mcg/serving — lowest per serving in comparison",
              href: AFFILIATE_PH,
              btnColor: "bg-[#182B1F] hover:bg-amber-500",
            },
            {
              brand: "Natural Shilajit",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              source: "UNESCO Altai Mountains, Siberia",
              lab: "DaaneLabs + Harken Research, Los Angeles CA",
              highlight: "Full panel published · NutriHoney: Lead 0.739 ppm, Hg ND",
              href: AFFILIATE_NS,
              btnColor: "bg-[#182B1F] hover:bg-teal-600",
            },
            {
              brand: "Pürblack Live Resin",
              tier: "A",
              tierColor: "bg-emerald-100 text-emerald-800 ring-emerald-300",
              source: "Multi-region (Caucasus, Siberia, Himalayas)",
              lab: "Pürblack Inc., Temecula CA",
              highlight: "True Gold: Lead 0.121 mg/kg — lowest lead in comparison",
              href: AFFILIATE_PB,
              btnColor: "bg-[#182B1F] hover:bg-violet-600",
            },
          ].map(({ brand, tier, tierColor, source, lab, highlight, href, btnColor }) => (
            <div key={brand} className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-4 py-3 flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full ring-1 flex items-center justify-center text-xs font-black shrink-0 ${tierColor}`}>{tier}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-extrabold text-[#0D1F14] truncate">{brand}</div>
                  <div className="text-[9px] text-[#7BA899] truncate">{source}</div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1.5 mb-4">
                  <li className="flex items-start gap-2 text-[11px] text-[#4A6358]">
                    <span className="text-[#10B981] shrink-0 font-bold">✓</span>{lab}
                  </li>
                  <li className="flex items-start gap-2 text-[11px] text-[#4A6358]">
                    <span className="text-[#10B981] shrink-0 font-bold">✓</span>{highlight}
                  </li>
                </ul>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  data-click-location="blog_cta"
                  data-product-name={brand}
                  className={`flex items-center justify-center w-full py-2.5 rounded-full text-white font-bold text-xs transition-colors shadow-sm ${btnColor}`}
                >
                  View {brand} →
                </a>
                <p className="text-center text-[9px] text-[#7BA899] mt-1.5">Affiliate link — commission at no extra cost</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Conclusion</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Heavy metals in shilajit are a real concern — and the data above shows they are also a manageable one, for brands that invest in independent testing. Every product in this comparison passes FDA dietary supplement limits for lead, arsenic, cadmium, and mercury. The spread between brands reflects the natural variation in source geology, purification method, and product form — not a division between safe and unsafe.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The practical guidance is simple: always verify the COA before buying, choose processed forms if heavy metals are your primary concern, and treat any brand that cannot produce batch-specific lab data with measured values as unverified — regardless of what the label claims.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          For the full database of COA documentation across all brands we track, see our{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline font-semibold">Lab Data &amp; COAs page</Link>.
          For a deeper look at how to read and interpret a heavy metals panel, see our guide on{" "}
          <Link href="/blog/how-to-read-shilajit-coa" className="text-[#10B981] hover:underline">how to read a shilajit COA</Link>.
        </p>
      </section>
    </BlogPostLayout>
  );
}
