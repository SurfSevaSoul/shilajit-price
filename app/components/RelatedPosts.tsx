import Link from "next/link";
import { BLOG_POSTS } from "../data/blog";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const others = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;

  return (
    <section className="border-t border-[#D1EDD8] pt-8">
      <h3 className="text-sm font-bold text-[#7BA899] uppercase tracking-widest mb-4">
        Related Articles
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {others.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-[#D1EDD8] hover:border-[#9EC9AD] rounded-xl p-4 transition-all duration-200 flex gap-3 items-start"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F0FAF4] border border-[#D1EDD8] flex items-center justify-center text-base shrink-0 group-hover:border-[#9EC9AD] transition-colors">
              {post.coverEmoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-1 mb-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[9px] font-bold text-[#10B981] uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs font-semibold text-[#0D1F14] group-hover:text-[#10B981] transition-colors leading-snug line-clamp-2">
                {post.title}
              </p>
              <p className="text-[10px] text-[#7BA899] mt-1">{post.readingTimeMin} min read →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
