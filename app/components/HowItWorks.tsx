const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Compare and Rank Shilajit Supplements",
  description:
    "Our 4-step process to independently evaluate and rank shilajit products by COA quality, fulvic acid content, price per gram, and sourcing transparency.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Research & Test",
      text: "We analyze lab reports, COAs, and third-party test results for every product. Only brands with verifiable testing make our list.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Calculate Value",
      text: "Every product is broken down to a price-per-gram to give you an apples-to-apples comparison regardless of container size.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Assign Tiers",
      text: "Products earn S through D tier ratings based on purity, transparency, COA quality, source credibility, and overall value.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "You Save Time & Money",
      text: "Click through to the best deal for your needs. No guesswork — just the best shilajit at the best price, verified.",
    },
  ],
};

const STEPS = [
  {
    number: "01",
    icon: "🔬",
    title: "We Research & Test",
    description:
      "We analyze lab reports, COAs, and third-party test results for every product. Only brands with verifiable testing make our list.",
  },
  {
    number: "02",
    icon: "⚖️",
    title: "We Calculate Value",
    description:
      "Every product is broken down to a price-per-gram to give you an apples-to-apples comparison regardless of container size.",
  },
  {
    number: "03",
    icon: "🏅",
    title: "We Assign Tiers",
    description:
      "Products earn S through D tier ratings based on purity, transparency, COA quality, source credibility, and overall value.",
  },
  {
    number: "04",
    icon: "🛒",
    title: "You Save Time & Money",
    description:
      "Click through to the best deal for your needs. No guesswork — just the best shilajit at the best price, verified.",
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
            We do the heavy lifting so you don&apos;t have to. Here&apos;s exactly how
            every product on this site gets evaluated.
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

        {/* Tier explanation */}
        <div className="mt-12 bg-[#182b1f] border border-[#2a4535] rounded-xl p-6">
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
