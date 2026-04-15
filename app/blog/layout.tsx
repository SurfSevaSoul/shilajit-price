import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

const AFFILIATE_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0FAF4]">
      {/* Shared nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#D1EDD8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-[#10B981]">ShilajitPrice</span>
            <span className="text-lg font-black text-[#0D1F14]">.com</span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <Link
              href="/#deals"
              className="text-[#0D1F14] hover:text-[#10B981] transition-colors"
            >
              Compare
            </Link>
            <Link
              href="/compare"
              className="text-[#0D1F14] hover:text-[#10B981] transition-colors"
            >
              Full Table
            </Link>
            <Link href="/blog" className="text-[#10B981] font-medium">
              Blog
            </Link>
          </div>
          <a
            href={AFFILIATE_BASE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
          >
            🏆 Our #1 Pick
          </a>
        </div>
      </nav>

      {/* Page content */}
      {children}

      <Footer />
    </div>
  );
}
