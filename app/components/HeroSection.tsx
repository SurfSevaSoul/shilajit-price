export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d1f14]">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #22c55e15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #10b98110 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, #14532d10 0%, transparent 40%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #22c55e 0px,
            #22c55e 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-400 text-xs font-semibold mb-6 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Updated April 2026 — 55+ Products, 20+ Brands
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#e8f4ec] leading-tight tracking-tight mb-5 max-w-4xl mx-auto">
          The Most Complete{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Shilajit Database
          </span>{" "}
          — Compare Prices, Purity &amp; Lab Data
        </h1>

        <p className="text-lg text-[#9ec9ad] leading-relaxed mb-10 max-w-2xl mx-auto">
          We track prices, purity scores, fulvic acid content, COA availability, and sourcing
          data across 55+ shilajit products from 20+ brands — so you never overpay or buy
          fake shilajit again.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#deals"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-emerald-900/40 text-sm"
          >
            Compare All Prices
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#top-picks"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#182b1f] hover:bg-[#1e3527] text-emerald-300 font-semibold border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-200 text-sm"
          >
            View Editor&apos;s Picks ↓
          </a>
        </div>
      </div>
    </section>
  );
}
