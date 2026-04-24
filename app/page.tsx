"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, CATEGORIES, Category, Tier, TIER_COLORS, Origin, ORIGINS } from "./data/products";
import HeroSection from "./components/HeroSection";
import CategoryFilter from "./components/CategoryFilter";
import SidebarFilters, { FilterState, DEFAULT_FILTERS } from "./components/SidebarFilters";
import DealCard from "./components/DealCard";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const BASE_URL = "https://www.shilajitprice.com";
const PAGE_SIZE = 12;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ShilajitPrice",
  alternateName: "ShilajitPrice.com",
  url: BASE_URL,
  description:
    "Independent shilajit price comparison site. Compare lab-tested shilajit resin, capsules, gummies, tinctures, and honey from top vendors.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Shilajit Products — Price Comparison",
  description: "Ranked list of top shilajit supplements compared by price per gram, fulvic acid content, and COA transparency.",
  url: BASE_URL,
  numberOfItems: PRODUCTS.length,
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.vendor} — ${p.productName}`,
    url: p.affiliateUrl !== "#" ? p.affiliateUrl : BASE_URL,
    item: {
      "@type": "Product",
      name: `${p.vendor} ${p.productName}`,
      description: p.description ?? `${p.category} shilajit supplement`,
      offers: {
        "@type": "Offer",
        price: p.priceUsd.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: p.affiliateUrl !== "#" ? p.affiliateUrl : BASE_URL,
      },
    },
  })),
};

const TIER_ORDER: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3, D: 4 };

function bestValueScore(p: (typeof PRODUCTS)[0]) {
  const tierScore = (4 - TIER_ORDER[p.tier]) * 10;
  const ppgScore = Math.max(0, 10 - p.pricePerGram * 3);
  return tierScore * 0.4 + p.purityScore * 3 * 0.3 + ppgScore * 0.3;
}

// Interleave BL, PH, and NS featured products so no brand dominates the top
function interleaveProducts(list: (typeof PRODUCTS)[0][]): (typeof PRODUCTS)[0][] {
  const blFeatured = list.filter(
    (p) => p.featured && p.vendor.toLowerCase().includes("black lotus")
  );
  const phFeatured = list.filter(
    (p) => p.featured && p.vendor.toLowerCase().includes("pure himalayan")
  );
  const nsFeatured = list.filter(
    (p) => p.featured && p.vendor.toLowerCase().includes("natural shilajit")
  );
  const others = list.filter((p) => !p.featured);
  const result: (typeof PRODUCTS)[0][] = [];
  const max = Math.max(blFeatured.length, phFeatured.length, nsFeatured.length);
  for (let i = 0; i < max; i++) {
    if (blFeatured[i]) result.push(blFeatured[i]);
    if (phFeatured[i]) result.push(phFeatured[i]);
    if (nsFeatured[i]) result.push(nsFeatured[i]);
  }
  return [...result, ...others];
}

// ── Editor's Pick card (equal-weight, vertical layout) ──────────────────────
type AccentVariant = "emerald" | "amber" | "blue" | "teal" | "violet";

const ACCENT_STYLES: Record<
  AccentVariant,
  { border: string; badge: string; label: string; btn: string; ppg: string }
> = {
  emerald: {
    border: "border-[#9EC9AD] hover:border-[#10B981]",
    badge: "bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700",
    label: "text-[#10B981]",
    btn: "bg-[#182B1F] hover:bg-[#10B981] text-white",
    ppg: "text-[#10B981]",
  },
  amber: {
    border: "border-amber-200 hover:border-amber-400",
    badge: "bg-amber-50 ring-1 ring-amber-200 text-amber-700",
    label: "text-amber-600",
    btn: "bg-[#182B1F] hover:bg-amber-500 text-white",
    ppg: "text-amber-600",
  },
  blue: {
    border: "border-blue-200 hover:border-blue-400",
    badge: "bg-blue-50 ring-1 ring-blue-200 text-blue-700",
    label: "text-blue-600",
    btn: "bg-[#182B1F] hover:bg-blue-600 text-white",
    ppg: "text-blue-600",
  },
  teal: {
    border: "border-teal-200 hover:border-teal-400",
    badge: "bg-teal-50 ring-1 ring-teal-200 text-teal-700",
    label: "text-teal-600",
    btn: "bg-[#182B1F] hover:bg-teal-600 text-white",
    ppg: "text-teal-600",
  },
  violet: {
    border: "border-violet-200 hover:border-violet-400",
    badge: "bg-violet-50 ring-1 ring-violet-200 text-violet-700",
    label: "text-violet-600",
    btn: "bg-[#182B1F] hover:bg-violet-600 text-white",
    ppg: "text-violet-600",
  },
};

function EditorPickCard({
  product,
  label,
  accent,
  reason,
  customBullets,
  customTier,
}: {
  product: (typeof PRODUCTS)[0];
  label: string;
  accent: AccentVariant;
  reason?: string;
  customBullets?: string[];
  customTier?: string;
}) {
  const s = ACCENT_STYLES[accent];
  const displayTier = (customTier ?? product.tier) as keyof typeof TIER_COLORS;
  return (
    <div
      className={`bg-white border-2 ${s.border} rounded-2xl p-5 flex flex-col transition-all duration-200 hover:shadow-lg shadow-sm`}
    >
      {/* Editor's Pick badge */}
      <span
        className={`inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${s.badge} mb-3`}
      >
        Editor&apos;s Pick
      </span>

      {/* Pick label */}
      <div className={`text-[10px] font-bold uppercase tracking-widest ${s.label} mb-2.5`}>
        {label}
      </div>

      {/* Product image */}
      {product.imageUrl && (
        <div className="w-full h-28 flex items-center justify-center mb-3 rounded-xl bg-[#F4FAF6] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="max-h-full max-w-full object-contain p-1"
          />
        </div>
      )}

      {/* Tier + name */}
      <div className="flex items-center gap-2.5 mb-2">
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold ${TIER_COLORS[displayTier]} shadow-sm`}
          title={`${displayTier}-Tier`}
        >
          {displayTier}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold text-[#7BA899] uppercase truncate leading-none">
            {product.vendor}
          </div>
          <div className="text-sm font-semibold text-[#0D1F14] truncate leading-snug">
            {product.productName}
          </div>
        </div>
      </div>

      {/* Editorial reason */}
      {reason && (
        <p className="text-[10px] italic text-[#7BA899] leading-snug mb-3">
          {reason}
        </p>
      )}

      {/* Price row */}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-extrabold text-[#0D1F14] tabular-nums" style={{ fontFamily: "var(--font-jakarta)" }}>
          ${product.priceUsd.toFixed(2)}
        </span>
        <span className={`text-xs font-bold tabular-nums ${s.ppg}`}>
          ${product.pricePerGram.toFixed(2)}/g
        </span>
      </div>

      {/* Key specs */}
      <ul className="space-y-1 mb-4 flex-1 text-[11px] text-[#4A6358]">
        {customBullets ? (
          customBullets.map((b, i) => <li key={i}>{b}</li>)
        ) : (
          <>
            {product.fulvicAcidPct !== undefined && (
              <li>⚗️ {product.fulvicAcidPct}% fulvic acid</li>
            )}
            {product.coaVerified && <li>✓ COA verified</li>}
            {product.thirdPartyTested && <li>✓ Third-party tested</li>}
            {product.heavyMetalsTested && <li>✓ Heavy metals panel</li>}
            {product.freeShipping && <li>✓ Free shipping</li>}
          </>
        )}
      </ul>

      {/* CTA */}
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`block w-full text-center py-2.5 rounded-full text-xs font-bold transition-colors shadow-sm ${s.btn}`}
      >
        View Deal →
      </a>
      <p className="text-center text-[9px] text-[#7BA899] mt-1.5">
        Affiliate link — commission at no extra cost
      </p>
    </div>
  );
}

