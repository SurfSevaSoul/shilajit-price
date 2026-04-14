"use client";

import { useState } from "react";
import Link from "next/link";
import { REVIEWS, REVIEWS_DISCLAIMER, SOURCE_COLORS, SOURCE_LABELS, ReviewSource } from "../data/reviews";

const USE_CASES = ["All", "energy", "testosterone", "cognitive", "general wellness"] as const;
const BRANDS = ["All", "Black Lotus Shilajit", "Pure Himalayan Shilajit"] as const;
const SOURCES: (ReviewSource | "all")[] = ["all", "amazon", "brand", "reddit"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= rating ? "text-amber-400" : "text-[#2a4535]"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [brandFilter, setBrandFilter] = useState<string>("All");
  const [sourceFilter, setSourceFilter] = useState<ReviewSource | "all">("all");
  const [useCaseFilter, setUseCaseFilter] = useState<string>("All");
  const [minRating, setMinRating] = useState(0);

  const filtered = REVIEWS.filter((r) => {
    if (brandFilter !== "All" && r.sourceName !== brandFilter) return false;
    if (sourceFilter !== "all" && r.source !== sourceFilter) return false;
    if (useCaseFilter !== "All" && !(r.useCase ?? []).includes(useCaseFilter)) return false;
    if (r.rating < minRating) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0d1f14]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <Link href="/#deals" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Deals</Link>
            <Link href="/compare" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Compare</Link>
            <Link href="/blog" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Blog</Link>
            <Link href="/lab-data" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Lab Data</Link>
            <Link href="/reviews" className="text-emerald-400 font-semibold">Reviews</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-xs text-[#5d8c6e] mb-6">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <span className="text-[#9ec9ad]">Reviews</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-[#e8f4ec] mb-3">
            Real Shilajit Reviews — Aggregated from Brand Sites &amp; Community
          </h1>
          <p className="text-[#9ec9ad] leading-relaxed max-w-2xl mb-4">
            Reviews collected from verified external sources including brand websites and online communities. All reviews attributed to their original source.
          </p>

          {/* Disclaimer */}
          <div className="bg-[#182b1f] border border-amber-800/30 rounded-xl p-4">
            <p className="text-xs text-[#9ec9ad] leading-relaxed">
              <span className="font-bold text-amber-400">Disclaimer: </span>
              {REVIEWS_DISCLAIMER}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Sidebar filters */}
          <aside className="w-full lg:w-56 shrink-0">
            <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4 space-y-5 sticky top-20">
              <h3 className="text-xs font-bold text-[#5d8c6e] uppercase tracking-widest">Filters</h3>

              {/* Brand */}
              <div>
                <p className="text-[10px] font-semibold text-[#5d8c6e] uppercase tracking-widest mb-2">Brand</p>
                <div className="space-y-1">
                  {BRANDS.map((b) => (
                    <button
                      key={b}
                      onClick={() => setBrandFilter(b)}
                      className={`block w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors ${
                        brandFilter === b
                          ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50"
                          : "text-[#9ec9ad] hover:text-emerald-400 hover:bg-[#1e3527]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Source */}
              <div>
                <p className="text-[10px] font-semibold text-[#5d8c6e] uppercase tracking-widest mb-2">Source</p>
                <div className="space-y-1">
                  {SOURCES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSourceFilter(s)}
                      className={`block w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors capitalize ${
                        sourceFilter === s
                          ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50"
                          : "text-[#9ec9ad] hover:text-emerald-400 hover:bg-[#1e3527]"
                      }`}
                    >
                      {s === "all" ? "All Sources" : SOURCE_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Use case */}
              <div>
                <p className="text-[10px] font-semibold text-[#5d8c6e] uppercase tracking-widest mb-2">Use Case</p>
                <div className="space-y-1">
                  {USE_CASES.map((u) => (
                    <button
                      key={u}
                      onClick={() => setUseCaseFilter(u)}
                      className={`block w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors capitalize ${
                        useCaseFilter === u
                          ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50"
                          : "text-[#9ec9ad] hover:text-emerald-400 hover:bg-[#1e3527]"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Min rating */}
              <div>
                <p className="text-[10px] font-semibold text-[#5d8c6e] uppercase tracking-widest mb-2">Min Rating</p>
                <div className="space-y-1">
                  {[0, 4, 5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`block w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors ${
                        minRating === r
                          ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50"
                          : "text-[#9ec9ad] hover:text-emerald-400 hover:bg-[#1e3527]"
                      }`}
                    >
                      {r === 0 ? "All Ratings" : r === 4 ? "4★ and up" : "5★ only"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit experience */}
              <div className="pt-2 border-t border-[#2a4535]">
                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-3 rounded-lg bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-700/40 text-emerald-400 text-[11px] font-semibold transition-colors"
                >
                  Submit Your Experience →
                </a>
                <p className="text-[9px] text-[#5d8c6e] mt-1.5 text-center">Share your shilajit experience</p>
              </div>
            </div>
          </aside>

          {/* Reviews grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[#5d8c6e]">
                Showing <span className="text-[#9ec9ad] font-semibold">{filtered.length}</span> reviews
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-[#5d8c6e]">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-sm">No reviews match your filters.</p>
                <button
                  onClick={() => { setBrandFilter("All"); setSourceFilter("all"); setUseCaseFilter("All"); setMinRating(0); }}
                  className="mt-4 px-4 py-2 rounded-lg bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-700/40 text-emerald-400 text-xs font-semibold transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((review) => (
                  <div key={review.id} className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-5 hover:border-emerald-600/30 transition-colors">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-700/40 flex items-center justify-center text-sm font-black text-emerald-400">
                          {review.reviewer.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#e8f4ec]">{review.reviewer}</p>
                          <p className="text-[10px] text-[#5d8c6e]">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <StarRating rating={review.rating} />
                        <a
                          href={review.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[9px] font-bold ${SOURCE_COLORS[review.source]} hover:opacity-80 transition-opacity`}
                        >
                          Via {SOURCE_LABELS[review.source]}
                          {review.verifiedPurchase && " ✓ Verified"}
                        </a>
                      </div>
                    </div>

                    <blockquote className="text-sm text-[#9ec9ad] leading-relaxed italic border-l-2 border-emerald-700/40 pl-3">
                      &quot;{review.text}&quot;
                    </blockquote>

                    {review.useCase && review.useCase.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {review.useCase.map((uc) => (
                          <span key={uc} className="px-2 py-0.5 rounded-full bg-[#0d1f14] border border-[#2a4535] text-[#5d8c6e] text-[10px] capitalize">
                            {uc}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Full disclaimer */}
            <div className="mt-8 bg-[#182b1f] border border-[#2a4535] rounded-xl p-4">
              <p className="text-xs text-[#5d8c6e] leading-relaxed">{REVIEWS_DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
