"use client";

import { useState, useMemo } from "react";
import { PRODUCTS, Category, CATEGORIES, Tier, TIER_COLORS } from "../data/products";
import Footer from "../components/Footer";

type SortKey =
  | "vendor"
  | "tier"
  | "purityScore"
  | "priceUsd"
  | "pricePerGram"
  | "costPerServing"
  | "weightGrams"
  | "fulvicAcidPct"
  | "amazonRating"
  | "amazonReviewCount";

const BASE_URL = "https://shilajitprice.com";

const TIER_ORDER: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3, D: 4 };

const compareSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shilajit Comparison Table — All Products Side by Side",
  description:
    "Full sortable comparison table of 55+ shilajit products. Compare price per gram, fulvic acid %, purity score, COA, sourcing, and more.",
  url: `${BASE_URL}/compare`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Comparison Table", item: `${BASE_URL}/compare` },
    ],
  },
};

function SortIcon({ active, dir }: { active: boolean; dir: "asc" | "desc" }) {
  if (!active) return <span className="text-[#2a4535] ml-1">↕</span>;
  return <span className="text-emerald-400 ml-1">{dir === "asc" ? "↑" : "↓"}</span>;
}

function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span className={`inline-flex items-center justify-center w-7 h-7 rounded text-xs font-black ${TIER_COLORS[tier]}`}>
      {tier}
    </span>
  );
}

function Check({ val }: { val: boolean }) {
  return val ? (
    <span className="text-emerald-400 text-sm">✓</span>
  ) : (
    <span className="text-[#2a4535] text-sm">—</span>
  );
}

