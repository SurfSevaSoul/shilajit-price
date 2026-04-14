# Blog Post Template

Use this template for every new blog post. Copy the structure below into a new file at:
`app/blog/[your-slug]/page.tsx`

And add the post metadata to `app/data/blog.ts`.

---

## 1. Add to `app/data/blog.ts`

```ts
{
  slug: "your-slug-here",
  title: "Your Post Title Here",
  description: "One sentence description (used in meta, blog index cards, and schema).",
  publishedAt: "2026-04-14",
  updatedAt: "2026-04-14",
  readingTimeMin: 8,
  tags: ["Tag1", "Tag2", "Tag3"],  // First tag = primary category display
  coverEmoji: "🔬",
  category: "Buying Guide",  // One of: Comparison, Science, Safety, Rankings, Research, Buying Guide, Price Analysis
},
```

---

## 2. Page file structure

```tsx
// app/blog/your-slug/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";
import BlogCTA from "../../components/blog/BlogCTA";

// ─── Constants ───────────────────────────────────────────────────────────────

const BASE_URL = "https://shilajitprice.com";
const SLUG = "your-slug-here";
const POST_URL = `${BASE_URL}/blog/${SLUG}`;

const AFFILIATE_RESIN =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";

// ─── Next.js Metadata ────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Your Post Title Here | ShilajitPrice.com",
  description: "One sentence description.",
  keywords: "keyword1, keyword2, keyword3",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "Your Post Title Here",
    description: "One sentence description.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-14",
    modifiedTime: "2026-04-14",
  },
};

// ─── Schema: Article (stays in the page file) ────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Your Post Title Here",
  description: "One sentence description.",
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  url: POST_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  author: [
    { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
    {
      "@type": "Person",
      name: "ShilajitPrice Research Team",
      jobTitle: "Supplement Research & Price Analysis",
      worksFor: { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
      knowsAbout: ["Shilajit", "Supplement COA analysis"],
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "ShilajitPrice.com",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 200, height: 60 },
  },
  keywords: "keyword1, keyword2, keyword3",
  articleSection: "Buying Guide",
  wordCount: 1500,
};

// ─── Schema: FAQ (passed as prop to BlogPostLayout — auto-renders JSON-LD + cards) ──

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Question 1?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Answer 1.",
    },
  },
  {
    "@type": "Question",
    name: "Question 2?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Answer 2.",
    },
  },
  // Add 3–5 questions total
];

// ─── Page component ──────────────────────────────────────────────────────────

export default function YourPostPage() {
  return (
    <>
      {/* Article schema — injected here; breadcrumb + FAQ auto-injected by BlogPostLayout */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <BlogPostLayout
        heading={
          <>
            Your Post <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Title</span> Here
          </>
        }
        description="One sentence description that appears as the subtitle under the H1."
        tags={["Tag1", "Tag2", "Tag3"]}
        publishedAt="2026-04-14"
        updatedAt="2026-04-14"
        readingTimeMin={8}
        currentSlug={SLUG}
        breadcrumbLabel="Short Label for Breadcrumb"
        faqItems={faqItems}
      >
        {/* ── Affiliate disclosure (required at top of every post) ── */}
        <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4 text-xs text-[#5d8c6e] leading-relaxed">
          <span className="font-semibold text-[#9ec9ad]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.
        </div>

        {/* ── Section 1 ── */}
        <section>
          <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">Section heading</h2>
          <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
            <p>Paragraph text here.</p>
            <p>More paragraph text here.</p>
          </div>
        </section>

        {/* ── Drop BlogCTA inline every 3 sections ── */}
        <BlogCTA />

        {/* ── Section 2 ── */}
        <section>
          <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">Section heading</h2>
          <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
            <p>Paragraph text here.</p>
          </div>
        </section>

        {/* ── Mid-article Black Lotus callout (optional, contextual) ── */}
        {/* Use when content naturally leads to a product recommendation */}
        {/*
        <div className="bg-[#182b1f] border border-emerald-500/40 rounded-2xl p-6">
          <h3 className="text-base font-black text-[#e8f4ec] mb-2">Black Lotus Shilajit Resin</h3>
          <p className="text-xs text-[#9ec9ad] mb-4">85%+ fulvic acid · COA verified · $39.99 · Free shipping</p>
          <a href={AFFILIATE_RESIN} target="_blank" rel="noopener noreferrer sponsored"
            className="block w-full text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors">
            Shop Black Lotus Resin — $39.99 →
          </a>
        </div>
        */}

        {/* ── Section 3 ── */}
        <section>
          <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">Section heading</h2>
          <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
            <p>Paragraph text here.</p>
          </div>
        </section>

        {/* ── Drop BlogCTA again before the final section ── */}
        <BlogCTA headline="See How All Brands Compare" />

        {/* ── Conclusion / Bottom line section ── */}
        <section>
          <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">The bottom line</h2>
          <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
            <p>Summary paragraph. Internal link to related post: <Link href="/blog/best-shilajit-resin-2026" className="text-emerald-400 hover:underline">best shilajit resin</Link>.</p>
          </div>
        </section>

        {/* BlackLotusCTA, FAQ, RelatedPosts, and Back nav are auto-injected by BlogPostLayout */}
      </BlogPostLayout>
    </>
  );
}
```

