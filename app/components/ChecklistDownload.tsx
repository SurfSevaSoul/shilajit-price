"use client";

interface ChecklistDownloadProps {
  location: string;
}

export default function ChecklistDownload({ location }: ChecklistDownloadProps) {
  function handleClick() {
    if (typeof window !== "undefined" && typeof (window as Window & { gtag?: Function }).gtag === "function") {
      (window as Window & { gtag?: Function }).gtag("event", "checklist_download", {
        click_location: location,
      });
    }
  }

  return (
    <div className="bg-[#0D1F14] border border-[#1E3A28] rounded-2xl p-6 my-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Free Download</p>
          <h3 className="text-sm font-black text-white mb-1">Shilajit Buyer&apos;s Checklist</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            7 verification criteria + full COA data for 6 brands — by Adrian Voss
          </p>
        </div>
      </div>
      <a
        href="/downloads/shilajit-buyers-checklist.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold text-sm transition-colors"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download Free Checklist (PDF) →
      </a>
    </div>
  );
}
