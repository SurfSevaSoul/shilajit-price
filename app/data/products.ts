export type Tier = "S" | "A" | "B" | "C" | "D";
export type Category =
  | "All"
  | "Resin"
  | "Capsules"
  | "Gummies"
  | "Tinctures"
  | "Honey"
  | "Bundles";

export interface Product {
  id: string;
  vendor: string;
  productName: string;
  tier: Tier;
  category: Exclude<Category, "All">;
  priceUsd: number;
  weightGrams: number;
  pricePerGram: number;
  coaVerified: boolean;
  freeShipping: boolean;
  labTested: boolean;
  affiliateUrl: string;
  featured?: boolean;
  badge?: string;
  description?: string;
}

export const AFFILIATE_LINKS: Record<string, string> = {
  base: "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE",
  resin:
    "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE",
  capsules:
    "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-resin-powder-capsules-extra-strength?sca_ref=5188496.BbHTin3axE",
  gummies:
    "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-gummies?sca_ref=5188496.BbHTin3axE",
  tincture:
    "https://black-lotus-shilajit-shop.myshopify.com/products/pure-shilajit-tincture?sca_ref=5188496.BbHTin3axE",
  honey:
    "https://black-lotus-shilajit-shop.myshopify.com/products/shilajit-honey?sca_ref=5188496.BbHTin3axE",
};

