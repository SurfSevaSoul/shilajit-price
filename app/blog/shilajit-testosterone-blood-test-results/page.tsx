import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import ChecklistDownload from "../../components/ChecklistDownload";

const BL_BASE = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const LBH_BASE = "https://lotusbloomingherbs.com/?aff=380";
const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-testosterone-blood-test-results`;

export const metadata: Metadata = {
  title: "My Free Testosterone Went Up 32% in 3 Months — Full Blood Work & Protocol",
  description:
    "Adrian Voss shares 3 months of real blood test data tracking free testosterone, SHBG, and bioavailable T while using shilajit, ashwagandha, and tongkat ali. Full protocol and lab numbers included.",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "My Free Testosterone Went Up 32% in 3 Months — Full Blood Work & Protocol",
    description:
      "Adrian Voss shares 3 months of real blood test data tracking free testosterone, SHBG, and bioavailable T while using shilajit, ashwagandha, and tongkat ali. Full protocol and lab numbers included.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-08-15",
    modifiedTime: "2026-08-15",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Does shilajit actually increase testosterone?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The evidence suggests shilajit may support free and bioavailable testosterone rather than total testosterone. Adrian Voss's 3-month self-experiment showed free testosterone rise from 93.0 to 123.47 pg/mL (+32.8%) while total testosterone dropped slightly. This is consistent with research suggesting shilajit's fulvic acid fraction may support SHBG modulation, making more testosterone bioavailable without necessarily raising total T.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between free testosterone and total testosterone?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total testosterone measures all testosterone in the blood — both bound (to SHBG and albumin) and unbound. Roughly 97–99% of testosterone is bound and cannot activate androgen receptors. Free testosterone is the unbound fraction your cells can actually use. When SHBG rises, free T falls even if total T stays stable. Testing free testosterone alongside total T gives a far more accurate picture of androgenic function.",
    },
  },
  {
    "@type": "Question",
    name: "What shilajit brand did Adrian Voss use in this protocol?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Adrian Voss used Black Lotus Shilajit resin — Altai-sourced, IAS Labs verified at 64.51% fulvic acid, Batch 93, mercury undetected. He has used this brand daily for six years and considers it the highest-verified resin in his database.",
    },
  },
  {
    "@type": "Question",
    name: "How long does it take for shilajit to affect testosterone?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "In this self-experiment, measurable increases in free testosterone were visible at the Month 2 blood draw (from 93.0 to 111.48 pg/mL) and continued increasing by Month 3 (123.47 pg/mL). A minimum 90-day protocol with baseline and follow-up testing is recommended to identify meaningful trends.",
    },
  },
];

export default function TestosteroneBloodTestResults() {
  return (
    <BlogPostLayout
      heading={
        <>
          My Free Testosterone Went Up 32% in 3 Months.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Here&apos;s Exactly What I Was Taking.
          </span>
        </>
      }
      description="Three months of real blood test data — free T, SHBG, bioavailable T, and full metabolic panel — with the exact shilajit protocol behind the results."
      tags={["Personal Results", "Blood Work", "Testosterone"]}
      publishedAt="2026-08-15"
      updatedAt="2026-08-15"
      readingTimeMin={8}
      currentSlug="shilajit-testosterone-blood-test-results"
      quizCta="line"
      breadcrumbLabel="Testosterone Blood Test Results"
      faqItems={faqItems}
      medicallyReviewed={false}
    >
      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. This does not affect our rankings — see our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclosure policy</Link>.
      </div>

      {/* Intro */}
      <section>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The number most people track is the wrong one.
          </p>
          <p>
            When I got my baseline testosterone panel, my total T came in at 599 ng/dL. Not bad. Not exceptional. Pretty average for a man in his late 30s who trains regularly and takes his health seriously.
          </p>
          <p>
            Three months later, my total T had dropped to 537 ng/dL. On paper, that looks like a failure.
          </p>
          <p>
            But my free testosterone — the fraction your body can actually use — went from 93.0 pg/mL to 123.47 pg/mL. That&apos;s a 32.8% increase.
          </p>
          <p>
            My bioavailable testosterone went from 191.2 to 243 ng/dL. Up 27%.
          </p>
          <p>
            And my SHBG — the protein that binds testosterone and renders it inactive — dropped from 29 to 27.3 nmol/L by month 3, after briefly rising in month 2.
          </p>
          <p>
            This is the data I wish I&apos;d had six years ago when I started taking shilajit. So here it is.
          </p>
        </div>
      </section>

      <ChecklistDownload location="shilajit-testosterone-blood-test-results" compact />

      {/* Why free T matters */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Why free testosterone matters more than total
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Total testosterone measures everything in your blood — bound and unbound. But roughly 97–99% of testosterone in your blood is bound to proteins, primarily SHBG and albumin. Bound testosterone can&apos;t activate androgen receptors. It can&apos;t build muscle, drive libido, or support cognitive function.
          </p>
          <p>
            Free testosterone is the active fraction. It&apos;s what your cells can actually use.
          </p>
          <p>
            When SHBG rises, it captures more testosterone — total T looks stable or even high, but free T drops and you feel it. When SHBG falls, more testosterone becomes bioavailable even if total T stays flat.
          </p>
          <p>
            The goal of any testosterone optimization protocol, in my view, isn&apos;t to maximize total T. It&apos;s to maximize free and bioavailable T while keeping estradiol in a healthy range and SHBG manageable.
          </p>
        </div>
      </section>

      {/* The protocol */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The protocol
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            I&apos;ve been using shilajit for six years. Over the past three months I ran a structured protocol alongside blood testing to track what was actually happening.
          </p>

          <h3 className="text-lg font-bold text-[#0D1F14] mt-6 mb-3">Morning</h3>
          <ul className="space-y-2 pl-4">
            {[
              <>Shilajit resin 500mg — <a href={BL_BASE} target="_blank" rel="noopener noreferrer sponsored" className="text-[#10B981] hover:underline font-medium">Black Lotus Shilajit</a></>,
              <>LipoAshwagandha sCO2 400mg — <a href={LBH_BASE} target="_blank" rel="noopener noreferrer sponsored" className="text-[#10B981] hover:underline font-medium">Lotus Blooming Herbs</a></>,
              "L-Citrulline 3g in LMNT water",
              "Pycnogenol 100–120mg",
              "Tongkat Ali LJ100 100–200mg (Double Wood)",
              "Copper Glycinate 1mg (Pure Lab Vitamins)",
              "Vitamin D3/K2 5,000 IU D3 / 100mcg MK-7 (Trace Minerals liquid)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-[#0D1F14] mt-6 mb-3">Evening</h3>
          <ul className="space-y-2 pl-4">
            {[
              "Zinc Bisglycinate 25mg (Natural Factors)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-[#0D1F14] mt-6 mb-3">Night</h3>
          <ul className="space-y-2 pl-4">
            {[
              <>LipoAshwagandha sCO2 400mg — <a href={LBH_BASE} target="_blank" rel="noopener noreferrer sponsored" className="text-[#10B981] hover:underline font-medium">Lotus Blooming Herbs</a></>,
              "Magnesium Glycinate 400mg elemental (California Gold Nutrition)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-[#0D1F14] mt-6 mb-3">Added after Month 2 draw</h3>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
              <span>Methylcobalamin B12 1,000mcg daily (added after Month 2 showed 356 pg/mL — low-normal)</span>
            </li>
          </ul>

          <h3 className="text-lg font-bold text-[#0D1F14] mt-6 mb-3">Cycling protocol</h3>
          <ul className="space-y-2 pl-4">
            {[
              "Ashwagandha: 3–4 months on / 1 month off",
              "Tongkat Ali: 8 weeks on / 2 weeks off, offset from ashwagandha cycle",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blood work tables */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The data — three months of blood work
        </h2>

        {/* Testosterone / Hormone Panel */}
        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8] mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0D1F14] text-white">
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wide">Marker</th>
                <th className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide">Baseline</th>
                <th className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide">Month 2</th>
                <th className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide">Month 3</th>
                <th className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide">Change</th>
              </tr>
            </thead>
            <tbody>
              {[
                { marker: "Total T (ng/dL)", baseline: "599", m2: "544", m3: "537", change: "−10.4%", positive: false },
                { marker: "Free T (pg/mL)", baseline: "93.0", m2: "111.48", m3: "123.47", change: "+32.8%", positive: true },
                { marker: "Bioavailable T (ng/dL)", baseline: "191.2", m2: "~233", m3: "~243", change: "+27.1%", positive: true },
                { marker: "SHBG (nmol/L)", baseline: "29", m2: "32.2", m3: "27.3", change: "−2.4%", positive: false },
                { marker: "Estradiol (pg/mL)", baseline: "<30", m2: "25.5", m3: "40.5", change: "—", positive: null },
                { marker: "Albumin (g/dL)", baseline: "4.5", m2: "4.71", m3: "4.48", change: "—", positive: null },
                { marker: "Prolactin (ng/mL)", baseline: "13.4", m2: "—", m3: "—", change: "—", positive: null },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7FCF9]"}>
                  <td className="px-4 py-3 font-medium text-[#0D1F14]">{row.marker}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{row.baseline}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{row.m2}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{row.m3}</td>
                  <td className="px-4 py-3 text-center font-semibold">
                    {row.positive === true && <span className="text-[#10B981]">{row.change}</span>}
                    {row.positive === false && <span className="text-rose-500">{row.change}</span>}
                    {row.positive === null && <span className="text-[#7BA899]">{row.change}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Full metabolic / thyroid panel */}
        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0D1F14] text-white">
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wide">Marker</th>
                <th className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide">Month 2</th>
                <th className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide">Month 3</th>
                <th className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide">Change</th>
              </tr>
            </thead>
            <tbody>
              {[
                { marker: "TSH (uIU/mL)", m2: "3.21", m3: "1.77", change: "−44.9%", positive: true },
                { marker: "Free T3 (pg/mL)", m2: "3.19", m3: "3.76", change: "+17.9%", positive: true },
                { marker: "hsCRP (mg/L)", m2: "<0.5", m3: "<0.5", change: "—", positive: null },
                { marker: "ApoB (mg/dL)", m2: "70.9", m3: "70.3", change: "−0.8%", positive: true },
                { marker: "LDL (mg/dL)", m2: "85.96", m3: "80.76", change: "−6.1%", positive: true },
                { marker: "HDL (mg/dL)", m2: "61.6", m3: "61.8", change: "+0.3%", positive: true },
                { marker: "Triglycerides (mg/dL)", m2: "62.2", m3: "57.2", change: "−8%", positive: true },
                { marker: "Trig/HDL Ratio", m2: "1.0", m3: "0.92", change: "−8%", positive: true },
                { marker: "Total Cholesterol (mg/dL)", m2: "160", m3: "154", change: "−3.8%", positive: true },
                { marker: "Vitamin D (ng/mL)", m2: "57.3", m3: "48.3", change: "−15.7%", positive: false },
                { marker: "B12 (pg/mL)", m2: "356", m3: "—", change: "—", positive: null },
                { marker: "Ferritin (ng/mL)", m2: "117", m3: "118", change: "+0.8%", positive: null },
                { marker: "Uric Acid (mg/dL)", m2: "4.16", m3: "4.29", change: "+3.1%", positive: null },
                { marker: "Creatinine (mg/dL)", m2: "0.924", m3: "0.857", change: "−7.3%", positive: true },
                { marker: "eGFR", m2: "—", m3: "115.92", change: "—", positive: null },
                { marker: "Fructosamine (umol/L)", m2: "238", m3: "227", change: "−4.6%", positive: true },
                { marker: "GGT (U/L)", m2: "12.6", m3: "12.4", change: "−1.6%", positive: true },
                { marker: "ALP (U/L)", m2: "60.6", m3: "67.1", change: "+10.7%", positive: false },
                { marker: "LDL/ApoB Ratio", m2: "1.21", m3: "1.14", change: "−5.8%", positive: true },
                { marker: "Remnant Cholesterol (mg/dL)", m2: "12.44", m3: "11.43", change: "−8.1%", positive: true },
                { marker: "Biological Age", m2: "—", m3: "29 yr 3 mo", change: "—", positive: null },
                { marker: "Rythm Score", m2: "—", m3: "90%", change: "—", positive: null },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7FCF9]"}>
                  <td className="px-4 py-3 font-medium text-[#0D1F14]">{row.marker}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{row.m2}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{row.m3}</td>
                  <td className="px-4 py-3 text-center font-semibold">
                    {row.positive === true && <span className="text-[#10B981]">{row.change}</span>}
                    {row.positive === false && <span className="text-rose-500">{row.change}</span>}
                    {row.positive === null && <span className="text-[#7BA899]">{row.change}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What I take from this */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What I take from this
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Total testosterone dropped 10%. I&apos;m not concerned by that — total T fluctuates significantly based on sleep, stress, time of day, and hydration. A single draw is not a reliable trend signal.
          </p>
          <p>
            What I do find meaningful: free testosterone increased consistently across both draws. Month over month. That&apos;s not noise.
          </p>
          <p>
            SHBG behavior was interesting — it rose in month 2 then fell below baseline by month 3. Several compounds in this stack are associated with SHBG modulation, including shilajit&apos;s fulvic acid fraction and boron-adjacent mineral activity, as well as tongkat ali. I&apos;m not attributing cause and effect here. I&apos;m reporting what I measured.
          </p>
          <p>
            The cardiovascular and metabolic markers are where I&apos;d expect anyone&apos;s attention to go. LDL down 6%. Triglycerides down 8%. Trig/HDL ratio at 0.92 — well below the 2.0 threshold associated with insulin resistance risk. hsCRP undetectable at both draws. ApoB stable at 70.3 mg/dL.
          </p>
          <p>
            Thyroid markers shifted notably — TSH dropped 44% and Free T3 rose 17% from month 2 to month 3. I added B12 after the month 2 draw which may have contributed. I note it without conclusion.
          </p>
          <p>
            Vitamin D dropped 15% — from 57.3 to 48.3 ng/mL. I&apos;ll be increasing D3 intake heading into winter.
          </p>
          <p>
            Biological age score of 29 years 3 months at the time of the month 3 draw. I&apos;ll let that speak for itself.
          </p>
        </div>
      </section>

      {/* How I tested */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How I tested
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The month 2 and month 3 panels are from{" "}
            <a
              href="https://rythm.health/danielttorres13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:underline font-medium"
            >
              Rythm Health
            </a>{" "}
            — at-home blood draws with a comprehensive hormone and metabolic panel. Use my link for $20 off your first test. The baseline panel is from Quest Diagnostics via my physician.
          </p>
          <p>
            If you&apos;re running a supplement protocol and not testing, you&apos;re guessing. Add a baseline draw before you start and a follow-up at 90 days. That&apos;s the minimum to know if anything is actually working.
          </p>
        </div>
      </section>

      {/* The shilajit I use */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The shilajit I use
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            After six years and dozens of brands tested, the only resin I use daily is{" "}
            <a
              href={BL_BASE}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[#10B981] hover:underline font-medium"
            >
              Black Lotus Shilajit
            </a>
            . Altai-sourced, IAS Labs verified at 64.51% fulvic acid, batch 93. Mercury undetected.
          </p>
          <p>
            For ashwagandha I use{" "}
            <a
              href={LBH_BASE}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[#10B981] hover:underline font-medium"
            >
              Lotus Blooming Herbs
            </a>{" "}
            twice daily — their LipoAshwagandha sCO2 extract is the most bioavailable form I&apos;ve found. Himalayan-sourced, A2LA ISO 17025 lab verified, all heavy metals ND.
          </p>
        </div>

        {/* CTA box */}
        <div className="mt-6 bg-[#0D1F14] border border-[#1E3A28] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">What I Use Daily</p>
            <p className="text-sm font-black text-white leading-snug mb-1">Black Lotus Shilajit Resin</p>
            <p className="text-xs text-white/60">Altai-sourced · 64.51% fulvic acid (COA) · Mercury ND</p>
          </div>
          <a
            href={BL_BASE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Shop Black Lotus →
          </a>
        </div>
      </section>

      {/* Final note */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Final note
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            I&apos;m an anthropologist who has studied traditional medicine use in Central Asia for over a decade and has used shilajit personally for six years. I am not a physician. Nothing here is medical advice. These are my personal results from my personal protocol. Your baseline, your physiology, and your response will differ.
          </p>
          <p>
            If you&apos;re going to take shilajit for testosterone support, test before you start and test again at 90 days. Impressions aren&apos;t data. Blood work is.
          </p>
        </div>
      </section>
    </BlogPostLayout>
  );
}
