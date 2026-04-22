import Image from "next/image";
import { PRODUCTS } from "../data/products";

export default function HeroSection() {
  const productCount = PRODUCTS.length;
  const brandCount = new Set(PRODUCTS.map((p) => p.vendor)).size;
  return (
    <section className="relative overflow-hidden bg-[#1a2e1f]">
      {/* Mountain background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mountain.jpg"
          alt="Himalayan and Altai mountain range — source of premium shilajit resin"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Subtle decorative blobs (preserved as fallback layer) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 30%, rgba(16,185,129,0.06) 0%, transparent 55%),
            radial-gradient(circle at 10% 80%, rgba(158,201,173,0.08) 0%, transparent 45%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 lg:py-12">
        {/* Two-column grid: stacked on mobile, side-by-side on lg+ */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

          {/* ── LEFT COLUMN: heading content (~55%) ─────────────────────────── */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#9EC9AD] text-[#4A6358] text-xs font-semibold mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Updated April 2026 — {productCount} Products, {brandCount} Brands
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The Most Complete{" "}
              <span className="text-[#10B981]">Shilajit</span>{" "}
              Database
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Compare prices, purity scores, fulvic acid content, and COA
              availability across {productCount} products — so you never overpay or buy
              fake shilajit again.
            </p>

            {/* Secondary navigation links */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#deals"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                Compare all prices
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <span className="text-white/30 self-center">·</span>
              <a
                href="#top-picks"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                Editor&apos;s Picks ↓
              </a>
            </div>

          </div>

          {/* ── RIGHT COLUMN: quiz card (~45%) ──────────────────────────────── */}
          <div className="w-full lg:w-[45%]">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/25 border border-[#10B981]/50 text-[#10B981] text-xs font-semibold mb-4">
                <span className="text-base">🎯</span> Free · 60 seconds
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Not sure which shilajit is right for you?
              </h2>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                Answer 7 quick questions and we&apos;ll match you to the best brand
                based on your goals, budget, and purity requirements.
              </p>
              <a
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#10B981] hover:bg-white hover:text-[#182B1F] text-white font-bold text-sm transition-all duration-200 shadow-md"
              >
                Take the Free Quiz →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
