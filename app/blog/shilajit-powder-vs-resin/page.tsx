import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

// ── Affiliate constants ────────────────────────────────────────────────────
const AFFILIATE_BL = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_PH = "https://www.purehimalayanshilajit.com/?ref=4792";
const AFFILIATE_NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const AFFILIATE_PB = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-powder-vs-resin`;

export const metadata: Metadata = {
  title:
    "Shilajit Powder vs Resin vs Capsules: Which Form Is Most Potent? (Lab Data Compared) | ShilajitPrice.com",
  description:
    "Resin, powder, capsules, and gummies are not equivalent. We compare every shilajit format using actual COA data, processing methods, and bioavailability to help you choose the right form.",
  keywords:
    "shilajit powder vs resin, shilajit resin vs powder vs capsules, shilajit powder benefits, is shilajit powder as good as resin, shilajit pills vs resin, best shilajit form",
  alternates: { canonical: POST_URL },
  openGraph: {
    title:
      "Shilajit Powder vs Resin vs Capsules: Which Form Is Most Potent? (Lab Data Compared)",
    description:
      "Resin, powder, capsules, and gummies are not equivalent. We compare every shilajit format using actual COA data, processing methods, and bioavailability to help you choose the right form.",
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
    name: "Is shilajit powder as effective as resin?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It depends on how the powder was made. Freeze-dried shilajit powder preserves most of the active compounds and is comparable to resin in potency. Spray-dried powder — used in most budget products — uses high heat that can degrade heat-sensitive compounds including DBPs and some fulvic acid fractions, reducing potency. Because brands rarely disclose their drying method, verifying the COA for specific fulvic acid content and DBP presence is the only reliable way to assess powder quality. Resin avoids this issue entirely — it requires no drying and retains the full compound profile.",
    },
  },
  {
    "@type": "Question",
    name: "Does processing reduce shilajit potency?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, meaningfully, for some processing methods. Spray drying at high temperatures degrades heat-sensitive bioactive compounds including dibenzo-alpha-pyrones (DBPs) and certain fulvic acid fractions. Freeze drying preserves compounds well but is more expensive and far less common in budget products. Gummy production requires the highest heat of any format and results in the lowest active compound content of any shilajit product. Resin and freeze-dried powder are the most potency-preserving formats; spray-dried capsules and gummies are the least.",
    },
  },
  {
    "@type": "Question",
    name: "Which shilajit form has the highest fulvic acid?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Interestingly, COA data shows that capsules and tablets can test higher in fulvic acid percentage than resin from the same brand. Black Lotus Batch 93 (IAS Laboratories, June 2025) reports 64.51% fulvic acid for resin, 73.11% for tablets, and 74.30% for capsules. This is likely because the concentration process that creates powder and capsule extract increases the fulvic acid percentage relative to the overall mass — though it may reduce the total spectrum of other compounds. On an absolute per-gram basis, resin contains more total bioactive compounds including DBPs, minerals, and the full humic compound profile.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between shilajit resin and capsules?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit resin is the minimally processed, traditional form — filtered and concentrated from raw shilajit without heat, preserving the full spectrum of compounds including DBPs, fulvic acid, humic acid, and minerals. Capsules contain spray-dried or freeze-dried extract that has been ground into powder and encapsulated. Capsules are more convenient, have no taste, and offer consistent pre-measured dosing. Resin has higher bioavailability potential (especially dissolved sublingually), preserves the full compound profile including heat-sensitive DBPs, and is harder to adulterate. Reputable brands like Black Lotus offer both with verified COAs for each format.",
    },
  },
];

export default function ShilajitPowderVsResin() {
  return (
    <BlogPostLayout
      heading={
        <>
          Shilajit Powder vs Resin vs Capsules:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Which Form Is Most Potent?
          </span>
        </>
      }
      description="Resin, powder, capsules, and gummies are not equivalent. We compare every shilajit format using actual COA data, processing methods, and bioavailability to help you choose the right form."
      tags={["Buying Guide", "Formats", "COA", "Comparison"]}
      publishedAt="2026-05-04"
      updatedAt="2026-05-04"
      readingTimeMin={9}
      currentSlug="shilajit-powder-vs-resin"
      quizCta="line"
      breadcrumbLabel="Shilajit Powder vs Resin"
      faqItems={faqItems}
    >
      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on
        this page are affiliate links. If you purchase through them, we may earn a
        commission at no extra cost to you. Format rankings are based on COA data and
        processing science — not on which form generates higher commissions. See our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">
          full disclosure policy
        </Link>
        .
      </div>

      {/* Intro */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Why format matters more than most buyers realize
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit comes in four main forms — resin, powder, capsules, and gummies — and
            the differences between them matter more than most buyers realize. Most people
            shopping for shilajit focus on brand name and price. Format is the variable that
            often determines what you actually receive in terms of active compounds, even
            when you buy from a reputable source.
          </p>
          <p>
            Resin is the traditional form — minimally processed, full-spectrum, closest to
            what shilajit actually is when it comes out of the mountain rock. Powder and
            capsules are convenient, but they require processing steps that affect compound
            integrity in ways brands rarely disclose. Gummies are the most processed form
            and typically contain the least active shilajit content of any format. These are
            not equivalent products at equivalent doses.
          </p>
          <p>
            This post covers how each format is made, what the actual COA data shows across
            formats for the same brand, how to choose based on your priorities, and which
            brands provide the most transparent format-specific testing. The data may
            surprise you — in one case, capsules test higher in fulvic acid percentage than
            the same brand&apos;s resin, and understanding why is key to making a good
            purchasing decision.
          </p>
        </div>
      </section>

      {/* Section 1: How powder is made */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How shilajit powder is made — and why processing method matters
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Raw shilajit resin is a semi-solid substance that cannot be put into capsules or
            blended into a scoop-able powder without first being dried and processed. There
            are two main methods used to convert resin into powder, and they produce
            meaningfully different products.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-red-700 mb-3">
                Spray drying — the common method
              </h3>
              <p className="text-xs text-red-700 leading-relaxed mb-3">
                Shilajit extract is atomized into a fine mist and exposed to a stream of hot
                air (typically 150–200°C / 300–400°F) to rapidly evaporate the moisture.
                The resulting dry powder is collected and used in capsules or sold as bulk
                powder.
              </p>
              <ul className="space-y-1.5 text-xs text-red-700">
                {[
                  "High heat degrades dibenzo-alpha-pyrones (DBPs) — heat-sensitive marker compounds specific to genuine shilajit",
                  "Some fulvic acid fractions are affected by heat, reducing compound spectrum",
                  "Fast and inexpensive — used in the vast majority of budget powder and capsule products",
                  "Processing method is almost never disclosed on labels or product pages",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 font-bold mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F0FAF4] border-2 border-[#D1EDD8] rounded-2xl p-5">
              <h3 className="text-sm font-bold text-[#10B981] mb-3">
                Freeze drying — the premium method
              </h3>
              <p className="text-xs text-[#4A6358] leading-relaxed mb-3">
                The shilajit extract is frozen and then placed under vacuum, causing ice to
                sublimate directly from solid to vapor at low temperatures. The result is a
                powder with the same compound profile as the original extract.
              </p>
              <ul className="space-y-1.5 text-xs text-[#4A6358]">
                {[
                  "No heat exposure — DBPs and heat-sensitive fulvic acid fractions are preserved",
                  "Compound profile closely matches the original resin",
                  "Significantly more expensive to produce — less common in consumer products",
                  "When brands use freeze-drying, they typically say so — it is a selling point",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#10B981] shrink-0 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong className="text-amber-900">The transparency gap:</strong> Most brands
              selling shilajit powder or capsules do not disclose whether they use spray
              drying or freeze drying. If a brand&apos;s product page, COA, or FAQ does not
              address the drying method, spray drying is the safe assumption — it is
              industry default. Asking a brand directly about their processing method is a
              legitimate quality question, and a brand that cannot answer it is missing a
              meaningful quality signal.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Full comparison table */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Full format comparison — resin, powder, capsules, and gummies
        </h2>
        <div className="space-y-6 text-[#0D1F14] text-sm leading-relaxed">

          {/* Scrollable detail table */}
          <div className="overflow-x-auto rounded-2xl border border-[#D1EDD8] bg-white">
            <table className="w-full text-xs min-w-[640px]">
              <thead className="bg-[#0D1F14] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Factor</th>
                  <th className="text-left px-4 py-3 font-bold text-amber-300">Resin ★</th>
                  <th className="text-left px-4 py-3 font-bold">Powder</th>
                  <th className="text-left px-4 py-3 font-bold">Capsules</th>
                  <th className="text-left px-4 py-3 font-bold">Gummies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1EDD8]">
                {[
                  {
                    factor: "Processing",
                    resin: "Minimal — filtered & concentrated",
                    powder: "Spray or freeze dried",
                    caps: "Spray-dried extract (typically)",
                    gummies: "High-heat gummy production",
                  },
                  {
                    factor: "Heat exposure",
                    resin: "None",
                    powder: "High (spray) or none (freeze)",
                    caps: "Moderate",
                    gummies: "High",
                  },
                  {
                    factor: "DBP content",
                    resin: "Highest — no heat degradation",
                    powder: "Reduced (spray) or preserved (freeze)",
                    caps: "Reduced",
                    gummies: "Minimal",
                  },
                  {
                    factor: "Fulvic acid %",
                    resin: "High — full spectrum",
                    powder: "Variable by processing method",
                    caps: "Can test higher % due to concentration",
                    gummies: "Rarely disclosed, typically low",
                  },
                  {
                    factor: "Minerals",
                    resin: "Full spectrum preserved",
                    powder: "Present, some reduction possible",
                    caps: "Present",
                    gummies: "Trace",
                  },
                  {
                    factor: "Bioavailability",
                    resin: "High — sublingual absorption possible",
                    powder: "Moderate — depends on processing",
                    caps: "Good — consistent dosing",
                    gummies: "Lowest",
                  },
                  {
                    factor: "Taste",
                    resin: "Strong, mineral, bitter",
                    powder: "Mild when mixed",
                    caps: "None",
                    gummies: "Sweet",
                  },
                  {
                    factor: "Convenience",
                    resin: "Low — sticky, requires measuring",
                    powder: "Moderate — requires measuring",
                    caps: "High — pre-dosed",
                    gummies: "Highest",
                  },
                  {
                    factor: "COA transparency",
                    resin: "Highest — most brands test resin",
                    powder: "Variable — fewer brands test powder",
                    caps: "Good for reputable brands",
                    gummies: "Lowest — few brands test gummies",
                  },
                  {
                    factor: "Adulteration risk",
                    resin: "Low — physical properties verifiable",
                    powder: "High — entirely reliant on COA",
                    caps: "High — entirely reliant on COA",
                    gummies: "Medium",
                  },
                  {
                    factor: "Price per serving",
                    resin: "$1.00–$4.00",
                    powder: "$0.30–$1.00",
                    caps: "$0.40–$1.50",
                    gummies: "$0.50–$1.50",
                  },
                  {
                    factor: "Best for",
                    resin: "Maximum potency, full spectrum",
                    powder: "Budget buyers, smoothie mixing",
                    caps: "Daily convenience, taste-sensitive",
                    gummies: "Beginners, habit building",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.factor}
                    className={`transition-colors hover:bg-[#F0FAF4] ${i % 2 === 0 ? "bg-white" : "bg-[#F7FCF8]"}`}
                  >
                    <td className="px-4 py-2.5 font-bold text-[#0D1F14] align-top whitespace-nowrap">
                      {row.factor}
                    </td>
                    <td className="px-4 py-2.5 text-emerald-700 font-medium align-top">
                      {row.resin}
                    </td>
                    <td className="px-4 py-2.5 text-[#4A6358] align-top">{row.powder}</td>
                    <td className="px-4 py-2.5 text-[#4A6358] align-top">{row.caps}</td>
                    <td className="px-4 py-2.5 text-[#7BA899] align-top">{row.gummies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[#7BA899]">
            Gummies specifically? We ranked every major brand by lab transparency — see our{" "}
            <Link
              href="/blog/best-shilajit-gummies-2026"
              className="text-[#10B981] hover:underline font-medium"
            >
              best shilajit gummies breakdown →
            </Link>
          </p>
        </div>
      </section>

      {/* Section 3: COA data by format */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What the COA data actually shows by format
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Most of the format comparison debate is theoretical — very few brands publish
            COA data across multiple formats for the same product line, which would allow a
            direct apples-to-apples comparison. Black Lotus does, and the data is
            instructive.
          </p>

          {/* Black Lotus multi-format COA */}
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded bg-amber-400 text-amber-900 text-[11px] font-black flex items-center justify-center">
                S
              </span>
              <div>
                <div className="font-black text-[#0D1F14] text-sm">Black Lotus Shilajit</div>
                <div className="text-[10px] text-[#7BA899]">
                  Altai Mountains, Siberia · IAS Laboratories, Phoenix AZ · Batch 93, June 2025
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { format: "Resin", fa: "64.51%", note: "Full-spectrum baseline" },
                { format: "Tablets", fa: "73.11%", note: "Concentrated — higher FA %" },
                { format: "Capsules", fa: "74.30%", note: "Highest FA % by format" },
              ].map((item) => (
                <div key={item.format} className="bg-amber-50 rounded-xl p-3 text-center">
                  <div className="text-[10px] text-[#7BA899] font-bold uppercase tracking-wide mb-1">
                    {item.format}
                  </div>
                  <div className="text-xl font-black text-amber-700">{item.fa}</div>
                  <div className="text-[9px] text-[#7BA899] mt-1">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
              <strong className="text-amber-900">Why capsules test higher than resin in FA%:</strong>{" "}
              The concentration and drying process that creates Black Lotus&apos;s capsule
              extract increases the fulvic acid percentage relative to the total mass — the
              non-fulvic compounds (water, some mineral fractions) are partially removed
              during extraction, leaving a higher FA concentration by weight. This does not
              necessarily mean capsules deliver <em>more</em> total fulvic acid — it means
              the extract is more concentrated per gram of product. Resin retains the full
              spectrum of compounds including DBPs and the complete mineral and humic
              compound profile that gets partially concentrated or altered during powder
              processing.
            </div>
          </div>

          {/* Pure Himalayan tablets */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-amber-400 text-amber-900 text-[11px] font-black flex items-center justify-center">
                S
              </span>
              <div>
                <div className="font-black text-[#0D1F14] text-sm">Pure Himalayan Shilajit</div>
                <div className="text-[10px] text-[#7BA899]">
                  Himalayan Mountains, 16,000ft · Certified Laboratories, Burbank CA (A2LA ISO 17025) · Batch STH11
                </div>
              </div>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed">
              Pure Himalayan&apos;s Batch STH11 tablet COA shows the cleanest heavy metals
              panel of any product tested across all formats in our database — lead 0.085
              mcg/serving, arsenic 0.009 mcg/serving, cadmium 0.001 mcg/serving, mercury
              ND. Their resin (~58% FA, 2021 COA) and tablets are both tested through the
              same A2LA-accredited laboratory, providing one of the most transparent
              multi-format testing records available.
            </p>
          </div>

          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
            <p className="text-xs text-[#4A6358] leading-relaxed">
              <strong className="text-[#0D1F14]">The powder COA gap:</strong> Powder-specific
              COA data is rarely published by any brand. Most brands that sell powder or
              capsules test their resin and apply the result to all formats — which is not
              the same as independently testing each processed form. This is a genuine
              transparency gap in the shilajit market. When evaluating a powder or capsule
              product, always ask whether the COA covers the specific product form you are
              buying, not just the raw resin.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Which format should you choose */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Which format should you choose?
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The right format depends on what you are optimizing for. Here is the decision
            framework:
          </p>

          <div className="space-y-3">
            {[
              {
                priority: "Potency first",
                pick: "Resin",
                detail:
                  "Maximum full-spectrum compound content, no heat-related degradation, highest DBP preservation, sublingual absorption option. The only format where you can observe authenticity signals directly (texture, solubility, temperature response).",
                color: "border-emerald-200 bg-emerald-50",
                icon: "⭐",
              },
              {
                priority: "Convenience first",
                pick: "Capsules",
                detail:
                  "Pre-dosed, no taste, easy to travel with, consistent daily routine. From a reputable brand with a format-specific COA, capsules are an effective everyday option. Fulvic acid percentage can actually be higher than resin per gram of product due to concentration.",
                color: "border-blue-200 bg-blue-50",
                icon: "💊",
              },
              {
                priority: "Budget first",
                pick: "Powder or capsules",
                detail:
                  "Powder is the lowest price per gram of any format. Verify the COA covers the specific powder product, not just the resin. Capsules from mid-tier brands can also be budget-friendly while providing consistent dosing.",
                color: "border-amber-200 bg-amber-50",
                icon: "💰",
              },
              {
                priority: "Taste-sensitive",
                pick: "Capsules or gummies",
                detail:
                  "Capsules have no taste at all — the easiest format for anyone who finds shilajit's mineral bitterness unpleasant. Gummies are also palatable but have the lowest active compound content and the least transparent COA coverage of any format.",
                color: "border-[#D1EDD8] bg-white",
                icon: "😌",
              },
              {
                priority: "Competitive athlete / WADA-concerned",
                pick: "Capsules with verified COA",
                detail:
                  "Athletes subject to drug testing need format-specific COA verification. Capsules from brands with batch-specific testing for the encapsulated product — not just the resin source — provide the most defensible paper trail.",
                color: "border-[#D1EDD8] bg-white",
                icon: "🏆",
              },
              {
                priority: "Beginner building a habit",
                pick: "Capsules or gummies",
                detail:
                  "Consistency matters more than marginal potency differences when starting out. Capsules remove the measuring friction that causes many beginners to skip doses. Build the habit first, then optimize format if needed.",
                color: "border-[#D1EDD8] bg-white",
                icon: "🌱",
              },
            ].map((item) => (
              <div
                key={item.priority}
                className={`flex gap-4 rounded-2xl border-2 p-5 ${item.color}`}
              >
                <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold text-[#7BA899] uppercase tracking-wide">
                      {item.priority}
                    </span>
                    <span className="text-sm font-black text-[#0D1F14]">→ {item.pick}</span>
                  </div>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
            <p className="text-xs text-[#4A6358] leading-relaxed">
              <strong className="text-[#0D1F14]">The format-agnostic rule:</strong>{" "}
              Whatever format you choose, the COA requirement does not change. You need a
              full heavy metals panel with specific measured values from an independent
              accredited lab. For capsules and powder, the COA should cover the encapsulated
              or powdered product — not just the source resin. This is the single most
              important quality criterion regardless of format.{" "}
              <Link
                href="/blog/shilajit-resin-vs-capsules"
                className="text-[#10B981] hover:underline font-medium"
              >
                Full resin vs capsules comparison →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Brand CTAs */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Verified brands — COA-tested across formats
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            All four brands below provide independent COAs with specific heavy metals values
            for their primary product forms. Black Lotus publishes format-specific COA data
            for resin, capsules, and tablets — the most comprehensive multi-format testing
            record in our database.
          </p>

          {/* Primary: Black Lotus — multi-format */}
          <div className="bg-[#F0FAF4] border-2 border-[#9EC9AD] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="w-7 h-7 rounded bg-amber-400 text-amber-900 text-[11px] font-black flex items-center justify-center">
                S
              </span>
              <span className="font-black text-[#0D1F14]">Black Lotus Shilajit</span>
              <span className="ml-auto text-[10px] font-bold text-[#10B981] uppercase tracking-widest">
                Most transparent multi-format COA
              </span>
            </div>
            <p className="text-xs text-[#7BA899] mb-1">
              Altai Mountains, Siberia · IAS Laboratories, Phoenix AZ · GMP Certified · USA Made
            </p>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-1">
              <strong className="text-[#0D1F14]">Resin:</strong> 64.51% FA · Heavy metals: Lead 1.17 ppm, Arsenic 0.88 ppm, Cadmium 0.15 ppm, Mercury ND
            </p>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-1">
              <strong className="text-[#0D1F14]">Capsules:</strong> 74.30% FA · Same batch-level independent testing
            </p>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-4">
              <strong className="text-[#0D1F14]">Tablets:</strong> 73.11% FA · Cleanest per-format multi-format record in our database
            </p>
            <a
              href={AFFILIATE_BL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center py-2.5 rounded-xl bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-bold transition-colors"
            >
              Shop Black Lotus →
            </a>
          </div>

          {/* Secondary grid */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Pure Himalayan Shilajit",
                tier: "S",
                origin: "Himalayan Mountains, 16,000ft",
                note: "A2LA ISO 17025 · ~58% FA (2021 COA) · Tablet COA: cleanest heavy metals per serving of any brand · GMP certified · Free shipping",
                href: AFFILIATE_PH,
                badge: "bg-amber-400 text-amber-900",
              },
              {
                name: "Natural Shilajit",
                tier: "S",
                origin: "UNESCO Altai Mountains",
                note: "DaaneLabs + Harken Research · Triple-method testing (ICP-MS + LC-MS + FTIR) · DBP verified · GMP certified · FA not disclosed",
                href: AFFILIATE_NS,
                badge: "bg-amber-400 text-amber-900",
              },
              {
                name: "Pürblack",
                tier: "A",
                origin: "Multi-region (Caucasus, Siberia, Himalayas)",
                note: "5 US patents · Pharmaceutical-grade US manufacturing · DBP + Urolithin A verified · GMP certified · Live resin format",
                href: AFFILIATE_PB,
                badge: "bg-emerald-500 text-white",
              },
            ].map((brand) => (
              <div key={brand.name} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-6 h-6 rounded text-[10px] font-black flex items-center justify-center ${brand.badge}`}>
                    {brand.tier}
                  </span>
                  <span className="text-xs font-bold text-[#0D1F14]">{brand.name}</span>
                </div>
                <p className="text-[10px] text-[#7BA899] mb-1">{brand.origin}</p>
                <p className="text-xs text-[#4A6358] leading-relaxed mb-3">{brand.note}</p>
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
            Prices as of May 2026. Verify at checkout.{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline">
              View full COA data →
            </Link>{" "}
            ·{" "}
            <Link href="/compare" className="text-[#10B981] hover:underline">
              Full format & price comparison table →
            </Link>
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The bottom line on shilajit format
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Resin is the gold standard for potency, full-spectrum compound content, and
            authenticity verification. It is the hardest format to adulterate, requires no
            heat processing, and preserves DBPs and the complete humic compound profile that
            defines genuine shilajit. If maximum potency is the goal, resin is the answer.
          </p>
          <p>
            Capsules are a legitimate choice — especially from brands like Black Lotus that
            independently test their encapsulated product and publish format-specific COA
            data. The data shows capsules can actually test higher in fulvic acid percentage
            than resin, though the concentration process changes the compound spectrum. For
            daily convenience without quality sacrifice, capsules from a verified source are
            a practical option.
          </p>
          <p>
            Powder is the most variable format and deserves the most scrutiny. Without
            knowing the drying method and having a powder-specific COA, you cannot assess
            what you are buying. Budget powder products without these disclosures are the
            highest-risk format in the shilajit category.
          </p>
          <p>
            For the full resin-versus-capsules breakdown including bioavailability, price,
            and brand picks by format, see our dedicated{" "}
            <Link
              href="/blog/shilajit-resin-vs-capsules"
              className="text-[#10B981] hover:underline font-medium"
            >
              shilajit resin vs capsules comparison →
            </Link>
          </p>
        </div>
      </section>
    </BlogPostLayout>
  );
}
