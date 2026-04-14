const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Compare and Rank Shilajit Supplements",
  description:
    "Our 4-step process to independently evaluate and rank shilajit products by purity score, fulvic acid content, COA quality, lab testing, sourcing transparency, and price per gram.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Collect Purity & Lab Data",
      text: "We gather COAs, third-party lab reports, fulvic acid percentages, heavy metals test results, and sourcing details for every product. We track 25+ data points per product so you can compare what actually matters.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Calculate Price & Value",
      text: "Every product is broken down to price-per-gram and cost-per-serving for an apples-to-apples comparison regardless of container size or form factor.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Score & Assign Tiers",
      text: "Products receive a 1–10 Purity Score based on COA availability, third-party testing, fulvic acid content, heavy metals testing, sourcing transparency, and GMP certification. Then S–D tier ratings are assigned based on the combined purity and value analysis.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "You Shop with Confidence",
      text: "Filter by tier, purity score, COA status, source location, and budget. Click through to the best deal for your needs — no guesswork, no fake reviews, just verified data.",
    },
  ],
};

const STEPS = [
  {
    number: "01",
    icon: "🔬",
    title: "We Collect Purity & Lab Data",
    description:
      "We gather COAs, third-party lab reports, fulvic acid percentages, heavy metals results, and sourcing details — 25+ data points tracked per product.",
  },
  {
    number: "02",
    icon: "⚖️",
    title: "We Calculate Price & Value",
    description:
      "Every product is broken down to price-per-gram and cost-per-serving for a true apples-to-apples comparison across all form factors and sizes.",
  },
  {
    number: "03",
    icon: "🏅",
    title: "We Score & Rank",
    description:
      "Products receive a 1–10 Purity Score and an S–D Tier rating based on COA quality, lab testing, fulvic acid content, source credibility, and value.",
  },
  {
    number: "04",
    icon: "🛒",
    title: "You Shop with Confidence",
    description:
      "Filter by tier, purity score, COA status, source location, and budget. No guesswork — just verified lab data and the best price for what you need.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-[#0d1f14]" id="how-it-works">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-4 tracking-wide">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#e8f4ec] mb-3">
            How We Compare Shilajit
          </h2>
          <p className="text-[#9ec9ad] max-w-lg mx-auto text-sm leading-relaxed">
            We track purity data, lab results, and pricing — so you get the most fulvic acid per dollar and never waste money on unverified products.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-[#182b1f] border border-[#2a4535] rounded-xl p-5 hover:border-emerald-700/50 transition-colors duration-200"
            >
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-gradient-to-r from-emerald-700/50 to-transparent z-10" />
              )}

              <div className="text-3xl mb-3">{step.icon}</div>
              <div className="text-xs font-black text-emerald-500 mb-1 tracking-widest">
                {step.number}
              </div>
              <h3 className="text-sm font-bold text-[#e8f4ec] mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#9ec9ad] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Data points callout */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: "📋", label: "COA & Lab Reports" },
            { icon: "⚗️", label: "Fulvic Acid %" },
            { icon: "🏔️", label: "Source Location" },
            { icon: "🧪", label: "Heavy Metals Testing" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 bg-[#182b1f] border border-[#2a4535] rounded-lg px-3 py-2.5"
            >
              <span className="text-base shrink-0">{icon}</span>
              <span className="text-[11px] text-[#9ec9ad] font-medium leading-snug">{label}</span>
            </div>
          ))}
        </div>

        {/* Tier explanation */}
        <div className="mt-5 bg-[#182b1f] border border-[#2a4535] rounded-xl p-6">
          <h3 className="text-base font-bold text-[#e8f4ec] mb-4 text-center">
            Understanding Our Tier System
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              {
                tier: "S",
                color: "bg-amber-400 text-amber-900",
                desc: "Elite quality, full COA, best value",
              },
              {
                tier: "A",
                color: "bg-emerald-500 text-white",
                desc: "High quality, lab tested, reliable",
              },
              {
                tier: "B",
                color: "bg-blue-500 text-white",
                desc: "Average, some testing, acceptable",
              },
              {
                tier: "C",
                color: "bg-slate-500 text-white",
                desc: "Below avg, limited transparency",
              },
              {
                tier: "D",
                color: "bg-red-500 text-white",
                desc: "Poor quality, questionable source",
              },
            ].map(({ tier, color, desc }) => (
              <div key={tier} className="flex flex-col items-center text-center gap-2">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-base font-black ${color} shadow-sm`}
                >
                  {tier}
                </div>
                <p className="text-[10px] text-[#9ec9ad] leading-tight">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
