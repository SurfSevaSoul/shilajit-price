"use client";

import { getLabEntry, LAB_DISCLAIMER, HeavyMetalResult } from "../data/lab-data";

interface LabDataPanelProps {
  productId: string;
}

function PassFail({ result }: { result: HeavyMetalResult }) {
  if (result === "pass")
    return (
      <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px] font-bold">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Pass
      </span>
    );
  if (result === "fail")
    return (
      <span className="inline-flex items-center gap-1 text-red-400 text-[11px] font-bold">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Fail
      </span>
    );
  return <span className="text-[#5d8c6e] text-[11px]">Not tested</span>;
}

export default function LabDataPanel({ productId }: LabDataPanelProps) {
  const lab = getLabEntry(productId);

  if (lab.coaStatus === "not-available") {
    return (
      <div className="mt-3 pt-3 border-t border-[#1e3527]">
        <div className="flex items-start gap-2 p-3 rounded-lg bg-red-900/10 border border-red-800/30">
          <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-[11px] font-bold text-red-400">No COA Publicly Available</p>
            <p className="text-[10px] text-[#5d8c6e] mt-0.5">
              This brand has not published a Certificate of Analysis. We recommend only purchasing shilajit from brands with verifiable third-party lab testing.
            </p>
          </div>
        </div>
        <p className="text-[9px] text-[#5d8c6e] mt-2 leading-relaxed">{LAB_DISCLAIMER}</p>
      </div>
    );
  }

  if (lab.coaStatus === "listed-on-amazon") {
    return (
      <div className="mt-3 pt-3 border-t border-[#1e3527]">
        <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-900/10 border border-amber-800/30">
          <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-[11px] font-bold text-amber-400">COA Listed on Amazon Product Page</p>
            <p className="text-[10px] text-[#5d8c6e] mt-0.5">
              Lab data is referenced on the Amazon listing. Verify directly on the product page.
            </p>
            {lab.coaUrl && (
              <a href={lab.coaUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-1.5 text-[10px] text-amber-400 hover:text-amber-300 underline underline-offset-2">
                View Amazon Listing →
              </a>
            )}
          </div>
        </div>
        <p className="text-[9px] text-[#5d8c6e] mt-2 leading-relaxed">{LAB_DISCLAIMER}</p>
      </div>
    );
  }

  // coaStatus === "verified"
  return (
    <div className="mt-3 pt-3 border-t border-[#1e3527] space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Lab Verified COA</span>
        </div>
        {lab.coaUrl && (
          <a href={lab.coaUrl} target="_blank" rel="noopener noreferrer"
            className="text-[10px] text-emerald-400 hover:text-emerald-300 border border-emerald-700/50 hover:border-emerald-500/60 px-2 py-0.5 rounded transition-colors">
            View Official COA →
          </a>
        )}
      </div>

      {/* Testing lab */}
      {lab.testingLab && (
        <div className="flex items-start gap-2">
          <span className="text-[10px] text-[#5d8c6e] w-24 shrink-0 font-medium">Testing Lab</span>
          <div>
            <span className="text-[11px] text-[#e8f4ec]">{lab.testingLab}</span>
            {lab.testingLabAccreditation && (
              <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded bg-blue-900/30 border border-blue-700/40 text-blue-300 text-[9px] font-bold">
                {lab.testingLabAccreditation}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Fulvic acid */}
      {(lab.fulvicAcidMgPerServing !== undefined || lab.fulvicAcidPct !== undefined) && (
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#5d8c6e] w-24 shrink-0 font-medium">Fulvic Acid</span>
          <span className="text-[11px] text-[#e8f4ec]">
            {lab.fulvicAcidMgPerServing !== undefined && `${lab.fulvicAcidMgPerServing}mg/serving`}
            {lab.fulvicAcidPct !== undefined && ` (${lab.fulvicAcidPct}%)`}
          </span>
        </div>
      )}

      {/* Humic acid */}
      {(lab.humicAcidMgPerServing !== undefined || lab.humicAcidPct !== undefined) && (
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#5d8c6e] w-24 shrink-0 font-medium">Humic Acid</span>
          <span className="text-[11px] text-[#e8f4ec]">
            {lab.humicAcidMgPerServing !== undefined && `${lab.humicAcidMgPerServing}mg/serving`}
            {lab.humicAcidPct !== undefined && ` (${lab.humicAcidPct}%)`}
          </span>
        </div>
      )}

      {/* Purity */}
      {lab.purityPct && (
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#5d8c6e] w-24 shrink-0 font-medium">Purity</span>
          <span className="text-[11px] text-[#e8f4ec]">{lab.purityPct}</span>
        </div>
      )}

      {/* Trace minerals */}
      {lab.traceMinerals && (
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#5d8c6e] w-24 shrink-0 font-medium">Trace Minerals</span>
          <span className="text-[11px] text-[#e8f4ec]">{lab.traceMinerals}</span>
        </div>
      )}

      {/* Heavy metals */}
      <div>
        <p className="text-[10px] text-[#5d8c6e] font-medium mb-1.5">Heavy Metals Panel</p>
        <div className="grid grid-cols-2 gap-1.5">
          {(
            [
              ["Lead (Pb)", lab.heavyMetals.lead],
              ["Mercury (Hg)", lab.heavyMetals.mercury],
              ["Arsenic (As)", lab.heavyMetals.arsenic],
              ["Cadmium (Cd)", lab.heavyMetals.cadmium],
            ] as [string, HeavyMetalResult][]
          ).map(([name, result]) => (
            <div key={name} className="flex items-center justify-between bg-[#0d1f14] rounded px-2 py-1 gap-2">
              <span className="text-[10px] text-[#9ec9ad]">{name}</span>
              <PassFail result={result} />
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      {lab.notes && lab.notes.length > 0 && (
        <ul className="space-y-0.5">
          {lab.notes.map((note) => (
            <li key={note} className="text-[10px] text-[#5d8c6e] flex items-start gap-1.5">
              <span className="text-emerald-600 shrink-0">•</span>
              {note}
            </li>
          ))}
        </ul>
      )}

      {/* Disclaimer */}
      <p className="text-[9px] text-[#5d8c6e] leading-relaxed border-t border-[#1e3527] pt-2">
        {LAB_DISCLAIMER}
      </p>
    </div>
  );
}
