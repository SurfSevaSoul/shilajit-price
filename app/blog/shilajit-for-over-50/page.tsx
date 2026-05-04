import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

const AFFILIATE_BL =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_PH = "https://www.purehimalayanshilajit.com/?ref=4792";
const AFFILIATE_NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const AFFILIATE_PB = "https://purblack.pxf.io/c/7221460/3041684/36963";
const AFFILIATE_LBH =
  "https://lotusbloomingherbs.com/products/authentic-shilajit?variant=1734489987&aff=380";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-for-over-50`;

export const metadata: Metadata = {
  title:
    "Shilajit for Men Over 50: Testosterone, Energy & What the Clinical Evidence Shows | ShilajitPrice.com",
  description:
    "The most cited shilajit testosterone trial studied men aged 45-55 specifically. Here's what the research shows for older men, realistic timelines, and which products are best suited for this use case.",
  keywords:
    "shilajit for men over 50, shilajit over 50 benefits, shilajit testosterone over 50, shilajit aging men, best shilajit for older men",
  alternates: { canonical: POST_URL },
  openGraph: {
    title:
      "Shilajit for Men Over 50: Testosterone, Energy & What the Clinical Evidence Shows",
    description:
      "The most cited shilajit testosterone trial studied men aged 45-55 specifically. Here's what the research shows for older men, realistic timelines, and which products are best suited for this use case.",
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
    name: "Does shilajit increase testosterone in men over 50?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes — the clinical evidence is particularly relevant for this age group. The Andrologia (2010) randomized controlled trial specifically enrolled infertile men aged 45–55 and documented a statistically significant 23.5% increase in total testosterone and 19% increase in free testosterone after 90 days of supplementation with 200 mg/day of purified shilajit. A follow-up open-label study (Andrologia, 2016) in the same age bracket using 500 mg/day confirmed significant testosterone increases. Men over 50 with age-related testosterone decline are the population most likely to see measurable improvements from consistent, high-quality shilajit supplementation.",
    },
  },
  {
    "@type": "Question",
    name: "How long does shilajit take to work for older men?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The clinical trials documenting testosterone improvements used 90-day supplementation periods. Meaningful changes were not consistently observed at earlier measurement points, suggesting the effects are cumulative. For men over 50, plan for a minimum 8–12 week commitment at the research-aligned dose (300–500 mg/day) before evaluating results. Energy and subjective wellbeing improvements may become noticeable sooner — often within 3–4 weeks — but measurable hormonal changes require the full protocol duration.",
    },
  },
  {
    "@type": "Question",
    name: "Is shilajit safe for men over 50?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Purified, lab-tested shilajit has a good safety profile in the available clinical literature. The Andrologia 2016 study (men aged 45-55, 90 days, 500 mg/day) found no clinically significant changes in liver enzymes, kidney markers, or other safety parameters, and no serious adverse events. The main safety concern for older men is drug interactions: shilajit contains iron and may interact with thyroid medications, blood thinners, or drugs metabolized by CYP450 enzymes. Men with hemochromatosis, chronic kidney disease, gout, or active liver conditions should consult a physician before use. Always verify heavy metals panel on any product purchased.",
    },
  },
  {
    "@type": "Question",
    name: "What is the best shilajit for testosterone after 50?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The best shilajit for testosterone after 50 is one with a verified fulvic acid content above 60%, a full heavy metals panel from an ISO-accredited third-party lab, and a daily dose in the 300–500 mg range used in the clinical research. Black Lotus Shilajit (64.51% fulvic acid, IAS Labs COA) and Pure Himalayan Shilajit (~58% fulvic acid, ISO/IEC 17025 accredited lab) are the strongest options meeting all these criteria. Avoid products without published COAs regardless of how they are marketed.",
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

const BRANDS = [
  {
    key: "bl",
    name: "Black Lotus Shilajit",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    fulvic: "64.51%",
    pricePerGram: "$1.33",
    origin: "Altai Siberia",
    bestFor: "Highest verified fulvic acid, ISO COA, proven dosing range",
    href: AFFILIATE_BL,
    btnClass:
      "bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-900/30",
  },
  {
    key: "ph",
    name: "Pure Himalayan Shilajit",
    tier: "A",
    tierColor: "bg-emerald-500 text-white",
    fulvic: "~58%",
    pricePerGram: "$1.80",
    origin: "Himalayan / Altai",
    bestFor: "ISO/IEC 17025 accredited COA, Himalayan sourcing, heavy metals tested",
    href: AFFILIATE_PH,
    btnClass:
      "bg-[#182B1F] hover:bg-[#10B981] text-white",
  },
  {
    key: "ns",
    name: "Natural Shilajit",
    tier: "A",
    tierColor: "bg-emerald-500 text-white",
    fulvic: "~70%",
    pricePerGram: "$1.08",
    origin: "Altai (UNESCO-recognized)",
    bestFor: "Third-party COA, 70%+ FA, best value with documentation",
    href: AFFILIATE_NS,
    btnClass:
      "bg-[#182B1F] hover:bg-[#10B981] text-white",
  },
  {
    key: "pb",
    name: "Pürblack Live Resin",
    tier: "A",
    tierColor: "bg-emerald-500 text-white",
    fulvic: "~60–70%",
    pricePerGram: "$2.50",
    origin: "Multi-region blend",
    bestFor: "Patented purification process, consistent quality control",
    href: AFFILIATE_PB,
    btnClass:
      "bg-[#182B1F] hover:bg-[#10B981] text-white",
  },
  {
    key: "lbh",
    name: "Lotus Blooming Herbs Authentic Shilajit™",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    fulvic: "Not disclosed",
    pricePerGram: "~$2.45",
    origin: "Himalayan 16,000–18,000ft",
    bestFor: "Lowest lead per serving in database, GMP Certified, A2LA ISO 17025, Ayurvedic practitioner-owned",
    href: AFFILIATE_LBH,
    btnClass:
      "bg-amber-600 hover:bg-amber-500 text-white shadow-md shadow-amber-900/20",
  },
];

export default function ShilajitForOver50() {
  return (
    <BlogPostLayout
      heading={
        <>
          Shilajit for Men{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Over 50
          </span>
          : Testosterone, Energy &amp; What the Clinical Evidence Shows
        </>
      }
      description="The most cited shilajit testosterone trial specifically enrolled men aged 45–55. Here's what the research actually shows for older men — including effect sizes, realistic timelines, the right dose, and which products meet the quality bar to replicate those results."
      tags={["Men's Health", "Testosterone", "Over 50", "Clinical Evidence"]}
      publishedAt="2026-05-04"
      updatedAt="2026-05-04"
      readingTimeMin={10}
      currentSlug="shilajit-for-over-50"
      quizCta="card"
      breadcrumbLabel="Shilajit for Men Over 50"
      faqItems={faqItems}
    >
      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some
        links on this page are affiliate links. We earn a commission at no extra
        cost to you. Rankings are based on lab data, not commission rates.
      </div>

      {/* Intro */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Why the research on shilajit is particularly relevant for men over 50
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            Most shilajit marketing targets broad "wellness" and "energy" claims
            that apply equally to a 25-year-old athlete and a 55-year-old
            executive. What that marketing consistently fails to mention is that
            the clinical research on shilajit and testosterone was conducted
            almost exclusively in men aged 45–55 — not young athletes.
          </p>
          <p>
            The most widely cited testosterone trial (Biswas et al.,{" "}
            <em>Andrologia</em>, 2010) enrolled infertile men between 45 and 55
            years old. A subsequent open-label efficacy and safety study (Pandit
            et al., <em>Andrologia</em>, 2016) used the same age bracket at a
            higher dose. Both documented statistically significant testosterone
            increases. Men in this age range — dealing with the natural decline
            of androgen production that accelerates after 40 — are the population
            for whom the evidence is most directly applicable.
          </p>
          <p>
            This guide covers what the specific studies showed, what realistic
            expectations look like for men in their 50s, which other
            age-associated declines shilajit may address, and which products
            meet the quality standard required to replicate the research
            findings.
          </p>
        </div>
      </section>

      {/* Testosterone after 50 */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What happens to testosterone after 50
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            Testosterone production in men declines at approximately 1–2% per
            year beginning around age 30–35. By age 50, many men have
            testosterone levels 15–25% lower than their peak. By age 60, that
            decline can exceed 30–35% from peak. This is not a disease — it is
            a normal biological process — but the effects are real and cumulative:
            reduced lean muscle mass, increased adipose tissue, lower energy,
            diminished libido, mood changes, and impaired cognitive sharpness.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 my-2">
            {[
              {
                label: "Testosterone decline rate",
                value: "1–2%/year",
                sub: "Starting around age 30–35",
                color: "border-amber-200 bg-amber-50",
                textColor: "text-amber-800",
              },
              {
                label: "By age 50",
                value: "~20% lower",
                sub: "Than individual peak",
                color: "border-orange-200 bg-orange-50",
                textColor: "text-orange-800",
              },
              {
                label: "Subclinical low T threshold",
                value: "< 400 ng/dL",
                sub: "Where symptoms typically emerge",
                color: "border-red-200 bg-red-50",
                textColor: "text-red-700",
              },
            ].map(({ label, value, sub, color, textColor }) => (
              <div
                key={label}
                className={`border rounded-xl p-4 text-center ${color}`}
              >
                <div className={`text-xl font-black ${textColor} mb-1`}>
                  {value}
                </div>
                <div className="text-xs font-bold text-[#0D1F14]">{label}</div>
                <div className="text-[10px] text-[#7BA899] mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
          <p>
            The important distinction is between clinically diagnosed hypogonadism
            (requiring medical treatment) and the subclinical, age-related decline
            that affects a much larger proportion of men over 50. Shilajit
            supplementation is not a treatment for clinical hypogonadism —
            but the available research suggests it may meaningfully support
            testosterone production in men whose levels have declined but not
            fallen to pathological thresholds.
          </p>
        </div>
      </section>

      {/* Clinical evidence */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The clinical evidence: what the studies show for men aged 45–55
        </h2>
        <div className="space-y-4">
          {/* Study 1 */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <span className="shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-800 ring-1 ring-amber-300 flex items-center justify-center text-xs font-black">
                01
              </span>
              <div>
                <h3 className="text-base font-bold text-[#0D1F14]">
                  Biswas et al., <em>Andrologia</em> (2010) — Infertile Men
                  Aged 45–55
                </h3>
                <p className="text-xs text-[#7BA899]">
                  Double-blind, placebo-controlled RCT · n=60 · 90 days ·
                  200 mg/day
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-[#0D1F14] leading-relaxed">
              <p>
                Sixty infertile men between the ages of 45 and 55 were randomized
                to receive either 100 mg of processed shilajit twice daily
                (200 mg/day total) or placebo. Blood panels were drawn at
                baseline, 45 days, and 90 days.
              </p>
              <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
                <p className="text-xs font-bold text-[#0D1F14] mb-2">
                  Key findings at 90 days vs. placebo:
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Total testosterone increased by ~23.5% in the shilajit group",
                    "Free testosterone increased by ~19% in the shilajit group",
                    "DHEAS increased significantly vs. placebo",
                    "FSH (follicle-stimulating hormone) increased significantly",
                    "Sperm count and motility also improved significantly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-xs text-[#0D1F14]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-[#4A6358] leading-relaxed">
                <strong className="text-[#0D1F14]">Context:</strong> This was
                a population with suboptimal hormone profiles. The improvements
                cannot be directly extrapolated to men with clinically normal
                baseline testosterone. However, many men over 50 with
                age-related decline will share a similar hormonal profile to
                this study population.
              </p>
            </div>
          </div>

          {/* Study 2 */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300 flex items-center justify-center text-xs font-black">
                02
              </span>
              <div>
                <h3 className="text-base font-bold text-[#0D1F14]">
                  Pandit et al., <em>Andrologia</em> (2016) — Safety and
                  Efficacy at 500 mg/day
                </h3>
                <p className="text-xs text-[#7BA899]">
                  Open-label trial · n=35 · 90 days · 500 mg/day (250 mg
                  twice daily)
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-[#0D1F14] leading-relaxed">
              <p>
                Thirty-five men aged 45–55 received 250 mg of standardized
                shilajit extract twice daily for 90 days. This study used the
                higher dose that most modern products recommend and evaluated
                both efficacy and safety markers.
              </p>
              <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
                <p className="text-xs font-bold text-[#0D1F14] mb-2">
                  Key findings at 90 days:
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Total testosterone increased significantly vs. baseline",
                    "FSH and LH remained within normal physiological ranges",
                    "No clinically significant changes in liver enzymes (AST, ALT)",
                    "No significant changes in kidney markers (creatinine, BUN)",
                    "No serious adverse events reported across the study period",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-xs text-[#0D1F14]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-[#4A6358] leading-relaxed">
                <strong className="text-[#0D1F14]">Context:</strong> The
                open-label design limits causal conclusions, but the safety
                data is valuable for men in this age group considering
                long-term daily use. At 500 mg/day for 90 days, processed
                shilajit was well-tolerated in men aged 45–55 with no
                organ-level safety signals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Bottom line on the evidence:</strong> Both studies that
            documented testosterone increases specifically enrolled men aged
            45–55 — the same demographic for whom age-related testosterone
            decline is most pronounced. The effect sizes (~20–25% total T
            increase) are meaningful for men in this range. They represent a
            physiologically significant shift without pharmaceutical-level
            intervention. For a full review of every shilajit testosterone
            study including the athlete populations, see our{" "}
            <Link
              href="/blog/shilajit-testosterone-study"
              className="text-amber-700 hover:underline font-medium"
            >
              complete clinical evidence breakdown →
            </Link>
          </p>
        </div>
      </section>

      {/* Other benefits for 50+ */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Other age-relevant benefits for men over 50
        </h2>
        <p className="text-sm text-[#0D1F14] leading-relaxed mb-4">
          Testosterone support is the most documented benefit, but it is not
          the only mechanism relevant to older men. Several other
          well-characterized properties of shilajit address the specific
          physiological changes that accelerate in the fifth and sixth decades
          of life.
        </p>
        <div className="space-y-3">
          {[
            {
              title: "Mitochondrial energy production (fulvic acid + DBPs)",
              evidence: "Strong mechanistic basis",
              color: "border-[#D1EDD8]",
              labelColor: "text-[#10B981]",
              detail:
                "Mitochondrial function declines with age — a primary driver of fatigue, reduced exercise capacity, and cognitive slowing in men over 50. Fulvic acid facilitates electron transfer in Complex I of the mitochondrial electron transport chain. Dibenzo-alpha-pyrones (DBPs), unique to shilajit, act as cofactors that support coenzyme Q10 recycling and mitochondrial membrane integrity. This pathway directly addresses one of the most common complaints of men in their 50s: persistent low-grade fatigue that doesn't resolve with adequate sleep.",
            },
            {
              title: "Mineral replenishment and bone support",
              evidence: "Mechanistic evidence",
              color: "border-blue-200",
              labelColor: "text-blue-700",
              detail:
                "Shilajit contains over 80 trace minerals in ionic and fulvic acid-chelated form — the most bioavailable mineral delivery mechanism available. For men over 50, whose dietary mineral absorption declines and bone mineral density begins to fall, this mineral complex may support enzymatic processes involved in bone remodeling, immune function, and cardiovascular health. Zinc — critical for testosterone biosynthesis — is particularly well-represented.",
            },
            {
              title: "Cognitive function and neuroprotection",
              evidence: "Emerging — animal models and preliminary human data",
              color: "border-purple-200",
              labelColor: "text-purple-700",
              detail:
                "Fulvic acid has been shown in preclinical research to inhibit tau protein aggregation — a primary pathological mechanism in age-related cognitive decline. Shilajit's DBP content also demonstrates neuroprotective properties in animal models. Human clinical research is limited, but the mechanistic evidence is coherent with the traditional Ayurvedic use of shilajit as a cognitive tonic (medhya rasayana). For men over 50 concerned about cognitive trajectory, this represents an emerging area of genuine scientific interest.",
            },
            {
              title: "Muscle recovery and exercise adaptation",
              evidence: "Moderate — JISSN 2015 and preclinical data",
              color: "border-teal-200",
              labelColor: "text-teal-700",
              detail:
                "The JISSN 2015 study (trained men, 500 mg/day, 8 weeks) found that shilajit maintained peak muscle power that declined in the placebo group under simulated overtraining stress. For men over 50 whose muscle protein synthesis rate is lower and recovery windows are longer, any compound that reduces exercise-induced muscle damage markers or supports anabolic hormone maintenance is practically meaningful for sustained training capacity.",
            },
          ].map(({ title, evidence, color, labelColor, detail }) => (
            <div
              key={title}
              className={`bg-white border ${color} rounded-xl p-4`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm font-bold text-[#0D1F14]">{title}</h3>
                <span
                  className={`text-[10px] font-bold ${labelColor} uppercase tracking-wide shrink-0`}
                >
                  {evidence}
                </span>
              </div>
              <p className="text-xs text-[#0D1F14] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timing section */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Realistic timeline for men over 50
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            One of the most common sources of frustration with shilajit
            supplementation is unrealistic timing expectations. Here is what
            the evidence suggests for men over 50 at the clinical dose range:
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="px-4 py-3 text-left font-bold text-[#7BA899] uppercase tracking-wide">
                    Timeframe
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-[#7BA899] uppercase tracking-wide">
                    What to expect
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-[#7BA899] uppercase tracking-wide">
                    Evidence basis
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  {
                    time: "Weeks 1–2",
                    expect: "Little to no change — shilajit is not a stimulant",
                    basis: "No study shows effects this early",
                  },
                  {
                    time: "Weeks 3–4",
                    expect: "Possible early subjective improvements in energy or sleep quality",
                    basis:
                      "Anecdotal; mitochondrial support pathways may begin activating",
                  },
                  {
                    time: "Weeks 6–8",
                    expect:
                      "More consistent energy, early performance markers may improve",
                    basis: "JISSN 2015: testosterone maintenance at 8 weeks",
                  },
                  {
                    time: "Weeks 10–12",
                    expect:
                      "Measurable testosterone changes possible; recovery improvements",
                    basis:
                      "Andrologia 2010 and 2016: significant T increases at 90 days",
                  },
                  {
                    time: "Beyond 12 weeks",
                    expect:
                      "Continued optimization; track with bloodwork at 90-day mark",
                    basis: "Both trials used 90-day endpoints",
                  },
                ].map(({ time, expect, basis }, i) => (
                  <tr
                    key={time}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}
                  >
                    <td className="px-4 py-3 font-semibold text-[#10B981] whitespace-nowrap">
                      {time}
                    </td>
                    <td className="px-4 py-3 text-[#0D1F14]">{expect}</td>
                    <td className="px-4 py-3 text-[#7BA899] italic">{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            For a complete breakdown of timelines across all reported benefit
            categories, see our{" "}
            <Link
              href="/blog/how-long-does-shilajit-take-to-work"
              className="text-[#10B981] hover:underline"
            >
              full guide on how long shilajit takes to work →
            </Link>
          </p>
        </div>
      </section>

      {/* Product recommendations by goal */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Best shilajit products for men over 50 — ranked by goal
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed mb-5">
          <p>
            For men over 50, the product selection criteria are more specific
            than for the general population. The non-negotiables: a published
            COA from an accredited lab, a heavy metals panel with lead values
            well below FDA action levels (especially for daily long-term use),
            and a dose formulation that allows 300–500 mg/day without excessive
            cost or inconvenience.
          </p>
        </div>

        {/* Goal cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              goal: "Best for testosterone support",
              pick: "Black Lotus Shilajit Resin",
              reason:
                "Highest verified fulvic acid (64.51%, ISO-accredited COA). Delivers the most active compound per gram of any tested product in our database. At 175mg resin 2× daily, you're in the Andrologia dosing range with room to scale to 500mg/day.",
              color: "border-amber-200 bg-amber-50",
              labelColor: "text-amber-700",
              href: AFFILIATE_BL,
            },
            {
              goal: "Best for verified safety profile",
              pick: "Pure Himalayan Shilajit",
              reason:
                "ISO/IEC 17025 accredited lab COA, Himalayan sourcing, full heavy metals panel. For men over 50 taking multiple medications or with elevated safety concerns, PH's documentation provides the strongest independent verification.",
              color: "border-[#D1EDD8] bg-[#F0FAF4]",
              labelColor: "text-[#10B981]",
              href: AFFILIATE_PH,
            },
            {
              goal: "Best value for long-term use",
              pick: "Natural Shilajit Resin",
              reason:
                "~70% fulvic acid, third-party COA, $1.08/gram — the lowest cost-per-gram among fully documented options. For men committed to a sustained 6–12 month protocol, NS makes the economics of daily supplementation manageable.",
              color: "border-blue-200 bg-blue-50",
              labelColor: "text-blue-700",
              href: AFFILIATE_NS,
            },
            {
              goal: "Best for consistent daily dosing",
              pick: "Pürblack Live Resin",
              reason:
                "Patented purification process produces a consistently standardized product. For men who want the certainty of a stable, repeatable product across batches, Pürblack's quality control is a meaningful differentiator.",
              color: "border-purple-200 bg-purple-50",
              labelColor: "text-purple-700",
              href: AFFILIATE_PB,
            },
            {
              goal: "Best for Himalayan provenance & lowest lead",
              pick: "Lotus Blooming Herbs Authentic Shilajit™",
              reason:
                "Sourced at 16,000–18,000ft in the Himalayas, GMP Certified, and tested by A2LA ISO 17025-accredited Certified Laboratories Burbank CA. Lead at 0.040 mcg per serving — the lowest measured across all brands in our database. Ideal for men over 50 prioritizing long-term daily safety with verified Himalayan origin.",
              color: "border-amber-200 bg-amber-50",
              labelColor: "text-amber-700",
              href: AFFILIATE_LBH,
            },
          ].map(({ goal, pick, reason, color, labelColor, href }) => (
            <div key={goal} className={`border rounded-xl p-5 ${color}`}>
              <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${labelColor}`}>
                {goal}
              </div>
              <h3 className="text-sm font-bold text-[#0D1F14] mb-2">{pick}</h3>
              <p className="text-xs text-[#0D1F14] leading-relaxed mb-3">
                {reason}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-white border border-[#D1EDD8] text-[#10B981] font-semibold text-xs hover:border-[#10B981] transition-colors"
              >
                Check Price →
              </a>
            </div>
          ))}
        </div>

        {/* Primary CTA — Black Lotus */}
        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-amber-900 font-black text-lg shrink-0">
              S
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">
                #1 Overall for Men Over 50 — S-Tier
              </div>
              <h3 className="text-base font-black text-[#0D1F14]">
                Black Lotus Shilajit Resin
              </h3>
              <p className="text-xs text-[#0D1F14] mt-1">
                64.51% fulvic acid · ISO-accredited COA · Altai Siberia ·
                $39.99 · Free shipping
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
            {[
              "64.51% fulvic acid — verified by IAS Laboratories",
              "Full heavy metals panel: all below FDA action levels",
              "Dosing range covers both Andrologia study protocols",
              "Resin form allows precise dose titration",
              "Altai Siberia source — same geographic origin as research supply",
              "Free shipping on all orders",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-xs text-[#0D1F14]">{item}</span>
              </div>
            ))}
          </div>
          <a
            href={AFFILIATE_BL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-900/30"
          >
            Shop Black Lotus Shilajit — $39.99 →
          </a>
          <p className="text-center text-[10px] text-[#7BA899] mt-2">
            Affiliate link — commission earned at no extra cost to you
          </p>
        </div>

        {/* LBH Featured Card */}
        <div className="mt-4 bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:border-amber-300 transition-colors">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 ring-1 ring-amber-300 flex items-center justify-center text-amber-800 font-black text-lg shrink-0">
              S
            </div>
            <div>
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-0.5">
                Also Recommended · Lowest Lead Per Serving · Himalayan 16,000–18,000ft
              </div>
              <h3 className="text-base font-black text-[#0D1F14]">
                Lotus Blooming Herbs Authentic Shilajit™
              </h3>
              <p className="text-xs text-[#0D1F14] mt-1">
                GMP Certified · A2LA ISO 17025 · Ayurvedic practitioner-owned · ~$2.45/g
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-[#0D1F14] leading-relaxed mb-5">
            <p>
              For men over 50 taking shilajit daily for the long term, heavy metal
              accumulation risk is a legitimate concern. Lotus Blooming Herbs stands
              out on this dimension: their lead measurement of 0.040 mcg per serving
              is the lowest in our database across all tested brands — a meaningful
              distinction for anyone planning a sustained 6–12 month protocol.
            </p>
            <p>
              The brand is owned and operated by NAMA-certified Ayurvedic practitioners,
              making it one of the few products with genuine traditional provenance
              alongside modern lab verification. Tested by Certified Laboratories
              Burbank CA under A2LA ISO 17025 accreditation (Cert 3034.01) and
              GMP Certified. Fulvic acid is not disclosed on the COA, but the
              comprehensive heavy metals documentation is the strongest in its
              Himalayan category.
            </p>
          </div>
          <a
            href={AFFILIATE_LBH}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-colors shadow-md shadow-amber-900/20"
          >
            Shop Lotus Blooming Herbs →
          </a>
          <p className="text-[10px] text-[#7BA899] mt-2">
            Affiliate link — commission earned at no extra cost to you
          </p>
        </div>
      </section>

      {/* Full brand grid */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          All five recommended options for men over 50
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">
                  Brand
                </th>
                <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">
                  Tier
                </th>
                <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">
                  Fulvic %
                </th>
                <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">
                  $/gram
                </th>
                <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">
                  Origin
                </th>
                <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              {BRANDS.map((b, i) => (
                <tr
                  key={b.key}
                  className={`border-b border-[#D1EDD8] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}`}
                >
                  <td className="px-4 py-3 font-semibold text-[#0D1F14]">
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-[#10B981] hover:underline"
                    >
                      {b.name}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded text-[11px] font-black ${b.tierColor}`}
                    >
                      {b.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#0D1F14]">
                    {b.fulvic}
                  </td>
                  <td className="px-4 py-3 text-[#10B981] font-semibold tabular-nums">
                    {b.pricePerGram}
                  </td>
                  <td className="px-4 py-3 text-[#7BA899]">{b.origin}</td>
                  <td className="px-4 py-3 text-[#0D1F14]">{b.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Dosage and safety */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Dosage and safety considerations for men over 50
        </h2>
        <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            The research-aligned dose for testosterone support is 300–500 mg/day
            of purified shilajit, split into two doses (morning and evening).
            Both Andrologia studies used this range. For men beginning shilajit
            for the first time, starting at 200 mg/day for the first two weeks
            before titrating up to 500 mg/day is a reasonable approach to
            assess individual tolerance.
          </p>

          {/* TRT note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="text-xs font-bold text-amber-700 mb-1.5">
              ⚠ Important: Shilajit is not a substitute for TRT
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              If you have been diagnosed with clinical hypogonadism (total
              testosterone &lt; 300 ng/dL confirmed by two blood tests) by a
              physician, testosterone replacement therapy (TRT) is the medically
              appropriate intervention. Shilajit does not produce the same
              magnitude of hormonal correction as TRT and should not be used
              to delay treatment of a diagnosed condition. Shilajit supplementation
              is appropriate for men with age-related subclinical decline who
              prefer a supportive, non-pharmaceutical approach.
            </p>
          </div>

          <p>
            <strong>Drug interactions to be aware of:</strong> Shilajit contains
            iron in ionic form and may affect iron absorption and the
            efficacy of thyroid medications. It may also interact with drugs
            that affect blood clotting or are metabolized by CYP450 enzymes.
            Men over 50 taking multiple prescription medications should review
            their medication list with a physician or pharmacist before adding
            shilajit.
          </p>

          {/* Safety contraindication links */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-[#0D1F14]">
              Specific contraindications to review if relevant:
            </p>
            {[
              {
                href: "/blog/shilajit-hemochromatosis",
                label: "Hemochromatosis or elevated serum ferritin",
                detail: "Shilajit's iron content may worsen iron overload",
              },
              {
                href: "/blog/shilajit-gout-uric-acid",
                label: "Gout or elevated uric acid",
                detail:
                  "Iron-uric acid interactions and traditional diuretic concerns",
              },
              {
                href: "/blog/shilajit-liver-kidneys",
                label: "Chronic kidney disease or elevated liver enzymes",
                detail:
                  "Full organ safety breakdown with heavy metals context",
              },
            ].map(({ href, label, detail }) => (
              <div
                key={href}
                className="flex items-start gap-3 bg-white border border-[#D1EDD8] rounded-xl px-4 py-3"
              >
                <svg
                  className="w-4 h-4 text-[#7BA899] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <Link
                    href={href}
                    className="text-xs font-semibold text-[#10B981] hover:underline"
                  >
                    {label} →
                  </Link>
                  <p className="text-[10px] text-[#7BA899] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The bottom line for men over 50
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {[
            {
              verdict: "The research is directly applicable",
              detail:
                "The two Andrologia testosterone studies enrolled men aged 45–55. This is not a case of extrapolating young-athlete data — older men with declining testosterone are the studied population.",
              color: "border-[#D1EDD8] bg-[#F0FAF4]",
              icon: "✓",
              iconColor: "text-[#10B981]",
            },
            {
              verdict: "Effect sizes are meaningful but not dramatic",
              detail:
                "A 20–25% increase in total testosterone is clinically significant for a man with subclinical decline. It is not equivalent to TRT, and it requires 90 days of consistent, quality supplementation to achieve.",
              color: "border-[#D1EDD8] bg-[#F0FAF4]",
              icon: "✓",
              iconColor: "text-[#10B981]",
            },
            {
              verdict: "Quality determines whether the research applies",
              detail:
                "The studies used standardized, processed shilajit — not the diluted or unverified products that dominate the market. Only COA-verified products with 60%+ fulvic acid replicate the studied compound.",
              color: "border-amber-200 bg-amber-50",
              icon: "⚠",
              iconColor: "text-amber-600",
            },
            {
              verdict: "Benefits extend beyond testosterone",
              detail:
                "Mitochondrial energy, mineral replenishment, cognitive support, and exercise recovery are all relevant for men over 50 — and may produce noticeable changes even in men whose testosterone levels are still in normal range.",
              color: "border-[#D1EDD8] bg-[#F0FAF4]",
              icon: "✓",
              iconColor: "text-[#10B981]",
            },
          ].map(({ verdict, detail, color, icon, iconColor }) => (
            <div key={verdict} className={`border rounded-xl p-4 ${color}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-base font-black ${iconColor}`}>{icon}</span>
                <h3 className="text-xs font-bold text-[#0D1F14]">{verdict}</h3>
              </div>
              <p className="text-xs text-[#0D1F14] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Related guides */}
        <h3 className="text-lg font-black text-[#0D1F14] mb-3">
          Related guides
        </h3>
        <div className="space-y-2">
          {[
            {
              href: "/blog/shilajit-testosterone-study",
              title: "Shilajit Testosterone Studies — Full Clinical Review",
              desc: "Every peer-reviewed study on shilajit and testosterone, with effect sizes and study populations",
            },
            {
              href: "/blog/best-shilajit-for-men",
              title: "Best Shilajit for Men in 2026",
              desc: "Top 5 picks for men ranked by COA quality, fulvic acid %, and value",
            },
            {
              href: "/blog/shilajit-liver-kidneys",
              title: "Shilajit and Liver & Kidney Safety",
              desc: "Heavy metals organ risks, contraindications, and safety data for long-term users",
            },
            {
              href: "/blog/best-shilajit-brands-ranked",
              title: "Best Shilajit Brands Ranked",
              desc: "Full tier list — S through D tier — with COA grades and value scores",
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
