"use client";

import { useState } from "react";
import { Product, Tier, TIER_COLORS, TIER_DESCRIPTIONS } from "../data/products";
import { getLabEntry } from "../data/lab-data";
import { getAggregateRating } from "../data/reviews";
import LabDataPanel from "./LabDataPanel";
import ReviewsPanel from "./ReviewsPanel";

interface DealCardProps {
  product: Product;
}

type ActivePanel = "none" | "details" | "lab" | "reviews";

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
  const [activePanel, setActivePanel] = useState<ActivePanel>("none");

  const toggle = (panel: ActivePanel) =>
    setActivePanel((cur) => (cur === panel ? "none" : panel));

  const {
    vendor, productName, tier, priceUsd, pricePerGram, weightGrams,
    coaVerified, freeShipping, affiliateUrl, featured, badge, description,
    fulvicAcidPct, sourceLocation, thirdPartyTested, purityScore,
    costPerServing, amazonRating, amazonReviewCount, heavyMetalsTested,
    gmpCertified,
  } = product;

  const isAffiliate = affiliateUrl !== "#";
  const productSchema = buildProductSchema(product);

  const labEntry = getLabEntry(product.id);
  const reviewAggregate = getAggregateRating(product.id);
  const hasVerifiedLab = labEntry.coaStatus === "verified";
  const hasNoLab = labEntry.coaStatus === "not-available";

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

          {/* Row 3: Top badges + details toggle */}
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
              onClick={() => toggle("details")}
              className="shrink-0 text-[10px] text-[#5d8c6e] hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {activePanel === "details" ? "Less ↑" : "Details ↓"}
            </button>
          </div>

          {/* Details panel */}
          {activePanel === "details" && (
            <div className="mt-3 pt-3 border-t border-[#1e3527] space-y-2.5">
              <PurityBar score={purityScore} />
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
              {description && (
                <p className="text-[11px] text-[#9ec9ad] leading-relaxed line-clamp-2">{description}</p>
              )}
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

          {/* ── Trust signal row: Lab Data + Reviews ──────────────────────── */}
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-[#1e3527]">
            {/* Lab data toggle */}
            <button
              onClick={() => toggle("lab")}
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors flex-1 ${
                activePanel === "lab"
                  ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50"
                  : hasNoLab
                  ? "bg-red-900/20 text-red-400 border border-red-800/30 hover:bg-red-900/30"
                  : hasVerifiedLab
                  ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/30 hover:bg-emerald-900/30"
                  : "bg-amber-900/20 text-amber-400 border border-amber-800/30 hover:bg-amber-900/30"
              }`}
            >
              {hasVerifiedLab && (
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {hasNoLab && "⚠️ "}
              {hasVerifiedLab ? "Lab Verified" : hasNoLab ? "No COA" : "COA Info"}
              <span className="ml-auto">{activePanel === "lab" ? "↑" : "↓"}</span>
            </button>

            {/* Reviews toggle */}
            <button
              onClick={() => toggle("reviews")}
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors flex-1 ${
                activePanel === "reviews"
                  ? "bg-amber-900/40 text-amber-300 border border-amber-700/50"
                  : "bg-[#0d1f14] text-[#5d8c6e] border border-[#1e3527] hover:text-[#9ec9ad] hover:border-[#2a4535]"
              }`}
            >
              <svg className="w-3 h-3 shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {reviewAggregate ? `${reviewAggregate.avg} (${reviewAggregate.count})` : "Reviews"}
              <span className="ml-auto">{activePanel === "reviews" ? "↑" : "↓"}</span>
            </button>
          </div>

          {/* Lab data panel */}
          {activePanel === "lab" && <LabDataPanel productId={product.id} />}

          {/* Reviews panel */}
          {activePanel === "reviews" && (
            <ReviewsPanel productId={product.id} affiliateUrl={affiliateUrl} />
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
          <p className="text-[9px] text-[#5d8c6e] text-center mt-1.5">
            Price verified April 2026. Confirm at checkout.
          </p>
        </div>
      </div>
    </>
  );
}
