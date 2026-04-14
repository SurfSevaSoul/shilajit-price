"use client";

import { Product, Tier, TIER_COLORS, TIER_DESCRIPTIONS } from "../data/products";

interface DealCardProps {
  product: Product;
}

const TIER_EDITORIAL_SCORE: Record<Tier, number> = { S: 4.9, A: 4.5, B: 4.0, C: 3.5, D: 3.0 };

function buildProductSchema(product: Product) {
  const url = product.affiliateUrl !== "#" ? product.affiliateUrl : "https://shilajitprice.com";
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.vendor} ${product.productName}`,
    description: product.description ?? `${product.category} shilajit supplement from ${product.vendor}`,
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
          shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
        },
      }),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.amazonRating ?? TIER_EDITORIAL_SCORE[product.tier],
      bestRating: 5,
      worstRating: 1,
      ratingCount: product.amazonReviewCount ?? 1,
      description: product.amazonReviewCount
        ? `${product.amazonReviewCount} Amazon customer reviews`
        : "ShilajitPrice.com editorial quality score based on COA, fulvic acid content, sourcing, and price analysis.",
    },
  };
}

function PurityBar({ score }: { score: number }) {
  const pct = (score / 10) * 100;
  const color = score >= 8 ? "bg-emerald-500" : score >= 6 ? "bg-blue-500" : score >= 4 ? "bg-amber-500" : "bg-red-500";
  const label = score >= 8 ? "Excellent" : score >= 6 ? "Good" : score >= 4 ? "Average" : "Poor";
  const textColor = score >= 8 ? "text-emerald-400" : score >= 6 ? "text-blue-400" : score >= 4 ? "text-amber-400" : "text-red-400";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-[#0d1f14] overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className={`text-[10px] font-bold tabular-nums ${textColor}`}>{score}/10</span>
      <span className={`text-[9px] ${textColor} hidden sm:inline`}>{label}</span>
    </div>
  );
}

export default function DealCard({ product }: DealCardProps) {
  const {
    vendor, productName, tier, priceUsd, pricePerGram, weightGrams,
    coaVerified, freeShipping, affiliateUrl, featured, badge, description,
    fulvicAcidPct, sourceLocation, thirdPartyTested, purityScore,
    costPerServing, amazonRating, amazonReviewCount, heavyMetalsTested,
    gmpCertified,
  } = product;

  const isAffiliate = affiliateUrl !== "#";
  const productSchema = buildProductSchema(product);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className={`relative flex flex-col rounded-xl border transition-all duration-200 overflow-hidden group
        ${featured
          ? "border-emerald-500/50 shadow-lg shadow-emerald-900/20"
          : "border-[#2a4535]"
        }
        bg-[#182b1f] hover:bg-[#1e3527] hover:border-emerald-600/40 hover:shadow-md hover:shadow-emerald-900/20`}
      >
        {/* Featured ribbon */}
        {featured && (
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wide uppercase z-10">
            Featured
          </div>
        )}

        <div className="p-4 flex flex-col gap-2.5 flex-1">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest truncate mb-0.5">
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
              <span className="text-[9px] text-[#5d8c6e] uppercase tracking-wider">Tier</span>
            </div>
          </div>

          {/* Purity score */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-[#5d8c6e] font-semibold uppercase tracking-wider">Purity Score</span>
            </div>
            <PurityBar score={purityScore} />
          </div>

          {/* Key data pills */}
          <div className="flex flex-wrap gap-1">
            {fulvicAcidPct !== undefined && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-[10px] font-bold">
                ⚗️ {fulvicAcidPct}% FA
              </span>
            )}
            {sourceLocation && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-900/30 border border-blue-700/30 text-blue-300 text-[10px]">
                🏔️ {sourceLocation}
              </span>
            )}
            {amazonRating !== undefined && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-900/30 border border-amber-700/30 text-amber-300 text-[10px]">
                ★ {amazonRating.toFixed(1)}
                {amazonReviewCount !== undefined && (
                  <span className="text-[#5d8c6e] ml-0.5">({amazonReviewCount >= 1000 ? `${(amazonReviewCount / 1000).toFixed(1)}k` : amazonReviewCount})</span>
                )}
              </span>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-[11px] text-[#9ec9ad] leading-relaxed line-clamp-2">{description}</p>
          )}

          {/* Pricing */}
          <div className="flex items-end gap-3 pt-0.5">
            <div>
              <span className="text-2xl font-black text-[#e8f4ec]">${priceUsd.toFixed(2)}</span>
              <span className="text-xs text-[#5d8c6e] ml-1">/ {weightGrams}g</span>
            </div>
            <div className="mb-0.5 space-y-0.5">
              <div>
                <span className="text-sm font-semibold text-emerald-400">${pricePerGram.toFixed(2)}</span>
                <span className="text-[10px] text-[#5d8c6e] ml-0.5">/gram</span>
              </div>
              {costPerServing > 0 && (
                <div>
                  <span className="text-xs font-semibold text-[#9ec9ad]">${costPerServing.toFixed(2)}</span>
                  <span className="text-[10px] text-[#5d8c6e] ml-0.5">/serving</span>
                </div>
              )}
            </div>
          </div>

          {/* Quality badges */}
          <div className="flex flex-wrap gap-1">
            {coaVerified && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-[10px] font-medium">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                COA
              </span>
            )}
            {thirdPartyTested && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-purple-900/40 border border-purple-700/40 text-purple-300 text-[10px] font-medium">
                🔬 3rd Party
              </span>
            )}
            {heavyMetalsTested && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-300 text-[10px] font-medium">
                ⚗️ HM Tested
              </span>
            )}
            {gmpCertified && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-teal-900/40 border border-teal-700/40 text-teal-300 text-[10px] font-medium">
                ✅ GMP
              </span>
            )}
            {freeShipping && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-900/40 border border-amber-700/40 text-amber-300 text-[10px] font-medium">
                📦 Free Ship
              </span>
            )}
            {badge && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold">
                ★ {badge}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 pb-4">
          {isAffiliate ? (
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`block w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200
                ${featured
                  ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-900/30"
                  : "bg-emerald-700/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-700/50 hover:border-emerald-500/60"
                }`}
            >
              {featured ? "View Deal →" : "Check Price →"}
            </a>
          ) : (
            <span className="block w-full text-center py-2.5 px-4 rounded-lg text-sm font-medium bg-[#122019] text-[#5d8c6e] border border-[#2a4535] cursor-default">
              Check Price →
            </span>
          )}
        </div>
      </div>
    </>
  );
}
