import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

// Affiliate constants
const AFFILIATE_RESIN =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_CAPS =
  "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-resin-powder-capsules-extra-strength?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_GUMMIES =
  "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-gummies?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_TINCTURE =
  "https://black-lotus-shilajit-shop.myshopify.com/products/pure-shilajit-tincture?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const PURE_HIMALAYAN_BASE = "https://www.purehimalayanshilajit.com/?ref=4792";
const BASE_URL = "https://shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/black-lotus-shilajit-review`;

export const metadata: Metadata = {
  title: "Black Lotus Shilajit Review 2026 — COA, Lab Data & Honest Verdict | ShilajitPrice.com",
  description:
    "Full Black Lotus Shilajit review: 85%+ verified fulvic acid, Altai sourcing, complete product lineup analysis, lab data breakdown, and honest verdict on who it's best for.",
  keywords:
    "black lotus shilajit review, black lotus shilajit COA, black lotus fulvic acid, black lotus shilajit resin review, black lotus vs pure himalayan shilajit",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Black Lotus Shilajit Review 2026 — COA, Lab Data & Honest Verdict",
    description:
      "Full Black Lotus Shilajit review: 85%+ verified fulvic acid, Altai sourcing, complete product lineup, lab data breakdown, and honest verdict.",
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
    name: "Is Black Lotus Shilajit legit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Black Lotus is one of the most transparent shilajit brands in the market. They publish a full-panel COA verifying 85%+ fulvic acid, a clean heavy metals panel, and microbial safety. They are GMP certified, source from Siberian Altai, and use cold-processing to preserve bioactive compounds. We rate them S-tier across their core product lineup.",
    },
  },
  {
    "@type": "Question",
    name: "What is the fulvic acid content in Black Lotus Shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Black Lotus products are tested every batch by IAS Laboratories in Phoenix, Arizona. Their Pure Altai Resin delivers 161mg of fulvic acid per serving and 22mg of humic acid (batch #93-94). Their Extra Strength Capsules deliver 445.80mg of fulvic acid and 64.44mg of humic acid per 600mg serving (batch #94). Full batch COAs are publicly available at blacklotusshilajit.com/pages/lab-analysis — customers can verify any batch by the number printed on their product label.",
    },
  },
  {
    "@type": "Question",
    name: "Where is Black Lotus Shilajit sourced?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Black Lotus sources shilajit from the Siberian Altai Mountains. The Altai range spans Russia, Kazakhstan, Mongolia, and China, with peak elevations exceeding 14,000 ft. Black Lotus specifically collects from high-altitude granite and volcanic formations associated with high mineral density and elevated fulvic acid content.",
    },
  },
  {
    "@type": "Question",
    name: "How does Black Lotus compare to Pure Himalayan Shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Black Lotus and Pure Himalayan are the two strongest verified brands in our database. Black Lotus leads on fulvic acid percentage (85%+ vs 60%) and price per gram ($1.23 vs $1.33). Pure Himalayan leads on testing standard — their ISO/IEC 17025 accreditation is the most rigorous lab certification available. Both are S-tier picks; choose Black Lotus for highest fulvic acid, Pure Himalayan for maximum ISO certification rigor.",
    },
  },
  {
    "@type": "Question",
    name: "Is the Black Lotus Starter Bundle worth it?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, if you want to try both resin and capsules. The Starter Bundle (Resin + Capsules) is priced at $64.99, saving you $15.99 compared to buying both separately. At $0.72/g effective cost and S-tier COA verification across both products, it's the best-value entry point for someone new to Black Lotus.",
    },
  },
];

