"use client";

import { Tier, Origin, ORIGINS } from "../data/products";

export interface FilterState {
  tiers: Tier[];
  origins: Origin[];
  maxPrice: number;
  coaOnly: boolean;
  thirdPartyOnly: boolean;
  heavyMetalsOnly: boolean;
  knownSourceOnly: boolean;
  gmpOnly: boolean;
  freeShippingOnly: boolean;
  dbpVerifiedOnly: boolean;
  minRating: number;
  minReviews: number;
  sortBy:
    | "pricePerGram"
    | "price"
    | "tier"
    | "purityScore"
    | "mostReviews"
    | "highestRated"
    | "costPerServing"
    | "bestValue";
}

const ALL_TIERS: Tier[] = ["S", "A", "B", "C", "D"];

// Pill styles for the light theme
const TIER_PILL: Record<Tier, { active: string; inactive: string }> = {
  S: { active: "bg-amber-400 text-amber-900 ring-1 ring-amber-500", inactive: "bg-white ring-1 ring-[#D1EDD8] text-[#7BA899]" },
  A: { active: "bg-emerald-500 text-white ring-1 ring-emerald-600", inactive: "bg-white ring-1 ring-[#D1EDD8] text-[#7BA899]" },
  B: { active: "bg-blue-500 text-white ring-1 ring-blue-600", inactive: "bg-white ring-1 ring-[#D1EDD8] text-[#7BA899]" },
  C: { active: "bg-slate-500 text-white ring-1 ring-slate-600", inactive: "bg-white ring-1 ring-[#D1EDD8] text-[#7BA899]" },
  D: { active: "bg-red-500 text-white ring-1 ring-red-600", inactive: "bg-white ring-1 ring-[#D1EDD8] text-[#7BA899]" },
};

interface SidebarFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalResults: number;
}

export const DEFAULT_FILTERS: FilterState = {
  tiers: ALL_TIERS,
  origins: ORIGINS,
  maxPrice: 150,
  coaOnly: false,
  thirdPartyOnly: false,
  heavyMetalsOnly: false,
  knownSourceOnly: false,
  gmpOnly: false,
  freeShippingOnly: false,
  dbpVerifiedOnly: false,
  minRating: 0,
  minReviews: 0,
  sortBy: "bestValue",
};

