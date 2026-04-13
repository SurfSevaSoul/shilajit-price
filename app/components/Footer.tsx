import { AFFILIATE_LINKS } from "../data/products";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ShilajitPrice",
  alternateName: "ShilajitPrice.com",
  url: "https://shilajitprice.com",
  description:
    "Independent shilajit price comparison site. We research, test, and rank shilajit supplements so you can buy with confidence.",
  sameAs: ["https://shilajitprice.com"],
  foundingDate: "2026",
  areaServed: "Worldwide",
  knowsAbout: [
    "Shilajit supplements",
    "Fulvic acid",
    "Supplement price comparison",
    "Certificate of Analysis (COA)",
    "Himalayan shilajit",
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1a10] border-t border-[#1e3527]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-black text-emerald-400">
                ShilajitPrice
              </span>
              <span className="text-xl font-black text-[#e8f4ec]">.com</span>
            </div>
            <p className="text-sm text-[#5d8c6e] leading-relaxed mb-4">
              Independent price comparison for shilajit supplements. We
              research, test, and rank so you can buy with confidence.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#5d8c6e]">
                Updated monthly
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-[#5d8c6e] uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Compare Prices", href: "/#deals" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "FAQ", href: "/#faq" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Privacy Policy", href: "/privacy" },
                {
                  label: "Black Lotus Shilajit",
                  href: AFFILIATE_LINKS.base,
                  external: true,
                },
                {
                  label: "Black Lotus Resin",
                  href: AFFILIATE_LINKS.resin,
                  external: true,
                },
                {
                  label: "Black Lotus Capsules",
                  href: AFFILIATE_LINKS.capsules,
                  external: true,
                },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer sponsored",
                        }
                      : {})}
                    className="text-sm text-[#9ec9ad] hover:text-emerald-400 transition-colors duration-150 flex items-center gap-1.5"
                  >
                    {label}
                    {external && (
                      <svg
                        className="w-2.5 h-2.5 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold text-[#5d8c6e] uppercase tracking-widest mb-4">
              Shop Black Lotus
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Resin (30g)", href: AFFILIATE_LINKS.resin },
                { label: "Capsules", href: AFFILIATE_LINKS.capsules },
                { label: "Gummies", href: AFFILIATE_LINKS.gummies },
                { label: "Tincture", href: AFFILIATE_LINKS.tincture },
                { label: "Honey Blend", href: AFFILIATE_LINKS.honey },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm text-[#9ec9ad] hover:text-emerald-400 transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-emerald-500 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FTC Disclosure */}
      <div className="border-t border-[#1e3527] bg-[#071009]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="bg-[#0d1f14] border border-[#1e3527] rounded-xl p-4 mb-5">
            <p className="text-[11px] text-[#5d8c6e] leading-relaxed">
              <span className="font-bold text-[#9ec9ad]">
                FTC Disclosure:
              </span>{" "}
              ShilajitPrice.com participates in affiliate advertising programs.
              When you click affiliate links on this site and make a purchase,
              we may receive a commission at no additional cost to you. Our
              featured partner is Black Lotus Shilajit. Affiliate relationships
              do not influence product rankings or tier assignments — all ratings
              are based on independent evaluation of lab reports, COAs, pricing,
              and sourcing transparency. We only recommend products we genuinely
              believe provide value to consumers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-[#5d8c6e]">
              © {year} ShilajitPrice.com — All rights reserved.
            </p>
            <p className="text-[11px] text-[#5d8c6e] text-center sm:text-right">
              Not medical advice. Consult a healthcare provider before starting
              any supplement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
