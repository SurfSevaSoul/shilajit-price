import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

// Amazon Associates links (tag: shilajit0a-20) — no direct Nootropics Depot affiliate yet
const ND_AMAZON =
  "https://www.amazon.com/s?k=nootropics+depot+primavie+shilajit&tag=shilajit0a-20";

// Partner brand affiliate links
const BL_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const LBH_BASE =
  "https://lotusbloomingherbs.com/products/authentic-shilajit?variant=1734489987&aff=380";
const PH_BASE = "https://www.purehimalayanshilajit.com/?ref=4792";
const NS_BASE = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const PB_BASE = "https://purblack.pxf.io/c/7221460/3041684/36963";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/nootropics-depot-primavie-review`;

export const metadata: Metadata = {
  title:
    "Nootropics Depot PrimaVie Shilajit Review: COA, Heavy Metals & How It Compares | ShilajitPrice.com",
  description:
    "Nootropics Depot PrimaVie shilajit reviewed: what their COA testing covers, how PrimaVie standardization works, and how it compares to dedicated shilajit brands with batch-specific lab data.",
  keywords:
    "nootropics depot primavie review, nootropics depot shilajit, primavie shilajit review, primavie vs shilajit resin, nootropics depot shilajit COA, primavie fulvic acid, primavie DBP",
  alternates: { canonical: POST_URL },
  openGraph: {
    title:
      "Nootropics Depot PrimaVie Shilajit Review: COA, Heavy Metals & How It Compares",
    description:
      "Nootropics Depot PrimaVie shilajit reviewed: what their COA testing covers, how PrimaVie standardization works, and how it compares to dedicated shilajit brands with batch-specific lab data.",
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-08",
    modifiedTime: "2026-05-08",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Is Nootropics Depot PrimaVie shilajit legit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Nootropics Depot is one of the most respected third-party tested supplement retailers in the US, known for publishing independent COA data for their products. Their PrimaVie shilajit uses a patented, standardized extract by Natreon Inc. — a licensed ingredient found in multiple published clinical studies. PrimaVie is standardized to dibenzo-alpha-pyrones (DBPs), which is a meaningful quality marker. Nootropics Depot publishes testing data covering heavy metals and potency, making them more transparent than most supplement retailers. That said, they are a retailer selling a standardized ingredient, not a dedicated shilajit brand with direct sourcing accountability.",
    },
  },
  {
    "@type": "Question",
    name: "Does PrimaVie report fulvic acid percentage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. PrimaVie shilajit is standardized to dibenzo-alpha-pyrones (DBPs), not to a specific fulvic acid percentage. Natreon Inc., the patent holder for PrimaVie, does not report fulvic acid content as a primary quality marker. This is a meaningful distinction from dedicated shilajit brands like Black Lotus (64.51% fulvic acid, Batch 93 COA, IAS Laboratories) or Pure Himalayan Shilajit (~58%, Certified Laboratories, A2LA ISO 17025, Sep 2024). If fulvic acid percentage is your primary evaluation criterion, PrimaVie does not provide that data.",
    },
  },
  {
    "@type": "Question",
    name: "How does Nootropics Depot test their shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Nootropics Depot publishes Certificates of Analysis for their products directly on their website — a level of transparency well above most supplement retailers. Their testing typically covers identity verification, heavy metals (lead, arsenic, mercury, cadmium), microbiology, and potency markers appropriate to the specific product. For PrimaVie shilajit, the COA reflects DBP standardization as documented by Natreon Inc. Check their site directly for the most current published batch documentation.",
    },
  },
  {
    "@type": "Question",
    name: "Is PrimaVie better than raw shilajit resin?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "PrimaVie and raw shilajit resin measure quality differently, making direct comparison difficult. PrimaVie is a standardized extract with documented DBP content and clinical research behind the specific branded ingredient — advantages for buyers who value research-backed standardization. Raw shilajit resin from dedicated brands like Black Lotus (IAS Labs, Batch 93, Altai Mountains Siberia), Pure Himalayan Shilajit (A2LA ISO 17025, Himalayan 16,000+ ft), and Lotus Blooming Herbs (A2LA ISO 17025, Himalayan 16,000–18,000ft, lowest lead of any brand tested at 0.040 mcg/serving) typically offer fulvic acid percentage data, batch-specific sourcing, and direct brand accountability. If clinical research backing matters most, PrimaVie has real advantages. If fulvic acid disclosure and batch-specific sourcing transparency are the priority, dedicated resin brands lead.",
    },
  },
  {
    "@type": "Question",
    name: "Where can I buy Nootropics Depot PrimaVie shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Nootropics Depot PrimaVie shilajit is available on Amazon and directly through the Nootropics Depot website (nootropicsdepot.com). For the most current pricing and COA data, visiting their site directly is recommended — their published COAs are accessible per product without contacting customer support. Note: ShilajitPrice.com does not currently have a direct affiliate partnership with Nootropics Depot. Amazon Associates links on this page earn a commission at no extra cost to you.",
    },
  },
];

const COMPARISON = [
  {
    brand: "Black Lotus Shilajit",
    lab: "IAS Laboratories, Phoenix AZ",
    coaType: "Batch-specific (Batch 93, May–Jun 2025)",
    fulvic: "64.51% resin · 73.11% tablets · 74.30% caps",
    dbp: "Verified",
    source: "Altai Mountains, Siberia",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    href: BL_BASE,
    thisPage: false,
  },
  {
    brand: "Lotus Blooming Herbs",
    lab: "Certified Laboratories, Burbank CA (A2LA ISO 17025, Cert 3034.01)",
    coaType: "Batch-specific (Batch BHC4429/2024057703)",
    fulvic: "Not disclosed · Lead: 0.040 mcg/serving (lowest tested)",
    dbp: "—",
    source: "Himalayan Mountains, 16,000–18,000ft",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    href: LBH_BASE,
    thisPage: false,
  },
  {
    brand: "Pure Himalayan Shilajit",
    lab: "Certified Labs + Micro Quality Labs, Burbank CA (A2LA ISO 17025)",
    coaType: "Batch-specific (Sep 2024 COA)",
    fulvic: "~58% · Mercury ND",
    dbp: "—",
    source: "Himalayan Mountains, 16,000+ ft",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    href: PH_BASE,
    thisPage: false,
  },
  {
    brand: "Natural Shilajit",
    lab: "DaaneLabs, Naples FL + Harken Research, Los Angeles CA",
    coaType: "Batch-specific (Nov 2024 COA)",
    fulvic: "Not disclosed · DBP verified",
    dbp: "Verified",
    source: "UNESCO Altai Mountains",
    tier: "S",
    tierColor: "bg-amber-400 text-amber-900",
    href: NS_BASE,
    thisPage: false,
  },
  {
    brand: "Pürblack",
    lab: "Pürblack Inc., Temecula CA",
    coaType: "Batch-specific (Dec 2025 COA)",
    fulvic: "Not disclosed · DBP: 16.5–21.9% · Urolithin A: up to 58.497 ppm",
    dbp: "16.5–21.9%",
    source: "Multi-region",
    tier: "A",
    tierColor: "bg-amber-100 text-amber-800 ring-1 ring-amber-300",
    href: PB_BASE,
    thisPage: false,
    discountNote: "Code SHILAJIT15 — 15% off your entire order at Pürblack.",
  },
  {
    brand: "Nootropics Depot PrimaVie",
    lab: "Third-party (published on ND site)",
    coaType: "COA available; batch cadence differs",
    fulvic: "Not reported · DBP standardized",
    dbp: "Standardized",
    source: "Natreon Inc. (region not disclosed)",
    tier: "B",
    tierColor: "bg-blue-100 text-blue-800 ring-1 ring-blue-300",
    href: ND_AMAZON,
    thisPage: true,
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-[#10B981] mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function X() {
  return (
    <svg className="w-4 h-4 text-red-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NootropicsDepotPrimaVieReview() {
  return (
    <BlogPostLayout
      heading={
        <>
          Nootropics Depot PrimaVie Shilajit Review —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            COA, Heavy Metals &amp; How It Compares
          </span>
        </>
      }
      description="Nootropics Depot is one of the most trusted third-party tested supplement retailers in the US. Their PrimaVie purified shilajit is one of the most searched shilajit products online. Here's what the lab data actually shows — and how it compares to dedicated shilajit brands."
      tags={["Brand Reviews", "COA Verified", "Ingredient Brands"]}
      publishedAt="2026-05-08"
      updatedAt="2026-05-08"
      readingTimeMin={11}
      currentSlug="nootropics-depot-primavie-review"
      quizCta="card"
      breadcrumbLabel="Nootropics Depot PrimaVie Review"
      faqItems={faqItems}
    >
      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span> Some links on this page
        are affiliate links. Amazon Associates links use tag shilajit0a-20 and earn a commission at
        no extra cost to you. ShilajitPrice.com does not currently have a direct affiliate
        partnership with Nootropics Depot — we recommend checking their site directly for current
        pricing. See our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">
          full disclosure policy
        </Link>
        .
      </div>

      {/* Quick verdict card */}
      <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg shadow-blue-900/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 font-black text-xl shrink-0 ring-1 ring-blue-300">
            B
          </div>
          <div>
            <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-0.5">
              Ingredient Brand — Retailer Tested
            </div>
            <h3 className="text-base font-black text-[#0D1F14]">
              Nootropics Depot PrimaVie Shilajit
            </h3>
            <p className="text-xs text-[#7BA899]">
              Natreon Inc. patented extract · DBP standardized · COA published on ND site · Amazon
              available
            </p>
          </div>
        </div>
        <a
          href={ND_AMAZON}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-md shadow-blue-900/20"
        >
          Find on Amazon →
        </a>
        <p className="text-[10px] text-[#7BA899] mt-2">
          Amazon Associates link — commission at no cost to you · Check nootropicsdepot.com for
          direct pricing
        </p>
      </div>

      {/* ── 1. Intro ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Why Nootropics Depot PrimaVie gets so many searches
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Nootropics Depot has built one of the strongest reputations in the supplement retail
            space by doing something most retailers don&apos;t: publishing independent third-party
            Certificates of Analysis for their products before buyers purchase. In a market where
            supplement quality claims are frequently unverifiable, that level of pre-purchase
            transparency is genuinely rare and has earned them a dedicated following in the
            nootropics and supplement research community.
          </p>
          <p>
            Their shilajit offering uses PrimaVie — a patented, clinically studied shilajit extract
            developed by Natreon Inc. PrimaVie has appeared in several published studies examining
            shilajit&apos;s effects on testosterone, mitochondrial function, and exercise recovery.
            That clinical pedigree, combined with Nootropics Depot&apos;s transparency reputation,
            makes it one of the most frequently searched shilajit products online.
          </p>
          <p>
            This review covers what PrimaVie actually is, what Nootropics Depot&apos;s testing
            approach looks like in practice, what their COA typically shows, and where the
            meaningful limitations are — especially when compared to dedicated shilajit brands with
            batch-specific sourcing and fulvic acid disclosure. For verified lab data across all
            brands we track, see our{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline">
              full lab data database
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── 2. What PrimaVie Is ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What PrimaVie actually is — the ingredient behind the product
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            PrimaVie is a branded, patented shilajit extract developed and licensed by Natreon
            Inc., a New Jersey-based ingredient company that specializes in standardized botanical
            extracts for the supplement industry. It is not a standalone shilajit brand — it is an
            ingredient that multiple supplement companies, including Nootropics Depot, license and
            incorporate into finished products.
          </p>
          <p>
            The key technical distinction: PrimaVie is standardized to{" "}
            <strong className="text-[#0D1F14]">dibenzo-alpha-pyrones (DBPs)</strong>, not to a
            fulvic acid percentage. DBPs are bioactive compounds in shilajit believed to support
            mitochondrial function and cellular energy production. Natreon&apos;s decision to
            standardize to DBPs rather than fulvic acid reflects their research focus — several
            PrimaVie clinical studies have specifically examined its effects on mitochondrial
            electron transport chain activity.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                label: "Ingredient developer",
                value: "Natreon Inc. (New Jersey)",
              },
              {
                label: "Standardization marker",
                value: "Dibenzo-alpha-pyrones (DBPs)",
              },
              {
                label: "Fulvic acid reported?",
                value: "No — not a PrimaVie quality marker",
              },
              {
                label: "Clinical research",
                value: "Multiple published studies on testosterone & mitochondria",
              },
              {
                label: "Sold by Nootropics Depot as",
                value: "Capsules (retail supplement product)",
              },
              {
                label: "COA access",
                value: "Published on Nootropics Depot website",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[#D1EDD8] rounded-xl p-3 flex justify-between items-start gap-2"
              >
                <span className="text-xs text-[#7BA899] shrink-0">{item.label}</span>
                <span className="text-xs font-semibold text-[#0D1F14] text-right">{item.value}</span>
              </div>
            ))}
          </div>

          <p>
            Understanding PrimaVie as an ingredient — rather than a brand — is important context for
            evaluating the Nootropics Depot product. You are buying a retailer&apos;s capsule
            product built around a licensed extract, not purchasing directly from the entity that
            sources, processes, and owns the shilajit supply chain.
          </p>
        </div>
      </section>

      {/* ── 3. ND Testing Approach ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Nootropics Depot&apos;s testing approach
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Nootropics Depot&apos;s core value proposition in the supplement retail space is
            pre-purchase testing transparency. They publish COA data for their products on their
            website, viewable before purchase — a standard most supplement retailers do not meet.
            This is why their reputation in the nootropics community is strong: buyers can see the
            lab documentation before committing, rather than requesting it after the fact or taking
            marketing claims on faith.
          </p>

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-blue-700 mb-3 uppercase tracking-wide">
              What ND&apos;s published COA typically covers
            </h3>
            <div className="space-y-2">
              {[
                {
                  item: "Identity verification",
                  detail:
                    "Confirms the product is shilajit / PrimaVie extract as labeled, not a substitute or adulterant",
                },
                {
                  item: "Heavy metals panel",
                  detail:
                    "Lead (Pb), arsenic (As), mercury (Hg), and cadmium (Cd) — the four metals routinely screened in shilajit safety testing",
                },
                {
                  item: "Microbiology",
                  detail:
                    "Standard plate count, yeast and mold, and pathogen screening appropriate for a finished capsule product",
                },
                {
                  item: "Potency / standardization",
                  detail:
                    "DBP content consistent with PrimaVie standardization — the primary quality marker for this specific extract",
                },
              ].map((row) => (
                <div
                  key={row.item}
                  className="flex items-start gap-3 text-xs border-b border-[#D1EDD8] pb-2 last:border-0 last:pb-0"
                >
                  <Check />
                  <div>
                    <div className="font-semibold text-[#0D1F14]">{row.item}</div>
                    <div className="text-[#7BA899] mt-0.5">{row.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            For a detailed guide to interpreting what a shilajit COA should include — and what to
            look for on any brand&apos;s documentation — see our{" "}
            <Link href="/blog/how-to-read-shilajit-coa" className="text-[#10B981] hover:underline">
              guide to reading a shilajit COA
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── 4. What the COA Shows ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What the COA shows — and what it doesn&apos;t
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            PrimaVie&apos;s standardization to DBPs is a real quality signal — it means the
            finished product has been tested to confirm the presence of the primary bioactive
            compounds at a level consistent with the branded ingredient specification. This is
            meaningfully better than the many shilajit products that carry no third-party
            verification at all.
          </p>
          <p>
            What the COA does not show:{" "}
            <strong className="text-[#0D1F14]">fulvic acid percentage</strong>. PrimaVie&apos;s
            quality framework is built around DBPs, not fulvic acid, so no FA percentage will
            appear on Nootropics Depot&apos;s published documentation. Buyers who specifically want
            to compare fulvic acid content across shilajit products will not find that data here.
            See our{" "}
            <Link
              href="/blog/shilajit-heavy-metals-comparison"
              className="text-[#10B981] hover:underline"
            >
              shilajit heavy metals and COA comparison
            </Link>{" "}
            for how dedicated brands document their quality.
          </p>

          {/* Key limitation callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-bold text-amber-800 mb-1.5">
              ⚠ Important: COA cadence and batch specificity differ
            </p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Nootropics Depot&apos;s COA documentation is published per product, not necessarily
              per production batch in the same way that dedicated shilajit brands (Black Lotus Batch
              93, Lotus Blooming Herbs Batch BHC4429/2024057703) link lab results to specific
              production runs. The testing is real and meaningful — but the batch traceability model
              differs from what dedicated brands provide. For buyers who want to verify that the
              exact jar they receive matches a specific documented lab result, check their site for
              the most current published documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Key Limitation ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          The key limitation: retailer vs dedicated brand
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            The most important structural distinction between Nootropics Depot PrimaVie and the
            dedicated shilajit brands in our database is the supply chain model. Nootropics Depot
            is a supplement retailer — they source finished or semi-finished ingredients, formulate
            capsule products, and test those products for quality. PrimaVie itself is a licensed
            branded ingredient from Natreon Inc.
          </p>
          <p>
            Dedicated shilajit brands — Black Lotus, Lotus Blooming Herbs, Pure Himalayan, Natural
            Shilajit, Pürblack — own or directly manage their sourcing relationships, purification
            process, and quality documentation from raw material to finished product. Their COAs
            link to specific harvest batches from specific locations at specific altitudes. Their
            sourcing stories are verifiable: Altai Mountains Siberia (Black Lotus), Himalayan
            16,000–18,000ft (Lotus Blooming Herbs), UNESCO Altai designation (Natural Shilajit).
          </p>
          <p>
            PrimaVie&apos;s geographic source is not publicly disclosed by Natreon Inc. in the
            detail that direct brands provide. That is not necessarily a problem — Natreon is a
            well-established ingredient company — but it means the sourcing story available to a
            PrimaVie buyer is materially different from what a direct brand buyer receives.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
              <h3 className="text-xs font-bold text-[#10B981] mb-2 uppercase tracking-wide">
                Nootropics Depot PrimaVie — strengths
              </h3>
              <ul className="space-y-1.5">
                {[
                  "Trusted retailer with published COA history",
                  "PrimaVie is a clinically studied, patented extract",
                  "DBP standardization is a real quality marker",
                  "Heavy metals and identity testing documented",
                  "Widely available on Amazon with fast delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#0D1F14]">
                    <span className="text-[#10B981] shrink-0 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="text-xs font-bold text-red-600 mb-2 uppercase tracking-wide">
                Limitations vs dedicated brands
              </h3>
              <ul className="space-y-1.5">
                {[
                  "Fulvic acid percentage not reported",
                  "Source geography not disclosed with batch specificity",
                  "Retailer COA model differs from direct brand batch traceability",
                  "No direct sourcing story or altitude documentation",
                  "No direct affiliate partnership — cannot verify pricing independently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#0D1F14]">
                    <span className="text-red-400 shrink-0 font-bold mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Comparison Table ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-5">
          PrimaVie vs dedicated shilajit brands — full comparison
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed mb-5">
          <p>
            The table below uses verified COA data for all five dedicated brands in our database.
            PrimaVie data reflects what is publicly known about the standardized extract and
            Nootropics Depot&apos;s published testing approach — no figures have been fabricated.
            For complete lab data across all brands, see our{" "}
            <Link href="/lab-data" className="text-[#10B981] hover:underline">
              full lab data database
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/best-shilajit-brands-ranked"
              className="text-[#10B981] hover:underline"
            >
              ranked brand database
            </Link>
            .
          </p>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden space-y-3">
          {COMPARISON.map((b) => (
            <div
              key={b.brand}
              className={`rounded-xl border p-4 ${
                b.thisPage ? "border-blue-200 bg-blue-50" : "border-[#D1EDD8] bg-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 rounded text-[11px] font-black shrink-0 ${b.tierColor}`}
                >
                  {b.tier}
                </span>
                <span className="text-sm font-bold text-[#0D1F14]">{b.brand}</span>
                {b.thisPage && (
                  <span className="ml-auto text-[9px] text-blue-600 font-bold uppercase tracking-wide">
                    This review
                  </span>
                )}
              </div>
              <div className="space-y-1.5 text-xs">
                <div>
                  <span className="text-[#7BA899]">Lab: </span>
                  <span className="text-[#0D1F14] font-medium">{b.lab}</span>
                </div>
                <div>
                  <span className="text-[#7BA899]">COA type: </span>
                  <span className="text-[#0D1F14]">{b.coaType}</span>
                </div>
                <div>
                  <span className="text-[#7BA899]">Fulvic / potency: </span>
                  <span className="text-[#0D1F14] font-medium">{b.fulvic}</span>
                </div>
                <div>
                  <span className="text-[#7BA899]">Source: </span>
                  <span className="text-[#0D1F14]">{b.source}</span>
                </div>
              </div>
              <a
                href={b.href}
                target="_blank"
                rel={b.thisPage ? "noopener noreferrer" : "noopener noreferrer sponsored"}
                className={`mt-3 block text-center py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  b.thisPage
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-emerald-500 hover:bg-emerald-400 text-white"
                }`}
              >
                {b.thisPage ? "Find on Amazon →" : "View Brand →"}
              </a>
              {b.discountNote && <p className="mt-1.5 text-[9px] text-center text-[#7BA899]">{b.discountNote}</p>}
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto rounded-xl border border-[#D1EDD8]">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                {["Tier", "Brand", "Lab / Accreditation", "Fulvic Acid / Potency", "Source", ""].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-[11px] font-bold text-[#7BA899] uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((b, i) => (
                <tr
                  key={b.brand}
                  className={`border-b border-[#D1EDD8] last:border-0 ${
                    b.thisPage ? "bg-blue-50" : i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"
                  }`}
                >
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded text-[11px] font-black ${b.tierColor}`}
                    >
                      {b.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-[#0D1F14] whitespace-nowrap">
                    {b.brand}
                    {b.thisPage && (
                      <span className="ml-1.5 text-[9px] text-blue-600 font-bold">★ this review</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-[#7BA899] max-w-[200px]">{b.lab}</td>
                  <td className="px-4 py-3.5 text-[#0D1F14] font-medium max-w-[220px]">
                    {b.fulvic}
                  </td>
                  <td className="px-4 py-3.5 text-[#0D1F14] max-w-[180px]">{b.source}</td>
                  <td className="px-4 py-3.5">
                    <a
                      href={b.href}
                      target="_blank"
                      rel={b.thisPage ? "noopener noreferrer" : "noopener noreferrer sponsored"}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors whitespace-nowrap ${
                        b.thisPage
                          ? "bg-blue-600 hover:bg-blue-500 text-white"
                          : "bg-emerald-500 hover:bg-emerald-400 text-white"
                      }`}
                    >
                      {b.thisPage ? "Amazon →" : "View →"}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-[#7BA899] mt-2 text-right">
          S-tier = verified batch-specific COA, fulvic acid or DBP data, named accredited lab. All
          partner brand data from published COAs.
        </p>
      </section>

      {/* ── 7. Brand-by-brand narrative ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How the dedicated brands compare — individual breakdowns
        </h2>
        <div className="space-y-5">
          {[
            {
              name: "Black Lotus Shilajit",
              tagline: "Highest verified fulvic acid concentration — Altai Mountains, Siberia",
              body: "IAS Laboratories, Phoenix AZ. Batch 93, May–June 2025. Fulvic acid: 64.51% (resin), 73.11% (tablets), 74.30% (capsules). Mercury not detected. GMP Certified, Non-GMO, Made in USA. The most cost-efficient S-tier brand by verified fulvic acid per dollar. Source is Altai Mountains, Siberia — not Himalayan.",
              href: BL_BASE,
            },
            {
              name: "Lotus Blooming Herbs",
              tagline: "Lowest lead of any brand tested — Himalayan Mountains 16,000–18,000ft",
              body: "Certified Laboratories, Burbank CA — A2LA ISO 17025 accredited, Certificate 3034.01. Batch BHC4429/2024057703. Fulvic acid: not disclosed. Lead: 0.040 mcg/serving — the lowest measured lead of any brand in our database. GMP Certified, NAMA member, AHPA member. Ayurvedic practitioner-owned. Source: Himalayan Mountains 16,000–18,000ft.",
              href: LBH_BASE,
            },
            {
              name: "Pure Himalayan Shilajit",
              tagline: "Cleanest heavy metals panel in tablet format — Himalayan 16,000+ ft",
              body: "Certified Laboratories + Micro Quality Labs, Burbank CA — A2LA ISO 17025 accredited. September 2024 COA. Fulvic acid: ~58%. Mercury not detected. Cleanest tablet heavy metals panel of any brand tested. Source: Himalayan Mountains, 16,000+ ft elevation.",
              href: PH_BASE,
            },
            {
              name: "Natural Shilajit",
              tagline: "Adulterant tested — UNESCO Altai Mountains, Siberia",
              body: "DaaneLabs, Naples FL + Harken Research, Los Angeles CA. November 2024 COA. Fulvic acid: not disclosed. DBP verified. The only brand in our database that publishes adulterant testing results — specifically for sexual enhancement compounds, a critical differentiator for tested athletes and quality-focused buyers. Source: UNESCO Altai Mountains.",
              href: NS_BASE,
            },
            {
              name: "Pürblack",
              tagline: "5 US patents, US pharmaceutical-grade manufacturing — multi-region",
              body: "Pürblack Inc., Temecula CA. December 2025 COA. Does not report fulvic acid percentage — uses DBP (16.5–21.9%) and Urolithin A (up to 58.497 ppm) as quality markers. 5 US Patents on purification and formulation. Pharmaceutical-grade US manufacturing. Source: multi-region (Caucasus, Siberia, Himalayas). Use code SHILAJIT15 for 15% off your entire order at Pürblack.",
              href: PB_BASE,
            },
          ].map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-[#D1EDD8] rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-base font-black text-[#0D1F14] mb-0.5">{brand.name}</h3>
              <p className="text-xs font-semibold text-[#10B981] mb-2">{brand.tagline}</p>
              <p className="text-xs text-[#4A6358] leading-relaxed mb-3">{brand.body}</p>
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-[11px] font-semibold transition-colors"
              >
                View {brand.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. Who each is best for ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Who PrimaVie / Nootropics Depot is best for
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Nootropics community buyers",
              body: "If you already trust the Nootropics Depot brand ecosystem and are familiar with their COA-first purchasing model, PrimaVie is a solid choice. You get a standardized, clinically studied extract from a retailer that invests in transparency.",
            },
            {
              title: "Clinical research-focused buyers",
              body: "PrimaVie has appeared in published studies on testosterone support and mitochondrial function. If you specifically want a shilajit extract backed by peer-reviewed research on the exact branded ingredient — not just on shilajit generally — PrimaVie has an advantage.",
            },
            {
              title: "Capsule-format preference",
              body: "Nootropics Depot sells PrimaVie in capsule form with standardized dosing. For buyers who want a capsule product with published quality documentation and no commitment to learning the resin form, this is a practical option.",
            },
            {
              title: "Amazon convenience buyers",
              body: "PrimaVie through Nootropics Depot is widely available on Amazon with Prime shipping. If fast delivery and the familiar Amazon purchase experience are priorities, this is one of the more accessible quality shilajit options on the platform.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">{card.title}</h3>
              <p className="text-xs text-[#0D1F14] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Who dedicated shilajit brands are better for
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Buyers who need fulvic acid data",
              body: "PrimaVie does not report fulvic acid percentage. Black Lotus (64.51% resin, Batch 93 COA) and Pure Himalayan (~58%, Sep 2024 COA) are the options for buyers who want FA% as their primary quality benchmark.",
            },
            {
              title: "Buyers who want batch-specific sourcing",
              body: "Dedicated brands link their COA results to specific production batches from specific locations. Lotus Blooming Herbs Batch BHC4429/2024057703, Black Lotus Batch 93 — these are traceable. PrimaVie's source geography is not disclosed at that level of specificity.",
            },
            {
              title: "Resin format users",
              body: "If resin is your preferred format — for sublingual absorption, dosage flexibility, or form-factor preference — none of the Nootropics Depot PrimaVie products are relevant. Black Lotus, Lotus Blooming Herbs, Pure Himalayan, Natural Shilajit, and Pürblack all offer resin.",
            },
            {
              title: "Buyers prioritizing lowest lead content",
              body: "Lotus Blooming Herbs documents 0.040 mcg of lead per serving — the lowest of any brand in our database. For buyers for whom lead content is a primary safety consideration, that specific data is only available through dedicated brand testing.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-[#10B981] mb-2">{card.title}</h3>
              <p className="text-xs text-[#0D1F14] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. Where to buy ── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Where to buy Nootropics Depot PrimaVie
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Nootropics Depot PrimaVie shilajit is available in two primary places:
          </p>
          <div className="space-y-3">
            <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
              <div className="text-xs font-bold text-[#0D1F14] mb-1.5">
                Amazon (via Amazon Associates)
              </div>
              <p className="text-xs text-[#7BA899] leading-relaxed mb-3">
                The most convenient purchase channel for most buyers. Eligible for Prime shipping,
                easy returns, and familiar checkout. Use the link below — it earns ShilajitPrice.com
                a small commission at no extra cost to you.
              </p>
              <a
                href={ND_AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                Find Nootropics Depot PrimaVie on Amazon →
              </a>
              <p className="text-[10px] text-[#7BA899] mt-1.5">
                Amazon Associates link (tag: shilajit0a-20) — commission at no extra cost to you
              </p>
            </div>
            <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
              <div className="text-xs font-bold text-[#0D1F14] mb-1.5">
                Nootropics Depot website (nootropicsdepot.com)
              </div>
              <p className="text-xs text-[#7BA899] leading-relaxed">
                The best option for accessing their published COA documentation before purchase.
                Visit their site directly and navigate to the product page — the COA link is
                typically accessible on the product listing itself. Note: ShilajitPrice.com does not
                currently have a direct affiliate partnership with Nootropics Depot — no commission
                is earned on direct site purchases. We recommend their site for COA access regardless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA block ── */}
      <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">
          Compare all verified shilajit brands
        </div>
        <h3 className="text-base font-black text-[#0D1F14] mb-1">
          See the full lab data database
        </h3>
        <p className="text-xs text-[#7BA899] mb-5">
          Batch-specific COA results across Black Lotus, Lotus Blooming Herbs, Pure Himalayan,
          Natural Shilajit, and Pürblack — every number from a named accredited laboratory.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 mb-4">
          <Link
            href="/lab-data"
            className="flex flex-col gap-1 border-2 border-[#D1EDD8] rounded-xl p-4 hover:border-[#9EC9AD] transition-colors"
          >
            <span className="text-xs font-bold text-[#0D1F14]">Full Lab Data Database</span>
            <span className="text-[10px] text-[#7BA899]">
              Every COA figure across all 5 verified brands
            </span>
            <span className="mt-1 text-[11px] text-[#10B981] font-semibold">View lab data →</span>
          </Link>
          <Link
            href="/blog/best-shilajit-brands-ranked"
            className="flex flex-col gap-1 border-2 border-[#D1EDD8] rounded-xl p-4 hover:border-[#9EC9AD] transition-colors"
          >
            <span className="text-xs font-bold text-[#0D1F14]">All Brands Ranked</span>
            <span className="text-[10px] text-[#7BA899]">
              S-tier through D-tier with scoring methodology
            </span>
            <span className="mt-1 text-[11px] text-[#10B981] font-semibold">
              See full rankings →
            </span>
          </Link>
        </div>

        <p className="text-xs text-[#7BA899]">
          Looking for the heavy metals comparison specifically?{" "}
          <Link
            href="/blog/shilajit-heavy-metals-comparison"
            className="text-[#10B981] hover:underline font-semibold"
          >
            Lead, arsenic, mercury, and cadmium across all 5 brands →
          </Link>
        </p>
      </div>
    </BlogPostLayout>
  );
}
