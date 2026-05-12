import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout, { type FaqItem } from "../../components/blog/BlogPostLayout";

// ── Affiliate constants ────────────────────────────────────────────────────
const FF_BASE = "https://fractalforest.co/SHILAJIT-PRICE";
const BL_BASE =
  "https://black-lotus-shilajit-shop.myshopify.com?sca_ref=5188496.BbHTin3axE";
const PH_BASE = "https://www.purehimalayanshilajit.com/?ref=4792";
const NS_BASE = "https://naturalshilajit.com/?rfsn=9069392.c841fa";
const PB_BASE = "https://purblack.pxf.io/c/7221460/3041684/36963";
const LBH_BASE = "https://lotusbloomingherbs.com/?aff=380";

const BASE_URL = "https://www.shilajitprice.com";
const POST_URL = `${BASE_URL}/blog/fractal-forest-shilajit-review`;

const title =
  "Fractal Forest Shilajit Review: COA Data, Wild American Drops & Himalayan Resin Compared";
const description =
  "Fractal Forest shilajit reviewed with full COA data: Himalayan resin, Himalayan drops (all heavy metals ND — cleanest on site), and Wild American drops with 71.31% verified fulvic acid. Plus 15% off with code SHILAJIT-PRICE.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "fractal forest shilajit review, fractal forest wild american shilajit, fractal forest himalayan shilajit drops, fractal forest shilajit COA, wild american shilajit, is fractal forest shilajit legit",
  alternates: { canonical: POST_URL },
  openGraph: {
    title,
    description,
    url: POST_URL,
    siteName: "ShilajitPrice.com",
    type: "article",
    publishedTime: "2026-05-12",
    modifiedTime: "2026-05-12",
  },
};

