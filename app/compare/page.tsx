"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, Category, CATEGORIES, Tier, TIER_COLORS, Origin } from "../data/products";
import Footer from "../components/Footer";

// ── Brand selector data ────────────────────────────────────────────────────
const SELECTOR_BRANDS = [
  { slug: "black-lotus", name: "Black Lotus Shilajit", tier: "S", fa: "85%+", ppg: "$1.23/g", origin: "Altai Mountains, Siberia", coa: "Full-panel 3rd-party", gmp: true, ship: true },
  { slug: "pure-himalayan", name: "Pure Himalayan Shilajit", tier: "S", fa: "60%", ppg: "$1.33/g", origin: "Himalayas & Altai", coa: "ISO/IEC 17025 Accredited", gmp: true, ship: true },
  { slug: "natural-shilajit", name: "Natural Shilajit", tier: "S", fa: "~70%", ppg: "$2.45/g", origin: "UNESCO Altai Mountains", coa: "ICP-MS · LC-MS · FTIR", gmp: true, ship: false },
  { slug: "purblack", name: "Pürblack", tier: "A", fa: "Verified", ppg: "$3.11/g", origin: "Caucasus, Siberia, Himalayas", coa: "US pharma-grade 3rd-party", gmp: true, ship: false },
  { slug: "sayan", name: "Sayan Health", tier: "A", fa: "~32%", ppg: "$1.33/g", origin: "Altai Mountains, Siberia", coa: "ISO-accredited Lab", gmp: false, ship: true },
  { slug: "primavie", name: "PrimaVie®", tier: "A", fa: "50% (std.)", ppg: "$1.50/g", origin: "Himalayas (India)", coa: "BSCG + ISO/IEC", gmp: true, ship: true },
];

const VALID_MATCHUPS = new Set([
  "black-lotus-vs-pure-himalayan",
  "black-lotus-vs-natural-shilajit",
  "natural-shilajit-vs-pure-himalayan",
  "black-lotus-vs-sayan",
  "natural-shilajit-vs-sayan",
  "black-lotus-vs-primavie",
  "pure-himalayan-vs-primavie",
  "purblack-vs-black-lotus",
  "purblack-vs-natural-shilajit",
  "purblack-vs-pure-himalayan",
]);

function getMatchupSlug(a: string, b: string): string | null {
  const fwd = `${a}-vs-${b}`;
  const rev = `${b}-vs-${a}`;
  if (VALID_MATCHUPS.has(fwd)) return fwd;
  if (VALID_MATCHUPS.has(rev)) return rev;
  return null;
}

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
  | "amazonReviewCount"
  | "origin";

const BASE_URL = "https://www.shilajitprice.com";

const TIER_ORDER: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3, D: 4 };

const TIER_PILL: Record<Tier, string> = {
  S: "bg-amber-100 text-amber-800 ring-1 ring-amber-300",
  A: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300",
  B: "bg-blue-100 text-blue-800 ring-1 ring-blue-300",
  C: "bg-slate-100 text-slate-600 ring-1 ring-slate-300",
  D: "bg-red-100 text-red-700 ring-1 ring-red-300",
};

const compareSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shilajit Comparison Table — All Products Side by Side",
  description:
    "Full sortable comparison table of 71 shilajit products. Compare price per gram, fulvic acid %, purity score, COA, sourcing, and more.",
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
  if (!active) return <span className="text-[#D1EDD8] ml-1">↕</span>;
  return <span className="text-[#10B981] ml-1">{dir === "asc" ? "↑" : "↓"}</span>;
}

