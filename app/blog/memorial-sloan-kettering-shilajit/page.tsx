import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

const AFFILIATE_BL = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_PH = "https://www.purehimalayanshilajit.com/?ref=4792";
const AFFILIATE_NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const AFFILIATE_PB = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const SLUG = "memorial-sloan-kettering-shilajit";
const POST_URL = `${BASE_URL}/blog/${SLUG}`;

export const metadata: Metadata = {
  title: "Memorial Sloan Kettering & Shilajit: Safety, Heavy Metals & What the Research Shows | ShilajitPrice.com",
  description:
    "What Memorial Sloan Kettering says about shilajit safety, heavy metals, and pregnancy risks — plus how to choose a lab-verified brand that addresses these concerns.",
  keywords:
    "memorial sloan kettering shilajit, memorial sloan kettering shilajit safety, memorial sloan kettering shilajit heavy metals, memorial sloan kettering shilajit pregnancy, shilajit safety women, is shilajit safe heavy metals",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Memorial Sloan Kettering & Shilajit: Safety, Heavy Metals & What the Research Shows",
    description:
      "What Memorial Sloan Kettering says about shilajit safety, heavy metals, and pregnancy risks — plus how to choose a lab-verified brand that addresses these concerns.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-27",
    modifiedTime: "2026-04-27",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "What does Memorial Sloan Kettering say about shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Memorial Sloan Kettering Cancer Center's Integrative Medicine database documents shilajit as a substance with some laboratory and preclinical evidence for anti-inflammatory, antioxidant, and adaptogenic properties. However, MSK notes that clinical evidence in humans remains limited — most studies are small and short-term. Their database specifically flags heavy metal contamination as a safety concern, noting that the quality and composition of shilajit products varies significantly across brands. MSK also notes that shilajit is not FDA-approved and has not been evaluated for efficacy or safety by regulatory bodies. These are accurate characterizations of the current evidence landscape, not a categorical rejection of the substance.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit safe during pregnancy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No established safety data exists for shilajit use during pregnancy or breastfeeding. Memorial Sloan Kettering and most integrative medicine sources take a precautionary stance: because clinical evidence is absent for these populations, and because heavy metal contamination is a documented risk in unverified products, avoidance during pregnancy is the standard recommendation. This is a precautionary position based on insufficient data — not evidence of confirmed harm. Anyone who is pregnant or breastfeeding should not take shilajit without first consulting their physician.",
    },
  },
  {
    "@type": "Question",
    name: "Does shilajit contain heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit forms by geological compression of organic matter over centuries in high-altitude rock formations. This environment naturally concentrates minerals — including trace amounts of heavy metals like lead, mercury, arsenic, and cadmium. Unprocessed or inadequately purified shilajit can contain these metals at levels above safe limits. However, brands with published third-party Certificates of Analysis (COAs) from accredited independent laboratories have demonstrated that properly processed shilajit can be purified to meet FDA heavy metals limits for dietary supplements. The risk is real but product-specific, not universal.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit FDA approved?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Shilajit is not FDA approved as a drug. In the United States it is sold as a dietary supplement under the Dietary Supplement Health and Education Act of 1994 (DSHEA). Under DSHEA, manufacturers are not required to prove efficacy before going to market, but they must comply with FDA Good Manufacturing Practice (GMP) regulations and are prohibited from making drug claims. FDA does not pre-review or approve dietary supplements before sale. This regulatory gap is one reason why quality varies dramatically between products and why independent third-party COA testing is so important when evaluating shilajit brands.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if my shilajit is free of heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The only way to verify that a shilajit product has acceptable heavy metals levels is through a published Certificate of Analysis (COA) from an independent, accredited third-party laboratory. Look for: (1) the testing lab is named and identifiable — not anonymous; (2) the COA shows actual measured values for lead, mercury, arsenic, and cadmium — not just a 'pass/fail' without numbers; (3) the lab uses ICP-MS (inductively coupled plasma mass spectrometry) methodology, the industry standard for trace metal analysis; (4) the results fall below FDA action levels for dietary supplements. Brands that cannot produce a publicly accessible COA with named labs and actual values should be avoided.",
    },
  },
  {
    "@type": "Question",
    name: "Who should avoid taking shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The following groups should avoid shilajit or consult a physician before use: (1) Pregnant or breastfeeding women — insufficient safety data exists; (2) People with hemochromatosis or iron overload conditions — shilajit may increase iron absorption; (3) People taking blood thinners, immunosuppressants, or medications for kidney or liver conditions — potential interaction risk; (4) Individuals with active kidney disease or chronic renal insufficiency — some shilajit compounds are renally cleared; (5) Anyone with a diagnosed heavy metal sensitivity or prior heavy metal exposure. This list is not exhaustive — always consult a qualified healthcare provider before starting any new supplement.",
    },
  },
];

