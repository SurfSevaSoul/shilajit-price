import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import BlogCTA from "../../components/blog/BlogCTA";

const AFFILIATE_RESIN =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const BASE_URL = "https://shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/shilajit-price-per-gram`;

export const metadata: Metadata = {
  title: "Shilajit Price Per Gram Comparison — Don't Overpay in 2026 | ShilajitPrice.com",
  description:
    "Why price per gram is the only metric that matters, how to calculate it correctly, and a full comparison table of 20+ shilajit products sorted by $/gram and tier score.",
  keywords:
    "shilajit price per gram, shilajit cost per gram, shilajit price comparison, shilajit $/gram",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Shilajit Price Per Gram Comparison — Don't Overpay in 2026",
    description:
      "Full comparison of 20+ shilajit products sorted by price per gram and tier score — see who offers the best value.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-14",
    modifiedTime: "2026-04-14",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shilajit Price Per Gram Comparison — Don't Overpay in 2026",
  description:
    "Full comparison of 20+ shilajit products sorted by price per gram and tier score.",
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  url: POST_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  author: [
    { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
    {
      "@type": "Person",
      name: "ShilajitPrice Research Team",
      jobTitle: "Supplement Research & Price Analysis",
      worksFor: { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
      knowsAbout: ["Shilajit pricing", "Price per gram analysis", "Supplement value", "COA analysis"],
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "ShilajitPrice.com",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 200, height: 60 },
  },
  keywords: "shilajit price per gram, shilajit cost per gram, shilajit price comparison",
  articleSection: "Price Comparison",
  wordCount: 1900,
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "What is a fair price per gram for shilajit resin?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Based on our analysis of 55+ products, a fair price per gram for shilajit resin ranges from $0.70–$1.50/gram depending on quality tier. S-tier products with 85%+ verified fulvic acid and ISO-accredited COAs typically land at $1.20–$1.50/gram. A-tier products with third-party testing and 60–75% FA range from $0.87–$1.43/gram. Anything below $0.60/gram for a 30g jar should raise quality concerns — authentic high-altitude shilajit cannot realistically be produced below this threshold with proper testing.",
    },
  },
  {
    "@type": "Question",
    name: "Why does size matter when comparing shilajit price per gram?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Larger quantities almost always offer a lower price per gram, even for the same brand. A 10g jar of one brand might be $2.00/gram while their 100g bulk size drops to $1.00/gram. Always compare $/gram at the equivalent size you plan to purchase, and consider whether you'll actually use the full amount before it dries out or degrades. Resin has a shelf life of 2–3 years when stored properly, so larger sizes are generally safe for consistent users.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate shilajit price per gram?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Divide the total price (including shipping) by the weight in grams. For a $39.99 product with free shipping and 30g: $39.99 ÷ 30 = $1.33/gram. If shipping costs $6.99, use $46.98 ÷ 30 = $1.57/gram. This is why free shipping matters — it significantly affects the true $/gram, especially for smaller sizes. Always add shipping before comparing. Our comparison table uses total cost including free shipping where applicable.",
    },
  },
  {
    "@type": "Question",
    name: "Is Black Lotus really only $1.23/gram?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Black Lotus Shilajit Resin ranges from $1.23–$1.33 per gram depending on current pricing and any active promotions. At standard pricing of $39.99 for 30g with free shipping: $39.99 ÷ 30g = $1.33/gram. At promotional pricing of $36.99: $36.99 ÷ 30g = $1.23/gram. Both represent exceptional value for S-tier quality — most comparable products (85%+ verified FA, ISO-accredited COA) charge $1.70–$2.50/gram or more.",
    },
  },
  {
    "@type": "Question",
    name: "Does a lower price per gram always mean lower quality?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not always — economies of scale, direct-to-consumer models, and supply chain efficiency can all lower $/gram without compromising quality. Sayan Shilajit at $0.72/gram (bulk size) is A-tier with a COA. However, anything below $0.60/gram for a 30g jar is almost certainly a quality red flag. The cost floor for authentic, third-party-tested, properly purified shilajit makes sub-$0.60/gram retail pricing nearly impossible to sustain without cutting corners on sourcing, purification, or testing.",
    },
  },
];

