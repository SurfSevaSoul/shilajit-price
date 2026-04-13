import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About ShilajitPrice.com | Independent Shilajit Price Comparison",
  description:
    "Learn how ShilajitPrice.com researches, tests, and ranks shilajit supplements. Our independent methodology covers COA verification, fulvic acid content, sourcing transparency, and price-per-gram analysis.",
  alternates: { canonical: "https://shilajitprice.com/about" },
  openGraph: {
    title: "About ShilajitPrice.com",
    description:
      "Independent shilajit price comparison. We verify lab reports, COAs, and sourcing so you can buy with confidence.",
    url: "https://shilajitprice.com/about",
    siteName: "ShilajitPrice.com",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shilajitprice.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://shilajitprice.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1f14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/blog" className="text-sm text-[#9ec9ad] hover:text-emerald-400 transition-colors hidden sm:block">
              Blog
            </Link>
            <Link
              href="/#deals"
              className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
            >
              Compare Prices
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#5d8c6e] mb-8">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#9ec9ad]">About</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800/40 text-emerald-400 text-xs font-semibold mb-4 tracking-wide">
              About This Site
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#e8f4ec] mb-4 leading-tight">
              Independent Shilajit Price Comparison
            </h1>
            <p className="text-base text-[#9ec9ad] leading-relaxed">
              ShilajitPrice.com was built because finding honest, transparent shilajit supplement data is harder than it should be.
              We cut through marketing noise and give you the facts: fulvic acid percentages, third-party lab reports, price-per-gram,
              and sourcing transparency — all in one place.
            </p>
          </div>

          {/* Mission */}
          <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-[#e8f4ec] mb-4">Our Mission</h2>
            <p className="text-sm text-[#9ec9ad] leading-relaxed mb-4">
              The shilajit market is flooded with low-quality products making exaggerated claims. Our goal is simple:
              provide a transparent, unbiased comparison that helps you identify genuinely high-quality shilajit and
              avoid wasting money on fakes or inferior products.
            </p>
            <p className="text-sm text-[#9ec9ad] leading-relaxed">
              Every product on our list is evaluated on the same criteria. Affiliate relationships with Black Lotus
              Shilajit help keep this site running, but they do not change how products are ranked.
              See our <Link href="/disclaimer" className="text-emerald-400 hover:underline">affiliate disclosure</Link> for full details.
            </p>
          </section>

          {/* Methodology */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#e8f4ec] mb-6">Our Rating Methodology</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: "🧪",
                  title: "COA Verification",
                  desc: "We check whether each brand publishes third-party Certificates of Analysis and verify the testing lab is accredited.",
                },
                {
                  emoji: "⚗️",
                  title: "Fulvic Acid Content",
                  desc: "Fulvic acid is the primary bioactive in shilajit. We record reported percentages and cross-reference against COA data.",
                },
                {
                  emoji: "💰",
                  title: "Price per Gram",
                  desc: "Raw price is misleading. We standardize all comparisons to cost-per-gram so you can compare value accurately.",
                },
                {
                  emoji: "🏔️",
                  title: "Sourcing Transparency",
                  desc: "Where was the shilajit harvested? What altitude? Is the harvesting method disclosed? These details matter for quality.",
                },
                {
                  emoji: "🏷️",
                  title: "Label Accuracy",
                  desc: "We compare label claims against available lab data and flag products that overpromise or under-disclose.",
                },
                {
                  emoji: "🚚",
                  title: "Shipping & Value",
                  desc: "We factor in shipping costs, free shipping thresholds, and return policies to give you the true total cost.",
                },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{emoji}</span>
                    <h3 className="text-sm font-bold text-[#e8f4ec]">{title}</h3>
                  </div>
                  <p className="text-xs text-[#9ec9ad] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tier System */}
          <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-[#e8f4ec] mb-4">Tier Rating System</h2>
            <p className="text-sm text-[#9ec9ad] leading-relaxed mb-5">
              All products receive an overall tier rating based on the methodology above:
            </p>
            <div className="space-y-2">
              {[
                { tier: "S", label: "Elite", color: "text-yellow-400", bg: "bg-yellow-900/20 border-yellow-700/40", desc: "Verified COA, ≥60% fulvic acid, excellent sourcing transparency, fair price/gram" },
                { tier: "A", label: "Premium", color: "text-emerald-400", bg: "bg-emerald-900/20 border-emerald-700/40", desc: "COA available, high fulvic acid, solid sourcing, competitive pricing" },
                { tier: "B", label: "Good", color: "text-blue-400", bg: "bg-blue-900/20 border-blue-700/40", desc: "Some lab testing, reasonable quality, average price-per-gram" },
                { tier: "C", label: "Average", color: "text-orange-400", bg: "bg-orange-900/20 border-orange-700/40", desc: "Limited transparency, unverified claims, or overpriced for the quality" },
                { tier: "D", label: "Poor", color: "text-red-400", bg: "bg-red-900/20 border-red-700/40", desc: "No COA, misleading claims, poor sourcing, or unacceptably high price/gram" },
              ].map(({ tier, label, color, bg, desc }) => (
                <div key={tier} className={`flex items-start gap-3 border rounded-lg p-3 ${bg}`}>
                  <span className={`text-sm font-black w-6 shrink-0 ${color}`}>{tier}</span>
                  <div>
                    <span className={`text-xs font-bold ${color}`}>{label}: </span>
                    <span className="text-xs text-[#9ec9ad]">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section className="bg-amber-900/10 border border-amber-800/30 rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-[#e8f4ec] mb-3">Affiliate Disclosure</h2>
            <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3">
              ShilajitPrice.com is an affiliate partner of Black Lotus Shilajit. When you purchase through our affiliate
              links, we earn a commission at no extra cost to you. This is how we keep the site free and ad-light.
            </p>
            <p className="text-sm text-[#9ec9ad] leading-relaxed">
              Our affiliate relationship does not affect product rankings, tier assignments, or editorial content.
              Read the full <Link href="/disclaimer" className="text-emerald-400 hover:underline">affiliate disclaimer here</Link>.
            </p>
          </section>

          {/* Contact / Updates */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#e8f4ec] mb-3">Data Updates</h2>
            <p className="text-sm text-[#9ec9ad] leading-relaxed">
              Product pricing and availability change frequently. We update this comparison at least monthly.
              Each product card shows the date pricing was last verified. If you notice outdated information,
              we welcome feedback — contact us at{" "}
              <a href="mailto:hello@shilajitprice.com" className="text-emerald-400 hover:underline">
                hello@shilajitprice.com
              </a>.
            </p>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              href="/#deals"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors"
            >
              Compare Shilajit Prices
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#182b1f] hover:bg-[#1e3527] text-emerald-300 font-semibold border border-emerald-700/50 text-sm transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
