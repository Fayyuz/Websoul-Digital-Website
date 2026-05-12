import React from 'react';

const trustItems = [
  { label: "Identity", val: "100% Australian Owned" },
  { label: "Operation", val: "Canberra HQ • ACT" },
  { label: "Context", val: "Government & Defence" },
  { label: "Compliance", val: "DISP Ready Frameworks" },
  { label: "Assurance", val: "NV1 / NV2 Cleared Base" },
  { label: "Sector", val: "Regulated Enterprise" }
];

export default function TrustBand() {
  return (
    <section className="bg-white border-y border-slate-100 py-12" id="trust-band">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-between gap-y-12">
          {trustItems.map((item, index) => (
            <div key={item.label} className="min-w-[150px] flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] font-bold text-brand-slate-light tracking-[0.3em] uppercase">0{index + 1}</span>
                <div className="h-[1px] w-8 bg-slate-100"></div>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{item.label}</div>
              <div className="text-xs font-bold text-brand-midnight tracking-wider uppercase">{item.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