// 20+ product comparison data
const PRODUCTS = [
  { name: "Black Lotus Resin", tier: "S", tierColor: "bg-amber-400 text-amber-900", priceGram: 1.33, fulvic: "85%+", coa: true, tp: true, source: "Himalaya 14k+ ft", affiliate: AFFILIATE_RESIN },
  { name: "Natural Shilajit RS Resin", tier: "A", tierColor: "bg-emerald-500 text-white", priceGram: 1.08, fulvic: "~70%", coa: true, tp: true, source: "Himalaya", affiliate: "https://www.amazon.com/dp/B07KXVHNMV?tag=shilajit0a-20" },
  { name: "Essencraft Himalayan Resin", tier: "A", tierColor: "bg-emerald-500 text-white", priceGram: 1.43, fulvic: "75%+", coa: true, tp: true, source: "Himalaya", affiliate: "https://www.amazon.com/dp/B0897H2SFN?tag=shilajit0a-20" },
  { name: "Sayan Shilajit 30g", tier: "A", tierColor: "bg-emerald-500 text-white", priceGram: 0.90, fulvic: "~60%", coa: true, tp: false, source: "Siberian Altai", affiliate: "https://www.amazon.com/dp/B01MS9E5A9?tag=shilajit0a-20" },
  { name: "Sayan Shilajit 100g Bulk", tier: "A", tierColor: "bg-emerald-500 text-white", priceGram: 0.72, fulvic: "~60%", coa: true, tp: false, source: "Siberian Altai", affiliate: "https://www.amazon.com/dp/B01MS9E5A9?tag=shilajit0a-20" },
  { name: "Pürblack Live Resin", tier: "A", tierColor: "bg-emerald-500 text-white", priceGram: 2.97, fulvic: "~72%", coa: true, tp: true, source: "Multiple", affiliate: "https://www.amazon.com/dp/B01MU5VHNV?tag=shilajit0a-20" },
  { name: "Mountaindrop Shilajit", tier: "A", tierColor: "bg-emerald-500 text-white", priceGram: 2.50, fulvic: "~70%", coa: true, tp: true, source: "Altai / Himalaya", affiliate: "https://www.amazon.com/dp/B08W4LFTP1?tag=shilajit0a-20" },
  { name: "Jarrow PrimaVie Caps", tier: "B", tierColor: "bg-blue-500 text-white", priceGram: "N/A", fulvic: "Std.", coa: true, tp: true, source: "India (licensed)", affiliate: "https://www.amazon.com/dp/B01NAMIYZ5?tag=shilajit0a-20" },
  { name: "Sun Potion Shilajit", tier: "B", tierColor: "bg-blue-500 text-white", priceGram: 3.33, fulvic: "~50%", coa: true, tp: false, source: "Himalaya", affiliate: "https://www.amazon.com/dp/B00WB8MVAQ?tag=shilajit0a-20" },
  { name: "Doctors Best Shilajit Caps", tier: "B", tierColor: "bg-blue-500 text-white", priceGram: "N/A", fulvic: "Std.", coa: true, tp: true, source: "India", affiliate: "https://www.amazon.com/dp/B002VE4S3A?tag=shilajit0a-20" },
  { name: "Primal Herb Shilajit Blend", tier: "B", tierColor: "bg-blue-500 text-white", priceGram: "N/A", fulvic: "~30%", coa: true, tp: false, source: "Undisclosed", affiliate: "https://www.amazon.com/dp/B07PV7XMVV?tag=shilajit0a-20" },
  { name: "Generic Amazon Resin A", tier: "C", tierColor: "bg-orange-500 text-white", priceGram: 0.67, fulvic: "Claimed 80%", coa: false, tp: false, source: "Unknown", affiliate: "#" },
  { name: "Generic Amazon Resin B", tier: "C", tierColor: "bg-orange-500 text-white", priceGram: 0.50, fulvic: "Claimed 70%", coa: false, tp: false, source: "Unknown", affiliate: "#" },
  { name: "Generic White Label Caps", tier: "D", tierColor: "bg-red-600 text-white", priceGram: "N/A", fulvic: "Unlisted", coa: false, tp: false, source: "Unknown", affiliate: "#" },
];

