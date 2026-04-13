"use client";

import { useState, useMemo } from "react";
import { PRODUCTS, CATEGORIES, Category, Tier } from "./data/products";
import HeroSection from "./components/HeroSection";
import CategoryFilter from "./components/CategoryFilter";
import SidebarFilters, { FilterState } from "./components/SidebarFilters";
import DealCard from "./components/DealCard";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const ALL_TIERS: Tier[] = ["S", "A", "B", "C", "D"];

const DEFAULT_FILTERS: FilterState = {
  tiers: ALL_TIERS,
  maxPrice: 100,
  coaOnly: false,
  freeShippingOnly: false,
  labTestedOnly: false,
  sortBy: "pricePerGram",
};

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
      if (activeCategory !== "All" && p.category !== activeCategory)
        return false;
      if (!filters.tiers.includes(p.tier)) return false;
      if (p.priceUsd > filters.maxPrice) return false;
      if (filters.coaOnly && !p.coaVerified) return false;
      if (filters.freeShippingOnly && !p.freeShipping) return false;
      if (filters.labTestedOnly && !p.labTested) return false;
      return true;
    });

    const TIER_ORDER: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3, D: 4 };

    list.sort((a, b) => {
      if (filters.sortBy === "pricePerGram")
        return a.pricePerGram - b.pricePerGram;
      if (filters.sortBy === "price") return a.priceUsd - b.priceUsd;
      if (filters.sortBy === "tier")
        return TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
      return 0;
    });

    return list;
  }, [activeCategory, filters]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">
              ShilajitPrice
            </span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </a>

          <div className="hidden sm:flex items-center gap-5 text-sm">
            <a
              href="#deals"
              className="text-[#9ec9ad] hover:text-emerald-400 transition-colors"
            >
              Compare
            </a>
            <a
              href="#how-it-works"
              className="text-[#9ec9ad] hover:text-emerald-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-[#9ec9ad] hover:text-emerald-400 transition-colors"
            >
              FAQ
            </a>
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
            <div className="mb-6">
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-1">
                Shilajit Price Comparison
              </h2>
              <p className="text-sm text-[#5d8c6e]">
                Sorted by price per gram. Prices updated regularly.
              </p>
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
                        <span className="text-[#9ec9ad] font-medium">
                          {filtered.length}
                        </span>{" "}
                        products
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-[#5d8c6e]">
                          Featured = affiliate partner
                        </span>
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
