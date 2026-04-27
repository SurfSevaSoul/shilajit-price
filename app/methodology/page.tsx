import type { Metadata } from "next";
import Link from "next/link";
import AuthorBio from "../components/AuthorBio";

export const metadata: Metadata = {
  title: "Scoring Methodology — How We Rank Shilajit Products | ShilajitPrice.com",
  description:
    "Transparent breakdown of how we score and rank shilajit products. Learn how tier scores, price-per-gram calculations, COA verification, and review sourcing all work.",
  openGraph: {
    title: "ShilajitPrice Scoring Methodology",
    description: "How we rank shilajit products — tier scoring, price-per-gram, COA verification, and review attribution explained.",
    url: "https://www.shilajitprice.com/methodology",
  },
  alternates: { canonical: "https://www.shilajitprice.com/methodology" },
};

const TIER_DEFINITIONS = [
  {
    tier: "S",
    color: "bg-amber-100 text-amber-800 ring-1 ring-amber-300",
    label: "S-Tier — Best in Class",
    desc: "Full third-party COA published publicly, 80%+ verified fulvic acid, all four heavy metals tested and passing, known source altitude, cold-process or traditional purification, free shipping, and money-back guarantee. These are the only products we actively recommend purchasing.",
  },
  {
    tier: "A",
    color: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300",
    label: "A-Tier — High Quality",
    desc: "Third-party tested with COA available, good purity score (7–8/10), heavy metals tested, known sourcing. May lack one or two S-tier criteria (e.g., slightly higher price per gram, or fulvic acid between 60–79%).",
  },
  {
    tier: "B",
    color: "bg-blue-100 text-blue-800 ring-1 ring-blue-300",
    label: "B-Tier — Acceptable",
    desc: "Some lab testing disclosed but limited COA transparency. Decent purity (5–6/10). Sourcing partially disclosed. Fine for budget buyers who want some testing confidence but cannot afford premium products.",
  },
  {
    tier: "C",
    color: "bg-slate-100 text-slate-600 ring-1 ring-slate-300",
    label: "C-Tier — Below Average",
    desc: "Minimal testing disclosure. COA not publicly available or unclear. Purity score 3–4/10. May list 'tested' claims without supporting documentation. Proceed with caution.",
  },
  {
    tier: "D",
    color: "bg-red-100 text-red-700 ring-1 ring-red-300",
    label: "D-Tier — Not Recommended",
    desc: "No COA, no third-party testing evidence, unclear sourcing, and/or significant negative indicators in the product listing. We include these for comparison purposes only — we do not recommend purchasing D-tier products.",
  },
];

const SCORING_FACTORS = [
  { factor: "COA Availability", weight: "30%", detail: "Is a Certificate of Analysis publicly available from a named third-party lab? Is it current? Is it accessible directly from the brand's website?" },
  { factor: "Purity Score", weight: "25%", detail: "Based on verified fulvic acid %, presence of trace minerals, absence of fillers, and overall lab-confirmed potency. Unverified brand claims receive a reduced score." },
  { factor: "Heavy Metals Testing", weight: "20%", detail: "All four metals (Lead, Mercury, Arsenic, Cadmium) must be tested by a third party and pass FDA action level thresholds. Missing or untested panels reduce score significantly." },
  { factor: "Sourcing Transparency", weight: "15%", detail: "Is the source location (e.g. Himalayas, Altai) disclosed? Is the altitude stated? Is the purification method described? Vague 'Himalayan origin' claims without specifics receive partial credit." },
  { factor: "Price & Value", weight: "10%", detail: "Price per gram and cost per serving are calculated and compared across the database. Products with exceptional value within their purity tier receive a small score boost." },
];

