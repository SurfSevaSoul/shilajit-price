import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

// ── Affiliate constants ────────────────────────────────────────────────────
const AFFILIATE_BL = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_LBH = "https://lotusbloomingherbs.com/?aff=380";
const AFFILIATE_PH = "https://www.purehimalayanshilajit.com/?ref=4792";
const AFFILIATE_NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const AFFILIATE_PB = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-liver-kidneys`;

export const metadata: Metadata = {
  title: "Is Shilajit Bad for Your Liver or Kidneys? What the Research Actually Shows | ShilajitPrice.com",
  description:
    "Purified shilajit is not shown to harm liver or kidneys in healthy adults — but certain conditions change that calculus. Here's who should be cautious and what the evidence says.",
  keywords:
    "is shilajit bad for liver, is shilajit bad for kidneys, shilajit liver safety, shilajit kidney disease, who should not take shilajit, shilajit liver toxicity, shilajit kidney stones",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Is Shilajit Bad for Your Liver or Kidneys? What the Research Actually Shows",
    description:
      "Purified shilajit is not shown to harm liver or kidneys in healthy adults — but certain conditions change that calculus. Here's who should be cautious and what the evidence says.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-04",
    modifiedTime: "2026-05-04",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Is shilajit bad for your liver?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Purified shilajit from verified sources has not demonstrated hepatotoxicity (liver toxicity) in clinical studies at recommended doses of 300–500mg daily. The Stohs 2014 safety review published in Phytotherapy Research concluded that purified shilajit is generally safe at studied doses. The key qualifier is 'purified and verified' — unverified products containing heavy metals, mycotoxins, or microbial contamination are the primary source of liver-related risk. People with pre-existing liver conditions (hepatitis, cirrhosis, fatty liver disease) should consult a physician before using shilajit.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit bad for your kidneys?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Peer-reviewed evidence does not show nephrotoxicity (kidney toxicity) from purified shilajit at recommended doses in healthy adults. However, shilajit's mineral load — including potassium, calcium, magnesium, and iron — requires normal kidney function to process correctly. People with chronic kidney disease (CKD), reduced kidney function, or a history of kidney stones should avoid shilajit without medical supervision, as the mineral content may be contraindicated in impaired renal function.",
    },
  },
  {
    "@type": "Question",
    name: "Who should not take shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Several groups should avoid shilajit or consult a specialist before use: people with active liver disease (hepatitis, cirrhosis, fatty liver); people with chronic kidney disease or significantly reduced kidney function; people with hemochromatosis or iron overload disorders; pregnant and breastfeeding women (insufficient safety data); people with gout or high uric acid levels (shilajit may elevate uric acid); and anyone on medications processed primarily by the liver or kidneys, as fulvic acid may influence drug metabolism.",
    },
  },
  {
    "@type": "Question",
    name: "Can shilajit cause kidney stones?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit has been observed to increase urinary uric acid excretion in some studies. Elevated uric acid is a risk factor for uric acid kidney stones specifically. People with a history of uric acid kidney stones, gout, or hyperuricemia should exercise caution and consult a physician before using shilajit. Calcium oxalate stones — the most common kidney stone type — are not directly linked to shilajit in the published literature.",
    },
  },
];

export default function ShilajitLiverKidneys() {
  return (
    <BlogPostLayout
      heading={
        <>
          Is Shilajit Bad for Your Liver or Kidneys?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            What the Research Actually Shows
          </span>
        </>
      }
      description="Purified shilajit is not shown to harm liver or kidneys in healthy adults — but certain conditions change that calculus. Here's who should be cautious and what the evidence says."
      tags={["Safety", "Research", "Buyer Awareness", "Side Effects"]}
      publishedAt="2026-05-04"
      updatedAt="2026-05-04"
      readingTimeMin={9}
      currentSlug="shilajit-liver-kidneys"
      quizCta="line"
      breadcrumbLabel="Shilajit Liver & Kidney Safety"
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
          Why people ask about liver and kidney safety
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Two of the most common health concerns people research before starting shilajit are liver and kidney safety. This is a reasonable place to start. Shilajit contains a dense mineral profile, fulvic acid, humic substances, and trace bioactive compounds — all of which the liver and kidneys play a role in processing and clearing. When you are evaluating a new mineral-rich supplement, asking what it does to your filtration organs is the right question.
          </p>
          <p>
            The short answer is that purified shilajit from verified sources has not demonstrated organ toxicity in clinical studies at recommended doses in healthy adults. The Stohs 2014 safety review — the most cited peer-reviewed assessment of shilajit safety — concluded that properly purified shilajit is generally well-tolerated at studied doses. But &quot;healthy adults&quot; and &quot;purified and verified&quot; are the operative phrases. Several populations face genuinely different risk profiles, and the source and purity of the product matters considerably more for organ safety than shilajit itself does.
          </p>
          <p>
            This post covers what the research actually shows for both liver and kidney safety, who specifically should be cautious, why heavy metals in unverified products are the primary real-world risk, and the dosage context that applies to any mineral-dense supplement. We also consolidate the full contraindications list so you have a clear picture of whether shilajit is appropriate for your situation before you spend money on it.
          </p>
        </div>
      </section>

      {/* Section 1: Liver */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Is shilajit bad for your liver?
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Hepatotoxicity — liver toxicity — has not been documented in peer-reviewed clinical trials of purified shilajit at recommended doses. The Stohs et al. 2014 safety review published in <em>Phytotherapy Research</em> examined the available clinical and preclinical evidence and concluded that purified shilajit does not show significant adverse effects on liver enzymes or hepatic function markers in healthy study populations. Human trials using doses of 250–500mg per day for up to 90 days have not produced clinically significant elevations in ALT, AST, or bilirubin — the standard markers of liver stress.
          </p>

          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">What the research actually shows</h3>
            <ul className="space-y-2 text-xs text-[#0D1F14] leading-relaxed">
              {[
                "Stohs 2014 (Phytotherapy Research): purified shilajit generally safe at studied doses — no hepatotoxicity documented",
                "Biswas et al. 2010: 90-day human trial found no significant adverse effects on liver enzymes at 200mg twice daily",
                "Preclinical animal studies have not demonstrated hepatic damage at equivalent human doses from purified preparations",
                "Traditional Ayurvedic use spanning centuries includes liver-supportive applications of properly purified shilajit",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p>
            The critical distinction is between <strong>purified shilajit</strong> and <strong>raw or adulterated shilajit</strong>. Raw shilajit collected from rock faces contains heavy metals, mycotoxins, microbial contamination, and other impurities that accumulate during its formation process. These impurities — not the shilajit compounds themselves — are what create hepatic risk. Lead and arsenic at sufficient concentrations are known hepatotoxins with well-characterized mechanisms of liver damage. FDA warnings about Ayurvedic products and shilajit specifically have been triggered by contamination in unverified products, not by purified preparations with clean COAs.
          </p>
          <p>
            People with pre-existing liver conditions — hepatitis B or C, cirrhosis, alcoholic liver disease, or non-alcoholic fatty liver disease — should consult a hepatologist before using shilajit or any mineral-rich supplement. Impaired liver function changes the metabolic calculus for almost any supplement, and the evidence base for shilajit is built on healthy adult populations. The absence of documented hepatotoxicity in healthy adults does not automatically extend to impaired liver function.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong className="text-amber-900">Caution — pre-existing liver conditions:</strong> Active hepatitis, cirrhosis, fatty liver disease, elevated liver enzymes, or any ongoing hepatic treatment. Consult your hepatologist before adding any mineral-rich supplement including shilajit.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Kidneys */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Is shilajit bad for your kidneys?
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Similarly, nephrotoxicity — kidney toxicity — has not been documented in peer-reviewed clinical studies of purified shilajit at recommended doses in healthy adults. The same safety review findings that apply to the liver apply here: studied preparations of purified shilajit have not produced clinically significant elevations in creatinine, BUN (blood urea nitrogen), or other standard markers of renal stress in healthy populations.
          </p>
          <p>
            However, the kidney picture has an additional layer of complexity. Shilajit contains a meaningful mineral load — potassium, calcium, magnesium, phosphorus, and iron among others. In a person with normal kidney function, processing and excreting this mineral profile is routine. In a person with chronic kidney disease (CKD) or significantly reduced glomerular filtration rate, the same mineral load may be contraindicated. The kidneys cannot clear what they cannot filter, and excess minerals that would be efficiently excreted in a healthy person may accumulate in those with impaired renal function.
          </p>

          <div className="space-y-3">
            <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-red-700 mb-2 flex items-center gap-2">
                <span>🚫</span> Chronic kidney disease (CKD)
              </h3>
              <p className="text-xs text-red-700 leading-relaxed">
                People with CKD stages 3–5, dialysis patients, or kidney transplant recipients should avoid shilajit without explicit nephrologist guidance. The mineral content — particularly potassium — may be contraindicated, and the kidneys are the primary elimination route for several heavy metals, meaning impaired clearance compounds any contamination risk from unverified products.
              </p>
            </div>

            <div className="bg-amber-50 border-2 border-amber-100 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-amber-700 mb-2 flex items-center gap-2">
                <span>⚠️</span> High uric acid and gout
              </h3>
              <p className="text-xs text-amber-800 leading-relaxed">
                Shilajit has been observed to increase urinary uric acid excretion in some studies. For most people this is neutral or even beneficial — it suggests uric acid is being cleared rather than retained. But for people with hyperuricemia (chronically elevated uric acid), gout, or a history of uric acid kidney stones, increased uric acid turnover is a relevant consideration. Uric acid kidney stones are directly correlated with elevated uric acid levels. Proceed with caution and consult your physician if any of these apply. See our post on{" "}
                <Link href="/blog/shilajit-side-effects" className="text-amber-700 hover:underline font-medium">
                  shilajit side effects
                </Link>{" "}
                for a broader breakdown of who should be cautious.
              </p>
            </div>

            <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
              <p className="text-xs text-[#4A6358] leading-relaxed">
                <strong className="text-[#0D1F14]">For healthy adults:</strong> Shilajit does not appear to stress kidney function at recommended doses. Staying well-hydrated while using any mineral-rich supplement is standard practice — it supports normal renal clearance and reduces the theoretical risk of mineral precipitation in the urinary tract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Who should not take shilajit */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Who should not take shilajit — consolidated contraindications
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The following groups have documented physiological reasons to avoid shilajit or to consult a specialist before use. These are not boilerplate disclaimers — each has a specific mechanistic rationale.
          </p>

          <div className="space-y-3">
            {[
              {
                group: "Active liver disease",
                detail: "Hepatitis (B or C), cirrhosis, alcoholic liver disease, fatty liver disease, or elevated liver enzymes. Consult a hepatologist first.",
                severity: "red",
                icon: "🚫",
              },
              {
                group: "Chronic kidney disease (CKD)",
                detail: "CKD stages 3–5, dialysis patients, kidney transplant recipients. Consult a nephrologist first. The mineral load and reduced clearance capacity combine unfavorably.",
                severity: "red",
                icon: "🚫",
              },
              {
                group: "Hemochromatosis / iron overload",
                detail: "Shilajit contains bioavailable iron and fulvic acid may enhance mineral absorption. In people with hereditary hemochromatosis or secondary iron overload, this combination may worsen accumulation.",
                severity: "red",
                icon: "🚫",
                link: { href: "/blog/shilajit-hemochromatosis", text: "See our full hemochromatosis breakdown →" },
              },
              {
                group: "Pregnancy and breastfeeding",
                detail: "No clinical safety data exists for these populations. Ayurvedic tradition classifies shilajit as contraindicated in pregnancy. Avoid entirely as a precaution.",
                severity: "red",
                icon: "🚫",
                link: { href: "/blog/shilajit-pregnancy-breastfeeding", text: "See our pregnancy and breastfeeding guide →" },
              },
              {
                group: "Gout or chronically high uric acid",
                detail: "Shilajit may increase uric acid excretion. Relevant for uric acid kidney stone risk and active gout management. Proceed with caution and physician guidance.",
                severity: "amber",
                icon: "⚠️",
              },
              {
                group: "Medications processed by the liver or kidneys",
                detail: "Fulvic acid may influence drug metabolism via cytochrome P450 pathways. Anyone on anticoagulants, immunosuppressants, diuretics, or medications with narrow therapeutic windows should consult their prescribing physician before adding shilajit.",
                severity: "amber",
                icon: "⚠️",
              },
            ].map((item) => (
              <div
                key={item.group}
                className={`flex gap-3 rounded-2xl border-2 p-5 ${
                  item.severity === "red"
                    ? "bg-red-50 border-red-100"
                    : "bg-amber-50 border-amber-100"
                }`}
              >
                <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <div className={`text-sm font-bold mb-1 ${item.severity === "red" ? "text-red-700" : "text-amber-800"}`}>
                    {item.group}
                  </div>
                  <p className={`text-xs leading-relaxed ${item.severity === "red" ? "text-red-700" : "text-amber-800"}`}>
                    {item.detail}
                  </p>
                  {"link" in item && item.link && (
                    <Link
                      href={item.link.href}
                      className={`text-xs font-medium mt-1.5 inline-block hover:underline ${
                        item.severity === "red" ? "text-red-800" : "text-amber-900"
                      }`}
                    >
                      {item.link.text}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#7BA899] italic">
            This list is not exhaustive. Anyone with a diagnosed medical condition or on prescription medications should consult their physician before starting shilajit or any new mineral-rich supplement.
          </p>
        </div>
      </section>

      {/* Section 4: Heavy metals connection */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The heavy metals connection — the real liver and kidney risk
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The primary real-world risk to liver and kidney health from shilajit is not shilajit itself — it is heavy metals in unverified products. This is a distinction that gets lost in a lot of safety content, and it matters for how you evaluate risk.
          </p>
          <p>
            Lead and arsenic at elevated concentrations are well-characterized hepatotoxins and nephrotoxins. Lead accumulates in soft tissue and interferes with cellular enzyme function in the liver; at high concentrations it is directly cytotoxic. Arsenic causes hepatic damage through oxidative stress and mitochondrial disruption. Cadmium is specifically nephrotoxic — it preferentially accumulates in the kidneys, damages proximal tubule cells, and is associated with Fanconi syndrome and proteinuria at high exposures. These mechanisms are established in the toxicology literature.
          </p>
          <p>
            This is the basis for FDA warnings about unverified Ayurvedic products — not a condemnation of shilajit as a category, but a documented concern about heavy metal contamination in products that lack independent verification. The solution is straightforward: demand a full heavy metals panel from an ISO-accredited independent laboratory with specific measured values, not a pass/fail certificate.
          </p>

          {/* Heavy metals table */}
          <div className="overflow-x-auto rounded-2xl border border-[#D1EDD8] bg-white">
            <table className="w-full text-xs">
              <thead className="bg-[#0D1F14] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Metal</th>
                  <th className="text-left px-4 py-3 font-bold">Organ risk</th>
                  <th className="text-left px-4 py-3 font-bold">FDA action level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  { metal: "Lead (Pb)", risk: "Hepatotoxic + nephrotoxic", limit: "< 10 mcg/g" },
                  { metal: "Arsenic (As)", risk: "Hepatotoxic (oxidative stress)", limit: "< 15 mcg/g" },
                  { metal: "Cadmium (Cd)", risk: "Nephrotoxic — proximal tubule", limit: "< 4.1 mcg/g" },
                  { metal: "Mercury (Hg)", risk: "Nephrotoxic + neurotoxic", limit: "< 0.1 mcg/g" },
                ].map((row) => (
                  <tr key={row.metal} className="hover:bg-[#F0FAF4] transition-colors">
                    <td className="px-4 py-3 font-medium text-[#0D1F14]">{row.metal}</td>
                    <td className="px-4 py-3 text-red-700">{row.risk}</td>
                    <td className="px-4 py-3 text-[#4A6358]">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            All five of our featured verified partners publish independent heavy metals panels with specific measured values from accredited laboratories — the standard every shilajit buyer should demand. For the full comparison of heavy metals data across brands, see our{" "}
            <Link href="/blog/shilajit-heavy-metals-fda" className="text-[#10B981] hover:underline font-medium">
              shilajit heavy metals and FDA guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Section 5: Dosage */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Dosage and organ safety
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The recommended dose for shilajit resin is <strong>300–500mg daily</strong> — the range used in clinical trials that have not demonstrated adverse organ effects in healthy adults. This is not an arbitrary range; it reflects what the published safety literature has actually studied.
          </p>
          <p>
            Exceeding recommended doses with any mineral-rich supplement adds unnecessary organ processing load without documented incremental benefit. The dose-response relationship for shilajit has not been fully characterized in human trials, which means higher doses are not simply extrapolations of the safety data — they are unstudied territory. This is particularly relevant for the kidneys, which handle mineral excretion directly.
          </p>

          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">Dosage and cycling guidelines</h3>
            <ul className="space-y-2 text-xs text-[#0D1F14] leading-relaxed">
              {[
                "Recommended dose: 300–500mg per day for resin. Start at the lower end for the first week.",
                "Take with food — this slows absorption and reduces digestive side effects, which also applies to the mineral load on the gut and downstream.",
                "Stay well-hydrated — standard practice with any mineral supplement; supports kidney clearance.",
                "Cycling (8–12 weeks on, 2–4 weeks off): common in traditional Ayurvedic use. Not clinically proven to reduce organ load, but consistent with how most adaptogens are traditionally used and is a reasonable conservative approach.",
                "Do not exceed the stated serving size. Higher doses have not been studied in organ-safety contexts and are not supported by the benefit literature.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#10B981] mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Verified partners CTA */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Verified brands — clean heavy metals COAs across the board
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            If liver and kidney safety is a concern for you, the single most important purchasing criterion is a verified, independent heavy metals COA with specific numerical values. All five brands below meet that standard.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Black Lotus Shilajit",
                tier: "S",
                origin: "Altai Mountains, Siberia",
                safety: "IAS Laboratories, Phoenix AZ · Full heavy metals panel (ICP-MS) · GMP certified · USA made",
                href: AFFILIATE_BL,
                color: "border-amber-200 bg-amber-50",
                badge: "bg-amber-400 text-amber-900",
              },
              {
                name: "Lotus Blooming Herbs",
                tier: "S",
                origin: "Himalayan Mountains, 16,000–18,000ft",
                safety: "Certified Laboratories Burbank, A2LA ISO 17025 · Lead 0.040 mcg/serving · GMP certified",
                href: AFFILIATE_LBH,
                color: "border-amber-200 bg-amber-50",
                badge: "bg-amber-400 text-amber-900",
              },
              {
                name: "Pure Himalayan Shilajit",
                tier: "S",
                origin: "Himalayan Mountains, 16,000ft",
                safety: "Certified Laboratories, A2LA ISO 17025 · Full heavy metals panel · GMP certified · Free shipping",
                href: AFFILIATE_PH,
                color: "border-amber-200 bg-amber-50",
                badge: "bg-amber-400 text-amber-900",
              },
              {
                name: "Natural Shilajit",
                tier: "S",
                origin: "UNESCO Altai Mountains",
                safety: "DaaneLabs + Harken Research, LA · ICP-MS + LC-MS + FTIR · GMP certified · DBP verified",
                href: AFFILIATE_NS,
                color: "border-emerald-200 bg-emerald-50",
                badge: "bg-emerald-500 text-white",
              },
              {
                name: "Pürblack",
                tier: "A",
                origin: "Multi-region (Caucasus, Siberia, Himalayas)",
                safety: "US pharmaceutical-grade facility · 5 US patents · GMP certified · DBP + Urolithin A verified",
                href: AFFILIATE_PB,
                color: "border-emerald-200 bg-emerald-50",
                badge: "bg-emerald-500 text-white",
              },
            ].map((brand) => (
              <div key={brand.name} className={`border-2 rounded-2xl p-5 ${brand.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-6 h-6 rounded text-[10px] font-black flex items-center justify-center ${brand.badge}`}>
                    {brand.tier}
                  </span>
                  <span className="text-xs font-bold text-[#0D1F14]">{brand.name}</span>
                </div>
                <p className="text-[10px] text-[#7BA899] mb-1">{brand.origin}</p>
                <p className="text-xs text-[#4A6358] font-medium leading-relaxed mb-3">{brand.safety}</p>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block text-center py-2 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-xs font-semibold transition-colors"
                >
                  Shop {brand.name} →
                </a>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#7BA899]">
            Prices as of May 2026. Verify at checkout. All five brands have passed independent heavy metals panels.{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline">View full COA data →</Link>
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The bottom line on shilajit and organ health
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Purified, verified shilajit does not appear to harm the liver or kidneys in healthy adults at recommended doses. The peer-reviewed evidence on this is reasonably consistent: no hepatotoxicity, no nephrotoxicity, no clinically significant elevation in liver or kidney function markers in the studied populations. That is the honest read of the data.
          </p>
          <p>
            The real organ-health risk is heavy metals contamination in unverified products — lead, arsenic, cadmium, and mercury are hepatotoxic and nephrotoxic at elevated concentrations, and they appear in unverified shilajit at concentrations that matter. The solution is buying from brands that publish full independent COAs with specific measured values, not just a &quot;tested&quot; claim on a label.
          </p>
          <p>
            If you have active liver disease, chronic kidney disease, hemochromatosis, or gout — or if you take medications with narrow therapeutic windows that are processed by these organs — shilajit requires a conversation with your physician before you start. The evidence of safety in healthy adults does not automatically translate to those populations, and the distinction is real and medically relevant.
          </p>
          <p>
            For everything else on who should and should not take shilajit, see our{" "}
            <Link href="/blog/shilajit-safety-guide" className="text-[#10B981] hover:underline font-medium">
              complete shilajit safety guide
            </Link>{" "}
            and our{" "}
            <Link href="/blog/shilajit-side-effects" className="text-[#10B981] hover:underline font-medium">
              shilajit side effects breakdown
            </Link>.
          </p>
        </div>
      </section>
    </BlogPostLayout>
  );
}
