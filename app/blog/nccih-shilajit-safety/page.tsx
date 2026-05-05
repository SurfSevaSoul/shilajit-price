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
const POST_URL = `${BASE_URL}/blog/nccih-shilajit-safety`;

export const metadata: Metadata = {
  title:
    "NCCIH on Shilajit: What the Official Safety Guidance Actually Says | ShilajitPrice.com",
  description:
    "NCCIH flags heavy metals contamination and pregnancy risk in shilajit supplements. Here's what the official guidance actually says, what it doesn't say, and how to find a brand that addresses their concerns.",
  keywords:
    "nccih shilajit, nccih shilajit safety, nccih shilajit heavy metals, national center for complementary integrative health shilajit, shilajit safety official guidance",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "NCCIH on Shilajit: What the Official Safety Guidance Actually Says",
    description:
      "NCCIH flags heavy metals contamination and pregnancy risk in shilajit supplements. Here's what the official guidance actually says, what it doesn't say, and how to find a brand that addresses their concerns.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-05",
    modifiedTime: "2026-05-05",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Does NCCIH say shilajit is safe?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "NCCIH does not make a blanket safety endorsement of shilajit, but they also do not say it is unsafe as a compound. Their guidance specifically flags two concerns: heavy metal contamination in unverified products, and a lack of sufficient high-quality human clinical evidence. These are product quality concerns and research-gap concerns — not a determination that the compound itself is harmful. NCCIH's position is that consumers should exercise caution about product quality rather than avoiding shilajit categorically.",
    },
  },
  {
    "@type": "Question",
    name: "What heavy metals does NCCIH warn about in shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "NCCIH's concern encompasses the full range of heavy metals that can be present in mineral pitch compounds sourced from rock formations: lead (Pb), arsenic (As), mercury (Hg), and cadmium (Cd). All four can be present in raw, unprocessed shilajit at levels that vary by geographic source and processing method. NCCIH's warning is specifically about unverified or unpurified products — not purified, lab-tested shilajit that has been shown to contain these metals below FDA action thresholds.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit FDA approved?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Shilajit is sold in the United States as a dietary supplement under DSHEA (Dietary Supplement Health and Education Act of 1994), not as an FDA-approved drug. The FDA does not pre-approve dietary supplements before they reach market, but manufacturers must comply with FDA Good Manufacturing Practices (GMPs) and may not make disease claims. The absence of FDA approval is not a safety disqualification — it is the standard regulatory status for all dietary supplements including vitamin D, magnesium, and fish oil.",
    },
  },
  {
    "@type": "Question",
    name: "What does NCCIH say about shilajit and pregnancy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "NCCIH guidance, consistent with most integrative medicine databases, flags shilajit as potentially unsafe during pregnancy and breastfeeding. The concern is two-fold: first, no clinical safety data exists for these populations; second, heavy metal contamination in unverified products poses heightened risk to fetal and infant development given well-established fetal neurotoxicity of lead and mercury at low exposures. The precautionary recommendation is avoidance during pregnancy and breastfeeding regardless of product quality.",
    },
  },
  {
    "@type": "Question",
    name: "How do I find a shilajit brand that addresses NCCIH concerns?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "NCCIH's specific concerns map directly to verifiable product criteria: (1) Get an ICP-MS heavy metals panel — this is the gold standard analytical method for detecting lead, arsenic, mercury, and cadmium at parts-per-billion sensitivity. (2) The lab must be ISO/IEC 17025-accredited or A2LA-accredited — these are the internationally recognized standards for analytical testing laboratory competence. (3) The COA should be batch-specific with actual measured values, not generic range claims. (4) Lead should be below the FDA dietary supplement action level of 10 mcg/day. Brands like Black Lotus Shilajit (IAS Laboratories, Phoenix AZ) and Lotus Blooming Herbs (Certified Laboratories Burbank CA, A2LA ISO 17025) meet all of these criteria with publicly verifiable data.",
    },
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NccihShilajitSafety() {
  return (
    <BlogPostLayout
      heading={
        <>
          NCCIH on Shilajit:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            What the Official Safety Guidance
          </span>{" "}
          Actually Says
        </>
      }
      description="NCCIH — the U.S. government's official body on supplement safety — flags two specific concerns about shilajit: heavy metals contamination and insufficient human evidence. Here's what that guidance actually means, what it doesn't say, and how to identify a brand that directly addresses those concerns with verifiable lab data."
      tags={["Safety", "Heavy Metals", "Official Guidance", "Buying Guide"]}
      publishedAt="2026-05-05"
      updatedAt="2026-05-05"
      readingTimeMin={9}
      currentSlug="nccih-shilajit-safety"
      quizCta="card"
      breadcrumbLabel="NCCIH Shilajit Safety"
      faqItems={faqItems}
    >
      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some
        links on this page are affiliate links. We earn a commission at no extra
        cost to you. Brand facts, COA data, and safety assessments are
        independent of affiliate relationships.
      </div>

      {/* Intro */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What is NCCIH and why does their guidance matter?
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            The National Center for Complementary and Integrative Health (NCCIH)
            is the U.S. federal government's primary agency for scientific
            research on complementary and integrative health practices. It
            operates as one of the 27 institutes and centers of the National
            Institutes of Health (NIH) and is the closest thing the United
            States has to an official position on dietary supplement safety.
          </p>
          <p>
            When someone searches "nccih shilajit" or "national center for
            complementary integrative health shilajit," they are typically trying
            to answer one of two questions: is shilajit safe according to the
            U.S. government, and what specifically are the official concerns? The
            NCCIH does have documented guidance on shilajit — and it is more
            nuanced than most supplement marketing and most supplement criticism
            suggests.
          </p>
          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
            <p className="text-xs text-[#4A6358] leading-relaxed">
              <strong className="text-[#0D1F14]">Scope of this guide:</strong>{" "}
              We cover what NCCIH actually says about shilajit (and what they
              don't say), the specific contamination distinction their guidance
              implies, and how their criteria map to verifiable product
              standards. For a broader safety overview, see our{" "}
              <Link
                href="/blog/shilajit-safety-guide"
                className="text-[#10B981] hover:underline font-medium"
              >
                complete shilajit safety guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What NCCIH says */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What NCCIH says about shilajit
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            NCCIH's documented concerns about shilajit fall into three
            categories. Understanding each one precisely matters because they
            carry very different practical implications for consumers.
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Heavy metals contamination risk",
                labelColor: "text-red-600",
                border: "border-red-200",
                bg: "bg-red-50",
                content:
                  "NCCIH documents that shilajit can contain heavy metals — including lead (Pb), arsenic (As), mercury (Hg), and cadmium (Cd) — at levels that may be harmful. This concern stems from the nature of shilajit as a mineral pitch exudate from rock formations: it bioaccumulates metals present in its surrounding geology. The concern is real, well-documented, and supported by independent testing of commercial products.",
              },
              {
                label: "Lack of sufficient human clinical evidence",
                labelColor: "text-amber-700",
                border: "border-amber-200",
                bg: "bg-amber-50",
                content:
                  "NCCIH notes that while there is some laboratory and animal research supporting shilajit's traditional uses, high-quality human clinical trials are limited in number, sample size, and duration. Most of the available RCTs have been conducted in small populations over 90-day periods. This is an accurate characterization of the evidence landscape — not a claim that shilajit is ineffective.",
              },
              {
                label: "Pregnancy and breastfeeding warning",
                labelColor: "text-orange-700",
                border: "border-orange-200",
                bg: "bg-orange-50",
                content:
                  "NCCIH flags shilajit as potentially unsafe during pregnancy. The basis is a combination of no clinical safety data for pregnant or breastfeeding populations and the elevated risk profile of heavy metal exposure for fetal and infant development. This is a standard precautionary position for any supplement without pregnancy-specific safety data.",
              },
            ].map(({ label, labelColor, border, bg, content }) => (
              <div
                key={label}
                className={`border ${border} ${bg} rounded-xl p-4`}
              >
                <div className={`text-xs font-bold ${labelColor} mb-2`}>
                  ⚠ {label}
                </div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What NCCIH does NOT say */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What NCCIH does <em>not</em> say
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            The NCCIH guidance is frequently mischaracterized in both directions
            — by supplement marketers who ignore it entirely, and by critics who
            overstate it as a categorical condemnation. Here is what the guidance
            explicitly does not say:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                claim: "NCCIH says shilajit doesn't work",
                verdict: "False",
                color: "border-[#D1EDD8]",
                verdictColor: "text-[#10B981]",
                detail:
                  "NCCIH documents limited clinical evidence — a statement about research quantity and quality, not compound efficacy. The absence of large RCTs is not the same as evidence of inefficacy.",
              },
              {
                claim: "NCCIH says shilajit is dangerous",
                verdict: "Overstatement",
                color: "border-[#D1EDD8]",
                verdictColor: "text-amber-600",
                detail:
                  "NCCIH flags contamination risk in unverified products. They do not make a blanket safety determination about purified, lab-tested shilajit with verified heavy metals panels.",
              },
              {
                claim: "NCCIH says all shilajit has unsafe metals",
                verdict: "False",
                color: "border-[#D1EDD8]",
                verdictColor: "text-[#10B981]",
                detail:
                  "The heavy metals warning applies to unprocessed or unverified products. Lab-tested products with ICP-MS panels below FDA action levels address the specific concern NCCIH raises.",
              },
              {
                claim: "NCCIH recommends against shilajit use",
                verdict: "Overstatement",
                color: "border-[#D1EDD8]",
                verdictColor: "text-amber-600",
                detail:
                  "NCCIH recommends caution — particularly around product quality verification and pregnancy avoidance. This is materially different from a recommendation against use for healthy adults using verified products.",
              },
            ].map(({ claim, verdict, color, verdictColor, detail }) => (
              <div key={claim} className={`bg-white border ${color} rounded-xl p-4`}>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-xs font-bold text-[#0D1F14] italic">
                    &ldquo;{claim}&rdquo;
                  </p>
                  <span className={`text-[10px] font-black ${verdictColor} uppercase tracking-wide shrink-0`}>
                    {verdict}
                  </span>
                </div>
                <p className="text-xs text-[#4A6358] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The contamination distinction */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The contamination distinction: raw vs. purified shilajit
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            The most important nuance in the NCCIH guidance — and the one most
            commonly missed in mainstream coverage — is that their heavy metals
            concern is specifically about contamination risk, not about shilajit
            as a compound. This distinction separates the product quality problem
            from the substance itself.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-red-200 rounded-xl p-4">
              <div className="text-xs font-black text-red-600 mb-2">
                Raw / unprocessed shilajit
              </div>
              <ul className="space-y-1.5">
                {[
                  "Collected directly from rock formations — not purified",
                  "Heavy metals present at variable, geography-dependent levels",
                  "No lab verification — metals not quantified or disclosed",
                  "This is what NCCIH's contamination warning applies to",
                  "Common in undisclosed supply chains and cheap products",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XIcon />
                    <span className="text-xs text-[#0D1F14]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
              <div className="text-xs font-black text-[#10B981] mb-2">
                Purified / lab-tested shilajit
              </div>
              <ul className="space-y-1.5">
                {[
                  "Processed to remove or reduce heavy metal content",
                  "Tested by ISO/IEC 17025-accredited labs via ICP-MS",
                  "Batch-specific COA with actual measured metal values",
                  "Values disclosed and verifiable against FDA limits",
                  "Directly addresses the contamination concern NCCIH raises",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-xs text-[#0D1F14]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            Shilajit sourced from high-altitude deposits (above 14,000 ft) and
            processed using traditional purification methods tends to contain
            significantly lower heavy metal concentrations than samples from
            lower-altitude or industrially contaminated regions. Geographic
            source and processing methodology are the two variables that most
            determine whether a product's heavy metals profile addresses the
            NCCIH concern — or confirms it.
          </p>
        </div>
      </section>

      {/* How to use NCCIH guidance practically */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How to apply NCCIH guidance when buying shilajit
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            NCCIH's concerns translate directly into a four-point verification
            checklist that any serious buyer can apply before purchasing:
          </p>
          <div className="space-y-3">
            {[
              {
                step: "01",
                title: "Demand an ICP-MS heavy metals panel",
                detail:
                  "Inductively Coupled Plasma Mass Spectrometry (ICP-MS) is the gold standard method for detecting lead, arsenic, mercury, and cadmium at parts-per-billion sensitivity. Any COA that lists heavy metals detected by a method other than ICP-MS (or does not specify the method) should be treated skeptically. The test must cover all four primary metals: Pb, As, Hg, Cd.",
              },
              {
                step: "02",
                title: "Verify the lab's accreditation",
                detail:
                  "The lab performing the ICP-MS analysis must hold ISO/IEC 17025 or A2LA accreditation — the internationally recognized standard for analytical testing laboratory competence. Accreditation numbers are public record and can be verified directly with the accrediting body. A COA from an unaccredited lab provides no meaningful safety assurance.",
              },
              {
                step: "03",
                title: "Require batch-specific COA with actual values",
                detail:
                  "A COA should show specific measured values for each metal (e.g., Pb: 0.040 mcg/serving) — not ranges, not 'below detection limit' without the detection limit stated, and not a single COA applied to all batches. Batch-specific documentation is the only way to verify that the product you purchased from a particular production run was actually tested.",
              },
              {
                step: "04",
                title: "Compare values against FDA limits",
                detail:
                  "FDA action levels for heavy metals in dietary supplements: Lead (Pb) — 10 mcg/day; Arsenic (As) — 15 mcg/day inorganic; Mercury (Hg) — 30 mcg/day methylmercury; Cadmium (Cd) — varies. California Prop 65 limits are stricter: Lead — 0.5 mcg/day. Look for brands whose COA values fall below the more stringent of these two thresholds.",
              },
            ].map(({ step, title, detail }) => (
              <div
                key={step}
                className="bg-white border border-[#D1EDD8] rounded-xl p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#F0FAF4] text-[#10B981] ring-1 ring-[#D1EDD8] flex items-center justify-center text-xs font-black">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0D1F14] mb-1">
                      {title}
                    </h3>
                    <p className="text-xs text-[#4A6358] leading-relaxed">
                      {detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#4A6358]">
            For brand-by-brand heavy metals data across all five partners, see
            our{" "}
            <Link
              href="/blog/shilajit-heavy-metals-comparison"
              className="text-[#10B981] hover:underline font-medium"
            >
              shilajit heavy metals comparison →
            </Link>
          </p>
        </div>
      </section>

      {/* Verified brands */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Brands that directly address NCCIH&apos;s concerns with verifiable data
        </h2>
        <p className="text-sm text-[#0D1F14] leading-relaxed mb-5">
          Each of the following brands has a publicly accessible, batch-specific
          COA from an accredited third-party laboratory. All heavy metals
          reported are below FDA dietary supplement action levels.
        </p>

        {/* Black Lotus */}
        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10 mb-4">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-amber-900 font-black text-lg shrink-0">
              S
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">
                S-Tier · Highest Verified Fulvic Acid
              </div>
              <h3 className="text-base font-black text-[#0D1F14]">
                Black Lotus Shilajit
              </h3>
              <p className="text-xs text-[#4A6358] mt-1">
                IAS Laboratories, Phoenix AZ · Batch 93 · Altai Mountains, Siberia
              </p>
            </div>
          </div>
          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-[#0D1F14] mb-2">
              COA data addressing NCCIH concerns:
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {[
                "Lab: IAS Laboratories (ISO/IEC 17025 accredited), Phoenix AZ",
                "Method: ICP-MS for all heavy metals",
                "Mercury (Hg): ND (not detected) — below detection limit",
                "Lead, Arsenic, Cadmium: all within FDA limits",
                "Fulvic acid: resin 64.51% / tablets 73.11% / capsules 74.30%",
                "Batch-specific documentation: Batch 93",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-xs text-[#0D1F14]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            href={AFFILIATE_BL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-900/30"
          >
            Shop Black Lotus Shilajit →
          </a>
          <p className="text-center text-[10px] text-[#7BA899] mt-2">
            Affiliate link — commission earned at no extra cost to you
          </p>
        </div>

        {/* LBH */}
        <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:border-amber-300 transition-colors mb-4">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 ring-1 ring-amber-300 flex items-center justify-center text-amber-800 font-black text-lg shrink-0">
              S
            </div>
            <div>
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-0.5">
                S-Tier · Lowest Lead Per Serving · Himalayan 16,000–18,000ft
              </div>
              <h3 className="text-base font-black text-[#0D1F14]">
                Lotus Blooming Herbs Authentic Shilajit™
              </h3>
              <p className="text-xs text-[#4A6358] mt-1">
                Certified Laboratories, Burbank CA · A2LA ISO 17025 Cert 3034.01 ·
                Batch BHC4429 / 2024057703 · GMP Certified · Ayurvedic practitioner-owned
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-amber-800 mb-2">
              COA data addressing NCCIH concerns:
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {[
                "Lab: Certified Laboratories Burbank CA (A2LA ISO 17025, Cert 3034.01)",
                "Method: ICP-MS for heavy metals",
                "Lead (Pb): 0.040 mcg/serving — lowest of any brand in our database",
                "All heavy metals below FDA and Prop 65 thresholds",
                "Himalayan source: 16,000–18,000ft altitude",
                "Batch BHC4429 / 2024057703 — batch-specific documentation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-xs text-[#0D1F14]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-amber-700 mt-3 leading-relaxed">
              Note: Lotus Blooming Herbs does not disclose fulvic acid percentage
              on their COA. Their verification strength is in the heavy metals
              panel and accreditation credentials.
            </p>
          </div>
          <a
            href={AFFILIATE_LBH}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-colors shadow-md shadow-amber-900/20"
          >
            Shop Lotus Blooming Herbs →
          </a>
          <p className="text-[10px] text-[#7BA899] mt-2">
            Affiliate link — commission earned at no extra cost to you
          </p>
        </div>

        {/* Other 3 brands table */}
        <h3 className="text-lg font-black text-[#0D1F14] mb-3">
          Additional verified options
        </h3>
        <div className="space-y-3">
          {[
            {
              name: "Pure Himalayan Shilajit",
              tier: "A",
              tierColor: "bg-emerald-500 text-white",
              lab: "Certified Laboratories + Micro Quality Labs",
              coa: "Sep 2024 — batch-specific",
              metals: "Full ICP-MS panel — all within FDA limits",
              fulvic: "~58% fulvic acid",
              source: "Himalayan Mountains, 16,000+ ft",
              href: AFFILIATE_PH,
            },
            {
              name: "Natural Shilajit",
              tier: "A",
              tierColor: "bg-emerald-500 text-white",
              lab: "DaaneLabs + Harken Research",
              coa: "Nov 2024 — batch-specific",
              metals: "Full heavy metals panel — all within FDA limits",
              fulvic: "Fulvic acid not disclosed on COA",
              source: "UNESCO-recognized Altai Mountains",
              href: AFFILIATE_NS,
            },
            {
              name: "Pürblack Live Resin",
              tier: "A",
              tierColor: "bg-emerald-500 text-white",
              lab: "Third-party accredited lab",
              coa: "Dec 2025 — batch-specific",
              metals: "Full heavy metals panel — all within FDA limits",
              fulvic: "Does not report fulvic acid; uses DBP (16.5–21.9%) and Urolithin A (up to 58.497 ppm)",
              source: "Multi-region — no single geographic claim",
              href: AFFILIATE_PB,
            },
          ].map((b) => (
            <div
              key={b.name}
              className="bg-white border border-[#D1EDD8] rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded text-[11px] font-black ${b.tierColor}`}
                >
                  {b.tier}
                </span>
                <h3 className="text-sm font-bold text-[#0D1F14]">{b.name}</h3>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="ml-auto text-xs text-[#10B981] hover:underline font-semibold shrink-0"
                >
                  Check Price →
                </a>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-xs">
                {[
                  { label: "Lab", value: b.lab },
                  { label: "COA", value: b.coa },
                  { label: "Heavy metals", value: b.metals },
                  { label: "Fulvic acid", value: b.fulvic },
                  { label: "Source", value: b.source },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-2">
                    <span className="font-bold text-[#7BA899] shrink-0">
                      {label}:
                    </span>
                    <span className="text-[#0D1F14]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-xs text-[#4A6358] leading-relaxed">
          Full lab data for all brands is available on our{" "}
          <Link
            href="/lab-data"
            className="text-[#10B981] hover:underline font-medium"
          >
            lab data page →
          </Link>
        </div>
      </section>

      {/* NCCIH vs MSK comparison */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          NCCIH vs. Memorial Sloan Kettering: how official guidance compares
        </h2>
        <div className="space-y-3 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            NCCIH is not the only major institution that has documented shilajit
            safety considerations. Memorial Sloan Kettering Cancer Center
            maintains an integrative medicine database that independently reaches
            similar conclusions — and similar nuances.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wide">
                    Concern
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wide">
                    NCCIH
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wide">
                    Memorial Sloan Kettering
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  {
                    concern: "Heavy metals",
                    nccih: "Flags contamination risk in unverified products",
                    msk: "Flags heavy metal contamination as a documented safety concern",
                  },
                  {
                    concern: "Human evidence",
                    nccih: "Notes limited high-quality clinical trials",
                    msk: "Notes most studies are small and short-term",
                  },
                  {
                    concern: "Pregnancy",
                    nccih: "Recommends avoidance — no safety data",
                    msk: "Precautionary avoidance — no clinical data for this population",
                  },
                  {
                    concern: "Compound safety",
                    nccih: "No blanket condemnation of purified shilajit",
                    msk: "No categorical rejection — flags product quality variation",
                  },
                  {
                    concern: "FDA status",
                    nccih: "Not approved — dietary supplement",
                    msk: "Not FDA-approved as a drug",
                  },
                ].map(({ concern, nccih, msk }, i) => (
                  <tr
                    key={concern}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}
                  >
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">
                      {concern}
                    </td>
                    <td className="px-4 py-3 text-[#4A6358]">{nccih}</td>
                    <td className="px-4 py-3 text-[#4A6358]">{msk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#4A6358]">
            For a full breakdown of Memorial Sloan Kettering&apos;s position, see our{" "}
            <Link
              href="/blog/memorial-sloan-kettering-shilajit"
              className="text-[#10B981] hover:underline font-medium"
            >
              MSK and shilajit guide →
            </Link>
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The bottom line on NCCIH guidance
        </h2>
        <div className="space-y-3">
          {[
            {
              verdict: "The concern is product quality, not the compound",
              detail:
                "NCCIH's heavy metals warning applies to unverified, unpurified products. It is not a condemnation of shilajit as a substance. Purified, lab-tested products with ICP-MS panels and accredited COAs directly address what NCCIH flags.",
              icon: "✓",
              color: "border-[#D1EDD8] bg-[#F0FAF4]",
              iconColor: "text-[#10B981]",
            },
            {
              verdict: "The evidence gap is real but overstated",
              detail:
                "NCCIH is correct that shilajit lacks large-scale, long-duration RCTs. The available trials are small and mostly 90-day studies. This is an accurate description of a research gap, not a verdict that the compound is ineffective.",
              icon: "✓",
              color: "border-[#D1EDD8] bg-[#F0FAF4]",
              iconColor: "text-[#10B981]",
            },
            {
              verdict: "Pregnancy avoidance is the correct precautionary position",
              detail:
                "No safety data exists for pregnant or breastfeeding populations. The NCCIH recommendation to avoid shilajit during pregnancy is appropriate given the known fetal toxicity of heavy metals at low doses and the absence of pregnancy-specific clinical data.",
              icon: "⚠",
              color: "border-amber-200 bg-amber-50",
              iconColor: "text-amber-600",
            },
            {
              verdict: "Verification is straightforward — use the checklist",
              detail:
                "ICP-MS panel + ISO/IEC 17025 accredited lab + batch-specific COA + values below FDA limits. These four criteria directly address every documented NCCIH concern about product quality. All five brands reviewed above meet this standard.",
              icon: "✓",
              color: "border-[#D1EDD8] bg-[#F0FAF4]",
              iconColor: "text-[#10B981]",
            },
          ].map(({ verdict, detail, icon, color, iconColor }) => (
            <div key={verdict} className={`border rounded-xl p-4 ${color}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-base font-black ${iconColor}`}>{icon}</span>
                <h3 className="text-xs font-bold text-[#0D1F14]">{verdict}</h3>
              </div>
              <p className="text-xs text-[#4A6358] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Related guides */}
        <h3 className="text-lg font-black text-[#0D1F14] mt-8 mb-3">
          Related safety guides
        </h3>
        <div className="space-y-2">
          {[
            {
              href: "/blog/shilajit-safety-guide",
              title: "Complete Shilajit Safety Guide",
              desc: "FDA status, heavy metals risk, who should not take shilajit, and how to verify a safe product",
            },
            {
              href: "/blog/memorial-sloan-kettering-shilajit",
              title: "Memorial Sloan Kettering & Shilajit",
              desc: "What MSK's integrative medicine database documents on safety and heavy metals",
            },
            {
              href: "/blog/shilajit-heavy-metals-comparison",
              title: "Shilajit Heavy Metals Comparison — Lab Data Across 4 Brands",
              desc: "Side-by-side ICP-MS results for lead, arsenic, mercury, and cadmium",
            },
            {
              href: "/lab-data",
              title: "Full Lab Data",
              desc: "All COAs, fulvic acid percentages, heavy metals panels, and accreditation details in one place",
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
