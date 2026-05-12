import React from 'react';
import { PageHero, PageSection } from '../components/ui/Layout';

export default function Terms() {
  return (
    <div id="terms-page">
      <PageHero 
        eyebrow="Governance"
        title="Terms of Engagement."
        subtitle="The operational terms governing your interaction with Websoul Digital."
      />
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">01. Acceptance of Terms</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                By accessing and interacting with this digital platform, you agree to be bound by these Terms of Use and all applicable laws and regulations in Australia. Websoul Digital Pty Ltd reserves the right to modify these terms at any time without prior notice.
              </p>
            </section>
            
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">02. Intellectual Integrity</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                All intellectual property on this platform—including proprietary methodology descriptions, technical architecture diagrams, and the Websoul identity—is the exclusive property of Websoul Digital Pty Ltd. Unauthorized reproduction is strictly prohibited.
              </p>
            </section>
            
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">03. Professional Scope</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                The content provided here is for high-level informational purposes and does not constitute a formal consultancy engagement or professional advice. Formal advisory services are governed by unique Project Service Agreements (PSAs).
              </p>
            </section>
            
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">04. Liability Limitation</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                Websoul Digital shall not be held liable for any loss—direct or indirect—resulting from the use of information provided on this platform. Users are responsible for verifying the relevance of any strategic insight to their specific operating environment.
              </p>
            </section>
          </div>

          <div className="mt-24 pt-12 border-t border-slate-100 italic text-[10px] uppercase tracking-widest text-slate-400">
            Terms Version: 2026.05.ENG1
          </div>
        </div>
      </PageSection>
    </div>
  );
}
