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
];
