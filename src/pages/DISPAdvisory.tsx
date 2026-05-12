import React from 'react';
import { PageHero, PageSection } from '../components/ui/Layout';
import { ShieldCheck, ClipboardCheck, ArrowRight, BookOpen, Scale, Award } from 'lucide-react';

export default function DISPAdvisory() {
  return (
    <div id="disp-advisory-page">
      <PageHero 
        eyebrow="Capability Arm: 03"
        title="Security Governance & Maturity Advisory."
        subtitle="Supporting organisations to navigate security maturity, governance uplift, and readiness for secure operating environments."
      />

      <PageSection title="Security Maturity & Advisory" subtitle="Moving beyond compliance to practical readiness and trusted governance.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-3xl font-black text-brand-midnight mb-8 uppercase tracking-tighter">Strategic Security Uplift</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-12 font-light">
              We help organisations understand their current security maturity and develop clear, practical roadmaps for uplift. This is essential for businesses seeking to operate in defence-aware or high-trust government contexts.
            </p>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="shrink-0 w-14 h-14 bg-brand-surface flex items-center justify-center text-brand-midnight border border-slate-100 group-hover:bg-brand-midnight group-hover:text-white transition-all">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-3">Readiness Assessments</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">Comprehensive assessment of current governance and security state against industry and government standards.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="shrink-0 w-14 h-14 bg-brand-surface flex items-center justify-center text-brand-midnight border border-slate-100 group-hover:bg-brand-midnight group-hover:text-white transition-all">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-3">Governance Uplift</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">Policy development, governance frameworks, and executive advisory for trusted operating contexts.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="shrink-0 w-14 h-14 bg-brand-surface flex items-center justify-center text-brand-midnight border border-slate-100 group-hover:bg-brand-midnight group-hover:text-white transition-all">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-3">Policy Development</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">Practical, executable security and operational policies designed for real-world application.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-brand-surface border border-slate-200 p-12 h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="1" />
                 </svg>
               </div>
               
               <h3 className="text-xl font-black mb-10 uppercase tracking-tighter text-brand-midnight">The Websoul Methodology</h3>
               <div className="space-y-8">
                  {[
                    "Specialist expertise in high-trust sectors",
                    "Practical, non-performative advisory",
                    "Alignment with modern secure standards",
                    "Delivery-enabling governance architecture"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 border-b border-slate-200 pb-6 group">
                      <Award className="text-brand-midnight h-4 w-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-brand-midnight transition-colors">{item}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-16 p-10 bg-brand-midnight text-white shadow-2xl">
                  <ShieldCheck className="w-12 h-12 mb-8 text-brand-slate-light" />
                  <p className="text-lg font-light mb-10 leading-relaxed text-slate-300">
                    Our advisory is focused on one thing: making your organisation <span className="font-black text-white italic">ready for the mission.</span>
                  </p>
                  <button className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] hover:translate-x-3 transition-transform text-white">
                    Engagement Model <ArrowRight className="ml-4 h-4 w-4" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection bgWhite={false} title="Program Support" subtitle="Supplementing internal teams with expert DISP advisory capability.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="group">
            <div className="data-accent mb-6">Phase 01</div>
            <h4 className="text-2xl font-black uppercase mb-6 tracking-tighter text-brand-midnight">Gap Analysis & Strategy</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              We perform a critical review of your existing security posture against the DISP framework and other relevant security standards, identifying specific areas for governance uplift.
            </p>
          </div>
          <div className="group">
            <div className="data-accent mb-6">Phase 02</div>
            <h4 className="text-2xl font-black uppercase mb-6 tracking-tighter text-brand-midnight">Framework Implementation</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Executing the uplift strategy through policy development, technical control advisory, and personnel security architecture to achieve the target maturity levels.
            </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
