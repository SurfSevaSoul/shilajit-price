export type CoaStatus =
  | "verified"          // COA publicly available and linked
  | "listed-on-amazon"  // COA mentioned on Amazon product page
  | "not-available";    // No public COA found

export type HeavyMetalResult = "pass" | "fail" | "not-tested";

export interface LabEntry {
  productId: string;
  coaStatus: CoaStatus;
  coaUrl?: string;
  testingLab?: string;
  testingLabAccreditation?: string;
  testDate?: string;
  batchNumber?: string;
  fulvicAcidMgPerServing?: number;
  fulvicAcidPct?: number;
  humicAcidMgPerServing?: number;
  humicAcidPct?: number;
  purityPct?: string;           // e.g. "up to 99.9%"
  traceMinerals?: string;       // e.g. "85 ionic trace minerals"
  // Pürblack-specific quality markers (DBP & Urolithin A instead of FA%)
  dbpPct?: number;              // Dibenzo-α-pyrones content %
  urolithinAppm?: number;       // Urolithin A concentration in ppm
  terpeneProfile?: string[];    // White Rabbit proprietary terpene blend
  heavyMetals: {
    lead: HeavyMetalResult;
    mercury: HeavyMetalResult;
    arsenic: HeavyMetalResult;
    cadmium: HeavyMetalResult;
  };
  notes?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// All lab data is sourced ONLY from publicly verifiable brand COA pages.
// We do not independently test products.
// Always verify current lab reports on the brand's official website.
// ─────────────────────────────────────────────────────────────────────────────

export const LAB_DATA: Record<string, LabEntry> = {

  // ── BLACK LOTUS (source: blacklotusshilajit.com/pages/lab-analysis) ──────
  // Batch 93 COAs from IAS Laboratories, Phoenix, AZ (May–June 2025).
  // Resin/Tincture/Honey: 64.51% FA (June 2025 COA).
  // Tablets: 73.11% FA (May 2025 COA).
  // Capsules: 74.30% FA (April–May 2025 COA).
  // All products: heavy metals and microbiology PASS.
  "bl-resin": {
    productId: "bl-resin",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "June 2025",
    fulvicAcidPct: 64.51,
    fulvicAcidMgPerServing: 161,
    humicAcidMgPerServing: 22,
    traceMinerals: "85 ionic trace minerals",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 COA — IAS Laboratories, Phoenix, AZ — June 2025",
      "Fulvic acid: 64.51% by weight (161mg per 250mg serving)",
      "Heavy metals (ICP-MS): Lead 1.17 ppm · Arsenic 0.88 ppm · Cadmium 0.15 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-capsules": {
    productId: "bl-capsules",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "April–May 2025",
    fulvicAcidPct: 74.30,
    fulvicAcidMgPerServing: 446,
    humicAcidMgPerServing: 64,
    traceMinerals: "85 ionic trace minerals",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Capsules COA — IAS Laboratories, Phoenix, AZ — April–May 2025",
      "Fulvic acid: 74.30% by weight (445.80mg per 600mg serving)",
      "Heavy metals (ICP-MS): Lead 1.37 ppm · Arsenic 0.92 ppm · Cadmium 0.20 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-tablets-60ct": {
    productId: "bl-tablets-60ct",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "May 2025",
    fulvicAcidPct: 73.11,
    fulvicAcidMgPerServing: 146,
    humicAcidMgPerServing: 16,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Tablets COA — IAS Laboratories, Phoenix, AZ — May 2025",
      "Fulvic acid: 73.11% by weight (146mg per 200mg tablet)",
      "Heavy metals (ICP-MS): Lead 1.06 ppm · Arsenic 0.94 ppm · Cadmium 0.26 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-tablets-120ct": {
    productId: "bl-tablets-120ct",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "May 2025",
    fulvicAcidPct: 73.11,
    fulvicAcidMgPerServing: 146,
    humicAcidMgPerServing: 16,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Tablets COA — IAS Laboratories, Phoenix, AZ — May 2025",
      "Fulvic acid: 73.11% by weight (146mg per 200mg tablet)",
      "Heavy metals (ICP-MS): Lead 1.06 ppm · Arsenic 0.94 ppm · Cadmium 0.26 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-gummies": {
    productId: "bl-gummies",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "2025",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Tested by IAS Laboratories, Phoenix, AZ",
      "Heavy metals and microbiology: all PASS",
    ],
  },
  "bl-gummies-60ct": {
    productId: "bl-gummies-60ct",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "2025",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Tested by IAS Laboratories, Phoenix, AZ",
      "Heavy metals and microbiology: all PASS",
    ],
  },
  "bl-tincture": {
    productId: "bl-tincture",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "June 2025",
    fulvicAcidPct: 64.51,
    fulvicAcidMgPerServing: 161,
    humicAcidMgPerServing: 22,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Resin COA — IAS Laboratories, Phoenix, AZ — June 2025",
      "Fulvic acid: 64.51% (161mg per serving) — same COA as resin product",
      "Heavy metals (ICP-MS): Lead 1.17 ppm · Arsenic 0.88 ppm · Cadmium 0.15 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-tincture-300ml": {
    productId: "bl-tincture-300ml",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "June 2025",
    fulvicAcidPct: 64.51,
    fulvicAcidMgPerServing: 161,
    humicAcidMgPerServing: 22,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Resin COA — IAS Laboratories, Phoenix, AZ — June 2025",
      "Fulvic acid: 64.51% (161mg per serving) — same COA as resin product",
      "Heavy metals (ICP-MS): Lead 1.17 ppm · Arsenic 0.88 ppm · Cadmium 0.15 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-honey": {
    productId: "bl-honey",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "June 2025",
    fulvicAcidPct: 64.51,
    fulvicAcidMgPerServing: 161,
    humicAcidMgPerServing: 22,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Resin COA — IAS Laboratories, Phoenix, AZ — June 2025",
      "Fulvic acid: 64.51% (161mg per serving) — same COA as resin product",
      "Heavy metals (ICP-MS): Lead 1.17 ppm · Arsenic 0.88 ppm · Cadmium 0.15 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-honey-150ml": {
    productId: "bl-honey-150ml",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "June 2025",
    fulvicAcidPct: 64.51,
    fulvicAcidMgPerServing: 161,
    humicAcidMgPerServing: 22,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Resin COA — IAS Laboratories, Phoenix, AZ — June 2025",
      "Fulvic acid: 64.51% (161mg per serving) — same COA as resin product",
      "Heavy metals (ICP-MS): Lead 1.17 ppm · Arsenic 0.88 ppm · Cadmium 0.15 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-honey-300ml": {
    productId: "bl-honey-300ml",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "June 2025",
    fulvicAcidPct: 64.51,
    fulvicAcidMgPerServing: 161,
    humicAcidMgPerServing: 22,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 Resin COA — IAS Laboratories, Phoenix, AZ — June 2025",
      "Fulvic acid: 64.51% (161mg per serving) — same COA as resin product",
      "Heavy metals (ICP-MS): Lead 1.17 ppm · Arsenic 0.88 ppm · Cadmium 0.15 ppm · Mercury ND",
      "Microbiology: Listeria ND · Salmonella Absent · E. coli ND · Yeast & Mold ND",
    ],
  },
  "bl-bundle": {
    productId: "bl-bundle",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "IAS Laboratories, Phoenix, AZ",
    testDate: "May–June 2025",
    fulvicAcidPct: 64.51,
    fulvicAcidMgPerServing: 161,
    humicAcidMgPerServing: 22,
    traceMinerals: "85 ionic trace minerals",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 93 COA — IAS Laboratories, Phoenix, AZ — May–June 2025",
      "Bundle includes resin (64.51% FA) and tablets (73.11% FA) — both independently COA-verified",
      "Heavy metals and microbiology: all PASS across all included products",
    ],
  },

  // ── PURE HIMALAYAN (source: purehimalayanshilajit.com) ────────────────────
  "ph-resin-30g": {
    productId: "ph-resin-30g",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "ISO/IEC 17025 Accredited Laboratory",
    testingLabAccreditation: "ISO/IEC 17025",
    purityPct: "Up to 99.9%",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "ISO/IEC 17025 is the international standard for testing laboratory competence",
      "Lab certificates available on brand website",
    ],
  },
  "ph-drops-50ml": {
    productId: "ph-drops-50ml",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "ISO/IEC 17025 Accredited Laboratory",
    testingLabAccreditation: "ISO/IEC 17025",
    purityPct: "Up to 99.9%",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: ["Liquid drops formulation; lab certification on brand website"],
  },
  "ph-tablets-90ct": {
    productId: "ph-tablets-90ct",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "ISO/IEC 17025 Accredited Laboratory",
    testingLabAccreditation: "ISO/IEC 17025",
    purityPct: "Up to 99.9%",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: ["Tablet formulation; ISO/IEC 17025 lab certified"],
  },

  // ── NATURAL SHILAJIT (source: naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests) ──
  "natural-shilajit-resin-20g": {
    productId: "natural-shilajit-resin-20g",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "3rd Party Laboratory (ICP-MS, LC-MS, FTIR)",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Testing methods: ICP-MS, LC-MS, FTIR",
      "DBP-verified Altai Mountains source",
    ],
  },
  "natural-shilajit-resin-10g": {
    productId: "natural-shilajit-resin-10g",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "3rd Party Laboratory (ICP-MS, LC-MS, FTIR)",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Testing methods: ICP-MS, LC-MS, FTIR",
      "DBP-verified Altai Mountains source",
    ],
  },
  "natural-shilajit-caps-60ct": {
    productId: "natural-shilajit-caps-60ct",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "3rd Party Laboratory (ICP-MS, LC-MS, FTIR)",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Testing methods: ICP-MS, LC-MS, FTIR",
      "DBP-verified Altai shilajit encapsulated",
    ],
  },
  "natural-shilajit-honey-30ct": {
    productId: "natural-shilajit-honey-30ct",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "3rd Party Laboratory (ICP-MS, LC-MS, FTIR)",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website (NutriHoney product)",
      "Testing methods: ICP-MS, LC-MS, FTIR",
      "DBP-verified Altai shilajit blended with raw honey",
    ],
  },
  "natural-shilajit-resin-150g": {
    productId: "natural-shilajit-resin-150g",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "3rd Party Laboratory (ICP-MS, LC-MS, FTIR)",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Testing methods: ICP-MS, LC-MS, FTIR",
      "Same DBP-verified Altai resin — bulk 150g format",
    ],
  },
  "natural-shilajit-vegtabs-60": {
    productId: "natural-shilajit-vegtabs-60",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "3rd Party Laboratory (ICP-MS, LC-MS, FTIR)",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Testing methods: ICP-MS, LC-MS, FTIR",
      "DBP-verified Altai shilajit in vegan tablet form",
    ],
  },
  "natural-shilajit-sun-dried-120": {
    productId: "natural-shilajit-sun-dried-120",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "3rd Party Laboratory (ICP-MS, LC-MS, FTIR)",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Testing methods: ICP-MS, LC-MS, FTIR",
      "Sun-dried DBP-verified Altai shilajit tablets",
    ],
  },
  // ── PÜRBLACK (source: Pürblack Inc., Temecula CA — COAs May–Dec 2025) ──────
  // Quality markers: DBP (dibenzo-α-pyrones) % and Urolithin A ppm.
  // Pürblack does NOT report fulvic acid percentage; do not display FA% for these products.
  // Authenticity: Verified Positive on all tested batches. Microbiology: All clean.
  "purblack-research-grade-15g": {
    productId: "purblack-research-grade-15g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    testDate: "December 2025",
    batchNumber: "11RUARG001",
    dbpPct: 19.8,
    urolithinAppm: 39.872,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 11RUARG001 — Pürblack Inc., Temecula, CA — December 2025",
      "DBP (ashless humic acids as carriers of dibenzo-α-pyrones): 19.8%",
      "Urolithin A: 39.872 ppm — highest of standard Pürblack line",
      "Heavy metals (mg/kg): Lead 0.47 · Arsenic 0.311 · Cadmium 0.032 · Mercury 0.001",
      "Authenticity: Verified Positive · Microbiology: All clean",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
      "5 US patents covering purification process",
    ],
  },
  "purblack-true-gold-15g": {
    productId: "purblack-true-gold-15g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    testDate: "May 2025",
    batchNumber: "11RUATG001",
    dbpPct: 17.5,
    urolithinAppm: 11.748,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 11RUATG001 — Pürblack Inc., Temecula, CA — May 2025",
      "DBP (ashless humic acids as carriers of dibenzo-α-pyrones): 17.5%",
      "Urolithin A: 11.748 ppm",
      "Heavy metals (mg/kg): Lead 0.121 · Arsenic 0.313 · Cadmium 0.031 · Mercury ND",
      "Authenticity: Verified Positive · Microbiology: All clean",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
      "5 US patents covering purification process",
    ],
  },
  "purblack-true-gold-30g": {
    productId: "purblack-true-gold-30g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA not provided for this size — refer to True Gold 15g batch (11RUATG001, May 2025) for reference data",
      "DBP content and Urolithin A data pending COA for 30g size",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
      "5 US patents covering purification process",
    ],
  },
  "purblack-immunity-max-30g": {
    productId: "purblack-immunity-max-30g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    testDate: "August 2025",
    batchNumber: "11RUA/IXB",
    dbpPct: 16.6,
    urolithinAppm: 14.379,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 11RUA/IXB — Pürblack Inc., Temecula, CA — August 2025",
      "DBP (ashless humic acids as carriers of dibenzo-α-pyrones): 16.6%",
      "Urolithin A: 14.379 ppm",
      "Heavy metals (mg/kg): Lead 0.71 · Arsenic 0.34 · Cadmium 0.032 · Mercury 0.002",
      "Authenticity: Verified Positive · Microbiology: All clean",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
      "5 US patents covering purification process",
    ],
  },
  "purblack-true-gold-x7-210g": {
    productId: "purblack-true-gold-x7-210g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA not provided for this size — bulk format of True Gold line",
      "DBP content and Urolithin A data pending COA for 210g size",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
      "5 US patents covering purification process",
    ],
  },
  "purblack-white-rabbit-vive-15g": {
    productId: "purblack-white-rabbit-vive-15g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    testDate: "December 2025",
    batchNumber: "169RUA/M3",
    dbpPct: 21.9,
    urolithinAppm: 58.497,
    terpeneProfile: ["Limonene", "α-Terpinyl acetate", "Zingiberene", "Linalool", "Camphene"],
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 169RUA/M3 — Pürblack Inc., Temecula, CA — December 2025",
      "DBP (ashless humic acids as carriers of dibenzo-α-pyrones): 21.9% — highest of all Pürblack products",
      "Urolithin A: 58.497 ppm",
      "Heavy metals (mg/kg): Lead 0.42 · Arsenic 1.14 · Cadmium 0.031 · Mercury 0.001",
      "Terpenes (proprietary organic essential oil blend): Limonene, α-Terpinyl acetate, Zingiberene, Linalool, Camphene",
      "Authenticity: Verified Positive · Microbiology: All clean",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
    ],
  },
  "purblack-white-rabbit-slim-15g": {
    productId: "purblack-white-rabbit-slim-15g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    testDate: "December 2025",
    batchNumber: "169RUA/WR2",
    dbpPct: 16.5,
    urolithinAppm: 52.391,
    terpeneProfile: ["Limonene", "Linalyl acetate", "Zingiberene", "Linalool", "α-Curcumene"],
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch 169RUA/WR2 — Pürblack Inc., Temecula, CA — December 2025",
      "DBP (ashless humic acids as carriers of dibenzo-α-pyrones): 16.5%",
      "Urolithin A: 52.391 ppm",
      "Heavy metals (mg/kg): Lead 0.34 · Arsenic 1.15 · Cadmium 0.023 · Mercury 0.001",
      "Terpenes (proprietary organic essential oil blend): Limonene, Linalyl acetate, Zingiberene, Linalool, α-Curcumene",
      "Authenticity: Verified Positive · Microbiology: All clean",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
    ],
  },
  "purblack-white-rabbit-serene-15g": {
    productId: "purblack-white-rabbit-serene-15g",
    coaStatus: "verified",
    coaUrl: "https://purblack.com",
    testingLab: "Pürblack Inc., Temecula, CA",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA pending update — current COA data not yet available for this product",
      "Pürblack does not report fulvic acid percentage — quality marker is DBP content",
      "5 US patents covering purification process",
    ],
  },
};

// For products not in LAB_DATA, returns a "not-available" fallback
export function getLabEntry(productId: string): LabEntry {
  return (
    LAB_DATA[productId] ?? {
      productId,
      coaStatus: "not-available",
      heavyMetals: {
        lead: "not-tested",
        mercury: "not-tested",
        arsenic: "not-tested",
        cadmium: "not-tested",
      },
    }
  );
}

export const LAB_DISCLAIMER =
  "Lab data sourced directly from brands' official COA pages. ShilajitPrice.com does not independently test products. Black Lotus products are third-party tested by IAS Laboratories (Phoenix, AZ) every single batch — all recent batches pass heavy metals, microbiology, and physical properties testing. Results may vary slightly between batches, which is normal for a raw natural product. Always verify current lab reports on the brand's official website before purchasing.";
