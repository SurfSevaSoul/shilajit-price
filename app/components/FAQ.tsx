"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is shilajit and what does it do?",
    a: "Shilajit is a natural resinous substance that seeps from rocks in high mountain ranges like the Himalayas and Altai. It forms over centuries from decomposed plant matter. It's rich in fulvic acid (60–85% in quality products), humic acid, and over 84 trace minerals. Research suggests benefits for energy, testosterone, cognitive function, and mitochondrial health.",
  },
  {
    q: "What's the difference between resin, capsules, and gummies?",
    a: "Resin is the purest, least-processed form — a sticky tar-like substance you dissolve in warm water. Capsules contain powdered resin extract and are more convenient. Gummies are the most beginner-friendly but typically have the lowest concentration. Tinctures are liquid extracts for fast absorption. For potency, resin > capsules > tinctures > gummies.",
  },
  {
    q: "What is a COA and why does it matter?",
    a: "A COA (Certificate of Analysis) is a third-party lab report that verifies a product's contents. For shilajit, a good COA should show: fulvic acid percentage (look for 60%+), heavy metals panel (lead, arsenic, mercury, cadmium must be below FDA limits), and microbial testing. Without a COA, you have no way to verify what's actually in the product.",
  },
  {
    q: "How much shilajit should I take per day?",
    a: "Most research uses 250–500mg per day. For resin, that's roughly a pea-sized amount (300–500mg). Start with a smaller dose for the first week to assess tolerance. Always follow the manufacturer's recommended dosage. Consult a doctor if you have underlying health conditions, are pregnant, or take medications.",
  },
  {
    q: "Is shilajit safe?",
    a: "High-quality, purified shilajit is generally considered safe for healthy adults at recommended doses. The risk comes from unpurified or adulterated products that may contain heavy metals or microbial contaminants — which is exactly why COA verification matters. Stick to products with third-party lab testing.",
  },
  {
    q: "Why is Black Lotus rated #1?",
    a: "Black Lotus Shilajit earns our S-tier rating because they publish full panel COAs showing 85%+ fulvic acid, test for heavy metals and microbials, use a cold-processing method that preserves bioactive compounds, offer free shipping, and provide excellent value per gram compared to competitors. We are an affiliate partner but tier ratings are assigned independently based on objective criteria.",
  },
  {
    q: "How do you calculate price per gram?",
    a: "We divide the product's retail price by the net weight of shilajit in the container (in grams). This standardizes comparison across different sizes. For example, a $50 product with 30g of resin = $1.67/gram, while a $65 bundle with 90g = $0.72/gram — the bundle is a much better value.",
  },
  {
    q: "Are these affiliate links?",
    a: "Yes. When you click links for Black Lotus Shilajit and make a purchase, we may earn a commission at no extra cost to you. This is how we fund the research and maintenance of this comparison site. Affiliate relationships do not influence our tier rankings — C and D tier products also appear on this site. See our FTC disclosure in the footer.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-[#122019]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-4 tracking-wide">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#e8f4ec] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#9ec9ad] text-sm">
            Everything you need to know about shilajit pricing, quality, and safety.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`bg-[#182b1f] border rounded-xl overflow-hidden transition-colors duration-200
                ${open === i ? "border-emerald-700/50" : "border-[#2a4535] hover:border-emerald-800/50"}`}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-[#e8f4ec] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 mt-0.5
                    ${open === i
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-400 rotate-180"
                      : "border-[#2a4535] text-[#5d8c6e]"
                    }`}
                >
                  <svg
                    className="w-3 h-3 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-[#2a4535] mb-4" />
                  <p className="text-sm text-[#9ec9ad] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
