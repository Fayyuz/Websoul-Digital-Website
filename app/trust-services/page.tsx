import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section, { SectionHeader } from '@/components/ui/Section';
import { UserCheck, ShieldCheck, FileCheck } from 'lucide-react';

export const metadata = {
  title: "Trust Services",
  description: "High-integrity screening and identity-related verification services for organisations in secure delivery contexts.",
};

export default function TrustServicesPage() {
  return (
    <div id="trust-services">
      <PageHero 
        eyebrow="Capability Arm: 01"
        title="Personnel Integrity & Trust Architecture."
        subtitle="Websoul provides high-integrity screening and identity-related verification services for organisations operating in secure delivery contexts. Subject to partner integration and customer-specific operating arrangements."
      />

      <Section>
        <SectionHeader 
          title="Operational Capability" 
          subtitle="Our screening frameworks are engineered to establish workforce integrity within regulated sectors."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
          <CapabilityCard 
            icon={<UserCheck className="w-5 h-5" />}
            title="Personnel Screening"
            description="Rigorous screening processes tailored for high-trust environments. We help establish team integrity before secure boundary access."
            items={['Identity validation', 'Background assessment', 'Integrity interviews']}
          />
          <CapabilityCard 
            icon={<ShieldCheck className="w-5 h-5" />}
            title="Identity Verification"
            description="Professional identity and document verification services. Ensuring technical and physical identity assurance across all environments."
            items={['Biometric matching', 'Document authentication', 'Digital identity auditing']}
            bg="surface"
          />
          <CapabilityCard 
            icon={<FileCheck className="w-5 h-5" />}
            title="Document Trust"
            description="Establishing trust in organisational documentation and certifications. Essential for compliance-heavy and government-adjacent delivery."
            items={['Certification auditing', 'Governance checks', 'Trust-oriented pathways']}
          />
        </div>
      </Section>

      <Section bg="midnight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-white opacity-20"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate-light">Strategic Value</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-space font-medium text-white mb-10 leading-tight tracking-tight">Scalable Trust Infrastructure.</h2>
            <p className="text-slate-400 font-sans font-light leading-relaxed mb-12 text-lg">
              Our trust services are designed to remove onboarding bottlenecks while maintaining high security standards. We move organisations from ad-hoc verification to professional, scalable trust infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1 bg-white/5 p-1 border border-white/5">
             {[
               { val: "Reliability", label: "Reduced Onboarding Friction" },
               { val: "Assurance", label: "Enhanced Risk Posture" },
               { val: "Integrity", label: "Regulatory Alignment" }
             ].map((stat, i) => (
               <div key={i} className="bg-[#0A0A0F] p-12 flex flex-col gap-3 group hover:bg-[#111118] transition-colors">
                 <div className="text-2xl font-space font-medium text-white tracking-tight">{stat.val}</div>
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 group-hover:text-slate-400 transition-colors">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  bg?: 'white' | 'surface';
}

function CapabilityCard({ icon, title, description, items, bg = 'white' }: CapabilityCardProps) {
  return (
    <div className={`p-12 border-r border-b border-slate-100 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-slate-100 hover:z-10 group ${bg === 'surface' ? 'bg-[#F8FAF8]' : 'bg-white'}`}>
      <div className="w-12 h-12 bg-white flex items-center justify-center mb-12 border border-slate-100 text-brand-midnight group-hover:border-brand-midnight transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-space font-medium mb-6 text-brand-midnight tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-12 font-sans font-light">{description}</p>
      <ul className="space-y-6 mt-auto">
        {items.map((item: string) => (
          <li key={item} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-midnight">
            <div className="w-1.5 h-1.5 border border-brand-midnight/20 rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
