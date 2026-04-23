import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ShilajitPrice.com",
  description:
    "Privacy policy for ShilajitPrice.com. Learn how we collect, use, and protect your data. We use minimal tracking and never sell your personal information.",
  alternates: { canonical: "https://www.shilajitprice.com/privacy" },
  openGraph: {
    title: "Privacy Policy | ShilajitPrice.com",
    description: "How ShilajitPrice.com collects, uses, and protects your data.",
    url: "https://www.shilajitprice.com/privacy",
    siteName: "ShilajitPrice.com",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shilajitprice.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.shilajitprice.com/privacy" },
  ],
};

export default function PrivacyPage() {
  const lastUpdated = "April 13, 2026";

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
          <Link
            href="/#deals"
            className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
          >
            Compare Prices
          </Link>
        </div>
      </nav>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#5d8c6e] mb-8">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#9ec9ad]">Privacy Policy</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/40 text-blue-400 text-xs font-semibold mb-4 tracking-wide">
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#e8f4ec] mb-3 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#5d8c6e]">Last updated: {lastUpdated}</p>
          </div>

          <div className="space-y-6">

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Overview</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                ShilajitPrice.com (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains
                what information we collect when you visit ShilajitPrice.com, how we use it,
                and your rights regarding that information. We operate a minimal-data approach —
                we do not run advertising networks, do not build user profiles, and do not sell your data.
              </p>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Information We Collect</h2>
              <h3 className="text-sm font-semibold text-[#e8f4ec] mb-2">Automatically Collected</h3>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-4">
                When you visit our site, our hosting provider (Vercel) and analytics tools may automatically
                collect standard server log data including:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#9ec9ad] mb-4">
                <li>IP address (anonymized)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URL</li>
                <li>Pages visited and time spent</li>
                <li>Date and time of access</li>
              </ul>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                This data is used solely for site performance monitoring and aggregate traffic analysis.
                We do not use this data to personally identify visitors.
              </p>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Cookies</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3">
                ShilajitPrice.com uses minimal cookies. We may use:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#9ec9ad] mb-4">
                <li><strong className="text-[#e8f4ec]">Essential cookies:</strong> Required for basic site functionality.</li>
                <li><strong className="text-[#e8f4ec]">Analytics cookies:</strong> Anonymous, aggregated data to understand site usage (e.g., Vercel Analytics).</li>
              </ul>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                We do not use advertising cookies, retargeting cookies, or third-party tracking pixels.
                You can disable cookies in your browser settings, though this may affect site functionality.
              </p>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Affiliate Links & Third-Party Sites</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3">
                When you click an affiliate link to Black Lotus Shilajit or other vendors, you are leaving
                ShilajitPrice.com. Those third-party websites have their own privacy policies and data practices,
                which we do not control.
              </p>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                Affiliate links contain a referral identifier so the vendor can track that a purchase came
                from our site. This identifier does not give us access to your purchase details, payment
                information, or personal data from those vendors.
              </p>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">How We Use Information</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3">
                We use the limited data we collect to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#9ec9ad]">
                <li>Monitor site performance and uptime</li>
                <li>Understand which content is most useful to visitors</li>
                <li>Improve site structure, navigation, and content quality</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Data Sharing</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3">
                We do <strong className="text-[#e8f4ec]">not</strong> sell, rent, or trade your personal information
                to third parties. We may share anonymized, aggregate data with:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#9ec9ad]">
                <li>Our hosting provider (Vercel) for infrastructure purposes</li>
                <li>Analytics services (anonymous, aggregated only)</li>
                <li>Law enforcement or regulatory bodies if required by law</li>
              </ul>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Your Rights</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3">
                Depending on your location, you may have rights including:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#9ec9ad] mb-4">
                <li>The right to access personal data we hold about you</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt out of any data processing</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                Because we collect minimal data and do not maintain user accounts, most requests can be
                satisfied by clearing your browser cookies. For specific requests, contact us at{" "}
                <a href="mailto:hello@shilajitprice.com" className="text-emerald-400 hover:underline">
                  hello@shilajitprice.com
                </a>.
              </p>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Children&apos;s Privacy</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                ShilajitPrice.com is not directed to children under 13. We do not knowingly collect
                personal information from children. If you believe a child has provided us personal
                information, please contact us and we will delete it promptly.
              </p>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Changes to This Policy</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the top
                of this page indicates when the policy was last revised. Continued use of the site after
                changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Contact</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                For privacy-related questions or requests, contact us at{" "}
                <a href="mailto:hello@shilajitprice.com" className="text-emerald-400 hover:underline">
                  hello@shilajitprice.com
                </a>.
              </p>
            </section>

          </div>

          {/* Back nav */}
          <div className="mt-12 pt-8 border-t border-[#2a4535]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              ← Back to Price Comparison
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
