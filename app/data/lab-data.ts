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
  // Microbiology / certification flags
  microbiologyClean?: boolean;  // All micro markers pass (E. coli, Salmonella, Staph neg; plate count acceptable)
  amazonCertPassed?: boolean;   // Amazon marketplace certification passed (e.g. Eurofins)
  // Comprehensive mineral panel (ICP-MS / ICP-OES results)
  mineralPanel?: Record<string, string>; // mineral name → value with units
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

  // ── PURE HIMALAYAN ───────────────────────────────────────────────────────────
  // Testing labs: Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01)
  //   and Micro Quality Labs, Burbank CA (A2LA ISO 17025, Cert 3034.01).
  // Heavy metals reported per 200mg serving (mcg). All results PASS.
  // FA: Only COA available is Batch RE18, Apr 2021 (Micro Quality Labs), 58% UV method,
  //   noted as NOT covered under A2LA accreditation.
  // Most recent heavy metals COA: September 2024.
  "ph-resin-30g": {
    productId: "ph-resin-30g",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "Micro Quality Labs, Burbank CA (A2LA ISO 17025, Cert 3034.01)",
    testingLabAccreditation: "A2LA ISO/IEC 17025",
    testDate: "April 2021",
    batchNumber: "RE18",
    fulvicAcidPct: 58,
    purityPct: "Up to 99.9%",
    microbiologyClean: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    mineralPanel: {
      "Potassium":    "91,850 ppm",
      "Calcium":      "24,525 ppm",
      "Magnesium":    "9,841 ppm",
      "Sodium":       "6,200 ppm",
      "Phosphorus":   "2,348 ppm",
      "Iron":         "1,040 ppm",
      "Silicon":      "796 ppm",
      "Zinc":         "490 ppm",
      "Boron":        "293 ppm",
      "Manganese":    "86 ppm",
      "Copper":       "6.5 ppm",
      "Cobalt":       "0.8 ppm",
      "Selenium":     "0.1 ppm",
    },
    notes: [
      "Batch RE18 — Micro Quality Labs, Burbank CA — April 2021",
      "Heavy metals (ppm): Mercury 0.0 · Lead 0.9 · Arsenic 0.6 · Cadmium 0.1",
      "Fulvic Acid: 58% (UV method — Batch RE18, 2021 COA; result NOT covered under A2LA accreditation)",
      "Do not present 58% as a current batch-verified figure",
      "Full mineral panel available — one of the most comprehensive of any brand in our database",
      "Purity: Up to 99.9% — no artificial additives or fillers",
    ],
  },
  "ph-drops-50ml": {
    productId: "ph-drops-50ml",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01)",
    testingLabAccreditation: "A2LA ISO/IEC 17025",
    testDate: "January 2024",
    batchNumber: "LX889",
    purityPct: "Up to 99.9%",
    microbiologyClean: true,
    heavyMetals: { lead: "not-tested", mercury: "not-tested", arsenic: "not-tested", cadmium: "not-tested" },
    notes: [
      "Batch LX889 — Certified Laboratories, Burbank CA — January 2024",
      "Microbiology COA only — no heavy metals data for 50mL size; see 15mL batch (LM445) for reference heavy metals",
      "TPC: <10 cfu/gm · Yeast/Mold: <10 cfu/gm — exceptional results",
      "E. coli: Absent · Pseudomonas: Absent · S. aureus: Absent · Salmonella/Shigella: Absent · C. albicans: Absent",
      "Fulvic acid % not covered by this COA — see Batch RE18 2021 COA for ~58% reference figure (UV method, non-A2LA)",
    ],
  },
  "ph-tablets-90ct": {
    productId: "ph-tablets-90ct",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01)",
    testingLabAccreditation: "A2LA ISO/IEC 17025",
    testDate: "September 2024",
    batchNumber: "STH11",
    purityPct: "Up to 99.9%",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch STH11 — Certified Laboratories, Burbank CA — September 2024",
      "Heavy metals per 200mg serving (mcg): Lead 0.095 · Arsenic 0.192 · Cadmium 0.066 · Mercury Not Detected",
      "Cleanest heavy metals of all Pure Himalayan products tested — exceptionally low lead (0.095 mcg/serving)",
      "Fulvic acid % not covered by this COA — see Batch RE18 2021 COA for ~58% reference figure (UV method, non-A2LA)",
    ],
  },
  "ph-soft-resin": {
    productId: "ph-soft-resin",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01)",
    testingLabAccreditation: "A2LA ISO/IEC 17025",
    testDate: "January 2024",
    batchNumber: "LM445",
    purityPct: "Up to 99.9%",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch LM445 — Certified Laboratories, Burbank CA — January 2024",
      "Heavy metals per 200mg serving (mcg): Lead 0.208 · Arsenic 0.304 · Cadmium 0.025 · Mercury Not Detected",
      "Reference heavy metals for 50mL liquid drops (same product line, Batch LX889 tested for microbiology only)",
      "Fulvic acid % not covered by this COA — see Batch RE18 2021 COA for ~58% reference figure (UV method, non-A2LA)",
    ],
  },
  "ph-solid": {
    productId: "ph-solid",
    coaStatus: "verified",
    coaUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
    testingLab: "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01)",
    testingLabAccreditation: "A2LA ISO/IEC 17025",
    testDate: "September 2024",
    batchNumber: "SD22",
    purityPct: "Up to 99.9%",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Batch SD22 — Certified Laboratories, Burbank CA — September 2024",
      "Covers both 8g and 36g sizes — same batch, consistent results confirmed",
      "8g size — heavy metals per 200mg serving (mcg): Lead 0.138 · Arsenic 0.622 · Cadmium 0.014 · Mercury 0.001",
      "36g size — heavy metals per 200mg serving (mcg): Lead 0.070 · Arsenic 0.607 · Cadmium 0.006 · Mercury 0.001",
      "36g shows lowest lead (0.070 mcg/serving) and lowest cadmium (0.006 mcg/serving) of all PH products",
      "Fulvic acid % not covered by this COA — see Batch RE18 2021 COA for ~58% reference figure (UV method, non-A2LA)",
    ],
  },

  // ── NATURAL SHILAJIT ─────────────────────────────────────────────────────────
  // Testing: DaaneLabs, Naples, FL (microbiology) + Harken Research, Los Angeles, CA
  // (heavy metals + minerals), October–November 2024.
  // Natural Shilajit does NOT report fulvic acid percentage.
  // Resin heavy metals are higher than processed forms — normal for raw resin;
  // all values remain within legal US dietary supplement limits.
  "natural-shilajit-resin-20g": {
    productId: "natural-shilajit-resin-20g",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA)",
    testDate: "October 2024",
    microbiologyClean: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Microbiology — DaaneLabs, Naples, FL (October 2024)",
      "Total Plate Count: 215 cfu/g · Yeast & Mold: <10 cfu/g · E. coli: Negative · Salmonella: Negative · Staph aureus: Negative",
      "Heavy Metals — Harken Research, Los Angeles, CA (October 2024)",
      "Lead: 4.714 ppm · Arsenic: 3.757 ppm · Chromium: 3.751 ppm · Cadmium: 0.477 ppm · Mercury: 0.029 ppm",
      "Note: Resin heavy metals are higher than processed product forms — normal for raw resin; all values within legal US supplement limits",
      "Sexual enhancement adulterants: All not detected",
      "Natural Shilajit does not report fulvic acid percentage",
    ],
  },
  "natural-shilajit-resin-10g": {
    productId: "natural-shilajit-resin-10g",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA)",
    testDate: "October 2024",
    microbiologyClean: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website — same resin formula as 20g and 150g",
      "Microbiology — DaaneLabs, Naples, FL (October 2024)",
      "Total Plate Count: 215 cfu/g · Yeast & Mold: <10 cfu/g · E. coli: Negative · Salmonella: Negative · Staph aureus: Negative",
      "Heavy Metals — Harken Research, Los Angeles, CA (October 2024)",
      "Lead: 4.714 ppm · Arsenic: 3.757 ppm · Chromium: 3.751 ppm · Cadmium: 0.477 ppm · Mercury: 0.029 ppm",
      "Note: Resin heavy metals are higher than processed product forms — normal for raw resin; all values within legal US supplement limits",
      "Sexual enhancement adulterants: All not detected",
      "Natural Shilajit does not report fulvic acid percentage",
    ],
  },
  "natural-shilajit-caps-60ct": {
    productId: "natural-shilajit-caps-60ct",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA) + Eurofins (Amazon certification)",
    testDate: "October–November 2024 (Eurofins: June 2024)",
    microbiologyClean: true,
    amazonCertPassed: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Microbiology — DaaneLabs, Naples, FL (November 2024)",
      "Total Plate Count: <100 cfu/g · Yeast & Mold: <100 cfu/g · E. coli: Negative · Salmonella: Negative · Staph aureus: Negative",
      "Heavy Metals — Harken Research, Los Angeles, CA (October 2024)",
      "Lead: 2.976 ppm · Arsenic: 2.606 ppm · Chromium: 2.428 ppm · Cadmium: 0.201 ppm · Mercury: 0.019 ppm",
      "Sexual enhancement adulterants: All not detected",
      "Amazon Certification — Eurofins (June 2024): PASS — all adulterants not detected, all heavy metals within Amazon specifications",
      "Natural Shilajit does not report fulvic acid percentage",
    ],
  },
  "natural-shilajit-honey-30ct": {
    productId: "natural-shilajit-honey-30ct",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA)",
    testDate: "October 2024",
    microbiologyClean: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website (NutriHoney product)",
      "Microbiology — DaaneLabs, Naples, FL (October 2024)",
      "Total Plate Count: 540 cfu/g · Yeast & Mold: <10 cfu/g · E. coli: Negative · Salmonella: Negative · Staph aureus: Negative",
      "Heavy Metals — Harken Research, Los Angeles, CA (October 2024) — Very clean",
      "Lead: 0.739 ppm · Arsenic: 0.236 ppm · Chromium: 0.120 ppm · Cadmium: Not Detected · Mercury: Not Detected",
      "Sexual enhancement adulterants: All not detected",
      "Minerals — Harken Research (October 2024): Potassium 2.750 mg/g · Calcium 0.748 mg/g · Magnesium 0.380 mg/g · Iron 0.018 mg/g · Manganese 0.007 mg/g",
      "Natural Shilajit does not report fulvic acid percentage",
    ],
  },
  "natural-shilajit-resin-150g": {
    productId: "natural-shilajit-resin-150g",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA)",
    testDate: "October 2024",
    microbiologyClean: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website — same resin formula as 20g and 10g, bulk format",
      "Microbiology — DaaneLabs, Naples, FL (October 2024)",
      "Total Plate Count: 215 cfu/g · Yeast & Mold: <10 cfu/g · E. coli: Negative · Salmonella: Negative · Staph aureus: Negative",
      "Heavy Metals — Harken Research, Los Angeles, CA (October 2024)",
      "Lead: 4.714 ppm · Arsenic: 3.757 ppm · Chromium: 3.751 ppm · Cadmium: 0.477 ppm · Mercury: 0.029 ppm",
      "Note: Resin heavy metals are higher than processed product forms — normal for raw resin; all values within legal US supplement limits",
      "Sexual enhancement adulterants: All not detected",
      "Natural Shilajit does not report fulvic acid percentage",
    ],
  },
  "natural-shilajit-vegtabs-60": {
    productId: "natural-shilajit-vegtabs-60",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA)",
    testDate: "October 2024",
    microbiologyClean: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website",
      "Microbiology — DaaneLabs, Naples, FL (October 2024) — Exceptional: lowest plate count of all NS products",
      "Total Plate Count: <10 cfu/g · Yeast & Mold: <10 cfu/g · E. coli: Negative · Salmonella: Negative · Staph aureus: Negative",
      "Heavy Metals — Harken Research, Los Angeles, CA (October 2024)",
      "Lead: 1.761 ppm · Arsenic: 1.719 ppm · Chromium: 1.164 ppm · Cadmium: 0.356 ppm · Mercury: <LOQ (below quantification limit)",
      "Sexual enhancement adulterants: All not detected",
      "Natural Shilajit does not report fulvic acid percentage",
    ],
  },
  "natural-shilajit-sun-dried-120": {
    productId: "natural-shilajit-sun-dried-120",
    coaStatus: "verified",
    coaUrl: "https://naturalshilajit.com/pages/shilajit-resin-certificates-of-analysis-lab-tests",
    testingLab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA)",
    testDate: "October 2024",
    microbiologyClean: true,
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "COA publicly available on brand website — sun-dried tablet format of same Altai shilajit",
      "Microbiology — DaaneLabs, Naples, FL (October 2024) — Exceptional: lowest plate count of all NS products",
      "Total Plate Count: <10 cfu/g · Yeast & Mold: <10 cfu/g · E. coli: Negative · Salmonella: Negative · Staph aureus: Negative",
      "Heavy Metals — Harken Research, Los Angeles, CA (October 2024)",
      "Lead: 1.761 ppm · Arsenic: 1.719 ppm · Chromium: 1.164 ppm · Cadmium: 0.356 ppm · Mercury: <LOQ (below quantification limit)",
      "Sexual enhancement adulterants: All not detected",
      "Natural Shilajit does not report fulvic acid percentage",
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
