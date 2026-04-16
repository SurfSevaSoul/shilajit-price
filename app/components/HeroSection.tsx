import Image from "next/image";

export default function HeroSection() {
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="max-w-3xl mx-auto text-center">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#9EC9AD] text-[#4A6358] text-xs font-semibold mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Updated April 2026 — 71 Products, 46 Brands
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            The Most Complete{" "}
            <span className="text-[#10B981]">Shilajit</span>{" "}
            Database
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto">
            Compare prices, purity scores, fulvic acid content, and COA
            availability across 74 products — so you never overpay or buy
            fake shilajit again.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#deals"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-semibold transition-all duration-200 shadow-md text-sm"
            >
              Compare All Prices
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#top-picks"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#182B1F] font-semibold transition-all duration-200 text-sm"
            >
              View Editor&apos;s Picks ↓
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
