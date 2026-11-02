import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import ChecklistDownload from "../../components/ChecklistDownload";

const BL_BASE = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const BL_RESIN = "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const BL_TABS = "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-tablets?sca_ref=5188496.BbHTin3axE";
const BL_CAPS = "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-resin-powder-capsules-extra-strength?sca_ref=5188496.BbHTin3axE";
const LBH = "https://lotusbloomingherbs.com/?aff=380";
const FF = "https://fractalforest.co/SHILAJIT-PRICE";
const NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const PH = "https://www.purehimalayanshilajit.com/?ref=4792";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/black-lotus-shilajit-resin-vs-tablets-vs-capsules`;

export const metadata: Metadata = {
  title: "Black Lotus Resin vs Tablets vs Capsules",
  description:
    "Black Lotus shilajit tested at 64.51% FA in resin, 74.30% in tablets and 73.11% in capsules — all Batch 93. Which form should you choose?",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Black Lotus Resin vs Tablets vs Capsules — Which Form?",
    description:
      "COA comparison for all three Black Lotus formats from a single batch. Fulvic acid, heavy metals, cost per gram, and which form fits your routine.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-11-02",
    modifiedTime: "2026-11-02",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Which Black Lotus format has the highest fulvic acid?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Black Lotus Tablets tested at 74.30% fulvic acid in Batch 93 (IAS Laboratories, Phoenix AZ, Verploegh/Brandvold method), the highest of the three formats. Capsules tested at 73.11% and Resin at 64.51%. The difference likely reflects concentration and processing differences between the resin base and the powdered forms used in tablets and capsules, not a difference in source material — all three come from the same Altai Mountain source.",
    },
  },
  {
    "@type": "Question",
    name: "Are the heavy metals the same across all three Black Lotus forms?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. All three Black Lotus formats (Resin, Tablets, Capsules) from Batch 93 show the same heavy metals results: Lead 1.17 ppm, Arsenic 0.16 ppm, Mercury not detected, Cadmium 0.06 ppm. Mercury not detected across all three forms is a notably strong result. All tested by IAS Laboratories, Phoenix AZ.",
    },
  },
  {
    "@type": "Question",
    name: "What is the best Black Lotus format for someone new to shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Capsules are the most practical format for a first-time user. They require no measuring, no dissolving, and no familiarity with the resin's appearance or texture. The Black Lotus Extra Strength Capsules tested at 73.11% fulvic acid (Batch 93) — the second-highest result in our database and a strong starting point. If you want to understand the traditional format first, the resin is the reference experience, but it has a preparation step.",
    },
  },
  {
    "@type": "Question",
    name: "What testing method does Black Lotus use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Black Lotus uses IAS Laboratories in Phoenix, AZ, an independent third-party laboratory. Fulvic acid is measured by the Verploegh/Brandvold method, which is a specific analytical protocol for humic substances. This method is not directly comparable to UV spectrophotometry results from other labs — percentages from different methods cannot be read as equivalent numbers.",
    },
  },
];

export default function BlackLotusResinVsTabletsVsCapsules() {
  return (
    <BlogPostLayout
      heading={
        <>
          Black Lotus Resin vs Tablets vs Capsules:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Same Batch, Different Numbers
          </span>
        </>
      }
      description="All three Black Lotus formats tested from Batch 93 by IAS Laboratories. Resin: 64.51% FA. Tablets: 74.30%. Capsules: 73.11%. Mercury not detected across all three forms. Here is which format fits which routine."
      tags={["Brand Reviews", "Black Lotus", "COA Verified", "Buying Guide"]}
      publishedAt="2026-11-02"
      updatedAt="2026-11-02"
      readingTimeMin={8}
      currentSlug="black-lotus-shilajit-resin-vs-tablets-vs-capsules"
      quizCta="card"
      breadcrumbLabel="Black Lotus Resin vs Tablets vs Capsules"
      faqItems={faqItems}
    >
      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. This does not affect our rankings — see our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclosure policy</Link>.
      </div>

      {/* Quick verdict */}
      <div className="bg-white border-2 border-[#9EC9AD] rounded-2xl p-5 shadow-lg shadow-emerald-900/10">
        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-2">Quick Verdict</div>
        <ul className="space-y-2 text-sm text-[#0D1F14]">
          <li className="flex gap-2"><span className="text-[#10B981] font-black mt-0.5">→</span><span><span className="font-semibold">Highest fulvic acid:</span> Tablets at 74.30% (Batch 93)</span></li>
          <li className="flex gap-2"><span className="text-[#10B981] font-black mt-0.5">→</span><span><span className="font-semibold">Best for convenience:</span> Capsules at 73.11% — no measuring, no prep</span></li>
          <li className="flex gap-2"><span className="text-[#10B981] font-black mt-0.5">→</span><span><span className="font-semibold">Traditional format:</span> Resin at 64.51% — dissolve in warm water</span></li>
          <li className="flex gap-2"><span className="text-[#10B981] font-black mt-0.5">→</span><span><span className="font-semibold">Heavy metals:</span> Mercury ND across all three forms; same results across the batch</span></li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={BL_BASE} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
            Shop All Black Lotus Formats →
          </a>
        </div>
      </div>

      {/* Intro */}
      <section>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Black Lotus publishes COA data for every format from every batch, which makes a direct comparison possible in a way it is not for most shilajit brands. Batch 93 covers all three forms tested at IAS Laboratories in Phoenix, AZ using the Verploegh/Brandvold method — the same lab, the same method, the same batch window (May–June 2025). The only variable is the form itself.
          </p>
          <p>
            The fulvic acid difference across formats — 64.51% for resin vs 74.30% for tablets — is meaningful and worth understanding before choosing. This post explains what the numbers represent, which format fits which use case, and what the heavy metals data shows. For the full ranked database, see our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline font-semibold">best shilajit brands ranked by lab data</Link>.
          </p>
        </div>
      </section>

      <ChecklistDownload location="black-lotus-shilajit-resin-vs-tablets-vs-capsules" compact />

      {/* COA comparison table */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Batch 93 COA comparison: all three formats</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-3">
          IAS Laboratories, Phoenix AZ · Batch 93, May–June 2025 · Verploegh/Brandvold method for fulvic acid
        </p>
        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8] mb-3">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] text-[#0D1F14] font-semibold">
                <th className="text-left px-3 py-2">Format</th>
                <th className="text-right px-3 py-2">Fulvic Acid</th>
                <th className="text-right px-3 py-2">Lead (ppm)</th>
                <th className="text-right px-3 py-2">Arsenic (ppm)</th>
                <th className="text-right px-3 py-2">Mercury</th>
                <th className="text-right px-3 py-2">Cadmium (ppm)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { form: "Pure Altai Resin", fa: "64.51%", pb: "1.17", as_: "0.16", hg: "ND ✓", cd: "0.06", alt: false },
                { form: "Tablets", fa: "74.30%", pb: "1.17", as_: "0.16", hg: "ND ✓", cd: "0.06", alt: true },
                { form: "Capsules (Extra Strength)", fa: "73.11%", pb: "1.17", as_: "0.16", hg: "ND ✓", cd: "0.06", alt: false },
              ].map((row) => (
                <tr key={row.form} className={row.alt ? "bg-[#F0FAF4]" : "bg-white"}>
                  <td className="px-3 py-2 font-medium text-[#0D1F14]">{row.form}</td>
                  <td className="px-3 py-2 text-right font-semibold text-[#10B981]">{row.fa}</td>
                  <td className="px-3 py-2 text-right text-[#0D1F14]">{row.pb}</td>
                  <td className="px-3 py-2 text-right text-[#0D1F14]">{row.as_}</td>
                  <td className="px-3 py-2 text-right font-semibold text-emerald-600">{row.hg}</td>
                  <td className="px-3 py-2 text-right text-[#0D1F14]">{row.cd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#7BA899] leading-relaxed">
          ND = Not Detected. All three forms share the same heavy metals results from Batch 93. Lead 1.17 ppm is below the FDA supplement limit of 2.5 ppm (daily serving basis). Arsenic 0.16 ppm and Cadmium 0.06 ppm are well within limit ranges. Mercury not detected is the strongest possible result for this metal.
        </p>
      </section>

      {/* What explains the FA difference */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Why the fulvic acid numbers differ across formats</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The 10-point difference in fulvic acid between the resin (64.51%) and the tablets (74.30%) does not mean the resin is a weaker product. The numbers reflect the concentration of fulvic acid relative to total material tested in each format.
          </p>
          <p>
            Resin shilajit contains the full spectrum of humic substances, including residual moisture, waxes, and other co-extracted compounds that dilute the fulvic acid percentage as measured. The powdered forms used in tablets and capsules undergo additional concentration steps that increase the fulvic acid percentage by weight.
          </p>
          <p>
            Both forms come from the same Altai Mountain source material and the same batch. The heavy metals data — identical across all three forms — confirms this. The fulvic acid percentage reflects the concentration of the processed form, not a difference in source quality.
          </p>
          <p>
            For practical purposes: if you prefer the traditional format and the full-spectrum resin experience, 64.51% from an IAS-verified batch is the highest-documented resin result in our database. If you want the highest measured fulvic acid per capsule, the tablets and capsules deliver more per gram of product.
          </p>
        </div>
      </section>

      {/* Format-by-format breakdown */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Format by format: who each one suits</h2>

        <div className="space-y-4">
          {/* Resin */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🫙</span>
              <h3 className="text-base font-black text-[#0D1F14]">Pure Altai Resin — 64.51% FA</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Best for</p>
                <ul className="space-y-1 text-xs text-[#4A6358]">
                  <li>Traditional format users</li>
                  <li>Those who prefer no fillers or excipients</li>
                  <li>Highest price-per-gram value in the lineup</li>
                  <li>Users who dissolve in warm beverages</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Not ideal for</p>
                <ul className="space-y-1 text-xs text-[#4A6358]">
                  <li>First-time users unfamiliar with resin texture</li>
                  <li>Travel or on-the-go use</li>
                  <li>Those who want pre-measured dosing</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-[#7BA899] mb-3 leading-relaxed">
              Dissolve a rice-grain-sized portion (~300–500mg) in warm (not hot) water, tea, or milk. Pea-size = ~500mg. Stir until fully dissolved. Avoid boiling water.
            </p>
            <a href={BL_RESIN} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
              View Pure Altai Resin →
            </a>
          </div>

          {/* Tablets */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">💊</span>
              <h3 className="text-base font-black text-[#0D1F14]">Tablets — 74.30% FA (highest in lineup)</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Best for</p>
                <ul className="space-y-1 text-xs text-[#4A6358]">
                  <li>Users who want the highest fulvic acid per dose</li>
                  <li>Consistent, pre-measured dosing</li>
                  <li>Stacking with other supplements</li>
                  <li>Travel and portability</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Not ideal for</p>
                <ul className="space-y-1 text-xs text-[#4A6358]">
                  <li>Those who prefer capsule shells over compressed tablets</li>
                  <li>Users wanting the traditional resin ritual</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-[#7BA899] mb-3 leading-relaxed">
              74.30% fulvic acid — the highest measured result across all three formats in Batch 93. Same source material as the resin, concentrated into tablet form. Convenient swallow format.
            </p>
            <a href={BL_TABS} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
              View Tablets →
            </a>
          </div>

          {/* Capsules */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🟢</span>
              <h3 className="text-base font-black text-[#0D1F14]">Capsules (Extra Strength) — 73.11% FA</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Best for</p>
                <ul className="space-y-1 text-xs text-[#4A6358]">
                  <li>First-time users — no preparation needed</li>
                  <li>Those who prefer capsule format</li>
                  <li>Easiest gifting format</li>
                  <li>Travel and on-the-go use</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Not ideal for</p>
                <ul className="space-y-1 text-xs text-[#4A6358]">
                  <li>Those wanting the highest FA per dose (tablets edge it out)</li>
                  <li>Users who prefer the traditional resin format</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-[#7BA899] mb-3 leading-relaxed">
              73.11% fulvic acid — the second-highest result in the lineup, and the most accessible entry point for someone new to shilajit. No preparation, no measuring, no learning curve.
            </p>
            <a href={BL_CAPS} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
              View Capsules →
            </a>
          </div>
        </div>
      </section>

      {/* If you want a different format or brand */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">If you want a different format or brand</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Black Lotus is the only brand in our database with all three forms tested from a single batch. If you are looking for something different — a different source, a liquid format, or Ayurvedic provenance — these are the other verified options.
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
            <p className="text-sm font-bold text-[#0D1F14] mb-1">Lotus Blooming Herbs — If you want Ayurvedic provenance</p>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              Himalayan source at 16,000–18,000ft. Ayurvedic practitioner-owned, among the first to bring pure resin shilajit to the Western market. Certified Laboratories Burbank (A2LA ISO 17025). Fulvic acid intentionally not disclosed.
            </p>
            <a href={LBH} target="_blank" rel="noopener noreferrer sponsored" className="text-xs text-[#10B981] font-semibold hover:underline">View Lotus Blooming Herbs →</a>
          </div>
          <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
            <p className="text-sm font-bold text-[#0D1F14] mb-1">Fractal Forest — If you want liquid drops</p>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              The only verified brand offering a liquid shilajit format. Himalayan Drops from Gilgit Baltistan: all four heavy metals not detected (A2LA ISO 17025, Certified Laboratories Burbank). Wild American Drops: North American source, 71.31% fulvic acid. Use code SHILAJIT-PRICE for 15% off.
            </p>
            <a href={FF} target="_blank" rel="noopener noreferrer sponsored" className="text-xs text-[#10B981] font-semibold hover:underline">View Fractal Forest →</a>
          </div>
          <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
            <p className="text-sm font-bold text-[#0D1F14] mb-1">Natural Shilajit — If you want UNESCO Altai sourcing</p>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              Sourced from the UNESCO-protected Altai Mountains. Third-party COA with DBP verification. Fulvic acid not disclosed. Resin format only.
            </p>
            <a href={NS} target="_blank" rel="noopener noreferrer sponsored" className="text-xs text-[#10B981] font-semibold hover:underline">View Natural Shilajit →</a>
          </div>
          <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
            <p className="text-sm font-bold text-[#0D1F14] mb-1">Pure Himalayan Shilajit — If you want UV-method COA data</p>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              About 58% fulvic acid by UV spectrophotometry (A2LA ISO 17025). Note: the published COA is from 2021 — request a current COA before purchasing. UV spectrophotometry is not directly comparable to IAS Labs Verploegh/Brandvold method results.
            </p>
            <a href={PH} target="_blank" rel="noopener noreferrer sponsored" className="text-xs text-[#10B981] font-semibold hover:underline">View Pure Himalayan Shilajit →</a>
          </div>
        </div>
        <p className="text-xs text-[#7BA899] mt-3 leading-relaxed">
          For the complete brand comparison, see our{" "}
          <Link href="/blog/black-lotus-shilajit-review" className="text-[#10B981] hover:underline font-semibold">full Black Lotus review with COA breakdown</Link>{" "}
          and the{" "}
          <Link href="/blog/shilajit-gift-guide" className="text-[#10B981] hover:underline font-semibold">shilajit gift guide</Link>{" "}
          for form-based recommendations.
        </p>
      </section>

      {/* Against the Odds callout */}
      <div className="bg-[#0D1F14] border border-[#1E3A28] rounded-2xl p-6">
        <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-2">Want the complete protocol?</p>
        <p className="text-sm text-white leading-relaxed mb-4">
          Want the complete protocol behind the numbers? <em>Against the Odds</em> covers everything else — the full supplement stack with clinical context, the lifestyle protocol, the sauna breakdown, sleep optimization, and the emotional health framework. 71% free testosterone increase, biological age of 29 at 35, no TRT, no pharmaceuticals.
        </p>
        <a
          href="https://www.sevasoulstudios.com/the-growth-studio/p/against-the-odds-natural-mens-health-protocol"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold text-sm transition-colors"
        >
          Get the Protocol — $9.99 →
        </a>
      </div>

      {/* Final CTA */}
      <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6">
        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Shop Black Lotus — All Formats</div>
        <h3 className="text-base font-black text-[#0D1F14] mb-1">Black Lotus Shilajit</h3>
        <p className="text-xs text-[#7BA899] mb-4">
          Highest verified fulvic acid in our database · Full COA every batch · Mercury ND across all forms · Altai sourced · Free shipping
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={BL_RESIN} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
            View Resin (64.51% FA) →
          </a>
          <a href={BL_TABS} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
            View Tablets (74.30% FA) →
          </a>
          <a href={BL_CAPS} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
            View Capsules (73.11% FA) →
          </a>
          <a href={BL_BASE} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#182B1F] hover:bg-[#1E3A28] text-white text-sm font-semibold transition-colors">
            Shop All Formats →
          </a>
        </div>
      </div>

      <ChecklistDownload location="black-lotus-shilajit-resin-vs-tablets-vs-capsules" />
    </BlogPostLayout>
  );
}
