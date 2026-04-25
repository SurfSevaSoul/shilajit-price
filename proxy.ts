import { NextRequest, NextResponse } from "next/server";

/**
 * Markdown negotiation middleware.
 *
 * When an agent sends `Accept: text/markdown` and requests a blog post URL,
 * the request is rewritten to /api/md/[slug] which returns a lightweight
 * markdown representation of the post (title, description, key metadata).
 *
 * All other requests — including non-blog pages and requests without the
 * markdown Accept header — fall through to normal Next.js rendering.
 */
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  if (!accept.includes("text/markdown")) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/);

  if (!match) {
    // Non-blog pages: fall through to HTML rendering
    return NextResponse.next();
  }

  const slug = match[1];
  const url = request.nextUrl.clone();
  url.pathname = `/api/md/${slug}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Only run on blog post routes — keeps middleware overhead minimal
  matcher: "/blog/:slug+",
};
