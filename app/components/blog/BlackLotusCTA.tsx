const AFFILIATE_RESIN =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
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

interface BlackLotusCTAProps {
  emoji?: string;
  headline?: string;
  subtext?: string;
  buttonText?: string;
}

export default function BlackLotusCTA({
  emoji = "🏆",
  headline = "Our #1 Pick: Black Lotus Shilajit Resin",
  subtext = "85%+ fulvic acid · Third-party COA · Cold-processed · Free shipping — the only S-tier resin under $40.",
  buttonText = "Shop Black Lotus Resin — $39.99 →",
}: BlackLotusCTAProps) {
  return (
    <div className="bg-[#182b1f] border border-emerald-500/40 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/10">
      {/* Header bar */}
      <div className="bg-emerald-900/30 border-b border-emerald-800/30 px-6 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-amber-900 font-black text-sm shrink-0">
          S
        </div>
        <div>
          <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
            S-Tier · Highest Verified Potency
          </div>
          <div className="text-xs font-bold text-[#e8f4ec]">{headline}</div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs text-[#9ec9ad] mb-4 leading-relaxed">{subtext}</p>

        <ul className="space-y-1.5 mb-5">
          {[
            "85%+ fulvic acid — verified by ISO-accredited third-party lab",
            "~150mg fulvic acid per 175mg serving",
            "Full heavy metals panel: all below FDA action levels",
            "Cold-process purification preserves bioactive compounds",
            "Himalayan source above 14,000 feet elevation",
            "Free shipping on all orders",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckIcon />
              <span className="text-xs text-[#9ec9ad]">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={AFFILIATE_RESIN}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-colors shadow-md shadow-emerald-900/30"
        >
          <span>{emoji}</span>
          <span>{buttonText}</span>
        </a>
        <p className="text-center text-[10px] text-[#5d8c6e] mt-2">
          Affiliate link — we earn a small commission at no extra cost to you
        </p>
      </div>
    </div>
  );
}
