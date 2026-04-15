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
  "bl-resin": {
    productId: "bl-resin",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "3rd Party US Laboratory",
    fulvicAcidMgPerServing: 150,
    humicAcidMgPerServing: 20,
    traceMinerals: "85 ionic trace minerals",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: [
      "Lab analysis published on official brand website",
      "150mg fulvic acid per 175mg serving (~85% fulvic acid content)",
    ],
  },
  "bl-capsules": {
    productId: "bl-capsules",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "3rd Party US Laboratory",
    fulvicAcidMgPerServing: 150,
    humicAcidMgPerServing: 20,
    traceMinerals: "85 ionic trace minerals",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: ["Same resin formulation as Black Lotus Resin; COA on official website"],
  },
  "bl-gummies": {
    productId: "bl-gummies",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "3rd Party US Laboratory",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: ["Gummy formulation; see COA page for full panel on resin extract used"],
  },
  "bl-tincture": {
    productId: "bl-tincture",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "3rd Party US Laboratory",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: ["Liquid tincture; resin extract COA available on official website"],
  },
  "bl-honey": {
    productId: "bl-honey",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "3rd Party US Laboratory",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: ["Honey blend; shilajit extract COA on official website"],
  },
  "bl-bundle": {
    productId: "bl-bundle",
    coaStatus: "verified",
    coaUrl: "https://blacklotusshilajit.com/pages/lab-analysis",
    testingLab: "3rd Party US Laboratory",
    fulvicAcidMgPerServing: 150,
    humicAcidMgPerServing: 20,
    traceMinerals: "85 ionic trace minerals",
    heavyMetals: { lead: "pass", mercury: "pass", arsenic: "pass", cadmium: "pass" },
    notes: ["Bundle of resin + capsules; both share the same COA"],
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
  "Lab data sourced directly from brand's official COA pages. ShilajitPrice.com does not independently test products. Always verify current lab reports on the brand's website before purchasing.";
