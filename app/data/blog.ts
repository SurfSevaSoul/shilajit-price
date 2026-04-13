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
];
