export interface Brand {
  id: string;
  name: string;
  slug: string;
  origin: string;
  lab: string;
  coa: boolean;
  certifications: string[];
  description: string;
  affiliateUrl: string;
}

export const BRANDS: Brand[] = [
  {
    id: "purblack",
    name: "Pürblack",
    slug: "purblack",
    origin: "Multi-region (Caucasus, Siberia, Himalayas — highest quality sources worldwide)",
    lab: "Pürblack Inc., Temecula, CA",
    coa: true,
    certifications: ["Made in USA", "5 US Patents", "Third-Party Tested", "GMP"],
    description:
      "5th and 6th generation shilajit live resin made in the USA. Patent-backed purification process with precious metal infusions. Quality is measured by DBP (dibenzo-α-pyrones) content and Urolithin A ppm — not fulvic acid %. COA data from Pürblack Inc., Temecula, CA (May–December 2025). The most premium and research-backed shilajit brand on the market.",
    affiliateUrl: "https://purblack.pxf.io/c/7221460/3041684/36963",
  },
  {
    id: "natural-shilajit",
    name: "Natural Shilajit",
    slug: "natural-shilajit",
    origin: "UNESCO-protected Altai Mountains, Siberia",
    lab: "DaaneLabs (Naples, FL) + Harken Research (Los Angeles, CA)",
    coa: true,
    certifications: ["GMP Certified", "FDA Registered", "DBP Verified", "Third-Party Tested"],
    description:
      "Altai Mountains shilajit brand established in 2014, serving 180,000+ customers globally. COA testing by DaaneLabs (Naples, FL) for microbiology and Harken Research (Los Angeles, CA) for heavy metals and minerals (October–November 2024). Capsules also carry Eurofins Amazon certification (June 2024). DBP (dibenzo-α-pyrones) verified — the most specific authenticity marker for genuine shilajit. Natural Shilajit does not report fulvic acid percentage. Cold water extraction, no solvents. UNESCO-protected source region.",
    affiliateUrl: "https://naturalshilajit.com/?rfsn=9069392.c841fa",
  },
  {
    id: "pure-himalayan",
    name: "Pure Himalayan Shilajit",
    slug: "pure-himalayan",
    origin: "Himalayan Mountains (16,000+ ft)",
    lab: "Certified Laboratories, Burbank CA + Micro Quality Labs, Burbank CA (both A2LA ISO/IEC 17025, Cert 3034.01)",
    coa: true,
    certifications: ["A2LA ISO/IEC 17025", "GMP Certified", "Third-Party Tested", "Money-Back Guarantee"],
    description:
      "Himalayan-sourced shilajit tested by Certified Laboratories and Micro Quality Labs, both in Burbank CA and both A2LA ISO/IEC 17025 accredited (Cert 3034.01) — the most rigorous lab accreditation standard in our database. Most recent heavy metals COA: September 2024. FA reference: ~58% (Batch RE18, 2021 COA, UV method, non-A2LA result). Full mineral panel available — one of the most comprehensive publicly documented mineral profiles of any shilajit brand, including 20+ minerals by ICP-MS and ICP-OES. Up to 99.9% purity, no fillers or artificial additives. Free shipping, money-back guarantee.",
    affiliateUrl: "https://www.purehimalayanshilajit.com/?ref=4792",
  },
];
