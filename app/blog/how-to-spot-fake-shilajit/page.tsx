import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import RelatedPosts from "../../components/RelatedPosts";

const AFFILIATE_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const AFFILIATE_RESIN =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";
const BASE_URL = "https://shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/how-to-spot-fake-shilajit`;

export const metadata: Metadata = {
  title: "How to Spot Fake Shilajit — and Where to Find the Real Thing | ShilajitPrice.com",
  description:
    "The shilajit market is full of fakes, fillers, and mislabeled products. Learn 5 tests to verify authenticity, the red flags that expose counterfeit shilajit, and what the real thing looks, feels, and smells like.",
  keywords:
    "fake shilajit, how to tell if shilajit is real, pure shilajit test, shilajit authenticity, counterfeit shilajit",
  alternates: { canonical: POST_URL },
  openGraph: {
    title: "How to Spot Fake Shilajit — and Where to Find the Real Thing",
    description:
      "5 tests to verify shilajit authenticity — solubility, COA, sourcing, color, smell — and the red flags that expose a counterfeit.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-04-10",
    modifiedTime: "2026-04-13",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Spot Fake Shilajit — and Where to Find the Real Thing",
  description:
    "5 tests to verify shilajit authenticity: solubility, COA, sourcing, color, smell. Red flags that expose counterfeit shilajit.",
  datePublished: "2026-04-10",
  dateModified: "2026-04-13",
  url: POST_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  author: [
    { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
    {
      "@type": "Person",
      name: "ShilajitPrice Research Team",
      jobTitle: "Supplement Research & Price Analysis",
      worksFor: { "@type": "Organization", name: "ShilajitPrice.com", url: BASE_URL },
      knowsAbout: ["Shilajit authenticity", "Supplement adulteration", "COA verification", "Lab testing"],
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "ShilajitPrice.com",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 200, height: 60 },
  },
  keywords: "fake shilajit, how to tell if shilajit is real, pure shilajit test",
  articleSection: "Safety",
  wordCount: 1310,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Spot Fake Shilajit", item: POST_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can you tell if shilajit is real or fake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most reliable way to verify shilajit is a third-party Certificate of Analysis (COA) showing specific fulvic acid percentage and a heavy metals panel with actual measured values. At home, you can do a solubility test: real shilajit dissolves completely in warm water, turning it golden-brown without leaving residue. It should also soften when warmed between fingers and harden when chilled.",
      },
    },
    {
      "@type": "Question",
      name: "What does real shilajit look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Authentic shilajit resin is dark brown to black, with a glossy, semi-solid tar-like consistency at room temperature. It becomes sticky and pliable when warmed between fingers and turns brittle when chilled. It dissolves completely in warm water, turning the liquid a rich golden-brown or amber color. Fake shilajit often looks too uniform, too dry, or too light in color.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common shilajit fakes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common shilajit adulterants include: mineral pitch mixed with molasses or brown food coloring; fulvic acid isolate (not full-spectrum shilajit) in a filler base; low-grade leonardite or leonardite extract sold as shilajit; and legitimately sourced shilajit heavily diluted with fillers like maltodextrin. None of these deliver the full-spectrum bioactive profile of authentic purified shilajit.",
      },
    },
    {
      "@type": "Question",
      name: "Is shilajit powder or capsules more likely to be fake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — powder and capsule forms are significantly easier to adulterate than resin because the processing steps obscure the original material. Resin is harder to fake convincingly because its physical properties (texture, solubility, color, smell) are directly observable. For maximum assurance of authenticity, start with resin and use the home tests described above alongside demanding a COA.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the shilajit market so full of fakes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High profit margins, low regulation, and consumer unfamiliarity create ideal conditions for adulteration. Authentic high-grade shilajit resin is expensive to source and process. A fake that costs $2 to produce can sell for $40–60. Without a COA requirement from marketplaces or regulators, there's little enforcement pressure on brands to authenticate their products. Consumer education — knowing what to look for — is currently the most effective defense.",
      },
    },
  ],
};

