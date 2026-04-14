"use client";

import { Category, CATEGORIES } from "../data/products";

interface CategoryFilterProps {
  active: Category;
  onChange: (category: Category) => void;
  counts: Record<Category, number>;
}

const CATEGORY_ICONS: Record<Category, string> = {
  All: "◈",
  Resin: "⬡",
  Capsules: "◉",
  Powder: "◌",
  Gummies: "◍",
  Tinctures: "◫",
  Honey: "◆",
  Bundles: "❖",
};

export default function CategoryFilter({
  active,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto pb-1 scrollbar-hide">
      <div className="flex gap-2 min-w-max px-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border
              ${
                active === cat
                  ? "bg-emerald-500 border-emerald-400 text-white shadow-md shadow-emerald-900/30"
                  : "bg-[#182b1f] border-[#2a4535] text-[#9ec9ad] hover:border-emerald-600/50 hover:text-emerald-300 hover:bg-[#1e3527]"
              }`}
          >
            <span className="text-xs">{CATEGORY_ICONS[cat]}</span>
            {cat}
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                ${
                  active === cat
                    ? "bg-white/20 text-white"
                    : "bg-[#0d1f14] text-[#5d8c6e]"
                }`}
            >
              {counts[cat]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
