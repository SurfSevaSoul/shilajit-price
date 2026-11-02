import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import ChecklistDownload from "../../components/ChecklistDownload";

const BL_BASE = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const BL_RESIN = "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const BL_CAPS = "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-resin-powder-capsules-extra-strength?sca_ref=5188496.BbHTin3axE";
const LBH = "https://lotusbloomingherbs.com/?aff=380";
const FF = "https://fractalforest.co/SHILAJIT-PRICE";
const NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const PH = "https://www.purehimalayanshilajit.com/?ref=4792";
const RYTHM = "https://rythm.health/danielttorres13";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-90-day-plan-new-year`;

export const metadata: Metadata = {
  title: "Start Shilajit in 2027: A 90-Day Plan With Lab Tracking",
  description:
    "Starting shilajit in the new year? Adrian Voss shares how to pick a verified product, set a baseline, and track 90 days with real blood work.",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Start Shilajit in 2027: A 90-Day Plan With Lab Tracking",
    description:
      "How to choose a verified shilajit product, set a blood work baseline, and run a structured 90-day tracking protocol — with real lab data as your reference point.",
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
    name: "How long should I take shilajit before testing?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The clinical research protocol uses 90 days of consistent daily use before measuring outcomes. A 2015 randomized, placebo-controlled trial published in Andrologia used 250mg twice daily for 90 days to document statistically significant changes in testosterone and DHEA. Subjective improvements in energy and sleep quality are sometimes reported within 2–4 weeks, but these are not the same as measurable biomarker changes. Get a baseline before starting, retest at 90 days.",
    },
  },
  {
    "@type": "Question",
    name: "What should I test before starting shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A useful pre-shilajit baseline includes: total testosterone, free testosterone, and DHEA-S (the primary markers studied in clinical trials); a complete blood count (CBC) and comprehensive metabolic panel (CMP) for general health context; ferritin and vitamin D, which are frequently suboptimal in men and interact with mineral supplementation; and optionally cortisol if stress and energy are primary concerns. A baseline without follow-up testing at 90 days has no value for tracking — test only if you will retest.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit safe to take with other supplements?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Purified, lab-tested shilajit is generally safe to stack with zinc, magnesium, vitamin D, and ashwagandha (KSM-66) — all of which support testosterone production or adaptogenic response through complementary mechanisms. There are no known interactions with standard men's health supplements. Avoid stacking shilajit with aggressive hormone-altering compounds or anything that affects the hypothalamic-pituitary-gonadal axis without medical supervision. Shilajit's mechanism is supportive and indirect, not pharmacological.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if shilajit is working?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Track two categories: subjective markers (energy by 30 days, sleep quality, morning drive) and objective markers (blood work at 90 days). Subjective improvements without a blood work baseline are anecdote, not data. If you start with a testosterone baseline and retest at 90 days using the same lab under the same conditions, you have a real n=1 data point. This is not a clinical trial and does not prove causation — but it is far more informative than relying on how you feel. Note that n=1 results vary and are not medical evidence.",
    },
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Shilajit90DayPlan() {
  return (
    <BlogPostLayout
      heading={
        <>
          Starting Shilajit in the New Year:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            A 90-Day Plan With Lab Tracking
          </span>
        </>
      }
      description="How to choose a verified shilajit product, set a blood work baseline before you start, and run a structured 90-day tracking protocol — with real lab data as your reference point."
      tags={["Buying Guide", "Lab Testing", "90-Day Plan"]}
      publishedAt="2026-11-02"
      updatedAt="2026-11-02"
      readingTimeMin={9}
      currentSlug="shilajit-90-day-plan-new-year"
      quizCta="card"
      breadcrumbLabel="Shilajit 90-Day Plan"
      faqItems={faqItems}
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
            The new year is the most common time people decide to start tracking their health seriously. If shilajit is on your list, this guide gives you a concrete framework: how to choose a verified product, what to test before you start, a simple 90-day check-in timeline, and how to read your own results honestly.
          </p>
          <p>
            The clinical research that supports shilajit&apos;s documented effects used 90-day protocols with verified product and blood work at baseline and endpoint. Running your own version of that protocol — even as an n=1 self-experiment — gives you real data instead of anecdote. For the full lab data context on the brands covered here, see our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline font-semibold">best shilajit brands ranked by lab data</Link>.
          </p>
          <p>
            One hard rule before reading further: this is not medical advice. The protocol below is a self-tracking framework, not a clinical trial or a treatment plan.
          </p>
        </div>
      </section>

      <ChecklistDownload location="shilajit-90-day-plan-new-year" compact />

      {/* Top pick buy box — top 25% */}
      <div className="bg-white border-2 border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Recommended Starting Product — S-Tier</div>
        <h3 className="text-lg font-black text-[#0D1F14] mb-1">Black Lotus Shilajit</h3>
        <p className="text-xs text-[#7BA899] mb-3">
          Highest verified fulvic acid in our database · Full COA every batch · Altai sourced · Mercury ND · Free shipping
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-4 text-xs">
          {[
            { label: "Resin FA", value: "64.51%" },
            { label: "Tablet FA", value: "74.30%" },
            { label: "Capsule FA", value: "73.11%" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#F0FAF4] rounded-lg p-2 text-center">
              <div className="font-black text-[#10B981] text-base">{value}</div>
              <div className="text-[10px] text-[#7BA899] uppercase tracking-wide">{label} · Batch 93</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#4A6358] leading-relaxed mb-4">
          IAS Laboratories, Phoenix AZ · Verploegh/Brandvold method · Mercury ND across all three forms · Same COA from a single batch
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={BL_RESIN} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
            View Pure Altai Resin →
          </a>
          <a href={BL_CAPS} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
            View Capsules →
          </a>
          <a href={BL_BASE} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
            Shop All Formats →
          </a>
        </div>
      </div>

      {/* Step 1: Choose verified product */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Step 1: Choose a verified product</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The most important decision happens before you start. A 90-day tracking protocol only produces meaningful data if the product you are taking is what the label claims. In the shilajit category, a verified product means three specific things:
          </p>
        </div>
        <div className="space-y-3 mt-4">
          {[
            {
              n: "1",
              title: "Current batch-specific COA from an independent lab",
              body: "The Certificate of Analysis must come from a named, independent third-party laboratory (not the brand's own facility), must reference the specific batch number on the product you receive, and must be dated within the past 18 months. Labs to look for: IAS Laboratories (Phoenix, AZ), Certified Laboratories (Burbank, CA — A2LA ISO 17025).",
            },
            {
              n: "2",
              title: "Specific heavy metals ppm values — not just 'Pass'",
              body: "A COA that shows only 'Pass' for heavy metals cannot be independently verified. Look for numeric ppm values for Lead, Arsenic, Mercury, and Cadmium. Mercury is the highest-concern metal for daily supplementation — it should ideally be not detected (ND).",
            },
            {
              n: "3",
              title: "Fulvic acid percentage with method stated",
              body: "The method used to measure fulvic acid significantly affects the reported percentage. The Verploegh/Brandvold method (used by IAS Labs) and UV spectrophotometry produce different numbers for the same material — they are not comparable. When comparing brands, only compare results from the same method.",
            },
          ].map((item) => (
            <div key={item.n} className="bg-white border border-[#D1EDD8] rounded-xl p-4 flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#10B981] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{item.n}</span>
              <div>
                <p className="text-sm font-bold text-[#0D1F14] mb-1">{item.title}</p>
                <p className="text-xs text-[#4A6358] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#7BA899] mt-3 leading-relaxed">
          For the full verified brand database, see our{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline font-semibold">lab data page</Link>.
        </p>
      </section>

      {/* Step 2: Set a baseline */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Step 2: Set a baseline before you start</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            A baseline test has no value unless you plan to retest at 90 days. If you are not going to retest, skip the baseline and just start — it will not give you anything useful. If you will retest: get the same panel from the same lab under the same conditions (same time of day, same fasted state) both times.
          </p>
        </div>

        {/* Blood work callout */}
        <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5 mt-4">
          <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-2">Baseline Blood Work Panel</div>
          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {[
              { marker: "Total Testosterone", why: "Primary outcome in Andrologia trial; morning fasted" },
              { marker: "Free Testosterone", why: "More clinically relevant for men with normal SHBG" },
              { marker: "DHEA-S", why: "Secondary marker studied alongside testosterone in trials" },
              { marker: "CBC (Complete Blood Count)", why: "General health baseline; check for iron-deficiency context" },
              { marker: "CMP (Comprehensive Metabolic Panel)", why: "Liver and kidney function baseline for long-term supplementation" },
              { marker: "Ferritin", why: "Iron status; mineral supplementation context" },
              { marker: "25-OH Vitamin D", why: "Frequently suboptimal; interacts with mineral absorption" },
              { marker: "Cortisol (optional)", why: "If stress and energy are primary concerns" },
            ].map(({ marker, why }) => (
              <div key={marker} className="flex gap-2 items-start">
                <Check />
                <div>
                  <span className="text-xs font-bold text-[#0D1F14]">{marker}</span>
                  <p className="text-[10px] text-[#7BA899] leading-relaxed">{why}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#D1EDD8] pt-3">
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              Order at-home blood work through{" "}
              <a href={RYTHM} target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline font-semibold">
                Rythm Health
              </a>{" "}
              — use the link for <strong className="text-[#0D1F14]">$20 off your first test</strong>. Results through your primary care physician or a direct-to-consumer lab also work — the key is using the same lab and protocol at 90 days.
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4A6358] mt-4 leading-relaxed">
          For a detailed breakdown of what blood work to track and how to read the results, see the{" "}
          <Link href="/blog/shilajit-testosterone-blood-test-results" className="text-[#10B981] hover:underline font-semibold">shilajit testosterone blood test results guide</Link>.
        </p>
      </section>

      {/* Step 3: 90-day timeline */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Step 3: The 90-day tracking timeline</h2>
        <div className="space-y-3">
          {[
            {
              phase: "Day 0",
              label: "Baseline",
              color: "border-[#10B981]",
              tasks: [
                "Complete baseline blood work panel (above)",
                "Record starting weight, sleep hours, and energy level (1–10)",
                "Take first dose — start low, 200–300mg resin or as directed",
                "Log your starting product, batch number, and COA date",
              ],
            },
            {
              phase: "Day 14",
              label: "Tolerance check",
              color: "border-[#D1EDD8]",
              tasks: [
                "Assess GI tolerance — any discomfort means reduce dose",
                "Log energy and sleep quality vs. baseline",
                "Confirm you are hitting daily dose consistently",
                "No blood work needed — too early for measurable changes",
              ],
            },
            {
              phase: "Day 30",
              label: "First subjective check-in",
              color: "border-[#D1EDD8]",
              tasks: [
                "Rate energy, morning drive, and sleep quality (1–10 vs. baseline)",
                "Note any changes in exercise recovery or focus",
                "These are subjective — do not treat them as evidence of effect",
                "Confirm product supply for remaining 60 days",
              ],
            },
            {
              phase: "Day 60",
              label: "Midpoint",
              color: "border-[#D1EDD8]",
              tasks: [
                "Repeat subjective markers from Day 30",
                "Check for any changes in libido or motivation patterns",
                "Review your dose — adjust only if tolerance warrants",
                "Prepare for final retest: schedule blood draw for Day 90–95",
              ],
            },
            {
              phase: "Day 90",
              label: "Retest",
              color: "border-[#10B981]",
              tasks: [
                "Repeat the full baseline blood work panel",
                "Same lab, same time of day, same fasted state as baseline",
                "Record final subjective markers",
                "Compare results and document honestly — including no-change results",
              ],
            },
          ].map((phase) => (
            <div key={phase.phase} className={`bg-white border ${phase.color} rounded-xl p-4`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black text-[#10B981] w-14 shrink-0">{phase.phase}</span>
                <span className="text-sm font-bold text-[#0D1F14]">{phase.label}</span>
              </div>
              <ul className="space-y-1">
                {phase.tasks.map((t) => (
                  <li key={t} className="flex gap-2 items-start">
                    <Check />
                    <span className="text-xs text-[#4A6358] leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Step 4: What to test and when */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Step 4: What to test and when</h2>
        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] text-[#0D1F14] font-semibold">
                <th className="text-left px-3 py-2">Marker</th>
                <th className="text-center px-3 py-2">Day 0</th>
                <th className="text-center px-3 py-2">Day 30</th>
                <th className="text-center px-3 py-2">Day 90</th>
                <th className="text-left px-3 py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                { marker: "Total Testosterone", d0: "✓", d30: "—", d90: "✓", note: "Morning fasted; same lab both times", alt: false },
                { marker: "Free Testosterone", d0: "✓", d30: "—", d90: "✓", note: "SHBG context matters", alt: true },
                { marker: "DHEA-S", d0: "✓", d30: "—", d90: "✓", note: "Secondary marker from Andrologia trial", alt: false },
                { marker: "CBC / CMP", d0: "✓", d30: "—", d90: "✓", note: "Liver/kidney baseline", alt: true },
                { marker: "Ferritin", d0: "✓", d30: "—", d90: "Optional", note: "Mineral status context", alt: false },
                { marker: "Vitamin D (25-OH)", d0: "✓", d30: "—", d90: "Optional", note: "Deficiency common", alt: true },
                { marker: "Subjective energy (1–10)", d0: "✓", d30: "✓", d90: "✓", note: "Log same time each day", alt: false },
                { marker: "Sleep quality (1–10)", d0: "✓", d30: "✓", d90: "✓", note: "Track before bed", alt: true },
              ].map((row) => (
                <tr key={row.marker} className={row.alt ? "bg-[#F0FAF4]" : "bg-white"}>
                  <td className="px-3 py-2 font-medium text-[#0D1F14]">{row.marker}</td>
                  <td className="px-3 py-2 text-center font-semibold text-[#10B981]">{row.d0}</td>
                  <td className="px-3 py-2 text-center text-[#7BA899]">{row.d30}</td>
                  <td className="px-3 py-2 text-center font-semibold text-[#10B981]">{row.d90}</td>
                  <td className="px-3 py-2 text-[#4A6358]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Step 5: How to read results honestly */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Step 5: How to read your results honestly</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Your 90-day results are n=1 data. That means they tell you something about your response to shilajit over 90 days under the specific conditions of your life — diet, sleep, stress, exercise, concurrent supplements — but they do not prove causation and they are not generalizable to anyone else.
          </p>
          <p>
            How to interpret different outcomes:
          </p>
          <div className="space-y-3">
            {[
              {
                outcome: "Testosterone increased",
                interpretation: "Consistent with the direction of clinical research, but uncontrolled variables (better sleep, diet changes, reduced stress) could explain part or all of the change. Do not attribute it entirely to shilajit. If the change is meaningful, consider repeating the protocol with the same controls.",
                color: "border-emerald-200",
              },
              {
                outcome: "No measurable change",
                interpretation: "A valid result. Shilajit's documented effects are averages across populations — individual responses vary. A null result at 90 days may reflect your baseline status, dosing, concurrent factors, or genuine non-response. It is not evidence that the product was ineffective across all outcomes.",
                color: "border-[#D1EDD8]",
              },
              {
                outcome: "Subjective improvement, no lab change",
                interpretation: "Possible placebo effect, possible real effect not captured by the markers you tested, possible timing issue (some changes appear after 90 days). Subjective improvement alone is not evidence of a physiological effect.",
                color: "border-[#D1EDD8]",
              },
              {
                outcome: "Lab values worsened",
                interpretation: "Stop supplementation and consult your physician. This is uncommon with verified, purified shilajit but can reflect individual response, concurrent factors, or a product quality issue. This is why baseline testing and verified product selection matter.",
                color: "border-red-200",
              },
            ].map(({ outcome, interpretation, color }) => (
              <div key={outcome} className={`bg-white border ${color} rounded-xl p-4`}>
                <p className="text-xs font-bold text-[#0D1F14] mb-1">{outcome}</p>
                <p className="text-xs text-[#4A6358] leading-relaxed">{interpretation}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#7BA899] leading-relaxed">
            For a real-world example of what blood work tracking looks like over 90 days, see the{" "}
            <Link href="/blog/shilajit-testosterone-blood-test-results" className="text-[#10B981] hover:underline font-semibold">shilajit testosterone blood test results post</Link>.
          </p>
        </div>
      </section>

      {/* Recommended product: Black Lotus */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Recommended starting product: Black Lotus Shilajit</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Black Lotus is the most useful product for a tracking protocol because they test every batch with a named, independent lab (IAS Laboratories, Phoenix AZ) and publish the full COA — including exact fulvic acid percentage by the Verploegh/Brandvold method and specific heavy metals ppm values for Lead, Arsenic, Mercury, and Cadmium. Mercury is not detected across all three formats in Batch 93.
          </p>
          <p>
            For a 90-day protocol, the capsule format is the most practical because dosing is pre-measured — 200mg per capsule at 73.11% fulvic acid (Batch 93). You do not need a scale. The resin (64.51% FA) is the traditional format and allows flexible dosing, but requires a small scale to measure consistently.
          </p>
          <p>
            The COA details matter for your tracking record: log the batch number, the COA date, and the fulvic acid result alongside your blood work baseline. That documentation makes your n=1 experiment replicable — if you want to repeat it, you know exactly what product conditions produced your result.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8] my-4">
          <table className="w-full text-xs">
            <caption className="text-left text-[11px] text-[#7BA899] px-3 py-2 font-medium">
              Black Lotus Batch 93 — IAS Laboratories, Phoenix AZ · Verploegh/Brandvold method
            </caption>
            <thead>
              <tr className="bg-[#F0FAF4] text-[#0D1F14] font-semibold">
                <th className="text-left px-3 py-2">Form</th>
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

        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-5">
          <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">S-Tier · For 90-Day Tracking Protocols</div>
          <h3 className="text-base font-black text-[#0D1F14] mb-1">Black Lotus Shilajit</h3>
          <p className="text-xs text-[#7BA899] mb-4">
            Full COA every batch · Mercury ND across all forms · Altai sourced · GMP certified · Free shipping
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={BL_RESIN} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
              View Resin (64.51% FA) →
            </a>
            <a href={BL_CAPS} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
              View Capsules (73.11% FA) →
            </a>
            <a href={BL_BASE} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#182B1F] hover:bg-[#1E3A28] text-white text-sm font-semibold transition-colors">
              Shop All Formats →
            </a>
          </div>
        </div>
      </section>

      {/* Compare the other verified options */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Compare the other verified options</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          All four brands below publish COA data from independent labs. For the full lab data including heavy metals ppm values, see our{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline font-semibold">lab data page</Link>.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-0.5">S-Tier · Himalayan 16,000–18,000ft</div>
                <h3 className="text-base font-black text-[#0D1F14]">Lotus Blooming Herbs</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-amber-100 text-amber-800">S</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-3">
              Ayurvedic practitioner-owned, among the first to introduce pure resin shilajit to the West. Certified Laboratories Burbank (A2LA ISO 17025). Himalayan source at 16,000–18,000ft. Fulvic acid intentionally not disclosed. Good choice for the 90-day protocol if you prioritize traditional sourcing provenance and Ayurvedic documentation.
            </p>
            <a href={LBH} target="_blank" rel="noopener noreferrer sponsored" className="text-sm font-semibold text-[#10B981] hover:underline">View Lotus Blooming Herbs →</a>
          </div>

          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">A-Tier · Standing 15% Discount</div>
                <h3 className="text-base font-black text-[#0D1F14]">Fractal Forest</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-emerald-100 text-emerald-800">A</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-3">
              The only verified brand offering liquid drops. Himalayan Drops from Gilgit Baltistan: all four heavy metals not detected (A2LA ISO 17025, Certified Laboratories Burbank). Wild American Drops: North American source, 71.31% fulvic acid. Use code <span className="font-mono font-bold text-[#0D1F14] bg-[#F0FAF4] px-1 rounded">SHILAJIT-PRICE</span> for 15% off.
            </p>
            <a href={FF} target="_blank" rel="noopener noreferrer sponsored" className="text-sm font-semibold text-[#10B981] hover:underline">View Fractal Forest →</a>
          </div>

          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">A-Tier · UNESCO Altai</div>
                <h3 className="text-base font-black text-[#0D1F14]">Natural Shilajit</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-emerald-100 text-emerald-800">A</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-3">
              Sourced from the UNESCO-protected Altai Mountains. Third-party COA with DBP verification. Fulvic acid not disclosed. Consistent documentation history. Strong option if UNESCO Altai sourcing matters to your tracking record.
            </p>
            <a href={NS} target="_blank" rel="noopener noreferrer sponsored" className="text-sm font-semibold text-[#10B981] hover:underline">View Natural Shilajit →</a>
          </div>

          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">A-Tier · ISO-Accredited Lab</div>
                <h3 className="text-base font-black text-[#0D1F14]">Pure Himalayan Shilajit</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-emerald-100 text-emerald-800">A</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-3">
              About 58% fulvic acid by UV spectrophotometry (A2LA ISO 17025). Note: the published COA is from 2021 — request a current COA before starting your protocol. UV spectrophotometry is not directly comparable to IAS Labs Verploegh/Brandvold method results. The 2021 date matters for a tracking experiment: document which COA and batch you are using.
            </p>
            <a href={PH} target="_blank" rel="noopener noreferrer sponsored" className="text-sm font-semibold text-[#10B981] hover:underline">View Pure Himalayan Shilajit →</a>
          </div>
        </div>
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

      {/* Internal links */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Related reading</h2>
        <div className="space-y-3">
          {[
            {
              href: "/blog/shilajit-testosterone-blood-test-results",
              title: "Shilajit Testosterone Blood Test Results",
              desc: "Real blood work data — what 90 days of tracking actually shows",
            },
            {
              href: "/blog/best-shilajit-brands-ranked",
              title: "Best Shilajit Brands Ranked by Lab Data",
              desc: "Full ranked database by fulvic acid, heavy metals, and tier",
            },
            {
              href: "/lab-data",
              title: "Lab Data",
              desc: "COA data for all verified brands — fulvic acid, heavy metals ppm",
            },
          ].map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 bg-white border border-[#D1EDD8] hover:border-[#9EC9AD] rounded-xl px-5 py-3.5 transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-[#0D1F14] group-hover:text-[#10B981] transition-colors">{title}</div>
                <div className="text-xs text-[#7BA899] mt-0.5">{desc}</div>
              </div>
              <svg className="w-4 h-4 text-[#7BA899] group-hover:text-[#10B981] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      <ChecklistDownload location="shilajit-90-day-plan-new-year" />
    </BlogPostLayout>
  );
}
