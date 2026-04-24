"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, Tier, TIER_DESCRIPTIONS } from "../data/products";
import { getLabEntry } from "../data/lab-data";
import { getAggregateRating } from "../data/reviews";
import LabDataPanel from "./LabDataPanel";
import ReviewsPanel from "./ReviewsPanel";

interface DealCardProps {
  product: Product;
}

type ActivePanel = "none" | "details" | "lab" | "reviews";

const TIER_EDITORIAL_SCORE: Record<Tier, number> = { S: 4.9, A: 4.5, B: 4.0, C: 3.5, D: 3.0 };

// Pill-style tier badges for the light design
const TIER_PILL: Record<Tier, string> = {
  S: "bg-amber-100 text-amber-800 ring-1 ring-amber-300",
  A: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300",
  B: "bg-blue-100 text-blue-800 ring-1 ring-blue-300",
  C: "bg-slate-100 text-slate-600 ring-1 ring-slate-300",
  D: "bg-red-100 text-red-700 ring-1 ring-red-300",
};

function buildProductSchema(product: Product) {
  const url = product.affiliateUrl !== "#" ? product.affiliateUrl : "https://www.shilajitprice.com";
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.vendor} ${product.productName}`,
    description: product.description ?? `${product.category} shilajit supplement from ${product.vendor}`,
    image: "https://www.shilajitprice.com/logo.png",
    brand: { "@type": "Brand", name: product.vendor },
    category: "shilajit",
    offers: {
      "@type": "Offer",
      price: product.priceUsd.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url,
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: product.guaranteeDays ?? 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
        url: "https://www.shilajitprice.com/disclaimer",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: product.freeShipping ? "0" : "5.99",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 3,
            maxValue: 7,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (product.amazonRating ?? TIER_EDITORIAL_SCORE[product.tier]).toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount: product.amazonReviewCount ?? 3,
      description: product.amazonReviewCount
        ? `${product.amazonReviewCount} Amazon customer reviews`
        : "ShilajitPrice.com editorial quality score based on COA, fulvic acid content, sourcing, and price analysis.",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "ShilajitPrice Editorial Team",
      },
      reviewBody: product.description ?? `${product.vendor} ${product.productName} reviewed by the ShilajitPrice editorial team based on COA data, lab results, and price analysis.`,
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
    score >= 8 ? "text-emerald-600" : score >= 6 ? "text-blue-600" : score >= 4 ? "text-amber-600" : "text-red-600";
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-[#7BA899] font-semibold uppercase tracking-wider w-10 shrink-0">Purity</span>
      <div className="flex-1 h-1.5 rounded-full bg-[#D1EDD8] overflow-hidden">
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
    gmpCertified, origin, dbpVerified, imageUrl,
  } = product;

  const isAffiliate = affiliateUrl !== "#";
  const productSchema = buildProductSchema(product);

  const labEntry = getLabEntry(product.id);
  const reviewAggregate = getAggregateRating(product.id);
  const hasVerifiedLab = labEntry.coaStatus === "verified";
  const hasNoLab = labEntry.coaStatus === "not-available";

  const allBadges = [
    { label: hasVerifiedLab ? "✓ COA" : "No COA", cls: hasVerifiedLab ? "bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700" : "bg-slate-100 ring-1 ring-slate-300 text-slate-500" },
    fulvicAcidPct !== undefined
      ? { label: `⚗️ ${fulvicAcidPct}% FA`, cls: "bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700" }
      : { label: "FA: Not Disclosed", cls: "bg-slate-100 ring-1 ring-slate-300 text-slate-500" },
    dbpVerified && { label: "DBP ✓", cls: "bg-cyan-50 ring-1 ring-cyan-200 text-cyan-700" },
    thirdPartyTested && { label: "3rd Party", cls: "bg-purple-50 ring-1 ring-purple-200 text-purple-700" },
    heavyMetalsTested && { label: "HM Tested", cls: "bg-blue-50 ring-1 ring-blue-200 text-blue-700" },
    gmpCertified && { label: "GMP", cls: "bg-teal-50 ring-1 ring-teal-200 text-teal-700" },
    freeShipping && { label: "Free Ship", cls: "bg-amber-50 ring-1 ring-amber-200 text-amber-700" },
  ].filter(Boolean) as { label: string; cls: string }[];

  const topBadges = allBadges.slice(0, 2);
  const extraBadges = allBadges.slice(2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div
        className={`relative flex flex-col rounded-2xl border-2 transition-all duration-200 overflow-hidden group shadow-sm
          ${featured
            ? "border-[#10B981] shadow-md shadow-emerald-100"
            : "border-[#D1EDD8] hover:border-[#9EC9AD]"
          }
          bg-white hover:shadow-md`}
      >
        {/* Featured ribbon */}
        {featured && (
          <div className="absolute top-0 right-0 bg-[#10B981] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-bl-xl tracking-wide uppercase z-10">
            Featured
          </div>
        )}

        {/* Product image — full-bleed, tall, contain with generous padding */}
        <div className="relative w-full h-56 bg-[#E8F5EC] flex items-center justify-center p-5 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${vendor} ${productName}`}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, 280px"
              className="object-contain p-5"
            />
          ) : (
            <span className="text-6xl font-extrabold text-[#10B981]/30">{vendor.charAt(0)}</span>
          )}
        </div>

        <div className="p-4 flex flex-col gap-0 flex-1">
          {/* Row 1: Tier badge + Vendor + Product name */}
          <div className="flex items-start gap-2.5 mb-3">
            <div
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold ${TIER_PILL[tier]}`}
              title={TIER_DESCRIPTIONS[tier]}
            >
              {tier}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest truncate leading-none mb-0.5">
                {vendor}
              </p>
              <h3 className="text-sm font-semibold text-[#0D1F14] leading-snug line-clamp-1">
                {productName}
              </h3>
              {origin && origin !== "Unknown" && (
                <p className="text-[9px] text-[#7BA899] mt-0.5 flex items-center gap-0.5">
                  <span>📍</span>{origin}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Pricing */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-extrabold text-[#0D1F14] tabular-nums" style={{ fontFamily: "var(--font-jakarta)" }}>${priceUsd.toFixed(2)}</span>
            <span className="text-[10px] text-[#7BA899]">/ {weightGrams}g</span>
            <span className="ml-auto text-sm font-bold text-[#10B981] tabular-nums">
              ${pricePerGram.toFixed(2)}
              <span className="text-[10px] text-[#7BA899] font-normal">/g</span>
            </span>
          </div>

          {/* Row 3: Top badges + details toggle */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1">
              {topBadges.map((b) => (
                <span
                  key={b.label}
                  className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold ${b.cls}`}
                >
                  {b.label}
                </span>
              ))}
              {badge && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 ring-1 ring-amber-200 text-amber-700">
                  ★ {badge}
                </span>
              )}
            </div>
            <button
              onClick={() => toggle("details")}
              className="shrink-0 text-[10px] text-[#7BA899] hover:text-[#0D1F14] transition-colors whitespace-nowrap font-medium"
            >
              {activePanel === "details" ? "Less ↑" : "Details ↓"}
            </button>
          </div>

          {/* Details panel */}
          {activePanel === "details" && (
            <div className="mt-3 pt-3 border-t border-[#D1EDD8] space-y-2.5">
              <PurityBar score={purityScore} />
              <div className="flex flex-wrap gap-1">
                {fulvicAcidPct !== undefined ? (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[10px] font-bold">
                    ⚗️ {fulvicAcidPct}% FA
                  </span>
                ) : (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-slate-100 ring-1 ring-slate-300 text-slate-500 text-[10px] font-bold">
                    FA: Not Disclosed
                  </span>
                )}
                {sourceLocation && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-blue-50 ring-1 ring-blue-200 text-blue-700 text-[10px]">
                    🏔️ {sourceLocation}
                  </span>
                )}
                {amazonRating !== undefined && (
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-50 ring-1 ring-amber-200 text-amber-700 text-[10px]">
                    ★ {amazonRating.toFixed(1)}
                    {amazonReviewCount !== undefined && (
                      <span className="text-[#7BA899] ml-0.5">
                        ({amazonReviewCount >= 1000 ? `${(amazonReviewCount / 1000).toFixed(1)}k` : amazonReviewCount})
                      </span>
                    )}
                  </span>
                )}
                {costPerServing > 0 && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-[#F0FAF4] ring-1 ring-[#D1EDD8] text-[#4A6358] text-[10px]">
                    💊 ${costPerServing.toFixed(2)}/serving
                  </span>
                )}
              </div>
              {description && (
                <p className="text-[11px] text-[#4A6358] leading-relaxed line-clamp-2">{description}</p>
              )}
              {extraBadges.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {extraBadges.map((b) => (
                    <span
                      key={b.label}
                      className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium ${b.cls}`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Trust signal row: Lab Data + Reviews ──────────────────────── */}
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-[#D1EDD8]">
            {/* Lab data toggle */}
            <button
              onClick={() => toggle("lab")}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold transition-colors flex-1 ${
                activePanel === "lab"
                  ? "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300"
                  : hasNoLab
                  ? "bg-red-50 text-red-600 ring-1 ring-red-200 hover:bg-red-100"
                  : hasVerifiedLab
                  ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-100"
                  : "bg-amber-50 text-amber-700 ring-1 ring-amber-200 hover:bg-amber-100"
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
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold transition-colors flex-1 ${
                activePanel === "reviews"
                  ? "bg-amber-100 text-amber-800 ring-1 ring-amber-300"
                  : "bg-[#F0FAF4] text-[#7BA899] ring-1 ring-[#D1EDD8] hover:text-[#4A6358] hover:ring-[#9EC9AD]"
              }`}
            >
              <svg className="w-3 h-3 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="px-4 pb-4">
          {isAffiliate ? (
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`block w-full text-center py-2.5 px-3 rounded-full text-xs font-bold transition-all duration-200
                ${featured
                  ? "bg-[#182B1F] hover:bg-[#10B981] text-white shadow-sm"
                  : "border-2 border-[#182B1F] text-[#182B1F] hover:bg-[#182B1F] hover:text-white"
                }`}
            >
              {featured ? "View Deal →" : "Check Price →"}
            </a>
          ) : (
            <span className="block w-full text-center py-2.5 px-3 rounded-full text-xs font-medium bg-[#F0FAF4] text-[#7BA899] border border-[#D1EDD8] cursor-default">
              Check Price →
            </span>
          )}
          <p className="text-[9px] text-[#7BA899] text-center mt-1.5">
            Price verified April 2026. Confirm at checkout.
          </p>
        </div>
      </div>
    </>
  );
}
