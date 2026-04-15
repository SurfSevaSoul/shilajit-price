import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "../data/blog";

export const metadata: Metadata = {
  title: "Shilajit Blog — Guides, Reviews & Price Comparisons | ShilajitPrice.com",
  description:
    "In-depth shilajit buying guides, brand rankings, price comparisons, and product reviews. 26 expert articles to help you find the best shilajit supplement.",
  alternates: { canonical: "https://shilajitprice.com/blog" },
  openGraph: {
    title: "Shilajit Blog — Guides, Reviews & Price Comparisons",
    description:
      "In-depth shilajit buying guides, brand rankings, price comparisons, and product reviews.",
    url: "https://shilajitprice.com/blog",
    siteName: "ShilajitPrice.com",
    type: "website",
  },
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "ShilajitPrice.com Blog",
  description: "Expert guides on buying shilajit — brand rankings, price analysis, lab data, health benefits, and authenticity verification.",
  url: "https://shilajitprice.com/blog",
  publisher: {
    "@type": "Organization",
    name: "ShilajitPrice.com",
    url: "https://shilajitprice.com",
  },
  blogPost: BLOG_POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.publishedAt,
    dateModified: p.updatedAt,
    url: `https://shilajitprice.com/blog/${p.slug}`,
  })),
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  Comparison: "bg-blue-50 border-blue-200 text-blue-700",
  Science: "bg-purple-50 border-purple-200 text-purple-700",
  Safety: "bg-red-50 border-red-200 text-red-700",
  Rankings: "bg-amber-50 border-amber-200 text-amber-700",
  Research: "bg-teal-50 border-teal-200 text-teal-700",
  "Buying Guide": "bg-emerald-50 border-emerald-200 text-emerald-700",
  "Price Analysis": "bg-green-50 border-green-200 text-green-700",
  "Health Benefits": "bg-rose-50 border-rose-200 text-rose-700",
  "Price Comparison": "bg-cyan-50 border-cyan-200 text-cyan-700",
  "Brand Reviews": "bg-violet-50 border-violet-200 text-violet-700",
  "Origins": "bg-orange-50 border-orange-200 text-orange-700",
};

export default function BlogIndex() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-[#D1EDD8] py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-[#7BA899] mb-6">
              <Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#0D1F14]">Blog</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] text-xs font-semibold mb-4 tracking-wide">
              {BLOG_POSTS.length} Expert Guides
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F14] mb-3">
              The Shilajit Blog
            </h1>
            <p className="text-[#0D1F14] text-base max-w-xl">
              Lab data, brand rankings, price analysis, and buying guides — everything you need to find the best shilajit and avoid the fakes.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="py-8 border-b border-[#D1EDD8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest">Featured</span>
              <div className="flex-1 h-px bg-[#D1EDD8]" />
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col sm:flex-row gap-5 bg-white border border-[#D1EDD8] hover:border-[#9EC9AD] rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F0FAF4] border border-[#D1EDD8] flex items-center justify-center text-3xl shrink-0 group-hover:border-[#9EC9AD] transition-colors">
                {featured.coverEmoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${CATEGORY_COLORS[featured.category] ?? "bg-emerald-50 border-emerald-200 text-emerald-700"}`}>
                    {featured.category}
                  </span>
                  {featured.tags.slice(1).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-[#F0FAF4] border border-[#D1EDD8] text-[#7BA899] text-[10px] font-semibold uppercase tracking-wide">{tag}</span>
                  ))}
                </div>
                <h2 className="text-xl font-black text-[#0D1F14] group-hover:text-[#10B981] transition-colors mb-2 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-[#0D1F14] leading-relaxed mb-3 line-clamp-2">
                  {featured.description}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-[#7BA899]">
                  <span>{formatDate(featured.publishedAt)}</span>
                  <span>·</span>
                  <span>{featured.readingTimeMin} min read</span>
                </div>
              </div>
              <div className="shrink-0 text-[#7BA899] group-hover:text-[#10B981] transition-colors self-center hidden sm:block">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        {/* Grid of remaining posts */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">All Articles</span>
              <div className="flex-1 h-px bg-[#D1EDD8]" />
              <span className="text-[10px] text-[#7BA899]">{BLOG_POSTS.length} posts</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-[#D1EDD8] hover:border-[#9EC9AD] rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-emerald-100"
                >
                  <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F0FAF4] border border-[#D1EDD8] flex items-center justify-center text-xl shrink-0 group-hover:border-[#9EC9AD] transition-colors">
                      {post.coverEmoji}
                    </div>
                    <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${CATEGORY_COLORS[post.category] ?? "bg-emerald-50 border-emerald-200 text-emerald-700"}`}>
                      {post.category}
                    </span>
                  </div>

                  <div className="px-5 pb-4 flex flex-col flex-1">
                    <h2 className="text-sm font-bold text-[#0D1F14] group-hover:text-[#10B981] transition-colors mb-2 leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-[#0D1F14] leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-[#F0FAF4] border border-[#D1EDD8] text-[#7BA899] text-[9px] font-semibold uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#7BA899] pt-3 border-t border-[#D1EDD8]">
                      <span>{formatDate(post.publishedAt)}</span>
                      <div className="flex items-center gap-1 text-[#10B981] group-hover:gap-1.5 transition-all">
                        <span className="font-semibold">{post.readingTimeMin} min</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Internal link CTA */}
        <section className="py-10 border-t border-[#D1EDD8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Compare all 71 products", href: "/", icon: "⬡", desc: "Side-by-side price and purity comparison" },
                { label: "Full comparison table", href: "/compare", icon: "📊", desc: "Sortable table with all 25+ data points" },
                { label: "Our methodology", href: "/about", icon: "📋", desc: "How we score and rank each product" },
              ].map(({ label, href, icon, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 bg-white border border-[#D1EDD8] hover:border-[#9EC9AD] rounded-xl px-4 py-3.5 transition-all group"
                >
                  <span className="text-xl shrink-0">{icon}</span>
                  <div>
                    <div className="text-xs font-bold text-[#0D1F14] group-hover:text-[#10B981] transition-colors">{label}</div>
                    <div className="text-[10px] text-[#7BA899]">{desc}</div>
                  </div>
                  <svg className="w-4 h-4 text-[#7BA899] group-hover:text-[#10B981] transition-colors ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
