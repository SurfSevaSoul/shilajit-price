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
  fulvicAcidMgPerServing?: number;
  fulvicAcidPct?: number;
  humicAcidMgPerServing?: number;
  humicAcidPct?: number;
  purityPct?: string;           // e.g. "up to 99.9%"
  traceMinerals?: string;       // e.g. "85 ionic trace minerals"
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
  // ── PÜRBLACK (source: purblack.com — US patent-backed, 3rd-party tested) ──
  "purblack-research-grade-15g": {
    productId: "purblack-research-grade-15g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "5 US patents covering purification process",
      "COA available on purblack.com",
    ],
  },
  "purblack-true-gold-15g": {
    productId: "purblack-true-gold-15g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "5 US patents covering purification process",
      "COA available on purblack.com",
    ],
  },
  "purblack-true-gold-30g": {
    productId: "purblack-true-gold-30g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "5 US patents covering purification process",
      "COA available on purblack.com",
    ],
  },
  "purblack-immunity-max-30g": {
    productId: "purblack-immunity-max-30g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "5 US patents covering purification process",
      "COA available on purblack.com",
    ],
  },
  "purblack-true-gold-x7-210g": {
    productId: "purblack-true-gold-x7-210g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "5 US patents covering purification process",
      "COA available on purblack.com",
    ],
  },
  "purblack-white-rabbit-vive-15g": {
    productId: "purblack-white-rabbit-vive-15g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "Precious metal infusion formula — 5 US patents",
      "COA available on purblack.com",
    ],
  },
  "purblack-white-rabbit-slim-15g": {
    productId: "purblack-white-rabbit-slim-15g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "Precious metal infusion formula — 5 US patents",
      "COA available on purblack.com",
    ],
  },
  "purblack-white-rabbit-serene-15g": {
    productId: "purblack-white-rabbit-serene-15g",
    coaStatus: "verified",
    testingLab: "US Pharmaceutical-Grade Third-Party Facility",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Third-party tested at US pharmaceutical-grade facility",
      "Precious metal infusion formula — 5 US patents",
      "COA available on purblack.com",
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
