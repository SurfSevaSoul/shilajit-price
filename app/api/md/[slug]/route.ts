/**
 * GET /api/md/[slug]
 *
 * Returns a text/markdown representation of a blog post for AI agents that
 * send `Accept: text/markdown`. Reached via middleware rewrite — not
 * intended to be linked directly in the public UI.
 *
 * Content: H1 title, meta description, key metadata, and a canonical link.
 * Full HTML content lives at /blog/[slug].
 */
import { NextRequest, NextResponse } from "next/server";
import { BLOG_POSTS } from "../../../data/blog";

const BASE_URL = "https://www.shilajitprice.com";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return new NextResponse(
      `# 404 — Post Not Found\n\nNo blog post exists at \`/blog/${slug}\`.\n\nBrowse all guides: ${BASE_URL}/blog\n`,
      {
        status: 404,
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
      }
    );
  }

  const tags = post.tags?.length ? `**Tags:** ${post.tags.join(", ")}\n` : "";
  const readTime = post.readingTimeMin
    ? `**Reading time:** ${post.readingTimeMin} min\n`
    : "";
  const published = post.publishedAt
    ? `**Published:** ${post.publishedAt}\n`
    : "";
  const updated =
    post.updatedAt && post.updatedAt !== post.publishedAt
      ? `**Updated:** ${post.updatedAt}\n`
      : "";

  const md = [
    `# ${post.title}`,
    "",
    post.description,
    "",
    "---",
    "",
    published,
    updated,
    readTime,
    tags,
    "",
    `**Full article (HTML):** ${BASE_URL}/blog/${slug}`,
    "",
    `---`,
    "",
    `*This is a machine-readable summary. For the complete article with lab data,`,
    `comparison tables, and affiliate disclosures visit: ${BASE_URL}/blog/${slug}*`,
    "",
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n"); // collapse extra blank lines

  return new NextResponse(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
