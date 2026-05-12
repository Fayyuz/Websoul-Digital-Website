import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section, { SectionHeader } from '@/components/ui/Section';
import { ShieldCheck, ClipboardCheck, ArrowRight, BookOpen, Scale, Award } from 'lucide-react';

export const metadata = {
  title: "DISP Advisory",
  description: "Security maturity, governance uplift, and readiness support for organisations in secure operating contexts.",
};

export default function DISPAdvisoryPage() {
  return (
    <div id="disp-advisory">
      <PageHero 
        eyebrow="Capability Arm: 03"
        title="Security Governance & Maturity Advisory."
        subtitle="Supporting organisations to navigate security maturity, governance uplift, and readiness for secure operating environments. Focus on practical readiness over performative compliance."
      />

      <Section>
        <SectionHeader 
          title="Security Maturity & Advisory" 
          subtitle="Moving beyond compliance to practical readiness and trusted governance."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h3 className="text-3xl font-space font-medium text-brand-midnight mb-10 tracking-tight">Strategic Security Uplift</h3>
            <p className="text-slate-500 font-sans text-lg leading-relaxed mb-16 font-light">
              We help organisations understand their current security maturity and develop clear, practical roadmaps for uplift. This is essential for businesses seeking to operate in defence-aware or high-trust government contexts.
            </p>
            <div className="space-y-16">
              <FeatureItem 
                icon={<ClipboardCheck className="w-5 h-5" />}
                title="Readiness Assessments"
                desc="Comprehensive assessment of current governance and security state against industry and government standards."
              />
              <FeatureItem 
                icon={<Scale className="w-5 h-5" />}
                title="Governance Uplift"
                desc="Policy development, governance frameworks, and executive advisory for trusted operating contexts."
              />
              <FeatureItem 
                icon={<BookOpen className="w-5 h-5" />}
                title="Policy Development"
                desc="Practical, executable security and operational policies designed for real-world application."
              />
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#F8FAF8] border border-slate-100 p-12 h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-brand-midnight">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.5" />
                 </svg>
               </div>
               
               <h3 className="text-xl font-space font-medium mb-12 text-brand-midnight tracking-tight">The Websoul Methodology</h3>
               <div className="space-y-10">
                  {[
                    "Specialist expertise in high-trust sectors",
                    "Practical, non-performative advisory",
                    "Alignment with modern secure standards",
                    "Delivery-enabling governance architecture"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 border-b border-slate-200 pb-8 group">
                      <Award className="text-brand-midnight h-4 w-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-brand-midnight transition-colors">{item}</span>
                    </div>
                  ))}
               </div>

               <div className="mt-20 p-12 bg-[#0A0A0F] text-white shadow-2xl relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <ShieldCheck className="w-16 h-16" />
                  </div>
                  <p className="text-xl font-space font-light mb-12 leading-relaxed text-slate-300">
                    Our advisory is focused on one thing: making your organisation <span className="font-medium text-white">ready for the mission.</span>
                  </p>
                  <button className="flex items-center text-[10px] font-bold uppercase tracking-[0.4em] hover:translate-x-3 transition-transform text-white group">
                    Engagement Model <ArrowRight className="ml-4 h-4 w-4 text-brand-slate-light group-hover:text-white" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeader 
          title="Program Support" 
          subtitle="Supplementing internal teams with expert advisory capability."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="group">
            <div className="inline-flex items-center gap-3 mb-8">
               <div className="w-4 h-[1px] bg-brand-midnight opacity-20"></div>
               <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">Phase 01</div>
            </div>
            <h4 className="text-2xl font-space font-medium mb-6 tracking-tight text-brand-midnight">Gap Analysis & Strategy</h4>
            <p className="text-slate-500 font-sans text-sm leading-relaxed font-light">
              We perform a critical review of your existing security posture against the DISP framework and other relevant security standards, identifying specific areas for governance uplift.
            </p>
          </div>
          <div className="group">
            <div className="inline-flex items-center gap-3 mb-8">
               <div className="w-4 h-[1px] bg-brand-midnight opacity-20"></div>
               <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">Phase 02</div>
            </div>
            <h4 className="text-2xl font-space font-medium mb-6 tracking-tight text-brand-midnight">Framework Implementation</h4>
            <p className="text-slate-500 font-sans text-sm leading-relaxed font-light">
              Executing the uplift strategy through policy development, technical control advisory, and personnel security architecture to achieve required maturity levels.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureItem({ icon, title, desc }: FeatureItemProps) {
  return (
    <div className="flex gap-8 group">
      <div className="shrink-0 w-12 h-12 bg-white flex items-center justify-center text-brand-midnight border border-slate-100 group-hover:border-brand-midnight transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-brand-midnight">{title}</h4>
        <p className="text-slate-500 font-sans text-sm leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}
