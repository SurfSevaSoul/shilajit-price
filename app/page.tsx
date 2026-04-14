"use client";

import { useState, useMemo, useEffect } from "react";
import { PRODUCTS, CATEGORIES, Category, Tier, TIER_COLORS, AFFILIATE_LINKS } from "./data/products";
import HeroSection from "./components/HeroSection";
import CategoryFilter from "./components/CategoryFilter";
import SidebarFilters, { FilterState, DEFAULT_FILTERS } from "./components/SidebarFilters";
import DealCard from "./components/DealCard";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const BASE_URL = "https://shilajitprice.com";
const PAGE_SIZE = 12;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ShilajitPrice",
  alternateName: "ShilajitPrice.com",
  url: BASE_URL,
  description:
    "Independent shilajit price comparison site. Compare lab-tested shilajit resin, capsules, gummies, tinctures, and honey from top vendors.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Shilajit Products — Price Comparison",
  description: "Ranked list of top shilajit supplements compared by price per gram, fulvic acid content, and COA transparency.",
  url: BASE_URL,
  numberOfItems: PRODUCTS.length,
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.vendor} — ${p.productName}`,
    url: p.affiliateUrl !== "#" ? p.affiliateUrl : BASE_URL,
    item: {
      "@type": "Product",
      name: `${p.vendor} ${p.productName}`,
      description: p.description ?? `${p.category} shilajit supplement`,
      offers: {
        "@type": "Offer",
        price: p.priceUsd.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: p.affiliateUrl !== "#" ? p.affiliateUrl : BASE_URL,
      },
    },
  })),
};

const TIER_ORDER: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3, D: 4 };

function bestValueScore(p: (typeof PRODUCTS)[0]) {
  const tierScore = (4 - TIER_ORDER[p.tier]) * 10;
  const ppgScore = Math.max(0, 10 - p.pricePerGram * 3);
  return tierScore * 0.4 + p.purityScore * 3 * 0.3 + ppgScore * 0.3;
}

// ── Top Picks card (horizontal, featured section) ───────────────────────────
function TopPickCard({
  product,
  label,
}: {
  product: (typeof PRODUCTS)[0];
  label: string;
}) {
  const isAffiliate = product.affiliateUrl !== "#";
  return (
    <div className="flex items-center gap-3 bg-[#182b1f] border border-emerald-600/30 hover:border-emerald-500/50 rounded-xl p-3.5 transition-all duration-200 group">
      {/* Tier */}
      <div
        className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black ${TIER_COLORS[product.tier]} shadow-sm`}
      >
        {product.tier}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest truncate mb-0.5">
          {label}
        </div>
        <div className="text-[10px] font-bold text-[#5d8c6e] uppercase truncate leading-none">
          {product.vendor}
        </div>
        <div className="text-xs font-semibold text-[#e8f4ec] truncate leading-snug">
          {product.productName}
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs font-black text-[#e8f4ec] tabular-nums">
            ${product.priceUsd.toFixed(2)}
          </span>
          <span className="text-[10px] text-emerald-400 font-semibold tabular-nums">
            ${product.pricePerGram.toFixed(2)}/g
          </span>
          {product.fulvicAcidPct && (
            <span className="text-[9px] text-[#5d8c6e]">⚗️ {product.fulvicAcidPct}% FA</span>
          )}
        </div>
      </div>

      {/* CTA */}
      {isAffiliate && (
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors whitespace-nowrap
            ${product.featured
              ? "bg-emerald-500 hover:bg-emerald-400 text-white"
              : "bg-emerald-700/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-700/50"
            }`}
        >
          {product.featured ? "View Deal →" : "Check Price →"}
        </a>
      )}
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset pagination when filters/category change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, filters]);

  const categoryCounts = useMemo(() => {
    const counts = {} as Record<Category, number>;
    CATEGORIES.forEach((cat) => {
      counts[cat] =
        cat === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

  // Top Picks: Black Lotus #1 + Pure Himalayan #2 + best Amazon value
  const topPicks = useMemo(() => {
    const blPick = PRODUCTS.find((p) => p.id === "bl-resin");
    const phPick = PRODUCTS.find((p) => p.id === "ph-resin-30g");

    const bestAmazon = [...PRODUCTS]
      .filter((p) => !p.featured && p.affiliateUrl.includes("amazon.com"))
      .sort((a, b) => bestValueScore(b) - bestValueScore(a))[0];

    return [blPick, phPick, bestAmazon].filter(Boolean) as (typeof PRODUCTS)[0][];
  }, []);

  const topPickLabels = ["#1 Overall Pick", "#2 Pick — ISO Verified", "Best Amazon Value"];

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (!filters.tiers.includes(p.tier)) return false;
      if (p.priceUsd > filters.maxPrice) return false;
      if (filters.coaOnly && !p.coaVerified) return false;
      if (filters.freeShippingOnly && !p.freeShipping) return false;
      if (filters.thirdPartyOnly && !p.thirdPartyTested) return false;
      if (filters.heavyMetalsOnly && !p.heavyMetalsTested) return false;
      if (filters.knownSourceOnly && !p.sourceLocation) return false;
      if (filters.gmpOnly && !p.gmpCertified) return false;
      if (filters.minRating > 0 && (p.amazonRating ?? 0) < filters.minRating) return false;
      if (filters.minReviews > 0 && (p.amazonReviewCount ?? 0) < filters.minReviews) return false;
      return true;
    });

    list.sort((a, b) => {
      switch (filters.sortBy) {
        case "pricePerGram": return a.pricePerGram - b.pricePerGram;
        case "price": return a.priceUsd - b.priceUsd;
        case "tier": return TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
        case "purityScore": return b.purityScore - a.purityScore;
        case "mostReviews": return (b.amazonReviewCount ?? 0) - (a.amazonReviewCount ?? 0);
        case "highestRated": return (b.amazonRating ?? 0) - (a.amazonRating ?? 0);
        case "costPerServing": return a.costPerServing - b.costPerServing;
        case "bestValue": return bestValueScore(b) - bestValueScore(a);
        default: return 0;
      }
    });

    return list;
  }, [activeCategory, filters]);

  // Quick stats
  const quickStats = useMemo(() => {
    if (filtered.length === 0) return null;
    const avgPrice = filtered.reduce((s, p) => s + p.priceUsd, 0) / filtered.length;
    const bestPpg = Math.min(...filtered.map((p) => p.pricePerGram));
    return { avgPrice, bestPpg };
  }, [filtered]);

  const displayedProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </a>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <a href="#deals" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Compare</a>
            <a href="/compare" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Full Table</a>
            <a href="#how-it-works" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">How It Works</a>
            <a href="#faq" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">FAQ</a>
            <a href="/blog" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Blog</a>
          </div>
          <a
            href={AFFILIATE_LINKS.base}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors duration-200"
          >
            🏆 Our #1 Pick
          </a>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* Deals section */}
        <section id="deals" className="py-10 bg-[#0d1f14]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Section heading */}
            <div className="mb-5 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-2xl font-black text-[#e8f4ec] mb-1">Shilajit Price Comparison</h2>
                <p className="text-sm text-[#5d8c6e]">
                  {PRODUCTS.length}+ products ranked by tier, purity &amp; value. Updated weekly.
                </p>
              </div>
              <a
                href="/compare"
                className="text-xs text-emerald-400 hover:text-emerald-300 border border-emerald-700/50 hover:border-emerald-500/60 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
              >
                View Full Table →
              </a>
            </div>

            {/* ── TOP PICKS ─────────────────────────────────────────────────────── */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">⭐ Top Picks</span>
                <div className="flex-1 h-px bg-[#1e3527]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {topPicks.map((p, i) => (
                  <TopPickCard key={p.id} product={p} label={topPickLabels[i] ?? "Top Pick"} />
                ))}
              </div>
            </div>

            {/* ── DIVIDER ──────────────────────────────────────────────────────── */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">All Products</span>
              <div className="flex-1 h-px bg-[#1e3527]" />
            </div>

            {/* Category filter */}
            <div className="mb-3">
              <CategoryFilter active={activeCategory} onChange={setActiveCategory} counts={categoryCounts} />
            </div>

            {/* Quick stats bar */}
            {quickStats && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-xs text-[#5d8c6e]">
                <span>
                  Showing{" "}
                  <strong className="text-[#9ec9ad]">{filtered.length}</strong> products
                </span>
                <span className="text-[#2a4535]">·</span>
                <span>
                  Avg price{" "}
                  <strong className="text-[#9ec9ad]">${quickStats.avgPrice.toFixed(2)}</strong>
                </span>
                <span className="text-[#2a4535]">·</span>
                <span>
                  Best value{" "}
                  <strong className="text-emerald-400">${quickStats.bestPpg.toFixed(2)}/gram</strong>
                </span>
              </div>
            )}

            {/* Main content: sidebar + grid */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Sidebar */}
              <SidebarFilters filters={filters} onChange={setFilters} totalResults={filtered.length} />

              {/* Product grid */}
              <div className="flex-1 min-w-0">
                {filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="text-4xl mb-3">🔍</div>
                    <h3 className="text-base font-semibold text-[#e8f4ec] mb-1">
                      No products match your filters
                    </h3>
                    <p className="text-sm text-[#5d8c6e] mb-4">
                      Try adjusting your tier selection or price range.
                    </p>
                    <button
                      onClick={() => { setFilters(DEFAULT_FILTERS); setActiveCategory("All"); }}
                      className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Results count */}
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs text-[#5d8c6e]">
                        Showing{" "}
                        <span className="text-[#9ec9ad] font-medium">{displayedProducts.length}</span>
                        {" "}of{" "}
                        <span className="text-[#9ec9ad] font-medium">{filtered.length}</span>{" "}products
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-[#5d8c6e]">Featured = affiliate partner</span>
                      </div>
                    </div>

                    {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {displayedProducts.map((product) => (
                        <DealCard key={product.id} product={product} />
                      ))}
                    </div>

                    {/* Load More */}
                    {hasMore && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#182b1f] hover:bg-[#1e3527] text-emerald-400 hover:text-emerald-300 font-semibold text-sm border border-[#2a4535] hover:border-emerald-700/50 transition-all duration-200"
                        >
                          Load More
                          <span className="text-[#5d8c6e] text-xs font-normal">
                            ({filtered.length - visibleCount} remaining)
                          </span>
                        </button>
                      </div>
                    )}

                    {/* All loaded indicator */}
                    {!hasMore && filtered.length > PAGE_SIZE && (
                      <div className="mt-6 text-center">
                        <p className="text-xs text-[#5d8c6e]">
                          All {filtered.length} products shown ·{" "}
                          <a href="/compare" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                            View full comparison table →
                          </a>
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* FAQ */}
        <FAQ />

        {/* Bottom CTA */}
        <section className="py-14 bg-[#0d1f14] border-t border-[#1e3527]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#e8f4ec] mb-3">
              Ready to Buy the Best Shilajit?
            </h2>
            <p className="text-[#9ec9ad] text-sm mb-7 leading-relaxed">
              Black Lotus Shilajit is our top-rated S-tier pick — full COA,
              85%+ fulvic acid, free shipping. No other brand at this price
              point offers the same transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={AFFILIATE_LINKS.resin}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-900/40"
              >
                Shop Resin — $39.99 →
              </a>
              <a
                href={AFFILIATE_LINKS.capsules}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#182b1f] hover:bg-[#1e3527] text-emerald-300 font-semibold border border-emerald-700/50 hover:border-emerald-500/70 text-sm transition-all duration-200"
              >
                Shop Capsules — $34.99
              </a>
            </div>
            <p className="text-[10px] text-[#5d8c6e] mt-4">
              Affiliate links — we earn a commission at no extra cost to you
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
