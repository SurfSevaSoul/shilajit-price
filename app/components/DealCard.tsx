"use client";

import { useState } from "react";
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
  const color =
    score >= 8 ? "bg-emerald-500" : score >= 6 ? "bg-blue-500" : score >= 4 ? "bg-amber-500" : "bg-red-500";
  const label =
    score >= 8 ? "Excellent" : score >= 6 ? "Good" : score >= 4 ? "Average" : "Poor";
  const textColor =
    score >= 8 ? "text-emerald-400" : score >= 6 ? "text-blue-400" : score >= 4 ? "text-amber-400" : "text-red-400";
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-[#5d8c6e] font-semibold uppercase tracking-wider w-10 shrink-0">Purity</span>
      <div className="flex-1 h-1.5 rounded-full bg-[#0d1f14] overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className={`text-[10px] font-bold tabular-nums ${textColor}`}>{score}/10</span>
      <span className={`text-[9px] ${textColor} hidden sm:inline`}>{label}</span>
    </div>
  );
}

export default function DealCard({ product }: DealCardProps) {
  const [expanded, setExpanded] = useState(false);

  const {
    vendor, productName, tier, priceUsd, pricePerGram, weightGrams,
    coaVerified, freeShipping, affiliateUrl, featured, badge, description,
    fulvicAcidPct, sourceLocation, thirdPartyTested, purityScore,
    costPerServing, amazonRating, amazonReviewCount, heavyMetalsTested,
    gmpCertified,
  } = product;

  const isAffiliate = affiliateUrl !== "#";
  const productSchema = buildProductSchema(product);

  // Priority-ordered badges — top 2 shown collapsed, rest shown expanded
  const allBadges = [
    coaVerified && { label: "COA", cls: "bg-emerald-900/50 border-emerald-700/50 text-emerald-300" },
    thirdPartyTested && { label: "3rd Party", cls: "bg-purple-900/40 border-purple-700/40 text-purple-300" },
    heavyMetalsTested && { label: "HM Tested", cls: "bg-blue-900/40 border-blue-700/40 text-blue-300" },
    gmpCertified && { label: "GMP", cls: "bg-teal-900/40 border-teal-700/40 text-teal-300" },
    freeShipping && { label: "Free Ship", cls: "bg-amber-900/40 border-amber-700/40 text-amber-300" },
  ].filter(Boolean) as { label: string; cls: string }[];

  const topBadges = allBadges.slice(0, 2);
  const extraBadges = allBadges.slice(2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div
        className={`relative flex flex-col rounded-xl border transition-all duration-200 overflow-hidden group
          ${featured
            ? "border-emerald-500/50 shadow-lg shadow-emerald-900/20"
            : "border-[#2a4535]"
          }
          bg-[#182b1f] hover:bg-[#1e3527] hover:border-emerald-600/40 hover:shadow-md hover:shadow-emerald-900/20`}
      >
        {/* Featured ribbon */}
        {featured && (
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-bl-lg tracking-wide uppercase z-10">
            Featured
          </div>
        )}

        <div className="p-3.5 flex flex-col gap-0 flex-1">
          {/* Row 1: Tier badge + Vendor + Product name */}
          <div className="flex items-start gap-2.5 mb-2.5">
            <div
              className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black ${TIER_COLORS[tier]} shadow-sm`}
              title={TIER_DESCRIPTIONS[tier]}
            >
              {tier}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest truncate leading-none mb-0.5">
                {vendor}
              </p>
              <h3 className="text-sm font-semibold text-[#e8f4ec] leading-snug line-clamp-1">
                {productName}
              </h3>
            </div>
          </div>

          {/* Row 2: Pricing */}
          <div className="flex items-baseline gap-2 mb-2.5">
            <span className="text-xl font-black text-[#e8f4ec] tabular-nums">${priceUsd.toFixed(2)}</span>
            <span className="text-[10px] text-[#5d8c6e]">/ {weightGrams}g</span>
            <span className="ml-auto text-sm font-bold text-emerald-400 tabular-nums">
              ${pricePerGram.toFixed(2)}
              <span className="text-[10px] text-[#5d8c6e] font-normal">/g</span>
            </span>
          </div>

          {/* Row 3: Top badges + expand toggle */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1">
              {topBadges.map((b) => (
                <span
                  key={b.label}
                  className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold border ${b.cls}`}
                >
                  {b.label}
                </span>
              ))}
              {badge && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold border bg-amber-400/20 border-amber-400/40 text-amber-300">
                  ★ {badge}
                </span>
              )}
            </div>
            <button
              onClick={() => setExpanded((e) => !e)}
              className="shrink-0 text-[10px] text-[#5d8c6e] hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {expanded ? "Less ↑" : "Details ↓"}
            </button>
          </div>

          {/* Expanded section */}
          {expanded && (
            <div className="mt-3 pt-3 border-t border-[#1e3527] space-y-2.5">
              {/* Purity bar */}
              <PurityBar score={purityScore} />

              {/* Data pills */}
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
                      <span className="text-[#5d8c6e] ml-0.5">
                        ({amazonReviewCount >= 1000 ? `${(amazonReviewCount / 1000).toFixed(1)}k` : amazonReviewCount})
                      </span>
                    )}
                  </span>
                )}
                {costPerServing > 0 && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#0d1f14] border border-[#2a4535] text-[#9ec9ad] text-[10px]">
                    💊 ${costPerServing.toFixed(2)}/serving
                  </span>
                )}
              </div>

              {/* Description */}
              {description && (
                <p className="text-[11px] text-[#9ec9ad] leading-relaxed line-clamp-2">{description}</p>
              )}

              {/* Extra badges */}
              {extraBadges.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {extraBadges.map((b) => (
                    <span
                      key={b.label}
                      className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium border ${b.cls}`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="px-3.5 pb-3.5">
          {isAffiliate ? (
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`block w-full text-center py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200
                ${featured
                  ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-900/30"
                  : "bg-emerald-700/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-700/50 hover:border-emerald-500/60"
                }`}
            >
              {featured ? "View Deal →" : "Check Price →"}
            </a>
          ) : (
            <span className="block w-full text-center py-2 px-3 rounded-lg text-xs font-medium bg-[#122019] text-[#5d8c6e] border border-[#2a4535] cursor-default">
              Check Price →
            </span>
          )}
        </div>
      </div>
    </>
  );
}