const PRODUCT_TABLE = [
  {
    name: "Pure Altai Resin",
    size: "30g",
    price: "$36.99",
    perGram: "$1.23/g",
    fulvic: "85%+",
    coa: true,
    tier: "S",
    highlight: true,
    href: AFFILIATE_RESIN,
  },
  {
    name: "Extra Strength Capsules",
    size: "60ct",
    price: "$43.99",
    perGram: "$1.47/g eq.",
    fulvic: "85%+",
    coa: true,
    tier: "S",
    highlight: true,
    href: AFFILIATE_CAPS,
  },
  {
    name: "Shilajit Gummies",
    size: "30ct",
    price: "$43.99",
    perGram: "$0.98/g eq.",
    fulvic: "70%",
    coa: true,
    tier: "A",
    highlight: false,
    href: AFFILIATE_GUMMIES,
  },
  {
    name: "Pure Shilajit Tincture",
    size: "2 oz",
    price: "$36.99",
    perGram: "$0.62/g eq.",
    fulvic: "80%+",
    coa: true,
    tier: "A",
    highlight: false,
    href: AFFILIATE_TINCTURE,
  },
  {
    name: "Shilajit Honey Blend",
    size: "200g",
    price: "$43.99",
    perGram: "$0.22/g eq.",
    fulvic: "Verified",
    coa: true,
    tier: "A",
    highlight: false,
    href: AFFILIATE_BASE,
  },
  {
    name: "Starter Bundle (Resin + Caps)",
    size: "30g + 60ct",
    price: "$64.99",
    perGram: "$0.72/g eq.",
    fulvic: "85%+",
    coa: true,
    tier: "S",
    highlight: true,
    href: AFFILIATE_BASE,
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-[#10B981] mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function BlackLotusShilajitReview() {
  return (

      <BlogPostLayout
        heading={
          <>
            Black Lotus Shilajit Review 2026 —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              COA, Lab Data & Honest Verdict
            </span>
          </>
        }
        description="Black Lotus is the highest-ranked brand in our database. This review covers their full product lineup, COA data, Altai sourcing, and who this brand is — and isn't — the right fit for."
        tags={["Brand Reviews", "COA Verified", "S-Tier"]}
        publishedAt="2026-04-15"
        updatedAt="2026-04-15"
        readingTimeMin={9}
        currentSlug="black-lotus-shilajit-review"
        quizCta="card"
        breadcrumbLabel="Black Lotus Review"
        faqItems={faqItems}
      >
        {/* FTC Disclosure */}
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
          <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. This does not affect our rankings — see our{" "}
          <Link href="/disclaimer" className="text-[#10B981] hover:underline">full disclosure policy</Link>.
        </div>

        {/* Quick verdict callout */}
        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center text-amber-900 font-black text-xl shrink-0">S</div>
            <div>
              <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Overall Rating — 9.5 / 10</div>
              <h3 className="text-base font-black text-[#0D1F14]">Black Lotus Shilajit</h3>
              <p className="text-xs text-[#7BA899]">Highest verified fulvic acid in our database · Full COA · Altai sourced · GMP certified</p>
            </div>
          </div>
          <a
            href={AFFILIATE_RESIN}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors shadow-md shadow-emerald-900/30"
          >
            View Black Lotus Resin →
          </a>
        </div>

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Why Black Lotus ranks #1 in our database
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Black Lotus holds S-tier status across four products in our database — the only brand to do so. That distinction isn&apos;t based on marketing claims or brand recognition. It&apos;s based on three criteria we apply to every product we evaluate: COA completeness, verified fulvic acid percentage, and price-per-gram relative to quality tier.
            </p>
            <p>
              On every one of those metrics, Black Lotus either leads the field or ties for the top position. Their 85%+ fulvic acid is the highest verified figure in our database. Their COA covers the full panel — heavy metals with specific values (not just &quot;pass/fail&quot;), microbial testing, moisture, and fulvic acid quantification by IAS Laboratories, Phoenix, Arizona, every single batch. And at $1.23/gram for the core resin, they undercut most competitors offering a fraction of the verification.
            </p>
            <p>
              This review covers every product in their lineup, the lab data in detail, who this brand is the right fit for, and where you might look elsewhere.
            </p>
          </div>
        </section>

        {/* Brand overview */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Brand overview
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Black Lotus operates as a direct-to-consumer brand — no Amazon listings, no third-party retail. Their focus is sourcing and verification: Siberian Altai origin, cold-process purification, GMP-certified manufacturing, and third-party lab testing for every batch.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Source region", value: "Siberian Altai Mountains (Russia)" },
                { label: "Altitude", value: "8,000–14,000 ft elevation" },
                { label: "Processing", value: "Cold-processed (low-temp water filtration)" },
                { label: "Manufacturing", value: "GMP certified facility" },
                { label: "Distribution", value: "Direct-to-consumer (own website)" },
                { label: "Testing", value: "Full-panel third-party COA, every batch" },
                { label: "Shipping", value: "US warehouse · free shipping" },
                { label: "Return policy", value: "30-day money-back guarantee" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#D1EDD8] rounded-xl p-3 flex justify-between items-start gap-2">
                  <span className="text-xs text-[#7BA899] shrink-0">{item.label}</span>
                  <span className="text-xs font-semibold text-[#0D1F14] text-right">{item.value}</span>
                </div>
              ))}
            </div>

            <p>
              The direct-to-consumer model is worth noting: it means no middleman markup, but also means you need to find them intentionally rather than stumbling on their products in an Amazon search. This is consistent with a brand whose customer acquisition is built on word-of-mouth and verification transparency rather than marketplace visibility.
            </p>
          </div>
        </section>

        {/* Lab data and COA */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Lab data and COA analysis — the most important section
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              The single most important differentiator between Black Lotus and the majority of brands in this category is COA quality. Most brands in the shilajit market either skip the COA entirely, publish an incomplete panel (heavy metals listed as &quot;pass&quot; without values), or use in-house testing rather than an independent accredited lab.
            </p>

            <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#10B981] mb-3">What Black Lotus COA covers</h3>
              <div className="space-y-2">
                {[
                  { item: "Fulvic acid quantification", detail: "85%+ verified — not estimated, not approximated" },
                  { item: "Heavy metals — specific values", detail: "Lead, arsenic, mercury, cadmium — individual ppb numbers, all within FDA limits" },
                  { item: "Microbial panel", detail: "Total plate count, yeast, mold, E. coli, Salmonella" },
                  { item: "Third-party lab", detail: "IAS Laboratories, Phoenix, Arizona — verifiable externally" },
                  { item: "Batch-specific documentation", detail: "Full COA per batch — verify any batch by the number on your label at blacklotusshilajit.com/pages/lab-analysis" },
                ].map((row) => (
                  <div key={row.item} className="flex items-start gap-3 text-xs border-b border-[#D1EDD8] pb-2 last:border-0 last:pb-0">
                    <Check />
                    <div>
                      <div className="font-semibold text-[#0D1F14]">{row.item}</div>
                      <div className="text-[#7BA899] mt-0.5">{row.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              For context: the COA standard matters because shilajit is a raw biomaterial collected from mountain rock formations. Without verified testing, there is no way to confirm the product doesn&apos;t contain dangerous heavy metal concentrations, which is a genuine risk in poorly purified raw shilajit. Black Lotus&apos;s full-panel approach makes their products among the safest in the category, not just the most potent.
            </p>
            <p>
              Read our <Link href="/blog/how-to-spot-fake-shilajit" className="text-[#10B981] hover:underline">guide to spotting fake shilajit</Link> for a detailed breakdown of how to read a COA and what red flags to watch for.
            </p>
          </div>
        </section>

        {/* Product lineup table */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-5">
            Full product lineup breakdown
          </h2>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {PRODUCT_TABLE.map((p) => (
              <div
                key={p.name}
                className={`rounded-xl border p-4 ${p.highlight ? "border-[#9EC9AD] bg-emerald-50" : "border-[#D1EDD8] bg-white"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-6 h-6 rounded text-[10px] font-black flex items-center justify-center ${p.tier === "S" ? "bg-amber-400 text-amber-900" : "bg-emerald-500 text-white"}`}>
                    {p.tier}
                  </span>
                  <span className="text-sm font-bold text-[#0D1F14]">{p.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                  <div><div className="text-[#7BA899] mb-0.5">Size</div><div className="font-semibold text-[#0D1F14]">{p.size}</div></div>
                  <div><div className="text-[#7BA899] mb-0.5">Price</div><div className="font-semibold text-[#0D1F14]">{p.price}</div></div>
                  <div><div className="text-[#7BA899] mb-0.5">$/gram</div><div className="font-semibold text-[#10B981]">{p.perGram}</div></div>
                </div>
                <div className="flex gap-2 mb-3 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-[#D1EDD8] text-[#10B981]">Fulvic: {p.fulvic}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-[#D1EDD8] text-[#10B981]">✓ COA</span>
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block text-center py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
                >
                  View Product →
                </a>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto rounded-xl border border-[#D1EDD8]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  {["Product", "Size", "Price", "$/gram", "Fulvic %", "COA", "Tier", ""].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-[11px] font-bold text-[#7BA899] uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRODUCT_TABLE.map((p, i) => (
                  <tr
                    key={p.name}
                    className={`border-b border-[#D1EDD8] last:border-0 ${p.highlight ? "bg-emerald-50" : i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"}`}
                  >
                    <td className="px-4 py-3.5 text-xs font-semibold text-[#0D1F14]">{p.name}</td>
                    <td className="px-4 py-3.5 text-xs text-[#7BA899]">{p.size}</td>
                    <td className="px-4 py-3.5 text-xs font-semibold text-[#0D1F14]">{p.price}</td>
                    <td className="px-4 py-3.5 text-xs font-bold text-[#10B981]">{p.perGram}</td>
                    <td className="px-4 py-3.5 text-xs text-[#0D1F14]">{p.fulvic}</td>
                    <td className="px-4 py-3.5 text-center"><Check /></td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-black ${p.tier === "S" ? "bg-amber-400 text-amber-900" : "bg-emerald-500 text-white"}`}>
                        {p.tier}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-[11px] font-semibold transition-colors whitespace-nowrap"
                      >
                        View →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#7BA899] mt-2 text-right">Prices as of April 2026.</p>
        </section>

        {/* Who it's best for */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Who Black Lotus is best for
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Purity-first buyers",
                  body: "If verified safety data is your top criterion, no brand in our database publishes a more complete COA. Heavy metal values, microbial panel, fulvic quantification — all present with specific numbers.",
                },
                {
                  title: "Maximum potency seekers",
                  body: "At 85%+ fulvic acid, Black Lotus Resin and Capsules deliver the highest verified bioactive concentration in our database. For anyone prioritizing maximum fulvic acid delivery per dose, this is the answer.",
                },
                {
                  title: "Form variety users",
                  body: "Black Lotus is one of the few brands offering four distinct, COA-verified shilajit formats — resin, capsules, tincture, and gummies — making it easy to match the product to lifestyle without sacrificing quality.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-[#10B981] mb-2">{card.title}</h3>
                  <p className="text-xs text-[#0D1F14] leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who might look elsewhere */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Who might look elsewhere
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              <strong className="text-[#0D1F14]">Budget-constrained buyers.</strong> Black Lotus is not the cheapest verified option. If cost is the primary driver, Sayan Altai Resin at $1.00/g (30g) or $0.70/g (100g bulk) offers solid COA-backed Altai shilajit at a lower price point. The fulvic acid verification is less specific than Black Lotus, but it clears the basic verification bar.
            </p>
            <p>
              <strong className="text-[#0D1F14]">ISO/IEC 17025 testing preference.</strong> Pure Himalayan Shilajit holds the most rigorous lab accreditation in our database — ISO/IEC 17025. If that specific certification standard matters to you (it&apos;s the gold standard for laboratory testing), Pure Himalayan is the Himalayan pick. Black Lotus is third-party tested, but doesn&apos;t explicitly market ISO/IEC 17025 accreditation.
            </p>
            <p>
              <strong className="text-[#0D1F14]">Himalayan origin preference.</strong> Black Lotus is Altai-sourced. If you have a specific reason to prefer Himalayan or Ladakh origin — whether Ayurvedic tradition, mineral profile preference, or other factors — read our{" "}
              <Link href="/blog/altai-vs-himalayan-shilajit" className="text-[#10B981] hover:underline">Altai vs Himalayan shilajit comparison</Link> and consider Pure Himalayan Shilajit as the alternative.
            </p>
          </div>
        </section>

        {/* Price vs value analysis */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Price vs. value analysis
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              At $1.23/g, Black Lotus Resin is not the cheapest option in our database — but that framing misses the point. The relevant question is not &quot;what is the cheapest shilajit?&quot; but &quot;what is the best verified value per dollar?&quot;
            </p>
            <p>
              Consider the comparison: Essencraft sells a Himalayan resin at approximately $1.45/g with no COA. You pay more per gram for zero verification. A completely unverified budget product at $0.50/g might contain 20% fulvic acid, or it might contain adulterants — you have no way to know. In that context, Black Lotus at $1.23/g for 85%+ verified fulvic acid is not expensive; it is the most cost-efficient path to confirmed potency in the category.
            </p>
            <p>
              The Starter Bundle at $64.99 (Resin + Capsules) is the best entry point for new Black Lotus customers. At $0.72/g effective cost across both products, it drops the per-gram price meaningfully while maintaining S-tier quality across both formats.
            </p>
            <p>
              For a broader market comparison, see our <Link href="/blog/best-shilajit-resin-2026" className="text-[#10B981] hover:underline">best shilajit resin 2026 guide</Link> and the <Link href="/compare" className="text-[#10B981] hover:underline">full comparison table</Link>.
            </p>
          </div>
        </section>

        {/* Verdict */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
            Our verdict — 9.5 / 10
          </h2>
          <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
            <p>
              Black Lotus earns a 9.5/10 from our team. The verification bar is unmatched in this category. Every product we tested from their lineup met or exceeded our criteria for COA completeness, fulvic acid content, and clean heavy metals — which, in a market where most brands fail at least one of those benchmarks, is a significant achievement.
            </p>
            <p>
              The 0.5 deduction reflects two things: the absence of explicit ISO/IEC 17025 lab accreditation (which Pure Himalayan holds), and the direct-to-consumer-only distribution model, which creates a minor friction for buyers accustomed to Amazon or retail channels.
            </p>
            <p>
              If you are buying shilajit for the first time and want the highest-confidence entry point, Black Lotus Pure Altai Resin is our recommendation. If you have been burned by low-quality products and want maximum verification rigor going forward, same answer. The Starter Bundle is the best way to try both their flagship formats at a meaningful discount.
            </p>
          </div>
        </section>

        {/* CTA block */}
        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
          <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">S-Tier — Highest Verified Fulvic Acid</div>
          <h3 className="text-base font-black text-[#0D1F14] mb-1">Black Lotus Shilajit — Shop the Full Lineup</h3>
          <p className="text-xs text-[#7BA899] mb-4">
            Free shipping · 30-day money-back guarantee · Full-panel COA on every product
          </p>

          <div className="grid gap-3 sm:grid-cols-3 mb-4">
            <a
              href={AFFILIATE_RESIN}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex flex-col items-center gap-1 border border-[#D1EDD8] rounded-xl p-4 hover:border-[#9EC9AD] transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-amber-900 flex items-center justify-center font-black text-sm">S</span>
              <span className="text-xs font-bold text-[#0D1F14] text-center">Pure Altai Resin</span>
              <span className="text-[10px] text-[#7BA899]">$36.99 · $1.23/g</span>
              <span className="mt-1 text-[11px] text-[#10B981] font-semibold">View →</span>
            </a>
            <a
              href={AFFILIATE_CAPS}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex flex-col items-center gap-1 border border-[#D1EDD8] rounded-xl p-4 hover:border-[#9EC9AD] transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-amber-900 flex items-center justify-center font-black text-sm">S</span>
              <span className="text-xs font-bold text-[#0D1F14] text-center">Extra Strength Capsules</span>
              <span className="text-[10px] text-[#7BA899]">$43.99 · 60ct</span>
              <span className="mt-1 text-[11px] text-[#10B981] font-semibold">View →</span>
            </a>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex flex-col items-center gap-1 border border-[#D1EDD8] rounded-xl p-4 hover:border-[#9EC9AD] transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-amber-900 flex items-center justify-center font-black text-sm">S</span>
              <span className="text-xs font-bold text-[#0D1F14] text-center">Starter Bundle</span>
              <span className="text-[10px] text-[#7BA899]">$64.99 · Save $15.99</span>
              <span className="mt-1 text-[11px] text-[#10B981] font-semibold">View →</span>
            </a>
          </div>

          <p className="text-xs text-[#7BA899] mb-3">
            Want to see how Black Lotus compares to Pure Himalayan, Natural Shilajit, and other top brands? See our{" "}
            <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline font-semibold">full brand rankings by lab data and purity</Link>.
          </p>
          <a
            href={AFFILIATE_BASE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
          >
            See all Black Lotus products →
          </a>
        </div>
      </BlogPostLayout>
  );
}
