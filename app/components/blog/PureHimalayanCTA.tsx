const AFFILIATE_PH_RESIN =
  "https://www.purehimalayanshilajit.com/buy-shilajit/?ref=4792";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-amber-400 shrink-0 mt-0.5"
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

interface PureHimalayanCTAProps {
  emoji?: string;
  headline?: string;
  subtext?: string;
  buttonText?: string;
}

export default function PureHimalayanCTA({
  emoji = "🏔️",
  headline = "Our #2 Pick: Pure Himalayan Shilajit Resin",
  subtext = "ISO/IEC 17025 accredited lab testing · Up to 99.9% pure · Himalayan & Altai Mountains source · No fillers — a top-tier resin with exceptional purity verification.",
  buttonText = "Shop Pure Himalayan Resin — $39.99 →",
}: PureHimalayanCTAProps) {
  return (
    <div className="bg-[#1f1d0f] border border-amber-500/40 rounded-2xl overflow-hidden shadow-lg shadow-amber-900/10">
      {/* Header bar */}
      <div className="bg-amber-900/20 border-b border-amber-800/30 px-6 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-amber-900 font-black text-sm shrink-0">
          S
        </div>
        <div>
          <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">
            S-Tier · ISO/IEC 17025 Accredited Lab Verified
          </div>
          <div className="text-xs font-bold text-[#e8f4ec]">{headline}</div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs text-amber-100/60 mb-4 leading-relaxed">{subtext}</p>

        <ul className="space-y-1.5 mb-5">
          {[
            "ISO/IEC 17025 accredited third-party lab testing",
            "Up to 99.9% pure shilajit — among the highest verified purity",
            "Sourced from Himalayan & Altai Mountains above 14,000 ft",
            "No fillers, binders, or additives — 100% pure resin",
            "Full heavy metals panel included with every batch",
            "Money-back guarantee + free shipping on orders $45+",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckIcon />
              <span className="text-xs text-amber-100/70">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={AFFILIATE_PH_RESIN}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm transition-colors shadow-md shadow-amber-900/30"
        >
          <span>{emoji}</span>
          <span>{buttonText}</span>
        </a>
        <p className="text-center text-[10px] text-amber-700/70 mt-2">
          Affiliate link — we earn a small commission at no extra cost to you
        </p>
      </div>
    </div>
  );
}
