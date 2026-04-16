import Link from "next/link";

interface BlogCTAProps {
  headline?: string;
  subtext?: string;
}

export default function BlogCTA({
  headline = "Compare All Shilajit Prices",
  subtext = "See 74 products ranked by fulvic acid %, price per gram, and COA quality — all in one place.",
}: BlogCTAProps) {
  return (
    <div className="bg-[#122019] border border-emerald-700/40 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">
          Free Tool
        </div>
        <h3 className="text-base font-black text-[#e8f4ec] mb-1">{headline}</h3>
        <p className="text-xs text-[#9ec9ad] leading-relaxed">{subtext}</p>
      </div>
      <Link
        href="/"
        className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md shadow-emerald-900/30"
      >
        Compare Prices →
      </Link>
    </div>
  );
}
