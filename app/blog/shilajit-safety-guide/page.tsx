import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import PureHimalayanCTA from "../../components/blog/PureHimalayanCTA";

const AFFILIATE_LBH = "https://lotusbloomingherbs.com/products/authentic-shilajit?variant=1734489987&aff=380";
const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-safety-guide`;

export const metadata: Metadata = {
  title: "Is Shilajit Safe? FDA Warnings, Heavy Metals & What the Data Shows (2026)",
  description:
    "A data-driven guide to shilajit safety: what the research says, heavy metals risk, FDA status, Memorial Sloan Kettering warnings, who should not take shilajit, and how to verify a safe product.",
  keywords:
    "is shilajit safe, shilajit safety, shilajit side effects, shilajit heavy metals, shilajit FDA approved, shilajit Memorial Sloan Kettering, who should not take shilajit",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Is Shilajit Safe? FDA Warnings, Heavy Metals & What the Data Shows (2026)",
    description:
      "A data-driven guide to shilajit safety: what the research says, heavy metals risk, FDA status, Memorial Sloan Kettering warnings, who should not take shilajit, and how to verify a safe product.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-23",
    modifiedTime: "2026-04-23",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Is shilajit FDA approved?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Shilajit is not FDA approved as a drug. It is sold in the United States as a dietary supplement, a category regulated under DSHEA (Dietary Supplement Health and Education Act of 1994). This means manufacturers are not required to prove efficacy before selling, but they are legally prohibited from making disease claims and must comply with FDA Good Manufacturing Practices (GMPs) for supplement production. FDA does not pre-approve dietary supplements before they reach market.",
    },
  },
  {
    "@type": "Question",
    name: "Can shilajit cause heavy metal poisoning?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Untested or low-quality shilajit can contain elevated levels of lead, mercury, arsenic, and cadmium — which at sufficient doses cause heavy metal toxicity. However, reputable brands with published Certificates of Analysis (COAs) from ISO/IEC 17025-accredited independent labs have demonstrated heavy metals within FDA dietary supplement limits. The risk is real but entirely avoidable by purchasing only from brands with verified, publicly accessible lab results.",
    },
  },
  {
    "@type": "Question",
    name: "Who should not take shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Pregnant and breastfeeding women should avoid shilajit — no safety data exists for these populations. People with chronic kidney disease should exercise caution, as shilajit may increase urinary uric acid levels and some compounds may be renally excreted. Individuals with hemochromatosis or iron overload conditions should avoid shilajit, as it may increase iron absorption. Anyone on blood thinners, immunosuppressants, or medications for kidney or liver conditions should consult a physician before use.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit safe long term?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Long-term safety data for shilajit in humans is limited. The available clinical studies are mostly short-term (90 days or less). A 90-day human safety study published in the Journal of Ethnopharmacology found no significant adverse effects at 200–500 mg/day. Centuries of traditional Ayurvedic use provide indirect evidence of tolerability, but this does not substitute for formal long-term clinical data. Healthy adults using verified, low-heavy-metal products at standard doses appear to have a reasonable safety profile, but robust multi-year human trials have not been conducted.",
    },
  },
  {
    "@type": "Question",
    name: "What does Memorial Sloan Kettering say about shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Memorial Sloan Kettering Cancer Center's Integrative Medicine database lists shilajit as having some laboratory evidence for anti-inflammatory, antioxidant, and adaptogenic effects, but notes that clinical evidence in humans remains limited. MSK specifically flags heavy metal contamination as a safety concern and warns that the supplement is not standardized, meaning product quality varies significantly across brands. MSK does not recommend shilajit for cancer treatment or prevention. Their assessment accurately characterizes shilajit as having preliminary evidence with real quality-control risks that depend entirely on the specific product.",
    },
  },
];

export default function ShilajitSafetyGuide() {
  return (
    <BlogPostLayout
      heading={
        <>
          Is Shilajit Safe?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Heavy Metals, FDA Status & Who Should Avoid It
          </span>
        </>
      }
      description="A data-driven guide to shilajit safety: what the research says, heavy metals risk, FDA status, Memorial Sloan Kettering warnings, who should not take shilajit, and how to verify a safe product."
      tags={["Safety", "Heavy Metals", "Research", "Buyer Awareness"]}
      publishedAt="2026-04-23"
      updatedAt="2026-04-23"
      readingTimeMin={10}
      currentSlug="shilajit-safety-guide"
      breadcrumbLabel="Is Shilajit Safe?"
      faqItems={faqItems}
      ctaVariant="pure-himalayan"
      quizCta="line"
    >
      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this
        page are affiliate links. If you purchase through them, we may earn a commission at no
        extra cost to you. This does not affect our rankings or safety assessments — see our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">
          full disclosure policy
        </Link>
        .
      </div>

      {/* Intro */}
      <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
        <p>
          The safety concerns around shilajit are legitimate. They deserve a direct answer —
          not reassurance, not dismissal, not marketing spin.
        </p>
        <p>
          Shilajit contains heavy metals. The supplement is not FDA approved. Memorial Sloan
          Kettering has flagged safety concerns. Clinical research is limited. Some populations
          should not take it at all. These are real facts, and pretending otherwise does you no
          favors.
        </p>
        <p>
          What those facts mean in practice is more nuanced. This guide walks through each
          concern using available evidence, explains what has been verified and what remains
          unknown, and tells you exactly how to determine whether a specific product is safe to
          use.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
          <span className="font-bold">Note:</span> This page is informational only and does not
          constitute medical advice. Consult a qualified healthcare provider before starting any
          new supplement, especially if you have an existing health condition or take
          prescription medications.
        </div>
      </div>

      {/* Section 1: What the research actually says */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What the Research Actually Says About Shilajit Safety
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Human clinical data on shilajit safety is limited in volume but not entirely absent.
            The most relevant published safety study is a 90-day randomized trial published in the{" "}
            <em>Journal of Ethnopharmacology</em> (2009, Shilajit: A review), in which healthy
            participants received 200–500 mg of processed shilajit daily. Researchers found no
            significant adverse effects on liver enzymes, kidney function markers, blood pressure,
            or complete blood count.
          </p>
          <p>
            A 2016 pilot study in the <em>Andrologia</em> journal assessed shilajit in infertile
            men over 90 days at 200 mg twice daily and reported no safety signals in biochemical
            or hematological markers. A 2019 study in the <em>Journal of the International
            Society of Sports Nutrition</em> found the same dose over 8 weeks in healthy subjects
            produced no adverse effects on safety biomarkers.
          </p>
          <p>
            The consistent finding across short-term human trials: processed shilajit at
            standard doses (200–500 mg/day) does not appear to cause measurable harm in healthy
            adults over 8–12 week study periods.
          </p>
          <div className="bg-white border border-[#D1EDD8] rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">The Key Limitations of Existing Research</h3>
            <ul className="space-y-2 text-sm text-[#0D1F14]">
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold shrink-0">⚠</span>
                <span><strong>Short duration:</strong> Most trials run 8–12 weeks. No multi-year human safety data exists.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold shrink-0">⚠</span>
                <span><strong>Small sample sizes:</strong> Trials typically include 30–75 participants — too small to detect rare adverse events.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold shrink-0">⚠</span>
                <span><strong>Product variability:</strong> Studies use specific prepared extracts that may not match commercially available products.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold shrink-0">⚠</span>
                <span><strong>Healthy adult focus:</strong> Trials exclude pregnant women, people with kidney disease, and other at-risk populations.</span>
              </li>
            </ul>
          </div>
          <p>
            The honest summary: available evidence supports reasonable short-term safety for
            healthy adults using quality-verified products. Long-term safety and safety in
            vulnerable populations remains insufficiently studied.
          </p>
        </div>
      </div>

      {/* Section 2: Heavy Metals */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The Heavy Metals Problem — Real Risk, Verifiable Solution
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Heavy metal contamination is the most substantiated safety concern in shilajit. It is
            not hypothetical — documented cases of lead and mercury toxicity from shilajit
            consumption have been reported in the medical literature.
          </p>
          <p>
            A 2012 case report in the <em>International Journal of Ayurveda Research</em>
            described a patient presenting with lead toxicity after consuming an unverified shilajit
            product. A 2008 study by Saper et al. in the <em>Journal of the American Medical
            Association</em> found that a significant percentage of Ayurvedic herbal products sold
            online contained detectable lead, mercury, or arsenic — a category that includes
            shilajit-containing formulas.
          </p>
          <p>
            The geological reason is straightforward: shilajit forms in mineral-rich mountain rock
            over millennia. The same concentration process that yields fulvic acid and trace
            minerals also concentrates heavy metals from the surrounding geology. Purification
            reduces but does not eliminate this risk without independent verification.
          </p>

          {/* FDA safety limits table */}
          <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4]">
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Metal</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">FDA Limit (dietary supplements)</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Primary Health Effect at High Exposure</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Test Method</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lead (Pb)", "<10 ppm", "Neurological, cardiovascular", "ICP-MS"],
                  ["Mercury (Hg)", "<3 ppm", "Neurological, renal", "ICP-MS"],
                  ["Arsenic (As)", "<15 ppm total", "Carcinogenic (inorganic form)", "ICP-MS"],
                  ["Cadmium (Cd)", "<5 ppm", "Renal accumulation", "ICP-MS"],
                ].map(([metal, limit, effect, method], i) => (
                  <tr key={metal} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{metal}</td>
                    <td className="px-4 py-3 text-amber-700 font-medium">{limit}</td>
                    <td className="px-4 py-3 text-[#555]">{effect}</td>
                    <td className="px-4 py-3 text-[#2D6A4F] font-mono">{method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#7BA899]">
            FDA limits per dietary supplement guidance. ICP-MS (Inductively Coupled Plasma Mass Spectrometry) is the gold standard for trace metal analysis at the ppm and ppb levels required to verify these limits.
          </p>

          <p>
            The good news: heavy metals contamination is a verifiable risk. Any brand with a
            current, independently tested Certificate of Analysis (COA) from an accredited
            laboratory that shows actual measured values — not just a "PASS" stamp — gives you
            the information you need to assess safety.{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline font-medium">
              Our lab data page
            </Link>{" "}
            shows what verified COA documentation looks like for the brands in our database.
          </p>
        </div>
      </div>

      {/* Section 3: Who should avoid */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Who Should Not Take Shilajit
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Several populations have specific reasons to avoid shilajit or to consult a physician
            before using it. These are not precautionary disclaimers for liability purposes —
            each category has a documented physiological rationale.
          </p>

          <div className="space-y-4">
            {/* Card: Pregnant women */}
            <div className="bg-white border-2 border-red-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-red-700 mb-2 flex items-center gap-2">
                <span>🚫</span> Pregnant and Breastfeeding Women
              </h3>
              <p className="text-sm text-[#0D1F14] leading-relaxed">
                No clinical safety data exists for shilajit use during pregnancy or
                breastfeeding. Traditional Ayurvedic texts classify shilajit as contraindicated
                in pregnancy. The presence of heavy metals — even at levels considered safe for
                healthy adults — takes on additional significance during fetal development, where
                lead in particular crosses the placental barrier. Until adequate safety data
                exists, pregnant and breastfeeding women should not use shilajit.{" "}
                See our full breakdown of{" "}
                <Link href="/blog/shilajit-pregnancy-breastfeeding" className="text-[#10B981] hover:underline">shilajit during pregnancy and breastfeeding — what the evidence says</Link>.
              </p>
            </div>

            {/* Card: Kidney disease */}
            <div className="bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-amber-700 mb-2 flex items-center gap-2">
                <span>⚠️</span> Chronic Kidney Disease
              </h3>
              <p className="text-sm text-[#0D1F14] leading-relaxed">
                Shilajit has been shown to increase urinary uric acid excretion in some studies.
                In people with impaired kidney function, this effect could be problematic. The
                kidneys are also the primary elimination route for several heavy metals, and
                impaired renal function means reduced clearance capacity. People with CKD,
                kidney stones, or who have had kidney transplants should consult a nephrologist
                before considering shilajit. For the full evidence breakdown, see our dedicated guide on{" "}
                <Link href="/blog/shilajit-liver-kidneys" className="text-amber-700 hover:underline font-medium">
                  shilajit and liver and kidney safety — a full breakdown
                </Link>.
              </p>
            </div>

            {/* Card: Hemochromatosis / iron overload */}
            <div className="bg-white border-2 border-amber-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-amber-700 mb-2 flex items-center gap-2">
                <span>⚠️</span> Hemochromatosis and Iron Overload Conditions
              </h3>
              <p className="text-sm text-[#0D1F14] leading-relaxed">
                Shilajit contains trace iron and fulvic acid, which may enhance mineral absorption
                including iron. For people with hemochromatosis (hereditary iron overload),
                thalassemia, or other iron storage disorders, increased iron absorption is
                directly harmful. The same caution applies to anyone receiving iron infusion
                therapy. People in this category should not take shilajit without explicit medical
                supervision. For the full breakdown of iron content data and fulvic acid&apos;s
                absorption effects, see our dedicated guide on{" "}
                <Link href="/blog/shilajit-hemochromatosis" className="text-amber-700 hover:underline font-medium">
                  shilajit and hemochromatosis — a full breakdown →
                </Link>
              </p>
            </div>

            {/* Card: Medication interactions */}
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-[#4A6358] mb-2 flex items-center gap-2">
                <span>💊</span> Potential Medication Interactions
              </h3>
              <p className="text-sm text-[#0D1F14] leading-relaxed mb-2">
                Shilajit's effects on mineral absorption, uric acid metabolism, and reported
                adaptogenic activity create theoretical interaction risks with certain drug
                classes. Consult a physician before using shilajit if you take:
              </p>
              <ul className="text-sm text-[#0D1F14] space-y-1">
                <li className="flex gap-2"><span className="text-[#7BA899]">·</span> Blood thinners (warfarin, heparin, rivaroxaban)</li>
                <li className="flex gap-2"><span className="text-[#7BA899]">·</span> Immunosuppressants (cyclosporine, tacrolimus)</li>
                <li className="flex gap-2"><span className="text-[#7BA899]">·</span> Gout medications (allopurinol, febuxostat)</li>
                <li className="flex gap-2"><span className="text-[#7BA899]">·</span> Iron supplements or iron-related treatments</li>
                <li className="flex gap-2"><span className="text-[#7BA899]">·</span> Any medication with narrow therapeutic windows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Memorial Sloan Kettering */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What Memorial Sloan Kettering Actually Says About Shilajit
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Memorial Sloan Kettering Cancer Center maintains an Integrative Medicine database of
            herbs and supplements, written for clinicians and patients. Their assessment of
            shilajit is regularly cited in safety discussions — for the complete breakdown, see
            our guide on{" "}
            <Link href="/blog/memorial-sloan-kettering-shilajit" className="text-[#10B981] hover:underline font-medium">
              what Memorial Sloan Kettering says about shilajit safety
            </Link>{" "}
            — so it is worth addressing the key points directly here.
          </p>

          <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#10B981] mb-3">What MSK's Database Actually States</h3>
            <ul className="space-y-3 text-sm text-[#0D1F14]">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <strong>Laboratory evidence exists</strong> for anti-inflammatory, antioxidant,
                  and adaptogenic properties in preclinical (cell and animal) studies.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <strong>Human clinical evidence is limited.</strong> MSK notes that robust
                  randomized controlled trials in humans are sparse, and the existing trials are
                  mostly small and short-term.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">⚠</span>
                <div>
                  <strong>Heavy metal contamination is flagged</strong> as a documented safety
                  concern. MSK notes that quality varies significantly across products and that
                  some commercially available shilajit has been found to contain elevated heavy
                  metals.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">⚠</span>
                <div>
                  <strong>Lack of standardization</strong> is cited. MSK notes that without
                  standardization, the active compound content and safety profile of products
                  sold under the "shilajit" label varies substantially.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold mt-0.5">✗</span>
                <div>
                  <strong>MSK does not recommend shilajit</strong> for cancer treatment, cancer
                  prevention, or as a complementary oncology intervention.
                </div>
              </li>
            </ul>
          </div>

          <p>
            The MSK assessment is measured and accurate, not alarmist. Their safety concerns
            center on product-level contamination risks and the lack of consistent standards —
            which are real problems in the supplement market generally, and especially so for
            shilajit. These concerns are addressed by purchasing from brands that provide
            independent, accredited lab testing with actual measured values, not marketing claims.
          </p>
          <p>
            What MSK does not say: that all shilajit is dangerous, that traditional use evidence
            is irrelevant, or that consumers cannot assess safety. Their concerns are grounded in
            product variability — a solvable problem for buyers who know how to verify COA data.
          </p>
        </div>
      </div>

      {/* Section 5: How to Read a COA */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How to Read a COA for Safety Markers
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            A Certificate of Analysis (COA) is the primary tool for verifying shilajit safety.
            Knowing how to read one correctly is the most practical skill any shilajit buyer can
            develop.
          </p>
          <p>
            Our{" "}
            <Link href="/blog/how-to-read-shilajit-coa" className="text-[#10B981] hover:underline font-medium">
              complete COA reading guide
            </Link>{" "}
            covers every section in detail, but for safety specifically, focus on these elements:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-[#10B981] mb-3">✓ Green Flags</h3>
              <ul className="space-y-2 text-xs text-[#0D1F14]">
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Specific measured values for each heavy metal (e.g., "Lead: 0.06 ppm")</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Test method stated as ICP-MS</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>ISO/IEC 17025 accredited laboratory named</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>All four metals tested: Pb, Hg, As, Cd</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Reference limits shown alongside results</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Microbial panel included (total aerobic count, yeast/mold, E. coli, Salmonella)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>COA dated within the last 12–18 months</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-red-600 mb-3">✗ Red Flags</h3>
              <ul className="space-y-2 text-xs text-[#0D1F14]">
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>"Heavy metals tested" claim with no COA link</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>COA shows only "PASS" without actual numbers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>In-house testing by the brand itself</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Missing one or more of the four key metals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>No lab name, accreditation, or LIMS number</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>COA over 2 years old</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Test method not stated</span>
                </li>
              </ul>
            </div>
          </div>

          <p>
            You can see real COA documentation for our verified brands on the{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline font-medium">
              lab data page
            </Link>
            . This is what independent, accredited testing looks like — actual values, not
            marketing language.
          </p>
        </div>
      </div>

      {/* Section 6: FDA */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What the FDA Says About Shilajit
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit is not FDA approved. Understanding what that actually means — and does not
            mean — is important for assessing its safety status.
          </p>
          <p>
            In the United States, shilajit is sold as a dietary supplement under the Dietary
            Supplement Health and Education Act (DSHEA) of 1994. Under DSHEA:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              Manufacturers are <strong>not required to prove efficacy</strong> or obtain FDA
              approval before selling a dietary supplement
            </li>
            <li>
              Manufacturers <strong>are required</strong> to ensure their products are safe and
              comply with FDA Good Manufacturing Practices (GMPs)
            </li>
            <li>
              Disease claims are <strong>prohibited</strong> — shilajit cannot legally be marketed
              as treating, curing, or preventing any disease
            </li>
            <li>
              The FDA <strong>can take action</strong> against products after they are on the
              market if safety problems are identified
            </li>
          </ul>
          <p>
            This regulatory framework applies to all dietary supplements — protein powders,
            vitamin D, fish oil, magnesium — not just shilajit. The absence of FDA approval is
            not a specific shilajit warning; it is the default status for all supplements in the
            US market.
          </p>
          <p>
            The FDA has not issued specific safety alerts about shilajit as a category (as of
            the writing of this guide). Their enforcement actions in the supplement space have
            focused on products making explicit drug claims, products found to contain
            undisclosed pharmaceutical compounds, and products with documented heavy metal
            contamination in post-market testing.
          </p>
          <p>
            The practical implication: FDA-compliant manufacturing (GMP-certified facilities)
            and independent third-party testing are your best available tools for safety
            verification, because pre-market approval is not part of the regulatory model.
          </p>
        </div>
      </div>

      {/* Section 7: Dosage */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Safe Dosage Guidelines
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The clinical trials that have studied shilajit safety in humans have used doses in
            the range of 200–500 mg per day of processed shilajit extract, typically split into
            two servings. No human trial has demonstrated safety concerns at these doses in
            healthy adults over the study durations tested (up to 90 days).
          </p>

          <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4]">
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Form</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Typical Dose</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Resin", "250–500 mg/day", "Most bioavailable form; dissolve in warm water or under tongue"],
                  ["Capsules", "400–500 mg/day", "Slower dissolution; convenient; look for resin-filled, not powder"],
                  ["Liquid extract", "Follow label dosing", "Concentration varies — manufacturer's guidance is product-specific"],
                  ["Powder", "250–500 mg/day", "Higher adulteration risk in this form; verify COA carefully"],
                ].map(([form, dose, note], i) => (
                  <tr key={form} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{form}</td>
                    <td className="px-4 py-3 text-[#10B981] font-medium">{dose}</td>
                    <td className="px-4 py-3 text-[#555]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Starting at the lower end of the range (around 150–200 mg/day for the first 1–2
            weeks) is a prudent approach for first-time users, allowing you to monitor for
            individual tolerance before increasing to a standard dose.
          </p>
          <p>
            There is no established safe upper limit based on human data. Doses above 500
            mg/day have not been well-studied in clinical settings. Traditional Ayurvedic
            practice includes cycling protocols (use for several months, followed by a break),
            though this has not been formally validated in clinical research.
          </p>
          <p>
            The heavy metals safety math matters here: even at safe total heavy metal
            concentrations in a COA, higher doses mean higher total daily metal intake. For a
            product with lead at the FDA limit (10 ppm) in a 500 mg serving, total daily lead
            intake from shilajit alone would be 5 mcg — well below the FDA Tolerable Daily
            Intake of 75 mcg for adults. This margin erodes at higher doses, reinforcing the
            value of using products with metals well below the limit rather than at it.
          </p>
        </div>
      </div>

      {/* Section 8: Verified brands CTAs */}
      <PureHimalayanCTA
        headline="Pure Himalayan Shilajit — ISO/IEC 17025 Accredited Safety Testing"
        subtext="The only brand in our database with ISO/IEC 17025 accredited lab verification — the highest internationally recognized standard for testing competence. Full heavy metals panel, actual measured values, up to 99.9% purity."
        buttonText="Shop Pure Himalayan Resin — $39.99 →"
      />

      {/* LBH Safety CTA */}
      <div className="bg-amber-50/40 border-2 border-amber-200 rounded-2xl p-6 shadow-sm">
        <div className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1">Himalayan 16,000–18,000ft · A2LA ISO 17025 · S-Tier</div>
        <h3 className="text-base font-black text-[#0D1F14] mb-2">Lotus Blooming Herbs — Lowest Lead Per Serving, A2LA ISO 17025 Verified</h3>
        <p className="text-sm text-[#0D1F14] leading-relaxed mb-4">
          Lotus Blooming Herbs tests their Authentic Shilajit™ Resin through Certified Laboratories in Burbank, CA — an A2LA ISO 17025 accredited laboratory (Certificate 3034.01). Their heavy metals panel shows lead at 0.040 mcg per serving, the lowest measured across all brands in our database. The microbiology panel covers C. albicans, Bile-Tolerant Gram-Negative bacteria, Pseudomonas, and S. aureus — more comprehensive than most competitors. Sourced at 16,000–18,000ft in the Himalayan Mountains by NAMA-certified Ayurvedic practitioners.
        </p>
        <a
          href={AFFILIATE_LBH}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold transition-colors"
        >
          Shop Lotus Blooming Herbs Authentic Shilajit™ →
        </a>
      </div>

      {/* Section 9: Verdict */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The Safety Verdict: Conditional Green Light for Healthy Adults
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Based on the available evidence, here is the honest safety assessment for shilajit:
          </p>

          <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#10B981] mb-4">Safety Verdict by Population</h3>
            <div className="space-y-3">
              {[
                {
                  group: "Healthy adults using verified, COA-backed products",
                  verdict: "Reasonable safety at standard doses",
                  color: "text-emerald-600",
                  icon: "✓",
                },
                {
                  group: "Pregnant or breastfeeding women",
                  verdict: "Avoid — no safety data, potential fetal risk",
                  color: "text-red-600",
                  icon: "✗",
                },
                {
                  group: "Chronic kidney disease",
                  verdict: "Consult nephrologist before use",
                  color: "text-amber-600",
                  icon: "⚠",
                },
                {
                  group: "Hemochromatosis / iron overload",
                  verdict: "Avoid — iron absorption risk",
                  color: "text-red-600",
                  icon: "✗",
                },
                {
                  group: "People on blood thinners or immunosuppressants",
                  verdict: "Consult prescribing physician",
                  color: "text-amber-600",
                  icon: "⚠",
                },
                {
                  group: "Anyone using unverified products without COA",
                  verdict: "Genuine heavy metals risk — verify first",
                  color: "text-red-600",
                  icon: "✗",
                },
              ].map(({ group, verdict, color, icon }) => (
                <div key={group} className="flex gap-3 text-sm">
                  <span className={`${color} font-bold shrink-0 w-4 text-center`}>{icon}</span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-[#0D1F14]">{group}</span>
                    <span className={`${color} font-semibold text-xs shrink-0`}>{verdict}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The safety question for shilajit ultimately reduces to a product question. The
            compound itself has centuries of traditional use and meaningful short-term clinical
            data supporting tolerability in healthy adults. The risk is not inherent to shilajit
            — it is inherent to an unregulated market where product quality varies enormously.
          </p>
          <p>
            A buyer who verifies a COA from an ISO/IEC 17025-accredited laboratory showing
            heavy metals well within FDA limits, purchases from a GMP-certified manufacturer,
            stays within standard dose ranges, and has no contraindicated conditions is operating
            at an acceptable risk level.
          </p>
          <p>
            A buyer who purchases based on price or marketing language alone, without verifying
            any lab data, is taking a genuinely meaningful safety risk.
          </p>
          <p>
            The brands in our database that have cleared the safety verification bar are
            documented in our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline font-medium">
              ranked brand guide
            </Link>
            . Our rating{" "}
            <Link href="/methodology" className="text-[#10B981] hover:underline font-medium">
              methodology
            </Link>{" "}
            explains exactly how we evaluate COA quality, lab accreditation, and safety
            documentation. And for the specific heavy metals data on our database brands, see the{" "}
            <Link href="/blog/shilajit-heavy-metals-safety" className="text-[#10B981] hover:underline font-medium">
              complete heavy metals guide
            </Link>
            .
          </p>
        </div>
      </div>
    </BlogPostLayout>
  );
}
