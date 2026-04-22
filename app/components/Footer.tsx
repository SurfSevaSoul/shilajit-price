import { AFFILIATE_LINKS, PURE_HIMALAYAN_LINKS, NATURAL_SHILAJIT_LINKS } from "../data/products";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ShilajitPrice",
  alternateName: "ShilajitPrice.com",
  url: "https://shilajitprice.com",
  description:
    "Independent shilajit price comparison site. We research, test, and rank shilajit supplements from top brands including Black Lotus Shilajit, Pure Himalayan Shilajit, and Natural Shilajit so you can buy with confidence.",
  logo: {
    "@type": "ImageObject",
    url: "https://shilajitprice.com/icon",
    width: 32,
    height: 32,
  },
  sameAs: [
    "https://shilajitprice.com",
    "https://shilajitprice.com/about",
    "https://shilajitprice.com/methodology",
  ],
  foundingDate: "2026",
  areaServed: "Worldwide",
  knowsAbout: [
    "Shilajit supplements",
    "Fulvic acid",
    "Supplement price comparison",
    "Certificate of Analysis (COA)",
    "Himalayan shilajit",
    "Heavy metals testing",
    "Third-party lab testing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@shilajitprice.com",
    contactType: "customer support",
  },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1F14] border-t border-[#182B1F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-extrabold text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>
                ShilajitPrice
              </span>
              <span className="text-xl font-extrabold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>.com</span>
            </div>
            <p className="text-sm text-[#9EC9AD]/70 leading-relaxed mb-4">
              Independent price comparison for shilajit supplements. We
              research, test, and rank so you can buy with confidence.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs text-[#9EC9AD]/60">
                Updated monthly
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-[#9EC9AD]/50 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Compare Prices", href: "/#deals" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "FAQ", href: "/#faq" },
                { label: "Blog", href: "/blog" },
                { label: "Lab Data & COAs", href: "/lab-data" },
                { label: "Reviews", href: "/reviews" },
                { label: "Methodology", href: "/methodology" },
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
                    className="text-sm text-[#9EC9AD]/70 hover:text-[#10B981] transition-colors duration-150 flex items-center gap-1.5"
                  >
                    {label}
                    {external && (
                      <svg
                        className="w-2.5 h-2.5 opacity-40"
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
            <h3 className="text-xs font-bold text-[#9EC9AD]/50 uppercase tracking-widest mb-4">
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
                    className="text-sm text-[#9EC9AD]/70 hover:text-[#10B981] transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-[#10B981] shrink-0"
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

          {/* Pure Himalayan */}
          <div>
            <h3 className="text-xs font-bold text-[#9EC9AD]/50 uppercase tracking-widest mb-4">
              Shop Pure Himalayan
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Resin (30g)", href: PURE_HIMALAYAN_LINKS.resin },
                { label: "Liquid Drops", href: PURE_HIMALAYAN_LINKS.drops },
                { label: "Tablets (90ct)", href: PURE_HIMALAYAN_LINKS.tablets },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm text-[#9EC9AD]/70 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-amber-500 shrink-0"
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

            {/* Natural Shilajit */}
            <h3 className="text-xs font-bold text-[#9EC9AD]/50 uppercase tracking-widest mb-4 mt-6">
              Shop Natural Shilajit
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Resin (20g)", href: NATURAL_SHILAJIT_LINKS.resin20g },
                { label: "Resin (150g Bulk)", href: NATURAL_SHILAJIT_LINKS.resin150g },
                { label: "VegTabs (60ct)", href: NATURAL_SHILAJIT_LINKS.vegtabs },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm text-[#9EC9AD]/70 hover:text-teal-400 transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-teal-500 shrink-0"
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

            {/* Pürblack */}
            <h3 className="text-xs font-bold text-[#9EC9AD]/50 uppercase tracking-widest mb-4 mt-6">
              Shop Pürblack
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Research Grade (15g)", href: "https://purblack.pxf.io/c/7221460/3041684/36963" },
                { label: "True Gold (15g)", href: "https://purblack.pxf.io/c/7221460/3041684/36963" },
                { label: "True Gold (30g)", href: "https://purblack.pxf.io/c/7221460/3041684/36963" },
                { label: "Immunity Max (30g)", href: "https://purblack.pxf.io/c/7221460/3041684/36963" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm text-[#9EC9AD]/70 hover:text-violet-400 transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-violet-500 shrink-0"
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
      <div className="border-t border-[#182B1F] bg-[#071009]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="bg-[#0D1F14] border border-[#182B1F] rounded-2xl p-4 mb-5">
            <p className="text-[11px] text-[#9EC9AD]/50 leading-relaxed">
              <span className="font-bold text-[#9EC9AD]/80">
                FTC Disclosure:
              </span>{" "}
              ShilajitPrice.com participates in affiliate advertising programs.
              When you click affiliate links on this site and make a purchase,
              we may receive a commission at no additional cost to you. Our
              featured partners are Black Lotus Shilajit, Pure Himalayan
              Shilajit, and Natural Shilajit. Affiliate relationships do not
              influence product rankings or tier assignments — all ratings are
              based on independent evaluation of lab reports, COAs, pricing, and
              sourcing transparency. We only recommend products we genuinely
              believe provide value to consumers. Prices are updated regularly;
              always confirm the final price on the retailer&apos;s website
              before purchasing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-[#9EC9AD]/40">
              © {year} ShilajitPrice.com — All rights reserved.
            </p>
            <p className="text-[11px] text-[#9EC9AD]/40 text-center sm:text-right">
              Not medical advice. Consult a healthcare provider before starting
              any supplement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
