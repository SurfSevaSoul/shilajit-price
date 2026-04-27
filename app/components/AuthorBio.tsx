import Link from "next/link";

/**
 * AuthorBio — reusable Adrian Voss author card.
 * Used at the bottom of every blog post, on /methodology, and on /about.
 */
export default function AuthorBio() {
  return (
    <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-6 shadow-sm flex items-start gap-5">
      {/* Avatar initials */}
      <div className="shrink-0 w-14 h-14 rounded-full bg-[#E8F5EC] ring-2 ring-[#9EC9AD] flex items-center justify-center">
        <span className="text-xl font-extrabold text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>
          AV
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-sm font-extrabold text-[#0D1F14]" style={{ fontFamily: "var(--font-jakarta)" }}>
            Adrian Voss
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[9px] font-bold uppercase tracking-wide">
            Founder &amp; Author
          </span>
        </div>

        <p className="text-xs text-[#4A6358] leading-relaxed">
          Adrian Voss is the founder of{" "}
          <Link href="/" className="text-[#10B981] hover:underline">
            ShilajitPrice.com
          </Link>{" "}
          and a trained anthropologist with a focus on Cultural Anthropology and
          traditional medicine practices across the Carribbean, Central Asia and
          the Himalayas. He first encountered shilajit through his research
          studying traditional healing systems and Eastern Religion and has used
          it personally for over six years. Frustrated by the lack of
          transparent, data-driven information in the Western supplement market,
          he built{" "}
          <Link href="/" className="text-[#10B981] hover:underline">
            ShilajitPrice.com
          </Link>{" "}
          to bring the same rigorous standards of research he applies in
          academic work to consumer supplement buying — starting with verified
          lab data, honest sourcing claims, and real price transparency.
        </p>
      </div>
    </div>
  );
}
