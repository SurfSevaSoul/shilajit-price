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
    id: "prana-resin",
    vendor: "Prana Himalaya",
    productName: "Himalayan Shilajit Resin",
    tier: "A",
    category: "Resin",
    priceUsd: 49.99,
    weightGrams: 30,
    pricePerGram: 1.67,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "#",
    description: "Cold-processed resin from high-altitude deposits.",
  },
  {
    id: "suro-resin",
    vendor: "Suromag",
    productName: "Altai Shilajit Resin",
    tier: "B",
    category: "Resin",
    priceUsd: 32.99,
    weightGrams: 20,
    pricePerGram: 1.65,
    coaVerified: false,
    freeShipping: true,
    labTested: true,
    affiliateUrl: "#",
    description: "Sourced from Altai mountains. Basic lab testing on file.",
  },
  {
    id: "purblack-resin",
    vendor: "PurBlack",
    productName: "Live Resin Shilajit",
    tier: "A",
    category: "Resin",
    priceUsd: 59.95,
    weightGrams: 30,
    pricePerGram: 2.0,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "#",
    description: "Patented refining process. ISO certified facility.",
  },
  {
    id: "noomi-capsules",
    vendor: "Noomi",
    productName: "Shilajit Capsules 500mg",
    tier: "B",
    category: "Capsules",
    priceUsd: 24.99,
    weightGrams: 30,
    pricePerGram: 0.83,
    coaVerified: false,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "#",
    description: "Budget-friendly capsules, 60 count.",
  },
  {
    id: "doctor-caps",
    vendor: "Doctor's Best",
    productName: "Shilajit Fulvic Acid Caps",
    tier: "C",
    category: "Capsules",
    priceUsd: 19.99,
    weightGrams: 24,
    pricePerGram: 0.83,
    coaVerified: false,
    freeShipping: false,
    labTested: false,
    affiliateUrl: "#",
    description: "Mass-market supplement brand. Lower potency extract.",
  },
  {
    id: "just-thrive-gummies",
    vendor: "Pure Craft",
    productName: "Shilajit Gummies 250mg",
    tier: "B",
    category: "Gummies",
    priceUsd: 34.99,
    weightGrams: 60,
    pricePerGram: 0.58,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "#",
    description: "60-count gummies with 250mg per serving.",
  },
  {
    id: "lost-empire-gummies",
    vendor: "Lost Empire Herbs",
    productName: "Shilajit Gummy Bears",
    tier: "C",
    category: "Gummies",
    priceUsd: 27.99,
    weightGrams: 45,
    pricePerGram: 0.62,
    coaVerified: false,
    freeShipping: false,
    labTested: false,
    affiliateUrl: "#",
    description: "Entry-level gummies. No COA available.",
  },
  {
    id: "holista-tincture",
    vendor: "Holista",
    productName: "Shilajit Liquid Extract",
    tier: "B",
    category: "Tinctures",
    priceUsd: 38.99,
    weightGrams: 45,
    pricePerGram: 0.87,
    coaVerified: true,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "#",
    description: "Alcohol-free liquid extract in MCT oil base.",
  },
  {
    id: "sunfoods-honey",
    vendor: "Sunfoods",
    productName: "Shilajit + Raw Honey",
    tier: "B",
    category: "Honey",
    priceUsd: 29.99,
    weightGrams: 227,
    pricePerGram: 0.13,
    coaVerified: false,
    freeShipping: false,
    labTested: true,
    affiliateUrl: "#",
    description: "Raw wildflower honey with shilajit powder blend.",
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
