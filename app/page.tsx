"use client";

import { useState, useMemo } from "react";
import { PRODUCTS, CATEGORIES, Category, Tier } from "./data/products";
import HeroSection from "./components/HeroSection";
import CategoryFilter from "./components/CategoryFilter";
import SidebarFilters, { FilterState, DEFAULT_FILTERS } from "./components/SidebarFilters";
import DealCard from "./components/DealCard";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const BASE_URL = "https://shilajitprice.com";

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
        shippingDetails: p.freeShipping
          ? { "@type": "OfferShippingDetails", shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" } }
          : undefined,
      },
    },
  })),
};

const TIER_ORDER: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3, D: 4 };

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const categoryCounts = useMemo(() => {
    const counts = {} as Record<Category, number>;
    CATEGORIES.forEach((cat) => {
      counts[cat] =
        cat === "All"
          ? PRODUCTS.length
          : PRODUCTS.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

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
      if (filters.minRating > 0) {
        const rating = p.amazonRating ?? 0;
        if (rating < filters.minRating) return false;
      }
      if (filters.minReviews > 0) {
        const reviews = p.amazonReviewCount ?? 0;
        if (reviews < filters.minReviews) return false;
      }
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
        case "bestValue": {
          // Score = tier weight (40%) + purity score (30%) + inverted $/g (30%)
          const tierScore = (a: typeof PRODUCTS[0]) => (4 - TIER_ORDER[a.tier]) * 10;
          const ppgScore = (a: typeof PRODUCTS[0]) => Math.max(0, 10 - a.pricePerGram * 3);
          const scoreA = tierScore(a) * 0.4 + a.purityScore * 3 * 0.3 + ppgScore(a) * 0.3;
          const scoreB = tierScore(b) * 0.4 + b.purityScore * 3 * 0.3 + ppgScore(b) * 0.3;
          return scoreB - scoreA;
        }
        default: return 0;
      }
    });

    return list;
  }, [activeCategory, filters]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

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
            href="https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE"
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
            <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-2xl font-black text-[#e8f4ec] mb-1">
                  Shilajit Price Comparison
                </h2>
                <p className="text-sm text-[#5d8c6e]">
                  {PRODUCTS.length}+ products ranked by tier, purity, and value. Prices updated regularly.
                </p>
              </div>
              <a
                href="/compare"
                className="text-xs text-emerald-400 hover:text-emerald-300 border border-emerald-700/50 hover:border-emerald-500/60 px-3 py-1.5 rounded-lg transition-colors"
              >
                View Full Comparison Table →
              </a>
            </div>

            {/* Category filter */}
            <div className="mb-6">
              <CategoryFilter
                active={activeCategory}
                onChange={setActiveCategory}
                counts={categoryCounts}
              />
            </div>

            {/* Main content: sidebar + grid */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Sidebar */}
              <SidebarFilters
                filters={filters}
                onChange={setFilters}
                totalResults={filtered.length}
              />

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
                      onClick={() => {
                        setFilters(DEFAULT_FILTERS);
                        setActiveCategory("All");
                      }}
                      className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Results info */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs text-[#5d8c6e]">
                        Showing{" "}
                        <span className="text-[#9ec9ad] font-medium">{filtered.length}</span>{" "}
                        of {PRODUCTS.length} products
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-[#5d8c6e]">Featured = affiliate partner</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {filtered.map((product) => (
                        <DealCard key={product.id} product={product} />
                      ))}
                    </div>
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
                href="https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-900/40"
              >
                Shop Resin — $39.99 →
              </a>
              <a
                href="https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-resin-powder-capsules-extra-strength?sca_ref=5188496.BbHTin3axE"
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
