import type { Metadata } from "next";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | ShilajitPrice.com",
  description: "This page doesn't exist. Browse our shilajit price comparison or read our buying guides.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1f14]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </Link>
          <Link href="/" className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-5">🔍</div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-800/40 text-red-400 text-xs font-semibold mb-5 tracking-wide">
            404 — Page Not Found
          </div>

          <h1 className="text-3xl font-black text-[#e8f4ec] mb-3">
            Nothing here
          </h1>
          <p className="text-sm text-[#9ec9ad] leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Try
            comparing shilajit prices or reading one of our guides below.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/#deals"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors"
            >
              Compare Prices
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#182b1f] hover:bg-[#1e3527] text-emerald-300 font-semibold border border-emerald-700/50 text-sm transition-colors"
            >
              Read the Blog
            </Link>
          </div>

          {/* Quick links */}
          <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-5 text-left">
            <p className="text-xs font-bold text-[#5d8c6e] uppercase tracking-widest mb-3">Popular pages</p>
            <ul className="space-y-2">
              {[
                { label: "Shilajit Price Comparison", href: "/" },
                { label: "Best Shilajit Resin in 2026", href: "/blog/best-shilajit-resin-2026" },
                { label: "What is Fulvic Acid?", href: "/blog/what-is-fulvic-acid" },
                { label: "How to Spot Fake Shilajit", href: "/blog/how-to-spot-fake-shilajit" },
                { label: "Affiliate Disclosure", href: "/disclaimer" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2 text-sm text-[#9ec9ad] hover:text-emerald-400 transition-colors">
                    <svg className="w-3 h-3 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
