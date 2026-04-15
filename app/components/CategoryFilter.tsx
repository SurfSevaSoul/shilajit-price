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
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap border-2
              ${
                active === cat
                  ? "bg-[#182B1F] border-[#182B1F] text-white shadow-sm"
                  : "bg-white border-[#D1EDD8] text-[#4A6358] hover:border-[#9EC9AD] hover:text-[#0D1F14]"
              }`}
          >
            <span className="text-xs">{CATEGORY_ICONS[cat]}</span>
            {cat}
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                ${
                  active === cat
                    ? "bg-white/20 text-white"
                    : "bg-[#F0FAF4] text-[#7BA899]"
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
