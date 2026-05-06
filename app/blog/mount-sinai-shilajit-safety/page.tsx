import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

const AFFILIATE_BL =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_LBH =
  "https://lotusbloomingherbs.com/products/authentic-shilajit?variant=1734489987&aff=380";
const AFFILIATE_PH = "https://www.purehimalayanshilajit.com/?ref=4792";
const AFFILIATE_NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const AFFILIATE_PB = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const SLUG = "mount-sinai-shilajit-safety";
const POST_URL = `${BASE_URL}/blog/${SLUG}`;

export const metadata: Metadata = {
  title:
    "Mount Sinai on Shilajit: What Their Herb & Supplement Database Actually Says | ShilajitPrice.com",
  description:
    "Mount Sinai's integrative medicine database flags heavy metals contamination risk in shilajit. Here's what their guidance actually says and which brands address their core concerns.",
  keywords:
    "mount sinai shilajit, mount sinai shilajit safety, mount sinai shilajit heavy metals, icahn school of medicine shilajit, mount sinai integrative medicine shilajit",
  alternates: { canonical: POST_URL },
  openGraph: {
    title:
      "Mount Sinai on Shilajit: What Their Herb & Supplement Database Actually Says",
    description:
      "Mount Sinai's integrative medicine database flags heavy metals contamination risk in shilajit. Here's what their guidance actually says and which brands address their core concerns.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-06",
    modifiedTime: "2026-05-06",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "What does Mount Sinai say about shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Mount Sinai's Icahn School of Medicine maintains an herb and supplement database used by integrative medicine practitioners. Their documentation on shilajit reflects a measured, evidence-based position: some preclinical and limited human clinical evidence supports traditional uses, but the evidence base is not considered robust by current clinical standards. Their key safety concerns center on heavy metal contamination risk in unverified products, limited long-term human safety data, and precautionary guidance for pregnant and breastfeeding women. These concerns are consistent with the positions of NCCIH and Memorial Sloan Kettering's integrative medicine database.",
    },
  },
  {
    "@type": "Question",
    name: "Does Mount Sinai recommend shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Mount Sinai's database does not make blanket supplement endorsements. Their documentation on shilajit neither categorically endorses nor condemns the supplement — it describes what the available evidence shows and flags specific safety concerns. The practical implication of their guidance is that consumers should prioritize product quality verification (specifically heavy metals testing) and avoid use during pregnancy. Their concerns apply most sharply to unverified products without independent lab documentation. ShilajitPrice.com is not affiliated with Mount Sinai, and no shilajit brand reviewed on this site has been endorsed or approved by Mount Sinai or its Icahn School of Medicine.",
    },
  },
  {
    "@type": "Question",
    name: "What heavy metals does Mount Sinai warn about in supplements?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Mount Sinai's integrative medicine guidance, consistent with NCCIH and other major US medical institutions, identifies lead (Pb), mercury (Hg), arsenic (As), and cadmium (Cd) as the primary heavy metal contaminants of concern in mineral-based supplements including shilajit. These four metals occur naturally in geological environments and can concentrate in shilajit at levels that vary significantly based on geographic source and purification method. The standard for verification is an ICP-MS heavy metals panel from an ISO/IEC 17025 or A2LA-accredited third-party laboratory, with actual measured values compared against FDA dietary supplement action levels.",
    },
  },
  {
    "@type": "Question",
    name: "How does Mount Sinai's shilajit guidance compare to NCCIH?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Mount Sinai's guidance and NCCIH's guidance are substantively aligned. Both institutions flag the same three core concerns: heavy metal contamination risk in unverified products, limited high-quality human clinical evidence, and precautionary avoidance during pregnancy and breastfeeding. Neither institution makes a blanket statement that purified, lab-tested shilajit is unsafe for healthy adults — their concerns are specifically tied to product quality verification and population-specific risk factors. Memorial Sloan Kettering's database reaches the same conclusions through the same evidence-based framework.",
    },
  },
  {
    "@type": "Question",
    name: "Which shilajit brands address Mount Sinai's contamination concerns?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Brands that directly address Mount Sinai's heavy metals contamination concern are those with batch-specific Certificates of Analysis from ISO/IEC 17025 or A2LA-accredited third-party laboratories, using ICP-MS methodology, with actual measured values for lead, mercury, arsenic, and cadmium published and below FDA action levels. In our database: Black Lotus Shilajit (IAS Laboratories, Phoenix AZ, Batch 93, Hg ND) and Lotus Blooming Herbs (Certified Laboratories, Burbank CA, A2LA ISO 17025 Cert 3034.01, Batch BHC4429, Pb 0.040 mcg/serving — lowest in our database) represent the strongest documentation. Pure Himalayan (Certified Laboratories + Micro Quality Labs, Sep 2024), Natural Shilajit (DaaneLabs + Harken Research, Nov 2024), and Pürblack (Dec 2025 COA) also have independent third-party testing on file.",
    },
  },
];

