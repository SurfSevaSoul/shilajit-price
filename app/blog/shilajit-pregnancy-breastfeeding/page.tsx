import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

const BL_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const PH_BASE = "https://www.purehimalayanshilajit.com/?ref=4792";
const NS_BASE = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const PB_BASE = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-pregnancy-breastfeeding`;

const title =
  "Shilajit During Pregnancy & Breastfeeding: What the Medical Evidence Actually Says";
const description =
  "Memorial Sloan Kettering, NCCIH, and integrative medicine all flag shilajit as unsafe during pregnancy. Here's what the evidence says and what expecting mothers need to know.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "shilajit pregnancy breastfeeding, is shilajit safe during pregnancy, shilajit while breastfeeding, shilajit pregnancy safety, memorial sloan kettering shilajit pregnancy",
  alternates: { canonical: POST_URL },
  openGraph: {
    title,
    description,
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-03",
    modifiedTime: "2026-05-03",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Is shilajit safe during pregnancy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No established safety data exists for shilajit during pregnancy. Memorial Sloan Kettering Cancer Center's Integrative Medicine database flags shilajit as contraindicated during pregnancy and breastfeeding due to insufficient safety evidence. The National Center for Complementary and Integrative Health (NCCIH) echoes the same position. Additionally, shilajit contains trace heavy metals — including lead — that cross the placental barrier and pose developmental risks to the fetus. The medical consensus is to avoid shilajit entirely during pregnancy until adequate human clinical safety data exists.",
    },
  },
  {
    "@type": "Question",
    name: "Can you take shilajit while breastfeeding?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The same precautionary guidance applies during breastfeeding as during pregnancy. No human clinical trials have studied shilajit use in breastfeeding women, and the safety of fulvic acid compounds and trace minerals — including heavy metals — passing into breast milk is unknown. Memorial Sloan Kettering and the NCCIH both advise against shilajit use while nursing. Until human safety data is available for this population, the standard recommendation from integrative medicine is to avoid shilajit while breastfeeding.",
    },
  },
  {
    "@type": "Question",
    name: "What does Memorial Sloan Kettering say about shilajit and pregnancy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Memorial Sloan Kettering Cancer Center's Integrative Medicine database specifically flags shilajit as contraindicated during pregnancy and breastfeeding. MSK cites two reasons: first, no clinical safety data exists for these populations; second, heavy metal contamination risk is documented in the shilajit category, and heavy metals — particularly lead — are especially harmful during fetal development because they cross the placental barrier. MSK recommends avoiding shilajit during pregnancy and breastfeeding until adequate safety data exists. ShilajitPrice.com is not affiliated with Memorial Sloan Kettering.",
    },
  },
  {
    "@type": "Question",
    name: "Are there any shilajit alternatives safe during pregnancy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not exactly. Standalone fulvic acid supplements — sometimes positioned as an alternative to shilajit — carry the same insufficient safety profile during pregnancy. No human clinical trials have established the safety of fulvic acid supplementation during pregnancy or breastfeeding. Iron, folate, omega-3 fatty acids, and vitamin D have well-established safety profiles during pregnancy and are the evidence-based supplements recommended by OB-GYNs. Shilajit and fulvic acid fall outside this category. After pregnancy and breastfeeding are complete, lab-tested shilajit from verified brands is a safe option for most healthy adults.",
    },
  },
];

export default function ShilajitPregnancyBreastfeeding() {
  return (
    <BlogPostLayout
      heading={
        <>
          Shilajit During{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
            Pregnancy &amp; Breastfeeding
          </span>
          : What the Medical Evidence Actually Says
        </>
      }
      description="Memorial Sloan Kettering, NCCIH, and integrative medicine all flag shilajit as contraindicated during pregnancy and breastfeeding. Here's the full breakdown of what the evidence says and what expecting mothers need to know."
      tags={["Safety", "Pregnancy", "Contraindications", "Women's Health"]}
      publishedAt="2026-05-03"
      updatedAt="2026-05-03"
      readingTimeMin={8}
      currentSlug="shilajit-pregnancy-breastfeeding"
      breadcrumbLabel="Shilajit During Pregnancy & Breastfeeding"
      faqItems={faqItems}
      quizCta="line"
      ctaVariant="pure-himalayan"
    >
      {/* Medical disclaimer */}
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-xs text-red-800 leading-relaxed">
        <span className="font-bold">Medical disclaimer:</span> This article is for informational
        purposes only and does not constitute medical advice. If you are pregnant, breastfeeding,
        or planning a pregnancy, consult your OB-GYN or midwife before making any supplement
        decisions. ShilajitPrice.com is not affiliated with Memorial Sloan Kettering Cancer
        Center or the NCCIH.
      </div>

      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this
        page are affiliate links. We earn a commission at no extra cost to you. Affiliate
        relationships do not influence our safety analysis — this page is a reference guide for
        expecting and nursing mothers, not a product recommendation page.
      </div>

      {/* ── Intro ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The supplement rules change during pregnancy
        </h2>
        <div className="space-y-4 text-sm text-[#4A6358] leading-relaxed">
          <p>
            Shilajit is one of the most researched adaptogens for energy, vitality, and
            mitochondrial support — but pregnancy and breastfeeding represent a category where
            the usual supplement analysis does not apply. The normal framework of weighing
            benefits against a known risk profile breaks down when there is simply no human
            clinical data for the population in question.
          </p>
          <p>
            For shilajit specifically, that data gap is total. No peer-reviewed clinical trial
            has enrolled pregnant or breastfeeding women to study shilajit&apos;s effects,
            safety, or dosing. This is not an oversight — it reflects both the ethical difficulty
            of running supplement trials in pregnant populations and the relative youth of the
            modern shilajit research literature. The result is that institutions like Memorial
            Sloan Kettering Cancer Center and the National Center for Complementary and
            Integrative Health can only say: we don&apos;t have the data, and in the absence of
            data, avoid it.
          </p>
          <p>
            This guide covers what MSK and the NCCIH actually say, why heavy metals make this
            concern more serious than it would be for most supplement categories, what to know
            about fulvic acid as a proposed alternative, and what the honest answer is for
            expecting and nursing mothers. The CTAs at the bottom of this page are framed
            specifically for after pregnancy and breastfeeding — they are not recommendations
            for use during these periods.
          </p>
        </div>
      </section>

      {/* ── Section 2: MSK ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What Memorial Sloan Kettering says
        </h2>
        <div className="space-y-4 text-sm text-[#4A6358] leading-relaxed">
          <p>
            Memorial Sloan Kettering Cancer Center maintains one of the most widely cited
            independent databases for evaluating herbs and supplements — their Integrative
            Medicine program&apos;s herb and supplement database is written for clinicians and
            patients alike and is regularly updated as new evidence emerges. When MSK flags a
            supplement as contraindicated in a specific population, those flagged populations
            have reason to pay attention.
          </p>
          <p>
            MSK&apos;s documented position on shilajit and pregnancy is clear: insufficient
            safety data exists for use during pregnancy and breastfeeding, and avoidance is the
            appropriate recommendation until that data exists. Their specific concerns for these
            populations center on two issues:
          </p>
        </div>

        <div className="space-y-3 my-5">
          {[
            {
              icon: "🔬",
              title: "Insufficient safety data for pregnancy and breastfeeding",
              body: "No clinical trials have studied shilajit in pregnant or nursing women. This is not a minor evidentiary gap — it means there is no dose-response data, no established safe exposure range, and no human evidence from which to conclude the supplement is safe in these populations. MSK takes a precautionary position: without safety data, the recommendation is to avoid.",
              border: "border-amber-200",
            },
            {
              icon: "⚠️",
              title: "Heavy metal contamination poses amplified risk during pregnancy",
              body: "MSK's database specifically identifies heavy metal contamination as a documented safety concern with shilajit. During pregnancy, this concern is substantially more serious: lead and other heavy metals cross the placental barrier. Even trace amounts of lead that would be inconsequential for a healthy adult can affect fetal neurological development. The documented contamination risk in unverified shilajit products makes this a meaningful concern for pregnant women specifically.",
              border: "border-red-200",
            },
          ].map(({ icon, title, body, border }) => (
            <div
              key={title}
              className={`bg-white border-2 ${border} rounded-2xl p-5 shadow-sm`}
            >
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

        <p className="text-sm text-[#4A6358] leading-relaxed">
          For the full breakdown of MSK&apos;s position on shilajit across all safety
          dimensions — heavy metals, medication interactions, FDA status, and general efficacy
          evidence — see our detailed guide on{" "}
          <Link
            href="/blog/memorial-sloan-kettering-shilajit"
            className="text-[#10B981] hover:underline font-medium"
          >
            what Memorial Sloan Kettering says about shilajit safety →
          </Link>
        </p>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#4A6358] leading-relaxed mt-4">
          <strong className="text-[#0D1F14]">Note:</strong> ShilajitPrice.com is not affiliated
          with Memorial Sloan Kettering Cancer Center. We are summarizing their publicly
          available integrative medicine database based on its documented content. We do not
          claim MSK endorses any product. For their current assessment, consult{" "}
          <span className="font-semibold">mskcc.org</span> directly.
        </div>
      </section>

      {/* ── Section 3: NCCIH ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What the NCCIH says
        </h2>
        <div className="space-y-4 text-sm text-[#4A6358] leading-relaxed">
          <p>
            The National Center for Complementary and Integrative Health — part of the National
            Institutes of Health — maintains its own evidence-based assessments of complementary
            health approaches. The NCCIH&apos;s position on shilajit aligns with MSK&apos;s:
            insufficient evidence to establish safety during pregnancy or breastfeeding, and a
            recommendation to consult a healthcare provider before use.
          </p>
          <p>
            The NCCIH also notes that shilajit has not been studied adequately in humans for any
            indication, let alone in the specific context of pregnancy. Their guidance for
            pregnant and nursing women considering herbal supplements is consistent across most
            supplement categories: unless a supplement has well-established safety data for these
            populations (as iron, folate, and prenatal vitamins do), the default is caution.
          </p>
        </div>

        <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm my-5">
          <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-3">
            Institutional consensus
          </div>
          <div className="space-y-3">
            {[
              {
                org: "Memorial Sloan Kettering Cancer Center",
                position:
                  "Contraindicated during pregnancy and breastfeeding — insufficient safety data.",
                icon: "🏥",
              },
              {
                org: "National Center for Complementary and Integrative Health (NCCIH / NIH)",
                position:
                  "Insufficient evidence for safety in pregnancy. Consult a healthcare provider before use.",
                icon: "🔬",
              },
              {
                org: "Traditional Ayurvedic texts",
                position:
                  "Shilajit classified as contraindicated (Garbhini Paricharya restrictions) during pregnancy — one of the few Ayurvedic sources that directly flags this.",
                icon: "📜",
              },
            ].map(({ org, position, icon }) => (
              <div key={org} className="flex items-start gap-3 text-xs text-[#4A6358]">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <span className="font-bold text-[#0D1F14]">{org}: </span>
                  {position}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#4A6358] leading-relaxed">
          This institutional consensus does not mean shilajit is definitively harmful during
          pregnancy. It means the data to evaluate that question simply does not exist. In
          medicine, the absence of evidence is not evidence of safety — it is a knowledge gap
          that warrants precaution.
        </p>
      </section>

      {/* ── Section 4: Heavy metals ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Why heavy metals make this more serious
        </h2>
        <div className="space-y-4 text-sm text-[#4A6358] leading-relaxed">
          <p>
            For most healthy adults, the primary safety concern with shilajit is buying a product
            from an unverified brand that hasn&apos;t been tested for heavy metals contamination.
            Brands with full-panel COA data from accredited labs — showing lead, mercury,
            arsenic, and cadmium within FDA dietary supplement limits — address this risk
            directly.
          </p>
          <p>
            During pregnancy, that calculus changes. Pregnant women have heightened sensitivity
            to heavy metal exposure — not because the limits are higher, but because the fetus
            is far more vulnerable than an adult to trace heavy metal exposure:
          </p>
        </div>

        <div className="space-y-3 my-5">
          {[
            {
              metal: "Lead (Pb)",
              concern:
                "Crosses the placental barrier. Associated with fetal neurological development effects at very low exposure levels — lower than thresholds established for adult safety. No safe level of fetal lead exposure has been established.",
              severity: "Critical",
              color: "border-red-200 bg-red-50",
              textColor: "text-red-700",
            },
            {
              metal: "Mercury (Hg)",
              concern:
                "Methylmercury is a well-established developmental neurotoxin. Even inorganic mercury at trace doses during fetal development warrants more caution than for healthy adults. Most quality shilajit brands show Mercury ND (not detected), but unverified products carry genuine risk.",
              severity: "High",
              color: "border-amber-200 bg-amber-50",
              textColor: "text-amber-700",
            },
            {
              metal: "Arsenic (As)",
              concern:
                "Inorganic arsenic is carcinogenic. Prenatal arsenic exposure has been associated with adverse birth outcomes in epidemiological studies. The FDA limit for dietary supplements (15 ppm total arsenic) is not specifically calibrated for fetal risk.",
              severity: "High",
              color: "border-amber-200 bg-amber-50",
              textColor: "text-amber-700",
            },
            {
              metal: "Cadmium (Cd)",
              concern:
                "Accumulates in kidney tissue and crosses the placenta. Fetal cadmium exposure has been associated with reduced birth weight and developmental concerns in research literature.",
              severity: "Moderate",
              color: "border-slate-200 bg-slate-50",
              textColor: "text-slate-600",
            },
          ].map(({ metal, concern, severity, color, textColor }) => (
            <div
              key={metal}
              className={`bg-white border-2 ${color} rounded-xl p-4`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-sm font-bold text-[#0D1F14]">{metal}</span>
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${textColor} ring-1 ring-current/30`}
                >
                  {severity} concern during pregnancy
                </span>
              </div>
              <p className="text-xs text-[#4A6358] leading-relaxed">{concern}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-sm text-[#4A6358] leading-relaxed">
          <p>
            This doesn&apos;t mean that a pregnant woman who took one serving of a
            COA-verified shilajit product has caused harm. The trace amounts in verified
            products at standard doses are small. But it does mean the risk calculus is
            fundamentally different during pregnancy — there is no established safe level of
            lead or mercury for fetal development, while there is a defined FDA limit for
            healthy adults.
          </p>
          <p>
            Even brands with clean COA data carry trace amounts of heavy metals — that&apos;s
            what &quot;within FDA limits&quot; means. The distinction between verified and
            unverified shilajit matters most during pregnancy because unverified products may
            contain metals at concentrations significantly above what clean-tested brands show.
            For the full side-by-side heavy metals data across the top brands, see our{" "}
            <Link
              href="/blog/shilajit-heavy-metals-comparison"
              className="text-[#10B981] hover:underline font-medium"
            >
              complete heavy metals comparison →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Section 5: Fulvic acid ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What about standalone fulvic acid supplements?
        </h2>
        <div className="space-y-4 text-sm text-[#4A6358] leading-relaxed">
          <p>
            Some pregnant women considering shilajit for its mineral-transport and energy
            properties look to standalone fulvic acid supplements as an alternative — the
            reasoning being that purified fulvic acid isolates might be safer than full-spectrum
            shilajit resin.
          </p>
          <p>
            The same precautionary reasoning applies. Standalone fulvic acid supplements also
            lack human clinical safety data during pregnancy. Purified fulvic acid doesn&apos;t
            carry the same heavy metals profile as raw shilajit, but the fundamental issue is
            the same: no clinical trials have enrolled pregnant women to study fulvic acid safety
            or dosing, and the effects of fulvic acid compounds on fetal development, placental
            transport, or breast milk composition are unstudied.
          </p>
          <p>
            The minerals that fulvic acid enhances absorption of — including iron — are already
            carefully managed during pregnancy through established prenatal supplementation
            protocols. Adding an uncharacterized absorption enhancer to a pregnancy supplement
            regimen introduces uncertainty that is difficult to justify without supporting
            evidence. For more on how shilajit and fulvic acid compare as supplements
            generally, see our guide on{" "}
            <Link
              href="/blog/shilajit-vs-fulvic-acid"
              className="text-[#10B981] hover:underline font-medium"
            >
              shilajit vs standalone fulvic acid supplements →
            </Link>
          </p>
        </div>

        <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-5 my-4">
          <div className="text-xs font-bold text-[#7BA899] uppercase tracking-widest mb-3">
            What IS safe during pregnancy (as supplements go)
          </div>
          <div className="space-y-2">
            {[
              {
                item: "Folate / folic acid",
                note: "Essential for neural tube development. Well-established safety.",
              },
              {
                item: "Iron (prenatal dose)",
                note: "Required for fetal development. Prescribed at established doses.",
              },
              {
                item: "Vitamin D",
                note: "Safe at supplemental doses with physician oversight.",
              },
              {
                item: "DHA / Omega-3",
                note: "Well-documented fetal brain development support.",
              },
              {
                item: "Prenatal multivitamin",
                note: "Formulated specifically for pregnancy-appropriate doses.",
              },
            ].map(({ item, note }) => (
              <div key={item} className="flex items-start gap-2 text-xs text-[#4A6358]">
                <span className="text-[#10B981] font-bold shrink-0">✓</span>
                <div>
                  <span className="font-semibold text-[#0D1F14]">{item}: </span>
                  {note}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[#7BA899] mt-3">
            This list is not medical advice. Always follow your OB-GYN&apos;s specific
            prenatal supplement guidance.
          </p>
        </div>
      </section>

      {/* ── Section 6: Honest answer ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The honest answer
        </h2>
        <div className="space-y-4 text-sm text-[#4A6358] leading-relaxed">
          <p>
            No peer-reviewed human clinical trial has studied shilajit use during pregnancy or
            breastfeeding. The absence of evidence is not evidence of safety — it is a knowledge
            gap, and in medicine, knowledge gaps in vulnerable populations are filled with
            precaution, not assumptions of harmlessness.
          </p>
          <p>
            The medical consensus from Memorial Sloan Kettering, the NCCIH, and most integrative
            medicine practitioners is consistent: avoid shilajit during pregnancy and while
            breastfeeding. This is a standard precautionary position grounded in the absence of
            safety data and compounded by shilajit&apos;s documented heavy metals profile —
            trace metals that are meaningful for adult risk calculus but potentially more
            significant for fetal development.
          </p>
          <p>
            If you are currently pregnant and were taking shilajit before you knew you were
            pregnant, one or a few servings of a verified, COA-tested product is unlikely to
            cause harm — the trace heavy metal doses in quality products are small. But this
            is not a reason to continue. Consult your OB-GYN, disclose what you were taking,
            and stop until after breastfeeding is complete.
          </p>
        </div>

        {/* Summary card */}
        <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm my-5">
          <div className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-4">
            Summary: Shilajit safety by pregnancy/postpartum stage
          </div>
          <div className="space-y-3">
            {[
              {
                stage: "Currently pregnant",
                recommendation: "Avoid — no safety data, fetal heavy metals risk",
                icon: "🚫",
                color: "text-red-600",
                bg: "bg-red-50 border-red-100",
              },
              {
                stage: "Currently breastfeeding",
                recommendation: "Avoid — no safety data, unknown breast milk transfer",
                icon: "🚫",
                color: "text-red-600",
                bg: "bg-red-50 border-red-100",
              },
              {
                stage: "Took shilajit before knowing you were pregnant",
                recommendation:
                  "Stop use. Consult OB-GYN. Isolated pre-knowledge exposure unlikely to cause harm.",
                icon: "⚠️",
                color: "text-amber-700",
                bg: "bg-amber-50 border-amber-100",
              },
              {
                stage: "Postpartum, not breastfeeding",
                recommendation:
                  "Standard adult guidance applies. Choose a COA-verified brand. Consult physician if on medications.",
                icon: "✓",
                color: "text-emerald-700",
                bg: "bg-emerald-50 border-emerald-100",
              },
            ].map(({ stage, recommendation, icon, color, bg }) => (
              <div
                key={stage}
                className={`flex items-start gap-3 rounded-xl border p-3 ${bg}`}
              >
                <span className="text-lg shrink-0">{icon}</span>
                <div>
                  <div className={`text-xs font-bold mb-0.5 ${color}`}>{stage}</div>
                  <p className="text-xs text-[#4A6358] leading-relaxed">
                    {recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#4A6358] leading-relaxed">
          After pregnancy and breastfeeding are complete, shilajit from verified, lab-tested
          brands is a safe option for most healthy adults. All four of the partner brands
          featured below have published third-party COAs with full heavy metals panels —
          and all four are appropriate for healthy, non-pregnant adults who want to start
          shilajit supplementation.
        </p>
      </section>

      {/* ── Section 7: Post-pregnancy CTAs ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-3">
          When you&apos;re ready — after pregnancy and breastfeeding
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          The following brands are lab-tested, COA-verified options for healthy adults. These
          are presented for reference only — they are not recommendations for use during
          pregnancy or breastfeeding. When you have completed breastfeeding and received
          clearance from your healthcare provider, these are the brands we recommend based on
          lab transparency and sourcing rigor.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              brand: "Black Lotus Shilajit",
              sub: "Altai Mountains, Siberia",
              detail:
                "64.51% FA (resin) / 74.30% FA (capsules) · Batch 93 COA · IAS Laboratories, Phoenix AZ · Mercury ND",
              href: BL_BASE,
              border: "border-amber-200",
              badge: "bg-amber-100 text-amber-800 ring-amber-300",
              tier: "S",
              btn: "bg-[#182B1F] hover:bg-[#10B981] text-white",
            },
            {
              brand: "Pure Himalayan Shilajit",
              sub: "Himalayan Mountains, ~16,000 ft",
              detail:
                "~58% FA (Batch RE18 · ISO/IEC 17025 accredited lab · Full heavy metals panel · Mercury ND",
              href: PH_BASE,
              border: "border-blue-200",
              badge: "bg-blue-100 text-blue-800 ring-blue-300",
              tier: "S",
              btn: "bg-[#182B1F] hover:bg-blue-600 text-white",
            },
            {
              brand: "Natural Shilajit",
              sub: "UNESCO Altai, Siberia",
              detail:
                "Amazon-certified · DBP verified · ICP-MS + LC-MS tested · Full heavy metals panel",
              href: NS_BASE,
              border: "border-teal-200",
              badge: "bg-teal-100 text-teal-800 ring-teal-300",
              tier: "S",
              btn: "bg-[#182B1F] hover:bg-teal-600 text-white",
            },
            {
              brand: "Pürblack Live Resin",
              sub: "Multi-region (Caucasus, Siberia, Himalayas)",
              detail:
                "5 US Patents · Pharmaceutical GMP · DBP 16.5–21.9% · Urolithin A up to 58 ppm",
              href: PB_BASE,
              border: "border-violet-200",
              badge: "bg-violet-100 text-violet-800 ring-violet-300",
              tier: "A",
              btn: "bg-[#182B1F] hover:bg-violet-600 text-white",
            },
          ].map(({ brand, sub, detail, href, border, badge, tier, btn }) => (
            <div
              key={brand}
              className={`bg-white border-2 ${border} rounded-2xl overflow-hidden shadow-sm`}
            >
              <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-4 py-3 flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-full ring-1 flex items-center justify-center text-xs font-black shrink-0 ${badge}`}
                >
                  {tier}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-extrabold text-[#0D1F14] truncate">{brand}</div>
                  <div className="text-[9px] text-[#7BA899] truncate">{sub}</div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[11px] text-[#4A6358] leading-relaxed mb-4">{detail}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`flex items-center justify-center w-full py-2.5 rounded-full font-bold text-xs transition-colors shadow-sm ${btn}`}
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

        <p className="text-[10px] text-[#7BA899] leading-relaxed mt-4 text-center">
          None of these products are evaluated or endorsed by Memorial Sloan Kettering,
          the NCCIH, or any medical institution for use during pregnancy or breastfeeding.
          Always consult your healthcare provider before starting any new supplement.
        </p>
      </section>

      {/* Related reading */}
      <div className="border-t border-[#D1EDD8] pt-5">
        <p className="text-xs font-bold text-[#7BA899] uppercase tracking-widest mb-3">
          Related reading
        </p>
        <div className="space-y-2">
          {[
            {
              href: "/blog/memorial-sloan-kettering-shilajit",
              label:
                "Memorial Sloan Kettering & Shilajit — Full breakdown of MSK's safety documentation",
            },
            {
              href: "/blog/shilajit-safety-guide",
              label:
                "Is Shilajit Safe? — FDA warnings, heavy metals data, and who should avoid it",
            },
            {
              href: "/blog/shilajit-heavy-metals-comparison",
              label:
                "Shilajit Heavy Metals Comparison — Batch-specific data across all four brands",
            },
            {
              href: "/blog/shilajit-side-effects",
              label:
                "Shilajit Side Effects — What the clinical literature actually documents",
            },
            {
              href: "/blog/shilajit-vs-fulvic-acid",
              label:
                "Shilajit vs Fulvic Acid — What the difference is and which to take after pregnancy",
            },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 text-xs text-[#0D1F14] hover:text-[#10B981] transition-colors group"
            >
              <span className="text-[#10B981] group-hover:translate-x-0.5 transition-transform">
                →
              </span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </BlogPostLayout>
  );
}
