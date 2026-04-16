import Link from "next/link";

export default function QuizCTA() {
  return (
    <div className="bg-[#E8F5EC] border-2 border-[#9EC9AD] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
      <div className="text-3xl shrink-0">🎯</div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">
          Free Quiz
        </div>
        <h3 className="text-base font-bold text-[#0D1F14] mb-1.5" style={{ fontFamily: "var(--font-jakarta)" }}>
          Not sure which shilajit fits your goals?
        </h3>
        <p className="text-sm text-[#4A6358] leading-relaxed">
          Take our 60-second quiz for a personalized recommendation based on real lab data — your goals,
          budget, and purity preferences matched to the best brand.
        </p>
      </div>
      <Link
        href="/quiz"
        className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-bold text-sm transition-all duration-200 shadow-sm whitespace-nowrap min-h-[48px]"
      >
        Take the Quiz →
      </Link>
    </div>
  );
}
