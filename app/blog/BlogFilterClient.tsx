"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { BlogPost } from "../data/blog";

// ── Shared helpers (mirrored from page.tsx) ────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  Comparison: "bg-blue-50 border-blue-200 text-blue-700",
  Science: "bg-purple-50 border-purple-200 text-purple-700",
  Safety: "bg-red-50 border-red-200 text-red-700",
  Rankings: "bg-amber-50 border-amber-200 text-amber-700",
  Research: "bg-teal-50 border-teal-200 text-teal-700",
  "Buying Guide": "bg-emerald-50 border-emerald-200 text-emerald-700",
  "Price Analysis": "bg-green-50 border-green-200 text-green-700",
  "Health Benefits": "bg-rose-50 border-rose-200 text-rose-700",
  "Price Comparison": "bg-cyan-50 border-cyan-200 text-cyan-700",
  "Brand Reviews": "bg-violet-50 border-violet-200 text-violet-700",
  Origins: "bg-orange-50 border-orange-200 text-orange-700",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function BlogFilterClient({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Derive unique categories in their natural order of appearance
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const p of posts) {
      if (!seen.has(p.category)) {
        seen.add(p.category);
        result.push(p.category);
      }
    }
    return result.sort();
  }, [posts]);

  // Apply both filters simultaneously
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [posts, query, activeCategory]);

  const isFiltered = query.trim() !== "" || activeCategory !== "All";

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Search bar ─────────────────────────────────────────────────────── */}
        <div className="mb-4">
          <div className="relative">
            {/* Search icon */}
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7BA899] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides, reviews, comparisons…"
              aria-label="Search blog posts"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#E8F5EC] border border-[#182B1F]/20 text-[#0D1F14] text-sm placeholder:text-[#7BA899] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-colors"
            />
            {/* Clear button */}
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#7BA899]/30 hover:bg-[#10B981]/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-3 h-3 text-[#4A6358]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ── Category pills ─────────────────────────────────────────────────── */}
        <div
          className="flex gap-2 overflow-x-auto sm:flex-wrap pb-1 mb-6 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="group"
          aria-label="Filter by category"
        >
          {/* All pill */}
          <button
            onClick={() => setActiveCategory("All")}
            className={`shrink-0 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
              activeCategory === "All"
                ? "bg-[#10B981] border-[#10B981] text-white shadow-sm"
                : "bg-white border-[#D1EDD8] text-[#4A6358] hover:border-[#9EC9AD] hover:text-[#0D1F14]"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#10B981] border-[#10B981] text-white shadow-sm"
                  : "bg-white border-[#D1EDD8] text-[#4A6358] hover:border-[#9EC9AD] hover:text-[#0D1F14]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Section header + count ─────────────────────────────────────────── */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">
            {isFiltered ? "Results" : "All Articles"}
          </span>
          <div className="flex-1 h-px bg-[#D1EDD8]" />
          <span className="text-[10px] text-[#7BA899]">
            Showing{" "}
            <span className="font-semibold text-[#0D1F14]">{filtered.length}</span>{" "}
            of{" "}
            <span className="font-semibold text-[#0D1F14]">{posts.length}</span>{" "}
            posts
          </span>
        </div>

        {/* ── No results ─────────────────────────────────────────────────────── */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#F0FAF4] border border-[#D1EDD8] flex items-center justify-center text-2xl mb-4">
              🔍
            </div>
            <p className="text-sm font-semibold text-[#0D1F14] mb-1">No results found</p>
            <p className="text-xs text-[#7BA899] mb-4 max-w-xs">
              No posts match &ldquo;{query}&rdquo;
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="px-4 py-2 rounded-full bg-[#10B981] text-white text-xs font-semibold hover:bg-[#0ea572] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ── Post grid ──────────────────────────────────────────────────────── */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-[#D1EDD8] hover:border-[#9EC9AD] rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-emerald-100"
              >
                <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0FAF4] border border-[#D1EDD8] flex items-center justify-center text-xl shrink-0 group-hover:border-[#9EC9AD] transition-colors">
                    {post.coverEmoji}
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${
                      CATEGORY_COLORS[post.category] ??
                      "bg-emerald-50 border-emerald-200 text-emerald-700"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="px-5 pb-4 flex flex-col flex-1">
                  <h2 className="text-sm font-bold text-[#0D1F14] group-hover:text-[#10B981] transition-colors mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#0D1F14] leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded bg-[#F0FAF4] border border-[#D1EDD8] text-[#7BA899] text-[9px] font-semibold uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#7BA899] pt-3 border-t border-[#D1EDD8]">
                    <span>{formatDate(post.publishedAt)}</span>
                    <div className="flex items-center gap-1 text-[#10B981] group-hover:gap-1.5 transition-all">
                      <span className="font-semibold">{post.readingTimeMin} min</span>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
