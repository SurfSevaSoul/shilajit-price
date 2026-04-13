"use client";

import { Tier } from "../data/products";

export interface FilterState {
  tiers: Tier[];
  maxPrice: number;
  coaOnly: boolean;
  freeShippingOnly: boolean;
  labTestedOnly: boolean;
  sortBy: "pricePerGram" | "price" | "tier";
}

const ALL_TIERS: Tier[] = ["S", "A", "B", "C", "D"];

const TIER_COLORS: Record<Tier, string> = {
  S: "bg-amber-400 text-amber-900",
  A: "bg-emerald-500 text-white",
  B: "bg-blue-500 text-white",
  C: "bg-slate-500 text-white",
  D: "bg-red-500 text-white",
};

interface SidebarFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalResults: number;
}

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
    filters.tiers.length === ALL_TIERS.length ||
    filters.tiers.length === 0;

  return (
    <aside className="w-full lg:w-56 xl:w-64 shrink-0">
      <div className="sticky top-6 bg-[#182b1f] border border-[#2a4535] rounded-xl overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-[#2a4535] flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#e8f4ec]">Filters</h2>
          <span className="text-[10px] text-[#5d8c6e] bg-[#0d1f14] px-2 py-0.5 rounded-full border border-[#2a4535]">
            {totalResults} results
          </span>
        </div>

        <div className="p-4 space-y-5">
          {/* Sort */}
          <div>
            <label className="block text-[11px] font-semibold text-[#5d8c6e] uppercase tracking-wider mb-2">
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                toggle("sortBy", e.target.value as FilterState["sortBy"])
              }
              className="w-full bg-[#0d1f14] border border-[#2a4535] text-[#e8f4ec] text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
            >
              <option value="pricePerGram">Price per Gram</option>
              <option value="price">Total Price</option>
              <option value="tier">Tier (S→D)</option>
            </select>
          </div>

          {/* Tier Filter */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[11px] font-semibold text-[#5d8c6e] uppercase tracking-wider">
                Tier
              </label>
              {!allTiersSelected && (
                <button
                  onClick={() => toggle("tiers", ALL_TIERS)}
                  className="text-[10px] text-emerald-400 hover:text-emerald-300"
                >
                  Reset
                </button>
              )}
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {ALL_TIERS.map((tier) => {
                const active =
                  allTiersSelected || filters.tiers.includes(tier);
                return (
                  <button
                    key={tier}
                    onClick={() => toggleTier(tier)}
                    className={`w-9 h-9 rounded-lg text-sm font-black transition-all duration-150 border
                      ${
                        active
                          ? `${TIER_COLORS[tier]} border-transparent shadow-sm`
                          : "bg-[#0d1f14] border-[#2a4535] text-[#5d8c6e]"
                      }`}
                  >
                    {tier}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Max Price */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[11px] font-semibold text-[#5d8c6e] uppercase tracking-wider">
                Max Price
              </label>
              <span className="text-xs font-semibold text-[#e8f4ec]">
                ${filters.maxPrice}
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={filters.maxPrice}
              onChange={(e) => toggle("maxPrice", Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#5d8c6e] mt-1">
              <span>$10</span>
              <span>$100</span>
            </div>
          </div>

          {/* Toggles */}
          <div>
            <label className="block text-[11px] font-semibold text-[#5d8c6e] uppercase tracking-wider mb-2">
              Requirements
            </label>
            <div className="space-y-2">
              {[
                {
                  key: "coaOnly" as const,
                  label: "COA Available",
                  icon: "✓",
                },
                {
                  key: "freeShippingOnly" as const,
                  label: "Free Shipping",
                  icon: "⚡",
                },
                {
                  key: "labTestedOnly" as const,
                  label: "Lab Tested",
                  icon: "⚗",
                },
              ].map(({ key, label, icon }) => (
                <label
                  key={key}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-150 shrink-0
                      ${
                        filters[key]
                          ? "bg-emerald-500 border-emerald-500"
                          : "bg-[#0d1f14] border-[#2a4535] group-hover:border-emerald-600"
                      }`}
                    onClick={() => toggle(key, !filters[key])}
                  >
                    {filters[key] && (
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className="text-xs text-[#9ec9ad] group-hover:text-[#e8f4ec] transition-colors select-none"
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
            onClick={() =>
              onChange({
                tiers: ALL_TIERS,
                maxPrice: 100,
                coaOnly: false,
                freeShippingOnly: false,
                labTestedOnly: false,
                sortBy: "pricePerGram",
              })
            }
            className="w-full py-2 rounded-lg text-xs font-medium text-[#5d8c6e] hover:text-emerald-400 border border-[#2a4535] hover:border-emerald-700/50 bg-[#0d1f14] transition-all duration-150"
          >
            Reset All Filters
          </button>
        </div>
      </div>
    </aside>
  );
}