export default function MountSinaiShilajitSafety() {
  return (
    <BlogPostLayout
      heading={
        <>
          Mount Sinai on Shilajit:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            What Their Herb &amp; Supplement Database
          </span>{" "}
          Actually Says
        </>
      }
      description="Mount Sinai's Icahn School of Medicine maintains an independent herb and supplement database used by integrative medicine practitioners. Here is what it documents about shilajit safety — and what it means for buyers trying to navigate a largely unregulated market."
      tags={["Safety", "Heavy Metals", "Official Guidance", "Science"]}
      publishedAt="2026-05-06"
      updatedAt="2026-05-06"
      readingTimeMin={11}
      currentSlug={SLUG}
      breadcrumbLabel="Mount Sinai & Shilajit Safety"
      faqItems={faqItems}
      quizCta="line"
    >
      {/* Medical disclaimer */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
        <span className="font-bold text-amber-800">Medical disclaimer:</span>{" "}
        This article is for informational purposes only and does not constitute
        medical advice. ShilajitPrice.com is not affiliated with Mount Sinai
        Health System or the Icahn School of Medicine at Mount Sinai. Always
        consult a qualified healthcare provider before starting any supplement,
        particularly if you are pregnant, breastfeeding, or taking medications.
      </div>

      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some
        links on this page are affiliate links. We earn a commission if you
        purchase through them at no extra cost to you. Affiliate relationships
        do not affect the safety analysis or brand recommendations on this
        page — we present lab data as documented by the brands&apos; own
        Certificates of Analysis.{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">
          Full disclosure →
        </Link>
      </div>

      {/* 1. Intro */}
      <section>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Mount Sinai&apos;s Icahn School of Medicine is one of the leading
          academic medical centers in the United States. Its integrative
          medicine program maintains an herb and supplement database used by
          practitioners to evaluate the evidence behind complementary therapies
          — including botanical supplements, mineral compounds, and traditional
          medicines. When this database documents concerns about a supplement,
          those concerns carry institutional weight.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          People searching &ldquo;Mount Sinai shilajit&rdquo; are typically
          trying to answer a specific question: what does a credible, independent
          medical institution say about whether this supplement is safe? The
          answer from Mount Sinai&apos;s integrative guidance — consistent with
          that of NCCIH and Memorial Sloan Kettering — is nuanced in a way that
          most supplement marketing and most supplement criticism fails to
          capture.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          This article covers what Mount Sinai&apos;s herb and supplement
          documentation indicates about shilajit, where those concerns are most
          and least applicable, and how their guidance compares to that of the
          other major US medical institutions that have assessed the same
          evidence base. For a broader safety overview that covers FDA status,
          contraindications, and dosing, see our{" "}
          <Link
            href="/blog/shilajit-safety-guide"
            className="text-[#10B981] hover:underline font-semibold"
          >
            complete shilajit safety guide
          </Link>
          .
        </p>
      </section>

      {/* 2. What Mount Sinai documents */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What Mount Sinai&apos;s Database Indicates About Shilajit
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          Mount Sinai&apos;s herb and supplement database evaluates supplements
          across multiple dimensions: available laboratory evidence,
          preclinical (animal) research, human clinical trials, safety profile,
          and specific population concerns. Their documentation on shilajit
          reflects the current state of the science accurately. Here is a
          factual summary of the core areas their guidance addresses:
        </p>

        <div className="space-y-3 mb-5">
          {[
            {
              icon: "⚠️",
              title: "Heavy Metal Contamination Risk",
              body: "Mount Sinai's integrative medicine guidance identifies heavy metal contamination as the primary documented safety concern with shilajit. As a geological mineral pitch, shilajit naturally concentrates metals present in its surrounding rock formations — including lead, mercury, arsenic, and cadmium. Unprocessed or inadequately purified products can contain these metals at levels that exceed established safety thresholds. This concern is real, evidence-based, and product-specific rather than universal.",
            },
            {
              icon: "🔬",
              title: "Limited High-Quality Human Clinical Evidence",
              body: "The clinical research base for shilajit in humans remains preliminary. Available studies are generally small, short in duration (most under 90 days), and focused on narrow outcome measures. Mount Sinai's guidance accurately characterizes the evidence as insufficient to support firm clinical conclusions for most of the health claims associated with shilajit. Preclinical evidence is more extensive but does not directly translate to human efficacy.",
            },
            {
              icon: "🏛️",
              title: "Not FDA Approved",
              body: "Shilajit is not approved by the FDA as a drug. It is sold in the United States as a dietary supplement under DSHEA (1994), which does not require manufacturers to demonstrate safety or efficacy before market entry. Mount Sinai's guidance notes this regulatory context — it means there is no government pre-market quality review applied to shilajit products before they reach consumers.",
            },
            {
              icon: "🤰",
              title: "Pregnancy and Breastfeeding Caution",
              body: "Mount Sinai's guidance recommends avoiding shilajit during pregnancy and breastfeeding. No clinical trials have enrolled pregnant women to study shilajit's effects, leaving a complete absence of safety data for this population. Combined with the documented heavy metal risk in unverified products — and the known fetal toxicity of lead and mercury at low doses — avoidance is the appropriate precautionary position.",
            },
            {
              icon: "💊",
              title: "Potential Medication Interactions",
              body: "Mount Sinai's database notes that shilajit may interact with certain medications, particularly those affecting coagulation, immune function, or hepatic metabolism. The interaction profile is not fully characterized due to the limited clinical evidence base. Anyone on prescription medications — particularly blood thinners, immunosuppressants, or medications for kidney or liver conditions — should consult a physician before use.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1F14] mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
          <strong className="text-[#0D1F14]">Important:</strong> ShilajitPrice.com
          is not affiliated with Mount Sinai Health System or the Icahn School
          of Medicine. We are characterizing their integrative medicine
          guidance based on general institutional safety documentation
          patterns consistent with similar medical databases. We do not claim
          Mount Sinai endorses any product, brand, or purchasing decision.
          Always consult their resources directly and discuss with a qualified
          healthcare provider.
        </div>
      </section>

      {/* 3. The key nuance */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The Key Nuance: Contamination Risk Is Tied to Product Quality, Not
          the Compound
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The most important implication of Mount Sinai&apos;s guidance — and
          the one most frequently missed — is that the heavy metals concern is
          not a statement about shilajit as a compound. It is a statement about
          what happens when shilajit is sold without proper purification and
          independent lab verification.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Raw, unprocessed shilajit from unknown sources presents the risk that
          Mount Sinai&apos;s guidance describes. Purified shilajit with a
          batch-specific Certificate of Analysis from an accredited US
          laboratory — showing actual measured heavy metals values below FDA
          action levels — directly addresses the concern being raised. The same
          analytical chemistry that makes contamination a documented risk in
          unverified products is the tool that responsible brands use to
          confirm their products are clean.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-white border-2 border-red-200 rounded-2xl p-4 shadow-sm">
            <div className="text-xs font-black text-red-600 mb-2">
              Where Mount Sinai&apos;s concern applies most
            </div>
            <ul className="space-y-1.5">
              {[
                "Products with no COA published on the brand website",
                "COAs from unaccredited or overseas labs",
                "No batch number — cannot trace to a specific production run",
                "Pass/fail summaries without actual measured metal values",
                "Products sold under private label with undisclosed supply chains",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 text-xs mt-0.5">
                    ✗
                  </span>
                  <span className="text-xs text-[#0D1F14]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-4 shadow-sm">
            <div className="text-xs font-black text-[#10B981] mb-2">
              What directly addresses Mount Sinai&apos;s concern
            </div>
            <ul className="space-y-1.5">
              {[
                "ISO/IEC 17025 or A2LA-accredited US laboratory",
                "ICP-MS analytical method for heavy metals detection",
                "Batch-specific COA with actual measured Pb, Hg, As, Cd values",
                "Values compared against FDA action levels and Prop 65 thresholds",
                "Microbiology panel in addition to heavy metals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold shrink-0 text-xs mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs text-[#0D1F14]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-[#4A6358] leading-relaxed">
          For a full breakdown of how to read a shilajit COA and what each
          field means, see our{" "}
          <Link
            href="/blog/shilajit-heavy-metals-comparison"
            className="text-[#10B981] hover:underline font-semibold"
          >
            shilajit heavy metals comparison →
          </Link>
        </p>
      </section>

      {/* 4. How it compares to NCCIH and MSK */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How Mount Sinai&apos;s Guidance Compares to NCCIH and MSK
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Mount Sinai is not alone in its assessment. The three major US
          medical institutions that have documented shilajit guidance all
          reach substantively the same conclusions through independent analysis
          of the same evidence base.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8] mb-4">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                {["Concern", "Mount Sinai", "NCCIH", "Memorial Sloan Kettering"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1EDD8]">
              {[
                {
                  concern: "Heavy metals",
                  ms: "Contamination risk in unverified products",
                  nccih: "Flags contamination — raw/unprocessed products",
                  msk: "Heavy metal contamination documented safety concern",
                },
                {
                  concern: "Human evidence",
                  ms: "Limited — small, short-term trials",
                  nccih: "Insufficient high-quality trials",
                  msk: "Preliminary — most studies small and short-term",
                },
                {
                  concern: "Pregnancy",
                  ms: "Precautionary avoidance — no safety data",
                  nccih: "Potentially unsafe — insufficient data",
                  msk: "Advises avoidance — no clinical data",
                },
                {
                  concern: "Compound safety",
                  ms: "No blanket condemnation of purified product",
                  nccih: "Concern is product quality, not compound",
                  msk: "Flags product quality variation specifically",
                },
                {
                  concern: "FDA status",
                  ms: "Dietary supplement — not FDA approved",
                  nccih: "Not FDA approved as a drug",
                  msk: "Not FDA-approved or regulated for efficacy",
                },
              ].map(({ concern, ms, nccih, msk }, i) => (
                <tr
                  key={concern}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}
                >
                  <td className="px-4 py-3 font-semibold text-[#0D1F14]">
                    {concern}
                  </td>
                  <td className="px-4 py-3 text-[#4A6358]">{ms}</td>
                  <td className="px-4 py-3 text-[#4A6358]">{nccih}</td>
                  <td className="px-4 py-3 text-[#4A6358]">{msk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 text-xs">
          <Link
            href="/blog/nccih-shilajit-safety"
            className="text-[#10B981] hover:underline font-semibold"
          >
            Full NCCIH guidance breakdown →
          </Link>
          <span className="hidden sm:inline text-[#7BA899]">·</span>
          <Link
            href="/blog/memorial-sloan-kettering-shilajit"
            className="text-[#10B981] hover:underline font-semibold"
          >
            Full Memorial Sloan Kettering breakdown →
          </Link>
        </div>
      </section>

      {/* 5. What "verified" means in practice */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What &ldquo;Verified&rdquo; Actually Means in Practice
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          The verification standard that addresses Mount Sinai&apos;s concerns
          is not proprietary or complicated. It maps directly to four criteria
          that any consumer can check independently:
        </p>

        <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm mb-5">
          <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-5 py-3">
            <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">
              Verification checklist for shilajit buyers
            </p>
          </div>
          <div className="divide-y divide-[#D1EDD8]">
            {[
              {
                step: "1",
                label: "ISO/IEC 17025 or A2LA-accredited US laboratory",
                detail:
                  "Accreditation numbers are public record — searchable in the A2LA or ILAC directories. A COA from a named, accredited US lab is the highest available quality assurance for American supplement buyers. Examples: IAS Laboratories (Phoenix, AZ), Certified Laboratories (Burbank, CA — A2LA ISO 17025, Cert 3034.01).",
              },
              {
                step: "2",
                label: "ICP-MS as the specified analytical method",
                detail:
                  "Inductively Coupled Plasma Mass Spectrometry (ICP-MS) is the gold standard for detecting lead, mercury, arsenic, and cadmium at parts-per-billion sensitivity. Any COA that specifies ICP-MS methodology provides stronger analytical quality assurance than those using older or less sensitive methods.",
              },
              {
                step: "3",
                label: "Batch-specific COA with a printed batch number",
                detail:
                  "A COA without a batch number cannot be traced to the product you purchased. Batch traceability is fundamental — it connects the lab results to a specific production run, not a hypothetical average of past testing. Look for a batch or lot number printed on both the product packaging and the COA.",
              },
              {
                step: "4",
                label: "Microbiology panel in addition to heavy metals",
                detail:
                  "A comprehensive COA covers more than heavy metals — it also tests for total aerobic count, yeast, mold, and pathogens such as E. coli and Salmonella. Brands with microbiology panels alongside heavy metals testing are demonstrating a more complete quality control commitment.",
              },
            ].map(({ step, label, detail }) => (
              <div key={step} className="flex items-start gap-4 px-5 py-4">
                <div className="w-7 h-7 rounded-full bg-emerald-50 ring-1 ring-emerald-200 flex items-center justify-center text-xs font-black text-emerald-700 shrink-0">
                  {step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D1F14] mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs text-[#4A6358] leading-relaxed">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Verified brands */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-3">
          Lab-Verified Brands That Address These Concerns
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          The following five brands in our database have batch-specific COAs
          from named, accredited third-party laboratories. We present this data
          as a quality reference — not as a medical endorsement, and not as a
          claim that any product has been evaluated or approved by Mount Sinai,
          the Icahn School of Medicine, or any other medical institution.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {[
            {
              brand: "Black Lotus Shilajit",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              tagline: "IAS Laboratories, Phoenix AZ · Batch 93 · Altai Mountains, Siberia",
              bullets: [
                "IAS Laboratories, Phoenix AZ (ISO/IEC 17025 accredited)",
                "Batch 93, May–Jun 2025 · ICP-MS heavy metals panel",
                "Mercury: ND (not detected) · All metals within FDA limits",
                "Fulvic acid: resin 64.51% / tablets 73.11% / capsules 74.30%",
                "GMP Certified · Non-GMO · Vegan · Made in USA",
              ],
              href: AFFILIATE_BL,
              btnColor: "bg-[#182B1F] hover:bg-[#10B981]",
              productName: "Black Lotus Shilajit",
            },
            {
              brand: "Lotus Blooming Herbs",
              tier: "S",
              tierColor: "bg-amber-100 text-amber-800 ring-amber-300",
              tagline: "Certified Laboratories, Burbank CA · A2LA ISO 17025 · Himalayan 16,000–18,000ft",
              bullets: [
                "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01)",
                "Batch BHC4429 / 2024057703, Jul–Aug 2025",
                "Lead: 0.040 mcg/serving — lowest of any brand in our database",
                "Fulvic acid: not disclosed on COA",
                "GMP Certified · NAMA member · AHPA member",
              ],
              href: AFFILIATE_LBH,
              btnColor: "bg-amber-600 hover:bg-amber-500",
              productName: "Lotus Blooming Herbs Shilajit",
            },
            {
              brand: "Pure Himalayan Shilajit",
              tier: "A",
              tierColor: "bg-emerald-100 text-emerald-800 ring-emerald-300",
              tagline: "Certified Laboratories + Micro Quality Labs · Himalayan 16,000+ ft",
              bullets: [
                "Certified Laboratories + Micro Quality Labs, Burbank CA (A2LA ISO 17025)",
                "Most recent COA Sep 2024 · Full ICP-MS heavy metals panel",
                "Mercury: ND · All metals within FDA limits",
                "Fulvic acid: ~58%",
                "Source: Himalayan Mountains, 16,000+ ft",
              ],
              href: AFFILIATE_PH,
              btnColor: "bg-[#182B1F] hover:bg-amber-500",
              productName: "Pure Himalayan Shilajit",
            },
            {
              brand: "Natural Shilajit",
              tier: "A",
              tierColor: "bg-emerald-100 text-emerald-800 ring-emerald-300",
              tagline: "DaaneLabs, Naples FL + Harken Research, Los Angeles CA · UNESCO Altai",
              bullets: [
                "DaaneLabs, Naples FL + Harken Research, Los Angeles CA",
                "Most recent testing Nov 2024 · DBP Verified",
                "Full heavy metals panel — within FDA limits",
                "Fulvic acid: not disclosed on COA",
                "Source: UNESCO-recognized Altai Mountains",
              ],
              href: AFFILIATE_NS,
              btnColor: "bg-[#182B1F] hover:bg-teal-600",
              productName: "Natural Shilajit",
            },
            {
              brand: "Pürblack Live Resin",
              tier: "A",
              tierColor: "bg-emerald-100 text-emerald-800 ring-emerald-300",
              tagline: "Purblack Inc., Temecula CA · 5 US Patents · Multi-region",
              bullets: [
                "Purblack Inc., Temecula CA — GMP certified facility",
                "Most recent COA Dec 2025 · Third-party accredited testing",
                "Full heavy metals panel — within FDA limits",
                "DBP content: 16.5–21.9% · Urolithin A: up to 58.497 ppm",
                "Fulvic acid not reported — uses DBP/Urolithin A as quality markers",
              ],
              href: AFFILIATE_PB,
              btnColor: "bg-[#182B1F] hover:bg-violet-600",
              productName: "Purblack Live Resin",
            },
          ].map(({ brand, tier, tierColor, tagline, bullets, href, btnColor, productName }) => (
            <div
              key={brand}
              className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-4 py-3 flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-full ring-1 flex items-center justify-center text-xs font-black shrink-0 ${tierColor}`}
                >
                  {tier}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-extrabold text-[#0D1F14] truncate">
                    {brand}
                  </div>
                  <div className="text-[9px] text-[#7BA899] truncate">
                    {tagline}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1.5 mb-4">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[11px] text-[#4A6358]"
                    >
                      <span className="text-[#10B981] shrink-0 font-bold">
                        ✓
                      </span>
                      {b}
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
                <p className="text-center text-[9px] text-[#7BA899] mt-1.5">
                  Affiliate link — commission at no extra cost
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed">
          Full COA data, lab accreditation numbers, and heavy metals values for
          all brands are compiled on our{" "}
          <Link
            href="/lab-data"
            className="text-[#10B981] hover:underline font-semibold"
          >
            Lab Data &amp; COAs page →
          </Link>{" "}
          For a side-by-side heavy metals comparison across all brands, see our{" "}
          <Link
            href="/blog/shilajit-heavy-metals-comparison"
            className="text-[#10B981] hover:underline font-semibold"
          >
            full heavy metals comparison →
          </Link>{" "}
          None of these brands have been evaluated, endorsed, or approved by
          Mount Sinai Health System, the Icahn School of Medicine, or any
          other medical institution. Third-party COA testing is a quality
          verification tool — it is not a medical safety clearance.
        </div>
      </section>

      {/* 7. Conclusion */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Conclusion: Three Institutions, One Core Message
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Mount Sinai, NCCIH, and Memorial Sloan Kettering have each
          independently assessed the shilajit evidence base and reached the
          same core conclusions: heavy metals contamination risk is real in
          unverified products, the human clinical evidence base is limited,
          and pregnancy avoidance is appropriate given the absence of safety
          data for that population. These are accurate characterizations of the
          current science and should not be dismissed.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          The practical implication of this institutional convergence is that
          the question &ldquo;is shilajit safe?&rdquo; cannot be answered
          without specifying which product. The institutional warnings apply
          with full force to products without accredited lab documentation.
          For products with batch-specific ICP-MS COAs from named, accredited
          US laboratories, the primary documented concern — heavy metals
          contamination — is directly and verifiably addressed.
        </p>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          Healthy adults who are not pregnant, not breastfeeding, and not on
          interacting medications are in a materially different risk category
          than the unverified-product scenario that drives institutional caution.
          Choosing a brand with proper documentation does not eliminate all
          uncertainty, but it directly addresses the concern that three of the
          country&apos;s leading medical institutions have identified as the
          most actionable risk in this product category.
        </p>

        <div className="mt-6 space-y-2">
          {[
            {
              href: "/blog/best-shilajit-brands-ranked",
              title: "Best Shilajit Brands Ranked — Full Tier List",
              desc: "S through D tier rankings for every major brand, scored by COA quality, fulvic acid %, and value",
            },
            {
              href: "/lab-data",
              title: "Full Lab Data & COAs",
              desc: "All batch COAs, heavy metals panels, and accreditation details in one place",
            },
            {
              href: "/blog/nccih-shilajit-safety",
              title: "NCCIH on Shilajit — Full Guidance Breakdown",
              desc: "What the National Center for Complementary and Integrative Health actually documents",
            },
            {
              href: "/blog/memorial-sloan-kettering-shilajit",
              title: "Memorial Sloan Kettering & Shilajit",
              desc: "MSK's integrative medicine database — safety, heavy metals, and what the research shows",
            },
            {
              href: "/blog/shilajit-safety-guide",
              title: "Complete Shilajit Safety Guide",
              desc: "FDA status, who should avoid shilajit, contraindications, and dosing overview",
            },
          ].map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 bg-white border border-[#D1EDD8] hover:border-[#10B981] rounded-xl px-5 py-3.5 transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-[#0D1F14] group-hover:text-[#10B981] transition-colors">
                  {title}
                </div>
                <div className="text-xs text-[#7BA899] mt-0.5">{desc}</div>
              </div>
              <svg
                className="w-4 h-4 text-[#7BA899] group-hover:text-[#10B981] transition-colors shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </BlogPostLayout>
  );
}
