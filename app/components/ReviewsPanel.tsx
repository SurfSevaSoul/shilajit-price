"use client";

import { getProductReviews, getAggregateRating, SOURCE_COLORS, SOURCE_LABELS, REVIEWS_DISCLAIMER } from "../data/reviews";

interface ReviewsPanelProps {
  productId: string;
  affiliateUrl?: string;
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const sz = size === "xs" ? "w-2.5 h-2.5" : "w-3 h-3";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`${sz} ${i <= rating ? "text-amber-400" : "text-[#2a4535]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function truncate(text: string, maxWords = 50): string {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

export default function ReviewsPanel({ productId, affiliateUrl }: ReviewsPanelProps) {
  const reviews = getProductReviews(productId);
  const aggregate = getAggregateRating(productId);

  if (reviews.length === 0) {
    return (
      <div className="mt-3 pt-3 border-t border-[#1e3527]">
        <p className="text-[11px] text-[#5d8c6e] text-center py-3">
          No aggregated reviews available for this product yet.
        </p>
        {affiliateUrl && affiliateUrl !== "#" && (
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center text-[10px] text-emerald-400 hover:text-emerald-300 mt-1"
          >
            Check reviews on retailer site →
          </a>
        )}
        <p className="text-[9px] text-[#5d8c6e] mt-3 leading-relaxed border-t border-[#1e3527] pt-2">
          {REVIEWS_DISCLAIMER}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3 pt-3 border-t border-[#1e3527] space-y-3">
      {/* Aggregate header */}
      {aggregate && (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <StarRating rating={Math.round(aggregate.avg)} />
            <span className="text-sm font-black text-[#e8f4ec]">{aggregate.avg.toFixed(1)}</span>
          </div>
          <span className="text-[10px] text-[#5d8c6e]">
            {aggregate.count} review{aggregate.count !== 1 ? "s" : ""} from brand sites &amp; community
          </span>
        </div>
      )}

      {/* Individual reviews */}
      <div className="space-y-2.5">
        {reviews.slice(0, 3).map((review) => (
          <div key={review.id} className="bg-[#0d1f14] border border-[#1e3527] rounded-lg p-3 space-y-1.5">
            {/* Header row */}
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <StarRating rating={review.rating} size="xs" />
                <span className="text-[11px] font-semibold text-[#e8f4ec]">{review.reviewer}</span>
                <span className="text-[10px] text-[#5d8c6e]">{review.date}</span>
              </div>
              <a
                href={review.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[9px] font-bold ${SOURCE_COLORS[review.source]} hover:opacity-80 transition-opacity`}
              >
                Via {SOURCE_LABELS[review.source]}
                {review.verifiedPurchase && " ✓"}
              </a>
            </div>

            {/* Review text */}
            <p className="text-[11px] text-[#9ec9ad] leading-relaxed">
              &quot;{truncate(review.text, 40)}&quot;
            </p>
          </div>
        ))}
      </div>

      {/* See more link */}
      {reviews.length > 3 && (
        <a
          href="/reviews"
          className="block text-center text-[10px] text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          See all {reviews.length} reviews →
        </a>
      )}

      {/* Disclaimer */}
      <p className="text-[9px] text-[#5d8c6e] leading-relaxed border-t border-[#1e3527] pt-2">
        {REVIEWS_DISCLAIMER}
      </p>
    </div>
  );
}
