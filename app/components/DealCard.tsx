"use client";

import { Product, Tier, TIER_COLORS, TIER_DESCRIPTIONS } from "../data/products";

interface DealCardProps {
  product: Product;
}

// Editorial quality score assigned by ShilajitPrice.com methodology (not consumer reviews)
const TIER_EDITORIAL_SCORE: Record<Tier, number> = { S: 4.9, A: 4.5, B: 4.0, C: 3.5, D: 3.0 };

function buildProductSchema(product: Product) {
  const url =
    product.affiliateUrl !== "#"
      ? product.affiliateUrl
      : "https://shilajitprice.com";
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.vendor} ${product.productName}`,
    description:
      product.description ??
      `${product.category} shilajit supplement from ${product.vendor}`,
    brand: { "@type": "Brand", name: product.vendor },
    category: `Shilajit ${product.category}`,
    offers: {
      "@type": "Offer",
      price: product.priceUsd.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url,
      ...(product.freeShipping && {
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "USD",
          },
        },
      }),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: TIER_EDITORIAL_SCORE[product.tier],
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
      description: `ShilajitPrice.com editorial quality score based on COA verification, fulvic acid content, sourcing transparency, and price-per-gram analysis.`,
    },
  };
}

export default function DealCard({ product }: DealCardProps) {
  const {
    vendor,
    productName,
    tier,
    priceUsd,
    pricePerGram,
    weightGrams,
    coaVerified,
    freeShipping,
    labTested,
    affiliateUrl,
    featured,
    badge,
    description,
  } = product;

  const isAffiliate = affiliateUrl !== "#";
  const productSchema = buildProductSchema(product);

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
    <div
      className={`relative flex flex-col rounded-xl border transition-all duration-200 overflow-hidden group
        ${
          featured
            ? "border-emerald-500/50 shadow-lg shadow-emerald-900/20"
            : "border-[#2a4535]"
        }
        bg-[#182b1f] hover:bg-[#1e3527] hover:border-emerald-600/40 hover:shadow-md hover:shadow-emerald-900/20`}
    >
      {/* Featured ribbon */}
      {featured && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wide uppercase">
          Featured
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest truncate mb-0.5">
              {vendor}
            </p>
            <h3 className="text-sm font-semibold text-[#e8f4ec] leading-snug line-clamp-2">
              {productName}
            </h3>
          </div>

          {/* Tier badge */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-base font-black ${TIER_COLORS[tier]} shadow-sm`}
              title={TIER_DESCRIPTIONS[tier]}
            >
              {tier}
            </div>
            <span className="text-[9px] text-[#5d8c6e] uppercase tracking-wider">
              Tier
            </span>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-xs text-[#9ec9ad] leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Pricing */}
        <div className="flex items-end gap-3 pt-1">
          <div>
            <span className="text-2xl font-black text-[#e8f4ec]">
              ${priceUsd.toFixed(2)}
            </span>
            <span className="text-xs text-[#5d8c6e] ml-1">
              / {weightGrams}g
            </span>
          </div>
          <div className="mb-0.5">
            <span className="text-sm font-semibold text-emerald-400">
              ${pricePerGram.toFixed(2)}
            </span>
            <span className="text-[10px] text-[#5d8c6e] ml-0.5">/gram</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5">
          {coaVerified && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-[10px] font-medium">
              <svg
                className="w-2.5 h-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              COA Verified
            </span>
          )}
          {labTested && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-300 text-[10px] font-medium">
              <svg
                className="w-2.5 h-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.344c2.672 0 4.011-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7z"
                  clipRule="evenodd"
                />
              </svg>
              Lab Tested
            </span>
          )}
          {freeShipping && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-900/40 border border-amber-700/40 text-amber-300 text-[10px] font-medium">
              <svg
                className="w-2.5 h-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              Free Shipping
            </span>
          )}
          {badge && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold">
              ★ {badge}
            </span>
          )}
        </div>
      </div>

      {/* CTA button */}
      <div className="px-5 pb-5">
        {isAffiliate ? (
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`block w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200
              ${
                featured
                  ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-900/30"
                  : "bg-emerald-700/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-700/50 hover:border-emerald-500/60"
              }`}
          >
            {featured ? "View Deal →" : "Check Price →"}
          </a>
        ) : (
          <span className="block w-full text-center py-2.5 px-4 rounded-lg text-sm font-medium bg-[#122019] text-[#5d8c6e] border border-[#2a4535] cursor-default">
            View on Amazon →
          </span>
        )}
      </div>
    </div>
    </>
  );
}
