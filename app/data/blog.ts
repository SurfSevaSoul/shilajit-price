import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMin: number;
  tags: string[];
  coverEmoji: string;
  category: string;
}

// ─── Hardcoded registry for existing posts ────────────────────────────────────
// New posts don't need to be added here — just drop a _meta.json file in the
// post's directory (app/blog/<slug>/_meta.json) and it will auto-appear.
const REGISTERED_POSTS: BlogPost[] = [
  {
    slug: "best-shilajit-resin-2026",
    title: "Best Shilajit Resin in 2026 — Prices Compared",
    description:
      "We tested and priced 6 shilajit resins side-by-side. Here's which brands have the highest fulvic acid content, a real COA, and the best price per gram.",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-14",
    readingTimeMin: 7,
    tags: ["Resin", "Comparison", "Buying Guide"],
    coverEmoji: "⬡",
    category: "Comparison",
  },
  {
    slug: "what-is-fulvic-acid",
    title: "What is Fulvic Acid and Why It Matters When Buying Shilajit",
    description:
      "Fulvic acid is the compound that makes shilajit worth taking — but most brands won't tell you how much is actually in their product. Here's what to look for.",
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-14",
    readingTimeMin: 6,
    tags: ["Science", "Buying Guide", "Fulvic Acid"],
    coverEmoji: "⚗",
    category: "Science",
  },
  {
    slug: "how-to-spot-fake-shilajit",
    title: "How to Spot Fake Shilajit — and Where to Find the Real Thing",
    description:
      "The shilajit market is flooded with fakes, fillers, and mislabeled products. Here are 5 tests to verify authenticity and the red flags that expose a counterfeit.",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-14",
    readingTimeMin: 7,
    tags: ["Safety", "Buying Guide", "Authentication"],
    coverEmoji: "🔍",
    category: "Safety",
  },
  {
    slug: "best-shilajit-brands-ranked",
    title: "Best Shilajit Brands Ranked in 2026 — Lab Data, Prices & Honest Reviews",
    description:
      "We ranked the top 10 shilajit brands using COA data, fulvic acid percentages, third-party testing, sourcing transparency, and price per gram. Here's who made the cut.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Rankings", "Reviews", "Buying Guide"],
    coverEmoji: "🏅",
    category: "Rankings",
  },
  {
    slug: "is-shilajit-a-scam",
    title: "Is Shilajit a Scam? We Analyzed 55+ Products to Find Out",
    description:
      "We analyzed COA data, lab reports, and customer reviews across 55+ shilajit products to answer the question: is shilajit a scam? Here's what the data actually says.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Research", "Safety", "Buyer Awareness"],
    coverEmoji: "🔬",
    category: "Research",
  },
  {
    slug: "shilajit-resin-vs-capsules",
    title: "Shilajit Resin vs Capsules vs Powder — Which Form is Actually Best?",
    description:
      "We compare every shilajit form factor — resin, capsules, powder, gummies, and tinctures — on bioavailability, convenience, price per gram, and authenticity risk.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Form Factor", "Bioavailability", "Buying Guide"],
    coverEmoji: "⚖️",
    category: "Buying Guide",
  },
  {
    slug: "cheap-vs-high-quality-shilajit",
    title: "Cheap vs High Quality Shilajit — What's Actually Different?",
    description:
      "We break down exactly what separates a $15 shilajit from a $70 one — sourcing, testing, purification, and active compound concentration. And whether premium is worth it.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Price Analysis", "Value", "Buying Guide"],
    coverEmoji: "💰",
    category: "Price Analysis",
  },
  {
    slug: "where-to-buy-real-shilajit",
    title: "Where to Buy Real Shilajit in 2026 — Trusted Sources Only",
    description:
      "We ranked every purchasing channel and the top vendors by COA transparency, sourcing accountability, and real value — so you only spend money on the real thing.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Buying Guide", "Vendor Reviews", "2026"],
    coverEmoji: "🛒",
    category: "Buying Guide",
  },
  {
    slug: "best-shilajit-for-testosterone",
    title: "Best Shilajit for Testosterone in 2026 — Ranked by Lab Data",
    description:
      "We analyzed the clinical research on shilajit and testosterone, then ranked the top 5 products by verified fulvic acid content, COA quality, and price per gram.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Testosterone", "Health Benefits", "Rankings"],
    coverEmoji: "💪",
    category: "Health Benefits",
  },
  {
    slug: "best-shilajit-for-men",
    title: "Best Shilajit for Men in 2026 — Energy, Testosterone & Performance",
    description:
      "Why men specifically benefit from shilajit, which benefits are actually backed by clinical evidence, and the top 5 products ranked by purity data and real-world value.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Men's Health", "Health Benefits", "Rankings"],
    coverEmoji: "🧬",
    category: "Health Benefits",
  },
  {
    slug: "best-shilajit-for-energy",
    title: "Best Shilajit for Energy and Fatigue in 2026 — What Actually Works",
    description:
      "How shilajit boosts energy at the cellular level, what to actually look for when buying for fatigue support, and the top 5 products ranked by verified potency and value.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Energy", "Health Benefits", "Fatigue"],
    coverEmoji: "⚡",
    category: "Health Benefits",
  },
  {
    slug: "best-shilajit-under-50",
    title: "Best Shilajit Under $50 in 2026 — Quality Picks That Won't Break the Bank",
    description:
      "What you can realistically get for under $50, which red flags to watch for at lower prices, and the top 5 shilajit picks under $50 ranked by purity data and actual value.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Under $50", "Price Comparison", "Buying Guide"],
    coverEmoji: "💵",
    category: "Price Comparison",
  },
  {
    slug: "best-affordable-shilajit",
    title: "Best Affordable Shilajit Brands in 2026 — Value Without Compromise",
    description:
      "How to identify real value in the shilajit market, what quality gets cut at lower price points, and the top affordable brands ranked by cost per serving and COA quality.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Affordable", "Price Comparison", "Value"],
    coverEmoji: "🏷️",
    category: "Price Comparison",
  },
  {
    slug: "shilajit-price-per-gram",
    title: "Shilajit Price Per Gram Comparison — Don't Overpay in 2026",
    description:
      "Why price per gram is the only meaningful way to compare shilajit costs, how to calculate it correctly, and a full 20+ product comparison table with tier scores.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 9,
    tags: ["Price Analysis", "Price Comparison", "Buying Guide"],
    coverEmoji: "📊",
    category: "Price Comparison",
  },
  {
    slug: "is-expensive-shilajit-worth-it",
    title: "Is Expensive Shilajit Worth It? We Compared $20 vs $80 Products",
    description:
      "What actually drives shilajit prices up, a head-to-head purity data comparison across the full price spectrum, and our verdict on where the quality sweet spot actually is.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Price Analysis", "Price Comparison", "Value"],
    coverEmoji: "⚖️",
    category: "Price Comparison",
  },
  {
    slug: "where-to-buy-shilajit-online-usa",
    title: "Where to Buy Shilajit Online in the USA (2026) — Trusted Sources Only",
    description:
      "Why buying source matters, Amazon vs direct brands, red flags in online sellers, and the top 5 trusted US sources ranked by COA quality and accountability.",
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    readingTimeMin: 8,
    tags: ["Buying Guide", "USA", "Vendor Reviews"],
    coverEmoji: "🇺🇸",
    category: "Buying Guide",
  },

  // ── NEW POSTS (April 15, 2026) ────────────────────────────────────────────
  {
    slug: "altai-vs-himalayan-shilajit",
    title: "Altai vs Himalayan Shilajit — What's Actually Different?",
    description:
      "We break down the real differences between Altai and Himalayan shilajit — geology, mineral profiles, fulvic acid concentration, climate, and which products in our database come from each source.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 8,
    tags: ["Origins", "Comparison", "Buying Guide"],
    coverEmoji: "🏔️",
    category: "Origins",
  },
  {
    slug: "black-lotus-shilajit-review",
    title: "Black Lotus Shilajit Review 2026 — COA, Lab Data & Honest Verdict",
    description:
      "Full Black Lotus Shilajit review: 64.51% verified fulvic acid (resin, Batch 93 COA), Altai sourcing, complete product lineup analysis, lab data breakdown, and honest verdict on who it's best for.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 9,
    tags: ["Brand Reviews", "COA Verified", "S-Tier"],
    coverEmoji: "⬡",
    category: "Brand Reviews",
  },
  {
    slug: "pure-himalayan-shilajit-review",
    title: "Pure Himalayan Shilajit Review 2026 — Is It Worth It?",
    description:
      "Full Pure Himalayan Shilajit review: ISO/IEC 17025 accredited lab testing, 60% fulvic acid COA data, complete product lineup, pricing analysis, and honest verdict.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 8,
    tags: ["Brand Reviews", "COA Verified", "ISO Certified"],
    coverEmoji: "🏔️",
    category: "Brand Reviews",
  },
  {
    slug: "how-to-read-shilajit-coa",
    title: "How to Read a Shilajit COA — What the Lab Numbers Actually Mean",
    description:
      "A plain-English guide to reading shilajit Certificates of Analysis: what fulvic acid %, heavy metals panels, microbial counts, and accreditation logos actually mean for your purchase decision.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 7,
    tags: ["COA", "Lab Testing", "Science"],
    coverEmoji: "🧪",
    category: "Science",
  },
  {
    slug: "best-shilajit-for-women",
    title: "Best Shilajit for Women in 2026 — What the Research Actually Says",
    description:
      "What does the research actually say about shilajit for women? We cover hormonal health, iron levels, energy, and rank the top 5 products by verified purity data and value.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 8,
    tags: ["Women's Health", "Health Benefits", "Rankings"],
    coverEmoji: "🌿",
    category: "Health Benefits",
  },
  {
    slug: "shilajit-ashwagandha-stack",
    title: "Shilajit and Ashwagandha Stack — Does It Actually Work?",
    description:
      "We review the research on combining shilajit and ashwagandha: synergy between fulvic acid and withanolides, what studies show, optimal dosing, and which products to use for this stack.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 8,
    tags: ["Stack", "Adaptogens", "Science"],
    coverEmoji: "⚗️",
    category: "Science",
  },
  {
    slug: "shilajit-dosage-guide",
    title: "How Much Shilajit Should You Take? Complete Dosage Guide 2026",
    description:
      "Research-backed shilajit dosage guide: recommended amounts by form factor, timing, cycling, what happens with too much, and how to start safely as a new user.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 7,
    tags: ["Dosage", "Buying Guide", "Science"],
    coverEmoji: "⚖️",
    category: "Buying Guide",
  },
  {
    slug: "shilajit-heavy-metals-safety",
    title: "Shilajit Heavy Metals — What's Safe and What's Not",
    description:
      "Why heavy metals are a real risk in shilajit, what Lead/Mercury/Arsenic/Cadmium safety limits are, how to read a heavy metals panel on a COA, and which brands in our database actually pass.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 8,
    tags: ["Safety", "Heavy Metals", "COA"],
    coverEmoji: "⚠️",
    category: "Safety",
  },
  {
    slug: "best-shilajit-gummies",
    title: "Best Shilajit Gummies in 2026 — Are They Actually Worth It?",
    description:
      "We compare shilajit gummies vs resin on bioavailability, fulvic acid content, and value per dollar. Plus the top gummy picks from our database ranked by COA quality and actual value.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 7,
    tags: ["Gummies", "Buying Guide", "Form Factor"],
    coverEmoji: "🍬",
    category: "Buying Guide",
  },
  {
    slug: "shilajit-beginners-guide",
    title: "Shilajit for Beginners — Complete First-Time Buyer's Guide",
    description:
      "Everything a first-time buyer needs to know: what shilajit is, what to expect, which form to start with, how to spot fakes, red flags to avoid, and our recommended starter products.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingTimeMin: 9,
    tags: ["Beginner", "Buying Guide", "Getting Started"],
    coverEmoji: "🌱",
    category: "Buying Guide",
  },
];

