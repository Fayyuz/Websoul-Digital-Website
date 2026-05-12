import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export const metadata = {
  title: "Privacy Policy",
  description: "Websoul Digital secure information handling and data protection framework.",
};

export default function PrivacyPage() {
  return (
    <div id="privacy">
      <PageHero 
        eyebrow="Governance"
        title="Privacy Protocols."
        subtitle="Operational framework for secure information handling and data protection."
      />
      <Section>
        <div className="max-w-4xl">
          <div className="space-y-20">
            <PrivacySection 
              number="01"
              title="Regulatory Compliance"
              content="Websoul Digital Pty Ltd is committed to protecting your privacy and complying with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). This policy outlines our operational protocols for collecting, using, and managing personnel and digital information."
            />
            <PrivacySection 
              number="02"
              title="Information Collection"
              content="We collect personal information necessary to provide specialized consultancy and trust services. Within our Personnel Integrity arm, we may collect sensitive identification data as required for regulated verification pathways. All such data is handled within secure architectures."
            />
            <PrivacySection 
              number="03"
              title="Disclosure Protocols"
              content="Information is strictly used for the designated purpose of collection. We do not disclose data to third parties unless required by law or necessary for the execution of authorized trust verification services."
            />
            <PrivacySection 
              number="04"
              title="Data Security & Integrity"
              content="As a digital consultancy focused on high-trust environments, we maintain advanced data security standards. This includes multi-layered encryption, rigorous access control audits, and adherence to modern cyber-governance frameworks."
            />
          </div>

          <div className="mt-32 pt-12 border-t border-slate-100 italic text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Protocol Version: 2026.05.REV1
          </div>
        </div>
      </Section>
    </div>
  );
}

interface PrivacySectionProps {
  number: string;
  title: string;
  content: string;
}

function PrivacySection({ number, title, content }: PrivacySectionProps) {
  return (
    <section className="border-l border-slate-200 pl-12 relative">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-white border-2 border-brand-midnight flex items-center justify-center">
         <div className="w-1 h-1 bg-brand-midnight"></div>
      </div>
      <div className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-[0.3em]">{number}</div>
      <h2 className="text-2xl font-black mb-8 uppercase tracking-tight text-brand-midnight">{title}</h2>
      <p className="leading-relaxed text-slate-500 font-light text-base">
        {content}
      </p>
    </section>
  );
}
