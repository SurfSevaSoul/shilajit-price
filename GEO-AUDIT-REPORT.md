# GEO Audit Report — ShilajitPrice.com
**Audit Date:** April 18, 2026  
**URL:** https://www.shilajitprice.com  
**Business Type:** Publisher / Affiliate Comparison Site (Next.js SSG on Vercel)  
**Audited By:** GEO Skill — 5 parallel subagents (geo-ai-visibility, geo-platform-analysis, geo-technical, geo-content, geo-schema)

---

## Composite GEO Score: 58 / 100

> **Interpretation:** Developing — Strong technical and crawlability foundations, competitive content depth and original data, but held back by near-zero brand authority footprint and significant schema/E-E-A-T gaps. This is a well-built site that AI systems cannot yet confidently cite because no external entity has corroborated its existence.

---

## Score Breakdown

| Category | Weight | Score | Weighted | Grade |
|---|---|---|---|---|
| 🤖 AI Citability & Visibility | 25% | 67 / 100 | 16.75 | C+ |
| 🏷️ Brand Authority Signals | 20% | **22 / 100** | 4.40 | **F** |
| 📝 Content Quality & E-E-A-T | 20% | 63.5 / 100 | 12.70 | C+ |
| ⚙️ Technical Foundations | 15% | 81 / 100 | 12.15 | B |
| 🗂️ Structured Data | 10% | 58 / 100 | 5.80 | D+ |
| 🌐 Platform Optimization | 10% | 66 / 100 | 6.60 | C+ |
| **COMPOSITE** | **100%** | **58 / 100** | **58.40** | **D+** |

---

## Sub-Scores at a Glance

### 🤖 AI Citability & Visibility — 67/100

| Component | Score | Notes |
|---|---|---|
| AI Crawler Access | **100/100** | All major bots explicitly named and allowed in robots.txt |
| llms.txt Compliance | **95/100** | Well-formed with "Key Facts for Citation" section; missing llms-full.txt |
| Content Citability | **74/100** | Good passage structure and FAQ blocks; strong for AI extraction |
| Brand Mentions (off-site) | **22/100** | Near-absent across all AI-cited platforms |

**Key finding:** The site is technically perfect for AI crawlers — every major bot (GPTBot, ClaudeBot, PerplexityBot, CCBot, anthropic-ai, cohere-ai, Googlebot-Extended) is explicitly allowed. The llms.txt is well-structured with a "Key Facts for Citation" section that most sites don't have. Citability is solid at the passage level. The gap: AI systems can read the site but have no external corroboration that it's credible. High citability + zero brand authority = content that gets read but rarely cited.

---

### 🏷️ Brand Authority Signals — 22/100

| Platform | Status |
|---|---|
| Reddit (r/Supplements, r/Nootropics) | Not detected |
| YouTube | Not detected |
| LinkedIn | No company page |
| Twitter / X | No profile found |
| Wikipedia | Not present |
| Google Business Profile | Not confirmed |
| Crunchbase / AngelList | Not present |
| Press / media mentions | Not detected |
| Inbound links from authority domains | Minimal (new domain, April 2026) |

**This is the single largest drag on the composite score.** ShilajitPrice.com launched in April 2026 and has essentially no off-site footprint. AI models like ChatGPT and Perplexity weight content partly by cross-platform corroboration — they cite sources that appear in multiple independent contexts. Ahrefs research (December 2025) found brand mentions correlate 3× more strongly with AI citation frequency than backlinks. This site has neither.

---

### 📝 Content Quality & E-E-A-T — 63.5/100

**Content Score: 67/100 | E-E-A-T Score: 60/100**

| E-E-A-T Dimension | Score | Max | Key Issue |
|---|---|---|---|
| Experience | 11 | 25 | No named tester; no first-hand product use narrative; no photos |
| Expertise | 14 | 25 | Correct ICP-MS/ISO 17025 usage; no credentialed author attached |
| Authoritativeness | 13 | 25 | Original 73-product dataset; zero inbound external citations |
| Trustworthiness | 22 | 25 | Best-in-class affiliate disclosure; methodology documented |

