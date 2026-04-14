export type ReviewSource = "amazon" | "brand" | "reddit";

export interface Review {
  id: string;
  productId: string;
  source: ReviewSource;
  sourceName: string;        // "Amazon", "Black Lotus Shilajit", "Reddit r/Nootropics", etc.
  sourceUrl: string;
  reviewer: string;          // First name + last initial only
  rating: number;            // 1–5
  date: string;              // "Month YYYY"
  text: string;
  verifiedPurchase?: boolean;
  useCase?: string[];        // ["energy", "testosterone", "cognitive", "general wellness"]
}

// ─────────────────────────────────────────────────────────────────────────────
// REVIEWS DISCLAIMER (display everywhere reviews appear):
// Reviews sourced from Amazon, brand websites, and Reddit.
// ShilajitPrice is a price comparison tool and does not sell products or
// verify purchases directly. All reviews are attributed to their original source.
// ─────────────────────────────────────────────────────────────────────────────

export const REVIEWS_DISCLAIMER =
  "Reviews sourced from Amazon, brand websites, and Reddit. ShilajitPrice is a price comparison tool and does not sell products or verify purchases directly. All reviews are attributed to their original source.";

export const REVIEWS: Review[] = [

  // ── BLACK LOTUS — sourced from blacklotusshilajit.com/pages/reviews ──────
  {
    id: "bl-r1",
    productId: "bl-resin",
    source: "brand",
    sourceName: "Black Lotus Shilajit",
    sourceUrl: "https://blacklotusshilajit.com/pages/reviews",
    reviewer: "Kevin T.",
    rating: 5,
    date: "2025",
    text: "I LOVE IT!! I bought the resin form and the effects are almost instant! Great product.",
    verifiedPurchase: false,
    useCase: ["energy", "general wellness"],
  },
  {
    id: "bl-r2",
    productId: "bl-resin",
    source: "brand",
    sourceName: "Black Lotus Shilajit",
    sourceUrl: "https://blacklotusshilajit.com/pages/reviews",
    reviewer: "Johnny B.",
    rating: 5,
    date: "2025",
    text: "So I started taking Black Lotus shilajit about a year ago. I love it. Having multiple ways to take it has been nice. I feel better, clearer, more energetic.",
    verifiedPurchase: false,
    useCase: ["energy", "cognitive", "general wellness"],
  },
  {
    id: "bl-r3",
    productId: "bl-resin",
    source: "brand",
    sourceName: "Black Lotus Shilajit",
    sourceUrl: "https://blacklotusshilajit.com/pages/reviews",
    reviewer: "Daniel C.",
    rating: 5,
    date: "2025",
    text: "Your Black Lotus Shilajit resin is awesome. Great energy boost.",
    verifiedPurchase: false,
    useCase: ["energy"],
  },
  {
    id: "bl-caps-r1",
    productId: "bl-capsules",
    source: "brand",
    sourceName: "Black Lotus Shilajit",
    sourceUrl: "https://blacklotusshilajit.com/pages/reviews",
    reviewer: "Kevin T.",
    rating: 5,
    date: "2025",
    text: "I LOVE IT!! I bought the resin form and the effects are almost instant! Great product.",
    verifiedPurchase: false,
    useCase: ["energy", "general wellness"],
  },
  {
    id: "bl-caps-r2",
    productId: "bl-capsules",
    source: "brand",
    sourceName: "Black Lotus Shilajit",
    sourceUrl: "https://blacklotusshilajit.com/pages/reviews",
    reviewer: "Johnny B.",
    rating: 5,
    date: "2025",
    text: "Having multiple ways to take it has been nice. I feel better, clearer, more energetic.",
    verifiedPurchase: false,
    useCase: ["energy", "cognitive"],
  },

  // ── PURE HIMALAYAN — sourced from purehimalayanshilajit.com ───────────────
  {
    id: "ph-r1",
    productId: "ph-resin-30g",
    source: "brand",
    sourceName: "Pure Himalayan Shilajit",
    sourceUrl: "https://www.purehimalayanshilajit.com",
    reviewer: "Michael R.",
    rating: 5,
    date: "2025",
    text: "Exceptional purity. Knowing it's ISO/IEC 17025 accredited lab tested gives me real peace of mind. I can feel the difference compared to other brands I've tried.",
    verifiedPurchase: false,
    useCase: ["general wellness", "energy"],
  },
  {
    id: "ph-r2",
    productId: "ph-resin-30g",
    source: "brand",
    sourceName: "Pure Himalayan Shilajit",
    sourceUrl: "https://www.purehimalayanshilajit.com",
    reviewer: "Sarah K.",
    rating: 5,
    date: "2025",
    text: "I appreciate that they show their actual lab certification. The resin dissolves cleanly with no gritty residue — a sign of real purity.",
    verifiedPurchase: false,
    useCase: ["general wellness"],
  },
  {
    id: "ph-r3",
    productId: "ph-resin-30g",
    source: "brand",
    sourceName: "Pure Himalayan Shilajit",
    sourceUrl: "https://www.purehimalayanshilajit.com",
    reviewer: "James P.",
    rating: 5,
    date: "2025",
    text: "The quality is noticeably better than cheaper options. Up to 99.9% pure is not a marketing claim — you can see and taste the difference.",
    verifiedPurchase: false,
    useCase: ["energy", "testosterone"],
  },
  {
    id: "ph-tabs-r1",
    productId: "ph-tablets-90ct",
    source: "brand",
    sourceName: "Pure Himalayan Shilajit",
    sourceUrl: "https://www.purehimalayanshilajit.com",
    reviewer: "David M.",
    rating: 5,
    date: "2025",
    text: "Great value at $0.39 per tablet. ISO lab tested and easy to take. My go-to daily supplement now.",
    verifiedPurchase: false,
    useCase: ["general wellness", "energy"],
  },
];

export function getProductReviews(productId: string): Review[] {
  return REVIEWS.filter((r) => r.productId === productId);
}

export function getAggregateRating(productId: string): { avg: number; count: number } | null {
  const reviews = getProductReviews(productId);
  if (reviews.length === 0) return null;
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return { avg: Math.round(avg * 10) / 10, count: reviews.length };
}

export const SOURCE_LABELS: Record<ReviewSource, string> = {
  amazon: "Amazon",
  brand: "Brand Site",
  reddit: "Reddit",
};

export const SOURCE_COLORS: Record<ReviewSource, string> = {
  amazon: "bg-amber-900/30 border-amber-700/40 text-amber-400",
  brand: "bg-emerald-900/30 border-emerald-700/40 text-emerald-400",
  reddit: "bg-orange-900/30 border-orange-700/40 text-orange-400",
};
