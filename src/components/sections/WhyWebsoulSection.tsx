import React from 'react';

const reasons = [
  { title: "Strategic Proximity", desc: "Canberra-rooted perspective with direct alignment to Australian government delivery standards and mission requirements." },
  { title: "Operational Integrity", desc: "Personnel and organisational trust pathways that meet rigorous secure-environment and regulatory criteria." },
  { title: "Technical Discipline", desc: "Architecture-first methodology that ensures resilient, scalable, and cyber-aware digital transformations." }
];

export default function WhyWebsoulSection() {
  return (
    <section className="py-40 bg-[#0A0A0F] text-white overflow-hidden" id="why-websoul">
      <div className="section-container relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-white opacity-20"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate-light">Structural Advantage</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-space font-medium text-white mb-10 leading-[1.05] tracking-tight">
              Bridging security <br className="hidden md:block" />
              and delivery.
            </h2>
            
            <p className="text-lg text-slate-400 mb-20 leading-relaxed max-w-xl font-sans">
              Operating in high-trust sectors requires more than technical skill. It requires an integrated understanding of personnel integrity, security governance, and digital architecture.
            </p>
            
            <div className="space-y-16">
              {reasons.map((item, i) => (
                <div key={i} className="flex gap-12 group">
                  <div className="text-xl font-space font-medium text-slate-700 group-hover:text-white transition-colors duration-500">0{i+1}</div>
                  <div>
                    <h4 className="font-space font-medium text-lg mb-4 text-white tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-[#111118] border border-white/5 p-16 flex items-center justify-center relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-midnight to-transparent opacity-50"></div>
              
              <div className="relative z-10 w-full h-full border border-white/[0.03] p-8 flex flex-col justify-end">
                <div className="mb-auto">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-40">
                       <path d="M10 50 L90 50 M50 10 L50 90" stroke="white" strokeWidth="0.5" />
                       <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                    </svg>
                </div>
                
                <div className="flex flex-col gap-6">
                   <div className="h-[1px] w-full bg-white opacity-10"></div>
                   <div className="flex justify-between items-end">
                      <div>
                         <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">Technical Base</div>
                         <div className="text-xl font-space font-medium">Arch-First Ops</div>
                      </div>
                      <div className="text-[40px] font-space font-medium opacity-20 tracking-tighter">WD</div>
                   </div>
                </div>
              </div>

              <div className="absolute -bottom-12 -left-12 bg-white text-brand-midnight p-10 shadow-2xl border border-slate-100 hidden md:block">
                 <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-slate-400">Integrity First</div>
                 <div className="text-sm font-bold tracking-[0.2em] uppercase text-brand-midnight">Australian Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