// ── Blog guide preview card ──────────────────────────────────────────────────
function BlogGuideCard({
  emoji,
  category,
  title,
  description,
  readingTimeMin,
  slug,
}: {
  emoji: string;
  category: string;
  title: string;
  description: string;
  readingTimeMin: number;
  slug: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group bg-[#0D1F14] border border-[#182B1F] hover:border-[#10B981] rounded-2xl p-5 flex flex-col transition-all duration-200 hover:shadow-lg shadow-sm"
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] text-[9px] font-bold uppercase tracking-widest mb-3">
        {category}
      </span>
      <h3 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-[#10B981] transition-colors">
        {title}
      </h3>
      <p className="text-[11px] text-[#9EC9AD] leading-relaxed flex-1 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-[#7BA899]">{readingTimeMin} min read</span>
        <span className="text-xs font-semibold text-[#10B981] group-hover:text-white transition-colors">
          Read Guide →
        </span>
      </div>
    </Link>
  );
}

const FEATURED_GUIDES = [
  {
    slug: "best-shilajit-brands-ranked",
    title: "Best Shilajit Brands Ranked in 2026 — Lab Data, Prices & Honest Reviews",
    description:
      "We ranked the top 10 shilajit brands using COA data, fulvic acid percentages, third-party testing, sourcing transparency, and price per gram.",
    readingTimeMin: 8,
    emoji: "🏅",
    category: "Rankings",
  },
  {
    slug: "how-to-spot-fake-shilajit",
    title: "How to Spot Fake Shilajit — and Where to Find the Real Thing",
    description:
      "The shilajit market is flooded with fakes, fillers, and mislabeled products. Here are 5 tests to verify authenticity and the red flags that expose a counterfeit.",
    readingTimeMin: 7,
    emoji: "🔍",
    category: "Safety",
  },
  {
    slug: "shilajit-resin-vs-capsules",
    title: "Shilajit Resin vs Capsules vs Powder — Which Form is Actually Best?",
    description:
      "We compare every shilajit form factor — resin, capsules, powder, gummies, and tinctures — on bioavailability, convenience, price per gram, and authenticity risk.",
    readingTimeMin: 8,
    emoji: "⚖️",
    category: "Buying Guide",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, filters]);

  const categoryCounts = useMemo(() => {
    const counts = {} as Record<Category, number>;
    CATEGORIES.forEach((cat) => {
      counts[cat] =
        cat === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

  // Editor's Picks: one card per featured affiliate partner
  const editorPicks = useMemo(() => {
    const blPick = PRODUCTS.find((p) => p.id === "bl-resin");
    const phPick = PRODUCTS.find((p) => p.id === "ph-soft-resin");
    const nsPick = PRODUCTS.find((p) => p.id === "natural-shilajit-resin-20g");
    const purblackPick = PRODUCTS.find((p) => p.id === "purblack-true-gold-30g");
    return [blPick, phPick, nsPick, purblackPick].filter(Boolean) as (typeof PRODUCTS)[0][];
  }, []);

  const editorPickMeta: { label: string; accent: AccentVariant; reason?: string; customBullets?: string[]; customTier?: string }[] = [
    {
      label: "Best Overall",
      accent: "emerald",
      reason: "Highest fulvic acid per dollar with a fully public COA — the best starting point for most buyers.",
    },
    {
      label: "Best Purity",
      accent: "amber",
      reason: "Consistently clean lab results and the most rigorous third-party testing process we've found.",
    },
    {
      label: "Best Value",
      accent: "teal",
      reason: "DBP-verified and batch-tested — best choice for buyers who want maximum sourcing transparency.",
    },
    {
      label: "Best Premium",
      accent: "violet",
      reason: "Five US patents and pharmaceutical-grade processing for serious biohackers who want the premium tier.",
      customTier: "S",
      customBullets: [
        "✓ COA verified",
        "✓ US Patents (x5)",
        "✓ Third-party tested",
        "✓ Made in USA",
        "✓ Gold-infused (555 PPM)",
      ],
    },
  ];

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (!filters.tiers.includes(p.tier)) return false;
      if (p.priceUsd > filters.maxPrice) return false;
      if (filters.coaOnly && !p.coaVerified) return false;
      if (filters.freeShippingOnly && !p.freeShipping) return false;
      if (filters.thirdPartyOnly && !p.thirdPartyTested) return false;
      if (filters.heavyMetalsOnly && !p.heavyMetalsTested) return false;
      if (filters.knownSourceOnly && !p.sourceLocation) return false;
      if (filters.gmpOnly && !p.gmpCertified) return false;
      if (filters.dbpVerifiedOnly && !p.dbpVerified) return false;
      if (filters.minRating > 0 && (p.amazonRating ?? 0) < filters.minRating) return false;
      if (filters.minReviews > 0 && (p.amazonReviewCount ?? 0) < filters.minReviews) return false;
      if (!filters.origins.includes(p.origin ?? "Unknown")) return false;
      return true;
    });

    list.sort((a, b) => {
      switch (filters.sortBy) {
        case "pricePerGram": return a.pricePerGram - b.pricePerGram;
        case "price": return a.priceUsd - b.priceUsd;
        case "purityScore": return b.purityScore - a.purityScore;
        case "mostReviews": return (b.amazonReviewCount ?? 0) - (a.amazonReviewCount ?? 0);
        case "highestRated": return (b.amazonRating ?? 0) - (a.amazonRating ?? 0);
        case "costPerServing": return a.costPerServing - b.costPerServing;
        case "tier":
        case "bestValue": {
          // 1. Tier (S → A → B → C → D)
          const tierDiff = TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
          if (tierDiff !== 0) return tierDiff;
          // 2. sortOrder descending (higher = earlier; Pürblack = 100, default = 0)
          const orderDiff = (b.sortOrder ?? 0) - (a.sortOrder ?? 0);
          if (orderDiff !== 0) return orderDiff;
          // 3. Products with a real image before placeholder-only products
          const aHasImg = a.imageUrl ? 1 : 0;
          const bHasImg = b.imageUrl ? 1 : 0;
          if (bHasImg !== aHasImg) return bHasImg - aHasImg;
          // 4. Best-value score within remaining group
          return bestValueScore(b) - bestValueScore(a);
        }
        default: return 0;
      }
    });

    // Interleave BL and PH featured products for balanced presentation
    if (filters.sortBy === "bestValue" || filters.sortBy === "tier") {
      list = interleaveProducts(list);
    }

    return list;
  }, [activeCategory, filters]);

  const quickStats = useMemo(() => {
    if (filtered.length === 0) return null;
    const avgPrice = filtered.reduce((s, p) => s + p.priceUsd, 0) / filtered.length;
    const bestPpg = Math.min(...filtered.map((p) => p.pricePerGram));
    return { avgPrice, bestPpg };
  }, [filtered]);

  const displayedProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D1EDD8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-extrabold text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>Shilajit</span>
            <span className="text-lg font-extrabold text-[#0D1F14]" style={{ fontFamily: "var(--font-jakarta)" }}>Price</span>
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <a href="#deals" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">Deals</a>
            <a href="/compare" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">Compare</a>
            <a href="/blog" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">Blog</a>
            <a href="/quiz" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">Quiz</a>
            <a href="#how-it-works" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">How It Works</a>
            <a href="/about" className="text-[#4A6358] hover:text-[#0D1F14] font-medium transition-colors">About</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#top-picks"
              className="hidden sm:inline-flex shrink-0 px-4 py-1.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white text-xs font-semibold transition-colors duration-200"
            >
              Editor&apos;s Picks
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="sm:hidden p-2 rounded-lg text-[#4A6358] hover:text-[#0D1F14] hover:bg-[#F0FAF4] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#D1EDD8] bg-white px-4 py-3 space-y-1">
            {[
              { label: "Deals", href: "#deals" },
              { label: "Compare", href: "/compare" },
              { label: "Blog", href: "/blog" },
              { label: "Quiz", href: "/quiz" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "About", href: "/about" },
              { label: "Editor's Picks", href: "#top-picks" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm text-[#4A6358] hover:text-[#0D1F14] hover:bg-[#F0FAF4] font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-1">
        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── TRUST BANNER ─────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-[#D1EDD8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-[#7BA899]">
              {[
                { icon: "🧪", text: "Lab data from 3rd-party COA reports", href: "/lab-data" },
                { icon: "✓", text: "COA status verified per product", href: "/lab-data" },
                { icon: "⭐", text: "Reviews aggregated from Amazon & brand sites", href: "/reviews" },
                { icon: "📊", text: "Transparent scoring methodology", href: "/methodology" },
              ].map(({ icon, text, href }) => (
                <Link key={text} href={href} className="flex items-center gap-1.5 hover:text-[#10B981] transition-colors group">
                  <span>{icon}</span>
                  <span className="group-hover:underline underline-offset-2">{text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. STATS BAR ─────────────────────────────────────────────────── */}
        <div className="bg-[#182B1F]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { value: `${PRODUCTS.length}`, label: "Products Tracked" },
                { value: `${new Set(PRODUCTS.map((p) => p.vendor)).size}`, label: "Brands Compared" },
                { value: "25+", label: "Data Points Per Product" },
                { value: "Weekly", label: "Price Updates" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#10B981]" style={{ fontFamily: "var(--font-jakarta)" }}>{value}</div>
                  <div className="text-xs text-[#9EC9AD] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3–5. DEALS SECTION ───────────────────────────────────────────── */}
        <section id="deals" className="py-12 bg-[#E8F5EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* ── 4. EDITOR'S TOP 3 PICKS ─────────────────────────────────── */}
            <div id="top-picks" className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">⭐ Editor&apos;s Picks</span>
                <div className="flex-1 h-px bg-[#D1EDD8]" />
                <span className="text-[10px] text-[#7BA899]">Independent editorial rankings</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {editorPicks.slice(0, 4).map((p, i) => (
                  <EditorPickCard
                    key={p.id}
                    product={p}
                    label={editorPickMeta[i]?.label ?? "Top Pick"}
                    accent={editorPickMeta[i]?.accent ?? "emerald"}
                    reason={editorPickMeta[i]?.reason}
                    customBullets={editorPickMeta[i]?.customBullets}
                    customTier={editorPickMeta[i]?.customTier}
                  />
                ))}
              </div>
            </div>

            {/* ── POPULAR COMPARISONS ──────────────────────────────────────── */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">Popular Comparisons</span>
                <div className="flex-1 h-px bg-[#D1EDD8]" />
                <Link href="/compare" className="text-[10px] text-[#10B981] font-semibold hover:underline shrink-0">View all →</Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { slug: "black-lotus-vs-pure-himalayan", label: "Black Lotus vs Pure Himalayan", badge: "Most Popular" },
                  { slug: "black-lotus-vs-natural-shilajit", label: "Black Lotus vs Natural Shilajit", badge: "Altai Showdown" },
                  { slug: "natural-shilajit-vs-pure-himalayan", label: "Natural Shilajit vs Pure Himalayan", badge: "S-Tier Battle" },
                ].map(({ slug, label, badge }) => (
                  <Link
                    key={slug}
                    href={`/compare/${slug}`}
                    className="block bg-white rounded-2xl border-2 border-[#D1EDD8] p-4 hover:border-[#10B981] hover:shadow-sm transition-all group"
                  >
                    <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1.5">{badge}</div>
                    <div className="text-xs font-bold text-[#0D1F14] leading-snug mb-2">{label}</div>
                    <div className="text-[10px] text-[#7BA899] group-hover:text-[#4A6358] transition-colors">
                      Full comparison with verdict, table & FAQs →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Section heading */}
            <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0D1F14] mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>Shilajit Price Comparison</h2>
                <p className="text-sm text-[#7BA899]">
                  {PRODUCTS.length}+ products ranked by tier, purity &amp; value. Updated weekly.
                </p>
              </div>
              <a
                href="/compare"
                className="text-xs text-[#182B1F] hover:text-white border-2 border-[#182B1F] hover:bg-[#182B1F] px-4 py-1.5 rounded-full font-semibold transition-colors whitespace-nowrap"
              >
                View Full Table →
              </a>
            </div>

            {/* ── 5. ALL DEALS GRID ────────────────────────────────────────── */}
            {/* ── CATEGORY FILTER ─────────────────────────────────────────── */}
            <div className="mb-6">
              <CategoryFilter active={activeCategory} onChange={setActiveCategory} counts={categoryCounts} />
            </div>

            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-bold text-[#7BA899] uppercase tracking-widest">All Products</span>
              <div className="flex-1 h-px bg-[#D1EDD8]" />
            </div>

            {/* Quick stats bar */}
            {quickStats && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-xs text-[#7BA899]">
                <span>
                  Showing <strong className="text-[#4A6358]">{filtered.length}</strong> products
                </span>
                <span className="text-[#9EC9AD]">·</span>
                <span>
                  Avg price <strong className="text-[#4A6358]">${quickStats.avgPrice.toFixed(2)}</strong>
                </span>
                <span className="text-[#9EC9AD]">·</span>
                <span>
                  Best value <strong className="text-[#10B981]">${quickStats.bestPpg.toFixed(2)}/gram</strong>
                </span>
              </div>
            )}

            {/* Subtle quiz link below filter bar */}
            <p className="text-xs text-[#7BA899] mb-4 -mt-2">
              Too many options?{" "}
              <a href="/quiz" className="text-[#10B981] hover:text-[#182B1F] font-semibold transition-colors underline underline-offset-2 decoration-[#9EC9AD]">
                Get a personalized pick →
              </a>
            </p>

            {/* Main content: sidebar + grid */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <SidebarFilters filters={filters} onChange={setFilters} totalResults={filtered.length} />

              <div className="flex-1 min-w-0">
                {filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="text-4xl mb-3">🔍</div>
                    <h3 className="text-base font-semibold text-[#0D1F14] mb-1">
                      No products match your filters
                    </h3>
                    <p className="text-sm text-[#7BA899] mb-4">
                      Try adjusting your tier selection or price range.
                    </p>
                    <button
                      onClick={() => { setFilters(DEFAULT_FILTERS); setActiveCategory("All"); }}
                      className="px-5 py-2 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white text-sm font-semibold transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs text-[#7BA899]">
                        Showing{" "}
                        <span className="text-[#4A6358] font-medium">{displayedProducts.length}</span>
                        {" "}of{" "}
                        <span className="text-[#4A6358] font-medium">{filtered.length}</span>{" "}products
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        <span className="text-[10px] text-[#7BA899]">Featured = affiliate partner</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {displayedProducts.map((product) => (
                        <DealCard key={product.id} product={product} />
                      ))}
                    </div>

                    {hasMore && (
                      <div className="mt-8 text-center">
                        <button
                          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-semibold text-sm transition-all duration-200 shadow-sm"
                        >
                          Load More
                          <span className="text-[#9EC9AD] text-xs font-normal">
                            ({filtered.length - visibleCount} remaining)
                          </span>
                        </button>
                      </div>
                    )}

                    {!hasMore && filtered.length > PAGE_SIZE && (
                      <div className="mt-6 text-center">
                        <p className="text-xs text-[#7BA899]">
                          All {filtered.length} products shown ·{" "}
                          <a href="/compare" className="text-[#10B981] hover:text-[#0D1F14] underline underline-offset-2">
                            View full comparison table →
                          </a>
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. SHILAJIT BUYING GUIDES ────────────────────────────────────── */}
        <section className="py-16 bg-white border-t border-[#D1EDD8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0D1F14] mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>Shilajit Buying Guides</h2>
                <p className="text-sm text-[#7BA899]">
                  Research-backed guides to help you find the best shilajit for your needs
                </p>
              </div>
              <Link
                href="/blog"
                className="text-xs text-[#182B1F] hover:text-white border-2 border-[#182B1F] hover:bg-[#182B1F] px-4 py-1.5 rounded-full font-semibold transition-colors whitespace-nowrap"
              >
                View All Guides →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FEATURED_GUIDES.map((guide) => (
                <BlogGuideCard key={guide.slug} {...guide} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. HOW IT WORKS ─────────────────────────────────────────────── */}
        <HowItWorks />

        {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
        <FAQ />
      </main>

      {/* ── 9. FOOTER ────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