---

## 3. Checklist before publishing

- [ ] Slug added to `app/data/blog.ts` (site index + sitemap auto-update)
- [ ] `metadata.title` includes ` | ShilajitPrice.com`
- [ ] `metadata.alternates.canonical` set to full URL
- [ ] `articleSchema.wordCount` updated to match final word count
- [ ] `faqItems` has 3–5 questions covering main user queries
- [ ] Affiliate disclosure at top of children
- [ ] `<BlogCTA />` inserted every ~3 sections
- [ ] At least 2 internal links to other blog posts (`/blog/...`) or site pages (`/compare`, `/`)
- [ ] No `<nav>`, `<Footer />`, or outer `<div>` wrapper — layout provides those
- [ ] No breadcrumb JSON-LD or FAQ JSON-LD in the page file — BlogPostLayout auto-injects both

---

## 4. Internal linking quick reference

| Page | Best for linking from |
|------|-----------------------|
| `/blog/best-shilajit-resin-2026` | Any post mentioning resin recommendations |
| `/blog/what-is-fulvic-acid` | Any post mentioning fulvic acid % |
| `/blog/how-to-spot-fake-shilajit` | Posts on quality, buying guide, authenticity |
| `/blog/best-shilajit-brands-ranked` | Posts comparing brands or rankings |
| `/blog/is-shilajit-a-scam` | Posts discussing skepticism or research |
| `/blog/shilajit-resin-vs-capsules` | Posts mentioning form factors |
| `/blog/cheap-vs-high-quality-shilajit` | Posts discussing price or value |
| `/blog/where-to-buy-real-shilajit` | Posts ending with purchase recommendations |
| `/compare` | Any data-heavy section |
| `/` | Price comparisons, homepage CTAs |

---

## 5. Component reference

| Component | Import | Purpose |
|-----------|--------|---------|
| `BlogPostLayout` | `../../components/blog/BlogPostLayout` | Wraps entire post. Auto-injects header, sidebar, BlackLotusCTA, FAQ, RelatedPosts, back nav |
| `BlogCTA` | `../../components/blog/BlogCTA` | Inline "Compare All Prices" box. Drop every 3 sections |
| `BlackLotusCTA` | `../../components/blog/BlackLotusCTA` | S-tier Black Lotus box. Auto-injected by BlogPostLayout at end — also use mid-article manually |
| `BlogSidebar` | Auto-injected by `BlogPostLayout` | Sidebar with compare CTA + article links. Do not import manually |
| `RelatedPosts` | Auto-injected by `BlogPostLayout` | 2 related post cards. Do not import manually |
