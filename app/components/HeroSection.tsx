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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT: Headline + CTAs ─────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#9EC9AD] text-[#4A6358] text-xs font-semibold mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Updated April 2026 — 55+ Products, 20+ Brands
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The Most Complete{" "}
              <span className="text-[#10B981]">Shilajit</span>{" "}
              Database
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Compare prices, purity scores, fulvic acid content, and COA
              availability across 55+ products — so you never overpay or buy
              fake shilajit again.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
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

          {/* ── RIGHT: Visual panel with floating stat cards ─── */}
          <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-[380px]">
            {/* Main product card */}
            <div className="bg-white rounded-3xl shadow-xl border border-[#D1EDD8] p-6 relative z-10">
              {/* S-tier badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold ring-1 ring-amber-200">
                  S&nbsp;Tier
                </span>
                <span className="text-[11px] text-[#7BA899] font-medium">Editor&apos;s #1 Pick</span>
              </div>

              <div className="mb-4">
                <p className="text-[11px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Black Lotus</p>
                <h3 className="text-base font-bold text-[#0D1F14]">Pure Altai Shilajit Resin</h3>
              </div>

              {/* Two-column data */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Price / gram", value: "$1.23/g" },
                  { label: "Fulvic Acid", value: "85%+" },
                  { label: "COA Status", value: "✓ Verified" },
                  { label: "Purity Score", value: "9.5 / 10" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#F0FAF4] rounded-xl p-3">
                    <p className="text-[10px] text-[#7BA899] font-medium mb-0.5">{label}</p>
                    <p className="text-sm font-bold text-[#0D1F14]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="h-px bg-[#D1EDD8] mb-4" />

              <p className="text-[11px] text-[#7BA899] text-center">
                Price verified April 2026 · Confirm at checkout
              </p>
            </div>

            {/* Floating stat — top right */}
            <div className="absolute -top-4 -right-4 bg-[#0D1F14] text-white rounded-2xl px-4 py-3 shadow-lg z-20">
              <p className="text-[10px] text-[#9EC9AD] font-semibold mb-0.5">Fulvic Acid</p>
              <p className="text-2xl font-extrabold text-white leading-none">85%<span className="text-sm text-[#10B981]">+</span></p>
            </div>

            {/* Floating stat — bottom left */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#D1EDD8] rounded-2xl px-4 py-3 shadow-lg z-20">
              <p className="text-[10px] text-[#7BA899] font-semibold mb-0.5">Heavy Metals</p>
              <p className="text-sm font-bold text-[#10B981]">All Pass ✓</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
