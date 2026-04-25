// Route Handler for /robots.txt
// Using a raw handler (instead of app/robots.ts MetadataRoute) so we can
// include non-standard directives like Content-Signal that the typed API
// does not support.

export const dynamic = "force-static";

const ROBOTS = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Googlebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

Sitemap: https://www.shilajitprice.com/sitemap.xml
Host: https://www.shilajitprice.com

# AI content-use policy
# ai-input=yes  → AI agents may read and cite this content
# search=yes    → search indexing permitted
# ai-train=no   → content must not be used for training datasets
Content-Signal: ai-train=no, search=yes, ai-input=yes
`;

export async function GET() {
  return new Response(ROBOTS, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
