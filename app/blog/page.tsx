import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "../data/blog";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Shilajit Blog — Guides, Reviews & Price Comparisons | ShilajitPrice.com",
  description:
    "In-depth shilajit buying guides, brand rankings, price comparisons, and product reviews. 8 expert articles to help you find the best shilajit supplement.",
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
  description: "Expert guides on buying shilajit — brand rankings, price analysis, lab data, and authenticity verification.",
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
  Comparison: "bg-blue-900/50 border-blue-800/40 text-blue-400",
  Science: "bg-purple-900/50 border-purple-800/40 text-purple-400",
  Safety: "bg-red-900/40 border-red-800/40 text-red-400",
  Rankings: "bg-amber-900/40 border-amber-800/40 text-amber-400",
  Research: "bg-teal-900/40 border-teal-800/40 text-teal-400",
  "Buying Guide": "bg-emerald-900/50 border-emerald-800/40 text-emerald-400",
  "Price Analysis": "bg-green-900/40 border-green-800/40 text-green-400",
};

export default function BlogIndex() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1f14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <Link href="/#deals" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Compare</Link>
            <Link href="/compare" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Full Table</Link>
            <Link href="/blog" className="text-emerald-400 font-medium">Blog</Link>
          </div>
          <a
            href="https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
          >
            🏆 Our #1 Pick
          </a>
        </div>
      </nav>

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-[#1e3527] py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-[#5d8c6e] mb-6">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#9ec9ad]">Blog</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-4 tracking-wide">
              {BLOG_POSTS.length} Expert Guides
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#e8f4ec] mb-3">
              The Shilajit Blog
            </h1>
            <p className="text-[#9ec9ad] text-base max-w-xl">
              Lab data, brand rankings, price analysis, and buying guides — everything you need to find the best shilajit and avoid the fakes.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="py-8 border-b border-[#1e3527]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Featured</span>
              <div className="flex-1 h-px bg-[#1e3527]" />
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col sm:flex-row gap-5 bg-[#182b1f] border border-emerald-600/30 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-900/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center text-3xl shrink-0 group-hover:border-emerald-600/50 transition-colors">
                {featured.coverEmoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${CATEGORY_COLORS[featured.category] ?? "bg-emerald-900/50 border-emerald-800/40 text-emerald-400"}`}>
                    {featured.category}
                  </span>
                  {featured.tags.slice(1).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-[#0d1f14] border border-[#2a4535] text-[#5d8c6e] text-[10px] font-semibold uppercase tracking-wide">{tag}</span>
                  ))}
                </div>
                <h2 className="text-xl font-black text-[#e8f4ec] group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3 line-clamp-2">
                  {featured.description}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-[#5d8c6e]">
                  <span>{formatDate(featured.publishedAt)}</span>
                  <span>·</span>
                  <span>{featured.readingTimeMin} min read</span>
                </div>
              </div>
              <div className="shrink-0 text-[#5d8c6e] group-hover:text-emerald-400 transition-colors self-center hidden sm:block">
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
              <span className="text-[10px] font-bold text-[#5d8c6e] uppercase tracking-widest">All Articles</span>
              <div className="flex-1 h-px bg-[#1e3527]" />
              <span className="text-[10px] text-[#5d8c6e]">{BLOG_POSTS.length} posts</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-[#182b1f] border border-[#2a4535] hover:border-emerald-600/50 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-emerald-900/20"
                >
                  {/* Card header with emoji */}
                  <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center text-xl shrink-0 group-hover:border-emerald-600/50 transition-colors">
                      {post.coverEmoji}
                    </div>
                    <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${CATEGORY_COLORS[post.category] ?? "bg-emerald-900/50 border-emerald-800/40 text-emerald-400"}`}>
                      {post.category}
                    </span>
                  </div>

                  <div className="px-5 pb-4 flex flex-col flex-1">
                    <h2 className="text-sm font-bold text-[#e8f4ec] group-hover:text-emerald-300 transition-colors mb-2 leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-[#9ec9ad] leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-[#0d1f14] border border-[#2a4535] text-[#5d8c6e] text-[9px] font-semibold uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-[10px] text-[#5d8c6e] pt-3 border-t border-[#1e3527]">
                      <span>{formatDate(post.publishedAt)}</span>
                      <div className="flex items-center gap-1 text-emerald-400 group-hover:gap-1.5 transition-all">
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
        <section className="py-10 border-t border-[#1e3527]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Compare all 55+ products", href: "/", icon: "⬡", desc: "Side-by-side price and purity comparison" },
                { label: "Full comparison table", href: "/compare", icon: "📊", desc: "Sortable table with all 25+ data points" },
                { label: "Our methodology", href: "/about", icon: "📋", desc: "How we score and rank each product" },
              ].map(({ label, href, icon, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 bg-[#182b1f] border border-[#2a4535] hover:border-emerald-700/50 rounded-xl px-4 py-3.5 transition-all group"
                >
                  <span className="text-xl shrink-0">{icon}</span>
                  <div>
                    <div className="text-xs font-bold text-[#e8f4ec] group-hover:text-emerald-300 transition-colors">{label}</div>
                    <div className="text-[10px] text-[#5d8c6e]">{desc}</div>
                  </div>
                  <svg className="w-4 h-4 text-[#5d8c6e] group-hover:text-emerald-400 transition-colors ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
