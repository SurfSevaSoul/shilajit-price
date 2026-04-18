import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

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

const faqItems: FaqItem[] = [
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
];

function WarningIcon() {
  return (
    <svg className="w-4 h-4 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function HowToSpotFakeShilajit() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <BlogPostLayout
        heading={
          <>
            How to Spot{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
              Fake Shilajit
            </span>{" "}
            — and Where to Find the Real Thing
          </>
        }
        description="The shilajit market is flooded with counterfeits, fillers, and mislabeled products. Here are 5 tests to verify authenticity and the red flags that expose a fake every time."
        tags={["Safety", "Buying Guide", "Authentication"]}
        publishedAt="2026-04-10"
        updatedAt="2026-04-13"
        readingTimeMin={7}
        currentSlug="how-to-spot-fake-shilajit"
        quizCta="line"
        breadcrumbLabel="How to Spot Fake Shilajit"
        faqItems={faqItems}
        ctaVariant="pure-himalayan"
      >
        {/* Affiliate disclosure */}
        <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
          <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.
        </div>

        {/* ── Intro ── */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">The fake shilajit problem is bigger than you think</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
            <p>
              In 2023, independent lab testing of popular shilajit products sold on major e-commerce platforms found that a significant portion contained little to no detectable <Link href="/blog/what-is-fulvic-acid" className="text-[#10B981] hover:underline">fulvic acid</Link> — the primary bioactive compound that defines authentic shilajit. Some contained heavy metals at levels above safe limits. Others were nothing more than leonardite (a coal derivative) ground into powder and dyed dark brown.
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
          <h2 className="text-2xl font-black text-[#0D1F14] mb-5">What real shilajit looks, feels, and smells like</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed mb-5">
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
              <div key={attr} className="bg-white border border-[#D1EDD8] rounded-xl p-4">
                <div className="text-lg mb-1">{emoji}</div>
                <div className="text-xs font-bold text-[#10B981] mb-1">{attr}</div>
                <p className="text-xs text-[#0D1F14] leading-relaxed">{real}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5 tests ── */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-2">5 tests to verify shilajit authenticity</h2>
          <p className="text-sm text-[#0D1F14] leading-relaxed mb-6">
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
                color: "border-[#D1EDD8]",
                numColor: "text-[#10B981]",
              },
              {
                num: "Test 2",
                title: "The Temperature Test",
                difficulty: "Easy — do this at home",
                pass: "Softens quickly between warm fingers, becomes pliable and slightly sticky. Placed in the freezer for 10 minutes, it hardens and shatters cleanly when struck.",
                fail: "Does not soften with body heat, remains uniformly hard (likely wax or resin filler). Or stays soft/liquid at room temperature regardless of warming (over-diluted or gel-based fake).",
                tip: "This temperature sensitivity is a direct result of shilajit's natural resin chemistry. Synthetic or adulterated products don't replicate it accurately.",
                color: "border-blue-700/40",
                numColor: "text-blue-700",
              },
              {
                num: "Test 3",
                title: "The Alcohol Test",
                difficulty: "Easy — do this at home",
                pass: "Does not dissolve in alcohol (rubbing alcohol or ethanol). Real shilajit is water-soluble but largely insoluble in alcohol.",
                fail: "Dissolves readily or disperses easily in alcohol. Many synthetic resins and wax-based fakes are alcohol-soluble while being poorly water-soluble — the exact opposite of authentic shilajit.",
                tip: "Drop a small amount into isopropyl alcohol and observe for 5 minutes. Authentic shilajit will soften but not fully dissolve. A fake often disintegrates or turns the alcohol uniformly dark.",
                color: "border-amber-200",
                numColor: "text-amber-600",
              },
              {
                num: "Test 4",
                title: "The COA Verification Test",
                difficulty: "Medium — requires reviewing a lab document",
                pass: "Brand provides a third-party COA from an ISO 17025-accredited lab showing: specific fulvic acid % (not just 'present'), heavy metals below FDA action levels with actual measured values, and microbial testing results. Document has lab name, accreditation number, test date, and lot number.",
                fail: "No COA available. COA is from an in-house lab. COA shows 'pass/fail' without measured values. COA is undated, has no lab name, or can't be linked to a specific product lot.",
                tip: "This is the only test that cannot be faked by a skilled counterfeiter. Physical properties can be mimicked; a legitimate ISO lab report cannot.",
                color: "border-[#D1EDD8]",
                numColor: "text-[#10B981]",
              },
              {
                num: "Test 5",
                title: "The Sourcing & Elevation Test",
                difficulty: "Medium — requires research",
                pass: "Brand specifies collection region, approximate altitude (ideally 10,000+ feet), and purification method. Can substantiate sourcing claims with documentation on request. Processing is described as cold-filtered or water-purified.",
                fail: "Vague sourcing claims like 'mountain region' or 'Himalayan area' without specifics. No information about processing method. Processed via high-heat extraction (degrades fulvic acid). Or the brand cannot clarify sourcing when contacted.",
                tip: "High-altitude sources above 14,000 feet produce denser, more mineral-rich shilajit with higher fulvic acid content. Low-altitude or unspecified sources are often lower grade.",
                color: "border-blue-700/40",
                numColor: "text-blue-700",
              },
            ].map(({ num, title, difficulty, pass, fail, tip, color, numColor }) => (
              <div key={num} className={`bg-white border ${color} rounded-xl p-5`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-black ${numColor} bg-[#F0FAF4] px-2.5 py-1 rounded-lg border border-current/20`}>{num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0D1F14]">{title}</h3>
                    <p className="text-[10px] text-[#7BA899]">{difficulty}</p>
                  </div>
                </div>
                <div className="space-y-2.5 mb-3">
                  <div className="flex items-start gap-2">
                    <CheckIcon />
                    <div>
                      <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider block mb-0.5">Pass</span>
                      <p className="text-xs text-[#0D1F14] leading-relaxed">{pass}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <WarningIcon />
                    <div>
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-0.5">Fail</span>
                      <p className="text-xs text-[#0D1F14] leading-relaxed">{fail}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F0FAF4] rounded-lg px-3 py-2 border border-[#D1EDD8]">
                  <p className="text-[10px] text-[#7BA899]"><span className="font-bold text-[#0D1F14]">Pro tip:</span> {tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Red flags ── */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-5">Red flags to avoid before you buy</h2>
          <p className="text-sm text-[#0D1F14] leading-relaxed mb-5">
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
              <div key={flag} className="flex items-start gap-2.5 bg-white border border-red-200 rounded-xl p-3.5">
                <WarningIcon />
                <p className="text-xs text-[#0D1F14] leading-relaxed">{flag}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Common fake ingredients ── */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">Common fake shilajit ingredients to know</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
            <p>
              Understanding what counterfeit shilajit is actually made of helps you recognize what you&apos;re dealing with when tests produce mixed results.
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#D1EDD8]">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                    <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">Adulterant</th>
                    <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">How it mimics shilajit</th>
                    <th className="text-left px-4 py-3 font-bold text-[#7BA899] uppercase tracking-wider">How to detect it</th>
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
                    <tr key={row.adulterant} className={`border-b border-[#D1EDD8] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"}`}>
                      <td className="px-4 py-3 font-semibold text-[#0D1F14]">{row.adulterant}</td>
                      <td className="px-4 py-3 text-[#0D1F14]">{row.mimics}</td>
                      <td className="px-4 py-3 text-[#0D1F14]">{row.detect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Black Lotus as gold standard ── */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">What the gold standard looks like: Black Lotus</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
            <p>
              Given how prevalent adulteration is, we hold every brand we review to a strict documentation standard. Black Lotus Shilajit is the only brand at the $39.99 price point that meets every criterion we apply.
            </p>
          </div>
        </section>

        {/* Mid-article Black Lotus callout */}
        <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-amber-900 font-black text-lg shrink-0">S</div>
            <div>
              <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Gold Standard — S-Tier</div>
              <h3 className="text-base font-black text-[#0D1F14]">Black Lotus Shilajit</h3>
              <p className="text-xs text-[#0D1F14] mt-1">Passes all 5 authenticity tests — including full panel third-party COA</p>
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
                <span className="text-xs text-[#0D1F14]">{item}</span>
              </div>
            ))}
          </div>
          <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer sponsored"
            className="block w-full text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-900/30">
            Shop Black Lotus — Verified Authentic →
          </a>
          <p className="text-center text-[10px] text-[#7BA899] mt-2">Affiliate link — commission earned at no extra cost to you</p>
        </div>

        {/* ── Verdict ── */}
        <section>
          <h2 className="text-2xl font-black text-[#0D1F14] mb-4">The verdict: don&apos;t buy shilajit without a COA</h2>
          <div className="space-y-4 text-sm text-[#0D1F14] leading-relaxed">
            <p>
              The home tests described above are useful for evaluating products you&apos;ve already received. But the most powerful protection is front-loading your diligence before purchase. If a brand can&apos;t show you a dated, third-party COA from an ISO-accredited lab with specific fulvic acid percentages and a heavy metals panel — don&apos;t buy it. Full stop.
            </p>
            <p>
              No legitimate shilajit brand has anything to hide from independent testing. The ones that do hide are the ones selling you something other than what the label claims.
            </p>
            <p>
              Black Lotus is our recommended starting point precisely because they don&apos;t hide anything. Every lot is independently tested, the COA is published, the numbers are specific, and the product passes every physical authenticity test we can apply. See our{" "}
              <Link href="/blog/best-shilajit-brands-ranked" className="text-[#10B981] hover:underline">ranked list of verified brands</Link>{" "}
              for a complete picture of which brands earn that trust.
            </p>
          </div>
        </section>
      </BlogPostLayout>
    </>
  );
}
