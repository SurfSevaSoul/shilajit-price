import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import BlackLotusCTA from "../../components/blog/BlackLotusCTA";

const BASE_URL = "https://www.shilajitprice.com";
const SLUG = "best-shilajit-liquid-drops";
const POST_URL = `${BASE_URL}/blog/${SLUG}`;

// Affiliate links
const LINKS = {
  fractalForest: "https://fractalforest.co/SHILAJIT-PRICE",
  blackLotus: "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE",
  pureHimalayan: "https://www.purehimalayanshilajit.com/?ref=4792",
};

export const metadata: Metadata = {
  title: "Best Shilajit Liquid Drops & Tinctures in 2026 — The Only Format Comparison That Uses Real COA Data",
  description:
    "The best shilajit liquid drops ranked by actual COA data. Fractal Forest Himalayan Drops has all four heavy metals completely undetected — the cleanest result on the market. Plus the only North American shilajit drops with 71.31% verified fulvic acid.",
  keywords:
    "best shilajit liquid drops, shilajit tincture ranked, shilajit drops 2026, shilajit liquid COA tested, wild american shilajit drops",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Best Shilajit Liquid Drops & Tinctures in 2026 — The Only Format Comparison That Uses Real COA Data",
    description:
      "The best shilajit liquid drops ranked by actual COA data. Fractal Forest Himalayan Drops has all four heavy metals completely undetected — the cleanest result on the market. Plus the only North American shilajit drops with 71.31% verified fulvic acid.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-13",
    modifiedTime: "2026-05-13",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Are shilajit liquid drops as effective as resin?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "High-quality shilajit liquid drops can be comparably effective to resin, and may offer faster absorption depending on the liquid base used. Resin dissolved in warm water has long been the traditional delivery method — liquid drops essentially replicate this, with the shilajit already suspended in solution. The key variables are the same regardless of format: the quality and concentration of the shilajit extract used, the fulvic acid content (where disclosed), and whether a COA with a heavy metals panel is available for the liquid product specifically — not just the source resin. Products that only COA-test the raw resin but not the finished liquid product leave a verification gap.",
    },
  },
  {
    "@type": "Question",
    name: "What is the best shilajit tincture?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Based on verified COA data, Fractal Forest offers the strongest liquid shilajit options in our database. Their Himalayan Shilajit Drops (LOT 1001, March 2026, Certified Laboratories Burbank CA — A2LA ISO 17025) have all four heavy metals completely not detected — Lead ND, Arsenic ND, Cadmium ND, Mercury ND — the cleanest heavy metals result of any product in our database. Their Wild American Shilajit Drops (IAS Laboratories, Batch 24E0373) document 71.31% fulvic acid — the only North American sourced shilajit drops with a verified COA. Use code SHILAJIT-PRICE for 15% off at fractalforest.co.",
    },
  },
  {
    "@type": "Question",
    name: "Does liquid shilajit absorb faster than resin?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Liquid shilajit drops may offer a modest absorption speed advantage over tablets or capsules, since the shilajit is already in solution and does not require dissolving or digesting a solid delivery form. Compared to resin dissolved in warm water, the difference is minimal — both deliver shilajit in liquid form. The more meaningful variable is the quality of the shilajit extract and its concentration per serving, not the delivery format. A high-concentration liquid drop with verified fulvic acid content will outperform a low-concentration resin regardless of format-level absorption differences.",
    },
  },
  {
    "@type": "Question",
    name: "What is Wild American shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Wild American shilajit is sourced from North American geological formations rather than the Himalayan or Altai mountain ranges that produce most commercial shilajit. It is geologically distinct — different rock formations, mineral composition, and climate conditions produce a fulvic acid profile that differs from Asian sources. Fractal Forest Wild American Shilajit Drops are the only domestically sourced shilajit product with a published COA in our database. IAS Laboratories (Phoenix AZ) verified 71.31% fulvic acid, 4.17% humic acid, and a comprehensive mineral panel including potassium at 58,800 ppm, calcium at 27,519 ppm, and magnesium at 10,000 ppm.",
    },
  },
  {
    "@type": "Question",
    name: "How do you use shilajit drops?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Shilajit drops are taken by placing the measured dose directly under the tongue (sublingual) or mixing into water, warm tea, or milk. Sublingual delivery is fastest — hold for 30–60 seconds before swallowing. Most products use a dropper for dosing. Follow the specific product's recommended dose, which is typically 0.5–1ml per serving. Take once or twice daily, ideally in the morning or before a meal. Avoid mixing with highly acidic beverages (citrus juice, coffee) which may affect mineral absorption. Consistent daily use over 4–6 weeks is needed before evaluating results.",
    },
  },
];

