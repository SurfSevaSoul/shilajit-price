import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "../data/products";
import { LAB_DATA, getLabEntry, LAB_DISCLAIMER, HeavyMetalResult } from "../data/lab-data";

export const metadata: Metadata = {
  title: "Shilajit Lab Reports & COA Database — ShilajitPrice.com",
  description:
    "The most complete shilajit lab report database. Compare COA status, fulvic acid content, heavy metals panels, and testing lab accreditation across 74 products.",
  openGraph: {
    title: "Shilajit Lab Reports & COA Database",
    description: "Compare COA status, fulvic acid content, and heavy metals test results across 55+ shilajit products.",
    url: "https://shilajitprice.com/lab-data",
  },
  alternates: { canonical: "https://shilajitprice.com/lab-data" },
};

function HMBadge({ result }: { result: HeavyMetalResult }) {
  if (result === "pass")
    return <span className="text-emerald-400 font-bold text-[11px]">✓</span>;
  if (result === "fail")
    return <span className="text-red-400 font-bold text-[11px]">✗</span>;
  return <span className="text-[#5d8c6e] text-[11px]">—</span>;
}

function CoaBadge({ status }: { status: "verified" | "listed-on-amazon" | "not-available" }) {
  if (status === "verified")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-[10px] font-bold">
        ✓ Verified
      </span>
    );
  if (status === "listed-on-amazon")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-900/30 border border-amber-700/40 text-amber-300 text-[10px] font-bold">
        ◎ Amazon
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-900/20 border border-red-800/30 text-red-400 text-[10px] font-bold">
      ✗ Not Available
    </span>
  );
}

const WHAT_IT_MEANS = [
  {
    term: "COA (Certificate of Analysis)",
    definition:
      "A document from a third-party laboratory that confirms the product's composition, potency, and purity. A COA is the gold standard for supplement transparency — without one, you cannot verify what's actually in the product.",
  },
  {
    term: "Fulvic Acid",
    definition:
      "The primary active compound in shilajit responsible for its purported benefits. High-quality shilajit should have fulvic acid content verifiable by lab testing. Black Lotus resin is tested by IAS Laboratories and delivers 161mg fulvic acid per serving (batch #93–94).",
  },
  {
    term: "Humic Acid",
    definition:
      "A related organic acid found in shilajit, often present alongside fulvic acid. Less research exists on humic acid's specific benefits compared to fulvic acid, but it contributes to overall bioactive compound content.",
  },
  {
    term: "Heavy Metals Panel",
    definition:
      "Tests for Lead (Pb), Mercury (Hg), Arsenic (As), and Cadmium (Cd). These naturally occur in soil but can concentrate in shilajit from contaminated sources. Safe shilajit should pass all four tests below FDA action levels.",
  },
  {
    term: "ISO/IEC 17025 Accreditation",
    definition:
      "The international standard for testing laboratory competence. An ISO/IEC 17025 accredited lab has been independently audited and verified to produce accurate and reliable test results — this is the highest level of lab credential.",
  },
  {
    term: "Third-Party Testing",
    definition:
      "Testing performed by an independent laboratory with no financial relationship to the brand being tested. This is essential for unbiased results — in-house testing can be manipulated.",
  },
];