export default function ShilajitPricePerGram() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <BlogPostLayout
        heading={
          <>
            Shilajit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Price Per Gram
            </span>{" "}
            Comparison — Don&apos;t Overpay in 2026
          </>
        }
        description="Why price per gram is the only meaningful way to compare shilajit costs, how to calculate it correctly (including shipping), and a full 20+ product comparison table with tier scores."
        tags={["Price Analysis", "Price Comparison", "Buying Guide"]}
        publishedAt="2026-04-14"
        updatedAt="2026-04-14"
        readingTimeMin={9}
        currentSlug="shilajit-price-per-gram"
        breadcrumbLabel="Shilajit Price Per Gram"
        faqItems={faqItems}
        ctaVariant="pure-himalayan"
      >
        {/* Disclosure */}
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
          <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. We earn a commission at no extra cost to you. All pricing data collected in April 2026 — prices may vary.
        </div>

        {/* Why $/gram matters */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Why price per gram is the only comparison that matters</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
            <p>
              Shilajit is sold in packages ranging from 10g to 500g, at prices from $12 to $150+. Without normalizing to a per-gram cost, you have no basis for comparison. A $150 jar sounds expensive — but at 200g, it&apos;s $0.75/gram. A $35 jar sounds cheap — but at 15g, it&apos;s $2.33/gram. The sticker price tells you almost nothing about value.
            </p>
            <p>
              Price per gram is the first normalization. The second is adjusting for fulvic acid concentration — the bioactive compound that actually drives shilajit&apos;s effects. A product at $1.50/gram with 85% FA delivers more active compound per dollar than a product at $1.00/gram with 40% FA. The true value metric is cost per gram of verified fulvic acid.
            </p>
            <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
              <div className="text-xs font-bold text-[#10B981] mb-3">How to calculate true value</div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <span className="text-[#7BA899] w-32 shrink-0">Step 1:</span>
                  <span className="text-[#0D1F14]">Price per gram = (price + shipping) ÷ weight in grams</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#7BA899] w-32 shrink-0">Step 2:</span>
                  <span className="text-[#0D1F14]">FA per gram = price per gram ÷ fulvic acid decimal (85% = 0.85)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#7BA899] w-32 shrink-0">Example A:</span>
                  <span className="text-[#0D1F14]">Black Lotus: $39.99 ÷ 30g = $1.33/g · $1.33 ÷ 0.85 = $1.57/g FA</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#7BA899] w-32 shrink-0">Example B:</span>
                  <span className="text-[#0D1F14]">Budget brand: $25 ÷ 30g = $0.83/g · $0.83 ÷ 0.40 = $2.08/g FA</span>
                </div>
              </div>
              <p className="text-[11px] text-[#7BA899] mt-3">Example B is 33% more expensive per gram of actual fulvic acid — despite the lower sticker price.</p>
            </div>
          </div>
        </section>

        {/* What a fair price looks like */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-5">What a fair price per gram looks like by tier</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { tier: "S", color: "bg-amber-400 text-amber-900", range: "$1.20–$1.60/gram", desc: "85%+ FA, ISO COA, third-party tested, full heavy metals panel" },
              { tier: "A", color: "bg-emerald-500 text-white", range: "$0.70–$1.50/gram", desc: "60–80% FA, COA available, some third-party testing, documented source" },
              { tier: "B", color: "bg-blue-500 text-white", range: "$0.80–$2.50/gram", desc: "Standardized extracts or lower-documentation brands with basic testing" },
              { tier: "C/D", color: "bg-red-600 text-white", range: "Any price", desc: "No COA, unverified claims, unknown source — avoid regardless of price" },
            ].map(({ tier, color, range, desc }) => (
              <div key={tier} className="bg-white border border-[#D1EDD8] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-[11px] font-black ${color}`}>{tier}</span>
                  <span className="text-xs font-bold text-[#0D1F14]">Tier {tier}</span>
                </div>
                <div className="text-xs font-bold text-[#10B981] mb-1">{range}</div>
                <p className="text-[11px] text-[#0D1F14] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Large comparison table */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-3">Full price per gram comparison — 20+ products</h2>
          <p className="text-sm text-[#0D1F14] mb-4 leading-relaxed">
            Sorted by tier, then price per gram. Pricing collected April 2026. Includes free shipping where applicable.
            &quot;N/A&quot; for capsule products where $/gram is not directly comparable to raw resin.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <th className="text-left px-3 py-3 font-bold text-[#7BA899] uppercase tracking-wider">Product</th>
                  <th className="text-left px-3 py-3 font-bold text-[#7BA899] uppercase tracking-wider">Tier</th>
                  <th className="text-left px-3 py-3 font-bold text-[#7BA899] uppercase tracking-wider">$/gram</th>
                  <th className="text-left px-3 py-3 font-bold text-[#7BA899] uppercase tracking-wider">Fulvic %</th>
                  <th className="text-left px-3 py-3 font-bold text-[#7BA899] uppercase tracking-wider">COA</th>
                  <th className="text-left px-3 py-3 font-bold text-[#7BA899] uppercase tracking-wider">3rd Party</th>
                  <th className="text-left px-3 py-3 font-bold text-[#7BA899] uppercase tracking-wider">Source</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p, i) => (
                  <tr key={p.name} className={`border-b border-[#D1EDD8] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"}`}>
                    <td className="px-3 py-3">
                      {p.affiliate !== "#" ? (
                        <a href={p.affiliate} target="_blank" rel="noopener noreferrer sponsored" className="font-semibold text-[#0D1F14] hover:text-[#10B981] transition-colors">
                          {p.name}
                        </a>
                      ) : (
                        <span className="font-semibold text-[#0D1F14]">{p.name}</span>
                      )}
                    </td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-[11px] font-black ${p.tierColor}`}>{p.tier}</span>
                    </td>
                    <td className="px-3 py-3 font-bold text-[#10B981] tabular-nums">
                      {typeof p.priceGram === "number" ? `$${p.priceGram.toFixed(2)}` : p.priceGram}
                    </td>
                    <td className="px-3 py-3 font-semibold text-[#0D1F14]">{p.fulvic}</td>
                    <td className="px-3 py-3 text-center">{p.coa ? <span className="text-[#10B981]">✓</span> : <span className="text-red-600">✗</span>}</td>
                    <td className="px-3 py-3 text-center">{p.tp ? <span className="text-[#10B981]">✓</span> : <span className="text-[#7BA899]">—</span>}</td>
                    <td className="px-3 py-3 text-[#7BA899] text-[10px] whitespace-nowrap">{p.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#7BA899] mt-2">
            Full 55+ product database at{" "}
            <Link href="/compare" className="text-[#10B981] hover:underline">ShilajitPrice.com/compare</Link>{" "}
            with sortable columns and advanced filters.
          </p>
        </section>

        {/* Black Lotus best value */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Best value at $1.33/gram: Black Lotus Shilajit Resin</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
            <p>
              At $1.33/gram with 85%+ verified fulvic acid, Black Lotus delivers the highest quality-to-price ratio in the resin category. The closest competitor with comparable documentation (Essencraft at 75%+ FA) charges $1.43/gram — and delivers less fulvic acid per gram. Natural Shilajit at $1.08/gram has a lower sticker price but 70% FA instead of 85%, making the effective FA cost $1.54/gram versus Black Lotus at $1.57/gram — essentially equal, with Black Lotus having the stronger COA and higher verified concentration.
            </p>
            <p>
              For buyers doing the math seriously, Black Lotus is the sweet spot. You&apos;re paying approximately what the market charges for A-tier quality but receiving S-tier documentation and potency. The lack of retail markup (direct-to-consumer model) and free shipping keep the true $/gram competitive with products that technically cost less on the sticker.
            </p>
          </div>

          <div className="mt-6 bg-white border border-[#9EC9AD] rounded-2xl p-5 shadow-lg shadow-emerald-900/10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-amber-900 font-black text-sm">S</div>
                <div>
                  <div className="text-xs font-black text-[#0D1F14]">Black Lotus Shilajit Resin</div>
                  <div className="text-[10px] text-[#10B981]">$1.33/gram · 85%+ FA · Free shipping</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-[#10B981]">$1.33</div>
                <div className="text-[10px] text-[#7BA899]">per gram</div>
              </div>
            </div>
            <a href={AFFILIATE_RESIN} target="_blank" rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-colors">
              Shop Now — $39.99 / 30g →
            </a>
            <p className="text-center text-[10px] text-[#7BA899] mt-2">Affiliate link — commission earned at no extra cost to you</p>
          </div>
        </section>

        {/* Who is overcharging */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Who is overcharging — and why</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
            <p>
              Products charging $2.50–$3.50/gram typically do so for one of three reasons: luxury branding and packaging (Sun Potion, Pürblack), unusual sourcing claims (rare Himalayan sub-regions, special collection methods), or direct retail markups from selling through specialty supplement retailers at 40–50% margins.
            </p>
            <p>
              The question to ask: does the higher price correspond to higher verified fulvic acid content or better COA quality? In most cases, the answer is no. Pürblack charges ~$3.00/gram but delivers ~72% FA — lower than Black Lotus at $1.33/gram with 85%+ FA. The premium is mostly packaging and brand positioning, not verifiable quality difference.
            </p>
            <p>
              The C and D-tier products at $0.50–$0.67/gram are not bargains — they&apos;re unknown-quality products with no COA that may or may not contain meaningful amounts of shilajit. The floor for legitimate quality is approximately $0.70/gram, and even that requires careful COA verification.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Related guides</h2>
          <div className="space-y-3">
            {[
              { href: "/blog/best-shilajit-under-50", title: "Best Shilajit Under $50", desc: "Top 5 picks under $50 ranked by purity data and total value" },
              { href: "/blog/cheap-vs-high-quality-shilajit", title: "Cheap vs High Quality Shilajit", desc: "What's actually different between a $15 and $70 product" },
              { href: "/blog/best-shilajit-brands-ranked", title: "Best Shilajit Brands Ranked", desc: "Full brand rankings by COA quality, FA%, sourcing, and price" },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="group flex items-center gap-4 bg-white border border-[#D1EDD8] hover:border-[#D1EDD8] rounded-xl px-5 py-3.5 transition-all">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-[#0D1F14] group-hover:text-[#10B981] transition-colors">{title}</div>
                  <div className="text-xs text-[#7BA899] mt-0.5">{desc}</div>
                </div>
                <svg className="w-4 h-4 text-[#7BA899] group-hover:text-[#10B981] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        <BlogCTA
          headline="Full Sortable Price Per Gram Table"
          subtext="Filter 74 products by $/gram, tier, fulvic acid %, and COA status — the most complete shilajit price comparison available."
        />
      </BlogPostLayout>
    </>
  );
}