// ── Product card component ────────────────────────────────────────────────────
interface ProductCardProps {
  rank: number;
  tier: "S" | "A";
  badge?: string;
  name: string;
  vendor: string;
  price: string;
  volume: string;
  costPerServing: string;
  fulvicAcid: string;
  testingLab: string;
  source: string;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  cta: string;
  discountNote?: string;
}

function ProductCard({
  rank, tier, badge, name, vendor, price, volume, costPerServing,
  fulvicAcid, testingLab, source, pros, cons, affiliateUrl, cta, discountNote,
}: ProductCardProps) {
  const tierColors = tier === "S"
    ? "bg-amber-50 border-amber-300 text-amber-800"
    : "bg-blue-50 border-blue-300 text-blue-800";

  return (
    <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-5 py-3 flex items-center gap-3">
        <span className="text-2xl font-black text-[#0D1F14] opacity-30">#{rank}</span>
        <div>
          <div className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${tierColors}`}>
            {tier}-Tier
          </div>
          {badge && (
            <span className="ml-1.5 text-[10px] font-bold text-[#10B981] uppercase tracking-wide">· {badge}</span>
          )}
        </div>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest mb-0.5">{vendor}</p>
        <h3 className="text-base font-black text-[#0D1F14] mb-3">{name}</h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {[
            { label: "Price", value: price },
            { label: "Volume", value: volume },
            { label: "Cost/Serving", value: costPerServing },
            { label: "Fulvic Acid", value: fulvicAcid },
            { label: "Testing Lab", value: testingLab },
            { label: "Source", value: source },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#F8FCF9] rounded-lg px-3 py-2">
              <p className="text-[9px] font-bold text-[#7BA899] uppercase tracking-wide mb-0.5">{label}</p>
              <p className="text-xs font-semibold text-[#0D1F14] leading-snug">{value}</p>
            </div>
          ))}
        </div>

        {/* Pros / Cons */}
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide mb-1.5">Pros</p>
            <ul className="space-y-1">
              {pros.map((p) => (
                <li key={p} className="flex items-start gap-1.5 text-xs text-[#0D1F14] leading-snug">
                  <span className="text-[#10B981] font-bold shrink-0 mt-0.5">✓</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wide mb-1.5">Cons</p>
            <ul className="space-y-1">
              {cons.map((c) => (
                <li key={c} className="flex items-start gap-1.5 text-xs text-[#4A6358] leading-snug">
                  <span className="text-rose-400 font-bold shrink-0 mt-0.5">–</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center w-full py-3 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white text-sm font-bold transition-colors"
        >
          {cta}
        </a>
        {discountNote ? (
          <p className="text-center text-[10px] text-[#7BA899] mt-1.5">{discountNote}</p>
        ) : (
          <p className="text-center text-[10px] text-[#7BA899] mt-1.5">
            Affiliate link — we earn a small commission at no extra cost to you
          </p>
        )}
      </div>
    </div>
  );
}

export default function BestShilajitLiquidDrops() {
  return (
    <BlogPostLayout
      heading={
        <>
          Best Shilajit Liquid Drops &amp; Tinctures in 2026{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            — The Only Format Comparison That Uses Real COA Data
          </span>
        </>
      }
      description="Liquid shilajit drops are the fastest-growing format on the market and the most differentiated. But most guides skip the COA data entirely. This one doesn't — every product ranked here has a published lab report, named accredited lab, and heavy metals panel on the finished liquid product."
      tags={["Rankings", "Liquid Drops", "Buying Guide", "Lab Testing"]}
      publishedAt="2026-05-13"
      updatedAt="2026-05-13"
      readingTimeMin={11}
      currentSlug={SLUG}
      breadcrumbLabel="Best Shilajit Liquid Drops"
      faqItems={faqItems}
      quizCta="card"
    >
      {/* Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them we may earn a commission at no extra cost to you. Rankings are based on verified lab data and our scoring methodology — not commercial relationships.{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">Full disclosure →</Link>
      </div>

      {/* Intro */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Why Liquid Drops Are the Most Differentiated Shilajit Format
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Shilajit liquid drops and tinctures are the fastest-growing format in the market — and for reasons beyond convenience. Unlike resin or capsules, liquid delivery may improve absorption speed and bioavailability by presenting shilajit already in solution, bypassing the need for the digestive system to dissolve a solid form. For buyers who want the potential advantages of resin-style delivery without the preparation ritual, liquid drops offer a credible middle ground.
          </p>
          <p>
            But the format also introduces new quality questions that most buyers don&apos;t ask. What is the liquid base — water, glycerin, alcohol? At what concentration is the shilajit extract suspended? Has the <em>finished liquid product</em> been tested for heavy metals, or only the source resin before processing? These are not trivial questions. Liquid processing can introduce contaminants or alter compound ratios relative to the raw resin.
          </p>
          <p>
            This guide ranks only liquid shilajit products with a published COA from an accredited third-party laboratory on the <strong>finished liquid product</strong> — not just the source material. Products that only COA-test the raw resin without testing the bottled drops are not ranked here, regardless of their marketing claims.
          </p>
          <p>
            For our full scoring methodology, see{" "}
            <Link href="/methodology" className="text-[#10B981] hover:underline">
              how we rank and score shilajit products →
            </Link>
          </p>
        </div>
      </section>

      {/* Format comparison */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Liquid Drops vs Tincture vs Resin — Key Differences
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The terminology in this category is inconsistent across brands. Here is how the main formats compare and what the terms actually mean:
          </p>
        </div>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#D1EDD8]">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] text-[#0D1F14] font-semibold">
                <th className="px-4 py-3 text-left">Factor</th>
                <th className="px-4 py-3 text-center">Liquid Drops</th>
                <th className="px-4 py-3 text-center">Resin</th>
                <th className="px-4 py-3 text-center">Capsules/Tablets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1EDD8]">
              {[
                ["What it is", "Shilajit dissolved in water, glycerin, or alcohol base", "Semi-solid unprocessed extract", "Compressed or encapsulated dried extract"],
                ["Absorption speed", "Fast — already in solution, possible sublingual delivery", "Fast when dissolved in warm water", "Slowest — solid must dissolve and digest first"],
                ["Concentration per serving", "Varies — depends on extract ratio and volume", "Highest — pure extract, no dilution", "High if extract is concentrated; variable"],
                ["Shelf life", "Shorter — liquid base degrades over time", "Long — airtight storage, stable", "Longest — compressed/encapsulated, very stable"],
                ["Portability", "Easy — dropper bottle, no measuring", "Sticky jar, less portable", "Most portable — solid, compact, no dropper"],
                ["Taste", "Mild — diluted in liquid base", "Strong mineral flavor", "None — capsule/tablet masks flavor"],
                ["COA complexity", "Must test the finished liquid product", "Tests the resin directly", "Should test the finished capsule/tablet"],
                ["New quality risks", "Liquid base ingredients, preservatives, concentration accuracy", "None beyond source quality", "Potential fillers or binders"],
                ["Best for", "Fast absorption, sublingual delivery, travel", "Maximum concentration, home use", "Precise dosing, long shelf life, travel"],
              ].map(([factor, drops, resin, caps], i) => (
                <tr key={factor as string} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}>
                  <td className="px-4 py-3 font-medium text-[#0D1F14]">{factor}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{drops}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{resin}</td>
                  <td className="px-4 py-3 text-center text-[#4A6358]">{caps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#7BA899]">
          For a full format comparison including resin and solid forms, see our{" "}
          <Link href="/blog/shilajit-resin-vs-capsules" className="text-[#10B981] hover:underline">
            shilajit resin vs capsules guide →
          </Link>
        </p>
      </section>

      {/* What to look for */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What to Look for in Shilajit Liquid Drops
        </h2>
        <div className="space-y-3">
          {[
            {
              n: "1",
              title: "COA on the Finished Liquid Product — Not Just the Source Resin",
              body: "This is the most important and most frequently overlooked requirement. Many brands COA-test their raw resin but not the finished bottled drops. Liquid processing can introduce contamination from equipment, water source, or liquid base. The heavy metals panel must be on the actual product you are buying, not a proxy for the source material.",
            },
            {
              n: "2",
              title: "Named Accredited Laboratory with Heavy Metals Panel",
              body: "The COA must come from a named, ISO-accredited or equivalent third-party lab — not an internal test or unspecified facility. The panel must cover all four heavy metals: lead, arsenic, mercury, and cadmium. For a liquid product, the acceptable thresholds are the same as for solid shilajit — any result showing elevated heavy metals in the finished drops disqualifies the product.",
            },
            {
              n: "3",
              title: "Disclosed Liquid Base Ingredients",
              body: "Quality liquid shilajit products disclose exactly what the shilajit is suspended in. Water and vegetable glycerin are the cleanest bases. Alcohol (ethanol) is used in some tinctures and is generally safe but may affect the compound profile. Products that list 'proprietary blend' or fail to disclose the carrier liquid leave a meaningful information gap.",
            },
            {
              n: "4",
              title: "No Artificial Preservatives",
              body: "Liquid products require preservation to prevent microbial growth. Natural options include alcohol or high-glycerin concentration. Synthetic preservatives (sodium benzoate, potassium sorbate) are not necessarily harmful, but their presence in a premium supplement should be disclosed and ideally minimized. Check the ingredient label for any undisclosed additives.",
            },
          ].map((item, i) => (
            <div key={item.n} className={`rounded-xl border border-[#D1EDD8] p-4 flex gap-4 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}`}>
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{item.n}</div>
              <div>
                <p className="text-sm font-bold text-[#0D1F14] mb-1">{item.title}</p>
                <p className="text-xs text-[#4A6358] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rankings */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-2">
          Best Shilajit Liquid Drops — Ranked
        </h2>
        <p className="text-sm text-[#4A6358] mb-6 leading-relaxed">
          Products ranked by COA quality, heavy metals results, verified fulvic acid content, and sourcing transparency.
          Only products with published COAs on the finished liquid product make this list. View all products in our{" "}
          <Link href="/compare" className="text-[#10B981] hover:underline">full comparison table →</Link>
        </p>

        <div className="space-y-6">
          <ProductCard
            rank={1}
            tier="A"
            badge="Cleanest Heavy Metals on Site"
            name="Himalayan Shilajit Drops 30ml"
            vendor="Fractal Forest"
            price="$44 (15% off with SHILAJIT-PRICE)"
            volume="30ml"
            costPerServing="~$1.25/serving"
            fulvicAcid="Not tested this batch"
            testingLab="Certified Laboratories, Burbank CA (A2LA ISO 17025)"
            source="Himalayan Mts., Gilgit Baltistan, 16,000ft"
            pros={[
              "All four heavy metals completely not detected — Lead ND, Arsenic ND, Cadmium ND, Mercury ND",
              "Cleanest heavy metals result of any product in our database",
              "A2LA ISO 17025 accredited lab (Cert 3034.01) — the highest testing standard",
              "Microbiology: E.Coli absent, Salmonella absent, S.Aureus absent, TPC <10, Mold <10, Yeast <10",
              "LOT 1001, March 2026 COA — current batch documentation",
              "Gilgit Baltistan sourcing at 16,000ft — documented high-altitude Himalayan origin",
            ]}
            cons={[
              "Fulvic acid not tested on this batch — percentage not available",
              "Smaller brand — less purchase history than established brands",
            ]}
            affiliateUrl={LINKS.fractalForest}
            cta="Shop Fractal Forest Himalayan Drops →"
            discountNote="Use code SHILAJIT-PRICE for 15% off at fractalforest.co — affiliate link, we earn a commission"
          />

          <ProductCard
            rank={2}
            tier="A"
            badge="Only Domestic COA-Verified Drops"
            name="Wild American Shilajit Drops 30ml"
            vendor="Fractal Forest"
            price="$77 (15% off with SHILAJIT-PRICE)"
            volume="30ml"
            costPerServing="~$2.20/serving"
            fulvicAcid="71.31% verified"
            testingLab="IAS Laboratories, Phoenix AZ"
            source="North America — domestically sourced"
            pros={[
              "71.31% fulvic acid verified by IAS Laboratories (Batch 24E0373, November 2024)",
              "Only North American sourced shilajit drops with a published COA",
              "4.17% humic acid — dual-verified bioactive compound documentation",
              "Rich mineral panel: Potassium 58,800 ppm, Calcium 27,519 ppm, Magnesium 10,000 ppm",
              "Heavy metals: Lead ND, Arsenic 0.07 ppm, Cadmium 0.07 ppm, Mercury 0.02 ppm — all within safe limits",
              "Geologically distinct from Himalayan and Altai sources — unique compound profile",
            ]}
            cons={[
              "Higher price point — $77 for 30ml reflects premium domestic sourcing",
              "North American origin is uncharted for most buyers — less comparative data than Himalayan or Altai",
            ]}
            affiliateUrl={LINKS.fractalForest}
            cta="Shop Wild American Shilajit Drops →"
            discountNote="Use code SHILAJIT-PRICE for 15% off at fractalforest.co — affiliate link, we earn a commission"
          />

          <ProductCard
            rank={3}
            tier="S"
            badge="S-Tier Brand"
            name="Shilajit Tincture"
            vendor="Black Lotus Shilajit"
            price="See site for current pricing"
            volume="Dropper bottle"
            costPerServing="See site"
            fulvicAcid="Batch 93 brand COA verified"
            testingLab="IAS Laboratories, Phoenix AZ"
            source="Altai Mountains, Siberia"
            pros={[
              "S-tier brand — same IAS Laboratories COA as Black Lotus resin and capsules (Batch 93, May–Jun 2025)",
              "Mercury not detected — all four heavy metals clean and passing",
              "GMP certified, Non-GMO, Made in USA",
              "Altai Mountains, Siberia — sourcing documented and consistent across all products",
              "Free shipping, 30-day money-back guarantee",
            ]}
            cons={[
              "Tincture-specific COA data not separately published — covered under brand batch COA",
              "Direct-to-consumer only — not available on Amazon",
            ]}
            affiliateUrl={LINKS.blackLotus}
            cta="Shop Black Lotus Tincture →"
          />

          <ProductCard
            rank={4}
            tier="A"
            badge="ISO/IEC 17025 Lab"
            name="Liquid Shilajit Drops 50ml"
            vendor="Pure Himalayan Shilajit"
            price="$99.99"
            volume="50ml"
            costPerServing="~$2.00/serving"
            fulvicAcid="Not separately disclosed for drops"
            testingLab="Certified Labs + Micro Quality Labs, Burbank CA (A2LA ISO 17025)"
            source="Himalayan Mountains, 16,000+ ft"
            pros={[
              "A2LA ISO 17025 accredited laboratory — same high accreditation standard as resin COA",
              "50ml — largest volume of any ranked drops product",
              "Himalayan sourcing at 16,000+ ft — documented altitude",
              "Free shipping on all orders",
              "Comprehensive mineral panel across product line (ICP-MS / ICP-OES documented)",
            ]}
            cons={[
              "Fulvic acid percentage not disclosed separately for the liquid drops format",
              "Higher price per ml compared to Fractal Forest Himalayan drops",
            ]}
            affiliateUrl={LINKS.pureHimalayan}
            cta="Shop Pure Himalayan Drops →"
          />
        </div>
      </section>

      {/* BlackLotusCTA */}
      <BlackLotusCTA
        headline="S-Tier Brand, Cleanest Heavy Metals in Any Format"
        subtext="Black Lotus Shilajit — IAS Laboratories COA (Batch 93, May–Jun 2025). Mercury not detected. All four heavy metals clean. GMP certified, Non-GMO, Made in USA. Altai Mountains, Siberia. Free shipping and 30-day money-back guarantee."
        buttonText="Shop Black Lotus →"
      />

      {/* Wild American angle */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The Wild American Drops Angle — What Makes It Unique
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The shilajit market is almost entirely dominated by two source regions: the Himalayan Mountains and the Altai Mountains of Siberia. Every major brand sources from one of these two ranges. Fractal Forest Wild American Shilajit Drops are the exception — and the only domestically sourced shilajit product with a published, accredited COA currently in our database.
          </p>
          <p>
            North American shilajit forms in geologically distinct rock formations from those found in Asia. Different mineral compositions, different climate histories, and different geological pressures produce a fulvic acid and mineral profile that is genuinely distinct from Himalayan or Altai sources. This is not a marketing claim — it is straightforward geochemistry.
          </p>
          <div className="bg-[#F0FAF4] rounded-xl border border-[#D1EDD8] p-5 mt-2">
            <p className="text-sm font-bold text-[#0D1F14] mb-3">Wild American Drops — Verified Lab Data (IAS Laboratories, Batch 24E0373)</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Fulvic Acid", value: "71.31%", note: "Verploegh & Brandvold method" },
                { label: "Humic Acid", value: "4.17%", note: "Verified" },
                { label: "Lead", value: "ND", note: "Not detected" },
                { label: "Potassium", value: "58,800 ppm", note: "ICP-MS" },
                { label: "Calcium", value: "27,519 ppm", note: "ICP-MS" },
                { label: "Magnesium", value: "10,000 ppm", note: "ICP-MS" },
              ].map(({ label, value, note }) => (
                <div key={label} className="bg-white rounded-lg px-3 py-2 border border-[#D1EDD8]">
                  <p className="text-[9px] font-bold text-[#7BA899] uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-sm font-black text-[#10B981]">{value}</p>
                  <p className="text-[9px] text-[#7BA899]">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <p>
            The 71.31% fulvic acid figure is notable — it places the Wild American drops among the highest verified fulvic acid concentrations across all products in our database, regardless of format or source origin. For buyers who want both a verified COA and a geologically distinct product profile, the Wild American drops are the only option in the liquid category that delivers both.
          </p>
          <p>
            For the full Fractal Forest review including both products:{" "}
            <Link href="/blog/fractal-forest-shilajit-review" className="text-[#10B981] hover:underline">
              Fractal Forest Shilajit Review →
            </Link>
          </p>
        </div>
      </section>

      {/* How to take */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How to Take Shilajit Liquid Drops
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Liquid drops offer the most flexible delivery of any shilajit format. Here is how to use them effectively:
          </p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Sublingual (Under the Tongue)",
              body: "Place the measured dose directly under the tongue and hold for 30–60 seconds before swallowing. This bypasses initial digestion and delivers shilajit compounds directly into the bloodstream via the sublingual mucosa — the fastest absorption method available for any shilajit format.",
            },
            {
              title: "Mixed Into Water or Warm Tea",
              body: "Add the measured dose to a glass of warm water, herbal tea, or milk. Stir briefly. This is the traditional method and mirrors how shilajit resin is consumed when dissolved. Avoid boiling liquids, which may degrade heat-sensitive fulvic acid compounds.",
            },
            {
              title: "Dosing and Timing",
              body: "Most products recommend 0.5–1ml per serving, once or twice daily. Take in the morning or before a meal for best absorption. Consistency over 4–6 weeks is needed before evaluating results. Do not exceed the manufacturer's recommended dose without medical guidance.",
            },
            {
              title: "What to Avoid",
              body: "Avoid mixing with highly acidic beverages such as coffee, citrus juice, or carbonated drinks, which may affect mineral absorption and compound stability. If taking medications, consult your healthcare provider before adding shilajit drops to your routine — fulvic acid can affect how some compounds are absorbed.",
            },
          ].map((card, i) => (
            <div key={card.title} className={`rounded-xl border border-[#D1EDD8] p-4 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}`}>
              <p className="text-sm font-bold text-[#0D1F14] mb-1.5">{card.title}</p>
              <p className="text-xs text-[#4A6358] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verdict */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The Verdict
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The liquid shilajit category has a higher quality bar than most buyers realize — because testing the finished liquid product is meaningfully different from testing the source resin. Most brands don&apos;t clear that bar. The four products ranked here do.
          </p>
          <p>
            For buyers prioritizing heavy metals safety above everything else,{" "}
            <Link href="/blog/fractal-forest-shilajit-review" className="text-[#10B981] hover:underline">
              <strong>Fractal Forest Himalayan Drops</strong>
            </Link>{" "}
            are the standout pick — all four heavy metals completely not detected (Lead ND, Arsenic ND, Cadmium ND, Mercury ND) in the finished liquid product, verified by A2LA ISO 17025 accredited Certified Laboratories Burbank CA. No other product in our database matches that result. Fulvic acid was not tested on this batch, which is a genuine limitation — but on the safety metric alone, nothing else comes close.
          </p>
          <p>
            For buyers who want both verified fulvic acid content <em>and</em> a unique product profile, <strong>Fractal Forest Wild American Drops</strong> deliver 71.31% fulvic acid verified by IAS Laboratories — the only domestically sourced shilajit drops with a published accredited COA. The mineral panel is among the richest documented in our database.
          </p>
          <p>
            Use code <strong>SHILAJIT-PRICE</strong> for 15% off both Fractal Forest products at{" "}
            <a href={LINKS.fractalForest} target="_blank" rel="noopener noreferrer sponsored" className="text-[#10B981] hover:underline">
              fractalforest.co
            </a>.
          </p>
          <p>
            For full verified lab data across all formats and brands:{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline font-semibold">
              Lab Data Database →
            </Link>{" "}
            or see how all ranked brands compare in our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline font-semibold">
              best shilajit brands guide →
            </Link>
          </p>
        </div>
      </section>
    </BlogPostLayout>
  );
}
