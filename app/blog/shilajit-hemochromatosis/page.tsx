import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

// ── Affiliate constants ────────────────────────────────────────────────────
const PH_BASE = "https://www.purehimalayanshilajit.com/?ref=4792";
const BL_BASE = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const NS_BASE = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const PB_BASE = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-hemochromatosis`;

const title = "Shilajit & Hemochromatosis: Iron Overload Risk, Lab Data & What Doctors Recommend";
const description =
  "Can you take shilajit with hemochromatosis? We break down shilajit's iron content, fulvic acid's absorption effects, and what people with iron overload disorders need to know before supplementing.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "shilajit hemochromatosis, shilajit iron overload, can you take shilajit with hemochromatosis, shilajit contraindications hemochromatosis, shilajit iron content hemochromatosis caution, shilajit iron overload avoid",
  alternates: { canonical: POST_URL },
  openGraph: {
    title,
    description,
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-01",
    modifiedTime: "2026-05-01",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Can you take shilajit if you have hemochromatosis?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "People with diagnosed hemochromatosis or other iron overload disorders should not take shilajit without explicit guidance from their managing physician. Shilajit naturally contains iron, and its primary active compound — fulvic acid — is a chelating agent that may enhance mineral absorption, including iron, across the gut lining. This dual mechanism makes shilajit a legitimate concern for anyone managing excess iron accumulation. No major medical authority has issued specific guidance on shilajit and hemochromatosis, and this combination has not been formally studied. Medical consultation is non-negotiable for this population.",
    },
  },
  {
    "@type": "Question",
    name: "Does shilajit contain iron?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Shilajit naturally contains iron as part of its mineral profile. The exact amount varies by source region and processing method. The most comprehensive publicly available mineral panel comes from Pure Himalayan Shilajit (Batch RE18, 2021 COA), which shows iron at 1,643 ppm — approximately 0.082mg per 200mg serving. This is a small absolute amount relative to dietary iron intake, but the absorption-enhancing properties of fulvic acid make even small quantities relevant for people with iron metabolism disorders. Other brands in our database do not publicly disclose iron content in their COAs.",
    },
  },
  {
    "@type": "Question",
    name: "Does fulvic acid increase iron absorption?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fulvic acid has demonstrated chelating properties — it binds to minerals and may enhance their absorption across the intestinal lining. This is generally considered a benefit of shilajit for healthy adults, as it improves bioavailability of beneficial minerals. However, for people with hemochromatosis or other iron overload conditions, enhanced iron absorption is directly counterproductive. The concern is not just the iron content of shilajit itself, but that fulvic acid may also increase absorption of dietary iron from food consumed alongside it. This has not been specifically studied in hemochromatosis patients, so the magnitude of the effect remains unknown.",
    },
  },
  {
    "@type": "Question",
    name: "What shilajit contraindications should I know about?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The main contraindications for shilajit are: (1) Hemochromatosis and iron overload disorders — due to iron content and fulvic acid's absorption-enhancing effects; (2) Pregnancy and breastfeeding — insufficient safety data exists for these populations; (3) Chronic kidney disease — shilajit's mineral load may stress compromised renal function and it may increase uric acid levels; (4) Gout and hyperuricemia — shilajit may increase uric acid excretion; (5) Anyone on iron supplementation or medications interacting with iron absorption; (6) Blood thinners or anticoagulants — possible interaction via mineral content. This list is not exhaustive. Anyone with a pre-existing condition or on prescription medications should consult their physician before using shilajit.",
    },
  },
];

export default function ShilajitHemochromatosis() {
  return (
    <BlogPostLayout
      heading={
        <>
          Shilajit &amp; Hemochromatosis:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
            Iron Overload Risk, Lab Data &amp; What Doctors Recommend
          </span>
        </>
      }
      description="Shilajit contains iron and fulvic acid — a combination that raises specific concerns for people with hemochromatosis or iron overload disorders. This guide covers what the lab data shows, how fulvic acid affects iron absorption, and what anyone with an iron metabolism condition needs to know."
      tags={["Safety", "Contraindications", "Iron", "Hemochromatosis"]}
      publishedAt="2026-05-01"
      updatedAt="2026-05-01"
      readingTimeMin={9}
      currentSlug="shilajit-hemochromatosis"
      quizCta="line"
      breadcrumbLabel="Shilajit & Hemochromatosis"
      faqItems={faqItems}
    >
      {/* Medical disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
        <span className="font-bold">Medical Disclaimer:</span> This page is informational only and does not constitute medical advice. If you have hemochromatosis or any iron metabolism disorder, consult your hematologist or primary care physician before taking shilajit or any iron-containing supplement.
      </div>

      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. Our safety analysis is independent of affiliate relationships — see our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclosure policy</Link>.
      </div>

      {/* Intro */}
      <section>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit is widely promoted for energy, vitality, and mineral replenishment — and for most healthy adults, those benefits come with a well-characterized safety profile. But for people managing hemochromatosis or other iron overload disorders, shilajit raises a specific and legitimate question that most supplement guides don&apos;t answer clearly: is it safe?
          </p>
          <p>
            The concern is not theoretical. Shilajit naturally contains iron from the mineral-rich mountain rock formations where it forms. More importantly, its primary active compound — fulvic acid — is a chelating agent documented to enhance mineral absorption across the gut lining. The combination of iron content and absorption enhancement creates a dual mechanism that warrants serious consideration for anyone whose body already accumulates iron in excess.
          </p>
          <p>
            This guide answers the hemochromatosis question directly: what the actual iron content data shows (from published COAs), how fulvic acid&apos;s absorption effects work, what the honest gaps in research are, and what anyone with a diagnosed iron metabolism disorder should do before deciding whether to supplement with shilajit.
          </p>
        </div>
      </section>

      {/* Section 1: What is hemochromatosis */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What Is Hemochromatosis?</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Hereditary hemochromatosis is a genetic disorder in which the body absorbs too much iron from the diet and stores the excess in organs — primarily the liver, heart, and joints. It is the most common single-gene disorder in populations of Northern European descent, affecting roughly 1 in 200 people, though many remain undiagnosed. The body has no efficient mechanism for excreting iron, which means excess iron accumulates progressively over time. Left unmanaged, this accumulation can lead to liver cirrhosis, heart arrhythmias, joint damage, and endocrine disruption.
          </p>
          <p>
            Secondary iron overload — elevated iron stores resulting from other conditions such as thalassemia, chronic liver disease, or repeated blood transfusions — carries the same risk profile. In both cases, the clinical management strategy is the same: limit iron intake from all sources, including food and supplements, and use therapeutic phlebotomy or chelation therapy to reduce stored iron. For people in either category, any supplement that adds dietary iron or enhances iron absorption deserves careful evaluation before use.
          </p>

          <div className="bg-white border border-[#D1EDD8] rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">Hemochromatosis at a Glance</h3>
            <div className="space-y-2">
              {[
                { label: "Type", value: "Hereditary (HFE gene mutation) or secondary (from other conditions)" },
                { label: "Mechanism", value: "Excessive dietary iron absorption; body cannot efficiently excrete iron" },
                { label: "Organs affected", value: "Liver, heart, joints, pancreas, endocrine glands" },
                { label: "Diagnosed by", value: "Serum ferritin + transferrin saturation blood tests; genetic testing" },
                { label: "Primary management", value: "Therapeutic phlebotomy; dietary iron restriction" },
                { label: "Supplement risk", value: "Any iron source or iron absorption enhancer is a potential concern" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-start gap-3 text-xs border-b border-[#D1EDD8] pb-1.5 last:border-0 last:pb-0">
                  <span className="text-[#7BA899] shrink-0">{row.label}</span>
                  <span className="text-[#0D1F14] font-medium text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why shilajit raises a concern */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Why Shilajit Raises a Concern for Iron Overload</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The concern with shilajit and hemochromatosis operates on two levels, and understanding both is important for an accurate risk assessment.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-amber-700 mb-2">⚠ Iron content in shilajit</h3>
              <p className="text-xs text-[#4A6358] leading-relaxed">
                Shilajit forms in mineral-rich mountain rock over millennia. The same geological concentration process that yields fulvic acid, humic compounds, and trace minerals also yields iron — in amounts that vary by source region and how the raw material is processed. Iron is a natural and expected component of authentic shilajit, not a contaminant.
              </p>
            </div>
            <div className="bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-amber-700 mb-2">⚠ Fulvic acid as an absorption enhancer</h3>
              <p className="text-xs text-[#4A6358] leading-relaxed">
                Fulvic acid — shilajit&apos;s primary bioactive compound — is a natural chelating agent. Chelators bind to minerals and enhance their transport across the intestinal lining. For most nutrients this improves bioavailability beneficially. For iron in a hemochromatosis patient, it means shilajit&apos;s fulvic acid may amplify iron absorption not just from shilajit itself, but potentially from iron-containing foods consumed in the same meal.
              </p>
            </div>
          </div>

          <p>
            This dual mechanism — iron content plus absorption enhancement — is what distinguishes shilajit from many other supplements in terms of the hemochromatosis concern. A supplement with trace iron but no absorption-enhancing effect would be a minor issue. A supplement with absorption-enhancing properties but no iron would be a different concern. Shilajit combines both.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <span className="font-bold">Research gap:</span> Neither the FDA nor any major medical authority has issued specific guidance on shilajit use in hemochromatosis patients. No peer-reviewed studies have examined this combination directly. The risk assessment is based on known mechanisms — iron content, fulvic acid&apos;s chelating properties — not on clinical trial data specific to this population. This is an under-researched area, and the absence of formal guidance does not mean the concern is unfounded.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Lab data */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What Do the Lab Reports Say About Iron Content?</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Of the four brands in our verified database — Black Lotus, Pure Himalayan, Natural Shilajit, and Pürblack — only one publicly discloses iron content in their Certificate of Analysis: <strong>Pure Himalayan Shilajit</strong>. Their Batch RE18 (2021 COA, ICP-MS and ICP-OES analysis) includes a comprehensive mineral panel covering 20+ elements, including iron.
          </p>

          {/* Iron and mineral data table */}
          <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
            <table className="w-full text-xs">
              <caption className="text-left text-[11px] text-[#7BA899] px-3 py-2 font-medium">
                Pure Himalayan Shilajit — Selected Mineral Panel · Batch RE18, 2021 COA · ICP-MS + ICP-OES · Micro Quality Labs, Burbank CA
              </caption>
              <thead>
                <tr className="bg-[#F0FAF4] text-[#0D1F14] font-semibold">
                  <th className="text-left px-3 py-2">Mineral</th>
                  <th className="text-right px-3 py-2">Result (ppm)</th>
                  <th className="text-right px-3 py-2">Per 200mg Serving</th>
                  <th className="text-left px-3 py-2 hidden sm:table-cell">Relevance for HCH Patients</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mineral: "Iron (Fe)", ppm: "1,643", serving: "~0.082 mg", note: "Primary concern for hemochromatosis", highlight: true },
                  { mineral: "Potassium (K)", ppm: "91,850", serving: "~18.37 mg", note: "No concern", highlight: false },
                  { mineral: "Calcium (Ca)", ppm: "24,525", serving: "~4.91 mg", note: "No concern", highlight: false },
                  { mineral: "Magnesium (Mg)", ppm: "9,841", serving: "~1.97 mg", note: "No concern", highlight: false },
                ].map((row) => (
                  <tr key={row.mineral} className={row.highlight ? "bg-amber-50" : "bg-white even:bg-[#F0FAF4]"}>
                    <td className={`px-3 py-2.5 font-semibold ${row.highlight ? "text-amber-800" : "text-[#0D1F14]"}`}>{row.mineral}</td>
                    <td className={`px-3 py-2.5 text-right font-mono ${row.highlight ? "text-amber-700" : "text-[#0D1F14]"}`}>{row.ppm}</td>
                    <td className={`px-3 py-2.5 text-right font-mono ${row.highlight ? "text-amber-700 font-bold" : "text-[#0D1F14]"}`}>{row.serving}</td>
                    <td className="px-3 py-2.5 text-[#7BA899] hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#7BA899] px-1">ppm = parts per million (mg/kg). Per-serving figures based on standard 200mg dose. Batch RE18, 2021 — UV method for fulvic acid; ICP-MS/ICP-OES for mineral panel.</p>

          <p>
            At 1,643 ppm, iron represents approximately 0.082mg per standard 200mg serving — a small absolute figure relative to the 8–18mg daily dietary iron intake recommended for most adults. However, for a hemochromatosis patient whose management strategy involves minimizing all iron sources, even small supplemental additions accumulate. Combined with fulvic acid&apos;s potential to enhance the absorption of that iron — and of dietary iron from meals — the practical impact may exceed what the raw ppm figure suggests.
          </p>

          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">Why other brands don&apos;t help you here</h3>
            <div className="space-y-2 text-xs text-[#4A6358] leading-relaxed">
              <p>
                <strong className="text-[#0D1F14]">Black Lotus (Altai Mountains, Siberia):</strong> Publishes fulvic acid and heavy metals data (Batch 93, IAS Laboratories) but does not include iron in their public mineral panel. Iron content is unknown.
              </p>
              <p>
                <strong className="text-[#0D1F14]">Natural Shilajit (UNESCO Altai):</strong> Uses DaaneLabs and Harken Research for COA testing. Fulvic acid is not disclosed; iron content is not published in their public COA documentation.
              </p>
              <p>
                <strong className="text-[#0D1F14]">Pürblack (multi-region):</strong> Reports quality via DBP (dibenzo-α-pyrones) content and Urolithin A ppm — not fulvic acid percentage. Iron content is not published. Iron levels are unknown.
              </p>
              <p className="italic text-[#7BA899]">
                Pure Himalayan is the only brand in our database that publicly discloses iron content, making it the most transparent option for iron-conscious buyers who receive medical clearance to supplement.
              </p>
            </div>
          </div>

          <p>
            For a full breakdown of all heavy metals data across all four brands, see our{" "}
            <Link href="/blog/shilajit-heavy-metals-comparison" className="text-[#10B981] hover:underline">shilajit heavy metals comparison →</Link>{" "}
            and our complete{" "}
            <Link href="/blog/shilajit-mineral-content" className="text-[#10B981] hover:underline">shilajit mineral content analysis →</Link>
          </p>
        </div>
      </section>

      {/* Section 4: What should people with hemochromatosis do */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What Should People With Hemochromatosis Do?</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The honest answer is that not enough research exists on shilajit and hemochromatosis to make a definitive safety claim in either direction. No clinical trial has examined this specific combination. The guidance below is based on known mechanisms and standard supplement safety principles, not hemochromatosis-specific shilajit data.
          </p>

          <div className="space-y-3">
            {[
              {
                step: "1",
                label: "Consult your hematologist or primary care doctor — non-negotiable",
                detail: "This is not a precautionary boilerplate. Hemochromatosis management is individualized based on your current ferritin levels, transferrin saturation, phlebotomy frequency, and overall disease stage. Your doctor is the only person who can assess whether adding any iron source — even a small one — is acceptable in your specific case.",
                color: "bg-red-500",
              },
              {
                step: "2",
                label: "Iron status matters — managed and stable vs. active treatment",
                detail: "If your iron levels are currently controlled and stable (e.g., you have had successful phlebotomy and maintain normal-range ferritin), your doctor may assess occasional low-dose use differently than if you are actively in depletion therapy or recently diagnosed with elevated stores. Context matters significantly.",
                color: "bg-amber-500",
              },
              {
                step: "3",
                label: "Processed forms may have lower mineral bioavailability — but this is unstudied",
                detail: "Tablets and capsules undergo additional processing that may reduce the bioavailability of minerals compared to raw resin. However, this has not been specifically studied for iron in hemochromatosis patients. Do not treat this as a safety workaround without medical guidance.",
                color: "bg-amber-500",
              },
              {
                step: "4",
                label: "If cleared, choose the brand that discloses iron content",
                detail: "Pure Himalayan Shilajit is the only brand in our database that publicly discloses iron content (1,643 ppm, Batch RE18). If your physician clears you for shilajit use, selecting a brand with known, published iron levels gives you and your doctor the most complete information for monitoring.",
                color: "bg-[#10B981]",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 bg-white border border-[#D1EDD8] rounded-xl p-4">
                <span className={`w-6 h-6 rounded-full ${item.color} text-white flex items-center justify-center font-black text-xs shrink-0`}>{item.step}</span>
                <div>
                  <div className="text-xs font-bold text-[#0D1F14] mb-1">{item.label}</div>
                  <p className="text-xs text-[#7BA899] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            For broader context on who should and should not take shilajit, see our{" "}
            <Link href="/blog/shilajit-safety-guide" className="text-[#10B981] hover:underline">complete shilajit safety guide →</Link>{" "}
            and our{" "}
            <Link href="/blog/shilajit-side-effects" className="text-[#10B981] hover:underline">shilajit side effects guide →</Link>
          </p>
        </div>
      </section>

      {/* Section 5: Other contraindications */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Other Contraindications to Know</h2>
        <div className="space-y-3 text-[#0D1F14] text-sm leading-relaxed">
          {[
            {
              condition: "Gout and high uric acid (hyperuricemia)",
              detail: "Shilajit has been shown in some studies to increase urinary uric acid excretion. For people already managing elevated uric acid or gout, this may worsen their condition. Consult your physician before use.",
              severity: "amber",
            },
            {
              condition: "Pregnancy and breastfeeding",
              detail: "No safety data exists for shilajit use during pregnancy or lactation. Traditional Ayurvedic texts classify shilajit as contraindicated in pregnancy. Avoid entirely as a precaution.",
              severity: "red",
            },
            {
              condition: "Active kidney disease",
              detail: "Shilajit's mineral content is processed and eliminated by the kidneys. Compromised renal function may be unable to clear the mineral load effectively, and elevated uric acid from shilajit use adds additional renal stress. Consult a nephrologist.",
              severity: "amber",
            },
            {
              condition: "Iron supplementation and iron-interacting medications",
              detail: "Anyone currently taking prescription iron supplements or medications that affect iron absorption (e.g., proton pump inhibitors used in iron deficiency management) should discuss potential interactions with their physician before adding shilajit.",
              severity: "amber",
            },
          ].map((item) => (
            <div
              key={item.condition}
              className={`flex gap-3 rounded-xl border p-4 ${
                item.severity === "red"
                  ? "bg-red-50 border-red-200"
                  : "bg-amber-50 border-amber-200"
              }`}
            >
              <span className={`font-bold text-sm shrink-0 ${item.severity === "red" ? "text-red-500" : "text-amber-600"}`}>
                {item.severity === "red" ? "✗" : "⚠"}
              </span>
              <div>
                <div className={`text-xs font-bold mb-0.5 ${item.severity === "red" ? "text-red-700" : "text-amber-800"}`}>
                  {item.condition}
                </div>
                <p className={`text-xs leading-relaxed ${item.severity === "red" ? "text-red-600" : "text-amber-700"}`}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Bottom line */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">The Bottom Line</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit is not automatically unsafe for hemochromatosis patients — but it warrants serious caution due to two specific factors: its natural iron content and fulvic acid&apos;s documented absorption-enhancing properties. The combination creates a plausible mechanism for worsening iron accumulation in a population that is already managing excess iron. This is not a theoretical concern based on speculation; it is a mechanistic concern based on what shilajit contains and how it functions.
          </p>
          <p>
            Anyone with a diagnosed iron metabolism disorder should not self-prescribe shilajit or any iron-containing supplement without medical supervision. If you are cleared by your doctor and wish to proceed, Pure Himalayan Shilajit is the only brand in our database that publicly discloses iron content in their COA — making it the most transparent and informed choice for iron-conscious buyers. Black Lotus, sourced from the Altai Mountains of Siberia, is our top-rated overall brand with a full-panel COA and a clean heavy metals record, though it does not disclose iron specifically.
          </p>
        </div>

        {/* CTA — Primary: Pure Himalayan, Secondary: Black Lotus */}
        <div className="mt-6 space-y-4">
          {/* Primary CTA */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-6 shadow-sm">
            <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">
              Most Transparent for Iron-Conscious Buyers — S-Tier
            </div>
            <h3 className="text-base font-black text-[#0D1F14] mb-1">Pure Himalayan Shilajit</h3>
            <p className="text-xs text-[#7BA899] mb-1">
              Himalayan Mountains, 16,000 ft · ISO/IEC 17025 accredited lab (Certified Laboratories + Micro Quality Labs, Burbank CA)
            </p>
            <p className="text-xs text-[#7BA899] mb-4">
              <strong className="text-[#0D1F14]">Only brand</strong> in our database with a publicly disclosed iron content figure (1,643 ppm, Batch RE18 COA) · ~58% fulvic acid (2021 COA, UV method) · Full heavy metals panel, September 2024
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={PH_BASE}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
              >
                Shop Pure Himalayan Shilajit →
              </a>
              <Link
                href="/blog/pure-himalayan-shilajit-review"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#D1EDD8] text-[#0D1F14] text-sm font-semibold hover:bg-[#F0FAF4] transition-colors"
              >
                Read Full Review
              </Link>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                name: "Black Lotus Shilajit",
                tier: "S",
                sub: "Altai Mountains, Siberia · 64.51% fulvic acid (resin, Batch 93) · Mercury ND",
                href: BL_BASE,
                review: "/blog/black-lotus-shilajit-review",
                note: "Top-rated overall · Iron content not publicly disclosed",
              },
              {
                name: "Natural Shilajit",
                tier: "S",
                sub: "UNESCO Altai · DBP verified · Triple-method COA",
                href: NS_BASE,
                review: "/blog/natural-shilajit-review",
                note: "Fulvic acid and iron content not disclosed",
              },
              {
                name: "Pürblack",
                tier: "A",
                sub: "Multi-region · 5 US patents · DBP + Urolithin A COA",
                href: PB_BASE,
                review: "/blog/purblack-shilajit-review",
                note: "Iron content not publicly disclosed",
              },
            ].map((brand) => (
              <div key={brand.name} className="bg-white border border-[#D1EDD8] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded bg-amber-400 text-amber-900 text-[9px] font-black flex items-center justify-center shrink-0">
                    {brand.tier}
                  </span>
                  <span className="text-xs font-bold text-[#0D1F14]">{brand.name}</span>
                </div>
                <p className="text-[10px] text-[#7BA899] leading-relaxed mb-1">{brand.sub}</p>
                <p className="text-[10px] text-amber-600 leading-relaxed mb-3 italic">{brand.note}</p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block text-center py-1.5 rounded-lg bg-[#10B981] hover:bg-emerald-400 text-white text-[11px] font-semibold transition-colors"
                  >
                    Shop →
                  </a>
                  <Link
                    href={brand.review}
                    className="block text-center py-1.5 rounded-lg border border-[#D1EDD8] text-[#0D1F14] text-[11px] font-medium hover:bg-[#F0FAF4] transition-colors"
                  >
                    Full Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#7BA899]">
            <strong className="text-[#0D1F14]">Note for hemochromatosis patients:</strong> All shilajit brands contain iron to varying degrees, and all contain fulvic acid. Publicly disclosed iron data is only available for Pure Himalayan. Regardless of brand choice, consult your physician before supplementing.
          </p>
        </div>

        {/* Related reading */}
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-sm text-[#0D1F14] leading-relaxed mt-6">
          Related reading:{" "}
          <Link href="/blog/shilajit-safety-guide" className="text-[#10B981] hover:underline font-medium">
            Is shilajit safe? Full safety guide →
          </Link>{" "}
          ·{" "}
          <Link href="/blog/shilajit-side-effects" className="text-[#10B981] hover:underline font-medium">
            Shilajit side effects →
          </Link>{" "}
          ·{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline font-medium">
            Full lab data for all brands →
          </Link>
        </div>
      </section>
    </BlogPostLayout>
  );
}
