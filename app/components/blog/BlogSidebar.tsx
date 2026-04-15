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
    <div className="space-y-5">
      {/* Compare CTA */}
      <div className="bg-[#F0FAF4] border-2 border-[#D1EDD8] rounded-2xl p-4">
        <div className="text-[9px] font-bold text-[#10B981] uppercase tracking-widest mb-2">
          Free Tool
        </div>
        <p className="text-xs font-bold text-[#0D1F14] mb-1.5">
          Compare All 55+ Shilajit Products
        </p>
        <p className="text-[11px] text-[#4A6358] leading-relaxed mb-3">
          Ranked by fulvic acid %, price per gram, and COA quality.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-bold text-[11px] transition-colors"
        >
          Compare Prices →
        </Link>
      </div>

      {/* Our #1 Pick */}
      <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-4 shadow-sm">
        <div className="text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-2">
          Our #1 Pick
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-amber-100 ring-2 ring-amber-300 flex items-center justify-center text-amber-800 font-extrabold text-xs shrink-0">
            S
          </div>
          <span className="text-xs font-bold text-[#0D1F14]">Black Lotus Resin</span>
        </div>
        <ul className="space-y-1 mb-3">
          {["85%+ fulvic acid", "Third-party COA", "Free shipping", "$36.99"].map((f) => (
            <li key={f} className="flex items-center gap-1.5">
              <span className="text-[#10B981] text-[10px]">✓</span>
              <span className="text-[11px] text-[#4A6358]">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={AFFILIATE_BASE}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-bold text-[11px] transition-colors"
        >
          Shop Now →
        </a>
        <p className="text-[9px] text-[#7BA899] text-center mt-1.5">
          Affiliate link
        </p>
      </div>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <div>
          <div className="text-[9px] font-bold text-[#7BA899] uppercase tracking-widest mb-3">
            More Articles
          </div>
          <div className="space-y-2">
            {otherPosts.slice(0, 6).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-2.5 bg-white border-2 border-[#D1EDD8] hover:border-[#9EC9AD] rounded-xl p-3 transition-all shadow-sm"
              >
                <div className="w-7 h-7 rounded-xl bg-[#F0FAF4] border border-[#D1EDD8] flex items-center justify-center text-sm shrink-0 group-hover:border-[#9EC9AD] transition-colors">
                  {post.coverEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-[#0D1F14] group-hover:text-[#10B981] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </p>
                  <p className="text-[10px] text-[#7BA899] mt-0.5">
                    {post.readingTimeMin} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {otherPosts.length > 6 && (
            <Link
              href="/blog"
              className="flex items-center justify-center gap-1 mt-3 text-[11px] text-[#10B981] hover:text-[#0D1F14] transition-colors font-semibold"
            >
              View all articles →
            </Link>
          )}
        </div>
      )}

      {/* Full comparison table */}
      <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-4 shadow-sm">
        <div className="text-[9px] font-bold text-[#7BA899] uppercase tracking-widest mb-2">
          Data Tool
        </div>
        <p className="text-xs font-bold text-[#0D1F14] mb-1.5">
          Full Comparison Table
        </p>
        <p className="text-[11px] text-[#4A6358] leading-relaxed mb-3">
          Sortable by price, potency, and source across 25+ data points.
        </p>
        <Link
          href="/compare"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full border-2 border-[#182B1F] text-[#182B1F] hover:bg-[#182B1F] hover:text-white font-bold text-[11px] transition-colors"
        >
          Open Table →
        </Link>
      </div>
    </div>
  );
}
