import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "../data/blog";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Shilajit Blog — Guides, Reviews & Price Comparisons | ShilajitPrice.com",
  description:
    "In-depth shilajit buying guides, price comparisons, and product reviews. Learn what to look for in a quality shilajit supplement before you buy.",
  alternates: { canonical: "https://shilajitprice.com/blog" },
  openGraph: {
    title: "Shilajit Blog — Guides, Reviews & Price Comparisons",
    description:
      "In-depth shilajit buying guides, price comparisons, and product reviews.",
    url: "https://shilajitprice.com/blog",
    siteName: "ShilajitPrice.com",
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1f14]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <Link href="/#deals" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Compare</Link>
            <Link href="/#how-it-works" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">How It Works</Link>
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
        <section className="border-b border-[#1e3527] py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-[#5d8c6e] mb-6">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#9ec9ad]">Blog</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-4 tracking-wide">
              Shilajit Guides & Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#e8f4ec] mb-3">
              The Shilajit Blog
            </h1>
            <p className="text-[#9ec9ad] text-base max-w-xl">
              Buying guides, price comparisons, and in-depth reviews. Everything you need to find the best shilajit.
            </p>
          </div>
        </section>

        {/* Article list */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid gap-5">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#182b1f] border border-[#2a4535] hover:border-emerald-600/50 rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:shadow-emerald-900/20 flex gap-5 items-start"
                >
                  {/* Emoji icon */}
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center text-2xl shrink-0 group-hover:border-emerald-600/50 transition-colors">
                    {post.coverEmoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-emerald-900/50 border border-emerald-800/40 text-emerald-400 text-[10px] font-semibold uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-lg font-bold text-[#e8f4ec] group-hover:text-emerald-300 transition-colors mb-1.5 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#9ec9ad] leading-relaxed mb-3 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-[#5d8c6e]">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span>{post.readingTimeMin} min read</span>
                      {post.updatedAt !== post.publishedAt && (
                        <>
                          <span>·</span>
                          <span>Updated {formatDate(post.updatedAt)}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 text-[#5d8c6e] group-hover:text-emerald-400 transition-colors mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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
