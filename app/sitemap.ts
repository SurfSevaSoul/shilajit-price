import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./data/blog";

const BASE_URL = "https://shilajitprice.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPostEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPostEntries,
  ];
}
