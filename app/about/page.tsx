import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section, { SectionHeader } from '@/components/ui/Section';

export const metadata = {
  title: "About",
  description: "Websoul Digital exists to solve the complex intersection of people, security, and digital delivery in regulated sectors.",
};

export default function AboutPage() {
  return (
    <div id="about">
      <PageHero 
        eyebrow="Corporate Profile"
        title="Purpose-built for mission-critical delivery."
        subtitle="Websoul Digital exists to solve the complex intersection of people, security, and digital delivery in Australia's most regulated sectors."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-brand-midnight opacity-10"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">The Strategic Mandate</span>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-midnight font-space font-medium tracking-tight leading-relaxed mb-12">
              Websoul Digital provides the trust infrastructure and technical capability required for organisations to succeed within Australia&apos;s most complex regulatory landscapes.
            </p>
            
            <div className="space-y-10">
              <p className="text-slate-500 font-sans font-light leading-relaxed text-lg">
                We started with a critical observation: organisations operating in high-trust sectors often struggle to align their personnel trust, digital capability, and security governance. This misalignment creates operational friction and delivery risk.
              </p>
              <p className="text-slate-500 font-sans font-light leading-relaxed text-lg">
                Websoul Digital was founded to provide a unified architecture. By bringing together Trust Services, Digital Consultancy, and DISP Advisory, we offer a complete support ecosystem for businesses delivering into government, defence-adjacent, and mission-aware environments.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-1 border border-slate-100 p-1 bg-slate-50 relative">
            <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 opacity-[0.03] hero-grid"></div>
            
            <div className="aspect-square bg-[#0A0A0F] flex flex-col items-center justify-center p-12 text-center text-white">
              <div className="text-3xl font-space font-medium mb-3 tracking-tight">Trust</div>
              <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold">Foundation</div>
            </div>
            <div className="aspect-square bg-white flex flex-col items-center justify-center p-12 text-center text-brand-midnight">
              <div className="text-3xl font-space font-medium mb-3 tracking-tight">Digital</div>
              <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold text-slate-500">Capability</div>
            </div>
            <div className="aspect-square bg-white flex flex-col items-center justify-center p-12 text-center text-brand-midnight border-t border-slate-50">
              <div className="text-3xl font-space font-medium mb-3 tracking-tight">Advisory</div>
              <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold text-slate-500">Strategy</div>
            </div>
            <div className="aspect-square bg-[#F8FAF8] flex flex-col items-center justify-center p-12 text-center text-brand-midnight border-t border-slate-50">
              <div className="text-3xl font-space font-medium mb-3 tracking-tight opacity-40 italic">Secure</div>
              <div className="text-[9px] uppercase tracking-[0.3em] opacity-80 font-bold text-brand-slate">Outcome</div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeader 
          title="Operational Principles" 
          subtitle="The governing standards our teams bring to every critical engagement."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200">
          {[
             { label: "01", title: "Integrity First", desc: "Trust is our core service. We operate with radical transparency and uncompromising integrity across all personnel and technical engagements." },
             { label: "02", title: "Practical Excellence", desc: "We deliver solutions that work in the real-world operational environment. Our advice is always executable, technical, and outcome-oriented." },
             { label: "03", title: "Secure by Design", desc: "Security is not an overlay; it is a foundational architectural principle. Every service we build is inherently resilient and cyber-aware." }
          ].map((v, i) => (
            <div key={i} className="bg-white p-16 group hover:bg-brand-midnight transition-all duration-700 border-r border-b border-slate-200">
               <div className="text-[11px] font-bold text-brand-slate mb-12 block uppercase tracking-[0.4em] group-hover:text-white transition-colors">{v.label}</div>
               <h4 className="text-2xl font-space font-medium text-brand-midnight mb-8 tracking-tight group-hover:text-white transition-colors">{v.title}</h4>
               <p className="text-slate-500 font-sans text-sm leading-relaxed font-light group-hover:text-slate-400 transition-colors">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
