import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://shilajitprice.com/sitemap.xml",
    host: "https://shilajitprice.com",
  };
}
