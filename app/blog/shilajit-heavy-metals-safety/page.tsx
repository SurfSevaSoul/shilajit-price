import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

const AFFILIATE_RESIN = "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_CAPS = "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-resin-powder-capsules-extra-strength?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_BASE = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const PURE_HIMALAYAN_BASE = "https://www.purehimalayanshilajit.com/?ref=4792";
const PURE_HIMALAYAN_RESIN = "https://www.purehimalayanshilajit.com/buy-shilajit/?ref=4792";
const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-heavy-metals-safety`;

export const metadata: Metadata = {
  title: "Shilajit Heavy Metals — What's Safe and What's Not",
  description:
    "Why heavy metals are a real risk in shilajit, what Lead/Mercury/Arsenic/Cadmium safety limits are, how to read a heavy metals panel on a COA, and which brands in our database actually pass.",
  keywords:
    "shilajit heavy metals, shilajit safety, shilajit COA, shilajit lead mercury arsenic, shilajit testing, is shilajit safe, shilajit contamination",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Shilajit Heavy Metals — What's Safe and What's Not",
    description:
      "Why heavy metals are a real risk in shilajit, what Lead/Mercury/Arsenic/Cadmium safety limits are, how to read a heavy metals panel on a COA, and which brands in our database actually pass.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-15",
    modifiedTime: "2026-04-15",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Does shilajit contain heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit forms in mineral-rich rock layers and can naturally concentrate minerals, including potentially hazardous ones like lead, mercury, arsenic, and cadmium. Whether a finished shilajit product contains problematic levels depends entirely on the geological source, purification process, and whether independent lab testing has verified the final product. High-quality brands with published COAs can confirm their specific heavy metal content.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit safe to take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit from reputable brands with independent third-party testing and published COAs showing heavy metals within FDA dietary supplement limits is considered safe for healthy adults at standard doses. The risk comes from products that have not been independently tested or that come from regions with industrial contamination. Always verify that a brand has a current, publicly accessible COA before purchasing.",
    },
  },
  {
    "@type": "Question",
    name: "What heavy metals are in shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The four heavy metals routinely screened in shilajit are lead (Pb), mercury (Hg), arsenic (As), and cadmium (Cd). These are present in trace amounts in virtually all geological formations and can concentrate in shilajit. The question is not whether they are present in any amount, but whether they are below established safety thresholds. FDA limits are: Lead <10 ppm, Mercury <3 ppm, Arsenic <15 ppm, Cadmium <5 ppm.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if a shilajit brand tests for heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Ask for a Certificate of Analysis (COA) from an independent laboratory. A legitimate heavy metals COA will show: the specific measured value (not just 'PASS'), the analytical method used (ICP-MS is the gold standard), the reference limit for each metal, and results for all four key metals (Lead, Mercury, Arsenic, Cadmium). Brands that can't or won't share a COA should be avoided.",
    },
  },
  {
    "@type": "Question",
    name: "Which shilajit brands have the cleanest heavy metals testing?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Among brands in our database, Black Lotus and Pure Himalayan both have the most transparent heavy metals documentation. Black Lotus publishes a full-panel COA from an independent lab. Pure Himalayan uses an ISO/IEC 17025-accredited lab, which represents the highest internationally recognized standard for laboratory competence. Both have shown heavy metals results within safe limits.",
    },
  },
];

export default function ShilajitHeavyMetalsSafety() {
  return (
      <BlogPostLayout
        heading={
          <>
            Shilajit Heavy Metals —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              What&apos;s Safe and What&apos;s Not
            </span>
          </>
        }
        description="Why heavy metals are a real risk in shilajit, what Lead/Mercury/Arsenic/Cadmium safety limits are, how to read a heavy metals panel on a COA, and which brands in our database actually pass."
        tags={["Safety", "Heavy Metals", "COA"]}
        publishedAt="2026-04-15"
        updatedAt="2026-04-15"
        readingTimeMin={8}
        currentSlug="shilajit-heavy-metals-safety"
        quizCta="line"
        breadcrumbLabel="Shilajit Heavy Metals Safety"
        faqItems={faqItems}
      >
        {/* FTC Disclosure */}
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
          <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page
          are affiliate links. If you purchase through them, we may earn a commission at no extra
          cost to you. This does not affect our rankings — see our{" "}
          <Link href="/disclaimer" className="text-[#10B981] hover:underline">
            full disclosure policy
          </Link>
          .
        </div>

        {/* Intro */}
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Heavy metal contamination is the most legitimate safety concern in the shilajit market.
            Unlike quality issues around fulvic acid content or sourcing transparency, heavy metals
            are a genuine health risk — not marketing noise.
          </p>
          <p>
            Shilajit forms through the compression of organic matter in mineral-rich mountain rock
            over millennia. That geological process is exactly why shilajit contains concentrated
            fulvic acid, trace minerals, and bioactive compounds. It&apos;s also why it can concentrate
            problematic minerals from the surrounding geology, including lead, mercury, arsenic, and
            cadmium.
          </p>
          <p>
            This page explains what you need to know, how to verify it, and which brands in our
            database have documented their safety testing.
          </p>
        </div>

        {/* Section 1: Why susceptible */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Why Shilajit Is Particularly Susceptible to Heavy Metal Contamination
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Shilajit&apos;s formation process — organic matter compressed in rock layers over
              thousands of years — is both its source of value and its primary contamination risk.
              The same process that concentrates fulvic acid and minerals also concentrates whatever
              else is in the surrounding geology.
            </p>
            <p>
              In the high-altitude mountain ranges where shilajit is harvested — including the
              Himalayas, Altai, and Caucasus — naturally occurring geological deposits can include
              lead, mercury, arsenic, and cadmium from entirely natural sources, with no industrial
              activity involved.
            </p>
            <p>Key factors that affect heavy metal content in the final product:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Geological source:</strong> Different mountain regions and even different
                rock formations within a region have different mineral profiles. Not all shilajit is
                geologically identical.
              </li>
              <li>
                <strong>Purification method:</strong> Traditional water purification and modern
                filtration processes can reduce heavy metal content, but cannot be assumed to
                eliminate it without testing.
              </li>
              <li>
                <strong>Industrial proximity:</strong> Harvesting sites near industrial activity
                (mining, agriculture, manufacturing) face additional contamination risk beyond
                natural geology.
              </li>
              <li>
                <strong>Quality control:</strong> Without independent lab testing of the finished
                product, there is no way to verify what the purification process actually achieved.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: The four metals */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            The Four Heavy Metals to Check on Every COA
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Any credible shilajit COA should include results for these four metals. Here&apos;s what
              each one means and why it matters:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Lead (Pb) — FDA Limit: &lt;10 ppm</h3>
                <p className="text-sm text-[#0D1F14]">
                  Lead is present in many geological formations. Research suggests high lead exposure
                  is associated with neurological and cardiovascular effects. The FDA&apos;s 10 ppm limit
                  for dietary supplements provides a meaningful safety margin at standard serving
                  sizes.
                </p>
              </div>
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Mercury (Hg) — FDA Limit: &lt;3 ppm</h3>
                <p className="text-sm text-[#0D1F14]">
                  Mercury has the lowest allowed limit of the four. Research indicates it is
                  particularly concerning due to bioaccumulation. Organic (methylmercury) and
                  inorganic mercury forms have different absorption profiles and risk profiles.
                </p>
              </div>
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Arsenic (As) — FDA Limit: &lt;15 ppm</h3>
                <p className="text-sm text-[#0D1F14]">
                  Arsenic is common in geological formations, particularly phosphate-rich rock.
                  Inorganic arsenic is the form of greatest concern — organic arsenic (found
                  naturally in seafood, for example) has a different and less harmful profile. COAs
                  should ideally specify inorganic arsenic separately when possible.
                </p>
              </div>
              <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Cadmium (Cd) — FDA Limit: &lt;5 ppm</h3>
                <p className="text-sm text-[#0D1F14]">
                  Cadmium is found in phosphate-rich rock formations and accumulates primarily in
                  the kidneys. Studies indicate it has a long biological half-life, making chronic
                  low-level exposure a more significant concern than acute exposure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heavy metals reference table */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Heavy Metals Safety Reference Table
          </h2>
          <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4]">
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Metal</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Symbol</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">FDA Limit</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">ICP-MS Detection Limit</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Primary Health Concern</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lead", "Pb", "<10 ppm", "0.001 ppm", "Neurological"],
                  ["Mercury", "Hg", "<3 ppm", "0.001 ppm", "Neurological / Renal"],
                  ["Arsenic", "As", "<15 ppm total", "0.001 ppm", "Carcinogenic (inorganic form)"],
                  ["Cadmium", "Cd", "<5 ppm", "0.001 ppm", "Renal accumulation"],
                ].map(([metal, symbol, limit, detection, concern], i) => (
                  <tr key={metal} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                    <td className="px-4 py-3 font-semibold text-[#0D1F14]">{metal}</td>
                    <td className="px-4 py-3 text-[#555] font-mono">{symbol}</td>
                    <td className="px-4 py-3 text-[#D97706] font-medium">{limit}</td>
                    <td className="px-4 py-3 text-[#2D6A4F]">{detection}</td>
                    <td className="px-4 py-3 text-[#555]">{concern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#7BA899] mt-2">
            FDA limits per dietary supplement guidance. ICP-MS (Inductively Coupled Plasma Mass
            Spectrometry) is the laboratory gold standard for trace metal analysis.
          </p>
        </div>

        {/* Section 3: How to read a COA */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            How to Read a Heavy Metals Panel on a COA
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Not all COAs are equal. A certificate that says &quot;heavy metals tested — PASS&quot; without
              showing actual numbers tells you very little. Here&apos;s what a credible heavy metals panel
              should include:
            </p>
            <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
              <h3 className="text-lg font-bold text-[#10B981] mb-3">What to Look For on a Heavy Metals COA</h3>
              <ul className="space-y-3 text-sm text-[#0D1F14]">
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Actual measured values</strong> — Not just &quot;PASS.&quot; You should see a
                    specific number (e.g., &quot;Lead: 0.08 ppm&quot;) or &quot;ND&quot; (not detected).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Method stated as ICP-MS</strong> — Inductively Coupled Plasma Mass
                    Spectrometry is the gold standard for trace metal detection at the ppm and ppb
                    levels required for dietary supplements.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Reference limit listed</strong> — The COA should show the limit used
                    for comparison, ideally matching FDA guidance or equivalent international
                    standards.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <div>
                    <strong>All four metals covered</strong> — Lead, Mercury, Arsenic, and Cadmium
                    should each have their own row. Missing metals are a red flag.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Independent lab name and accreditation</strong> — The testing lab should
                    be named and ideally ISO/IEC 17025 accredited. Internal testing by the brand
                    itself is insufficient.
                  </div>
                </li>
              </ul>
            </div>
            <p>
              <strong>&quot;Not Detected&quot; (ND)</strong> means the measured level fell below the
              instrument&apos;s detection limit — typically 0.001 ppm for ICP-MS. This is the best
              possible result and indicates an extremely low level of contamination.
            </p>
            <p>
              A COA that only shows &quot;PASS&quot; without values means you&apos;re trusting the brand&apos;s
              characterization of their own results rather than seeing the data yourself. It&apos;s
              substantially less informative.
            </p>
          </div>
        </div>

        {/* Section 4: What purification means */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            What &quot;Purification&quot; Actually Means for Heavy Metals
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Many shilajit brands mention purification as a selling point — and traditional
              purification methods can genuinely reduce heavy metal content. Understanding what this
              means in practice matters for evaluating brand claims.
            </p>
            <p>
              Traditional purification methods, common in Ayurvedic practice, involve dissolving raw
              shilajit in water, filtering it, and repeating the process multiple times. This{" "}
              <em>can</em> progressively remove water-soluble metal compounds. Some modern brands use
              cold-processing or more advanced filtration systems.
            </p>
            <p>
              The limitation of relying on purification claims alone is straightforward:{" "}
              <strong>purification processes reduce heavy metals; they do not guarantee elimination.</strong>{" "}
              The effectiveness varies with the method, the duration, and the starting material.
            </p>
            <p>
              Only independent laboratory testing of the finished, packaged product can confirm what
              actually ended up in the product a consumer receives. This is why COA documentation is
              not optional — it&apos;s the only way to verify that purification claims translate to safe
              actual values.
            </p>
          </div>
        </div>

        {/* Section 5: Brands with verified testing */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Brands in Our Database With Verified Heavy Metals Testing
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              We reviewed heavy metals documentation across the brands in our database. Only two
              brands have the level of transparent, independently verified heavy metals documentation
              we consider sufficient:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Black Lotus</h3>
                <ul className="space-y-2 text-sm text-[#0D1F14]">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> Full heavy metals panel COA
                    published
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> Actual measured values shown (not
                    just PASS)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> Independent third-party laboratory
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> GMP certified manufacturing
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> 85%+ fulvic acid (also COA
                    verified)
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href={AFFILIATE_RESIN}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
                  >
                    Shop Black Lotus →
                  </a>
                </div>
              </div>
              <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
                <h3 className="text-lg font-bold text-[#10B981] mb-2">Pure Himalayan</h3>
                <ul className="space-y-2 text-sm text-[#0D1F14]">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> ISO/IEC 17025 accredited lab
                    testing
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> Heavy metals tested and within
                    limits
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> Highest internationally recognized
                    lab standard
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> 60% fulvic acid, authenticated
                    Himalayan source
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span> Transparent supply chain
                    documentation
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href={PURE_HIMALAYAN_RESIN}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
                  >
                    Shop Pure Himalayan →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Red flags */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Red Flags to Watch For
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Not every brand is forthcoming with testing data. These are the patterns that should
              raise concern:
            </p>
            <div className="rounded-xl border border-[#D1EDD8] overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#F0FAF4]">
                    <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Red Flag</th>
                    <th className="text-left px-4 py-3 font-bold text-[#0D1F14]">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      '"Heavy metals tested" with no COA link',
                      "Claims without documentation cannot be verified",
                    ],
                    [
                      "COA shows only PASS/FAIL without values",
                      "You're trusting their characterization, not the data",
                    ],
                    [
                      "Internal or in-house testing only",
                      "No independent verification of results",
                    ],
                    [
                      "Sourcing from industrially active regions",
                      "Higher baseline contamination risk beyond natural geology",
                    ],
                    [
                      "Price under $10–15 for significant quantity",
                      "Very low prices rarely support adequate purification costs",
                    ],
                    [
                      "No lab name or accreditation stated",
                      "Cannot assess lab competence or independence",
                    ],
                  ].map(([flag, why], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FEF9]"}>
                      <td className="px-4 py-3 font-semibold text-[#C44B4B]">{flag}</td>
                      <td className="px-4 py-3 text-[#555]">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 7: Bottom line */}
        <div>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            The Bottom Line on Heavy Metals Safety
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Heavy metal contamination in shilajit is a real risk — not a hypothetical one. The
              good news is that it&apos;s a verifiable risk. Brands that test properly and publish their
              results give you the information you need to make a confident decision.
            </p>
            <p>The practical standard for safety verification:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Require a published COA from an independent, accredited laboratory</li>
              <li>
                Confirm the COA shows actual measured values for Lead, Mercury, Arsenic, and
                Cadmium — not just a PASS result
              </li>
              <li>
                Verify results are below FDA dietary supplement limits (Pb &lt;10 ppm, Hg &lt;3 ppm,
                As &lt;15 ppm, Cd &lt;5 ppm)
              </li>
              <li>Check that the testing method is ICP-MS or equivalent</li>
            </ul>
            <p>
              Among the brands we&apos;ve reviewed, Black Lotus and Pure Himalayan meet this standard.
              Both have independent, full-panel heavy metals testing with actual values published. If
              a brand you&apos;re considering can&apos;t provide equivalent documentation, that&apos;s meaningful
              information.
            </p>
          </div>
        </div>

        {/* Internal links */}
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            For a deeper look at interpreting COA documents,{" "}
            <Link href="/blog/how-to-read-shilajit-coa" className="text-[#10B981] hover:underline">
              our COA reading guide
            </Link>{" "}
            walks through every section in plain language. To learn how to identify counterfeit or
            adulterated products more broadly, see{" "}
            <Link
              href="/blog/how-to-spot-fake-shilajit"
              className="text-[#10B981] hover:underline"
            >
              how to spot fake shilajit
            </Link>
            . You can also{" "}
            <Link href="/compare" className="text-[#10B981] hover:underline">
              compare all reviewed brands side by side
            </Link>
            , or read the{" "}
            <Link
              href="/blog/black-lotus-shilajit-review"
              className="text-[#10B981] hover:underline"
            >
              Black Lotus in-depth review
            </Link>
            .
          </p>
        </div>

        {/* CTA */}
        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
          <h3 className="text-lg font-bold text-[#10B981] mb-2">
            Verified Safe — Our Top Picks for Heavy Metals Testing
          </h3>
          <p className="text-sm text-[#0D1F14] mb-4">
            Both Black Lotus and Pure Himalayan have published independent COAs showing heavy metals
            within safe limits. Black Lotus at $36.99/30g offers the best price-per-gram with 85%+
            fulvic acid. Pure Himalayan at $39.99/30g offers ISO/IEC 17025-accredited testing —
            the highest international laboratory standard. For a full breakdown of which brands pass our heavy metals and COA standards, see our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline">
              ranked brand comparison
            </Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={AFFILIATE_RESIN}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
            >
              Shop Black Lotus →
            </a>
            <a
              href={PURE_HIMALAYAN_RESIN}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#D1EDD8] hover:border-emerald-400 text-[#0D1F14] text-sm font-semibold transition-colors"
            >
              Shop Pure Himalayan →
            </a>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#D1EDD8] hover:border-emerald-400 text-[#0D1F14] text-sm font-semibold transition-colors"
            >
              Compare All Brands
            </Link>
          </div>
        </div>
      </BlogPostLayout>
  );
}
