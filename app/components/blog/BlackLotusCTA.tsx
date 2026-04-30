const AFFILIATE_RESIN =
  "https://black-lotus-shilajit-shop.myshopify.com/products/wholesale-resin?sca_ref=5188496.BbHTin3axE";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5"
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
  subtext = "64.51% fulvic acid (Batch 93, IAS Labs) · Third-party COA · Cold-processed · Free shipping — S-tier resin at $36.99.",
  buttonText = "Shop Black Lotus Resin — $36.99 →",
}: BlackLotusCTAProps) {
  return (
    <div className="bg-white border-2 border-[#D1EDD8] rounded-2xl overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="bg-[#F0FAF4] border-b border-[#D1EDD8] px-6 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-100 ring-2 ring-amber-300 flex items-center justify-center text-amber-800 font-extrabold text-sm shrink-0">
          S
        </div>
        <div>
          <div className="text-[9px] font-bold text-[#10B981] uppercase tracking-widest">
            S-Tier · Highest Verified Potency
          </div>
          <div className="text-xs font-bold text-[#0D1F14]">{headline}</div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs text-[#4A6358] mb-4 leading-relaxed">{subtext}</p>

        <ul className="space-y-1.5 mb-5">
          {[
            "64.51% fulvic acid — Batch 93 COA, IAS Laboratories Phoenix AZ",
            "161mg fulvic acid per serving (June 2025 COA)",
            "Heavy metals (ICP-MS): Lead 1.17 ppm · Mercury ND · all within FDA limits",
            "Microbiology: Listeria ND · Salmonella Absent · E. coli ND",
            "Cold-process purification preserves bioactive compounds",
            "Free shipping on all orders",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckIcon />
              <span className="text-xs text-[#4A6358]">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={AFFILIATE_RESIN}
          target="_blank"
          rel="noopener noreferrer sponsored"
          data-click-location="blog_cta"
          data-product-name="Black Lotus Resin"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#182B1F] hover:bg-[#10B981] text-white font-bold text-sm transition-colors shadow-sm"
        >
          <span>{emoji}</span>
          <span>{buttonText}</span>
        </a>
        <p className="text-center text-[10px] text-[#7BA899] mt-2">
          Affiliate link — we earn a small commission at no extra cost to you
        </p>
      </div>
    </div>
  );
}
