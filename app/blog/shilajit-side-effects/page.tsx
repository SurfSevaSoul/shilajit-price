import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

// ── Affiliate constants ────────────────────────────────────────────────────
const BL_RESIN =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const NS_RESIN =
  "https://naturalshilajit.com/products/natural-shilajit-resin?rfsn=9069392.c841fa";
const PH_RESIN = "https://www.purehimalayanshilajit.com/buy-shilajit/?ref=4792";
const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-side-effects`;

export const metadata: Metadata = {
  title: "Shilajit Side Effects — What You Need to Know Before Buying (2026) | ShilajitPrice.com",
  description:
    "Honest guide to shilajit side effects, who should not take it, the real heavy metals risk, safe dosage guidelines, and how to verify your product is safe.",
  keywords:
    "shilajit side effects, is shilajit safe, shilajit heavy metals, shilajit risks, shilajit safety",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Shilajit Side Effects — What You Need to Know Before Buying (2026)",
    description:
      "Honest guide to shilajit side effects, who should avoid it, heavy metals risk, safe dosage, and how to verify product safety.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-18",
    modifiedTime: "2026-04-24",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "What are the side effects of shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For most healthy adults taking purified, third-party tested shilajit, side effects are rare and typically mild when they do occur: digestive discomfort (usually from taking on an empty stomach), nausea during the first few days of use, or a strong earthy taste that some people find unpleasant. These reactions are almost always a sign of taking too large a dose too soon, or using a poorly purified product with impurities rather than a reaction to shilajit itself. Starting with a smaller dose (150–200mg daily) for the first week and increasing gradually eliminates most reported digestive reactions.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit safe to take every day?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, for healthy adults using purified, lab-tested shilajit. Clinical trials have used daily dosing for up to 90 days with no adverse effects reported at 250–500mg per day. Traditional Ayurvedic use is daily, often cycled with rest periods (e.g., 3 months on, 1 month off). The key qualifier is 'purified and tested' — unpurified raw shilajit or products without verified heavy metals panels are not safe for regular use due to contamination risk. Always verify your product has a full independent COA.",
    },
  },
  {
    "@type": "Question",
    name: "Can shilajit cause heavy metal poisoning?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Unverified, unpurified shilajit can contain dangerous levels of lead, arsenic, mercury, and cadmium — and there have been documented cases of heavy metal poisoning from contaminated shilajit products. This is a real risk, not a theoretical one. However, properly purified shilajit from a brand that publishes full heavy metals panel results from an independent lab is safe. The purification process — whether cold water extraction, traditional sun-drying, or other verified methods — removes heavy metal contamination. The risk is specifically from unpurified or inadequately processed products without independent testing.",
    },
  },
  {
    "@type": "Question",
    name: "Who should not take shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Several groups should avoid shilajit or consult a physician before use: pregnant or breastfeeding women (insufficient safety data for this population); people with hemochromatosis (iron overload disorder, as shilajit contains bioavailable iron); people with autoimmune conditions (shilajit may modulate immune function); anyone taking blood thinners or anticoagulants (possible interaction due to iron and mineral content); and anyone with a known kidney disease (some minerals in shilajit are filtered by the kidneys). This is not an exhaustive list — anyone with a pre-existing medical condition or on prescription medications should consult their physician before starting shilajit.",
    },
  },
  {
    "@type": "Question",
    name: "Can shilajit worsen iron overload or hemochromatosis?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit naturally contains iron, and fulvic acid — its primary bioactive compound — enhances mineral absorption across the gut lining. For the general population this is not a concern, but for people with hereditary hemochromatosis or other diagnosed iron overload disorders, adding a bioavailable iron source could contribute to further iron accumulation. Anyone with a diagnosed iron metabolism condition should consult their physician before using shilajit or any iron-containing supplement. This is a precaution for a specific at-risk group, not a risk that applies to most users.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if my shilajit is safe?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The only reliable way to confirm safety is a third-party Certificate of Analysis (COA) showing specific heavy metal values — not just 'pass' notations — from an independent accredited laboratory. Look for: lead below 10 mcg/g, arsenic below 10 mcg/g, mercury below 0.1 mcg/g, and cadmium below 4.1 mcg/g (FDA action levels). The lab should be named and independently verifiable. Additionally, look for GMP certification on the manufacturing facility, which ensures standard manufacturing hygiene practices. Products without these credentials cannot be considered verified safe.",
    },
  },
];

export default function ShilajitSideEffects() {
  return (

      <BlogPostLayout
        heading={
          <>
            Shilajit Side Effects —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              What You Need to Know Before Buying (2026)
            </span>
          </>
        }
        description="Shilajit is safe for most healthy adults — but there are real things to know before you start. This guide covers common side effects, who should avoid it entirely, the heavy metals risk, and how to confirm your product is actually safe."
        tags={["Safety", "Side Effects", "Heavy Metals", "Buying Guide"]}
        publishedAt="2026-04-18"
        updatedAt="2026-04-24"
        readingTimeMin={9}
        currentSlug="shilajit-side-effects"
        quizCta="line"
        breadcrumbLabel="Shilajit Side Effects"
        faqItems={faqItems}
      >
        {/* FTC Disclosure */}
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
          <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. Our safety analysis is independent of affiliate relationships — see our{" "}
          <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclosure policy</Link>.
        </div>

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            The honest picture before we start
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Shilajit is safe for most healthy adults when you use a properly purified, third-party tested product. That&apos;s the headline, and it&apos;s important to say it clearly — because a lot of safety content around shilajit either catastrophizes the risks or ignores them entirely.
            </p>
            <p>
              The real story is more nuanced. <strong>Purified, verified shilajit</strong> has a strong safety profile across clinical trials lasting up to 90 days. <strong>Unpurified or unverified shilajit</strong> is a genuine safety risk — specifically because raw shilajit collected from mountain rock contains heavy metals at concentrations that can be dangerous with repeated exposure.
            </p>
            <p>
              Whether your shilajit is safe comes down almost entirely to whether it&apos;s been properly purified and independently tested. That&apos;s what we&apos;ll focus on in this guide.
            </p>
          </div>
        </section>

        {/* Common side effects */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Common side effects — and what actually causes them
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Most reported side effects from shilajit are mild and transient. In our review of clinical trials and user reports, the most common are:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  effect: "Digestive discomfort / nausea",
                  cause: "Almost always from taking on an empty stomach or starting at too high a dose. Solution: take with food and start at 150–200mg for the first week.",
                },
                {
                  effect: "Strong earthy taste / smell aversion",
                  cause: "Not a side effect in the medical sense — shilajit has a potent mineral taste. Dissolve in warm water with honey or mix into a smoothie. Not harmful.",
                },
                {
                  effect: "Loose stools in first few days",
                  cause: "Mineral-rich compounds can temporarily alter gut motility. Typically resolves within 3–5 days as the body adjusts. Reduce dose if persistent.",
                },
                {
                  effect: "Increased alertness / sleep disruption",
                  cause: "Some users report difficulty sleeping when taking shilajit in the evening. Take in the morning or afternoon — not within 2 hours of sleep.",
                },
              ].map((item) => (
                <div key={item.effect} className="bg-white border border-[#D1EDD8] rounded-xl p-4">
                  <h3 className="text-xs font-bold text-[#0D1F14] mb-1">{item.effect}</h3>
                  <p className="text-xs text-[#7BA899] leading-relaxed">{item.cause}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
              <p className="text-xs text-[#4A6358] leading-relaxed">
                <strong className="text-[#0D1F14]">Important context:</strong> Many people who report side effects from shilajit are using unverified products with impurities. Nausea, digestive issues, and other reactions that persist beyond a week are often a sign of impurity in the product, not a reaction to genuine shilajit. If issues persist, discontinue use and evaluate whether the product has a verifiable third-party COA.
              </p>
            </div>
          </div>
        </section>

        {/* Who should NOT take it */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Who should NOT take shilajit
          </h2>
          <div className="space-y-3 text-[#0D1F14] text-sm leading-relaxed">
            {[
              {
                group: "Pregnant or breastfeeding women",
                reason: "There is insufficient safety data for these populations. Shilajit&apos;s hormonal and iron effects are not characterized in pregnancy or lactation. Avoid entirely as a precaution.",
                severity: "red",
              },
              {
                group: "People with hemochromatosis (iron overload)",
                reason: "Shilajit contains bioavailable iron. Anyone with hereditary hemochromatosis or secondary iron overload conditions should avoid shilajit as it may worsen iron accumulation.",
                severity: "red",
              },
              {
                group: "People with autoimmune conditions",
                reason: "Shilajit may modulate immune function. Those with lupus, multiple sclerosis, rheumatoid arthritis, or other autoimmune conditions should consult a physician before use.",
                severity: "amber",
              },
              {
                group: "Anyone on blood thinners or anticoagulants",
                reason: "Possible interaction via iron content and mineral profile. Warfarin and other anticoagulants may be affected. Medical consultation required before use.",
                severity: "amber",
              },
              {
                group: "People with chronic kidney disease",
                reason: "Shilajit&apos;s mineral content is filtered through the kidneys. Compromised kidney function may be unable to clear the mineral load effectively. Consult a physician.",
                severity: "amber",
              },
              {
                group: "Children",
                reason: "No safety data exists for children. Not recommended for anyone under 18.",
                severity: "red",
              },
            ].map((item) => (
              <div key={item.group} className={`flex gap-3 rounded-xl border p-4 ${item.severity === "red" ? "bg-red-50 border-red-200" : "bg-amber-50 border-amber-200"}`}>
                <span className={`font-bold text-sm shrink-0 ${item.severity === "red" ? "text-red-500" : "text-amber-600"}`}>✗</span>
                <div>
                  <div className={`text-xs font-bold mb-0.5 ${item.severity === "red" ? "text-red-700" : "text-amber-800"}`}>{item.group}</div>
                  <p className={`text-xs leading-relaxed ${item.severity === "red" ? "text-red-600" : "text-amber-700"}`}>{item.reason}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-[#7BA899] italic">
              This list is not exhaustive. Anyone with a pre-existing medical condition or on prescription medications should consult a physician before starting any new supplement, including shilajit.
            </p>
          </div>
        </section>

        {/* Heavy metals */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Heavy metals — the real safety concern with shilajit
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              This is not a theoretical concern. There are documented cases of heavy metal poisoning from contaminated shilajit products — primarily involving products without verifiable purification processes or third-party testing. Shilajit is collected from rock formations where geological processes concentrate minerals — including toxic ones. The purification step is what separates safe shilajit from dangerous shilajit — and it is the concern{" "}
              <Link href="/blog/memorial-sloan-kettering-shilajit" className="text-[#10B981] hover:underline font-medium">
                Memorial Sloan Kettering&apos;s safety assessment of shilajit
              </Link>{" "}
              flags most prominently.
            </p>
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
              <h3 className="text-base font-bold text-[#0D1F14] mb-3">FDA action levels for heavy metals in supplements</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#D1EDD8]">
                      <th className="text-left py-2 pr-4 font-bold text-[#7BA899] uppercase tracking-wide">Metal</th>
                      <th className="text-left py-2 pr-4 font-bold text-[#7BA899] uppercase tracking-wide">FDA Action Level</th>
                      <th className="text-left py-2 font-bold text-[#7BA899] uppercase tracking-wide">Health risk at high exposure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metal: "Lead (Pb)", limit: "< 10 mcg/g", risk: "Neurotoxic — affects brain, kidneys, and cardiovascular system" },
                      { metal: "Arsenic (As)", limit: "< 10 mcg/g", risk: "Carcinogenic — linked to skin, lung, and bladder cancer" },
                      { metal: "Mercury (Hg)", limit: "< 0.1 mcg/g", risk: "Neurotoxic — severe neurological effects, especially in children" },
                      { metal: "Cadmium (Cd)", limit: "< 4.1 mcg/g", risk: "Nephrotoxic — damages kidneys; accumulates in bone" },
                    ].map((row, i) => (
                      <tr key={row.metal} className={`border-b border-[#D1EDD8] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"}`}>
                        <td className="py-2.5 pr-4 font-semibold text-[#0D1F14]">{row.metal}</td>
                        <td className="py-2.5 pr-4 text-[#10B981] font-bold">{row.limit}</td>
                        <td className="py-2.5 text-[#7BA899]">{row.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p>
              A quality COA will show specific measured values for each of these metals — not just &quot;pass.&quot; If a brand only shows &quot;pass&quot; or doesn&apos;t publish heavy metals results at all, there is no way to verify safety. <Link href="/lab-data" className="text-[#10B981] hover:underline">View heavy metals test results</Link> for every brand in our database. For more on this topic, read our <Link href="/blog/shilajit-heavy-metals-safety" className="text-[#10B981] hover:underline">our heavy metals safety guide</Link>.
            </p>
          </div>
        </section>

        {/* How to avoid side effects */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            How to avoid side effects — practical steps
          </h2>
          <div className="space-y-3">
            {[
              { step: "1", label: "Buy only COA-verified products from independent labs", detail: "The COA must name the testing lab, show batch-specific results, and include specific heavy metal values — not just 'pass.'" },
              { step: "2", label: "Start at 150–200mg daily for the first week", detail: "Dose titration eliminates most digestive reactions. Don't start at 500mg regardless of the label's recommended dose." },
              { step: "3", label: "Take with food, not on an empty stomach", detail: "Dissolving in warm water with a meal significantly reduces nausea risk. The earthy taste can be masked with honey." },
              { step: "4", label: "Take in the morning — not before sleep", detail: "The mineral and adaptogenic effects can increase alertness in some users. Morning dosing eliminates sleep disruption risk." },
              { step: "5", label: "Check for GMP certification on the manufacturing facility", detail: "GMP certification ensures manufacturing hygiene standards that further reduce contamination risk beyond just the raw material testing." },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 bg-white border border-[#D1EDD8] rounded-xl p-4">
                <span className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center font-black text-xs shrink-0">{item.step}</span>
                <div>
                  <div className="text-xs font-bold text-[#0D1F14] mb-0.5">{item.label}</div>
                  <p className="text-xs text-[#7BA899] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safe dosage */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Safe dosage guidelines
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
              <div className="grid gap-3 sm:grid-cols-3 text-center">
                {[
                  { label: "Starting dose", value: "150–200mg/day", note: "First 1–2 weeks" },
                  { label: "Maintenance dose", value: "300–500mg/day", note: "After tolerance established" },
                  { label: "Clinical trial dose", value: "250–500mg/day", note: "Dose used in published studies" },
                ].map((d) => (
                  <div key={d.label} className="bg-[#F0FAF4] rounded-xl p-3">
                    <div className="text-[10px] text-[#7BA899] uppercase tracking-wide mb-1">{d.label}</div>
                    <div className="text-base font-black text-[#10B981]">{d.value}</div>
                    <div className="text-[10px] text-[#7BA899]">{d.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <p>
              For resin products, 300mg typically corresponds to a pea-sized portion. For capsule products, check the stated mg per capsule. Exceeding 600mg/day provides no additional benefit and increases the likelihood of digestive reactions. If you experience any persistent side effects beyond the first week, discontinue use.
            </p>
          </div>
        </section>

        {/* Iron overload */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Shilajit and Iron Overload: Who Should Avoid It
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Shilajit naturally contains iron, and its high fulvic acid content actively enhances the absorption of minerals — including iron — across the gut lining. For the vast majority of healthy adults, this is a benefit rather than a risk. But for a specific group it warrants real caution.
            </p>

            {/* What is hemochromatosis callout */}
            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
              <h3 className="text-base font-bold text-[#0D1F14] mb-3">What is hereditary hemochromatosis?</h3>
              <div className="space-y-3 text-xs text-[#4A6358] leading-relaxed">
                <p>
                  Hemochromatosis is a hereditary iron overload disorder in which the body absorbs too much iron from food and stores it in organs — particularly the liver, heart, and joints. It is the most common genetic disorder in populations of Northern European descent, affecting roughly 1 in 200 people.
                </p>
                <p>
                  Unlike most mineral imbalances, excess iron cannot be easily excreted. It accumulates over time and, if left unmanaged, can lead to organ damage. Common signs include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-1">
                  <li>Persistent fatigue and low energy despite adequate sleep</li>
                  <li>Joint pain, particularly in the knuckles and larger joints</li>
                  <li>Liver tenderness or elevated liver enzymes on blood tests</li>
                  <li>Skin bronzing or darkening in some cases</li>
                  <li>Abdominal discomfort</li>
                </ul>
                <p className="italic text-[#7BA899]">
                  Note: these symptoms overlap with many common conditions and are not diagnostic on their own. Only a physician and appropriate blood tests (serum ferritin, transferrin saturation) can confirm hemochromatosis.
                </p>
              </div>
            </div>

            {/* Risk cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="text-xs font-bold text-red-700 mb-1">⚠ Diagnosed iron overload — avoid</h3>
                <p className="text-xs text-red-600 leading-relaxed">
                  People with confirmed hereditary hemochromatosis or secondary iron overload conditions should avoid shilajit unless cleared by their managing physician. Fulvic acid&apos;s mineral-enhancing absorption effect may accelerate iron accumulation in those already prone to it.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-xs font-bold text-amber-800 mb-1">⚡ Iron-related conditions — consult first</h3>
                <p className="text-xs text-amber-700 leading-relaxed">
                  People with elevated serum ferritin, high transferrin saturation, or a family history of hemochromatosis should discuss shilajit use with their physician before starting. A simple blood panel can clarify whether iron status is a concern.
                </p>
              </div>
            </div>

            {/* Context callout */}
            <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
              <p className="text-xs text-[#4A6358] leading-relaxed">
                <strong className="text-[#0D1F14]">Important context:</strong> Iron overload is a precaution for a specific at-risk group — not a risk for most users. Healthy adults without iron metabolism disorders absorb and regulate minerals normally, and the iron content in a typical daily shilajit dose (300–500mg) is not a meaningful concern for this population. If you have no history of iron disorders, no family history of hemochromatosis, and normal ferritin levels on routine bloodwork, this section does not apply to you.
              </p>
            </div>

            <p>
              Anyone with a diagnosed iron metabolism condition — or who is uncertain about their iron status — should consult their physician before starting shilajit or any mineral-containing supplement. This is standard guidance for any supplement with relevant mineral content, not a warning unique to shilajit — but it is{" "}
              <Link href="/blog/shilajit-hemochromatosis" className="text-[#10B981] hover:underline font-medium">
                especially important for anyone with hemochromatosis or iron overload disorders
              </Link>
              , given shilajit&apos;s iron content and fulvic acid&apos;s absorption-enhancing properties.
            </p>
          </div>
        </section>

        {/* Safety-verified recommendations */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Safety-verified recommendations — brands that pass full heavy metals panels
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              All three brands below publish full heavy metals panels from independent labs with specific measured values — not just pass/fail notations. <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline">Brands that pass heavy metals testing</Link> in our full ranking database.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  name: "Black Lotus Shilajit Resin",
                  tier: "S",
                  safety: "Full heavy metals panel (specific ppb values) · GMP certified · Named 3rd-party lab",
                  href: BL_RESIN,
                },
                {
                  name: "Natural Shilajit Resin",
                  tier: "S",
                  safety: "ICP-MS heavy metals testing · FDA registered facility · GMP certified · DBP verified",
                  href: NS_RESIN,
                },
                {
                  name: "Pure Himalayan Resin",
                  tier: "S",
                  safety: "ISO/IEC 17025 accredited lab · Full heavy metals panel · GMP certified",
                  href: PH_RESIN,
                },
              ].map((brand) => (
                <div key={brand.name} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-amber-400 text-amber-900 text-[10px] font-black flex items-center justify-center">{brand.tier}</span>
                    <span className="text-xs font-bold text-[#0D1F14]">{brand.name}</span>
                  </div>
                  <p className="text-xs text-[#10B981] font-medium leading-relaxed mb-3">{brand.safety}</p>
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block text-center py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
                  >
                    View →
                  </a>
                </div>
              ))}
            </div>
            <p>
              <Link href="/compare" className="text-[#10B981] hover:underline">Compare safety-verified products</Link> in our full comparison table, or <Link href="/quiz" className="text-[#10B981] hover:underline">find a safe verified shilajit for your needs</Link> with our 60-second quiz.
            </p>
          </div>
        </section>
      </BlogPostLayout>
  );
}