export default function MemorialSloanKetteringShilajit() {
  return (
    <BlogPostLayout
      heading={
        <>
          Memorial Sloan Kettering &amp; Shilajit:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Safety, Heavy Metals &amp; What the Research Shows
          </span>
        </>
      }
      description="What Memorial Sloan Kettering documents about shilajit safety, heavy metals, and pregnancy risks — and how to distinguish between unverified products and lab-tested brands that directly address these concerns."
      tags={["Safety", "Heavy Metals", "Science", "Pregnancy"]}
      publishedAt="2026-04-27"
      updatedAt="2026-04-27"
      readingTimeMin={11}
      currentSlug={SLUG}
      breadcrumbLabel="Memorial Sloan Kettering & Shilajit Safety"
      faqItems={faqItems}
      quizCta="line"
      ctaVariant="black-lotus"
    >
      {/* Medical disclaimer */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
        <span className="font-bold text-amber-800">Medical disclaimer:</span> This article is for informational purposes only and does not constitute medical advice. ShilajitPrice.com is not affiliated with Memorial Sloan Kettering Cancer Center. Always consult a qualified healthcare provider before starting any supplement, particularly if you are pregnant, breastfeeding, or taking medications.
      </div>

      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. We earn a commission if you purchase through them at no extra cost to you. Affiliate relationships do not affect the safety analysis or brand recommendations on this page — we present lab data as documented by the brands' own Certificates of Analysis.{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">Full disclosure →</Link>
      </div>

      {/* 1. Intro */}
      <section>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          When people research shilajit and encounter Memorial Sloan Kettering Cancer Center's integrative medicine database, they typically find a measured, cautious assessment. MSK is one of the world's leading cancer research and treatment institutions, and their Integrative Medicine program maintains one of the most credible independent databases for evaluating the evidence behind herbs, supplements, and complementary therapies. When MSK flags concerns about a supplement, those concerns are worth taking seriously.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          MSK's database documents real concerns about shilajit: heavy metal contamination risk, limited human clinical evidence, absence of FDA approval, and specific cautions for pregnant and breastfeeding women. None of these concerns should be dismissed. They are accurate characterizations of the risk profile of <em>unverified shilajit</em> — and they explain why the shilajit market's quality gap is so consequential.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          The nuance that MSK's necessarily general database cannot fully address is the distinction between unverified products and brands that have specifically invested in third-party laboratory testing to address these exact concerns. This article explains what MSK actually documents, where those concerns apply most sharply, and what verifiable data exists to help buyers navigate the quality gap.
        </p>
      </section>

      {/* 2. What MSK Actually Says */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What Memorial Sloan Kettering Actually Documents About Shilajit</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          MSK's Integrative Medicine database (available publicly at their website under "About Herbs, Botanicals &amp; Other Products") catalogues supplements based on available laboratory, animal, and human clinical evidence. Their shilajit entry reflects the current state of the science: some preclinical promise, limited human data, and real quality-control concerns. Here is a factual summary of what their database documents:
        </p>

        <div className="space-y-3 mb-5">
          {[
            {
              icon: "⚠️",
              title: "Heavy Metal Contamination Risk",
              body: "MSK specifically identifies heavy metal contamination as a documented safety concern with shilajit. Because shilajit forms in geological environments that naturally concentrate minerals, unprocessed or inadequately purified products can contain lead, mercury, arsenic, and cadmium at levels that exceed safe limits. This is not a hypothetical risk — published case reports have documented heavy metal toxicity from contaminated shilajit products.",
            },
            {
              icon: "🔬",
              title: "Limited Human Clinical Evidence",
              body: "The clinical evidence base for shilajit in humans is preliminary. Most published studies involve small sample sizes, short durations (typically 90 days or less), and narrow outcome measures. MSK accurately characterizes the evidence as insufficient to draw firm conclusions about efficacy for most of the health claims associated with shilajit. Preclinical (laboratory and animal) evidence is more robust, but does not directly translate to human outcomes.",
            },
            {
              icon: "🏛️",
              title: "Not FDA Approved or Regulated for Efficacy",
              body: "Shilajit is not approved by the FDA as a drug. It is sold in the US as a dietary supplement under DSHEA, which does not require manufacturers to prove efficacy before market entry. MSK notes this regulatory gap as relevant context — it means there is no government-level quality assurance applied before products reach consumers.",
            },
            {
              icon: "🤰",
              title: "Pregnancy and Breastfeeding Caution",
              body: "MSK advises against shilajit use during pregnancy and breastfeeding, citing insufficient safety data for these populations. No clinical trials have studied shilajit in pregnant or breastfeeding women. This is a standard precautionary position that most integrative medicine sources share.",
            },
            {
              icon: "💊",
              title: "Potential Medication Interactions",
              body: "MSK notes that shilajit may interact with certain medications, particularly blood thinners and drugs metabolized by specific liver enzymes. The interaction data is not comprehensive — the clinical evidence base is simply not large enough to fully map drug interactions. This makes physician consultation important for anyone on prescription medications.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1F14] mb-1.5">{title}</h3>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
          <strong className="text-[#0D1F14]">Important:</strong> ShilajitPrice.com is not affiliated with Memorial Sloan Kettering. We are summarizing their publicly available integrative medicine database based on its general documented content. We do not claim MSK endorses any product, brand, or purchasing decision. For MSK's current assessment, consult their database directly at mskcc.org.
        </div>
      </section>

      {/* 3. Heavy Metals Question */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">The Heavy Metals Question: What the Lab Data Actually Shows</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          MSK's heavy metals concern is the most actionable safety issue in the shilajit category — and it is also the most directly addressable. The risk is real and product-specific, not universal. The same analytical chemistry that makes heavy metal toxicity a documented risk in unverified shilajit is also the tool that verified brands use to confirm their products are clean.
        </p>

        <h3 className="text-lg font-bold text-[#0D1F14] mb-3">What a COA Heavy Metals Panel Tests For</h3>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          A Certificate of Analysis (COA) from an accredited independent laboratory includes a heavy metals panel that tests for four primary contaminants — lead (Pb), mercury (Hg), arsenic (As), and cadmium (Cd) — using ICP-MS (Inductively Coupled Plasma Mass Spectrometry), the industry standard for trace metal quantification. A rigorous COA discloses:
        </p>
        <ul className="space-y-2 mb-5">
          {[
            "The name of the testing laboratory (ISO/IEC 17025 accreditation is the highest standard)",
            "Actual measured values for each metal in parts per million (ppm) or micrograms per gram (μg/g) — not just 'pass/fail'",
            "The method used (ICP-MS is preferred for sensitivity and accuracy)",
            "Comparison against established limits (FDA action levels for dietary supplements, USP <232> guidelines, or California Proposition 65 thresholds)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-[#4A6358]">
              <span className="text-[#10B981] font-bold shrink-0 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-[#0D1F14] mb-3">Brands With Verified Heavy Metals Testing</h3>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The following brands in our database have published COAs that include named third-party laboratories and documented heavy metals testing. We present this data as a resource — not as a medical endorsement, and not as a claim that any product is approved or evaluated by Memorial Sloan Kettering or any medical institution.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {[
            {
              brand: "Black Lotus Shilajit",
              source: "Altai Mountains, Siberia",
              lab: "IAS Laboratories, Phoenix, AZ",
              metals: "Full panel — lead, mercury, arsenic, cadmium. Actual values published.",
              note: "DBP verified · Cold-processed",
              color: "border-amber-200 bg-amber-50",
              headColor: "text-amber-700",
            },
            {
              brand: "Natural Shilajit",
              source: "UNESCO Altai Mountains, Siberia",
              lab: "ISO/IEC-accredited US laboratories",
              metals: "ICP-MS and LC-MS methodology. Full panel with published results.",
              note: "DBP verified · UNESCO source region",
              color: "border-teal-200 bg-teal-50",
              headColor: "text-teal-700",
            },
            {
              brand: "Pure Himalayan Shilajit",
              source: "Himalayan Mountains, ~16,000 ft elevation",
              lab: "ISO/IEC 17025 accredited US laboratory",
              metals: "Full panel. ISO/IEC 17025 is the highest international testing accreditation standard.",
              note: "Highest accreditation standard in our database",
              color: "border-blue-200 bg-blue-50",
              headColor: "text-blue-700",
            },
            {
              brand: "Pürblack Live Resin",
              source: "Multi-region: Caucasus, Siberia, Himalayas",
              lab: "US pharmaceutical-grade manufacturing facility + 3rd-party COA",
              metals: "Full heavy metals panel verified. Manufactured under pharmaceutical GMP standards.",
              note: "5 US Patents · Made in USA",
              color: "border-violet-200 bg-violet-50",
              headColor: "text-violet-700",
            },
          ].map(({ brand, source, lab, metals, note, color, headColor }) => (
            <div key={brand} className={`bg-white border-2 ${color} rounded-2xl p-4 shadow-sm`}>
              <div className={`text-[9px] font-bold uppercase tracking-widest ${headColor} mb-1.5`}>Lab-Verified</div>
              <div className="text-sm font-extrabold text-[#0D1F14] mb-2">{brand}</div>
              <div className="space-y-1.5 text-[10px] text-[#4A6358]">
                <div><span className="font-semibold text-[#0D1F14]">Source:</span> {source}</div>
                <div><span className="font-semibold text-[#0D1F14]">Testing lab:</span> {lab}</div>
                <div><span className="font-semibold text-[#0D1F14]">Metals panel:</span> {metals}</div>
                <div className="text-[9px] text-[#7BA899] italic">{note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
          Full COA data, lab names, and documented test results for these brands are available on our{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline font-semibold">Lab Data &amp; COAs page →</Link>{" "}
          For a side-by-side breakdown of actual batch-specific numbers,{" "}
          <Link href="/blog/shilajit-heavy-metals-comparison" className="text-[#10B981] hover:underline font-semibold">see our full heavy metals comparison across all four brands →</Link>{" "}
          None of these brands have been evaluated, endorsed, or approved by Memorial Sloan Kettering Cancer Center or any other medical institution. Third-party COA testing is a quality verification tool — it is not a medical safety clearance.
        </div>
      </section>

      {/* 4. Pregnancy Safety */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Is Shilajit Safe During Pregnancy?</h2>

        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 mb-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0">🚫</span>
            <div>
              <p className="text-sm font-bold text-red-800 mb-1">Standard guidance: Avoid during pregnancy and breastfeeding</p>
              <p className="text-xs text-red-700 leading-relaxed">
                Memorial Sloan Kettering's integrative medicine database, along with most mainstream integrative medicine sources, advises against shilajit use during pregnancy and breastfeeding. If you are pregnant or breastfeeding, do not take shilajit without explicit approval from your physician or OB-GYN.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The precautionary recommendation against shilajit during pregnancy is based on the absence of safety data — not on evidence of confirmed harm. No clinical trials have enrolled pregnant women to study shilajit's effects, which means there is simply no evidence base from which to establish a safe dose or rule out risk. In the absence of data, the standard medical position is to err on the side of caution, particularly for a supplement that carries documented heavy metal contamination risk in lower-quality products.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Shilajit is also not a nutrient with a known deficiency state — it is not comparable to iron or folic acid where the benefit of supplementation during pregnancy is established. The case for taking a supplement with uncertain safety data and no established pregnancy benefit is weak. The case for avoiding it is straightforward.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          Women who are postpartum, not breastfeeding, and interested in shilajit for energy or wellness support should still consult a physician before starting — particularly if they are on any medications or have underlying health conditions.
          For a deeper look at the evidence — including what NCCIH says, why heavy metals matter specifically during pregnancy, and what alternatives exist — see{" "}
          <Link href="/blog/shilajit-pregnancy-breastfeeding" className="text-[#10B981] hover:underline font-semibold">our full guide to shilajit safety during pregnancy and breastfeeding</Link>.
        </p>
      </section>

      {/* 5. Who Should Be Most Cautious */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Who Should Be Most Cautious About Shilajit</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          Pregnancy and breastfeeding represent the highest-caution scenario, but several other groups should either avoid shilajit entirely or consult a physician before use:
        </p>

        <div className="space-y-3">
          {[
            {
              group: "Pregnant or Breastfeeding Women",
              risk: "High — Avoid",
              detail: "No safety data exists for these populations. The standard recommendation from MSK and most integrative medicine sources is to avoid use entirely during pregnancy and breastfeeding.",
              riskColor: "bg-red-100 text-red-700 ring-red-200",
            },
            {
              group: "People with Hemochromatosis or Iron Overload",
              risk: "High — Avoid",
              detail: "Shilajit has demonstrated iron-mobilizing properties and may increase iron absorption. For individuals with hereditary hemochromatosis or other iron overload conditions, this is a meaningful risk. See our dedicated section on shilajit and iron overload in our side effects guide.",
              riskColor: "bg-red-100 text-red-700 ring-red-200",
            },
            {
              group: "People on Blood Thinners or Anticoagulants",
              risk: "Moderate — Consult Physician",
              detail: "Shilajit may interact with anticoagulant or antiplatelet medications. The interaction data is limited, but the potential for altered coagulation warrants physician consultation before use.",
              riskColor: "bg-amber-100 text-amber-700 ring-amber-200",
            },
            {
              group: "People with Chronic Kidney Disease",
              risk: "Moderate — Consult Physician",
              detail: "Some compounds in shilajit are renally excreted. Individuals with impaired kidney function may have reduced clearance. Additionally, uric acid elevation has been noted in some animal studies — relevant for people with gout or uric acid-related kidney issues.",
              riskColor: "bg-amber-100 text-amber-700 ring-amber-200",
            },
            {
              group: "People with Active Liver Conditions",
              risk: "Moderate — Consult Physician",
              detail: "Hepatic metabolism of shilajit compounds is not fully characterized. Anyone with hepatitis, cirrhosis, or other active liver conditions should consult a physician before adding any new supplement.",
              riskColor: "bg-amber-100 text-amber-700 ring-amber-200",
            },
            {
              group: "Cancer Patients on Active Treatment",
              risk: "Consult Oncologist",
              detail: "MSK specifically notes that shilajit should not be used as a cancer treatment. Cancer patients receiving chemotherapy, radiation, or targeted therapies should discuss any supplements with their oncologist before use, as interactions are possible.",
              riskColor: "bg-amber-100 text-amber-700 ring-amber-200",
            },
          ].map(({ group, risk, detail, riskColor }) => (
            <div key={group} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <span className="text-sm font-bold text-[#0D1F14]">{group}</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold ring-1 ${riskColor}`}>{risk}</span>
              </div>
              <p className="text-xs text-[#4A6358] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#4A6358] leading-relaxed mt-5">
          Healthy adults who do not fall into these categories, and who are not on prescription medications, generally represent a lower-risk population for shilajit use — provided they choose a product with verified heavy metals testing. Even so, consulting a physician before starting a new supplement is always reasonable practice.
        </p>
      </section>

      {/* 6. How to Choose */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">How to Choose a Shilajit That Addresses These Concerns</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          MSK's concerns about shilajit largely track the quality-control gap in the market — they apply most sharply to products with no third-party testing and no published COA. A buyer who chooses a rigorously tested brand with publicly accessible lab data addresses the heavy metals concern directly. Here is what to look for:
        </p>

        <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm mb-5">
          <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-5 py-3">
            <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Buyer's safety checklist</p>
          </div>
          <div className="divide-y divide-[#D1EDD8]">
            {[
              {
                step: "1",
                label: "Find the COA — not just a claim",
                detail: "A brand claiming 'third-party tested' means nothing without a publicly accessible Certificate of Analysis. The document should be linked directly from the brand's website and should include the testing lab's name, the specific test panel, and actual measured values.",
              },
              {
                step: "2",
                label: "Verify the lab is named and accredited",
                detail: "Anonymous 'third-party labs' are a red flag. Look for labs with ISO/IEC 17025 accreditation — the international standard for testing and calibration laboratories. IAS Laboratories (Phoenix, AZ) and similar certified US labs meet this bar.",
              },
              {
                step: "3",
                label: "Check for actual heavy metals values — not just 'pass'",
                detail: "A COA that says 'heavy metals: pass' without listing measured values is not independently verifiable. Trustworthy COAs list the actual measured concentration of lead, mercury, arsenic, and cadmium alongside the reference limit they were compared against.",
              },
              {
                step: "4",
                label: "Confirm the testing method is ICP-MS",
                detail: "Inductively Coupled Plasma Mass Spectrometry (ICP-MS) is the industry standard for trace metal analysis in supplements. It is more sensitive and accurate than older methods like AAS (atomic absorption spectrometry). Prefer brands whose COAs specify ICP-MS methodology.",
              },
              {
                step: "5",
                label: "Evaluate sourcing transparency",
                detail: "A brand that discloses the geographic source (e.g., Altai Mountains, Himalayan Mountains above 14,000 ft), altitude, and purification method is more accountable than one that says 'premium mountain source.' Specific claims are verifiable; vague claims are not.",
              },
            ].map(({ step, label, detail }) => (
              <div key={step} className="flex items-start gap-4 px-5 py-4">
                <div className="w-7 h-7 rounded-full bg-emerald-50 ring-1 ring-emerald-200 flex items-center justify-center text-xs font-black text-emerald-700 shrink-0">
                  {step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D1F14] mb-0.5">{label}</p>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#4A6358] leading-relaxed">
          Our{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline">Lab Data &amp; COAs page</Link>{" "}
          aggregates the available COA information for 80+ products in our database, and our{" "}
          <Link href="/methodology" className="text-[#10B981] hover:underline">scoring methodology</Link>{" "}
          explains how COA quality, heavy metals testing, and sourcing transparency each contribute to tier ratings. S-tier brands must publish a full COA from a named, accredited lab with actual heavy metals values — this threshold directly addresses the contamination risk MSK identifies.
        </p>
      </section>

      {/* Affiliate CTA block — all four partners */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-3">Lab-Verified Brands in Our Database</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          The following brands have each published COAs with named third-party laboratories and full heavy metals panels. We present them as examples of products that address the verification concerns MSK raises — not as medically approved or MSK-endorsed products. Always consult a physician before starting any supplement.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              brand: "Black Lotus Shilajit",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              tagline: "Highest verified fulvic acid · Altai Mountains, Siberia",
              bullets: ["IAS Laboratories, Phoenix AZ — full panel COA", "64.51% FA (resin) / 74.30% FA (caps) · Batch 93 COA · DBP verified", "$1.23/g · Free shipping"],
              href: AFFILIATE_BL,
              btnColor: "bg-[#182B1F] hover:bg-[#10B981]",
              productName: "Black Lotus Shilajit",
            },
            {
              brand: "Pure Himalayan Shilajit",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              tagline: "ISO/IEC 17025 accredited lab · Himalayan Mountains 16,000 ft",
              bullets: ["Highest testing accreditation standard in our database", "Full COA with heavy metals panel", "60% fulvic acid · No fillers or additives"],
              href: AFFILIATE_PH,
              btnColor: "bg-[#182B1F] hover:bg-amber-500",
              productName: "Pure Himalayan Shilajit",
            },
            {
              brand: "Natural Shilajit",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              tagline: "UNESCO Altai source · ICP-MS + LC-MS + FTIR tested",
              bullets: ["ISO/IEC-accredited US laboratories", "DBP verified · Full heavy metals panel", "Resin (20g) from $49.99"],
              href: AFFILIATE_NS,
              btnColor: "bg-[#182B1F] hover:bg-teal-600",
              productName: "Natural Shilajit",
            },
            {
              brand: "Pürblack Live Resin",
              tier: "A",
              tierColor: "bg-emerald-100 text-emerald-800 ring-emerald-300",
              tagline: "5 US Patents · Pharmaceutical GMP · Made in USA",
              bullets: ["US pharmaceutical-grade facility + 3rd-party COA", "Multi-region: Caucasus, Siberia, Himalayas", "True Gold 30g · $3.11/g"],
              href: AFFILIATE_PB,
              btnColor: "bg-[#182B1F] hover:bg-violet-600",
              productName: "Purblack Live Resin",
            },
          ].map(({ brand, tier, tierColor, tagline, bullets, href, btnColor, productName }) => (
            <div key={brand} className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-4 py-3 flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full ring-1 flex items-center justify-center text-xs font-black shrink-0 ${tierColor}`}>{tier}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-extrabold text-[#0D1F14] truncate">{brand}</div>
                  <div className="text-[9px] text-[#7BA899] truncate">{tagline}</div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1.5 mb-4">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[11px] text-[#4A6358]">
                      <span className="text-[#10B981] shrink-0 font-bold">✓</span>{b}
                    </li>
                  ))}
                </ul>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  data-click-location="blog_cta"
                  data-product-name={productName}
                  className={`flex items-center justify-center w-full py-2.5 rounded-full text-white font-bold text-xs transition-colors shadow-sm ${btnColor}`}
                >
                  View {brand} →
                </a>
                <p className="text-center text-[9px] text-[#7BA899] mt-1.5">Affiliate link — commission at no extra cost</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#7BA899] leading-relaxed mt-4 text-center">
          None of these brands are evaluated, endorsed, or approved by Memorial Sloan Kettering Cancer Center or any medical institution. COA data is sourced from each brand's published documentation. Always consult your healthcare provider before starting any supplement.
        </p>
      </section>

      {/* 7. Conclusion */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Conclusion: MSK Gets It Right — and So Does the Data</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Memorial Sloan Kettering's concerns about shilajit are legitimate. Heavy metal contamination is a documented risk in the unregulated supplement market. Human clinical evidence for shilajit is preliminary. Shilajit is not FDA approved. And there is insufficient data to support use during pregnancy. Each of these statements is accurate, and anyone researching shilajit should understand them clearly before purchasing.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The practical nuance is that MSK's concerns apply most sharply to the low-quality end of the market — products with no COA, no named testing laboratory, no disclosed source, and no accountability for what actually goes into the jar. These products exist in abundance, particularly on Amazon, and they are the category that makes headlines when heavy metal toxicity occurs.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          For healthy adults who are not pregnant, not on interacting medications, and not in a high-risk group, choosing a shilajit brand with a verified COA from an accredited US laboratory directly addresses the primary safety concern MSK documents. It does not eliminate all uncertainty — the clinical evidence base is still limited, and long-term human safety data is still sparse. But it does reduce the risk that is most actionable: buying a product contaminated with heavy metals.
        </p>
      </section>
    </BlogPostLayout>
  );
}
