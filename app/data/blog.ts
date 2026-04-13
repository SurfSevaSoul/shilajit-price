export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMin: number;
  tags: string[];
  coverEmoji: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-shilajit-resin-2026",
    title: "Best Shilajit Resin in 2026 — Prices Compared",
    description:
      "We tested and priced 6 shilajit resins side-by-side. Here's which brands have the highest fulvic acid content, a real COA, and the best price per gram.",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-13",
    readingTimeMin: 7,
    tags: ["Resin", "Comparison", "Buying Guide"],
    coverEmoji: "⬡",
  },
  {
    slug: "what-is-fulvic-acid",
    title: "What is Fulvic Acid and Why It Matters When Buying Shilajit",
    description:
      "Fulvic acid is the compound that makes shilajit worth taking — but most brands won't tell you how much is actually in their product. Here's what to look for.",
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-13",
    readingTimeMin: 6,
    tags: ["Science", "Buying Guide", "Fulvic Acid"],
    coverEmoji: "⚗",
  },
  {
    slug: "how-to-spot-fake-shilajit",
    title: "How to Spot Fake Shilajit — and Where to Find the Real Thing",
    description:
      "The shilajit market is flooded with fakes, fillers, and mislabeled products. Here are 5 tests to verify authenticity and the red flags that expose a counterfeit.",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-13",
    readingTimeMin: 7,
    tags: ["Safety", "Buying Guide", "Authentication"],
    coverEmoji: "🔍",
  },
];
