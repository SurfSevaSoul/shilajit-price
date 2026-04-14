# GEO Audit Report: ShilajitPrice.com

**Audit Date:** 2026-04-14
**URL:** https://shilajitprice.com
**Business Type:** Publisher / Affiliate E-commerce Hybrid (supplement price comparison)
**Pages Analyzed:** 12 (homepage, /blog, 5 blog posts, /lab-data, /reviews, /methodology, /compare, /about)

---

## Executive Summary

**Overall GEO Score: 46/100 (Poor)**

ShilajitPrice.com has a solid technical foundation — server-side rendering, all AI crawlers explicitly allowed, and an llms.txt file in place — but critical gaps in brand authority and E-E-A-T signals severely limit AI citation potential. The site's biggest vulnerabilities are zero third-party brand mentions (no Reddit, Wikipedia, or press presence), anonymous authorship across all 11+ blog posts, and schema markup errors that block Google rich results eligibility. Fixing named authors, schema issues, and establishing Reddit/community presence are the highest-ROI actions.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 53/100 | 25% | 13.25 |
| Brand Authority | 5/100 | 20% | 1.00 |
| Content E-E-A-T | 52/100 | 20% | 10.40 |
| Technical GEO | 81/100 | 15% | 12.15 |
| Schema & Structured Data | 52/100 | 10% | 5.20 |
| Platform Optimization | 41/100 | 10% | 4.10 |
| **Overall GEO Score** | | | **46/100** |

---

## Critical Issues (Fix Immediately)

### 1. Product schema `availability` uses invalid bare string
**Pages affected:** All DealCard instances on homepage and /compare
**Issue:** `"availability": "InStock"` is invalid. Schema.org requires the full URL: `"https://schema.org/InStock"`
**Fix:** Update Product schema generation in DealCard.tsx to use `https://schema.org/InStock`