export default function ComparePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sortKey, setSortKey] = useState<SortKey>("tier");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [coaOnly, setCoaOnly] = useState(false);
  const [thirdPartyOnly, setThirdPartyOnly] = useState(false);
  const [search, setSearch] = useState("");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (coaOnly && !p.coaVerified) return false;
      if (thirdPartyOnly && !p.thirdPartyTested) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!p.vendor.toLowerCase().includes(q) && !p.productName.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    list.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "vendor": cmp = a.vendor.localeCompare(b.vendor); break;
        case "tier": cmp = TIER_ORDER[a.tier] - TIER_ORDER[b.tier]; break;
        case "purityScore": cmp = a.purityScore - b.purityScore; break;
        case "priceUsd": cmp = a.priceUsd - b.priceUsd; break;
        case "pricePerGram": cmp = a.pricePerGram - b.pricePerGram; break;
        case "costPerServing": cmp = a.costPerServing - b.costPerServing; break;
        case "weightGrams": cmp = a.weightGrams - b.weightGrams; break;
        case "fulvicAcidPct": cmp = (a.fulvicAcidPct ?? 0) - (b.fulvicAcidPct ?? 0); break;
        case "amazonRating": cmp = (a.amazonRating ?? 0) - (b.amazonRating ?? 0); break;
        case "amazonReviewCount": cmp = (a.amazonReviewCount ?? 0) - (b.amazonReviewCount ?? 0); break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return list;
  }, [activeCategory, sortKey, sortDir, coaOnly, thirdPartyOnly, search]);

  const Th = ({ label, k }: { label: string; k: SortKey }) => (
    <th
      className="px-3 py-2.5 text-left text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider cursor-pointer whitespace-nowrap hover:text-emerald-400 transition-colors select-none"
      onClick={() => handleSort(k)}
    >
      {label}
      <SortIcon active={sortKey === k} dir={sortDir} />
    </th>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1a10]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </a>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <a href="/#deals" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Cards</a>
            <a href="/compare" className="text-emerald-400 font-semibold">Full Table</a>
            <a href="/blog" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Blog</a>
          </div>
          <a
            href="https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
          >
            🏆 Our #1 Pick
          </a>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <nav className="text-[11px] text-[#5d8c6e] mb-2">
            <a href="/" className="hover:text-emerald-400">Home</a>
            <span className="mx-1.5">›</span>
            <span className="text-[#9ec9ad]">Comparison Table</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-black text-[#e8f4ec] mb-2">
            Shilajit Comparison Table
          </h1>
          <p className="text-sm text-[#5d8c6e] max-w-2xl">
            {PRODUCTS.length} products compared side by side. Click any column header to sort. Filter by category, COA, and 3rd-party testing.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5 flex-wrap">
          {/* Search */}
          <input
            type="search"
            placeholder="Search brand or product…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#182b1f] border border-[#2a4535] text-[#e8f4ec] text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 w-full sm:w-56 placeholder-[#3a6048]"
          />

          {/* Category pills */}
          <div className="flex gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150
                  ${activeCategory === cat
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "bg-[#182b1f] border-[#2a4535] text-[#5d8c6e] hover:border-emerald-700 hover:text-[#9ec9ad]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quality toggles */}
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => setCoaOnly((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150
                ${coaOnly ? "bg-emerald-500 border-emerald-500 text-white" : "bg-[#182b1f] border-[#2a4535] text-[#5d8c6e] hover:border-emerald-700"}`}
            >
              📋 COA Only
            </button>
            <button
              onClick={() => setThirdPartyOnly((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150
                ${thirdPartyOnly ? "bg-purple-600 border-purple-600 text-white" : "bg-[#182b1f] border-[#2a4535] text-[#5d8c6e] hover:border-purple-700"}`}
            >
              🔬 3rd Party Only
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="text-xs text-[#5d8c6e] mb-3">
          Showing <span className="text-[#9ec9ad] font-semibold">{filtered.length}</span> of {PRODUCTS.length} products
        </div>

        {/* Table */}
        <div className="rounded-xl border border-[#2a4535] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#182b1f] border-b border-[#2a4535]">
                  <Th label="Brand / Product" k="vendor" />
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider whitespace-nowrap">
                    Category
                  </th>
                  <Th label="Tier" k="tier" />
                  <Th label="Purity" k="purityScore" />
                  <Th label="Price" k="priceUsd" />
                  <Th label="$/gram" k="pricePerGram" />
                  <Th label="$/serving" k="costPerServing" />
                  <Th label="Size" k="weightGrams" />
                  <Th label="Fulvic %" k="fulvicAcidPct" />
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider whitespace-nowrap">
                    Source
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider">
                    COA
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider">
                    3rd Party
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider whitespace-nowrap">
                    HM Tested
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider">
                    GMP
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider whitespace-nowrap">
                    Free Ship
                  </th>
                  <Th label="Rating" k="amazonRating" />
                  <Th label="Reviews" k="amazonReviewCount" />
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-[#5d8c6e] uppercase tracking-wider">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`border-b border-[#1e3527] transition-colors hover:bg-[#182b1f]
                      ${i % 2 === 0 ? "bg-[#0d1f14]" : "bg-[#0f2316]"}
                      ${p.featured ? "ring-1 ring-inset ring-emerald-700/30" : ""}`}
                  >
                    {/* Brand + product */}
                    <td className="px-3 py-2.5 min-w-[200px]">
                      <div className="flex items-start gap-1.5">
                        {p.featured && (
                          <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" title="Featured" />
                        )}
                        <div>
                          <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{p.vendor}</div>
                          <div className="text-xs text-[#e8f4ec] leading-snug">{p.productName}</div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-3 py-2.5">
                      <span className="text-[10px] text-[#5d8c6e] bg-[#0a1a10] border border-[#2a4535] px-1.5 py-0.5 rounded">
                        {p.category}
                      </span>
                    </td>

                    {/* Tier */}
                    <td className="px-3 py-2.5">
                      <TierBadge tier={p.tier} />
                    </td>

                    {/* Purity score */}
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-12 h-1.5 rounded-full bg-[#0a1a10] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${p.purityScore >= 8 ? "bg-emerald-500" : p.purityScore >= 6 ? "bg-blue-500" : p.purityScore >= 4 ? "bg-amber-500" : "bg-red-500"}`}
                            style={{ width: `${(p.purityScore / 10) * 100}%` }}
                          />
                        </div>
                        <span className={`text-[11px] font-bold tabular-nums ${p.purityScore >= 8 ? "text-emerald-400" : p.purityScore >= 6 ? "text-blue-400" : p.purityScore >= 4 ? "text-amber-400" : "text-red-400"}`}>
                          {p.purityScore}/10
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-3 py-2.5 font-semibold text-[#e8f4ec] tabular-nums whitespace-nowrap">
                      ${p.priceUsd.toFixed(2)}
                    </td>

                    {/* $/gram */}
                    <td className="px-3 py-2.5 tabular-nums text-emerald-400 font-semibold whitespace-nowrap">
                      ${p.pricePerGram.toFixed(2)}
                    </td>

                    {/* $/serving */}
                    <td className="px-3 py-2.5 tabular-nums text-[#9ec9ad] whitespace-nowrap">
                      {p.costPerServing > 0 ? `$${p.costPerServing.toFixed(2)}` : "—"}
                    </td>

                    {/* Size */}
                    <td className="px-3 py-2.5 tabular-nums text-[#5d8c6e] whitespace-nowrap">
                      {p.weightGrams}g
                    </td>

                    {/* Fulvic % */}
                    <td className="px-3 py-2.5 tabular-nums whitespace-nowrap">
                      {p.fulvicAcidPct !== undefined ? (
                        <span className="text-emerald-300 font-bold">{p.fulvicAcidPct}%</span>
                      ) : (
                        <span className="text-[#2a4535]">—</span>
                      )}
                    </td>

                    {/* Source */}
                    <td className="px-3 py-2.5 text-[11px] text-[#5d8c6e] whitespace-nowrap">
                      {p.sourceLocation ?? "—"}
                    </td>

                    {/* COA */}
                    <td className="px-3 py-2.5 text-center"><Check val={p.coaVerified} /></td>

                    {/* 3rd Party */}
                    <td className="px-3 py-2.5 text-center"><Check val={p.thirdPartyTested} /></td>

                    {/* HM Tested */}
                    <td className="px-3 py-2.5 text-center"><Check val={p.heavyMetalsTested} /></td>

                    {/* GMP */}
                    <td className="px-3 py-2.5 text-center"><Check val={p.gmpCertified} /></td>

                    {/* Free Ship */}
                    <td className="px-3 py-2.5 text-center"><Check val={p.freeShipping} /></td>

                    {/* Rating */}
                    <td className="px-3 py-2.5 tabular-nums whitespace-nowrap">
                      {p.amazonRating !== undefined ? (
                        <span className="text-amber-400 font-semibold">★ {p.amazonRating.toFixed(1)}</span>
                      ) : (
                        <span className="text-[#2a4535]">—</span>
                      )}
                    </td>

                    {/* Reviews */}
                    <td className="px-3 py-2.5 tabular-nums text-[#5d8c6e] whitespace-nowrap">
                      {p.amazonReviewCount !== undefined
                        ? p.amazonReviewCount >= 1000
                          ? `${(p.amazonReviewCount / 1000).toFixed(1)}k`
                          : p.amazonReviewCount.toLocaleString()
                        : "—"}
                    </td>

                    {/* Link */}
                    <td className="px-3 py-2.5">
                      {p.affiliateUrl !== "#" ? (
                        <a
                          href={p.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className={`inline-block px-2.5 py-1 rounded text-[10px] font-semibold transition-colors whitespace-nowrap
                            ${p.featured
                              ? "bg-emerald-500 hover:bg-emerald-400 text-white"
                              : "bg-[#182b1f] hover:bg-[#1e3527] text-emerald-400 border border-emerald-700/50 hover:border-emerald-500/60"
                            }`}
                        >
                          {p.featured ? "View Deal →" : "Check Price →"}
                        </a>
                      ) : (
                        <span className="text-[#2a4535] text-[10px]">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-[#5d8c6e]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Featured = affiliate partner
          </div>
          <div>✓ = confirmed   —  = not confirmed / unavailable</div>
          <div>Purity Score = 1–10 based on COA, testing, fulvic acid %, and sourcing transparency</div>
          <div>Prices may vary — click "Check Price" for current listing</div>
        </div>

        {/* Methodology note */}
        <div className="mt-6 p-4 rounded-xl bg-[#182b1f] border border-[#2a4535] text-[11px] text-[#5d8c6e] leading-relaxed">
          <strong className="text-[#9ec9ad]">How we score:</strong>{" "}
          Tier (S–D) is assigned based on COA availability, fulvic acid content (&gt;60% = higher tier), source disclosure, third-party testing, and price competitiveness.
          Purity Score (1–10) weights COA (+2), third-party lab testing (+2), heavy metals testing (+1.5), known source (+1.5), fulvic acid % (&gt;70%: +2, &gt;50%: +1), and GMP certification (+1).{" "}
          <a href="/about" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">Full methodology →</a>
        </div>

        {/* Affiliate disclosure */}
        <p className="mt-4 text-[10px] text-[#3a6048]">
          Some links are affiliate links. We may earn a commission if you purchase — at no extra cost to you. Rankings are independent of affiliate relationships.{" "}
          <a href="/disclaimer" className="hover:text-[#5d8c6e] underline underline-offset-2">Full disclosure →</a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
