import React from 'react';
import { PageHero, PageSection } from '../components/ui/Layout';

export default function Privacy() {
  return (
    <div id="privacy-page">
      <PageHero 
        eyebrow="Governance"
        title="Privacy Protocols."
        subtitle="Websoul Digital secure information handling and data protection framework."
      />
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">01. Regulatory Compliance</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                Websoul Digital Pty Ltd is committed to protecting your privacy and complying with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). This policy outlines our operational protocols for collecting, using, and managing personnel and digital information.
              </p>
            </section>
            
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">02. Information Collection</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                We collect personal information necessary to provide specialized consultancy and trust services. Within our Personnel Integrity arm, we may collect sensitive identification data as required for regulated verification pathways. All such data is handled within secure architectures.
              </p>
            </section>
            
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">03. Disclosure Protocols</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                Information is strictly used for the designated purpose of collection. We do not disclose data to third parties unless required by law or necessary for the execution of authorized trust verification services.
              </p>
            </section>
            
            <section className="border-l border-slate-200 pl-8">
              <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">04. Data Security & Integrity</h2>
              <p className="leading-relaxed text-slate-500 font-light text-sm">
                As a digital consultancy focused on high-trust environments, we maintain advanced data security standards. This includes multi-layered encryption, rigorous access control audits, and adherence to modern cyber-governance frameworks.
              </p>
            </section>
          </div>

          <div className="mt-24 pt-12 border-t border-slate-100 italic text-[10px] uppercase tracking-widest text-slate-400">
            Protocol Version: 2026.05.REV1
          </div>
        </div>
      </PageSection>
    </div>
  );
}
