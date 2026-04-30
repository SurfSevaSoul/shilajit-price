import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import BlackLotusCTA from "../../components/blog/BlackLotusCTA";

const AFFILIATE_BL =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_NS =
  "https://naturalshilajit.com/products/natural-shilajit-resin?rfsn=9069392.c841fa";
const PURE_HIMALAYAN_RESIN = "https://www.purehimalayanshilajit.com/buy-shilajit/?ref=4792";
const AFFILIATE_PB = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-heavy-metals-fda`;

export const metadata: Metadata = {
  title: "Shilajit Heavy Metals & FDA: What Buyers Need to Know in 2026",
  description:
    "The factual guide to shilajit heavy metals contamination: what metals are present, what the FDA says, what California Prop 65 means, how ICP-MS testing works, and which brands have verified panels.",
  keywords:
    "shilajit heavy metals, fda shilajit contamination, is shilajit safe from heavy metals, shilajit lead mercury arsenic, shilajit COA testing, shilajit prop 65",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Shilajit Heavy Metals & FDA: What Buyers Need to Know in 2026",
    description:
      "The factual guide to shilajit heavy metals contamination: what metals are present, what the FDA says, what California Prop 65 means, how ICP-MS testing works, and which brands have verified panels.",
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
    name: "Does shilajit contain heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes — shilajit naturally concentrates minerals from its geological source, which includes potentially hazardous heavy metals such as lead (Pb), mercury (Hg), arsenic (As), and cadmium (Cd). This is not unique to shilajit; many mineral-rich supplements and foods contain trace heavy metals. The relevant question is not whether they are present in any amount, but whether the finished product has been independently tested and confirmed to be below established safety thresholds. Products with published COAs from accredited labs showing actual measured values — not just a 'PASS' stamp — are the only ones that can be meaningfully verified.",
    },
  },
  {
    "@type": "Question",
    name: "What does the FDA say about shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The FDA has not approved shilajit as a drug. It is regulated as a dietary supplement under the Dietary Supplement Health and Education Act (DSHEA) of 1994, which means manufacturers are responsible for ensuring product safety before marketing — but the FDA does not review or approve supplement products before they reach consumers. The FDA has issued guidance on heavy metal limits in dietary supplements (Lead <10 ppm, Mercury <3 ppm, Arsenic <15 ppm, Cadmium <5 ppm) and can take enforcement action against products found to violate these limits. The FDA has not issued a category-wide warning against shilajit as of 2026.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if shilajit is free from heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The only way to verify heavy metal levels is a published Certificate of Analysis (COA) from an independent, accredited laboratory. The COA must show: (1) actual measured values for lead, mercury, arsenic, and cadmium — not just a 'PASS' designation; (2) the analytical method used (ICP-MS is the gold standard); (3) the reference limits used for comparison; and (4) the laboratory's name and accreditation number. Brands that cannot or will not share a current, independent COA cannot be verified safe regardless of their label claims.",
    },
  },
  {
    "@type": "Question",
    name: "What is a safe level of lead in shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The FDA's guidance for lead in dietary supplements is below 10 ppm (parts per million). California's Proposition 65 sets a stricter threshold: the maximum allowable dose level (MADL) for lead is 0.5 micrograms per day for reproductive toxicity (cancer) and 15 micrograms per day for developmental effects. At a standard shilajit serving of 300–500 mg, a product at the FDA's 10 ppm limit would deliver 3–5 micrograms of lead per serving — which is above the Prop 65 cancer threshold. This is why brands with lead values well below the FDA limit (closer to 'not detected' or <0.1 ppm) are preferable to products merely meeting the limit.",
    },
  },
  {
    "@type": "Question",
    name: "Which shilajit brands test for heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Among brands in our database, four have documented heavy metals testing: Black Lotus (IAS Laboratories, Phoenix AZ — full panel with actual values), Natural Shilajit (ISO-certified US labs, ICP-MS and LC-MS methodology), Pure Himalayan Shilajit (ISO/IEC 17025 accredited US laboratory — the highest internationally recognized testing standard), and Pürblack (US pharmaceutical-grade facility, third-party COA verified). Brands without publicly accessible COAs — including several Amazon-only listings in our database — cannot be verified regardless of label claims.",
    },
  },
];

export default function ShilajitHeavyMetalsFDA() {
  return (
    <BlogPostLayout
      heading={
        <>
          Shilajit Heavy Metals &amp; FDA —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            What Buyers Need to Know in 2026
          </span>
        </>
      }
      description="The factual guide to shilajit heavy metals contamination: what metals are present, what the FDA says, what California Prop 65 means, how ICP-MS testing works, and which brands in our database have verified panels."
      tags={["Safety", "Heavy Metals", "FDA", "COA", "Regulation"]}
      publishedAt="2026-04-23"
      updatedAt="2026-04-23"
      readingTimeMin={11}
      currentSlug="shilajit-heavy-metals-fda"
      breadcrumbLabel="Shilajit Heavy Metals & FDA"
      faqItems={faqItems}
      ctaVariant="black-lotus"
      quizCta="line"
    >
      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this
        page are affiliate links. We may earn a commission if you purchase at no extra cost to
        you. This does not affect our safety assessments or rankings — see our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">
          full disclosure policy
        </Link>
        . This page is informational only and does not constitute medical advice.
      </div>

      {/* Intro */}
      <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
        <p>
          Heavy metal contamination is the most substantiated safety concern in the shilajit
          market. It is not a hypothetical risk invented by critics — it is a documented,
          geologically inevitable characteristic of how shilajit forms, and it has resulted in
          real cases of toxicity from untested products.
        </p>
        <p>
          That said, it is also a manageable and verifiable risk. Shilajit purchased from brands
          with published Certificates of Analysis from accredited independent laboratories —
          showing actual measured values within established safety limits — addresses the concern
          directly and factually.
        </p>
        <p>
          This page covers exactly what the concern is, what regulatory bodies say about it,
          how testing works, and which brands in our database have done the work to verify their
          products. It is not designed to alarm or to reassure — only to inform.
        </p>
        <p>
          For a broader overview of shilajit safety beyond heavy metals, see our{" "}
          <Link href="/blog/shilajit-safety-guide" className="text-[#10B981] hover:underline font-medium">
            complete shilajit safety guide
          </Link>
          .
        </p>
      </div>

      {/* Section 1: What heavy metals are found in shilajit */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What Heavy Metals Are Found in Shilajit — and Why
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit forms through the geological compression of organic matter — mosses,
            lichens, microbial biomass — between layers of rock over millions of years at high
            altitude. The same mineralization process that yields concentrated fulvic acid and
            trace minerals also concentrates whatever else is present in the surrounding
            geology. In many mountain formations, this includes naturally occurring deposits of
            lead, mercury, arsenic, and cadmium — independent of any industrial activity.
          </p>
          <p>
            Four metals are routinely screened in dietary supplement testing and are the ones
            that matter for shilajit safety evaluation:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                metal: "Lead (Pb)",
                fdaLimit: "< 10 ppm",
                prop65: "0.5 μg/day (cancer) · 15 μg/day (developmental)",
                mechanism: "Neurotoxic; crosses blood-brain barrier and placental barrier; bioaccumulates in bone",
                source: "Common in granite and limestone formations globally; no safe threshold is established below which all effects disappear",
                color: "border-red-200 bg-red-50",
                label: "Highest concern",
                labelColor: "text-red-700",
              },
              {
                metal: "Mercury (Hg)",
                fdaLimit: "< 3 ppm",
                prop65: "Not separately listed for supplements",
                mechanism: "Neurological and renal toxicity; methylmercury (organic form) is more bioavailable and crosses the blood-brain barrier",
                source: "Natural geological deposits; varies widely by region; Altai and Himalayan formations have generally low background mercury",
                color: "border-amber-200 bg-amber-50",
                label: "Tightest FDA limit",
                labelColor: "text-amber-700",
              },
              {
                metal: "Arsenic (As)",
                fdaLimit: "< 15 ppm (total)",
                prop65: "Inorganic arsenic listed as carcinogen",
                mechanism: "Inorganic arsenic is carcinogenic; organic arsenic (as in seafood) is far less toxic. COAs should ideally specify inorganic arsenic separately",
                source: "Phosphate-rich and sulfide-containing geological formations; common in mountain rock systems",
                color: "border-amber-200 bg-amber-50",
                label: "Form matters",
                labelColor: "text-amber-700",
              },
              {
                metal: "Cadmium (Cd)",
                fdaLimit: "< 5 ppm",
                prop65: "Listed carcinogen and reproductive toxin",
                mechanism: "Accumulates primarily in kidneys; long biological half-life (10–30 years) makes chronic low-level exposure more significant than acute exposure",
                source: "Associated with zinc ore deposits and phosphate rock formations",
                color: "border-[#D1EDD8] bg-white",
                label: "Bioaccumulates",
                labelColor: "text-[#7BA899]",
              },
            ].map(({ metal, fdaLimit, prop65, mechanism, source, color, label, labelColor }) => (
              <div key={metal} className={`border-2 rounded-2xl p-5 shadow-sm ${color}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-extrabold text-[#0D1F14]">{metal}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wide ${labelColor}`}>{label}</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#0D1F14]">
                  <div><span className="font-semibold text-[#7BA899]">FDA limit:</span> {fdaLimit}</div>
                  <div><span className="font-semibold text-[#7BA899]">Prop 65:</span> {prop65}</div>
                  <div><span className="font-semibold text-[#7BA899]">Health concern:</span> {mechanism}</div>
                  <div><span className="font-semibold text-[#7BA899]">Geological origin:</span> {source}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Metal</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">FDA Dietary Supplement Limit</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">California Prop 65 MADL</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">ICP-MS Detection Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lead (Pb)", "< 10 ppm", "0.5 μg/day (cancer) · 15 μg/day (developmental)", "< 0.001 ppm"],
                  ["Mercury (Hg)", "< 3 ppm", "Not separately specified", "< 0.001 ppm"],
                  ["Arsenic (As)", "< 15 ppm total", "Inorganic form listed as carcinogen", "< 0.001 ppm"],
                  ["Cadmium (Cd)", "< 5 ppm", "Listed carcinogen and reproductive toxin", "< 0.001 ppm"],
                ].map(([metal, fda, prop65, icpms], i) => (
                  <tr key={metal} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{metal}</td>
                    <td className="px-4 py-3 text-amber-700 font-medium">{fda}</td>
                    <td className="px-4 py-3 text-[#555]">{prop65}</td>
                    <td className="px-4 py-3 text-[#10B981] font-mono">{icpms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#7BA899]">
            MADL = Maximum Allowable Dose Level. Prop 65 thresholds are based on daily exposure,
            not product concentration. FDA limits are per-gram concentration limits for dietary
            supplements.
          </p>
        </div>
      </div>

      {/* Section 2: FDA position */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The FDA&apos;s Position on Shilajit and Heavy Metals
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The FDA regulates shilajit as a dietary supplement under the Dietary Supplement
            Health and Education Act (DSHEA) of 1994. This has several specific implications
            for how heavy metals contamination is governed:
          </p>

          <div className="space-y-3">
            {[
              {
                heading: "No pre-market approval",
                body: "Unlike pharmaceutical drugs, dietary supplements — including shilajit — are not reviewed or approved by the FDA before reaching consumers. Manufacturers bear the legal responsibility for ensuring their products are safe before marketing. The FDA acts post-market, meaning it monitors products already in commerce.",
              },
              {
                heading: "Good Manufacturing Practices (GMPs) are mandatory",
                body: "FDA's Current GMP regulations (21 CFR Part 111) require dietary supplement manufacturers to establish quality control procedures, test identity and purity, and maintain batch records. GMP compliance is required by law — it is not a premium feature. However, GMP does not specify heavy metals limits; that guidance comes separately.",
              },
              {
                heading: "Heavy metals guidance is advisory, not a mandatory limit",
                body: "The FDA has published guidance suggesting maximum levels for heavy metals in dietary supplements (Pb <10 ppm, Hg <3 ppm, As <15 ppm, Cd <5 ppm). Critically, these are guidance values — not mandatory regulatory limits with automatic enforcement. A product exceeding them is not automatically illegal, but the FDA can initiate enforcement action if it determines a product is adulterated or misbranded.",
              },
              {
                heading: "No category-wide shilajit warning as of 2026",
                body: "The FDA has not issued a specific import alert, warning letter, or safety advisory targeting shilajit as a product category as of this writing. Individual enforcement actions have occurred against specific supplement products with documented heavy metals violations, but these have not been category-wide shilajit actions.",
              },
              {
                heading: "Adverse event reporting (MedWatch)",
                body: "Manufacturers are required to report serious adverse events to the FDA. Consumers and healthcare providers can also submit reports. These reports are publicly searchable in FDA's CFSAN database, though underreporting is a well-documented limitation of this system.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="bg-white border border-[#D1EDD8] rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#10B981] mb-1.5">{heading}</h3>
                <p className="text-xs text-[#0D1F14] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <p>
            The practical implication of this regulatory structure: because the FDA does not
            test shilajit products before they reach market, the burden of verification falls
            entirely on the buyer. Independent third-party COAs are the only mechanism that
            substitutes for the pre-market approval process that dietary supplements do not
            receive.
          </p>
        </div>
      </div>

      {/* Section 3: California Prop 65 */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          California Proposition 65 and Shilajit
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            California&apos;s Safe Drinking Water and Toxic Enforcement Act of 1986 — universally
            known as Proposition 65 — requires businesses to provide a specific warning before
            knowingly exposing Californians to substances on a list of chemicals known to cause
            cancer, birth defects, or other reproductive harm.
          </p>
          <p>
            Lead is on the Prop 65 list. This is significant for shilajit buyers in California
            — and for anyone evaluating product safety — for several reasons:
          </p>

          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-amber-800 mb-3">
              How Prop 65 Applies to Shilajit
            </h3>
            <div className="space-y-3 text-xs text-[#0D1F14]">
              <div className="flex gap-3">
                <span className="text-amber-600 font-bold shrink-0">1.</span>
                <div>
                  <strong>The Prop 65 lead MADL is much stricter than the FDA limit.</strong>{" "}
                  FDA guidance allows up to 10 ppm lead in a dietary supplement. Prop 65&apos;s
                  Maximum Allowable Dose Level (MADL) for lead is 0.5 micrograms per day for
                  cancer risk and 15 micrograms per day for developmental effects. At a
                  standard 300 mg shilajit serving, a product with lead at 10 ppm would deliver
                  3 micrograms per serving — 6× the cancer MADL but below the developmental
                  MADL.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-600 font-bold shrink-0">2.</span>
                <div>
                  <strong>A Prop 65 warning does not mean a product is dangerous.</strong>{" "}
                  It means the manufacturer is being conservative and disclosing a potential
                  exposure. Many legitimate, well-tested products carry the warning. Its
                  absence does not mean lead is absent — it may mean the brand has not been
                  sold in California or has not been subject to enforcement.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-600 font-bold shrink-0">3.</span>
                <div>
                  <strong>
                    The best position is a COA with lead &quot;not detected&quot; or well below 1 ppm.
                  </strong>{" "}
                  This eliminates both the FDA concern and the Prop 65 concern simultaneously.
                  &quot;Not detected&quot; in ICP-MS testing means the level fell below the instrument&apos;s
                  detection limit — typically around 0.001 ppm.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-600 font-bold shrink-0">4.</span>
                <div>
                  <strong>Sunfood Superfoods shilajit capsules carry a Prop 65 warning</strong>{" "}
                  in our database — one of the few brands that explicitly discloses it. This is
                  actually more transparent behavior than brands that have no COA at all.
                </div>
              </div>
            </div>
          </div>

          <p>
            For California residents specifically: a product without any Prop 65 warning and
            without a published COA is in a more ambiguous position than a product that either
            discloses the warning or publishes a COA showing lead below detectable thresholds.
          </p>
        </div>
      </div>

      {/* Section 4: Memorial Sloan Kettering */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Memorial Sloan Kettering&apos;s Assessment — Addressed Directly
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Memorial Sloan Kettering Cancer Center maintains one of the most widely cited
            integrative medicine databases for herbs and supplements. Their entry on shilajit
            is regularly referenced in discussions of its safety, so it is worth addressing
            precisely rather than dismissively.
          </p>

          <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-[#10B981]">
              What MSK&apos;s Database Actually States on Heavy Metals
            </h3>
            <div className="space-y-2 text-xs text-[#0D1F14]">
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold shrink-0 mt-0.5">⚠</span>
                <span>
                  MSK specifically flags <strong>heavy metal contamination</strong> as a
                  documented risk, noting that commercially available shilajit products have
                  been found to contain elevated lead, mercury, and arsenic.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold shrink-0 mt-0.5">⚠</span>
                <span>
                  MSK notes the <strong>lack of product standardization</strong> — meaning
                  that the safety and bioactive profile varies substantially across products
                  sold under the &quot;shilajit&quot; name.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">→</span>
                <span>
                  MSK does <strong>not</strong> state that all shilajit is contaminated or
                  that no shilajit product can be safe. Their concern is product-level — about
                  the specific product, not the substance category.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">→</span>
                <span>
                  MSK does not recommend shilajit for cancer treatment or prevention, and
                  notes limited human clinical data. These are separate concerns from the
                  heavy metals safety question.
                </span>
              </div>
            </div>
          </div>

          <p>
            The honest reading of MSK&apos;s position: they are flagging exactly what this page is
            flagging — that untested or poorly characterized products carry a genuine heavy
            metals risk. A product with a published, independent, accredited COA showing metals
            within limits directly addresses the concern MSK raises. It does not address the
            separate questions of limited human clinical data or efficacy claims.
          </p>

          <p>
            For a full breakdown of MSK&apos;s positions on shilajit — including efficacy and
            long-term safety — see the{" "}
            <Link href="/blog/shilajit-safety-guide" className="text-[#10B981] hover:underline font-medium">
              complete shilajit safety guide
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Section 5: ICP-MS methodology */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How Brands Test for Heavy Metals — ICP-MS Methodology Explained
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Inductively Coupled Plasma Mass Spectrometry (ICP-MS) is the analytical gold
            standard for trace metal analysis in dietary supplements and food products. It is
            the method referenced in FDA guidance and used by the most credible testing
            laboratories. Understanding how it works helps you evaluate whether a COA is
            trustworthy.
          </p>

          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#10B981] mb-4">How ICP-MS Works</h3>
            <div className="space-y-3 text-xs text-[#0D1F14]">
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">1</span>
                <div>
                  <strong>Sample preparation:</strong> The shilajit sample is dissolved in
                  acid (typically nitric acid) to break down the organic matrix and release
                  all metal ions into solution.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">2</span>
                <div>
                  <strong>Plasma ionization:</strong> The solution is introduced into an
                  argon plasma at approximately 6,000–10,000 K — hotter than the surface of
                  the sun — which ionizes all metal atoms present.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">3</span>
                <div>
                  <strong>Mass separation:</strong> Ions are separated by their mass-to-charge
                  ratio in the mass spectrometer, allowing each element to be identified and
                  quantified with extreme precision.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">4</span>
                <div>
                  <strong>Quantification:</strong> Detection limits typically reach 0.001 ppm
                  (1 part per billion) — orders of magnitude more sensitive than older
                  methods. This means &quot;Not Detected&quot; (ND) on an ICP-MS COA is a
                  genuinely meaningful result, not just &quot;below our measurement capacity.&quot;
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Method</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Detection Limit</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Used By</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ICP-MS", "~0.001 ppm", "Premium labs (IAS, ISO/IEC 17025 accredited)", "Gold standard; FDA-referenced; used for regulatory submissions"],
                  ["ICP-OES", "~0.01–0.1 ppm", "Mid-tier labs", "Less sensitive than ICP-MS; adequate for higher concentrations"],
                  ["AAS (Atomic Absorption)", "~0.1–1 ppm", "Older labs", "Element-by-element; slower; less sensitive than ICP methods"],
                  ["X-ray fluorescence (XRF)", "~1–10 ppm", "Field screening", "Non-destructive but much less sensitive; not suitable for COA verification"],
                ].map(([method, limit, used, notes], i) => (
                  <tr key={method} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                    <td className={`px-4 py-3 font-bold ${i === 0 ? "text-[#10B981]" : "text-[#0D1F14]"}`}>{method}</td>
                    <td className="px-4 py-3 font-mono text-[#555]">{limit}</td>
                    <td className="px-4 py-3 text-[#555]">{used}</td>
                    <td className="px-4 py-3 text-[#555]">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            When evaluating a COA, look for the method stated as &quot;ICP-MS&quot; or
            &quot;ICP/MS.&quot; Some brands use LC-MS (Liquid Chromatography-Mass Spectrometry)
            for organic compound analysis — this is complementary to ICP-MS for heavy metals,
            not a replacement. Natural Shilajit uses both ICP-MS and LC-MS, giving the most
            comprehensive analytical picture in our database.
          </p>
        </div>
      </div>

      {/* Section 6: Safe limits on a COA */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What Safe Heavy Metal Limits Look Like on a COA
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            A well-structured heavy metals COA panel contains specific information that
            distinguishes it from a meaningless marketing claim. Here is how to read one
            correctly — with the elements a legitimate document must include versus what
            red-flag documents typically show.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-[#10B981] mb-3">
                ✓ What a credible COA shows
              </h3>
              <ul className="space-y-2 text-xs text-[#0D1F14]">
                {[
                  "Specific measured value per analyte (e.g., 'Lead: 0.04 ppm' or 'ND')",
                  "Reference limit shown alongside result (e.g., 'Limit: 10.0 ppm')",
                  "Pass/Fail determination AND the numerical basis for it",
                  "Analytical method stated (ICP-MS preferred)",
                  "Laboratory name, accreditation number, and report date",
                  "Sample identification number linking to the specific batch",
                  "All four metals: Pb, Hg, As, Cd — each with its own row",
                  "Detection limit stated (should be ≤0.01 ppm for ICP-MS)",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-500 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-red-600 mb-3">
                ✗ Red flags in a COA
              </h3>
              <ul className="space-y-2 text-xs text-[#0D1F14]">
                {[
                  "Only 'PASS' shown with no numerical values",
                  "Missing one or more of the four metals",
                  "No laboratory name or accreditation",
                  "Method not stated or stated as XRF (insufficient sensitivity)",
                  "Generic date not tied to a specific batch or lot number",
                  "Outdated document (>18 months old for a current product)",
                  "No detection limit stated",
                  "In-house testing — no independent third-party verification",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p>
            The most important single distinction: <strong>a PASS without a number is not
            a COA — it is a label.</strong> Anyone can write &quot;heavy metals tested&quot; on packaging.
            Only a document showing the actual measured value, the reference limit, and the
            laboratory identity constitutes evidence.
          </p>

          <p>
            For a detailed walkthrough of every section of a shilajit COA — including fulvic
            acid percentage, microbial panels, and accreditation logos — see our{" "}
            <Link href="/blog/how-to-read-shilajit-coa" className="text-[#10B981] hover:underline font-medium">
              how to read a shilajit COA guide
            </Link>
            . You can also see real COA examples for verified brands on our{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline font-medium">
              lab data page
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Section 7: Brands with verified testing */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Brands in Our Database With Verified Heavy Metals Panels
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Four brands in our database have documented, third-party heavy metals testing with
            enough specificity to evaluate. Our{" "}
            <Link href="/methodology" className="text-[#10B981] hover:underline font-medium">
              rating methodology
            </Link>{" "}
            details how we assess COA quality. Here is the lab-level breakdown for each:
          </p>
        </div>

        <div className="mt-5 space-y-4">

          {/* Black Lotus */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-5 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-amber-400 text-amber-900 flex items-center justify-center text-xs font-black shrink-0">S</span>
                <h3 className="text-sm font-extrabold text-[#0D1F14]">Black Lotus Shilajit</h3>
              </div>
              <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest">IAS Laboratories · Phoenix, AZ</span>
            </div>
            <div className="p-5">
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#0D1F14]">
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">Testing lab:</span> IAS Laboratories, Phoenix, Arizona</div>
                  <div><span className="font-semibold text-[#7BA899]">Method:</span> ICP-MS (heavy metals full panel)</div>
                  <div><span className="font-semibold text-[#7BA899]">Accreditation:</span> ISO-accredited analytical laboratory</div>
                  <div><span className="font-semibold text-[#7BA899]">Fulvic acid:</span> 64.51% resin / 74.30% caps (Batch 93 COA, IAS Labs)</div>
                </div>
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">COA accessibility:</span> Available on request / published per batch</div>
                  <div><span className="font-semibold text-[#7BA899]">Values shown:</span> Actual ppm measurements (not PASS only)</div>
                  <div><span className="font-semibold text-[#7BA899]">Source:</span> Altai Mountains, Siberia</div>
                  <div><span className="font-semibold text-[#7BA899]">Processing:</span> Cold-process, GMP certified facility</div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={AFFILIATE_BL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#182B1F] hover:bg-[#10B981] text-white text-xs font-bold transition-colors"
                >
                  Shop Black Lotus →
                </a>
              </div>
            </div>
          </div>

          {/* Natural Shilajit */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-5 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-amber-400 text-amber-900 flex items-center justify-center text-xs font-black shrink-0">S</span>
                <h3 className="text-sm font-extrabold text-[#0D1F14]">Natural Shilajit</h3>
              </div>
              <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest">ISO-Certified US Labs · ICP-MS + LC-MS</span>
            </div>
            <div className="p-5">
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#0D1F14]">
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">Testing lab:</span> ISO-certified US laboratories</div>
                  <div><span className="font-semibold text-[#7BA899]">Method:</span> ICP-MS (heavy metals) + LC-MS (organic compounds) + FTIR (identity)</div>
                  <div><span className="font-semibold text-[#7BA899]">Additional tests:</span> DBP quantification — one of the only brands to verify dibenzo-α-pyrones</div>
                  <div><span className="font-semibold text-[#7BA899]">Accreditation:</span> ISO-certified laboratories</div>
                </div>
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">Source:</span> UNESCO-protected Golden Mountains of Altai, Siberia</div>
                  <div><span className="font-semibold text-[#7BA899]">Processing:</span> Cold water extraction + microfiltration (0.45–1.0 μm), no solvents</div>
                  <div><span className="font-semibold text-[#7BA899]">Analytical breadth:</span> Most comprehensive test panel in our database</div>
                  <div><span className="font-semibold text-[#7BA899]">FDA registered:</span> Yes</div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={AFFILIATE_NS}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#182B1F] hover:bg-[#10B981] text-white text-xs font-bold transition-colors"
                >
                  Shop Natural Shilajit →
                </a>
              </div>
            </div>
          </div>

          {/* Pure Himalayan */}
          <div className="bg-white border-2 border-amber-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-amber-50 border-b border-amber-200 px-5 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-amber-400 text-amber-900 flex items-center justify-center text-xs font-black shrink-0">S</span>
                <h3 className="text-sm font-extrabold text-[#0D1F14]">Pure Himalayan Shilajit</h3>
              </div>
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">ISO/IEC 17025 Accredited US Laboratory</span>
            </div>
            <div className="p-5">
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#0D1F14]">
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">Testing lab:</span> Third-party USA ISO/IEC 17025 accredited laboratory</div>
                  <div><span className="font-semibold text-[#7BA899]">Accreditation:</span> ISO/IEC 17025 — the highest internationally recognized standard for laboratory competence</div>
                  <div><span className="font-semibold text-[#7BA899]">Purity claim:</span> Up to 99.9% pure — no fillers or additives</div>
                  <div><span className="font-semibold text-[#7BA899]">Fulvic acid:</span> 60% (COA verified)</div>
                </div>
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">Source:</span> Himalayan Mountains, 16,000+ ft</div>
                  <div><span className="font-semibold text-[#7BA899]">Testing scope:</span> Heavy metals safety panel on every batch</div>
                  <div>
                    <span className="font-semibold text-[#7BA899]">Why it matters:</span>{" "}
                    ISO/IEC 17025 accreditation is the only lab standard that internationally
                    certifies both technical competence and management system — it is a higher
                    standard than generic ISO certification
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={PURE_HIMALAYAN_RESIN}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold transition-colors"
                >
                  Shop Pure Himalayan →
                </a>
              </div>
            </div>
          </div>

          {/* Pürblack */}
          <div className="bg-white border-2 border-purple-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-purple-50 border-b border-purple-200 px-5 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-emerald-500 text-white flex items-center justify-center text-xs font-black shrink-0">A</span>
                <h3 className="text-sm font-extrabold text-[#0D1F14]">Pürblack</h3>
              </div>
              <span className="text-[10px] font-bold text-purple-700 uppercase tracking-widest">US Pharmaceutical-Grade Facility · 5 Patents</span>
            </div>
            <div className="p-5">
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#0D1F14]">
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">Facility:</span> US pharmaceutical-grade manufacturing facility</div>
                  <div><span className="font-semibold text-[#7BA899]">Patents:</span> 5 US patents covering 4th and 5th-generation live resin purification</div>
                  <div><span className="font-semibold text-[#7BA899]">Testing:</span> Third-party COA verified, US facility oversight</div>
                  <div><span className="font-semibold text-[#7BA899]">FDA oversight:</span> US manufacturing subject to FDA inspection protocols</div>
                </div>
                <div className="space-y-2">
                  <div><span className="font-semibold text-[#7BA899]">Source:</span> Multi-region (Caucasus, Siberia, Himalayas)</div>
                  <div>
                    <span className="font-semibold text-[#7BA899]">Context:</span>{" "}
                    The pharmaceutical-grade US facility means Pürblack&apos;s manufacturing is
                    subject to FDA facility inspection requirements that don&apos;t apply to
                    overseas-manufactured products — an additional safety layer
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={AFFILIATE_PB}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-white text-xs font-bold transition-colors"
                >
                  Shop Pürblack →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            For a full ranking of brands across all quality criteria — including COA status,
            fulvic acid percentage, testing lab, and price per gram — see our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline font-medium">
              ranked guide to the best shilajit brands
            </Link>
            . The{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline font-medium">
              lab data page
            </Link>{" "}
            shows the specific COA documentation we have reviewed for each verified brand.
          </p>
        </div>
      </div>

      {/* Section 8: Brands to avoid */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Brands to Approach With Caution — No Public COA
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Our database tracks 74+ products. Among these, a significant number lack publicly
            accessible COAs with actual heavy metals values. We do not list specific brand names
            in a &quot;brands to avoid&quot; context without full review — but we can describe the
            pattern clearly:
          </p>

          <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Pattern</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Risk Level</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">What to Do</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Amazon-only brands with no website and no COA link in listing",
                    "High",
                    "Request COA by email before purchase; if no response, avoid",
                  ],
                  [
                    "Brands claiming 'heavy metals tested' with no document accessible",
                    "High",
                    "Ask for the lab name, report date, and specific values — if they can't provide, treat as unverified",
                  ],
                  [
                    "Bulk powder products under $0.30/g with no testing disclosure",
                    "High",
                    "The margin cannot support ICP-MS testing; treat as unverified",
                  ],
                  [
                    "COA shows only PASS/FAIL, no numerical values",
                    "Medium-High",
                    "Treat as unverified — this is a label characterization, not a COA",
                  ],
                  [
                    "Brand uses Prop 65 warning without published COA",
                    "Medium",
                    "The warning is transparent but tells you nothing about actual levels — still request COA",
                  ],
                  [
                    "COA from in-house or unnamed lab",
                    "Medium",
                    "In-house testing has no independence; ask for the third-party lab name and verify it is accredited",
                  ],
                ].map(([pattern, risk, action], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                    <td className="px-4 py-3 text-[#0D1F14] font-medium leading-tight">{pattern}</td>
                    <td className={`px-4 py-3 font-bold ${risk.startsWith("High") ? "text-red-600" : "text-amber-600"}`}>
                      {risk}
                    </td>
                    <td className="px-4 py-3 text-[#555] leading-tight">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            For our complete methodology on how we evaluate and tier brands — including the
            specific criteria for COA verification — see the{" "}
            <Link href="/methodology" className="text-[#10B981] hover:underline font-medium">
              methodology page
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Inline BlackLotusCTA */}
      <BlackLotusCTA
        headline="Black Lotus — IAS Labs Phoenix Verified, Full Heavy Metals Panel"
        subtext="ICP-MS tested at IAS Laboratories, Phoenix AZ · 64.51% fulvic acid (resin, Batch 93 COA) · All heavy metals within FDA limits · Cold-processed Altai resin · S-tier rated in our database."
        buttonText="Shop Black Lotus Resin — $36.99 →"
      />

      {/* Section 9: Verdict */}
      <div>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Verdict</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit and heavy metals is not a controversy — it is a geological fact. Shilajit
            concentrates minerals. Some of those minerals are hazardous at sufficient doses.
            Independent ICP-MS testing is the mechanism by which the risk is either confirmed
            safe or not.
          </p>
          <p>
            The FDA does not pre-approve shilajit. California Prop 65&apos;s lead thresholds are
            stricter than the FDA&apos;s guidance and are more relevant to everyday exposure levels.
            Memorial Sloan Kettering&apos;s concern is accurately characterized: untested products
            are genuinely risky, and tested products address that concern directly.
          </p>

          <div className="bg-[#F0FAF4] border border-[#9EC9AD] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">
              The practical checklist before buying any shilajit:
            </h3>
            <ul className="space-y-2 text-xs text-[#0D1F14]">
              {[
                "Is a COA from a named, independent, accredited lab available — not just claimed?",
                "Does the COA show actual ppm values (not just PASS) for Pb, Hg, As, and Cd?",
                "Is the analytical method stated as ICP-MS or equivalent?",
                "Are all four values below FDA guidance limits? (Pb <10 ppm, Hg <3 ppm, As <15 ppm, Cd <5 ppm)",
                "Ideally: are values at or near 'Not Detected' — not merely below the limit?",
                "Is the COA current (dated within 18 months) and batch-specific?",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            The four brands in our database that meet this standard — Black Lotus (IAS Labs,
            Phoenix), Natural Shilajit (ISO-certified US labs, ICP-MS + LC-MS), Pure Himalayan
            (ISO/IEC 17025 accredited US lab), and Pürblack (US pharmaceutical-grade facility)
            — have done the verification work. Products without equivalent documentation have not.
          </p>
          <p>
            For the heavy metals data specifically for each brand in our database, see the{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline font-medium">
              lab data page
            </Link>
            . For a deeper dive into the specific COA sections that cover safety, see our guide
            on{" "}
            <Link href="/blog/shilajit-heavy-metals-safety" className="text-[#10B981] hover:underline font-medium">
              shilajit heavy metals — what&apos;s safe and what&apos;s not
            </Link>
            .
          </p>
        </div>
      </div>
    </BlogPostLayout>
  );
}
