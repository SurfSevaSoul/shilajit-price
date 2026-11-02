import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import ChecklistDownload from "../../components/ChecklistDownload";

const BL_BASE = "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const BL_RESIN = "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const LBH = "https://lotusbloomingherbs.com/?aff=380";
const FF = "https://fractalforest.co/SHILAJIT-PRICE";
const NS = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const PH = "https://www.purehimalayanshilajit.com/?ref=4792";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-black-friday-deals`;

export const metadata: Metadata = {
  title: "Shilajit Black Friday 2026 — Spot a Real Deal",
  description:
    "How to evaluate any shilajit Black Friday deal with lab data and price-per-gram math. Adrian Voss covers the verified brands and what to avoid.",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Shilajit Black Friday 2026 — How to Spot a Real Deal",
    description:
      "Five checks for any shilajit sale. Which verified brands have standing discounts, and how to calculate real value with price-per-gram math.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-11-02",
    modifiedTime: "2026-11-02",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Do shilajit brands actually discount on Black Friday?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Some do. Fractal Forest maintains a standing 15% discount year-round via code SHILAJIT-PRICE. Other brands run periodic promotions — check each brand's site directly during the Black Friday window. Be skeptical of 'limited time' countdown timers that reset: these are a common dark pattern in the supplement category and do not signal a genuine sale.",
    },
  },
  {
    "@type": "Question",
    name: "What is a good price per gram for lab-verified shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For lab-verified shilajit with a current, batch-specific COA from an independent ISO-accredited lab, $1.00–$2.00 per gram is a reasonable range for resin. Black Lotus Pure Altai Resin sits around $1.23/g at standard pricing. Products below $0.70/g with strong verification claims should be examined closely — the cost of proper sourcing, purification, and third-party testing makes very low price points difficult to sustain with quality inputs.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate price per gram for shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Divide the final checkout price by the weight in grams. For example, a 30g jar at $37 = $1.23/g. For capsules, use the total shilajit weight (not capsule count) — check the label for mg per capsule and multiply by count. This gives a comparable cost basis across formats. Apply any discount code before the final calculation.",
    },
  },
  {
    "@type": "Question",
    name: "Are Black Friday shilajit sales safe to buy from?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Established brands that already publish COA data from independent labs are the same brands during a sale — the product does not change because of a discount. The risk is buying from unfamiliar brands that appear only during sale periods with aggressive pricing and no verifiable COA. Use the same verification checklist regardless of timing: independent lab, batch-specific COA, specific ppm values for heavy metals.",
    },
  },
];

export default function ShilajitBlackFridayDeals() {
  return (
    <BlogPostLayout
      heading={
        <>
          Shilajit Black Friday 2026:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            How to Spot a Real Deal
          </span>
        </>
      }
      description="Five checks for any shilajit sale. Which verified brands offer standing or seasonal discounts, how to calculate real value with price-per-gram math, and what sale tactics to avoid."
      tags={["Buying Guide", "Black Friday", "Lab Testing"]}
      publishedAt="2026-11-02"
      updatedAt="2026-11-02"
      readingTimeMin={7}
      currentSlug="shilajit-black-friday-deals"
      quizCta="card"
      breadcrumbLabel="Shilajit Black Friday Deals"
      faqItems={faqItems}
    >
      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. This does not affect our rankings — see our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclosure policy</Link>.
      </div>

      {/* Intro */}
      <section>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Black Friday is the highest-risk shopping window in the supplement category. Every unverified shilajit brand runs aggressive promotions during this period, making it harder to distinguish real deals from price anchoring on products that lack proper documentation.
          </p>
          <p>
            The good news: if you know what to verify, the math is simple. A genuine deal on a verified product is a genuine deal. A 50% discount on an unverified product is not a deal at any price.
          </p>
          <p>
            This guide covers the five checks to apply to any shilajit sale, the verified brands with known standing discounts, and how to calculate price per gram so you can compare across formats. For the full ranked database, see our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline font-semibold">best shilajit brands ranked by lab data</Link>.
          </p>
        </div>
      </section>

      <ChecklistDownload location="shilajit-black-friday-deals" compact />

      {/* 5-point deal check */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">The 5-point deal check</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          Apply these five checks to any shilajit sale before purchasing — regardless of price, brand, or platform.
        </p>
        <div className="space-y-3">
          {[
            {
              n: "1",
              title: "Current batch-specific COA from an independent lab",
              body: "The most important check. The COA must name a specific laboratory, include a batch or lot number, and be dated within the past 18 months. A COA that says 'tested by an independent lab' without naming the lab, or that lacks a batch number, cannot be attributed to the product in your cart.",
            },
            {
              n: "2",
              title: "Exact ppm values for Lead, Arsenic, Mercury, Cadmium",
              body: "Heavy metal results must appear as specific numbers, not as 'Pass' checkmarks. This is the difference between auditable documentation and marketing language. Mercury is the highest-concern metal — it should ideally be not detected (ND). A COA that shows only Pass/Fail is not independently verifiable.",
            },
            {
              n: "3",
              title: "Price per gram before and after discount",
              body: "Divide the sale price by weight in grams. Then compare to the regular price to confirm the discount is real. Price anchoring is common in this category — some brands inflate regular prices to make sales look larger than they are. If you cannot verify the regular price from a third-party source, treat the discount claim cautiously.",
            },
            {
              n: "4",
              title: "No countdown timers that reset on page reload",
              body: "A countdown that restarts every time you visit the page is not a real deadline. This is a well-documented dark pattern in supplement e-commerce. Genuine limited offers have a fixed end date that is the same regardless of when you arrive at the page.",
            },
            {
              n: "5",
              title: "Established brand with consistent documentation history",
              body: "Brands that only appear during sale periods with no standing COA history and aggressive introductory pricing are the highest-risk category. Cross-reference any Black Friday brand against established review sources. If no verifiable COA existed before November, the sale does not make it trustworthy.",
            },
          ].map((item) => (
            <div key={item.n} className="bg-white border border-[#D1EDD8] rounded-xl p-4 flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#10B981] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{item.n}</span>
              <div>
                <p className="text-sm font-bold text-[#0D1F14] mb-1">{item.title}</p>
                <p className="text-xs text-[#4A6358] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Price per gram math */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Price per gram: how to compare across formats</h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The only honest way to compare shilajit products across sizes, formats, and discount depths is price per gram of actual shilajit.
          </p>
        </div>
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 my-4">
          <p className="text-xs font-bold text-[#0D1F14] mb-2">The formula</p>
          <div className="bg-[#F0FAF4] rounded-lg p-3 font-mono text-sm text-[#0D1F14]">
            Price per gram = Final checkout price ÷ Weight in grams
          </div>
          <div className="mt-3 space-y-1 text-xs text-[#4A6358]">
            <p><span className="font-semibold text-[#0D1F14]">Example (resin):</span> 30g jar at $37 → $37 ÷ 30 = $1.23/g</p>
            <p><span className="font-semibold text-[#0D1F14]">Example (capsules):</span> 60 capsules × 500mg each = 30g total → use same formula</p>
            <p><span className="font-semibold text-[#0D1F14]">Tip:</span> Apply any discount code before dividing — compare the post-discount number.</p>
          </div>
        </div>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          For lab-verified shilajit from an independent ISO-accredited lab, $1.00–$2.00/g is the current market range for resin. Products below $0.70/g that claim full third-party verification are worth scrutinizing more closely — proper sourcing, purification, and independent testing have real costs.
        </p>
      </section>

      {/* Verified offers */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Verified offers from lab-documented brands</h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
          These are the brands in our database with verified COA documentation from independent laboratories. Standing discounts and seasonal offers are listed where confirmed. For sale-specific deals, check each brand&apos;s site directly during the Black Friday window.
        </p>

        <div className="space-y-4">
          {/* Fractal Forest */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Standing Discount — Verified</div>
                <h3 className="text-base font-black text-[#0D1F14]">Fractal Forest — 15% off year-round</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-emerald-100 text-emerald-800">A Tier</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-3">
              Use code <span className="font-mono font-bold text-[#0D1F14] bg-[#F0FAF4] px-1.5 py-0.5 rounded">SHILAJIT-PRICE</span> for 15% off sitewide at Fractal Forest. This is a standing affiliate discount, not a seasonal offer — it works before, during, and after Black Friday. Fractal Forest is the only verified brand offering liquid drops. Himalayan Drops have all four heavy metals not detected (A2LA ISO 17025, Certified Laboratories Burbank, Gilgit Baltistan source). Wild American Drops: 71.31% fulvic acid (North American source).
            </p>
            <a href={FF} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
              Shop Fractal Forest — Use SHILAJIT-PRICE →
            </a>
          </div>

          {/* Black Lotus */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Check Brand Site for Current Offer</div>
                <h3 className="text-base font-black text-[#0D1F14]">Black Lotus Shilajit</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-amber-100 text-amber-800">S Tier</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              Highest verified fulvic acid in our database — 74.30% (tablets, Batch 93), 73.11% (capsules), 64.51% (resin), all IAS Laboratories Phoenix AZ, Verploegh/Brandvold method. Mercury not detected across all three forms. Batch 93, May–June 2025.
            </p>
            <p className="text-xs text-[#7BA899] leading-relaxed mb-3">
              Check the Black Lotus site directly for any Black Friday or seasonal promotions. Pricing: resin ~$1.23/g at standard price.
            </p>
            <a href={BL_RESIN} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
              View Black Lotus →
            </a>
          </div>

          {/* Lotus Blooming Herbs */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Check Brand Site for Current Offer</div>
                <h3 className="text-base font-black text-[#0D1F14]">Lotus Blooming Herbs</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-amber-100 text-amber-800">S Tier</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              Ayurvedic practitioner-owned brand, among the first to introduce pure resin shilajit to the Western market. Certified Laboratories Burbank (A2LA ISO 17025). Himalayan source, 16,000–18,000ft. Fulvic acid intentionally not disclosed.
            </p>
            <p className="text-xs text-[#7BA899] leading-relaxed mb-3">
              Check the Lotus Blooming Herbs site directly for any Black Friday promotions.
            </p>
            <a href={LBH} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
              View Lotus Blooming Herbs →
            </a>
          </div>

          {/* Natural Shilajit */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Check Brand Site for Current Offer</div>
                <h3 className="text-base font-black text-[#0D1F14]">Natural Shilajit</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-emerald-100 text-emerald-800">A Tier</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              UNESCO-protected Altai Mountain source. Third-party COA with DBP verification. Fulvic acid not disclosed. Consistent documentation history.
            </p>
            <p className="text-xs text-[#7BA899] leading-relaxed mb-3">
              Check the Natural Shilajit site directly for any Black Friday promotions.
            </p>
            <a href={NS} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
              View Natural Shilajit →
            </a>
          </div>

          {/* Pure Himalayan */}
          <div className="bg-white border border-[#D1EDD8] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Check Brand Site for Current Offer</div>
                <h3 className="text-base font-black text-[#0D1F14]">Pure Himalayan Shilajit</h3>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded bg-emerald-100 text-emerald-800">A Tier</span>
            </div>
            <p className="text-xs text-[#4A6358] leading-relaxed mb-2">
              About 58% fulvic acid by UV spectrophotometry (A2LA ISO 17025). Note: their 2021 COA is the most recent published — request a current COA before purchasing. UV spectrophotometry results are not directly comparable to IAS Labs Verploegh/Brandvold method numbers.
            </p>
            <p className="text-xs text-[#7BA899] leading-relaxed mb-3">
              Check the Pure Himalayan site directly for any Black Friday promotions.
            </p>
            <a href={PH} target="_blank" rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
              View Pure Himalayan Shilajit →
            </a>
          </div>
        </div>
      </section>

      {/* What to avoid */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What to avoid during Black Friday sales</h2>
        <div className="space-y-3">
          {[
            {
              flag: "Countdown timers that restart on page reload",
              detail: "One of the most common dark patterns in supplement e-commerce. If the timer resets every time you visit, it is not a real deadline — it is pressure marketing. Real limited sales have fixed end dates.",
            },
            {
              flag: "Price anchoring without verifiable history",
              detail: "'Was $120, now $49' only means something if the regular price was real and verifiable. If no third-party source shows the product at $120, the anchor is marketing copy, not a real discount.",
            },
            {
              flag: "New or pop-up brands with no pre-existing COA",
              detail: "Brands that launch or appear only during sale periods with no prior review presence and no established COA documentation are the highest-risk category. Do not let a discount override the verification requirements.",
            },
            {
              flag: "Amazon listings with rotating brand names",
              detail: "White-label shilajit distributed through multiple brand names on Amazon is a known issue. During high-traffic periods like Black Friday, these listings often increase in volume. Stick to brands with verifiable identity and consistent COA documentation.",
            },
            {
              flag: "COA that covers a different batch than the product sold",
              detail: "During high-volume sales, some brands may ship older inventory while displaying a more recent COA. Verify that the batch number on the COA matches the batch printed on the product you receive.",
            },
          ].map(({ flag, detail }) => (
            <div key={flag} className="bg-white border border-red-200 rounded-xl p-4">
              <div className="text-xs font-bold text-red-600 mb-1.5">⚠ {flag}</div>
              <p className="text-xs text-[#0D1F14] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick reference table */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Quick reference: verified brands at a glance</h2>
        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] text-[#0D1F14] font-semibold">
                <th className="text-left px-3 py-2">Brand</th>
                <th className="text-center px-3 py-2">Tier</th>
                <th className="text-left px-3 py-2">Discount Available</th>
                <th className="text-left px-3 py-2">Lab</th>
                <th className="text-left px-3 py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                { brand: "Black Lotus", tier: "S", discount: "Check site", lab: "IAS Labs (3rd party)", note: "Highest verified FA in DB", alt: false },
                { brand: "Lotus Blooming Herbs", tier: "S", discount: "Check site", lab: "Certified Labs A2LA", note: "FA not disclosed; Himalayan", alt: true },
                { brand: "Fractal Forest", tier: "A", discount: "15% (SHILAJIT-PRICE)", lab: "Certified Labs A2LA", note: "Only liquid drops brand", alt: false },
                { brand: "Natural Shilajit", tier: "A", discount: "Check site", lab: "3rd-party COA", note: "Altai; FA not disclosed", alt: true },
                { brand: "Pure Himalayan", tier: "A", discount: "Check site", lab: "A2LA ISO 17025", note: "2021 COA; request current", alt: false },
              ].map((row) => (
                <tr key={row.brand} className={row.alt ? "bg-[#F0FAF4]" : "bg-white"}>
                  <td className="px-3 py-2 font-medium text-[#0D1F14]">{row.brand}</td>
                  <td className="px-3 py-2 text-center">
                    <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-black ${row.tier === "S" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>{row.tier}</span>
                  </td>
                  <td className="px-3 py-2 text-[#4A6358]">{row.discount}</td>
                  <td className="px-3 py-2 text-[#4A6358]">{row.lab}</td>
                  <td className="px-3 py-2 text-[#4A6358]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#7BA899] mt-2 leading-relaxed">
          For full lab data including heavy metals ppm values and fulvic acid test method details, see our{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline font-semibold">lab data page</Link>.
        </p>
      </section>

      {/* Bottom line */}
      <div className="bg-[#182B1F] border border-[#1E3A28] rounded-2xl p-6">
        <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-2">Bottom Line</p>
        <p className="text-sm text-white leading-relaxed mb-0">
          The verification checklist does not change during Black Friday. A deal on a verified product is a genuine saving — apply the 5-point check above, run the price-per-gram math, and buy confidently from brands that already maintain current COA documentation from named independent labs.
        </p>
      </div>

      {/* Against the Odds callout */}
      <div className="bg-[#0D1F14] border border-[#1E3A28] rounded-2xl p-6">
        <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-2">Want the complete protocol?</p>
        <p className="text-sm text-white leading-relaxed mb-4">
          Want the complete protocol behind the numbers? <em>Against the Odds</em> covers everything else — the full supplement stack with clinical context, the lifestyle protocol, the sauna breakdown, sleep optimization, and the emotional health framework. 71% free testosterone increase, biological age of 29 at 35, no TRT, no pharmaceuticals.
        </p>
        <a
          href="https://www.sevasoulstudios.com/the-growth-studio/p/against-the-odds-natural-mens-health-protocol"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold text-sm transition-colors"
        >
          Get the Protocol — $9.99 →
        </a>
      </div>

      {/* Final CTA */}
      <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6">
        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Standing 15% Discount — Verified</div>
        <h3 className="text-base font-black text-[#0D1F14] mb-1">Fractal Forest — Code SHILAJIT-PRICE</h3>
        <p className="text-xs text-[#7BA899] mb-4">
          A2LA ISO 17025 (Certified Laboratories Burbank) · All heavy metals ND (Himalayan Drops) · 71.31% FA (Wild American Drops) · Only verified liquid drops brand
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={FF} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors">
            Shop Fractal Forest — Use SHILAJIT-PRICE →
          </a>
          <a href={BL_BASE} target="_blank" rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D1F14] hover:bg-[#182B1F] text-white text-sm font-semibold transition-colors">
            View Black Lotus →
          </a>
        </div>
      </div>

      <ChecklistDownload location="shilajit-black-friday-deals" />
    </BlogPostLayout>
  );
}
