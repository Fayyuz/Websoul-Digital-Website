import React from 'react';
import { PageHero, PageSection } from '../components/ui/Layout';
import { CheckCircle2, ShieldCheck, UserCheck, FileCheck } from 'lucide-react';

export default function TrustServices() {
  return (
    <div id="trust-services-page">
      <PageHero 
        eyebrow="Capability Arm: 01"
        title="Personnel Integrity & Trust Architecture."
        subtitle="Websoul provides high-integrity screening and identity-related verification services for organisations operating in secure delivery contexts."
      />

      <PageSection title="Operational Capability" subtitle="Our screening frameworks are engineered to establish workforce integrity within regulated sectors.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card-premium">
            <div className="w-12 h-12 bg-brand-surface flex items-center justify-center mb-10 border border-slate-100">
              <UserCheck className="w-6 h-6 text-brand-midnight" />
            </div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">Personnel Screening</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">
              Rigorous screening processes tailored for high-trust environments. We help you establish the integrity of your delivery teams before they reach the secure environment boundary.
            </p>
            <ul className="space-y-4">
              {['Identity validation', 'Background assessment', 'Integrity interviews'].map(s => (
                <li key={s} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-midnight">
                  <div className="w-1 h-1 bg-brand-midnight"></div>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="card-premium bg-brand-surface">
            <div className="w-12 h-12 bg-white flex items-center justify-center mb-10 border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-brand-midnight" />
            </div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">Identity Verification</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">
              Professional identity and document verification services. Ensuring that everyone in your digital or physical environment is who they claim to be.
            </p>
            <ul className="space-y-4">
              {['Biometric matching', 'Document authentication', 'Digital identity auditing'].map(s => (
                <li key={s} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-midnight">
                  <div className="w-1 h-1 bg-brand-midnight"></div>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium">
            <div className="w-12 h-12 bg-brand-surface flex items-center justify-center mb-10 border border-slate-100">
              <FileCheck className="w-6 h-6 text-brand-midnight" />
            </div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">Document Trust</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">
              Establishing trust in organisational documentation and certifications. Essential for compliance-heavy environments and government-adjacent delivery.
            </p>
            <ul className="space-y-4">
              {['Certification auditing', 'Governance checks', 'Trust-oriented service pathways'].map(s => (
                <li key={s} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-midnight">
                  <div className="w-1 h-1 bg-brand-midnight"></div>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-midnight text-white p-12 flex flex-col justify-center border border-slate-800">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-slate-light mb-4">Engagement</div>
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Custom Trust Pathways.</h3>
            <p className="text-slate-400 mb-10 leading-relaxed font-light text-sm">
              We design and execute trust-oriented onboarding services specifically for organisations with unique security or compliance requirements.
            </p>
            <button className="btn-primary bg-white !text-brand-midnight hover:bg-slate-100 self-start !px-6 !py-3">
              Contact Expert
            </button>
          </div>
        </div>
      </PageSection>

      <PageSection bgWhite={false} title="Strategic Value" subtitle="Moving from ad-hoc verification to scalable trust infrastructure.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {[
            { label: "Reduced Friction", title: "Process Excellence", desc: "Eliminate onboarding bottlenecks while maintaining high security standards through structured process engineering." },
            { label: "Enhanced Risk", title: "Risk Mitigation", desc: "Identify and mitigate personnel and document-related risks before they impact your delivery environments." },
            { label: "Scalable Integrity", title: "Trust Infrastructure", desc: "Professional trust infrastructure suitable for enterprise growth and complex regulatory compliance." }
          ].map((item, i) => (
            <div key={i} className="border-l border-slate-200 pl-10 group">
               <span className="text-xs font-black text-brand-slate-light group-hover:text-brand-midnight transition-colors mb-6 block uppercase tracking-[0.2em]">{item.label}</span>
               <h4 className="text-xl font-black uppercase mb-6 tracking-tight text-brand-midnight">{item.title}</h4>
               <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
