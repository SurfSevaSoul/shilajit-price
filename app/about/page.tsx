import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About ShilajitPrice.com | Independent Shilajit Price Comparison",
  description:
    "Learn how ShilajitPrice.com researches, tests, and ranks shilajit supplements. Our independent methodology covers COA verification, fulvic acid content, sourcing transparency, and price-per-gram analysis.",
  alternates: { canonical: "https://www.shilajitprice.com/about" },
  openGraph: {
    title: "About ShilajitPrice.com",
    description:
      "Independent shilajit price comparison. We verify lab reports, COAs, and sourcing so you can buy with confidence.",
    url: "https://www.shilajitprice.com/about",
    siteName: "ShilajitPrice.com",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shilajitprice.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.shilajitprice.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8F5EC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D1EDD8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-extrabold text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>ShilajitPrice</span>
            <span className="text-lg font-extrabold text-[#0D1F14]" style={{ fontFamily: "var(--font-jakarta)" }}>.com</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/blog" className="text-sm text-[#4A6358] hover:text-[#10B981] transition-colors hidden sm:block">
              Blog
            </Link>
            <Link
              href="/#deals"
              className="shrink-0 px-4 py-1.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white text-xs font-semibold transition-colors duration-200"
            >
              Compare Prices
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#7BA899] mb-8">
            <Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#4A6358]">About</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs font-semibold mb-4 tracking-wide">
              About This Site
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F14] mb-4 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
              Independent Shilajit Price Comparison
            </h1>
            <p className="text-base text-[#4A6358] leading-relaxed">
              ShilajitPrice.com was built because finding honest, transparent shilajit supplement data is harder than it should be.
              We cut through marketing noise and give you the facts: fulvic acid percentages, third-party lab reports, price-per-gram,
              and sourcing transparency — all in one place.
            </p>
          </div>

          {/* Founder bio */}
          <section className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0D1F14] mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>About the Founder</h2>
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#E8F5EC] ring-2 ring-[#9EC9AD] flex items-center justify-center">
                <span className="text-xl font-extrabold text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>AV</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm font-extrabold text-[#0D1F14]" style={{ fontFamily: "var(--font-jakarta)" }}>Adrian Voss</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[9px] font-bold uppercase tracking-wide">Founder &amp; Author</span>
                </div>
                <p className="text-sm text-[#4A6358] leading-relaxed">
                  Adrian Voss is the founder of ShilajitPrice.com and a trained anthropologist with a focus on
                  Cultural Anthropology and traditional medicine practices across the Carribbean, Central Asia and
                  the Himalayas. He first encountered shilajit through his research studying traditional healing
                  systems and Eastern Religion and has used it personally for over six years. Frustrated by the
                  lack of transparent, data-driven information in the Western supplement market, he built
                  ShilajitPrice.com to bring the same rigorous standards of research he applies in academic work
                  to consumer supplement buying — starting with verified lab data, honest sourcing claims, and
                  real price transparency.
                </p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0D1F14] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>Our Mission</h2>
            <p className="text-sm text-[#4A6358] leading-relaxed mb-4">
              The shilajit market is flooded with low-quality products making exaggerated claims. Our goal is simple:
              provide a transparent, unbiased comparison that helps you identify genuinely high-quality shilajit and
              avoid wasting money on fakes or inferior products.
            </p>
            <p className="text-sm text-[#4A6358] leading-relaxed">
              Every product on our list is evaluated on the same criteria. Affiliate relationships with Black Lotus
              Shilajit help keep this site running, but they do not change how products are ranked.
              See our <Link href="/disclaimer" className="text-[#10B981] hover:underline">affiliate disclosure</Link> for full details.
            </p>
          </section>

          {/* Methodology */}
          <section className="mb-6">
            <h2 className="text-xl font-extrabold text-[#0D1F14] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>Our Rating Methodology</h2>
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
                <div key={title} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{emoji}</span>
                    <h3 className="text-sm font-bold text-[#0D1F14]" style={{ fontFamily: "var(--font-jakarta)" }}>{title}</h3>
                  </div>
                  <p className="text-xs text-[#4A6358] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tier System */}
          <section className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0D1F14] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>Tier Rating System</h2>
            <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
              All products receive an overall tier rating based on the methodology above:
            </p>
            <div className="space-y-2">
              {[
                { tier: "S", label: "Elite", pillCls: "bg-amber-100 text-amber-800 ring-1 ring-amber-300", rowCls: "bg-amber-50 border-amber-200", desc: "Verified COA, ≥60% fulvic acid, excellent sourcing transparency, fair price/gram" },
                { tier: "A", label: "Premium", pillCls: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300", rowCls: "bg-emerald-50 border-emerald-200", desc: "COA available, high fulvic acid, solid sourcing, competitive pricing" },
                { tier: "B", label: "Good", pillCls: "bg-blue-100 text-blue-800 ring-1 ring-blue-300", rowCls: "bg-blue-50 border-blue-200", desc: "Some lab testing, reasonable quality, average price-per-gram" },
                { tier: "C", label: "Average", pillCls: "bg-slate-100 text-slate-600 ring-1 ring-slate-300", rowCls: "bg-slate-50 border-slate-200", desc: "Limited transparency, unverified claims, or overpriced for the quality" },
                { tier: "D", label: "Poor", pillCls: "bg-red-100 text-red-700 ring-1 ring-red-300", rowCls: "bg-red-50 border-red-200", desc: "No COA, misleading claims, poor sourcing, or unacceptably high price/gram" },
              ].map(({ tier, label, pillCls, rowCls, desc }) => (
                <div key={tier} className={`flex items-start gap-3 border rounded-xl p-3 ${rowCls}`}>
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-extrabold shrink-0 ${pillCls}`}>{tier}</span>
                  <div>
                    <span className="text-xs font-bold text-[#0D1F14]">{label}: </span>
                    <span className="text-xs text-[#4A6358]">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0D1F14] mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>Affiliate Disclosure</h2>
            <p className="text-sm text-[#4A6358] leading-relaxed mb-3">
              ShilajitPrice.com is an affiliate partner of Black Lotus Shilajit. When you purchase through our affiliate
              links, we earn a commission at no extra cost to you. This is how we keep the site free and ad-light.
            </p>
            <p className="text-sm text-[#4A6358] leading-relaxed">
              Our affiliate relationship does not affect product rankings, tier assignments, or editorial content.
              Read the full <Link href="/disclaimer" className="text-[#10B981] hover:underline">affiliate disclaimer here</Link>.
            </p>
          </section>

          {/* Contact / Updates */}
          <section className="mb-8">
            <h2 className="text-xl font-extrabold text-[#0D1F14] mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>Data Updates</h2>
            <p className="text-sm text-[#4A6358] leading-relaxed">
              Product pricing and availability change frequently. We update this comparison at least monthly.
              Each product card shows the date pricing was last verified. If you notice outdated information,
              we welcome feedback — contact us at{" "}
              <a href="mailto:hello@shilajitprice.com" className="text-[#10B981] hover:underline">
                hello@shilajitprice.com
              </a>.
            </p>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              href="/#deals"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-semibold text-sm transition-colors duration-200 shadow-sm"
            >
              Compare Shilajit Prices
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#182B1F] text-[#182B1F] hover:bg-[#182B1F] hover:text-white font-semibold text-sm transition-colors duration-200"
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