export const PRODUCTS: Product[] = [
  // ── Black Lotus (Featured) ──────────────────────────────────────────────────
  {
    id: "bl-resin",
    vendor: "Black Lotus Shilajit",
    productName: "Pure Himalayan Resin",
    tier: "S",
    category: "Resin",
    priceUsd: 39.99,
    weightGrams: 30,
    pricePerGram: 1.33,
    coaVerified: true,
    freeShipping: true,
    labTested: true,
    affiliateUrl: AFFILIATE_LINKS.resin,
    featured: true,
    badge: "Best Value",
    description:
      "Third-party lab tested with full panel COA. 85%+ fulvic acid content.",
  },
  {
    id: "bl-capsules",
    vendor: "Black Lotus Shilajit",
    productName: "Extra Strength Capsules",
    tier: "S",
    category: "Capsules",
    priceUsd: 34.99,
    weightGrams: 60,
    pricePerGram: 0.58,
    coaVerified: true,
    freeShipping: true,
    labTested: true,
    affiliateUrl: AFFILIATE_LINKS.capsules,
    featured: true,
    badge: "Top Pick",
    description: "500mg per capsule, 60 count. Full-spectrum resin powder.",
  },
  {
    id: "bl-gummies",
    vendor: "Black Lotus Shilajit",
    productName: "Shilajit Gummies",
    tier: "A",
    category: "Gummies",
    priceUsd: 29.99,
    weightGrams: 45,
    pricePerGram: 0.67,
    coaVerified: true,
    freeShipping: true,
    labTested: true,
    affiliateUrl: AFFILIATE_LINKS.gummies,
    featured: true,
    description: "Delicious way to get your daily shilajit. 30 gummies.",
  },
  {
    id: "bl-tincture",
    vendor: "Black Lotus Shilajit",
    productName: "Pure Shilajit Tincture",
    tier: "A",
    category: "Tinctures",
    priceUsd: 44.99,
    weightGrams: 50,
    pricePerGram: 0.9,
    coaVerified: true,
    freeShipping: true,
    labTested: true,
    affiliateUrl: AFFILIATE_LINKS.tincture,
    featured: true,
    description: "Fast-absorbing liquid tincture. 2oz bottle, 60 servings.",
  },
  {
    id: "bl-honey",
    vendor: "Black Lotus Shilajit",
    productName: "Shilajit Honey Blend",
    tier: "A",
    category: "Honey",
    priceUsd: 36.99,
    weightGrams: 200,
    pricePerGram: 0.18,
    coaVerified: true,
    freeShipping: true,
    labTested: true,
    affiliateUrl: AFFILIATE_LINKS.honey,
    featured: true,
    description: "Raw Manuka honey infused with pure shilajit extract.",
  },
  // ── Competitor Products ─────────────────────────────────────────────────────
  {
    id: "himalayan-healing-resin",
    vendor: "Himalayan Healing",
    productName: "Himalayan Shilajit Resin",
    tier: "A",
    category: "Resin",
    priceUsd: 44.99,
    weightGrams: 55,
    pricePerGram: 0.82,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B01IW4QJWI?tag=shilajit0a-20",
    description: "Sun-dried gold-grade resin from high-altitude Himalayan deposits. 55g jar.",
  },
  {
    id: "betteralt-resin",
    vendor: "Better Alt",
    productName: "Pure Himalayan Shilajit Resin",
    tier: "B",
    category: "Resin",
    priceUsd: 27.99,
    weightGrams: 30,
    pricePerGram: 0.93,
    coaVerified: true,
    freeShipping: true,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B0C85ZQYG3?tag=shilajit0a-20",
    description: "75%+ fulvic acid, 85+ trace minerals. Includes lab test report.",
  },
  {
    id: "purblack-resin",
    vendor: "PurBlack",
    productName: "Live Resin True Gold Shilajit",
    tier: "A",
    category: "Resin",
    priceUsd: 59.95,
    weightGrams: 30,
    pricePerGram: 2.0,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B00MHAVDVQ?tag=shilajit0a-20",
    description: "Patented 5th-generation refining process. ISO certified facility. Gold formula.",
  },
  {
    id: "nutricost-capsules",
    vendor: "Nutricost",
    productName: "Shilajit Capsules 1000mg",
    tier: "B",
    category: "Capsules",
    priceUsd: 24.99,
    weightGrams: 60,
    pricePerGram: 0.42,
    coaVerified: false,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B0CBW5JFTQ?tag=shilajit0a-20",
    description: "120 capsules, 1000mg per serving. GMP compliant, NSF certified facility.",
  },
  {
    id: "doublewood-caps",
    vendor: "Double Wood",
    productName: "Pure Himalayan Shilajit Capsules",
    tier: "C",
    category: "Capsules",
    priceUsd: 22.99,
    weightGrams: 60,
    pricePerGram: 0.38,
    coaVerified: false,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B0B7KFV1NL?tag=shilajit0a-20",
    description: "120 capsules, 1000mg per serving. 20% fulvic acid standardized, no fillers.",
  },
  {
    id: "purecraft-gummies",
    vendor: "Purecraft",
    productName: "Himalayan Shilajit Gummies 800mg",
    tier: "B",
    category: "Gummies",
    priceUsd: 34.99,
    weightGrams: 60,
    pricePerGram: 0.58,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B0DZXQNJ2P?tag=shilajit0a-20",
    description: "60 gummies, 800mg per serving with magnesium, ashwagandha, and zinc.",
  },
  {
    id: "ohmychewy-gummies",
    vendor: "Oh My Chewy",
    productName: "Himalayan Shilajit Gummies",
    tier: "C",
    category: "Gummies",
    priceUsd: 27.99,
    weightGrams: 45,
    pricePerGram: 0.62,
    coaVerified: false,
    freeShipping: false,
    labTested: false,
    affiliateUrl: "https://www.amazon.com/dp/B0DBZ5S4BW?tag=shilajit0a-20",
    description: "120-count gummies, peach & mango flavor. With ashwagandha and shatavari.",
  },
  {
    id: "purehimalayan-tincture",
    vendor: "Pure Himalayan Shilajit",
    productName: "Shilajit Liquid Drops",
    tier: "B",
    category: "Tinctures",
    priceUsd: 38.99,
    weightGrams: 50,
    pricePerGram: 0.78,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B082RJXGQP?tag=shilajit0a-20",
    description: "50ml liquid drops sourced from 16,000 ft. 4.3 stars, 330+ reviews.",
  },
  {
    id: "naturalshilajit-honey",
    vendor: "Natural Shilajit",
    productName: "Shilajit Honey Sticks",
    tier: "B",
    category: "Honey",
    priceUsd: 29.99,
    weightGrams: 150,
    pricePerGram: 0.20,
    coaVerified: false,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "https://www.amazon.com/dp/B01J2CLRSA?tag=shilajit0a-20",
    description: "30 honey sticks with Altai shilajit resin. 0.5g shilajit per stick.",
  },
  {
    id: "bl-bundle",
    vendor: "Black Lotus Shilajit",
    productName: "Starter Bundle (Resin + Capsules)",
    tier: "S",
    category: "Bundles",
    priceUsd: 64.99,
    weightGrams: 90,
    pricePerGram: 0.72,
    coaVerified: true,
    freeShipping: true,
    labTested: true,
    affiliateUrl: AFFILIATE_LINKS.base,
    featured: true,
    badge: "Best Deal",
    description:
      "Resin + Capsules bundle. Save 15% vs buying separately. Free shipping.",
  },
];

export const TIER_COLORS: Record<Tier, string> = {
  S: "bg-amber-400 text-amber-900",
  A: "bg-emerald-500 text-white",
  B: "bg-blue-500 text-white",
  C: "bg-slate-500 text-white",
  D: "bg-red-500 text-white",
};

export const TIER_DESCRIPTIONS: Record<Tier, string> = {
  S: "Elite quality — full COA, highest purity, best value",
  A: "High quality — lab tested, reliable source",
  B: "Average — some testing, acceptable quality",
  C: "Below average — limited testing or transparency",
  D: "Poor — no testing, questionable sourcing",
};

export const CATEGORIES: Category[] = [
  "All",
  "Resin",
  "Capsules",
  "Gummies",
  "Tinctures",
  "Honey",
  "Bundles",
];