const HOW_WE_CALCULATE = [
  {
    title: "Price Per Gram",
    formula: "priceUsd ÷ weightGrams",
    example: "$36.99 ÷ 30g = $1.23/g (Black Lotus Resin)",
    note: "This is the most useful metric for comparing raw shilajit products. Lower is better, but only if purity is equivalent. A $0.50/g product with no COA is not better value than a $1.23/g product with full lab verification.",
  },
  {
    title: "Cost Per Serving",
    formula: "priceUsd ÷ servingsPerContainer",
    example: "$36.99 ÷ 100 servings = $0.37/serving",
    note: "More useful for daily-use comparison. Serving size varies significantly between products — always check the serving size when comparing cost per serving.",
  },
  {
    title: "Purity Score (1–10)",
    formula: "Composite score from: COA data + fulvic acid % + heavy metals + sourcing",
    example: "Black Lotus: 10/10 — Full COA, 85% FA, all metals pass, Altai Mountains 16,000ft",
    note: "This is an editorial score based on publicly verifiable data. It is not a measure of the product's health effects. We are evaluating transparency and documented quality, not making medical claims.",
  },
];

const DATA_SOURCES = [
  { source: "Brand COA Pages", description: "Official Certificate of Analysis pages linked directly from brand websites. We only use lab numbers that appear on the brand's own published COA — never from marketing copy." },
  { source: "Amazon Product Listings", description: "Price, review count, and star rating sourced from Amazon product pages. We note when COA is referenced on the listing vs. not present." },
  { source: "Brand Review Pages", description: "Customer reviews sourced from brand websites with clear attribution. We do not alter review text and display reviewer name/initial as published." },
  { source: "Prices", description: "Prices verified at the date noted on each product card. Prices change — always confirm on the retailer's site before purchasing." },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#E8F5EC]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D1EDD8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>ShilajitPrice</span>
            <span className="text-lg font-black text-[#0D1F14]" style={{ fontFamily: "var(--font-jakarta)" }}>.com</span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <Link href="/#deals" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Deals</Link>
            <Link href="/lab-data" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Lab Data</Link>
            <Link href="/reviews" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Reviews</Link>
            <Link href="/methodology" className="text-[#10B981] font-semibold">Methodology</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#7BA899] mb-6">
          <Link href="/" className="hover:text-[#10B981]">Home</Link>
          <span>/</span>
          <span className="text-[#4A6358]">Methodology</span>
        </nav>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-black text-[#0D1F14] mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>Our Scoring Methodology</h1>
        <p className="text-[#4A6358] leading-relaxed mb-6 max-w-2xl">
          Every tier score, price metric, and data point on ShilajitPrice.com is calculated using a transparent, reproducible methodology. Here&apos;s exactly how it works.
        </p>

        {/* Methodology author */}
        <div className="mb-10">
          <AuthorBio />
        </div>

        {/* Tier system */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>Tier Score System</h2>
          <div className="space-y-3">
            {TIER_DEFINITIONS.map(({ tier, color, label, desc }) => (
              <div key={tier} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${color}`}>
                  {tier}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1F14] mb-1">{label}</h3>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scoring factors */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>What Goes Into Each Score</h2>
          <p className="text-sm text-[#7BA899] mb-6">
            Tier assignment is based on a weighted composite of five factors. Products must genuinely earn their tier — affiliate relationships have zero influence on placement.
          </p>
          <div className="overflow-x-auto rounded-2xl border-2 border-[#D1EDD8] shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="text-left px-5 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Factor</th>
                  <th className="text-center px-4 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Weight</th>
                  <th className="text-left px-5 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">How We Measure It</th>
                </tr>
              </thead>
              <tbody>
                {SCORING_FACTORS.map(({ factor, weight, detail }, i) => (
                  <tr key={factor} className={`border-b border-[#D1EDD8] last:border-0 ${i % 2 === 0 ? "" : "bg-[#F8FCF9]"}`}>
                    <td className="px-5 py-4 font-semibold text-[#0D1F14] whitespace-nowrap">{factor}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs font-bold">{weight}</span>
                    </td>
                    <td className="px-5 py-4 text-[#4A6358] text-xs leading-relaxed">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How we calculate */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>How Key Metrics Are Calculated</h2>
          <div className="space-y-4">
            {HOW_WE_CALCULATE.map(({ title, formula, example, note }) => (
              <div key={title} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#0D1F14] mb-3">{title}</h3>
                <div className="bg-[#F0FAF4] rounded-xl p-3 border border-[#D1EDD8] mb-3 font-mono text-xs">
                  <p className="text-[#10B981]">{formula}</p>
                  <p className="text-[#7BA899] mt-1">e.g. {example}</p>
                </div>
                <p className="text-xs text-[#4A6358] leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COA verification */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>How We Verify COA Claims</h2>
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-6 space-y-4 shadow-sm">
            {[
              { step: "1", label: "Find the official brand website", desc: "We navigate to the brand's own domain — not reseller pages." },
              { step: "2", label: "Locate the COA or lab page", desc: 'We look for dedicated lab analysis pages, \"certificate of analysis\" links, or downloadable PDFs from the brand\'s site.' },
              { step: "3", label: "Verify the lab name is disclosed", desc: "A COA from an anonymous \"third-party lab\" gets partial credit. A named, accredited lab gets full credit." },
              { step: "4", label: "Check the data matches marketing claims", desc: "If a brand claims 85% fulvic acid in marketing copy, their COA must support it. Unsupported claims reduce the purity score." },
              { step: "5", label: "Record only what is publicly verifiable", desc: "We never display lab numbers we cannot verify from a public source. \"Not Available\" is always shown honestly." },
            ].map(({ step, label, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-emerald-50 ring-1 ring-emerald-200 flex items-center justify-center text-xs font-black text-emerald-700 shrink-0">
                  {step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D1F14] mb-0.5">{label}</p>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review sourcing */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>How Reviews Are Sourced &amp; Attributed</h2>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mb-4">
            <p className="text-xs text-[#4A6358] leading-relaxed">
              <span className="font-bold text-amber-700">Important: </span>
              ShilajitPrice.com does not sell products and cannot verify purchases. We display only reviews sourced from Amazon, brand websites, and Reddit, with full attribution to the original source. We do not create or fabricate reviews.
            </p>
          </div>
          <div className="space-y-3">
            {DATA_SOURCES.map(({ source, description }) => (
              <div key={source} className="flex items-start gap-3 bg-white border-2 border-[#D1EDD8] rounded-2xl p-4 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0D1F14] mb-1">{source}</p>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-[#0D1F14] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>Affiliate Relationships &amp; Editorial Independence</h2>
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-[#4A6358] leading-relaxed mb-3">
              ShilajitPrice.com has affiliate partnerships with <strong className="text-[#0D1F14]">Black Lotus Shilajit</strong> and <strong className="text-[#0D1F14]">Pure Himalayan Shilajit</strong>. When you purchase through our affiliate links, we earn a commission at no extra cost to you.
            </p>
            <p className="text-sm text-[#4A6358] leading-relaxed mb-3">
              <strong className="text-[#10B981]">Affiliate relationships do not influence tier scores, rankings, or any data point on this site.</strong> These brands are featured because their published lab data earned them S-tier scores — not because of our commercial relationship with them.
            </p>
            <p className="text-sm text-[#4A6358] leading-relaxed">
              If a brand with an affiliate partnership produced poor lab results, they would receive a lower tier score. We also include Amazon products and competitor brands with no affiliate relationship because comprehensive comparison is more useful to readers than cherry-picking.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Link href="/lab-data" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-semibold text-sm transition-colors">
            View Lab Data Database →
          </Link>
          <Link href="/reviews" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#182B1F] text-[#182B1F] hover:bg-[#182B1F] hover:text-white font-semibold text-sm transition-colors">
            Browse All Reviews →
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#182B1F] text-[#182B1F] hover:bg-[#182B1F] hover:text-white font-semibold text-sm transition-colors">
            Compare All Products →
          </Link>
        </div>
      </main>
    </div>
  );
}
