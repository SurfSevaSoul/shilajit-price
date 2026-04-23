import { BLOG_POSTS } from "../data/blog";

const BASE_URL = "https://www.shilajitprice.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = BLOG_POSTS.map((post) => {
    const url = `${BASE_URL}/blog/${post.slug}`;
    const pubDate = new Date(post.publishedAt).toUTCString();
    const categories = post.tags.map((t) => `    <category>${escapeXml(t)}</category>`).join("\n");

    return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${escapeXml(post.description)}</description>
    <pubDate>${pubDate}</pubDate>
${categories}
  </item>`;
  }).join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ShilajitPrice.com Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Independent shilajit price comparisons, buying guides, and supplement research from ShilajitPrice.com.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE_URL}/og-image.png</url>
      <title>ShilajitPrice.com Blog</title>
      <link>${BASE_URL}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