function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-extrabold ${TIER_PILL[tier]}`}>
      {tier}
    </span>
  );
}

function Check({ val }: { val: boolean }) {
  return val ? (
    <span className="text-[#10B981] text-sm font-bold">✓</span>
  ) : (
    <span className="text-[#D1EDD8] text-sm">—</span>
  );
}

export default function ComparePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sortKey, setSortKey] = useState<SortKey>("tier");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [coaOnly, setCoaOnly] = useState(false);
  const [thirdPartyOnly, setThirdPartyOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [selectorA, setSelectorA] = useState("");
  const [selectorB, setSelectorB] = useState("");

  const selectorBrandA = SELECTOR_BRANDS.find((b) => b.slug === selectorA) ?? null;
  const selectorBrandB = SELECTOR_BRANDS.find((b) => b.slug === selectorB) ?? null;
  const matchupSlug = selectorA && selectorB && selectorA !== selectorB
    ? getMatchupSlug(selectorA, selectorB)
    : null;

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
        case "origin": cmp = (a.origin ?? "Unknown").localeCompare(b.origin ?? "Unknown"); break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return list;
  }, [activeCategory, sortKey, sortDir, coaOnly, thirdPartyOnly, search]);

  const Th = ({ label, k }: { label: string; k: SortKey }) => (
    <th
      className="px-3 py-2.5 text-left text-[10px] font-bold text-[#7BA899] uppercase tracking-wider cursor-pointer whitespace-nowrap hover:text-[#10B981] transition-colors select-none"
      onClick={() => handleSort(k)}
    >
      {label}
      <SortIcon active={sortKey === k} dir={sortDir} />
    </th>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#E8F5EC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D1EDD8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-extrabold text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>ShilajitPrice</span>
            <span className="text-lg font-extrabold text-[#0D1F14]" style={{ fontFamily: "var(--font-jakarta)" }}>.com</span>
          </a>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <a href="/#deals" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Cards</a>
            <a href="/compare" className="text-[#10B981] font-semibold">Full Table</a>
            <a href="/blog" className="text-[#4A6358] hover:text-[#10B981] transition-colors">Blog</a>
          </div>
          <a
            href="https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 px-4 py-1.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white text-xs font-semibold transition-colors duration-200"
          >
            🏆 Our #1 Pick
          </a>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <nav className="text-[11px] text-[#7BA899] mb-2">
            <a href="/" className="hover:text-[#10B981] transition-colors">Home</a>
            <span className="mx-1.5">›</span>
            <span className="text-[#4A6358]">Comparison Table</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0D1F14] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
            Shilajit Comparison Table
          </h1>
          <p className="text-sm text-[#7BA899] max-w-2xl">
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
            className="bg-white border-2 border-[#D1EDD8] text-[#0D1F14] text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-[#10B981] w-full sm:w-56 placeholder-[#7BA899] transition-colors"
          />

          {/* Category pills */}
          <div className="flex gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all duration-150
                  ${activeCategory === cat
                    ? "bg-[#182B1F] border-[#182B1F] text-white"
                    : "bg-white border-[#D1EDD8] text-[#4A6358] hover:border-[#9EC9AD] hover:text-[#0D1F14]"
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
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all duration-150
                ${coaOnly ? "bg-[#182B1F] border-[#182B1F] text-white" : "bg-white border-[#D1EDD8] text-[#4A6358] hover:border-[#9EC9AD]"}`}
            >
              📋 COA Only
            </button>
            <button
              onClick={() => setThirdPartyOnly((v) => !v)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all duration-150
                ${thirdPartyOnly ? "bg-purple-600 border-purple-600 text-white" : "bg-white border-[#D1EDD8] text-[#4A6358] hover:border-purple-300"}`}
            >
              🔬 3rd Party Only
            </button>
          </div>
        </div>

        {/* Quiz CTA */}
        <div className="flex items-center justify-between gap-3 bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl px-4 py-3 mb-4 text-sm">
          <span className="text-[#4A6358]">
            Overwhelmed by options?{" "}
            <a href="/quiz" className="text-[#10B981] hover:text-[#182B1F] font-semibold transition-colors underline underline-offset-2 decoration-[#9EC9AD]">
              Take our quiz for a personalized recommendation →
            </a>
          </span>
        </div>

        {/* Brand Selector */}
        <div className="mb-6 bg-white rounded-2xl border-2 border-[#D1EDD8] p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-black text-[#0D1F14] text-sm">Quick brand comparison</h2>
            {(selectorA || selectorB) && (
              <button
                onClick={() => { setSelectorA(""); setSelectorB(""); }}
                className="text-xs text-[#4A6358] hover:text-[#0D1F14] underline underline-offset-2 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {/* Brand A */}
            <div>
              <label className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest block mb-1.5">Brand A</label>
              <select
                value={selectorA}
                onChange={(e) => setSelectorA(e.target.value)}
                className="w-full bg-[#F5F9F6] border-2 border-[#D1EDD8] text-[#0D1F14] text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-[#10B981] transition-colors"
              >
                <option value="">Select a brand…</option>
                {SELECTOR_BRANDS.filter((b) => b.slug !== selectorB).map((b) => (
                  <option key={b.slug} value={b.slug}>{b.name}</option>
                ))}
              </select>
            </div>
            {/* Brand B */}
            <div>
              <label className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest block mb-1.5">Brand B</label>
              <select
                value={selectorB}
                onChange={(e) => setSelectorB(e.target.value)}
                className="w-full bg-[#F5F9F6] border-2 border-[#D1EDD8] text-[#0D1F14] text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-[#10B981] transition-colors"
              >
                <option value="">Select a brand…</option>
                {SELECTOR_BRANDS.filter((b) => b.slug !== selectorA).map((b) => (
                  <option key={b.slug} value={b.slug}>{b.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison card — shown when both selected */}
          {selectorBrandA && selectorBrandB && (
            <div>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {[selectorBrandA, selectorBrandB].map((brand) => (
                  <div key={brand.slug} className="bg-[#F5F9F6] rounded-xl border border-[#D1EDD8] p-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded text-[10px] font-black flex items-center justify-center ${brand.tier === "S" ? "bg-amber-400 text-amber-900" : "bg-emerald-500 text-white"}`}>
                        {brand.tier}
                      </span>
                      <span className="font-bold text-[#0D1F14] text-xs">{brand.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                      <div><span className="text-[#7BA899]">Fulvic Acid</span> <strong className="text-[#0D1F14]">{brand.fa}</strong></div>
                      <div><span className="text-[#7BA899]">Price/gram</span> <strong className="text-[#10B981]">{brand.ppg}</strong></div>
                      <div><span className="text-[#7BA899]">COA</span> <strong className="text-[#0D1F14]">{brand.coa}</strong></div>
                      <div><span className="text-[#7BA899]">Origin</span> <span className="text-[#4A6358]">{brand.origin}</span></div>
                      <div><span className="text-[#7BA899]">GMP</span> <span className={brand.gmp ? "text-[#10B981] font-bold" : "text-red-500"}>{brand.gmp ? "✓" : "✗"}</span></div>
                      <div><span className="text-[#7BA899]">Free Ship</span> <span className={brand.ship ? "text-[#10B981] font-bold" : "text-red-500"}>{brand.ship ? "✓" : "✗"}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              {matchupSlug ? (
                <Link
                  href={`/compare/${matchupSlug}`}
                  className="block w-full text-center text-sm font-bold py-2.5 rounded-xl bg-[#182B1F] text-white hover:bg-[#10B981] transition-colors"
                >
                  View Full Comparison: {selectorBrandA.name} vs {selectorBrandB.name} →
                </Link>
              ) : (
                <div className="text-center text-xs text-[#7BA899] py-2">
                  Full detailed comparison not available for this pairing yet.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="text-xs text-[#7BA899] mb-3">
          Showing <span className="text-[#0D1F14] font-semibold">{filtered.length}</span> of {PRODUCTS.length} products
        </div>

        {/* Table */}
        <div className="rounded-2xl border-2 border-[#D1EDD8] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                  <Th label="Brand / Product" k="vendor" />
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-[#7BA899] uppercase tracking-wider whitespace-nowrap">
                    Category
                  </th>
                  <Th label="Tier" k="tier" />
                  <Th label="Purity" k="purityScore" />
                  <Th label="Price" k="priceUsd" />
                  <Th label="$/gram" k="pricePerGram" />
                  <Th label="$/serving" k="costPerServing" />
                  <Th label="Size" k="weightGrams" />
                  <Th label="Fulvic %" k="fulvicAcidPct" />
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-[#7BA899] uppercase tracking-wider whitespace-nowrap">
                    Source
                  </th>
                  <Th label="Origin" k="origin" />
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#7BA899] uppercase tracking-wider">
                    COA
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#7BA899] uppercase tracking-wider">
                    3rd Party
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#7BA899] uppercase tracking-wider whitespace-nowrap">
                    HM Tested
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#7BA899] uppercase tracking-wider">
                    GMP
                  </th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-[#7BA899] uppercase tracking-wider whitespace-nowrap">
                    Free Ship
                  </th>
                  <Th label="Rating" k="amazonRating" />
                  <Th label="Reviews" k="amazonReviewCount" />
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-[#7BA899] uppercase tracking-wider">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`border-b border-[#D1EDD8] transition-colors hover:bg-[#F0FAF4]
                      ${i % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}
                      ${p.featured ? "ring-1 ring-inset ring-[#9EC9AD]" : ""}`}
                  >
                    {/* Brand + product */}
                    <td className="px-3 py-2.5 min-w-[200px]">
                      <div className="flex items-center gap-2">
                        {/* Product image or placeholder */}
                        {p.imageUrl ? (
                          <div className="shrink-0 w-14 h-14 rounded-lg bg-[#E8F5EC] overflow-hidden flex items-center justify-center">
                            <Image
                              src={p.imageUrl}
                              alt={`${p.vendor} ${p.productName}`}
                              width={56}
                              height={56}
                              quality={90}
                              sizes="56px"
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ) : (
                          <div className="shrink-0 w-14 h-14 rounded-lg bg-[#E8F5EC] flex items-center justify-center">
                            <span className="text-lg font-extrabold text-[#10B981]/40">{p.vendor.charAt(0)}</span>
                          </div>
                        )}
                        <div className="min-w-0">
                          {p.featured && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] mr-1 mb-0.5 align-middle" title="Featured" />
                          )}
                          <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider truncate">{p.vendor}</div>
                          <div className="text-xs text-[#0D1F14] leading-snug">{p.productName}</div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-3 py-2.5">
                      <span className="text-[10px] text-[#7BA899] bg-[#F0FAF4] border border-[#D1EDD8] px-1.5 py-0.5 rounded-full">
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
                        <div className="w-12 h-1.5 rounded-full bg-[#E8F5EC] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${p.purityScore >= 8 ? "bg-[#10B981]" : p.purityScore >= 6 ? "bg-blue-500" : p.purityScore >= 4 ? "bg-amber-500" : "bg-red-500"}`}
                            style={{ width: `${(p.purityScore / 10) * 100}%` }}
                          />
                        </div>
                        <span className={`text-[11px] font-bold tabular-nums ${p.purityScore >= 8 ? "text-[#10B981]" : p.purityScore >= 6 ? "text-blue-600" : p.purityScore >= 4 ? "text-amber-600" : "text-red-600"}`}>
                          {p.purityScore}/10
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-3 py-2.5 font-semibold text-[#0D1F14] tabular-nums whitespace-nowrap">
                      ${p.priceUsd.toFixed(2)}
                    </td>

                    {/* $/gram */}
                    <td className="px-3 py-2.5 tabular-nums text-[#10B981] font-semibold whitespace-nowrap">
                      ${p.pricePerGram.toFixed(2)}
                    </td>

                    {/* $/serving */}
                    <td className="px-3 py-2.5 tabular-nums text-[#4A6358] whitespace-nowrap">
                      {p.costPerServing > 0 ? `$${p.costPerServing.toFixed(2)}` : "—"}
                    </td>

                    {/* Size */}
                    <td className="px-3 py-2.5 tabular-nums text-[#7BA899] whitespace-nowrap">
                      {p.weightGrams}g
                    </td>

                    {/* Fulvic % */}
                    <td className="px-3 py-2.5 tabular-nums whitespace-nowrap">
                      {p.fulvicAcidPct !== undefined ? (
                        <span className="text-[#10B981] font-bold">{p.fulvicAcidPct}%</span>
                      ) : (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-slate-100 ring-1 ring-slate-200 text-slate-500 text-[9px] font-bold">Not Disclosed</span>
                      )}
                    </td>

                    {/* Source */}
                    <td className="px-3 py-2.5 text-[11px] text-[#7BA899] whitespace-nowrap">
                      {p.sourceLocation ?? "—"}
                    </td>

                    {/* Origin */}
                    <td className="px-3 py-2.5 whitespace-nowrap">
                      {p.origin && p.origin !== "Unknown" ? (
                        <span className="text-[10px] text-[#7BA899]">📍 {p.origin}</span>
                      ) : (
                        <span className="text-[#D1EDD8] text-[10px]">—</span>
                      )}
                    </td>

                    {/* COA */}
                    <td className="px-3 py-2.5 text-center">
                      {p.coaVerified ? (
                        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 px-1.5 py-0.5 rounded-full">✓ COA</span>
                      ) : (
                        <span className="text-[9px] font-medium text-slate-500 bg-slate-100 ring-1 ring-slate-300 px-1.5 py-0.5 rounded-full">No COA</span>
                      )}
                    </td>

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
                        <span className="text-amber-500 font-semibold">★ {p.amazonRating.toFixed(1)}</span>
                      ) : (
                        <span className="text-[#D1EDD8]">—</span>
                      )}
                    </td>

                    {/* Reviews */}
                    <td className="px-3 py-2.5 tabular-nums text-[#7BA899] whitespace-nowrap">
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
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors whitespace-nowrap
                            ${p.featured
                              ? "bg-[#182B1F] hover:bg-[#10B981] text-white"
                              : "bg-white border-2 border-[#D1EDD8] hover:border-[#9EC9AD] text-[#4A6358] hover:text-[#0D1F14]"
                            }`}
                        >
                          {p.featured ? "View Deal →" : "Check Price →"}
                        </a>
                      ) : (
                        <span className="text-[#D1EDD8] text-[10px]">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-[#7BA899]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Featured = affiliate partner
          </div>
          <div>✓ = confirmed   —  = not confirmed / unavailable</div>
          <div>Purity Score = 1–10 based on COA, testing, fulvic acid %, and sourcing transparency</div>
          <div>Prices may vary — click "Check Price" for current listing</div>
        </div>

        {/* Brand Comparisons section */}
        <div className="mt-8 bg-white rounded-2xl border-2 border-[#D1EDD8] p-5">
          <h2 className="font-black text-[#0D1F14] text-base mb-1">Brand comparisons</h2>
          <p className="text-xs text-[#7BA899] mb-4">Deep-dive head-to-head analysis with verdict, side-by-side tables, and FAQs.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              { slug: "black-lotus-vs-pure-himalayan", label: "Black Lotus vs Pure Himalayan" },
              { slug: "black-lotus-vs-natural-shilajit", label: "Black Lotus vs Natural Shilajit" },
              { slug: "natural-shilajit-vs-pure-himalayan", label: "Natural Shilajit vs Pure Himalayan" },
              { slug: "purblack-vs-black-lotus", label: "Pürblack vs Black Lotus" },
              { slug: "purblack-vs-natural-shilajit", label: "Pürblack vs Natural Shilajit" },
              { slug: "purblack-vs-pure-himalayan", label: "Pürblack vs Pure Himalayan" },
              { slug: "black-lotus-vs-sayan", label: "Black Lotus vs Sayan" },
              { slug: "natural-shilajit-vs-sayan", label: "Natural Shilajit vs Sayan" },
              { slug: "black-lotus-vs-primavie", label: "Black Lotus vs PrimaVie®" },
              { slug: "pure-himalayan-vs-primavie", label: "Pure Himalayan vs PrimaVie®" },
            ].map(({ slug, label }) => (
              <Link
                key={slug}
                href={`/compare/${slug}`}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#D1EDD8] bg-[#F5F9F6] hover:border-[#10B981] hover:bg-[#F0FAF4] transition-colors text-xs font-semibold text-[#0D1F14]"
              >
                <span className="text-[#10B981] shrink-0">⚡</span>
                {label}
                <span className="ml-auto text-[#9EC9AD]">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Methodology note */}
        <div className="mt-6 p-4 rounded-2xl bg-white border-2 border-[#D1EDD8] text-[11px] text-[#4A6358] leading-relaxed shadow-sm">
          <strong className="text-[#0D1F14]">How we score:</strong>{" "}
          Tier (S–D) is assigned based on COA availability, fulvic acid content (&gt;60% = higher tier), source disclosure, third-party testing, and price competitiveness.
          Purity Score (1–10) weights COA (+2), third-party lab testing (+2), heavy metals testing (+1.5), known source (+1.5), fulvic acid % (&gt;70%: +2, &gt;50%: +1), and GMP certification (+1).{" "}
          <a href="/about" className="text-[#10B981] hover:text-[#0D1F14] underline underline-offset-2">Full methodology →</a>
        </div>

        {/* Affiliate disclosure */}
        <p className="mt-4 text-[10px] text-[#7BA899]">
          Some links are affiliate links. We may earn a commission if you purchase — at no extra cost to you. Rankings are independent of affiliate relationships.{" "}
          <a href="/disclaimer" className="hover:text-[#4A6358] underline underline-offset-2">Full disclosure →</a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