// ─── Auto-discovery via _meta.json ────────────────────────────────────────────
// Scans app/blog/ for any directory that contains a _meta.json file and is NOT
// already in REGISTERED_POSTS. Discovered posts are merged in and sorted by
// publishedAt descending. Adding a new blog post only requires:
//   1. Creating app/blog/<slug>/page.tsx
//   2. Creating app/blog/<slug>/_meta.json  ← that's it
function discoverDynamicPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), "app", "blog");
  const registeredSlugs = new Set(REGISTERED_POSTS.map((p) => p.slug));
  const discovered: BlogPost[] = [];

  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(blogDir, { withFileTypes: true });
  } catch {
    return [];
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    if (registeredSlugs.has(slug)) continue; // already in registry

    const metaPath = path.join(blogDir, slug, "_meta.json");
    if (!fs.existsSync(metaPath)) continue;

    try {
      const raw = fs.readFileSync(metaPath, "utf-8");
      const meta = JSON.parse(raw) as BlogPost;
      discovered.push({ ...meta, slug }); // slug from directory name is authoritative
    } catch {
      console.warn(`[blog] Failed to parse _meta.json for slug: ${slug}`);
    }
  }

  return discovered;
}

// Merge registered + discovered, sort newest-first
export const BLOG_POSTS: BlogPost[] = [
  ...REGISTERED_POSTS,
  ...discoverDynamicPosts(),
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