export default function SidebarFilters({
  filters,
  onChange,
  totalResults,
}: SidebarFiltersProps) {
  const toggle = <K extends keyof FilterState>(key: K, value: FilterState[K]) =>
    onChange({ ...filters, [key]: value });

  const toggleTier = (tier: Tier) => {
    const next = filters.tiers.includes(tier)
      ? filters.tiers.filter((t) => t !== tier)
      : [...filters.tiers, tier];
    toggle("tiers", next.length === 0 ? ALL_TIERS : next);
  };

  const allTiersSelected =
    filters.tiers.length === ALL_TIERS.length || filters.tiers.length === 0;

  const toggleOrigin = (origin: Origin) => {
    const next = filters.origins.includes(origin)
      ? filters.origins.filter((o) => o !== origin)
      : [...filters.origins, origin];
    toggle("origins", next.length === 0 ? ORIGINS : next);
  };
  const allOriginsSelected = filters.origins.length === ORIGINS.length || filters.origins.length === 0;

  const MIN_REVIEW_OPTIONS = [
    { label: "Any", value: 0 },
    { label: "50+", value: 50 },
    { label: "100+", value: 100 },
    { label: "500+", value: 500 },
    { label: "1k+", value: 1000 },
  ];

  return (
    <aside className="w-full lg:w-60 xl:w-64 shrink-0">
      <div className="sticky top-6 bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="px-4 py-3 border-b border-[#D1EDD8] flex items-center justify-between bg-[#F0FAF4]">
          <h2 className="text-sm font-semibold text-[#0D1F14]">Filters</h2>
          <span className="text-[10px] text-[#7BA899] bg-white px-2 py-0.5 rounded-full ring-1 ring-[#D1EDD8]">
            {totalResults} results
          </span>
        </div>

        <div className="p-4 space-y-5 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Sort */}
          <div>
            <label className="block text-[11px] font-semibold text-[#7BA899] uppercase tracking-wider mb-2">
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => toggle("sortBy", e.target.value as FilterState["sortBy"])}
              className="w-full bg-white border-2 border-[#D1EDD8] text-[#0D1F14] text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-[#10B981] appearance-none cursor-pointer"
            >
              <option value="bestValue">Best Value (Tier + $/g)</option>
              <option value="purityScore">Highest Purity Score</option>
              <option value="pricePerGram">Lowest $/gram</option>
              <option value="costPerServing">Lowest $/serving</option>
              <option value="price">Lowest Total Price</option>
              <option value="highestRated">Highest Rated</option>
              <option value="mostReviews">Most Reviews</option>
              <option value="tier">Tier (S → D)</option>
            </select>
          </div>

          {/* Tier Filter */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[11px] font-semibold text-[#7BA899] uppercase tracking-wider">
                Tier
              </label>
              {!allTiersSelected && (
                <button
                  onClick={() => toggle("tiers", ALL_TIERS)}
                  className="text-[10px] text-[#10B981] hover:text-[#0D1F14] font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {ALL_TIERS.map((tier) => {
                const active = allTiersSelected || filters.tiers.includes(tier);
                const styles = TIER_PILL[tier];
                return (
                  <button
                    key={tier}
                    onClick={() => toggleTier(tier)}
                    className={`w-9 h-9 rounded-full text-sm font-extrabold transition-all duration-150
                      ${active ? styles.active : styles.inactive}`}
                  >
                    {tier}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Origin Filter */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[11px] font-semibold text-[#7BA899] uppercase tracking-wider">
                Origin
              </label>
              {!allOriginsSelected && (
                <button
                  onClick={() => toggle("origins", ORIGINS)}
                  className="text-[10px] text-[#10B981] hover:text-[#0D1F14] font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
            <div className="space-y-1.5">
              {ORIGINS.map((origin) => {
                const active = allOriginsSelected || filters.origins.includes(origin);
                return (
                  <label key={origin} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-150 shrink-0
                        ${active
                          ? "bg-[#182B1F] border-[#182B1F]"
                          : "bg-white border-[#D1EDD8] group-hover:border-[#9EC9AD]"
                        }`}
                      onClick={() => toggleOrigin(origin)}
                    >
                      {active && (
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span
                      className="text-xs text-[#4A6358] group-hover:text-[#0D1F14] transition-colors select-none"
                      onClick={() => toggleOrigin(origin)}
                    >
                      📍 {origin}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Max Price */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[11px] font-semibold text-[#7BA899] uppercase tracking-wider">
                Max Price
              </label>
              <span className="text-xs font-semibold text-[#0D1F14]">
                ${filters.maxPrice}
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={150}
              step={5}
              value={filters.maxPrice}
              onChange={(e) => toggle("maxPrice", Number(e.target.value))}
              className="w-full accent-[#10B981] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#7BA899] mt-1">
              <span>$10</span>
              <span>$150</span>
            </div>
          </div>

          {/* Min Rating */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[11px] font-semibold text-[#7BA899] uppercase tracking-wider">
                Min Rating
              </label>
              <span className="text-xs font-semibold text-[#0D1F14]">
                {filters.minRating > 0 ? `${filters.minRating}★` : "Any"}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={5}
              step={0.5}
              value={filters.minRating}
              onChange={(e) => toggle("minRating", Number(e.target.value))}
              className="w-full accent-[#10B981] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#7BA899] mt-1">
              <span>Any</span>
              <span>5.0★</span>
            </div>
          </div>

          {/* Min Reviews */}
          <div>
            <label className="block text-[11px] font-semibold text-[#7BA899] uppercase tracking-wider mb-2">
              Min Reviews
            </label>
            <div className="flex gap-1 flex-wrap">
              {MIN_REVIEW_OPTIONS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => toggle("minReviews", value)}
                  className={`px-2 py-1 rounded-full text-[10px] font-semibold border-2 transition-all duration-150
                    ${filters.minReviews === value
                      ? "bg-[#182B1F] border-[#182B1F] text-white"
                      : "bg-white border-[#D1EDD8] text-[#7BA899] hover:border-[#9EC9AD]"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Quality toggles */}
          <div>
            <label className="block text-[11px] font-semibold text-[#7BA899] uppercase tracking-wider mb-2">
              Quality Requirements
            </label>
            <div className="space-y-2">
              {[
                { key: "coaOnly" as const, label: "COA Available", icon: "📋" },
                { key: "thirdPartyOnly" as const, label: "3rd Party Tested", icon: "🔬" },
                { key: "heavyMetalsOnly" as const, label: "Heavy Metals Tested", icon: "⚗️" },
                { key: "knownSourceOnly" as const, label: "Known Source Location", icon: "🏔️" },
                { key: "gmpOnly" as const, label: "GMP Certified", icon: "✅" },
                { key: "freeShippingOnly" as const, label: "Free Shipping", icon: "📦" },
                { key: "dbpVerifiedOnly" as const, label: "DBP Verified", icon: "🛡️" },
              ].map(({ key, label, icon }) => (
                <label key={key} className="flex items-center gap-2.5 cursor-pointer group">
                  <div
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-150 shrink-0
                      ${filters[key]
                        ? "bg-[#182B1F] border-[#182B1F]"
                        : "bg-white border-[#D1EDD8] group-hover:border-[#9EC9AD]"
                      }`}
                    onClick={() => toggle(key, !filters[key])}
                  >
                    {filters[key] && (
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span
                    className="text-xs text-[#4A6358] group-hover:text-[#0D1F14] transition-colors select-none"
                    onClick={() => toggle(key, !filters[key])}
                  >
                    <span className="mr-1 text-[10px]">{icon}</span>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset all */}
          <button
            onClick={() => onChange(DEFAULT_FILTERS)}
            className="w-full py-2 rounded-full text-xs font-semibold text-[#7BA899] hover:text-[#0D1F14] border-2 border-[#D1EDD8] hover:border-[#9EC9AD] bg-white transition-all duration-150"
          >
            Reset All Filters
          </button>
        </div>
      </div>
    </aside>
  );
}
