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
    url: "https://www.shilajitprice.com/lab-data",
  },
  alternates: { canonical: "https://www.shilajitprice.com/lab-data" },
};

function HMBadge({ result }: { result: HeavyMetalResult }) {
  if (result === "pass")
    return <span className="text-[#10B981] font-bold text-[11px]">✓</span>;
  if (result === "fail")
    return <span className="text-red-500 font-bold text-[11px]">✗</span>;
  return <span className="text-[#9EC9AD] text-[11px]">—</span>;
}

function CoaBadge({ status }: { status: "verified" | "listed-on-amazon" | "not-available" }) {
  if (status === "verified")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 ring-1 ring-emerald-300 text-emerald-700 text-[10px] font-bold">
        ✓ Verified
      </span>
    );
  if (status === "listed-on-amazon")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 ring-1 ring-amber-300 text-amber-700 text-[10px] font-bold">
        ◎ Amazon
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 ring-1 ring-red-200 text-red-600 text-[10px] font-bold">
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
    term: "ICP-MS (Inductively Coupled Plasma Mass Spectrometry)",
    definition:
      "The gold-standard analytical method for detecting and quantifying trace elements — including heavy metals and minerals — in a sample. A plasma torch atomizes the sample; a mass spectrometer then separates elements by atomic mass and counts ions with extraordinary sensitivity (parts per trillion). ICP-MS is preferred for heavy metals testing because it can detect elements at concentrations far below any safety threshold.",
  },
  {
    term: "ICP-OES (Inductively Coupled Plasma Optical Emission Spectrometry)",
    definition:
      "A complementary technique to ICP-MS, optimized for quantifying macro and trace minerals (potassium, calcium, magnesium, zinc, iron, etc.) at higher concentrations. ICP-OES measures the light emitted by excited atoms; each element emits a unique spectral signature. Used alongside ICP-MS, it provides a complete mineral profile from macro to ultra-trace levels.",
  },
  {
    term: "A2LA ISO/IEC 17025 Accreditation",
    definition:
      "ISO/IEC 17025 is the international standard for testing laboratory competence — labs must demonstrate technical proficiency, calibration traceability, and quality management. A2LA (American Association for Laboratory Accreditation) is the US body that audits and certifies labs against this standard. A2LA ISO/IEC 17025 accreditation is the highest lab credential in the US supplement industry. Certified Laboratories and Micro Quality Labs in Burbank, CA (Cert 3034.01) hold this accreditation for Pure Himalayan's COA testing.",
  },
  {
    term: "Batch-Specific COA",
    definition:
      "A COA issued for a specific production batch — identified by a batch or lot number — rather than a generic product-level certification. Batch-specific COAs are far more meaningful than general certifications because they prove the actual product on the shelf was tested. Batches can vary in heavy metals, fulvic acid, and microbiology due to seasonal or source variation. All four featured brands publish batch-identified COA data.",
  },
  {
    term: "Fulvic Acid",
    definition:
      "The primary active compound in shilajit responsible for its mineral transport, antioxidant, and energy-related properties. High-quality shilajit should have fulvic acid content verifiable by a named third-party lab. Black Lotus Batch 93 COA (IAS Laboratories): Resin 64.51%, Tablets 73.11%, Capsules 74.30%.",
  },
  {
    term: "DBP (Dibenzo-α-Pyrones)",
    definition:
      "A class of bioactive compounds found in shilajit that Pürblack uses as its primary quality marker instead of fulvic acid percentage. DBPs are mitochondria-targeting molecules with antioxidant properties. Pürblack documents DBP content by product: White Rabbit Vive 21.9%, Research Grade 19.8%, True Gold 17.5%.",
  },
  {
    term: "Heavy Metals Panel",
    definition:
      "Tests for Lead (Pb), Mercury (Hg), Arsenic (As), and Cadmium (Cd). These naturally occur in geological formations and can concentrate in shilajit from its source environment. All four featured brands pass FDA dietary supplement limits: Lead <10 ppm, Mercury <3 ppm, Arsenic <15 ppm, Cadmium <5 ppm.",
  },
  {
    term: "Third-Party Testing",
    definition:
      "Testing performed by an independent laboratory with no financial relationship to the brand being tested. This is essential for unbiased results — in-house testing can be manipulated. All four featured brands use named independent US laboratories.",
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
            <Link href="/compare" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Compare</Link>
            <Link href="/blog" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Blog</Link>
            <Link href="/lab-data" className="text-[#10B981] font-semibold">Lab Data</Link>
            <Link href="/reviews" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Reviews</Link>
          </div>
          <Link
            href="/methodology"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg border border-[#D1EDD8] text-[#4A6358] text-xs font-semibold hover:border-[#10B981] hover:text-[#10B981] transition-colors"
          >
            Methodology →
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#7BA899] mb-6">
          <Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#4A6358]">Lab Data</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start gap-4 flex-wrap mb-4">
            <div className="flex-1 min-w-0">
              <h1
                className="text-3xl sm:text-4xl font-black text-[#0D1F14] mb-3"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Shilajit Lab Reports &amp; COA Database
              </h1>
              <p className="text-[#4A6358] leading-relaxed max-w-2xl">
                We track Certificate of Analysis (COA) availability, fulvic acid content, and heavy metals test results
                for every shilajit product in our database. Only buy from brands that publish verifiable third-party lab data.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-4 text-center shadow-sm">
              <div className="text-2xl font-black text-[#10B981]">{verifiedCount}</div>
              <div className="text-[10px] text-[#7BA899] mt-0.5 font-semibold uppercase tracking-wide">COA Verified</div>
            </div>
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-4 text-center shadow-sm">
              <div className="text-2xl font-black text-[#0D1F14]">{allProducts.length - verifiedCount - noCoaCount}</div>
              <div className="text-[10px] text-[#7BA899] mt-0.5 font-semibold uppercase tracking-wide">Amazon Listed</div>
            </div>
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-4 text-center shadow-sm">
              <div className="text-2xl font-black text-red-500">{noCoaCount}</div>
              <div className="text-[10px] text-[#7BA899] mt-0.5 font-semibold uppercase tracking-wide">No COA Found</div>
            </div>
          </div>
        </div>

        {/* Verified brands spotlight */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>
            Verified Lab Data — Featured Brands
          </h2>
          <p className="text-sm text-[#7BA899] mb-6">
            Batch-specific COA data from named accredited US laboratories. All values sourced directly from each brand&apos;s published Certificates of Analysis.
          </p>

          {/* ── BLACK LOTUS ── */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl shadow-sm overflow-hidden mb-6 border-l-4 border-l-amber-400">
            <div className="bg-amber-50 border-b border-amber-100 px-5 py-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-black text-[#0D1F14] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Black Lotus Shilajit</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 ring-1 ring-amber-300 text-[9px] font-black">S-TIER</span>
                  <CoaBadge status="verified" />
                </div>
                <p className="text-xs text-[#7BA899]">Altai Mountains, Siberia · <strong className="text-[#4A6358]">IAS Laboratories, Phoenix AZ</strong> · ISO/IEC 17025</p>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-[#7BA899] uppercase tracking-widest font-bold">Most Recent Batch</div>
                <div className="text-sm font-bold text-[#0D1F14]">Batch 93 · May–June 2025</div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* Fulvic Acid */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Fulvic Acid by Product — Batch 93 COA</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Resin / Tincture / Honey", pct: "64.51%" },
                    { label: "Tablets", pct: "73.11%" },
                    { label: "Capsules", pct: "74.30%" },
                  ].map(({ label, pct }) => (
                    <div key={label} className="bg-[#F0FAF4] rounded-xl p-3 text-center">
                      <div className="text-lg font-black text-emerald-600">{pct}</div>
                      <div className="text-[10px] text-[#7BA899] mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Heavy Metals */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Heavy Metals — Batch 93 · ICP-MS (ppm)</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#F0FAF4]">
                        <th className="px-3 py-2 text-left font-bold text-[#0D1F14]">Product</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1EDD8]">
                      {[
                        { p: "Resin", pb: "1.17", as: "0.88", cd: "0.15", hg: "ND" },
                        { p: "Tablets", pb: "1.06", as: "0.94", cd: "0.26", hg: "ND" },
                        { p: "Capsules", pb: "1.37", as: "0.92", cd: "0.20", hg: "ND" },
                        { p: "FDA Limit", pb: "<10", as: "<15", cd: "<5", hg: "<3", limit: true },
                      ].map(({ p, pb, as: a, cd, hg, limit }) => (
                        <tr key={p} className={limit ? "bg-[#F0FAF4] text-[#7BA899]" : "bg-white"}>
                          <td className={`px-3 py-2 font-semibold ${limit ? "text-[10px] text-[#7BA899]" : "text-[#0D1F14]"}`}>{p}</td>
                          <td className="px-3 py-2 text-center">{pb}</td>
                          <td className="px-3 py-2 text-center">{a}</td>
                          <td className="px-3 py-2 text-center">{cd}</td>
                          <td className={`px-3 py-2 text-center font-semibold ${hg === "ND" && !limit ? "text-emerald-600" : ""}`}>{hg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Microbiology */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Microbiology — Batch 93</p>
                <div className="flex flex-wrap gap-2">
                  {["Listeria ND", "Salmonella Absent", "E. coli ND", "Yeast & Mold ND"].map((r) => (
                    <span key={r} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[11px] font-semibold">
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://blacklotusshilajit.com/pages/lab-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F0FAF4] hover:bg-emerald-100 border border-[#D1EDD8] hover:border-[#10B981] text-[#10B981] text-xs font-semibold transition-colors"
              >
                View All Batch COAs →
              </a>
            </div>
          </div>

          {/* ── PURE HIMALAYAN ── */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl shadow-sm overflow-hidden mb-6 border-l-4 border-l-blue-400">
            <div className="bg-blue-50 border-b border-blue-100 px-5 py-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-black text-[#0D1F14] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Pure Himalayan Shilajit</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 ring-1 ring-amber-300 text-[9px] font-black">S-TIER</span>
                  <CoaBadge status="verified" />
                </div>
                <p className="text-xs text-[#7BA899]">Himalayan Mountains, 16,000+ ft · <strong className="text-[#4A6358]">Certified Laboratories + Micro Quality Labs, Burbank CA</strong></p>
                <p className="text-xs text-[#7BA899]">A2LA ISO/IEC 17025, Cert 3034.01 — highest accreditation standard in our database</p>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-[#7BA899] uppercase tracking-widest font-bold">Most Recent COA</div>
                <div className="text-sm font-bold text-[#0D1F14]">September 2024</div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* Fulvic Acid note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-[#4A6358] leading-relaxed">
                <span className="font-bold text-amber-800">Fulvic Acid:</span> ~58% (Batch RE18, April 2021 · Micro Quality Labs · UV method). This result is noted as <em>not covered under A2LA accreditation</em> — not a current batch-verified figure. Most recent COAs (September 2024) cover heavy metals only.
              </div>

              {/* Heavy Metals */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Heavy Metals — ICP-MS (mcg per 200mg serving)</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#F0FAF4]">
                        <th className="px-3 py-2 text-left font-bold text-[#0D1F14]">Product (Batch)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1EDD8]">
                      {[
                        { p: "Tablets (STH11 · Sep 2024)", pb: "0.095", as: "0.192", cd: "0.066", hg: "ND" },
                        { p: "Solid Resin (SD22 · Sep 2024)", pb: "0.070", as: "0.607", cd: "0.006", hg: "0.001" },
                        { p: "Soft Resin 15mL (LM445 · Jan 2024)", pb: "0.208", as: "0.304", cd: "0.025", hg: "ND" },
                      ].map(({ p, pb, as: a, cd, hg }) => (
                        <tr key={p} className="bg-white">
                          <td className="px-3 py-2 font-semibold text-[#0D1F14]">{p}</td>
                          <td className="px-3 py-2 text-center text-[#4A6358]">{pb}</td>
                          <td className="px-3 py-2 text-center text-[#4A6358]">{a}</td>
                          <td className="px-3 py-2 text-center text-[#4A6358]">{cd}</td>
                          <td className={`px-3 py-2 text-center font-semibold ${hg === "ND" ? "text-emerald-600" : "text-[#4A6358]"}`}>{hg}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#F0FAF4]">
                        <td className="px-3 py-2 text-[10px] font-bold text-[#7BA899]">Note</td>
                        <td colSpan={4} className="px-3 py-2 text-[10px] text-[#7BA899]">Values in mcg per 200mg serving — A2LA ISO/IEC 17025 accredited lab · All within FDA limits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Microbiology */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Microbiology — Liquid Drops (Batch LX889 · Jan 2024)</p>
                <div className="flex flex-wrap gap-2">
                  {["TPC <10 cfu/gm", "E. coli Absent", "Salmonella/Shigella Absent", "S. aureus Absent"].map((r) => (
                    <span key={r} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[11px] font-semibold">
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mineral Panel */}
              <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Full Mineral Panel — Batch RE18 · ICP-MS + ICP-OES · Micro Quality Labs</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#4A6358] mb-3">
                  {[
                    "Potassium 91,850 ppm", "Calcium 24,525 ppm", "Magnesium 9,841 ppm",
                    "Iron 1,040 ppm", "Zinc 490 ppm", "Boron 293 ppm", "Selenium 0.1 ppm",
                  ].map((m) => (
                    <span key={m} className="font-medium">· {m}</span>
                  ))}
                  <span className="text-[#7BA899]">· 20+ minerals total</span>
                </div>
                <Link
                  href="/blog/shilajit-mineral-content"
                  className="inline-flex items-center gap-1 text-[#10B981] text-xs font-semibold hover:underline"
                >
                  View full mineral panel breakdown →
                </Link>
              </div>

              <a
                href="https://www.purehimalayanshilajit.com/?ref=4792"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F0FAF4] hover:bg-emerald-100 border border-[#D1EDD8] hover:border-[#10B981] text-[#10B981] text-xs font-semibold transition-colors"
              >
                View Official COA →
              </a>
            </div>
          </div>

          {/* ── NATURAL SHILAJIT ── */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl shadow-sm overflow-hidden mb-6 border-l-4 border-l-teal-400">
            <div className="bg-teal-50 border-b border-teal-100 px-5 py-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-black text-[#0D1F14] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Natural Shilajit</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 ring-1 ring-amber-300 text-[9px] font-black">S-TIER</span>
                  <CoaBadge status="verified" />
                </div>
                <p className="text-xs text-[#7BA899]">UNESCO Altai Mountains, Siberia · <strong className="text-[#4A6358]">DaaneLabs, Naples FL + Harken Research, Los Angeles CA</strong></p>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-[#7BA899] uppercase tracking-widest font-bold">Most Recent COA</div>
                <div className="text-sm font-bold text-[#0D1F14]">November 2024</div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* FA note */}
              <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-3 text-xs text-[#4A6358]">
                <span className="font-bold text-[#0D1F14]">Fulvic Acid:</span> Not publicly disclosed. Natural Shilajit does not report fulvic acid percentage as a quality metric.
              </div>

              {/* Heavy Metals */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Heavy Metals — Oct–Nov 2024 · ICP-MS (ppm)</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#F0FAF4]">
                        <th className="px-3 py-2 text-left font-bold text-[#0D1F14]">Product</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1EDD8]">
                      {[
                        { p: "Resin ⚠️", pb: "4.714", as: "3.757", cd: "0.477", hg: "0.029", note: true },
                        { p: "Tablets", pb: "1.761", as: "1.719", cd: "0.356", hg: "<LOQ" },
                        { p: "Capsules", pb: "2.976", as: "2.606", cd: "0.201", hg: "0.019" },
                        { p: "NutriHoney", pb: "0.739", as: "—", cd: "ND", hg: "ND" },
                        { p: "FDA Limit", pb: "<10", as: "<15", cd: "<5", hg: "<3", limit: true },
                      ].map(({ p, pb, as: a, cd, hg, limit }) => (
                        <tr key={p} className={limit ? "bg-[#F0FAF4] text-[#7BA899]" : "bg-white"}>
                          <td className={`px-3 py-2 font-semibold ${limit ? "text-[10px] text-[#7BA899]" : "text-[#0D1F14]"}`}>{p}</td>
                          <td className="px-3 py-2 text-center">{pb}</td>
                          <td className="px-3 py-2 text-center">{a}</td>
                          <td className="px-3 py-2 text-center">{cd}</td>
                          <td className="px-3 py-2 text-center">{hg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-[#7BA899] mt-1.5">⚠️ Raw resin shows higher heavy metals than processed forms — normal for unprocessed resin, within all FDA limits. Processed forms (tablets, capsules) significantly lower.</p>
              </div>

              {/* Extra badges */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Additional Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Amazon Certification PASS (Eurofins, Jun 2024)",
                    "Sexual enhancement adulterants — All ND",
                    "Microbiology — Clean across all products",
                  ].map((r) => (
                    <span key={r} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[11px] font-semibold">
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://naturalshilajit.com/?rfsn=9069392.c841fa"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F0FAF4] hover:bg-emerald-100 border border-[#D1EDD8] hover:border-[#10B981] text-[#10B981] text-xs font-semibold transition-colors"
              >
                View Natural Shilajit →
              </a>
            </div>
          </div>

          {/* ── PÜRBLACK ── */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl shadow-sm overflow-hidden mb-6 border-l-4 border-l-violet-400">
            <div className="bg-violet-50 border-b border-violet-100 px-5 py-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-black text-[#0D1F14] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Pürblack Live Resin</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300 text-[9px] font-black">A-TIER</span>
                  <CoaBadge status="verified" />
                </div>
                <p className="text-xs text-[#7BA899]">Multi-region (Caucasus, Siberia, Himalayas) · <strong className="text-[#4A6358]">Pürblack Inc., Temecula CA</strong> · Pharmaceutical GMP · 5 US Patents</p>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-[#7BA899] uppercase tracking-widest font-bold">Most Recent COA</div>
                <div className="text-sm font-bold text-[#0D1F14]">December 2025</div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* DBP + Urolithin A */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">DBP Content by Product</p>
                  <p className="text-[10px] text-[#7BA899] mb-2 leading-relaxed">Pürblack uses DBP (dibenzo-α-pyrones) as its primary quality marker in place of fulvic acid percentage.</p>
                  <div className="space-y-1.5">
                    {[
                      { product: "White Rabbit Vive", val: "21.9%", best: true },
                      { product: "Research Grade", val: "19.8%" },
                      { product: "True Gold", val: "17.5%" },
                      { product: "Immunity Max", val: "16.6%" },
                      { product: "White Rabbit Slim", val: "16.5%" },
                    ].map(({ product, val, best }) => (
                      <div key={product} className="flex justify-between items-center text-xs">
                        <span className={`text-[#4A6358] ${best ? "font-semibold" : ""}`}>{product}</span>
                        <span className={`font-bold ${best ? "text-emerald-600" : "text-[#0D1F14]"}`}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Urolithin A by Product (ppm)</p>
                  <p className="text-[10px] text-[#7BA899] mb-2 leading-relaxed">Urolithin A is a mitochondria-targeting metabolite derived from ellagitannins.</p>
                  <div className="space-y-1.5">
                    {[
                      { product: "White Rabbit Vive", val: "58.497 ppm", best: true },
                      { product: "White Rabbit Slim", val: "52.391 ppm" },
                      { product: "Research Grade", val: "39.872 ppm" },
                      { product: "Immunity Max", val: "14.379 ppm" },
                      { product: "True Gold", val: "11.748 ppm" },
                    ].map(({ product, val, best }) => (
                      <div key={product} className="flex justify-between items-center text-xs">
                        <span className={`text-[#4A6358] ${best ? "font-semibold" : ""}`}>{product}</span>
                        <span className={`font-bold ${best ? "text-emerald-600" : "text-[#0D1F14]"}`}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Heavy Metals */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Heavy Metals — True Gold (Cleanest Product) · ICP-MS (mg/kg)</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#F0FAF4]">
                        <th className="px-3 py-2 text-left font-bold text-[#0D1F14]">Product</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Lead (Pb)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Arsenic (As)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Cadmium (Cd)</th>
                        <th className="px-3 py-2 text-center font-bold text-[#0D1F14]">Mercury (Hg)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1EDD8]">
                      {[
                        { p: "True Gold ⭐", pb: "0.121", as: "0.313", cd: "0.031", hg: "ND" },
                        { p: "Research Grade", pb: "0.47", as: "0.311", cd: "0.032", hg: "0.001" },
                        { p: "White Rabbit Vive", pb: "0.42", as: "1.14", cd: "0.031", hg: "0.001" },
                        { p: "FDA Limit", pb: "<10", as: "<15", cd: "<5", hg: "<3", limit: true },
                      ].map(({ p, pb, as: a, cd, hg, limit }) => (
                        <tr key={p} className={limit ? "bg-[#F0FAF4] text-[#7BA899]" : "bg-white"}>
                          <td className={`px-3 py-2 font-semibold ${limit ? "text-[10px] text-[#7BA899]" : "text-[#0D1F14]"}`}>{p}</td>
                          <td className="px-3 py-2 text-center">{pb}</td>
                          <td className="px-3 py-2 text-center">{a}</td>
                          <td className="px-3 py-2 text-center">{cd}</td>
                          <td className={`px-3 py-2 text-center font-semibold ${hg === "ND" && !limit ? "text-emerald-600" : ""}`}>{hg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-[#7BA899] mt-1.5">⭐ True Gold has the lowest lead (0.121 mg/kg) of any product across all four brands. See our <Link href="/blog/shilajit-heavy-metals-comparison" className="text-[#10B981] hover:underline">full heavy metals comparison →</Link></p>
              </div>

              {/* Authenticity + Microbiology */}
              <div>
                <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">Authenticity &amp; Microbiology</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Authenticity Verified Positive — all products",
                    "Standard Plate Count <10 CFU/g — all products",
                  ].map((r) => (
                    <span key={r} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[11px] font-semibold">
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://purblack.pxf.io/c/7221460/3041684/36963"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F0FAF4] hover:bg-emerald-100 border border-[#D1EDD8] hover:border-[#10B981] text-[#10B981] text-xs font-semibold transition-colors"
              >
                View Pürblack →
              </a>
            </div>
          </div>

          {/* Cross-brand heavy metals link */}
          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#4A6358]">
              <strong className="text-[#0D1F14]">Side-by-side heavy metals comparison</strong> — all four brands, all products, in one table.
            </p>
            <Link
              href="/blog/shilajit-heavy-metals-comparison"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-[#D1EDD8] hover:border-[#10B981] text-[#10B981] text-xs font-semibold transition-colors shrink-0"
            >
              View Full Comparison →
            </Link>
          </div>
        </section>

        {/* Full product table */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            All Products — COA Status
          </h2>
          <div className="overflow-x-auto rounded-2xl border-2 border-[#D1EDD8] shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Brand</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Product</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">COA</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">FA</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Pb</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Hg</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">As</th>
                  <th className="text-center px-3 py-3 text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Cd</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((product, i) => {
                  const lab = getLabEntry(product.id);
                  return (
                    <tr
                      key={product.id}
                      className={`border-b border-[#D1EDD8] last:border-0 transition-colors hover:bg-[#F0FAF4] ${
                        i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"
                      }`}
                    >
                      <td className="px-4 py-3">
                        <span className="text-[11px] font-bold text-[#10B981] uppercase tracking-wide">
                          {product.vendor}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[#0D1F14] text-xs">{product.productName}</span>
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
                      <td className="px-3 py-3 text-center text-[11px] text-[#4A6358] font-medium">
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
          <p className="text-[10px] text-[#7BA899] mt-2">
            FA = Fulvic Acid · Pb = Lead · Hg = Mercury · As = Arsenic · Cd = Cadmium · ✓ = Pass · ✗ = Fail · — = Not Tested/Not Disclosed
          </p>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
            How to Interpret This Data
          </h2>
          <p className="text-[#7BA899] text-sm mb-5">
            Understanding the standards behind lab testing helps you evaluate COA data critically — not just take a brand&apos;s word for it.
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                q: "What is ICP-MS and why does it matter?",
                a: "ICP-MS (Inductively Coupled Plasma Mass Spectrometry) is the gold standard for detecting trace elements in supplements. A plasma torch atomizes the sample; a mass spectrometer identifies each element by atomic mass and counts individual ions. It can detect elements at parts-per-trillion concentrations — far more sensitive than older methods. All heavy metals data on this page uses ICP-MS methodology.",
              },
              {
                q: "What is ICP-OES and how is it different?",
                a: "ICP-OES (Inductively Coupled Plasma Optical Emission Spectrometry) uses the same plasma torch but measures light emitted by excited atoms rather than ion mass. It is better suited for macro minerals (potassium, calcium, magnesium) at higher concentrations. Used together, ICP-MS and ICP-OES provide a complete mineral profile from macro to ultra-trace levels — the methodology behind Pure Himalayan's Batch RE18 mineral panel.",
              },
              {
                q: "What does A2LA ISO/IEC 17025 accreditation mean?",
                a: "ISO/IEC 17025 is the international standard for testing laboratory competence. Labs must demonstrate technical proficiency, equipment calibration traceability, and quality management. A2LA (American Association for Laboratory Accreditation) is the US body that independently audits and certifies labs against this standard. A2LA ISO/IEC 17025 is the highest lab credential in the US supplement industry — Certified Laboratories and Micro Quality Labs in Burbank (Cert 3034.01) hold this accreditation for Pure Himalayan's COA testing.",
              },
              {
                q: "Why does batch-specific matter vs. a generic certification?",
                a: "A generic product-level certification confirms that some version of a product was tested at some point. A batch-specific COA shows results for the exact production run identified by a batch or lot number — the same batch that ended up in the product you are holding. Because shilajit is a natural product, heavy metals, fulvic acid, and microbiology can vary batch to batch due to seasonal and source variation. Batch-specific COAs are the only format that gives you verifiable assurance about what is actually in your product.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <p className="text-sm font-bold text-[#0D1F14] mb-1.5">{q}</p>
                <p className="text-xs text-[#4A6358] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-right">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-1 text-xs text-[#10B981] font-semibold hover:underline"
            >
              Full scoring methodology → how COA quality affects tier ratings
            </Link>
          </div>
        </section>

        {/* What each test means */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#0D1F14] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
            Glossary — Lab Testing Terms
          </h2>
          <p className="text-[#7BA899] text-sm mb-6">
            Understanding lab data helps you make better buying decisions. Here&apos;s what each measurement tells you about a shilajit product.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHAT_IT_MEANS.map(({ term, definition }) => (
              <div key={term} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#0D1F14] mb-2">{term}</h3>
                <p className="text-xs text-[#4A6358] leading-relaxed">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lab data disclaimer */}
        <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5 mb-8 shadow-sm">
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-xs text-[#4A6358] leading-relaxed">{LAB_DISCLAIMER}</p>
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
            className="ml-3 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F0FAF4] border border-[#D1EDD8] text-[#0D1F14] font-semibold text-sm transition-colors"
          >
            Our Scoring Methodology →
          </Link>
        </div>
      </main>
    </div>
  );
}