### 2. No `sameAs` in Organization schema
**Pages affected:** Footer (organizationSchema), /about page
**Issue:** Organization schema has zero `sameAs` links, making it impossible for AI systems to cross-reference the entity with known knowledge base entries.
**Fix:** Add all available profile URLs to `sameAs` array (at minimum: the site's own URL, plus any social profiles when created)

### 3. All blog posts are anonymously authored
**Pages affected:** All 11+ blog posts at /blog/[slug]
**Issue:** No named author with credentials on any post. Google's E-E-A-T guidelines and AI citation systems strongly prefer attributable expertise. YMYL (health/supplement) content without author credentials is flagged as low-authority.
**Fix:** Create an author profile (e.g., "The ShilajitPrice Research Team" with methodology link, or a named editor with bio page)

### 4. No `image` property on Product schemas
**Pages affected:** All DealCard product schema blocks
**Issue:** Product structured data without an image is ineligible for Google Shopping rich results and AI product cards.
**Fix:** Add `"image": "..."` to each Product schema block using product image URLs

---

## High Priority Issues

### 5. Deprecated HowTo schema present
**Pages affected:** Homepage (How It Works section)
**Issue:** Google removed HowTo rich results support in September 2023. The HowTo schema on the homepage no longer generates rich results and wastes crawl budget.
**Fix:** Remove HowTo schema or replace with FAQPage schema for the same content

### 6. No Organization `logo` as ImageObject
**Pages affected:** Footer organizationSchema
**Issue:** Google's Knowledge Panel requires `logo` defined as an `ImageObject` (not a bare URL string) with `url`, `width`, and `height` properties.
**Fix:** Add `"logo": { "@type": "ImageObject", "url": "https://shilajitprice.com/icon", "width": 32, "height": 32 }` to Organization schema

### 7. No Dataset schema on /lab-data
**Pages affected:** /lab-data
**Issue:** The /lab-data page contains structured COA data across 70+ products — a perfect candidate for Dataset schema, which AI systems (especially Perplexity and Google) use to surface data pages in research queries.
**Fix:** Add Dataset schema to /lab-data page metadata

### 8. Zero Reddit or community presence
**Pages affected:** External (not a code fix)
**Issue:** AI models heavily cite Reddit for product research queries ("best shilajit," "is shilajit worth it"). ShilajitPrice.com has zero mentions in r/Supplements, r/Nootropics, r/Biohackers.
**Fix:** Establish Reddit presence — answer questions in relevant subreddits, link to /methodology and /lab-data when genuinely relevant

### 9. No Wikipedia entity recognition
**Pages affected:** External
**Issue:** ChatGPT and Gemini weight Wikipedia-linked entities significantly higher for citation. The brand has no Wikipedia presence or link.
**Fix:** Aim for third-party press coverage that creates Wikipedia-citable sources; contribute to shilajit-related Wikipedia articles as a factual reference

### 10. llms.txt lacks section structure and /llms-full.txt
**Pages affected:** /llms.txt
**Issue:** Current llms.txt is a flat file. The llms.txt specification (llmstxt.org) recommends structured sections: `# Site`, `## Pages`, `## Blog`, with optional `/llms-full.txt` for comprehensive content.
**Fix:** Restructure llms.txt with proper sections; add `/llms-full.txt` with full page descriptions

---

## Medium Priority Issues

### 11. `speakable` property missing from Article schemas
**Pages affected:** All blog posts
**Issue:** Google's `speakable` schema property marks content passages as suitable for text-to-speech AI responses. Missing on all articles.
**Fix:** Add `"speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".article-intro"] }` to Article schemas

### 12. No RSS feed
**Pages affected:** /feed.xml (does not exist)
**Issue:** RSS feeds enable AI systems (especially Perplexity and Bing) to discover new content immediately on publication without waiting for crawl cycles.
**Fix:** Add a Next.js RSS route at /feed.xml generating an RSS 2.0 feed from BLOG_POSTS data

### 13. No PubMed or scientific citations in blog posts
**Pages affected:** All blog posts
**Issue:** Supplement content without citations to peer-reviewed research scores low on E-E-A-T. AI systems cross-reference cited sources when evaluating trustworthiness.
**Fix:** Add 2-3 PubMed citations per blog post (fulvic acid studies, heavy metal safety data)

### 14. No IndexNow implementation for Bing
**Pages affected:** Site-wide
**Issue:** Bing Copilot (used by millions) indexes new pages faster via IndexNow. Without it, new blog posts may take weeks to appear in Bing AI responses.
**Fix:** Implement IndexNow API calls on new page publication via Vercel Edge Function or webhook

### 15. Open Graph images missing on blog posts
**Pages affected:** All /blog/[slug] pages
**Issue:** Blog posts inherit the generic OG image. Per-post OG images significantly improve link preview click-through when shared on social platforms that AI models train on.
**Fix:** Add dynamic OG image generation per blog post using Next.js opengraph-image.tsx at the blog post level

---

## Low Priority Issues

### 16. Missing `datePublished` on some Article schemas
**Issue:** Several blog posts may have `dateModified` but no `datePublished`, which is required for NewsArticle eligibility.

### 17. No LinkedIn company page
**Issue:** LinkedIn company pages are required for B2C brand entity recognition by Google and ChatGPT. Add to sameAs once created.

### 18. Internal links from blog posts to /lab-data and /reviews are sparse
**Issue:** Cross-linking from authoritative content to data pages signals content depth to AI crawlers.

---

## Category Deep Dives

### AI Citability (53/100)

**Strengths:**
- /lab-data page contains highly citable, specific factual claims (150mg fulvic acid per serving, ISO/IEC 17025 certification status, heavy metal pass/fail data)
- /methodology page has a clear scoring rubric with percentages — exactly the kind of structured content AI systems quote verbatim
- /reviews page aggregates third-party testimonials with source attribution

**Weaknesses:**
- Blog posts use conversational tone without "answer block" formatting. Queries like "what is the best shilajit brand" expect a direct answer in the first paragraph, not a 200-word intro
- No FAQ schema on blog posts despite many posts having implicit Q&A structure
- Statistics cited without source links (AI systems prefer self-contained, verifiable claims)

**Rewrite example:**
Current: *"Finding authentic shilajit can be challenging because the market is flooded with products of varying quality..."*
Better: *"The best shilajit brand for most people is Black Lotus Shilajit (A-tier, ISO/IEC 17025 COA, $36.99/30g), based on our lab data analysis of 70+ products. See our full methodology."*

---

### Brand Authority (5/100)

**Current presence:**
- Reddit: 0 mentions found
- Wikipedia: 0 mentions
- Press/media: 0 mentions
- YouTube: 0 mentions
- LinkedIn: No company page found
- Amazon: Not a seller (affiliate only)

**Priority actions:**
1. Reddit: Answer 3-5 supplement questions per week in r/Supplements, r/Nootropics with methodology/lab-data references
2. HARO/Qwoted: Respond as "supplement pricing researcher" to journalist queries about supplement costs
3. Guest posts: Target supplement blogs with original data (e.g., "We analyzed 70 shilajit products — here's what we found")

---

### Content E-E-A-T (52/100)

| Signal | Score | Notes |
|---|---|---|
| Experience | 11/25 | No personal testing disclosed; brand-based claims only |
| Expertise | 9/25 | No named author; no credentials; no methodology byline |
| Authoritativeness | 11/25 | Good /methodology page; zero backlinks or press |
| Trustworthiness | 21/25 | FTC disclosure excellent; LAB_DISCLAIMER present; HTTPS; clear affiliate disclosure |

**Top fix:** Add author attribution. Even "Reviewed by the ShilajitPrice Editorial Team — last updated [date]" with a link to /methodology improves E-E-A-T measurably.

---

### Technical GEO (81/100)

**Strengths:**
- ✅ Server-side rendering (Next.js App Router, no client-only content walls)
- ✅ All major AI crawlers explicitly allowed: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, cohere-ai, CCBot, Googlebot-Extended
- ✅ llms.txt present at /llms.txt
- ✅ HTTPS with valid certificate
- ✅ Sitemap.xml present and current (updated 2026-04-14)
- ✅ Mobile-responsive design
- ✅ Core Web Vitals: Likely good (SSR + Tailwind, minimal JS)

**Weaknesses:**
- llms.txt lacks structured sections per spec
- No IndexNow submission
- No /feed.xml RSS

---

### Schema & Structured Data (52/100)

**Schema types found:**
| Type | Location | Status |
|---|---|---|
| Organization | Footer (all pages) | ⚠️ Missing sameAs, logo |
| WebSite | Layout | ✅ Valid |
| ItemList | Homepage | ✅ Valid (71 products) |
| Product | DealCard (each product) | ⚠️ Invalid availability, missing image |
| FAQPage | Homepage | ✅ Valid |
| HowTo | Homepage | ❌ Deprecated (Sep 2023) |
| Article | Blog posts | ⚠️ Missing speakable, some missing datePublished |
| BreadcrumbList | Inner pages | ✅ Valid |

**Missing opportunities:**
- Dataset schema for /lab-data
- AggregateRating on individual product cards (reviews data already exists in reviews.ts)
- Review schema on /reviews page (currently no schema at all)
- SiteNavigationElement for nav links

---

### Platform Optimization (41/100)

| Platform | Score | Key Gap |
|---|---|---|
| Google AI Overviews | 52/100 | Missing sameAs, invalid Product schema |
| ChatGPT Web Search | 28/100 | Zero Reddit/community mentions |
| Perplexity AI | 38/100 | No Dataset schema, no RSS |
| Google Gemini | 30/100 | No entity recognition, no Knowledge Panel |
| Bing Copilot | 35/100 | No IndexNow, low Bing crawl frequency |

---

## Quick Wins (Implement This Week)

1. **Fix Product `availability` schema** — Change `"InStock"` to `"https://schema.org/InStock"` in DealCard.tsx. Unlocks Google Shopping rich results eligibility immediately. (30 min)

2. **Add `sameAs` and `logo` to Organization schema** — Even with just the site's own URL and favicon, this establishes entity identity. (20 min)

3. **Remove deprecated HowTo schema** — Replace with FAQPage schema for the same How It Works content. Cleans up schema errors in Search Console. (30 min)

4. **Add author attribution line to all blog posts** — Add "By the ShilajitPrice Research Team · Methodology" footer to BlogPostLayout.tsx. One change, affects all 11+ posts. (20 min)

5. **Restructure llms.txt** — Add proper `# ShilajitPrice`, `## Key Pages`, `## Blog Posts` sections. Makes the file machine-readable per spec. (30 min)

---

## 30-Day Action Plan

### Week 1: Fix Critical Schema Issues
- [ ] Fix `"availability": "InStock"` → `"https://schema.org/InStock"` in DealCard.tsx
- [ ] Add `sameAs: ["https://shilajitprice.com"]` and `logo` ImageObject to Organization schema
- [ ] Remove HowTo schema; add FAQPage for How It Works
- [ ] Add `image` URL to Product schemas
- [ ] Add author attribution to BlogPostLayout.tsx
- [ ] Restructure /llms.txt with proper section headers

### Week 2: Citability & Content Improvements
- [ ] Add Dataset schema to /lab-data page
- [ ] Add AggregateRating schema to DealCard (using existing reviews.ts data)
- [ ] Add Review schema markup to /reviews page
- [ ] Rewrite first paragraph of top 3 blog posts to lead with direct answer
- [ ] Add FAQ sections + FAQPage schema to top 3 blog posts
- [ ] Add 2-3 PubMed citation links to fulvic acid / heavy metals content

### Week 3: RSS, IndexNow & Platform Distribution
- [ ] Build /feed.xml RSS route from BLOG_POSTS data
- [ ] Implement IndexNow API submission on blog post publish
- [ ] Create LinkedIn company page; add URL to Organization sameAs
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Add `speakable` property to Article schemas

### Week 4: Brand Authority & Community Building
- [ ] Draft 5 Reddit posts/answers for r/Supplements, r/Nootropics using /methodology data
- [ ] Publish one original data study post (e.g., "We tested 70 shilajit products: here's the price breakdown")
- [ ] Add medical/YMYL disclaimer above the fold on health content pages
- [ ] Set up Google Alerts for "shilajit price", "shilajit COA", "shilajit lab test" for HARO opportunities
- [ ] Add `datePublished` to any Article schemas missing it

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues Found |
|---|---|---|
| https://shilajitprice.com | ShilajitPrice.com — Compare Shilajit Prices | Invalid Product schema, deprecated HowTo, missing Product images |
| https://shilajitprice.com/blog | Blog — Shilajit Research & Guides | Missing Article list schema |
| https://shilajitprice.com/lab-data | Shilajit Lab Data & COAs | Missing Dataset schema |
| https://shilajitprice.com/reviews | Real Shilajit Reviews | Missing Review/AggregateRating schema |
| https://shilajitprice.com/methodology | Our Methodology | Missing Author schema |
| https://shilajitprice.com/compare | Compare Shilajit Prices | Invalid Product schema |
| https://shilajitprice.com/about | About ShilajitPrice | Missing Person/Team schema |
| https://shilajitprice.com/blog/best-shilajit-brands-ranked | Best Shilajit Brands Ranked | No author, no FAQ schema, no speakable |
| https://shilajitprice.com/blog/how-to-spot-fake-shilajit | How to Spot Fake Shilajit | No author, no FAQ schema |
| https://shilajitprice.com/blog/shilajit-resin-vs-capsules | Shilajit Resin vs Capsules | No author, no FAQ schema |
| https://shilajitprice.com/blog/what-is-fulvic-acid | What Is Fulvic Acid | No author, no citations |
| https://shilajitprice.com/robots.txt | — | ✅ All AI crawlers allowed |
| https://shilajitprice.com/llms.txt | — | ⚠️ Flat structure, needs sections |
| https://shilajitprice.com/sitemap.xml | — | ✅ Current and complete |
