import React from 'react';
import { Target, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const sectors = [
  {
    icon: ShieldCheck,
    name: "Defence & National Security",
    desc: "Advising on DISP readiness, workforce trust architecture, and secure facility digital integration."
  },
  {
    icon: Target,
    name: "Federal Government",
    desc: "Supporting complex ICT delivery and cyber assurance for mission-critical civilian agencies."
  },
  {
    icon: Zap,
    name: "Critical Infrastructure",
    desc: "Enabling resilient digital operations for energy, utility, and essential service providers."
  },
  {
    icon: BarChart3,
    name: "Regulated Enterprise",
    desc: "Strategic consultancy for finance and healthcare providers navigating complex compliance shifts."
  }
];

export default function SectorFocus() {
  return (
    <section className="py-40 bg-white" id="sector-focus">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-brand-slate opacity-30"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">Sector Impact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-space font-medium tracking-tight text-brand-midnight mb-10 leading-[1.1]">
              A presence where <br /> security matters most.
            </h2>
            <p className="text-slate-500 font-sans text-lg leading-relaxed mb-12 max-w-lg">
              We operate exclusively in high-stakes environments where integrity is the primary requirement and failure is not an option.
            </p>
            
            <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
               <div>
                  <div className="text-3xl font-space font-medium text-brand-midnight mb-2">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Australian Owned</div>
               </div>
               <div>
                  <div className="text-3xl font-space font-medium text-brand-midnight mb-2">NV1+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Cleared Personnel</div>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector) => (
              <div key={sector.name} className="p-8 border border-slate-100 hover:border-slate-200 transition-colors bg-[#FBFBFB]">
                <sector.icon className="w-6 h-6 text-brand-midnight mb-6" />
                <h3 className="text-lg font-space font-medium text-brand-midnight mb-4 tracking-tight">{sector.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
