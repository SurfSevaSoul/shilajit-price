import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer & Disclosure | ShilajitPrice.com",
  description:
    "Full affiliate disclosure for ShilajitPrice.com. We participate in affiliate programs including Black Lotus Shilajit. Commissions help us keep this independent comparison site free.",
  alternates: { canonical: "https://shilajitprice.com/disclaimer" },
  openGraph: {
    title: "Affiliate Disclaimer | ShilajitPrice.com",
    description:
      "Full disclosure of affiliate relationships and how they do (and don't) affect our product rankings.",
    url: "https://shilajitprice.com/disclaimer",
    siteName: "ShilajitPrice.com",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shilajitprice.com" },
    { "@type": "ListItem", position: 2, name: "Disclaimer", item: "https://shilajitprice.com/disclaimer" },
  ],
};

export default function DisclaimerPage() {
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
            <span className="text-[#9ec9ad]">Disclaimer</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-800/40 text-amber-400 text-xs font-semibold mb-4 tracking-wide">
              Legal Disclosure
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#e8f4ec] mb-3 leading-tight">
              Affiliate Disclaimer & Disclosure
            </h1>
            <p className="text-xs text-[#5d8c6e]">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8">

            {/* FTC Compliance */}
            <section className="bg-amber-900/10 border border-amber-800/30 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">FTC Compliance Notice</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                In accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials
                (16 C.F.R. Part 255), ShilajitPrice.com discloses that this website contains affiliate links.
                When you click an affiliate link and make a purchase, we may receive a commission.
                <strong className="text-[#e8f4ec]"> This commission comes at no additional cost to you.</strong>
              </p>
            </section>

            {/* Affiliate Relationships */}
            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Affiliate Relationships</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-4">
                ShilajitPrice.com is an affiliate partner of <strong className="text-[#e8f4ec]">Black Lotus Shilajit</strong>.
                Our affiliate links include a referral tag (<code className="text-xs bg-[#0d1f14] px-1 py-0.5 rounded text-emerald-400">sca_ref=5188496.BbHTin3axE</code>)
                that credits us when you complete a purchase.
              </p>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-4">
                Black Lotus Shilajit is our featured partner and receives prominent placement on this site because
                we genuinely believe it offers the highest quality-to-price ratio among shilajit products we&apos;ve evaluated.
                However, see the section below on how this relationship affects rankings.
              </p>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                We may add additional affiliate partners in the future. This page will be updated to reflect any new relationships.
              </p>
            </section>

            {/* Independence of Rankings */}
            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Independence of Rankings</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-4">
                Our product tier ratings (S, A, B, C, D) are assigned based solely on objective criteria:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#9ec9ad] mb-4">
                <li>Availability and validity of third-party Certificates of Analysis (COAs)</li>
                <li>Reported and verified fulvic acid percentage</li>
                <li>Sourcing transparency (altitude, region, harvesting method)</li>
                <li>Price per gram relative to quality</li>
                <li>Label accuracy and absence of misleading claims</li>
                <li>Heavy metal testing and contaminant screening</li>
              </ul>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                Affiliate relationships do <strong className="text-[#e8f4ec]">not</strong> inflate or improve
                a product&apos;s tier rating. If a product we earn commissions on fails our objective criteria,
                it will be rated accordingly. Non-affiliate products that meet our criteria receive the same
                fair treatment.
              </p>
            </section>

            {/* No Medical Advice */}
            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Not Medical Advice</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3">
                All content on ShilajitPrice.com is for <strong className="text-[#e8f4ec]">informational purposes only</strong> and
                does not constitute medical advice, diagnosis, or treatment recommendations.
              </p>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                Shilajit is a dietary supplement. Statements about its benefits have not been evaluated by the
                Food and Drug Administration. Shilajit is not intended to diagnose, treat, cure, or prevent any disease.
                Consult a qualified healthcare provider before starting any supplement regimen, especially if you
                are pregnant, nursing, taking medications, or have a pre-existing medical condition.
              </p>
            </section>

            {/* Price Accuracy */}
            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Price Accuracy</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                Prices displayed on ShilajitPrice.com are updated periodically (at least monthly) but may not
                reflect real-time pricing. Prices may vary based on sales, promotions, bundle discounts, or
                geographic region. Always verify the current price on the retailer&apos;s website before purchasing.
                We are not responsible for pricing discrepancies between this site and vendor websites.
              </p>
            </section>

            {/* Third-Party Sites */}
            <section className="bg-[#182b1f] border border-[#2a4535] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Third-Party Websites</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                This site contains links to third-party websites. We are not responsible for the content,
                privacy practices, or accuracy of information on those sites. The inclusion of a link does not
                imply endorsement beyond our stated affiliate relationships.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg font-bold text-[#e8f4ec] mb-3">Questions?</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed">
                If you have questions about our affiliate relationships or this disclosure, contact us at{" "}
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
