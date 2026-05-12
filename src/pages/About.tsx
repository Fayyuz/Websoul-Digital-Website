import { PageHero, PageSection } from '../components/ui/Layout';

export default function About() {
  return (
    <div id="about-page">
      <PageHero 
        eyebrow="Corporate Profile"
        title="Purpose-built for mission-critical delivery."
        subtitle="Websoul Digital exists to solve the complex intersection of people, security, and digital delivery in regulated sectors."
      />

      <PageSection title="The Strategic Mandate">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-xl text-brand-midnight font-black tracking-tighter leading-relaxed mb-8 uppercase">
              Websoul Digital provides the trust infrastructure and technical capability required for organisations to succeed within Australia's most complex regulatory landscapes.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm">
              We started with a critical observation: organisations operating in high-trust sectors often struggle to align their personnel trust, digital capability, and security governance. This misalignment creates operational friction and delivery risk.
            </p>
            <p className="text-slate-500 font-light leading-relaxed text-sm">
              Websoul Digital was founded to provide a unified architecture. By bringing together Trust Services, Digital Consultancy, and DISP Advisory, we offer a complete support ecosystem for businesses delivering into government, defence-adjacent, and mission-aware environments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 border border-slate-200 p-1 bg-slate-100">
            <div className="aspect-square bg-brand-midnight flex flex-col items-center justify-center p-8 text-center text-white">
              <div className="text-2xl font-black mb-2 uppercase tracking-tighter">Trust</div>
              <div className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-black">Foundation</div>
            </div>
            <div className="aspect-square bg-white flex flex-col items-center justify-center p-8 text-center text-brand-midnight">
              <div className="text-2xl font-black mb-2 uppercase tracking-tighter">Digital</div>
              <div className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-black text-slate-500">Capability</div>
            </div>
            <div className="aspect-square bg-white flex flex-col items-center justify-center p-8 text-center text-brand-midnight border-t border-slate-100">
              <div className="text-2xl font-black mb-2 uppercase tracking-tighter">Advisory</div>
              <div className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-black text-slate-500">Strategy</div>
            </div>
            <div className="aspect-square bg-brand-surface flex flex-col items-center justify-center p-8 text-center text-brand-midnight border-t border-slate-100">
              <div className="text-2xl font-black mb-2 uppercase tracking-tighter italic">Secure</div>
              <div className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-black text-slate-500">Outcome</div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection bgWhite={false} title="Operational Values" subtitle="The principles governing our delivery in high-trust contexts.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
             { label: "01", title: "Integrity First", desc: "Trust is our core service. We operate with radical transparency and uncompromising integrity across all personnel and technical engagements." },
             { label: "02", title: "Practical Excellence", desc: "We deliver solutions that work in the real-world operational environment, not just on paper. Our advice is always executable and outcome-oriented." },
             { label: "03", title: "Secure by Design", desc: "Security is not an overlay; it is a foundational architectural principle. Every digital service we build is inherently resilient." }
          ].map((v, i) => (
            <div key={i} className="bg-white p-12 border border-slate-200">
               <div className="text-[10px] font-black text-brand-slate-light mb-8 block uppercase tracking-[0.3em]">{v.label}</div>
               <h4 className="text-xl font-black text-brand-midnight mb-6 uppercase tracking-tighter">{v.title}</h4>
               <p className="text-slate-500 text-sm leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
