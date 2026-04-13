import { AFFILIATE_LINKS } from "../data/products";

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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-400 text-xs font-semibold mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Updated April 2026 — 15 Products Compared
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#e8f4ec] leading-tight tracking-tight mb-5">
              Find the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                Best Shilajit
              </span>{" "}
              Price Online
            </h1>

            <p className="text-lg text-[#9ec9ad] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We compare lab-tested shilajit from top vendors so you get the
              most fulvic acid per dollar. Every product rated on purity, COA
              transparency, and value.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { label: "Products Tracked", value: "15+" },
                { label: "Vendors Compared", value: "8" },
                { label: "Lab-Tested Only", value: "100%" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-emerald-400">
                    {value}
                  </div>
                  <div className="text-xs text-[#5d8c6e] mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#deals"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-emerald-900/40 text-sm"
              >
                Compare Prices
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href={AFFILIATE_LINKS.base}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#182b1f] hover:bg-[#1e3527] text-emerald-300 font-semibold border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-200 text-sm"
              >
                🏆 Our #1 Pick — Black Lotus
              </a>
            </div>
          </div>

          {/* Feature card */}
          <div className="w-full max-w-sm lg:max-w-xs xl:max-w-sm shrink-0">
            <div className="bg-[#182b1f] border border-emerald-700/40 rounded-2xl p-6 shadow-xl shadow-emerald-900/20">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-lg">
                  🏆
                </div>
                <div>
                  <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                    #1 Rated — S Tier
                  </div>
                  <div className="text-sm font-bold text-[#e8f4ec]">
                    Black Lotus Shilajit
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-5">
                {[
                  "Full panel COA — third party verified",
                  "85%+ fulvic acid content",
                  "Free shipping on all orders",
                  "Himalayan source, cold processed",
                  "30g resin starting at $39.99",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs">
                    <svg
                      className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#9ec9ad]">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={AFFILIATE_LINKS.base}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block w-full text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-emerald-900/30"
              >
                Shop Black Lotus →
              </a>

              <p className="text-center text-[10px] text-[#5d8c6e] mt-2">
                Affiliate link — we earn a commission
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