const faqItems: FaqItem[] = [
  {
    "@type": "Question",
    name: "Is Fractal Forest shilajit legit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Fractal Forest is a legitimate shilajit brand based in Kauai, Hawaii, with third-party COA testing from two accredited labs: Certified Laboratories in Burbank, CA (A2LA ISO 17025, Cert 3034.01) for their Himalayan products, and IAS Laboratories in Phoenix, AZ — the same lab used by Black Lotus Shilajit — for their Wild American drops. Their Himalayan drops batch (LOT 1001, March 2026) returned all four heavy metals as Not Detected, which is the cleanest heavy metals result of any product we have tested on ShilajitPrice.com. Their Wild American drops independently verify 71.31% fulvic acid by the J.M. Verploegh and L.A. Brandvold method.",
    },
  },
  {
    "@type": "Question",
    name: "What is Wild American shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Wild American shilajit refers to naturally occurring shilajit deposits found in North America rather than the Himalayan or Altai mountain ranges. These deposits are geologically distinct from Asian sources — different mineral profiles, different elevations, different climate history. North American shilajit is extremely rare in the commercial market; Fractal Forest's Wild American Drops is the only verified North American shilajit product on ShilajitPrice.com. Their batch (24E0373, IAS Laboratories, November 2024) confirmed 71.31% fulvic acid and a comprehensive mineral panel including Potassium 58,800 ppm, Calcium 27,519 ppm, and Magnesium 10,000 ppm. This product is distinct from their Himalayan line and carries a different COA, sourcing location, and mineral composition.",
    },
  },
  {
    "@type": "Question",
    name: "Does Fractal Forest test for heavy metals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. All three Fractal Forest products have documented heavy metals testing from accredited third-party labs. Their Himalayan Resin (Batch 20G, Certified Laboratories Burbank, July 2024) showed Lead 1.10 ppm, Arsenic 1.16 ppm, Cadmium 0.042 ppm, Mercury 0.008 ppm — all within normal range for purified Himalayan resin. Their Himalayan Drops (Batch LOT 1001, Certified Laboratories Burbank, March 2026) returned Lead ND, Arsenic ND, Cadmium ND, Mercury ND — all four not detected. Their Wild American Drops (Batch 24E0373, IAS Laboratories Phoenix, November 2024) showed Lead ND, Arsenic 0.07 ppm, Cadmium 0.07 ppm, Mercury 0.02 ppm — all well within safe limits.",
    },
  },
  {
    "@type": "Question",
    name: "What is the fulvic acid percentage in Fractal Forest shilajit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The only COA-verified fulvic acid figure for Fractal Forest is 71.31% in their Wild American Shilajit Drops, confirmed by IAS Laboratories Phoenix AZ using the J.M. Verploegh and L.A. Brandvold method (Batch 24E0373, November 2024). Humic acid was 4.17% on the same batch. Neither the Himalayan Resin nor the Himalayan Drops have a tested fulvic acid percentage on their published COAs — fulvic acid was not included in those testing panels. We do not publish the 83% figure that appears on Fractal Forest's website, as it is not supported by any COA provided.",
    },
  },
  {
    "@type": "Question",
    name: "How does Fractal Forest compare to Himalayan shilajit brands?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fractal Forest's Himalayan products source from Gilgit Baltistan at 16,000ft — comparable sourcing altitude to Pure Himalayan Shilajit and Lotus Blooming Herbs. Their Himalayan Drops COA from Certified Laboratories Burbank (A2LA ISO 17025, Cert 3034.01) matches the lab accreditation standard of Pure Himalayan Shilajit and Lotus Blooming Herbs — the highest in our database. On heavy metals, their Himalayan Drops (all four metals ND) are the cleanest result of any product on the site. Their unique differentiator is the Wild American Drops — a North American sourced product with verified 71.31% fulvic acid that has no equivalent among the other brands we review.",
    },
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-[#10B981] shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FractalForestShilajitReview() {
  return (
    <BlogPostLayout
      heading={
        <>
          Fractal Forest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
            Shilajit Review
          </span>
          : COA Data, Wild American Drops &amp; Himalayan Resin Compared
        </>
      }
      description="A Kauai, Hawaii wellness brand with three shilajit products — including the only verified Wild American shilajit on the market. Here's the full COA breakdown across all three."
      tags={["Reviews", "COA Verified", "Himalayan", "Wild American"]}
      publishedAt="2026-05-12"
      updatedAt="2026-05-12"
      readingTimeMin={12}
      currentSlug="fractal-forest-shilajit-review"
      breadcrumbLabel="Fractal Forest Shilajit Review"
      faqItems={faqItems}
      quizCta="card"
    >
      {/* FTC Disclosure */}
      <div className="bg-white border border-[#D1EDD8] rounded-xl p-4 text-xs text-[#7BA899] leading-relaxed">
        <span className="font-semibold text-[#0D1F14]">Disclosure:</span>{" "}
        Some links on this page are affiliate links. If you purchase through
        them, we may earn a commission at no extra cost to you. Use code{" "}
        <span className="font-semibold text-[#0D1F14]">SHILAJIT-PRICE</span>{" "}
        for 15% off at fractalforest.co. This does not affect our analysis — see our{" "}
        <Link href="/disclaimer" className="text-[#10B981] hover:underline">
          full disclosure policy
        </Link>
        .
      </div>

      {/* ── 1. Intro ──────────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          A rare format and a genuinely unique product
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Fractal Forest is a Kauai, Hawaii-based wellness brand that offers
            something genuinely rare in the shilajit market — a Wild American
            shilajit drops product alongside their Himalayan line. While most
            brands compete on Himalayan or Altai sourcing, Fractal Forest has
            gone a different direction: two liquid drop formats (including the
            only North American shilajit we have independently verified), and a
            Himalayan resin rounding out the lineup.
          </p>
          <p>
            Their COA testing spans two accredited labs:{" "}
            <Link
              href="/blog/how-to-read-shilajit-coa"
              className="text-[#10B981] hover:underline"
            >
              Certified Laboratories in Burbank, CA
            </Link>{" "}
            (A2LA ISO 17025, Cert 3034.01 — the same accreditation used by Pure
            Himalayan Shilajit and Lotus Blooming Herbs) for their Himalayan
            products, and IAS Laboratories in Phoenix, AZ — the same lab as
            Black Lotus Shilajit — for their Wild American drops. Both are
            among the most credible labs in our database.
          </p>
          <p>
            This review covers the COA data for all three products, what the
            Wild American sourcing actually means, where Fractal Forest fits
            against the other verified brands on the site, and who each product
            is best suited for.
          </p>
        </div>
      </section>

      {/* ── 2. Brand Background ───────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Who is Fractal Forest?
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Fractal Forest is based in Kauai, Hawaii, and positions their brand
            at the intersection of Ayurvedic tradition and biohacker culture —
            an increasingly common positioning in the premium supplement space.
            Their product philosophy emphasizes bioavailability, sourcing
            transparency, and accredited lab verification across their line.
          </p>
          <p>
            Their three shilajit products are meaningfully differentiated, not
            variations on the same SKU. The Himalayan Resin and Himalayan Drops
            are both Gilgit Baltistan sourced at 16,000ft but in different
            delivery formats — solid resin versus liquid drops. The Wild
            American Drops is an entirely separate product: North American
            sourced, tested at a different lab, with its own mineral profile
            and the only published fulvic acid figure in the Fractal Forest
            lineup.
          </p>

          {/* Brand fact grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Based in Kauai, Hawaii",
                body: "Kauai-based wellness brand with Ayurvedic and biohacker-oriented positioning — focused on sourcing transparency and bioavailability.",
              },
              {
                title: "360+ reviews at 5.0 stars",
                body: "Their Himalayan Resin has accumulated 360+ customer reviews at a 5.0 star rating — a strong signal of consistent product experience.",
              },
              {
                title: "Two accredited labs",
                body: "Certified Laboratories Burbank CA (A2LA ISO 17025, Cert 3034.01) for Himalayan products. IAS Laboratories Phoenix AZ for Wild American drops.",
              },
              {
                title: "Liquid drops format",
                body: "Both Himalayan and Wild American products come in a liquid drops format — rare in the shilajit market and appealing to buyers who find resin preparation inconvenient.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#D1EDD8] rounded-xl p-4"
              >
                <h3 className="text-xs font-bold text-[#10B981] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A6358] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p>
            Use code{" "}
            <span className="font-semibold text-[#0D1F14] bg-green-50 border border-green-200 rounded px-1.5 py-0.5">
              SHILAJIT-PRICE
            </span>{" "}
            for 15% off all Fractal Forest products at{" "}
            <a
              href={FF_BASE}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[#10B981] hover:underline font-semibold"
            >
              fractalforest.co
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── 3. Lab Testing Overview ───────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Lab testing — two accredited labs, three products
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Fractal Forest uses two separate labs depending on the product.
            This is not unusual for brands with diverse sourcing — the choice
            of lab matters, and both labs they use are legitimate.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Certified Laboratories, Burbank CA",
                sub: "A2LA ISO 17025, Cert 3034.01",
                body: "Used for Himalayan Resin and Himalayan Drops. The same accreditation and lab used by Pure Himalayan Shilajit and Lotus Blooming Herbs — A2LA ISO/IEC 17025 represents the gold standard for supplement lab accreditation in the US.",
                color: "border-amber-200 bg-amber-50",
                labelColor: "text-amber-700",
              },
              {
                title: "IAS Laboratories, Phoenix AZ",
                sub: "Used for Wild American Drops",
                body: "The same lab that tests Black Lotus Shilajit every batch. IAS Laboratories is a well-established independent testing facility recognized in the supplement industry. Batch 24E0373 (November 2024) returned the verified 71.31% fulvic acid figure.",
                color: "border-blue-200 bg-blue-50",
                labelColor: "text-blue-700",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`border-2 rounded-xl p-4 ${item.color}`}
              >
                <h3 className={`text-xs font-bold mb-0.5 ${item.labelColor}`}>
                  {item.title}
                </h3>
                <p className={`text-[10px] font-semibold mb-2 ${item.labelColor}`}>
                  {item.sub}
                </p>
                <p className="text-xs text-[#4A6358] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p>
            For a reference on what a COA should include and how to read one,
            see our guide to{" "}
            <Link
              href="/blog/how-to-read-shilajit-coa"
              className="text-[#10B981] hover:underline"
            >
              how to read a shilajit COA
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── 4. Himalayan Resin COA ────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Himalayan Shilajit Resin — COA breakdown
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          {/* Lab ID callout */}
          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              {[
                { label: "Lab", value: "Certified Laboratories, Burbank CA" },
                { label: "Accreditation", value: "A2LA ISO 17025" },
                { label: "Batch", value: "20G" },
                { label: "Test date", value: "July 2024" },
                { label: "Source", value: "Himalayan Mountains, Gilgit Baltistan, 16,000ft" },
                { label: "Price", value: "$55 / 14g ($3.93/gram)" },
              ].map((row) => (
                <div key={row.label} className="flex gap-2">
                  <span className="font-bold text-[#7BA899] w-24 shrink-0">
                    {row.label}
                  </span>
                  <span className="text-[#0D1F14]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Heavy metals table */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">
              Heavy metals — Batch 20G
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#D1EDD8]">
                    {["Metal", "Result (ppm)", "Assessment"].map((h) => (
                      <th
                        key={h}
                        className="text-left py-2 pr-6 font-bold text-[#7BA899] uppercase tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metal: "Lead (Pb)", result: "1.10 ppm", note: "Within normal range for purified Himalayan resin" },
                    { metal: "Arsenic (As)", result: "1.16 ppm", note: "Normal range — below Natural Shilajit raw resin (3.757 ppm)" },
                    { metal: "Cadmium (Cd)", result: "0.042 ppm", note: "Very clean" },
                    { metal: "Mercury (Hg)", result: "0.008 ppm", note: "Essentially non-detectable" },
                  ].map((row, i) => (
                    <tr
                      key={row.metal}
                      className={`border-b border-[#D1EDD8] last:border-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"
                      }`}
                    >
                      <td className="py-2.5 pr-6 font-semibold text-[#0D1F14]">
                        {row.metal}
                      </td>
                      <td className="py-2.5 pr-6 font-bold text-[#10B981]">
                        {row.result}
                      </td>
                      <td className="py-2.5 text-[#7BA899]">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p>
            These levels are within the normal range for a purified Himalayan
            resin product. For context, Natural Shilajit&apos;s raw resin
            testing showed higher levels — Lead 4.714 ppm, Arsenic 3.757 ppm —
            on their published COA. The Fractal Forest resin is cleaner by
            comparison. Fulvic acid was not included in the Batch 20G testing
            panel.
          </p>
          <p>
            At $55 for 14g ($3.93/gram), this is at the premium end of the
            resin market. The A2LA ISO 17025 lab accreditation justifies part
            of that premium, though buyers seeking a better $/gram value with
            verified fulvic acid may find Black Lotus ($1.23/gram, 64.51% FA)
            or Lotus Blooming Herbs more competitive for the resin format.
          </p>
        </div>
      </section>

      {/* ── 5. Himalayan Drops COA ────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Himalayan Shilajit Drops — the cleanest heavy metals result on the site
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          {/* Lab ID callout */}
          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              {[
                { label: "Lab", value: "Certified Laboratories, Burbank CA" },
                { label: "Accreditation", value: "A2LA ISO 17025, Cert 3034.01" },
                { label: "Batch", value: "LOT 1001" },
                { label: "Test date", value: "March 2026" },
                { label: "Source", value: "Himalayan Mountains, Gilgit Baltistan, 16,000ft" },
                { label: "Price", value: "$44 / 30ml" },
              ].map((row) => (
                <div key={row.label} className="flex gap-2">
                  <span className="font-bold text-[#7BA899] w-24 shrink-0">
                    {row.label}
                  </span>
                  <span className="text-[#0D1F14]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ND callout badge */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5">
            <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-1">
              Standout result
            </div>
            <h3 className="text-sm font-black text-[#0D1F14] mb-2">
              All four heavy metals: Not Detected
            </h3>
            <p className="text-xs text-[#4A6358] leading-relaxed">
              Lead ND · Arsenic ND · Cadmium ND · Mercury ND. This is the
              cleanest heavy metals result of any product we have tested on
              ShilajitPrice.com. Not detected means the concentration was below
              the instrument&apos;s limit of detection — effectively zero.
            </p>
          </div>

          {/* Heavy metals table */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">
              Heavy metals — Batch LOT 1001
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#D1EDD8]">
                    {["Metal", "Result", "Assessment"].map((h) => (
                      <th
                        key={h}
                        className="text-left py-2 pr-6 font-bold text-[#7BA899] uppercase tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metal: "Lead (Pb)", result: "ND", note: "Not Detected — below instrument limit of detection" },
                    { metal: "Arsenic (As)", result: "ND", note: "Not Detected" },
                    { metal: "Cadmium (Cd)", result: "ND", note: "Not Detected" },
                    { metal: "Mercury (Hg)", result: "ND", note: "Not Detected" },
                  ].map((row, i) => (
                    <tr
                      key={row.metal}
                      className={`border-b border-[#D1EDD8] last:border-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-emerald-50"
                      }`}
                    >
                      <td className="py-2.5 pr-6 font-semibold text-[#0D1F14]">
                        {row.metal}
                      </td>
                      <td className="py-2.5 pr-6 font-black text-emerald-600">
                        {row.result}
                      </td>
                      <td className="py-2.5 text-[#7BA899]">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Microbiology table */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">
              Microbiology panel — Batch LOT 1001
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#D1EDD8]">
                    {["Test", "Result"].map((h) => (
                      <th
                        key={h}
                        className="text-left py-2 pr-6 font-bold text-[#7BA899] uppercase tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { test: "E. Coli", result: "Absent" },
                    { test: "Salmonella", result: "Absent" },
                    { test: "S. Aureus", result: "Absent" },
                    { test: "Total Plate Count", result: "<10" },
                    { test: "Mold", result: "<10" },
                    { test: "Yeast", result: "<10" },
                  ].map((row, i) => (
                    <tr
                      key={row.test}
                      className={`border-b border-[#D1EDD8] last:border-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"
                      }`}
                    >
                      <td className="py-2.5 pr-6 font-semibold text-[#0D1F14]">
                        {row.test}
                      </td>
                      <td className="py-2.5 font-bold text-[#10B981]">
                        {row.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-2">
            {[
              "All four heavy metals ND on Batch LOT 1001 — the cleanest result of any product in our database.",
              "A2LA ISO 17025, Cert 3034.01 at Certified Laboratories Burbank — the same accreditation standard as Pure Himalayan Shilajit and Lotus Blooming Herbs.",
              "Microbiology panel covers E. Coli, Salmonella, S. Aureus, Total Plate Count, Mold, and Yeast — all pass.",
              "At $44 for 30ml, the Himalayan Drops are the most accessible Fractal Forest product on price and uniquely positioned for buyers who want the cleanest possible heavy metals result.",
            ].map((note) => (
              <div key={note} className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-xs text-[#0D1F14] leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#7BA899]">
            For a full cross-brand heavy metals comparison, see our{" "}
            <Link
              href="/blog/shilajit-heavy-metals-comparison"
              className="text-[#10B981] hover:underline"
            >
              shilajit heavy metals comparison
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── 6. Wild American Drops COA ────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Wild American Shilajit Drops — the unique product
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          {/* Lab ID callout */}
          <div className="bg-[#F0FAF4] border border-[#D1EDD8] rounded-xl p-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              {[
                { label: "Lab", value: "IAS Laboratories, Phoenix AZ" },
                { label: "Batch", value: "24E0373" },
                { label: "Test date", value: "November 2024" },
                { label: "Fulvic acid", value: "71.31% (J.M. Verploegh & L.A. Brandvold method)" },
                { label: "Source", value: "North America" },
                { label: "Price", value: "$77 / 30ml" },
              ].map((row) => (
                <div key={row.label} className="flex gap-2">
                  <span className="font-bold text-[#7BA899] w-24 shrink-0">
                    {row.label}
                  </span>
                  <span className="text-[#0D1F14]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fulvic acid callout */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
            <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">
              COA-verified fulvic acid
            </div>
            <h3 className="text-sm font-black text-[#0D1F14] mb-2">
              71.31% fulvic acid — IAS Laboratories, Batch 24E0373
            </h3>
            <p className="text-xs text-[#4A6358] leading-relaxed">
              This is the only COA-verified fulvic acid figure for any Fractal
              Forest product. Tested using the J.M. Verploegh and L.A.
              Brandvold method — the same analytical framework used by IAS
              Laboratories for other brands in our database. Humic acid: 4.17%.
            </p>
          </div>

          {/* Heavy metals table */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">
              Heavy metals — Batch 24E0373
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#D1EDD8]">
                    {["Metal", "Result (ppm)", "Assessment"].map((h) => (
                      <th
                        key={h}
                        className="text-left py-2 pr-6 font-bold text-[#7BA899] uppercase tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metal: "Lead (Pb)", result: "ND", note: "Not Detected" },
                    { metal: "Arsenic (As)", result: "0.07 ppm", note: "Extremely low" },
                    { metal: "Cadmium (Cd)", result: "0.07 ppm", note: "Very clean" },
                    { metal: "Mercury (Hg)", result: "0.02 ppm", note: "Very clean" },
                  ].map((row, i) => (
                    <tr
                      key={row.metal}
                      className={`border-b border-[#D1EDD8] last:border-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#F0FAF4]"
                      }`}
                    >
                      <td className="py-2.5 pr-6 font-semibold text-[#0D1F14]">
                        {row.metal}
                      </td>
                      <td className="py-2.5 pr-6 font-bold text-[#10B981]">
                        {row.result}
                      </td>
                      <td className="py-2.5 text-[#7BA899]">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mineral panel */}
          <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-[#0D1F14] mb-3">
              Mineral panel highlights — Batch 24E0373
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                { mineral: "Potassium", value: "58,800 ppm" },
                { mineral: "Calcium", value: "27,519 ppm" },
                { mineral: "Magnesium", value: "10,000 ppm" },
                { mineral: "Zinc", value: "37.4 ppm" },
                { mineral: "Selenium", value: "0.050 ppm" },
                { mineral: "Humic acid", value: "4.17%" },
              ].map((row) => (
                <div key={row.mineral} className="flex justify-between text-xs border-b border-[#D1EDD8] last:border-0 pb-1.5 last:pb-0">
                  <span className="font-semibold text-[#4A6358]">{row.mineral}</span>
                  <span className="font-bold text-[#10B981]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. The American Shilajit Angle ───────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          What makes Wild American shilajit different
        </h2>
        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            North American shilajit deposits are geologically distinct from
            Himalayan and Altai sources. The Himalayas formed from the
            collision of the Indian and Eurasian tectonic plates beginning
            roughly 50 million years ago — the extreme pressure and altitude
            produced mineral-rich exudate as plant matter was compressed over
            geological time. North American deposits have a different
            geological history, different elevation profiles, and different
            climate context.
          </p>
          <p>
            The result is a meaningfully different mineral composition. The
            Fractal Forest Wild American drops show a potassium-dominant
            mineral profile (58,800 ppm potassium vs. calcium at 27,519 ppm)
            that differs from the profiles we see in Himalayan sources. Whether
            this translates to a clinically different effect is not established
            in the literature — shilajit research has overwhelmingly focused
            on Himalayan and Central Asian material — but the mineral
            differentiation is real and documented in the COA.
          </p>

          <div className="bg-white border border-[#D1EDD8] rounded-xl p-4">
            <h3 className="text-xs font-bold text-[#10B981] mb-2">
              Who is Wild American shilajit for?
            </h3>
            <div className="space-y-2">
              {[
                "Buyers who prefer domestically sourced supplements and want to avoid imported products",
                "Biohackers curious about geographic variation in shilajit mineral profiles",
                "Buyers who have already tried Himalayan shilajit and want to compare a North American source",
                "Anyone who prioritizes verifiable sourcing transparency — the COA is as rigorous as the Himalayan products",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-xs text-[#0D1F14] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p>
            At $77 for 30ml, the Wild American drops carry a significant
            premium over the Himalayan drops ($44). That premium reflects
            the sourcing rarity — North American shilajit is genuinely
            uncommon in the commercial market — and the more comprehensive
            testing panel, which includes the full mineral breakdown and
            fulvic acid quantification not present on the Himalayan
            product COAs.
          </p>
        </div>
      </section>

      {/* ── 8. Comparison Table ───────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          How Fractal Forest compares to other verified brands
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-5">
          Honest comparison using only verified COA data. All figures are
          sourced from published lab reports.{" "}
          <Link
            href="/lab-data"
            className="text-[#10B981] hover:underline"
          >
            Full lab data →
          </Link>
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#D1EDD8] mb-4">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F0FAF4] border-b border-[#D1EDD8]">
                {[
                  "Brand / Product",
                  "Lab accreditation",
                  "Heavy metals",
                  "Fulvic acid (COA)",
                  "Source",
                  "$/gram",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-[11px] font-bold text-[#7BA899] uppercase tracking-wider whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  brand: "FF Himalayan Drops",
                  lab: "A2LA ISO 17025",
                  metals: "All ND — cleanest on site",
                  fulvic: "Not tested",
                  source: "Himalayan, Gilgit Baltistan 16,000ft",
                  ppg: "$1.47/ml",
                  highlight: true,
                },
                {
                  brand: "FF Wild American Drops",
                  lab: "IAS Laboratories",
                  metals: "Lead ND, As 0.07, Cd 0.07, Hg 0.02 ppm",
                  fulvic: "71.31% (COA verified)",
                  source: "North America",
                  ppg: "$2.57/ml",
                  highlight: true,
                },
                {
                  brand: "FF Himalayan Resin",
                  lab: "A2LA ISO 17025",
                  metals: "Pb 1.10, As 1.16, Cd 0.042, Hg 0.008 ppm",
                  fulvic: "Not tested",
                  source: "Himalayan, Gilgit Baltistan 16,000ft",
                  ppg: "$3.93/gram",
                  highlight: true,
                },
                {
                  brand: "Black Lotus Resin",
                  lab: "IAS Laboratories",
                  metals: "Pb 1.17, As 0.88, Cd 0.15, Hg ND ppm",
                  fulvic: "64.51% (Batch 93)",
                  source: "Altai, Siberia",
                  ppg: "$1.23/gram",
                  highlight: false,
                },
                {
                  brand: "Lotus Blooming Herbs",
                  lab: "A2LA ISO 17025",
                  metals: "Pb 0.040, As 0.091, Cd 0.004, Hg 0.001 mcg/serving",
                  fulvic: "Not disclosed",
                  source: "Himalayan, 16,000–18,000ft",
                  ppg: "$6.00/gram",
                  highlight: false,
                },
                {
                  brand: "Pure Himalayan",
                  lab: "A2LA ISO 17025",
                  metals: "Passes (Sep 2024 COA)",
                  fulvic: "~58% (2021 COA)",
                  source: "Himalayan, 16,000ft",
                  ppg: "—",
                  highlight: false,
                },
                {
                  brand: "Natural Shilajit",
                  lab: "DaaneLabs + Harken",
                  metals: "Pb 4.714, As 3.757 ppm (raw resin)",
                  fulvic: "Not disclosed",
                  source: "UNESCO Altai",
                  ppg: "~$2.45/gram",
                  highlight: false,
                },
              ].map((row, i) => (
                <tr
                  key={row.brand}
                  className={`border-b border-[#D1EDD8] last:border-0 ${
                    row.highlight
                      ? "bg-green-50"
                      : i % 2 === 0
                      ? "bg-white"
                      : "bg-[#F0FAF4]"
                  }`}
                >
                  <td
                    className={`px-4 py-3 font-bold text-xs ${
                      row.highlight ? "text-green-700" : "text-[#0D1F14]"
                    }`}
                  >
                    {row.brand}
                  </td>
                  <td className="px-4 py-3 text-xs text-[#0D1F14]">{row.lab}</td>
                  <td className="px-4 py-3 text-xs text-[#0D1F14]">{row.metals}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#10B981]">{row.fulvic}</td>
                  <td className="px-4 py-3 text-xs text-[#0D1F14]">{row.source}</td>
                  <td className="px-4 py-3 text-xs text-[#0D1F14]">{row.ppg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 text-sm text-[#0D1F14] leading-relaxed">
          <p>
            The Fractal Forest Himalayan Drops stand out on heavy metals —
            all four metals ND on a current 2026 COA is a result no other
            product in our database matches. That said, the absence of a
            fulvic acid figure means buyers who require a verified FA
            percentage will need to look elsewhere for the Himalayan products.
          </p>
          <p>
            The Wild American Drops are the only product in our database with
            a verified fulvic acid figure from a North American source. At
            71.31%, that figure is competitive with the better-known brands —
            higher than Black Lotus resin (64.51%) and comparable to their
            capsule format (74.30%). The trade-off is price: $77 for 30ml is
            significantly more expensive than most alternatives.
          </p>
          <p>
            For buyers focused purely on $/gram value with COA-verified
            fulvic acid, Black Lotus ($1.23/gram, 64.51% FA) remains the
            strongest comparison.
          </p>
        </div>

        <p className="text-xs text-[#7BA899] mt-3">
          See our{" "}
          <Link
            href="/blog/best-shilajit-brands-ranked"
            className="text-[#10B981] hover:underline"
          >
            full brand rankings
          </Link>{" "}
          for the complete comparison across all verified brands on the site.
        </p>
      </section>

      {/* ── 9. Who It Is Best For ─────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Who is Fractal Forest best for?
        </h2>
        <div className="space-y-3">
          {[
            {
              title: "Buyers who want the cleanest possible heavy metals result",
              body: "The Himalayan Drops (LOT 1001, March 2026) returned all four heavy metals as Not Detected — the cleanest result of any product on ShilajitPrice.com. If minimizing heavy metals exposure is your primary criterion, this is the product to consider.",
            },
            {
              title: "Buyers who prefer liquid drop formats",
              body: "Both Himalayan and Wild American products come as liquid drops — no resin preparation, no capsule swallowing. This is a rare format in the shilajit market and appeals to buyers who find the traditional resin format inconvenient.",
            },
            {
              title: "Biohackers curious about North American shilajit",
              body: "The Wild American Drops are the only verified North American shilajit product on the site. If geographic variation interests you or you prefer domestically sourced supplements, this is the only verified option available.",
            },
            {
              title: "Buyers who want A2LA ISO 17025 accreditation on Himalayan products",
              body: "Both Himalayan products are tested at Certified Laboratories Burbank with A2LA ISO 17025, Cert 3034.01 — the same accreditation standard as Pure Himalayan Shilajit and Lotus Blooming Herbs.",
            },
            {
              title: "Value-conscious buyers using the discount code",
              body: "Use code SHILAJIT-PRICE for 15% off at fractalforest.co — bringing the Himalayan Drops to approximately $37.40 and the Wild American Drops to approximately $65.45.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 bg-white border border-[#D1EDD8] rounded-xl p-4"
            >
              <CheckIcon />
              <div>
                <div className="text-xs font-bold text-[#0D1F14]">
                  {item.title}
                </div>
                <p className="text-xs text-[#7BA899] mt-0.5 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. Verdict ───────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Our verdict
        </h2>

        {/* A-tier badge */}
        <div className="flex items-center gap-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5 mb-5">
          <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-black text-2xl shrink-0">
            A
          </div>
          <div>
            <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-0.5">
              Tier Rating
            </div>
            <h3 className="text-base font-black text-[#0D1F14]">
              A-Tier — Fractal Forest
            </h3>
            <p className="text-xs text-[#7BA899] mt-1">
              A2LA ISO 17025 lab (Himalayan) · IAS Laboratories (American) ·
              Unique liquid drops format · Only verified Wild American shilajit on site
            </p>
          </div>
        </div>

        <div className="space-y-4 text-[#0D1F14] text-sm leading-relaxed">
          <p>
            Fractal Forest earns A-tier on the strength of two accredited
            labs, three distinctly different products, and a COA track
            record that holds up to scrutiny. The Himalayan Drops (all
            heavy metals ND, March 2026 COA) and Wild American Drops
            (71.31% FA, comprehensive mineral panel, November 2024 COA)
            are the products that differentiate them from the broader market.
          </p>
          <p>
            The gap between A-tier and S-tier here is primarily the absence
            of a verified fulvic acid figure on the Himalayan products, and
            the price-to-gram ratio on the resin ($3.93/gram vs $1.23/gram
            for Black Lotus with higher verified FA). For buyers where fulvic
            acid concentration per dollar is the primary metric, Black Lotus
            and Natural Shilajit are more competitive.
          </p>
          <p>
            For buyers who value heavy metals results above all else, or who
            specifically want a North American sourced product with verifiable
            fulvic acid data, Fractal Forest offers something the other
            brands on the site do not.
          </p>
        </div>
      </section>

      {/* ── 11. CTA Section ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-black text-[#0D1F14] mb-4">
          Shop Fractal Forest — 15% off with code SHILAJIT-PRICE
        </h2>
        <p className="text-sm text-[#4A6358] leading-relaxed mb-6">
          Use code{" "}
          <span className="font-semibold text-[#0D1F14] bg-green-50 border border-green-200 rounded px-1.5 py-0.5">
            SHILAJIT-PRICE
          </span>{" "}
          at checkout for 15% off all Fractal Forest products.
        </p>
      </section>

      {/* Primary CTA — Fractal Forest */}
      <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-lg shadow-green-900/10">
        <div className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-1">
          Recommended — A-Tier
        </div>
        <h3 className="text-base font-black text-[#0D1F14] mb-1">
          Fractal Forest — Three Verified Shilajit Products
        </h3>
        <p className="text-xs text-[#7BA899] mb-4">
          Himalayan Mountains, Gilgit Baltistan 16,000ft (resin &amp; Himalayan drops) ·
          North American sourced (Wild American drops) · A2LA ISO 17025 + IAS Labs
        </p>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
          {[
            "Himalayan Drops — all 4 heavy metals ND (cleanest on site)",
            "Wild American Drops — 71.31% verified fulvic acid",
            "A2LA ISO 17025 Cert 3034.01 on Himalayan products",
            "IAS Laboratories Phoenix AZ on Wild American drops",
            "Liquid drops format — rare in the shilajit market",
            "Use code SHILAJIT-PRICE for 15% off",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckIcon />
              <span className="text-xs text-[#0D1F14]">{item}</span>
            </div>
          ))}
        </div>
        <a
          href={FF_BASE}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full text-center py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors shadow-md shadow-green-900/20"
        >
          Shop Fractal Forest (code SHILAJIT-PRICE for 15% off) →
        </a>
        <p className="text-center text-[10px] text-[#7BA899] mt-2">
          Affiliate link — commission earned at no extra cost to you
        </p>
      </div>

      {/* Secondary CTA — other verified partners */}
      <div className="bg-white border border-[#9EC9AD] rounded-2xl p-6 shadow-lg shadow-emerald-900/10">
        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">
          Also verified — other featured partners
        </div>
        <h3 className="text-base font-black text-[#0D1F14] mb-4">
          Compare other verified brands
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Black Lotus",
              sub: "64.51% FA (COA) · Altai, Siberia · IAS Labs · $1.23/gram",
              href: BL_BASE,
            },
            {
              label: "Lotus Blooming Herbs",
              sub: "A2LA ISO 17025 · Himalayan 16,000–18,000ft · Ayurvedic-owned",
              href: LBH_BASE,
            },
            {
              label: "Pure Himalayan Shilajit",
              sub: "~58% FA · A2LA ISO 17025 · Himalayan 16,000ft",
              href: PH_BASE,
            },
            {
              label: "Natural Shilajit",
              sub: "DBP verified · Adulterant tested · UNESCO Altai",
              href: NS_BASE,
            },
            {
              label: "Pürblack",
              sub: "5 US Patents · DBP / Urolithin A verified · Multi-region",
              href: PB_BASE,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex flex-col gap-1 border border-[#D1EDD8] rounded-xl p-4 hover:border-[#9EC9AD] transition-colors"
            >
              <span className="text-xs font-bold text-[#0D1F14]">
                {item.label}
              </span>
              <span className="text-[10px] text-[#7BA899] leading-relaxed">
                {item.sub}
              </span>
              <span className="mt-1 text-[11px] text-[#10B981] font-semibold">
                Shop now →
              </span>
            </a>
          ))}
        </div>
        <p className="text-xs text-[#7BA899] mt-4">
          See our{" "}
          <Link
            href="/blog/best-shilajit-brands-ranked"
            className="text-[#10B981] hover:underline"
          >
            full brand rankings
          </Link>{" "}
          or browse the{" "}
          <Link href="/lab-data" className="text-[#10B981] hover:underline">
            full lab data page
          </Link>{" "}
          to compare COA details across all verified brands.
        </p>
      </div>

      {/* Related reading */}
      <div className="border-t border-[#D1EDD8] pt-6">
        <p className="text-xs font-bold text-[#7BA899] uppercase tracking-widest mb-3">
          Related reading
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            {
              href: "/blog/best-shilajit-brands-ranked",
              label: "Full brand rankings — all verified picks",
            },
            {
              href: "/blog/shilajit-heavy-metals-comparison",
              label: "Heavy metals comparison — all brands",
            },
            {
              href: "/blog/how-to-read-shilajit-coa",
              label: "How to read a shilajit COA",
            },
            {
              href: "/lab-data",
              label: "Full lab data — all products",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[#10B981] hover:underline bg-[#F0FAF4] px-3 py-1.5 rounded-full border border-[#D1EDD8]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </BlogPostLayout>
  );
}