export default function LabDataPage() {
  const allProducts = PRODUCTS;
  const verifiedCount = allProducts.filter((p) => {
    const e = getLabEntry(p.id);
    return e.coaStatus === "verified";
  }).length;
  const noCoaCount = allProducts.filter((p) => {
    const e = getLabEntry(p.id);
    return e.coaStatus === "not-available";
  }).length;

  return (
    <div className="min-h-screen bg-[#0d1f14]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <Link href="/#deals" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Deals</Link>
            <Link href="/compare" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Compare</Link>
            <Link href="/blog" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Blog</Link>
            <Link href="/lab-data" className="text-emerald-400 font-semibold">Lab Data</Link>
            <Link href="/reviews" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Reviews</Link>
          </div>
          <Link href="/methodology" className="hidden sm:inline-flex px-3 py-1.5 rounded-lg border border-emerald-700/50 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/30 transition-colors">
            Methodology →
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <nav className="flex items-center gap-2 text-xs text-[#5d8c6e] mb-6">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <span className="text-[#9ec9ad]">Lab Data</span>
          </nav>
          <div className="flex items-start gap-4 flex-wrap mb-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-black text-[#e8f4ec] mb-3">
                Shilajit Lab Reports &amp; COA Database
              </h1>
              <p className="text-[#9ec9ad] leading-relaxed max-w-2xl">
                We track Certificate of Analysis (COA) availability, fulvic acid content, and heavy metals test results
                for every shilajit product in our database. Only buy from brands that publish verifiable third-party lab data.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-emerald-400">{verifiedCount}</div>
              <div className="text-[10px] text-[#5d8c6e] mt-0.5">COA Verified</div>
            </div>
            <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-[#9ec9ad]">{allProducts.length - verifiedCount - noCoaCount}</div>
              <div className="text-[10px] text-[#5d8c6e] mt-0.5">Amazon Listed</div>
            </div>
            <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-red-400">{noCoaCount}</div>
              <div className="text-[10px] text-[#5d8c6e] mt-0.5">No COA Found</div>
            </div>
          </div>
        </div>

        {/* Verified brands spotlight */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-[#e8f4ec] mb-4">Verified Lab Data — Featured Brands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Black Lotus */}
            <div className="bg-[#182b1f] border border-emerald-600/40 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-[#e8f4ec]">Black Lotus Shilajit</h3>
                <CoaBadge status="verified" />
              </div>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Fulvic Acid (Resin)</span>
                  <span className="text-[#e8f4ec] font-semibold">161mg/serving</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Humic Acid (Resin)</span>
                  <span className="text-[#e8f4ec] font-semibold">22mg/serving</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Fulvic Acid (Capsules)</span>
                  <span className="text-[#e8f4ec] font-semibold">445.80mg/serving</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Trace Minerals</span>
                  <span className="text-[#e8f4ec] font-semibold">85 ionic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Testing Lab</span>
                  <span className="text-[#e8f4ec] font-semibold">IAS Laboratories, Phoenix, AZ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Testing Frequency</span>
                  <span className="text-emerald-400 font-bold">Every Batch ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Heavy Metals</span>
                  <span className="text-emerald-400 font-bold">All Pass ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5d8c6e]">Microbiology</span>
                  <span className="text-emerald-400 font-bold">All Pass ✓</span>
                </div>
              </div>
              <p className="text-[10px] text-[#5d8c6e] mb-3 leading-relaxed">
                Values from batches #93–94 (resin/tablets) and #94 (capsules). Minor variation between batches is normal for a raw natural product.
              </p>
              <p className="text-[10px] text-emerald-400/80 mb-3 leading-relaxed">
                Black Lotus publishes their full batch COAs publicly — customers can verify any batch by the batch number printed on their product label.
              </p>
              <a
                href="https://blacklotusshilajit.com/pages/lab-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-900/40 hover:bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-xs font-semibold transition-colors"
              >
                View All Batch COAs →
              </a>
            </div>

            {/* Pure Himalayan */}
            <div className="bg-[#1f1d0f] border border-amber-600/40 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-[#e8f4ec]">Pure Himalayan Shilajit</h3>
                <CoaBadge status="verified" />
              </div>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-amber-100/50">Testing Lab</span>
                  <span className="text-[#e8f4ec] font-semibold">ISO/IEC 17025 Accredited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-100/50">Purity</span>
                  <span className="text-[#e8f4ec] font-semibold">Up to 99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-100/50">Heavy Metals</span>
                  <span className="text-emerald-400 font-bold">All Pass ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-100/50">Accreditation</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-900/30 border border-blue-700/40 text-blue-300 text-[10px] font-bold">ISO/IEC 17025</span>
                </div>
              </div>
              <a
                href="https://www.purehimalayanshilajit.com/?ref=4792"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-900/30 hover:bg-amber-900/50 border border-amber-700/40 text-amber-300 text-xs font-semibold transition-colors"
              >
                View Official COA →
              </a>
            </div>
          </div>
        </section>

        {/* Full product table */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#e8f4ec] mb-4">All Products — COA Status</h2>
          <div className="overflow-x-auto rounded-xl border border-[#2a4535]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0d1f14] border-b border-[#2a4535]">
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">Brand</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">Product</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">COA</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">FA</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">Pb</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">Hg</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">As</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">Cd</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((product, i) => {
                  const lab = getLabEntry(product.id);
                  return (
                    <tr
                      key={product.id}
                      className={`border-b border-[#1e3527] last:border-0 transition-colors hover:bg-[#182b1f] ${
                        i % 2 === 0 ? "bg-[#0d1f14]/30" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                          {product.vendor}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[#e8f4ec] text-xs">{product.productName}</span>
                      </td>
                      <td className="px-3 py-3 text-center">
                        {lab.coaUrl ? (
                          <a
                            href={lab.coaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <CoaBadge status={lab.coaStatus} />
                          </a>
                        ) : (
                          <CoaBadge status={lab.coaStatus} />
                        )}
                      </td>
                      <td className="px-3 py-3 text-center text-[11px] text-[#9ec9ad]">
                        {lab.fulvicAcidMgPerServing ? `${lab.fulvicAcidMgPerServing}mg` : lab.fulvicAcidPct ? `${lab.fulvicAcidPct}%` : "—"}
                      </td>
                      <td className="px-3 py-3 text-center"><HMBadge result={lab.heavyMetals.lead} /></td>
                      <td className="px-3 py-3 text-center"><HMBadge result={lab.heavyMetals.mercury} /></td>
                      <td className="px-3 py-3 text-center"><HMBadge result={lab.heavyMetals.arsenic} /></td>
                      <td className="px-3 py-3 text-center"><HMBadge result={lab.heavyMetals.cadmium} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#5d8c6e] mt-2">
            FA = Fulvic Acid · Pb = Lead · Hg = Mercury · As = Arsenic · Cd = Cadmium · ✓ = Pass · ✗ = Fail · — = Not Tested/Not Disclosed
          </p>
        </section>

        {/* What each test means */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#e8f4ec] mb-2">What Each Lab Test Means</h2>
          <p className="text-[#5d8c6e] text-sm mb-6">
            Understanding lab data helps you make better buying decisions. Here&apos;s what each measurement tells you about a shilajit product.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHAT_IT_MEANS.map(({ term, definition }) => (
              <div key={term} className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-5">
                <h3 className="text-sm font-bold text-[#e8f4ec] mb-2">{term}</h3>
                <p className="text-xs text-[#9ec9ad] leading-relaxed">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lab data disclaimer */}
        <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-xs text-[#9ec9ad] leading-relaxed">{LAB_DISCLAIMER}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors"
          >
            Compare All Products →
          </Link>
          <Link
            href="/methodology"
            className="ml-3 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#182b1f] hover:bg-[#1e3527] border border-[#2a4535] text-[#9ec9ad] font-semibold text-sm transition-colors"
          >
            Our Scoring Methodology →
          </Link>
        </div>
      </main>
    </div>
  );
}