**Strengths:**
- 73-product database with 25+ data points each — the most defensible original dataset in this niche
- FTC disclosures are specific, named, and prominent — not a generic footer notice
- Technical accuracy: correct use of ICP-MS, UV-Vis spectrophotometry, fulvic acid tier thresholds, ISO 17025 accreditation standards
- Medical disclaimer, contact email, and documented COA verification process all present
- FAQ sections on all major posts — well-positioned for AI passage extraction

**Critical gaps:**
- Every article bylined as "ShilajitPrice Research Team" — anonymous authorship is the #1 E-E-A-T weakness
- Journal citations (Andrologia testosterone RCT, Journal of Alzheimer's Disease tau study) mentioned but NOT hyperlinked
- No first-hand product testing documentation (photos, dissolution tests, texture/smell notes)
- No YMYL coverage: drug interactions, pregnancy safety, kidney disease, blood thinner interactions

---

### ⚙️ Technical Foundations — 81/100

| Area | Score | Status |
|---|---|---|
| Server-Side Rendering | 90 | All pages fully pre-rendered; `__next_f` RSC payload confirmed in raw HTML |
| AI Crawler Access | 100 | robots.txt explicitly allows all 7 major AI bots by name |
| Mobile Optimization | 95 | Viewport correct; responsive layout confirmed |
| URL Structure | 92 | Clean hierarchy; hyphens; keyword slugs; /compare/brand-a-vs-brand-b pattern excellent |
| Core Web Vitals Risk | 82 | SSG + Vercel CDN = low TTFB; GTM deferred with `afterInteractive`; image CLS risk unconfirmed |
| Sitemap Health | 78 | 35 URLs present; /compare sub-pages missing; non-www inconsistency |
| Meta Tags | 78 | Homepage clean; blog title too long (92 chars); canonical unconfirmed on blog posts |
| **CRITICAL BUG** | — | `/compare` canonical points to homepage, not self — page treated as homepage duplicate |
| Security Headers | 55 | HTTPS confirmed; CSP not set by Vercel by default — likely absent |

**The /compare canonical bug is the #1 technical priority.** The `/compare` page has:
```html
<link rel="canonical" href="https://shilajitprice.com">
```
This tells Google and AI indexers to treat the comparison database — the site's most commercially valuable page — as a duplicate of the homepage. It will not rank independently and will not be cited as a standalone resource until fixed.

---

### 🗂️ Structured Data — 58/100

**Detected schemas (all confirmed in server-rendered HTML — no JavaScript rendering risk):**

| Schema | Pages | Status |
|---|---|---|
| WebSite + SearchAction | Homepage | ✅ Valid |
| ItemList (73 products) | Homepage | ⚠️ Nested Product items missing images |
| Product (12 featured) | Homepage | ⚠️ All use site logo as product image (incorrect) |
| FAQPage | Homepage, Blog, Compare | ⚠️ Valid JSON but restricted by Google since Aug 2023 |
| Organization | Homepage, Blog | ❌ sameAs points only to internal URLs — broken |
| Article | Blog, Compare | ⚠️ Duplicate blocks on blog; image missing on all pages |
| BreadcrumbList | Blog, Compare | ✅ Valid |

**Critical schema issues:**
1. **Organization.sameAs points only to internal URLs** — the property's entire purpose is external entity linking. Currently provides zero AI entity recognition benefit.
2. **All Product schemas use the site logo as product image** — Google will not show Product rich results with a logo placeholder.
3. **Duplicate Article blocks on blog posts** — two conflicting Article JSON-LD blocks; must be consolidated into one.
4. **Article.image missing on all pages** — required property for Article rich results.
5. **Organization logo is 32×32px** — Google requires minimum 112×112px for Knowledge Panel display.
6. **speakable cssSelector `.article-intro`** — needs DOM verification; if the class doesn't exist in server-rendered HTML, speakable silently does nothing.
7. **Youtheory product in ItemList position 35** — contains editorial placeholder text "REVIEW NEEDED: Youtheory brand does not appear to sell shilajit" — publicly visible in structured data testing tools.

---

### 🌐 Platform Optimization — 66/100

| Platform | Score | Key Gaps |
|---|---|---|
| Google AI Overviews | 72 | Strong schema + SSR; schema image gaps; E-E-A-T limits AIO inclusion |
| Perplexity AI | 71 | llms.txt excellent; FAQ structure favorable; brand mentions low |
| ChatGPT Web Search | 63 | Good passage structure; no external corroboration |
| Google Gemini | 60 | Needs stronger E-E-A-T signals; no Wikipedia/Wikidata presence |
| Bing Copilot | 64 | Schema coverage adequate; no sameAs entity linking |

---

## Prioritized Action Plan

### 🚨 CRITICAL — Week 1

| # | Action | File / Location | Impact |
|---|---|---|---|
| 1 | **Fix /compare canonical** — set to self-reference `https://www.shilajitprice.com/compare` | `app/compare/page.tsx` → `metadata.alternates.canonical` | Highest: page currently suppressed as homepage duplicate |
| 2 | **Create LinkedIn company page + Twitter/X profile** | External — required before #3 | Critical path for entity linking |
| 3 | **Fix Organization.sameAs** — remove internal URLs; add LinkedIn, Twitter/X, and any other real external profiles | `app/layout.tsx` or `lib/schema.ts` — Organization block | High: zero AI entity recognition until fixed |
| 4 | **Consolidate duplicate Article blocks on blog posts** — merge into one comprehensive block | `app/blog/[slug]/page.tsx` or `components/BlogPostLayout.tsx` | Medium: conflicting signals to Google |

---

### 🔴 HIGH — Weeks 2–4

| # | Action | File / Location | Impact |
|---|---|---|---|
| 5 | **Add named, credentialed author** to all editorial content — byline with linked author page and verifiable credentials | `components/BlogPostLayout.tsx` | Highest-leverage single E-E-A-T action |
| 6 | **Hyperlink all academic citations** — add DOI links for Andrologia testosterone RCT and Journal of Alzheimer's Disease tau study | Each blog post that cites these | Required for YMYL trustworthiness |
| 7 | **Fix Product schema images** — replace site logo URL with actual product photos on all 12 featured products | `app/page.tsx` or `lib/products.ts` — Product schema blocks | Enables Product rich results |
| 8 | **Add Article.image to all blog and compare schemas** | `components/BlogPostLayout.tsx` + compare page templates | Required for Article rich results |
| 9 | **Resolve www vs non-www** — confirm 301 redirect from non-www → www; update sitemap + all canonicals to `https://www.shilajitprice.com` | `next.config.js` redirects + `app/sitemap.ts` | Eliminates duplicate content signal |
| 10 | **Add /compare sub-pages to sitemap** — `black-lotus-vs-pure-himalayan`, `black-lotus-vs-natural-shilajit`, `natural-shilajit-vs-pure-himalayan` | `app/sitemap.ts` | High-value comparison pages missing from sitemap |
| 11 | **Submit to supplement communities** — Reddit r/Nootropics wiki, r/Supplements resource lists, naturopath link directories | External | Starts building off-site corroboration |
| 12 | **Fix Youtheory ItemList placeholder** — remove or replace the position-35 product containing "REVIEW NEEDED" text | Product data source | Prevents embarrassing structured data test results |

---

### 🟡 MEDIUM — Month 1–3

| # | Action | Impact |
|---|---|---|
| 13 | **Add first-hand product testing content** — photos of resins, dissolution tests, texture/smell notes on top 5 brand review pages | Distinguishes from AI-generated comparison content |
| 14 | **Create drug interactions + population safety content** — pregnancy, kidney disease, blood thinners, autoimmune | Largest YMYL topical gap |
| 15 | **Add speakable markup to compare pages** — target verdict/summary sections | Direct AI assistant citation signal |
| 16 | **Upgrade Organization logo** — replace 32×32px reference with 512×512px or OG image | Required for Knowledge Panel display |
| 17 | **Configure security headers in next.config.js** — CSP, Referrer-Policy, Permissions-Policy | Not set by Vercel by default |
| 18 | **Create "Research & Studies" page** — aggregate all clinical citations with bibliographic references | Single citable research corpus for AI systems |
| 19 | **Pitch 73-product database as data source** — to supplement journalists, Reddit moderators, naturopath bloggers | One authoritative inbound link > many thin ones |
| 20 | **Add Crunchbase profile or Wikidata entry** — even a stub enables AI cross-platform entity linking | Wikidata entry takes ~30 minutes to create |
| 21 | **Shorten long blog title tags** — "Best Shilajit Brands Ranked in 2026 — Lab Data, Prices & Honest Reviews \| ShilajitPrice.com" is 92 chars; target <65 | SERP display truncation fix |
| 22 | **Add llms-full.txt** — full content version of llms.txt with page summaries | Improves AI content indexing depth |

---

### 🟢 LOW — Ongoing

| # | Action |
|---|---|
| 23 | Verify `.article-intro` speakable CSS selector resolves in server-rendered DOM |
| 24 | Remove non-standard `Host:` directive from robots.txt (Yandex-only, ignored by all other crawlers) |
| 25 | Add /quiz to sitemap if page has crawlable content |
| 26 | Confirm Twitter Card meta tags are present on all blog posts |
| 27 | Set `dateModified` to update whenever content is changed (not just match datePublished) |

---

## GEO Score Forecast

| Scenario | Projected Score | Timeline |
|---|---|---|
| **Current** | 58 / 100 | Today |
| After Critical fixes only (#1–4) | ~64 / 100 | Week 1 |
| After Critical + High (#1–12) | ~72 / 100 | Month 1 |
| After all recommended actions (#1–22) | ~81 / 100 | Month 3 |
| With credentialed author + brand mentions established | **85–88 / 100** | Month 6 |

The path from 58 to 85+ is achievable. The bottleneck is brand authority — which requires real-world activity (social profiles, community presence, press mentions) that cannot be shortcut with on-page changes. Every technical and schema fix can happen in the first month. The authority gap takes 3–6 months of consistent external presence-building.

---

## What's Working Well

1. **AI crawler access is flawless** — robots.txt is a model for the industry; every major AI bot explicitly named and allowed
2. **Server-side rendering is optimal** — Next.js SSG means all content is in the initial HTML response; no JavaScript barrier for any crawler
3. **llms.txt is a genuine differentiator** — well-formed with "Key Facts for Citation" section that most sites don't have
4. **73-product database is the strongest asset** — original, structured, regularly-updated; exactly what AI systems treat as citable primary sources
5. **Affiliate disclosures exceed industry norms** — named partners, explicit non-influence statements, methodology documented
6. **URL structure is excellent** — /compare/brand-a-vs-brand-b pattern directly captures high-intent comparison queries
7. **FAQ sections on all major posts** — well-positioned for featured snippets and AI passage extraction
8. **Technical content accuracy is high** — ICP-MS, ISO 17025, fulvic acid grading tiers used correctly

---

## The Core Problem in One Paragraph

When a user asks ChatGPT, Perplexity, or Google Gemini "which shilajit brand is best?" today, ShilajitPrice.com is **unlikely to be cited** — not because the content is bad, but because the site has no off-site footprint. AI models corroborate sources before citing them: they look for Reddit discussions that reference the site, LinkedIn profiles that verify the organization exists, Wikipedia entries that establish entity legitimacy. ShilajitPrice.com has excellent content that AI systems can read and excellent technical access for AI crawlers to do so — but zero external signals that would justify citing it over a source with established community recognition. The content is citation-ready. The authority is not.

---

## Methodology

**Scoring weights (GEO skill standard):**
- AI Citability & Visibility: 25%
- Brand Authority Signals: 20%
- Content Quality & E-E-A-T: 20%
- Technical Foundations: 15%
- Structured Data: 10%
- Platform Optimization: 10%

**Data sources:** 5 parallel subagents fetching live page data from shilajitprice.com on April 18, 2026. All scores based on analysis of server-rendered HTML, JSON-LD schema blocks, robots.txt, sitemap.xml, llms.txt, and content passages across homepage, /blog/best-shilajit-brands-ranked, /compare/black-lotus-vs-pure-himalayan, /blog/what-is-fulvic-acid, /blog/shilajit-heavy-metals-safety, /about, and /methodology.

---

*Next recommended audit: 30 days after implementing Critical and High priority actions*  
*Generated by GEO Skill v1 — Generative Engine Optimization audit framework*