function WarningIcon() {
  return (
    <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function HowToSpotFakeShilajit() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1f14]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a10]/95 backdrop-blur-sm border-b border-[#1e3527]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-lg font-black text-emerald-400">ShilajitPrice</span>
            <span className="text-lg font-black text-[#e8f4ec]">.com</span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <Link href="/#deals" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Compare</Link>
            <Link href="/#how-it-works" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">How It Works</Link>
            <Link href="/blog" className="text-[#9ec9ad] hover:text-emerald-400 transition-colors">Blog</Link>
          </div>
          <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer sponsored"
            className="shrink-0 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors">
            🏆 Our #1 Pick
          </a>
        </div>
      </nav>

      <main className="flex-1">
        {/* Article header */}
        <header className="border-b border-[#1e3527] py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-[#5d8c6e] mb-6">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#9ec9ad]">How to Spot Fake Shilajit</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-4">
              {["Safety", "Buying Guide", "Authentication"].map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full bg-emerald-900/50 border border-emerald-800/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wide">{tag}</span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#e8f4ec] leading-tight mb-4">
              How to Spot{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                Fake Shilajit
              </span>{" "}
              — and Where to Find the Real Thing
            </h1>
            <p className="text-base text-[#9ec9ad] leading-relaxed mb-6 max-w-2xl">
              The shilajit market is flooded with counterfeits, fillers, and mislabeled products. Here are 5 tests to verify authenticity and the red flags that expose a fake every time.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5d8c6e]">
              <span>By <span className="text-[#9ec9ad]">ShilajitPrice.com</span></span>
              <span>·</span>
              <span>Published <span className="text-[#9ec9ad]">April 10, 2026</span></span>
              <span>·</span>
              <span>Updated <span className="text-[#9ec9ad]">April 13, 2026</span></span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

            {/* Affiliate disclosure */}
            <div className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4 text-xs text-[#5d8c6e] leading-relaxed">
              <span className="font-semibold text-[#9ec9ad]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.
            </div>

            {/* ── Intro ── */}
            <section>
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">The fake shilajit problem is bigger than you think</h2>
              <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
                <p>
                  In 2023, independent lab testing of popular shilajit products sold on major e-commerce platforms found that a significant portion contained little to no detectable <Link href="/blog/what-is-fulvic-acid" className="text-emerald-400 hover:underline">fulvic acid</Link> — the primary bioactive compound that defines authentic shilajit. Some contained heavy metals at levels above safe limits. Others were nothing more than leonardite (a coal derivative) ground into powder and dyed dark brown.
                </p>
                <p>
                  Authentic, high-grade shilajit is expensive to source and purify correctly. A legitimate 30g jar of resin costs real money to produce. A fake that mimics its appearance can be made for cents. Without meaningful regulatory oversight or third-party verification requirements on supplement marketplaces, the economics strongly favor adulteration.
                </p>
                <p>
                  The good news: fake shilajit is detectable — if you know what to look for. This guide gives you five concrete tests you can apply before and after purchase, plus a comprehensive list of red flags that expose counterfeits before you ever spend a dollar.
                </p>
              </div>
            </section>

            {/* ── What real shilajit looks like ── */}
            <section>
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-5">What real shilajit looks, feels, and smells like</h2>
              <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed mb-5">
                <p>Before testing, you need a baseline. Here&apos;s what authentic purified shilajit resin looks and behaves like:</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { attr: "Color", real: "Dark brown to pitch black. No light-brown, tan, or grey tones.", emoji: "🎨" },
                  { attr: "Texture at room temp", real: "Semi-solid, tar-like. Should not be fully liquid or bone-dry powder.", emoji: "🖐️" },
                  { attr: "Warmed between fingers", real: "Becomes sticky and pliable within seconds. Stretches slightly.", emoji: "🌡️" },
                  { attr: "Chilled in freezer (10 min)", real: "Becomes brittle and shatters like glass when struck.", emoji: "❄️" },
                  { attr: "Dissolved in warm water", real: "Dissolves fully, no residue. Water turns rich golden-amber.", emoji: "💧" },
                  { attr: "Smell", real: "Earthy, slightly bituminous, similar to rich soil or tar. Never sweet or chemical.", emoji: "👃" },
                ].map(({ attr, real, emoji }) => (
                  <div key={attr} className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-4">
                    <div className="text-lg mb-1">{emoji}</div>
                    <div className="text-xs font-bold text-emerald-400 mb-1">{attr}</div>
                    <p className="text-xs text-[#9ec9ad] leading-relaxed">{real}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 5 tests ── */}
            <section>
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-2">5 tests to verify shilajit authenticity</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-6">
                Apply as many of these as possible. No single test is definitive in isolation — the COA is the only absolute verification, but the physical tests provide strong supporting evidence.
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: "Test 1",
                    title: "The Solubility Test",
                    difficulty: "Easy — do this at home",
                    pass: "Dissolves fully in warm water (40–60°C) within 2–3 minutes, leaving no residue. Water turns golden-brown or amber.",
                    fail: "Leaves gritty sediment, clumps, or floats. Water stays clear or turns murky grey. These indicate chalk, clay, soil, or undissolved fillers.",
                    tip: "Use a clear glass so you can see the color. Authentic shilajit produces a distinctly colored, translucent solution — not murky or opaque.",
                    color: "border-emerald-700/40",
                    numColor: "text-emerald-400",
                  },
                  {
                    num: "Test 2",
                    title: "The Temperature Test",
                    difficulty: "Easy — do this at home",
                    pass: "Softens quickly between warm fingers, becomes pliable and slightly sticky. Placed in the freezer for 10 minutes, it hardens and shatters cleanly when struck.",
                    fail: "Does not soften with body heat, remains uniformly hard (likely wax or resin filler). Or stays soft/liquid at room temperature regardless of warming (over-diluted or gel-based fake).",
                    tip: "This temperature sensitivity is a direct result of shilajit's natural resin chemistry. Synthetic or adulterated products don't replicate it accurately.",
                    color: "border-blue-700/40",
                    numColor: "text-blue-400",
                  },
                  {
                    num: "Test 3",
                    title: "The Alcohol Test",
                    difficulty: "Easy — do this at home",
                    pass: "Does not dissolve in alcohol (rubbing alcohol or ethanol). Real shilajit is water-soluble but largely insoluble in alcohol.",
                    fail: "Dissolves readily or disperses easily in alcohol. Many synthetic resins and wax-based fakes are alcohol-soluble while being poorly water-soluble — the exact opposite of authentic shilajit.",
                    tip: "Drop a small amount into isopropyl alcohol and observe for 5 minutes. Authentic shilajit will soften but not fully dissolve. A fake often disintegrates or turns the alcohol uniformly dark.",
                    color: "border-amber-700/40",
                    numColor: "text-amber-400",
                  },
                  {
                    num: "Test 4",
                    title: "The COA Verification Test",
                    difficulty: "Medium — requires reviewing a lab document",
                    pass: "Brand provides a third-party COA from an ISO 17025-accredited lab showing: specific fulvic acid % (not just 'present'), heavy metals below FDA action levels with actual measured values, and microbial testing results. Document has lab name, accreditation number, test date, and lot number.",
                    fail: "No COA available. COA is from an in-house lab. COA shows 'pass/fail' without measured values. COA is undated, has no lab name, or can't be linked to a specific product lot.",
                    tip: "This is the only test that cannot be faked by a skilled counterfeiter. Physical properties can be mimicked; a legitimate ISO lab report cannot.",
                    color: "border-emerald-700/40",
                    numColor: "text-emerald-400",
                  },
                  {
                    num: "Test 5",
                    title: "The Sourcing & Elevation Test",
                    difficulty: "Medium — requires research",
                    pass: "Brand specifies collection region, approximate altitude (ideally 10,000+ feet), and purification method. Can substantiate sourcing claims with documentation on request. Processing is described as cold-filtered or water-purified.",
                    fail: "Vague sourcing claims like 'mountain region' or 'Himalayan area' without specifics. No information about processing method. Processed via high-heat extraction (degrades fulvic acid). Or the brand cannot clarify sourcing when contacted.",
                    tip: "High-altitude sources above 14,000 feet produce denser, more mineral-rich shilajit with higher fulvic acid content. Low-altitude or unspecified sources are often lower grade.",
                    color: "border-blue-700/40",
                    numColor: "text-blue-400",
                  },
                ].map(({ num, title, difficulty, pass, fail, tip, color, numColor }) => (
                  <div key={num} className={`bg-[#182b1f] border ${color} rounded-xl p-5`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-black ${numColor} bg-[#0d1f14] px-2.5 py-1 rounded-lg border border-current/20`}>{num}</span>
                      <div>
                        <h3 className="text-sm font-bold text-[#e8f4ec]">{title}</h3>
                        <p className="text-[10px] text-[#5d8c6e]">{difficulty}</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mb-3">
                      <div className="flex items-start gap-2">
                        <CheckIcon />
                        <div>
                          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">Pass</span>
                          <p className="text-xs text-[#9ec9ad] leading-relaxed">{pass}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <WarningIcon />
                        <div>
                          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-0.5">Fail</span>
                          <p className="text-xs text-[#9ec9ad] leading-relaxed">{fail}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0d1f14] rounded-lg px-3 py-2 border border-[#2a4535]">
                      <p className="text-[10px] text-[#5d8c6e]"><span className="font-bold text-[#9ec9ad]">Pro tip:</span> {tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Red flags ── */}
            <section>
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-5">Red flags to avoid before you buy</h2>
              <p className="text-sm text-[#9ec9ad] leading-relaxed mb-5">
                These are the warning signs that should stop you before you click &apos;Add to Cart.&apos; Any one of these is cause for concern. Multiple red flags mean walk away.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "No COA available or COA only provided 'on request' (opacity is a red flag)",
                  "Price below $25 for 30g of resin (authentic product costs more to produce)",
                  "Label says '80% fulvic acid' but no third-party lab confirms it",
                  "Product is powder or capsules with no resin option — easier to adulterate",
                  "\"Himalayan\" claim but no specifics on region, elevation, or collection method",
                  "Sold exclusively on Amazon or eBay with no brand website or contact info",
                  "Customer reviews mention 'no smell' or 'tasteless' — real shilajit has a strong earthy odor",
                  "COA is from an in-house lab or an unrecognized lab with no ISO accreditation",
                  "No information about purification method (authentic products specify this)",
                  "Packaging looks identical to a known brand with slightly altered name — counterfeit copies are common",
                ].map((flag) => (
                  <div key={flag} className="flex items-start gap-2.5 bg-[#182b1f] border border-red-900/30 rounded-xl p-3.5">
                    <WarningIcon />
                    <p className="text-xs text-[#9ec9ad] leading-relaxed">{flag}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── What real shilajit is NOT ── */}
            <section>
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">Common fake shilajit ingredients to know</h2>
              <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
                <p>
                  Understanding what counterfeit shilajit is actually made of helps you recognize what you&apos;re dealing with when tests produce mixed results.
                </p>
                <div className="overflow-x-auto rounded-xl border border-[#2a4535]">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#122019] border-b border-[#2a4535]">
                        <th className="text-left px-4 py-3 font-bold text-[#5d8c6e] uppercase tracking-wider">Adulterant</th>
                        <th className="text-left px-4 py-3 font-bold text-[#5d8c6e] uppercase tracking-wider">How it mimics shilajit</th>
                        <th className="text-left px-4 py-3 font-bold text-[#5d8c6e] uppercase tracking-wider">How to detect it</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { adulterant: "Leonardite extract", mimics: "Dark color, humic-like compounds, cheap 'mineral' marketing", detect: "Dissolves differently; COA shows low or no fulvic acid; harsh smell" },
                        { adulterant: "Molasses + brown dye", mimics: "Dark color, sticky texture, some sweetness", detect: "Dissolves too easily; tastes sweet; produces foamy water solution" },
                        { adulterant: "Asphaltum (mineral pitch)", mimics: "Similar appearance, tar-like smell", detect: "Dissolves in alcohol; barely dissolves in water; COA absent or shows petrochemicals" },
                        { adulterant: "Fulvic acid isolate in filler", mimics: "May pass basic COA if fulvic acid isolate is used", detect: "Lacks full mineral spectrum; COA shows only fulvic acid without trace minerals; no resin characteristics" },
                        { adulterant: "Maltodextrin or starch filler", mimics: "Adds bulk to diluted product", detect: "Turns water opaque/milky; iodine test turns blue-black (starch indicator)" },
                      ].map((row, i) => (
                        <tr key={row.adulterant} className={`border-b border-[#2a4535] last:border-0 ${i % 2 === 0 ? "bg-[#182b1f]" : "bg-[#0d1f14]"}`}>
                          <td className="px-4 py-3 font-semibold text-[#e8f4ec]">{row.adulterant}</td>
                          <td className="px-4 py-3 text-[#9ec9ad]">{row.mimics}</td>
                          <td className="px-4 py-3 text-[#9ec9ad]">{row.detect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Black Lotus as gold standard ── */}
            <section>
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">What the gold standard looks like: Black Lotus</h2>
              <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
                <p>
                  Given how prevalent adulteration is, we hold every brand we review to a strict documentation standard. Black Lotus Shilajit is the only brand at the $39.99 price point that meets every criterion we apply.
                </p>
              </div>
            </section>

            {/* Black Lotus callout */}
            <div className="bg-[#182b1f] border border-emerald-500/40 rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-amber-900 font-black text-lg shrink-0">S</div>
                <div>
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">Gold Standard — S-Tier</div>
                  <h3 className="text-base font-black text-[#e8f4ec]">Black Lotus Shilajit</h3>
                  <p className="text-xs text-[#9ec9ad] mt-1">Passes all 5 authenticity tests — including full panel third-party COA</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
                {[
                  "Third-party ISO lab COA — publicly linked to lot numbers",
                  "85%+ fulvic acid by titration method",
                  "Heavy metals panel: all values published, all within limits",
                  "Dissolves cleanly — golden-amber water solution, no residue",
                  "Softens with body heat, shatters when frozen",
                  "Strong earthy/bituminous smell — correct for authentic resin",
                  "Himalayan source above 14,000 feet, cold-process purified",
                  "Free shipping, no minimum order",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-xs text-[#9ec9ad]">{item}</span>
                  </div>
                ))}
              </div>
              <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer sponsored"
                className="block w-full text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-900/30">
                Shop Black Lotus — Verified Authentic →
              </a>
              <p className="text-center text-[10px] text-[#5d8c6e] mt-2">Affiliate link — commission earned at no extra cost to you</p>
            </div>

            {/* ── Verdict ── */}
            <section>
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-4">The verdict: don&apos;t buy shilajit without a COA</h2>
              <div className="space-y-4 text-sm text-[#9ec9ad] leading-relaxed">
                <p>
                  The home tests described above are useful for evaluating products you&apos;ve already received. But the most powerful protection is front-loading your diligence before purchase. If a brand can&apos;t show you a dated, third-party COA from an ISO-accredited lab with specific fulvic acid percentages and a heavy metals panel — don&apos;t buy it. Full stop.
                </p>
                <p>
                  No legitimate shilajit brand has anything to hide from independent testing. The ones that do hide are the ones selling you something other than what the label claims.
                </p>
                <p>
                  Black Lotus is our recommended starting point precisely because they don&apos;t hide anything. Every lot is independently tested, the COA is published, the numbers are specific, and the product passes every physical authenticity test we can apply.
                </p>
              </div>
            </section>

            {/* ── Bottom CTA ── */}
            <div className="bg-[#182b1f] border border-emerald-500/40 rounded-2xl p-8 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-black text-[#e8f4ec] mb-2">Shop Verified Authentic Shilajit</h3>
              <p className="text-sm text-[#9ec9ad] mb-5 max-w-md mx-auto">
                Black Lotus passes every authenticity test — full panel COA, 85%+ verified fulvic acid, clean heavy metals, correct physical properties. Free shipping.
              </p>
              <a href={AFFILIATE_RESIN} target="_blank" rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-900/40">
                Shop Black Lotus Resin — $39.99 →
              </a>
              <p className="text-[10px] text-[#5d8c6e] mt-3">Affiliate link — we earn a commission at no extra cost to you</p>
            </div>

            {/* ── FAQ ── */}
            <section id="faq">
              <h2 className="text-2xl font-black text-[#e8f4ec] mb-6">Frequently asked questions about fake shilajit</h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                  <div key={name} className="bg-[#182b1f] border border-[#2a4535] rounded-xl p-5">
                    <h3 className="text-sm font-bold text-[#e8f4ec] mb-2">{name}</h3>
                    <p className="text-sm text-[#9ec9ad] leading-relaxed">{acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related posts */}
            <RelatedPosts currentSlug="how-to-spot-fake-shilajit" />

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-2">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#9ec9ad] hover:text-emerald-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <span className="text-[#2a4535]">·</span>
              <Link href="/" className="text-sm text-[#9ec9ad] hover:text-emerald-400 transition-colors">Compare All Prices →</Link>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
