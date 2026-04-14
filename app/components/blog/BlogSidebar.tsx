import Link from "next/link";
import { BLOG_POSTS } from "../../data/blog";

interface BlogSidebarProps {
  currentSlug: string;
}

const AFFILIATE_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";

export default function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

  return (
    <div className="space-y-6">
      {/* Compare CTA */}
      <div className="bg-[#122019] border border-emerald-700/40 rounded-xl p-4">
        <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
          Free Tool
        </div>
        <p className="text-xs font-bold text-[#e8f4ec] mb-1.5">
          Compare All 55+ Shilajit Products
        </p>
        <p className="text-[11px] text-[#9ec9ad] leading-relaxed mb-3">
          Ranked by fulvic acid %, price per gram, and COA quality.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors"
        >
          Compare Prices →
        </Link>
      </div>

      {/* Our #1 Pick */}
      <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4">
        <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest mb-2">
          Our #1 Pick
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-amber-900 font-black text-xs shrink-0">
            S
          </div>
          <span className="text-xs font-bold text-[#e8f4ec]">Black Lotus Resin</span>
        </div>
        <ul className="space-y-1 mb-3">
          {["85%+ fulvic acid", "Third-party COA", "Free shipping", "$39.99"].map((f) => (
            <li key={f} className="flex items-center gap-1.5">
              <span className="text-emerald-400 text-[10px]">✓</span>
              <span className="text-[11px] text-[#9ec9ad]">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={AFFILIATE_BASE}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[11px] transition-colors"
        >
          Shop Now →
        </a>
        <p className="text-[9px] text-[#5d8c6e] text-center mt-1.5">
          Affiliate link
        </p>
      </div>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <div>
          <div className="text-[9px] font-bold text-[#5d8c6e] uppercase tracking-widest mb-3">
            More Articles
          </div>
          <div className="space-y-2">
            {otherPosts.slice(0, 6).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-2.5 bg-[#182b1f] border border-[#2a4535] hover:border-emerald-700/50 rounded-xl p-3 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center text-sm shrink-0 group-hover:border-emerald-600/50 transition-colors">
                  {post.coverEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-[#e8f4ec] group-hover:text-emerald-300 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </p>
                  <p className="text-[10px] text-[#5d8c6e] mt-0.5">
                    {post.readingTimeMin} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {otherPosts.length > 6 && (
            <Link
              href="/blog"
              className="flex items-center justify-center gap-1 mt-3 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              View all articles →
            </Link>
          )}
        </div>
      )}

      {/* Full comparison table */}
      <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4">
        <div className="text-[9px] font-bold text-[#5d8c6e] uppercase tracking-widest mb-2">
          Data Tool
        </div>
        <p className="text-xs font-bold text-[#e8f4ec] mb-1.5">
          Full Comparison Table
        </p>
        <p className="text-[11px] text-[#9ec9ad] leading-relaxed mb-3">
          Sortable by price, potency, and source across 25+ data points.
        </p>
        <Link
          href="/compare"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-emerald-700/50 hover:border-emerald-600 text-emerald-400 hover:text-emerald-300 font-bold text-[11px] transition-colors"
        >
          Open Table →
        </Link>
      </div>
    </div>
  );
}
