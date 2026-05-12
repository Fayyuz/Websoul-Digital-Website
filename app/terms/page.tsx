import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export const metadata = {
  title: "Terms of Use",
  description: "The operational terms governing your interaction with Websoul Digital.",
};

export default function TermsPage() {
  return (
    <div id="terms">
      <PageHero 
        eyebrow="Governance"
        title="Terms of Engagement."
        subtitle="Operational terms and protocols governing your interaction with the Websoul platform."
      />
      <Section>
        <div className="max-w-4xl">
          <div className="space-y-20">
            <TermsSection 
              number="01"
              title="Acceptance of Terms"
              content="By accessing and interacting with this digital platform, you agree to be bound by these Terms of Use and all applicable laws and regulations in Australia. Websoul Digital Pty Ltd reserves the right to modify these terms at any time without prior notice."
            />
            <TermsSection 
              number="02"
              title="Intellectual Integrity"
              content="All intellectual property on this platform—including proprietary methodology descriptions, technical architecture diagrams, and the Websoul identity—is the exclusive property of Websoul Digital Pty Ltd. Unauthorized reproduction is strictly prohibited."
            />
            <TermsSection 
              number="03"
              title="Professional Scope"
              content="The content provided here is for high-level informational purposes and does not constitute a formal consultancy engagement or professional advice. Formal advisory services are governed by unique Project Service Agreements (PSAs)."
            />
            <TermsSection 
              number="04"
              title="Liability Limitation"
              content="Websoul Digital shall not be held liable for any loss—direct or indirect—resulting from the use of information provided on this platform. Users are responsible for verifying the relevance of any strategic insight to their specific operating environment."
            />
          </div>

          <div className="mt-32 pt-12 border-t border-slate-100 italic text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Terms Version: 2026.05.ENG1
          </div>
        </div>
      </Section>
    </div>
  );
}

interface TermsSectionProps {
  number: string;
  title: string;
  content: string;
}

function TermsSection({ number, title, content }: TermsSectionProps) {
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
