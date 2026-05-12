import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section, { SectionHeader } from '@/components/ui/Section';
import { Star, Users, Briefcase, UserPlus } from 'lucide-react';

export const metadata = {
  title: "Careers",
  description: "Join the high-integrity capability network at Websoul Digital.",
};

const positions = [
  { icon: Star, title: "Digital Consultants", desc: "Cloud architects and technical advisors with a security-first mindset and deep technical discipline." },
  { icon: Users, title: "Trust Specialists", desc: "Vetting professionals and identity services specialists who understand regulated government contexts." },
  { icon: Briefcase, title: "Advisory Leads", desc: "Security governance experts and strategic advisors for secure operating contexts and mission-critical programs." },
  { icon: UserPlus, title: "Delivery Partners", desc: "We partner with specialist solo-operators and boutique firms who share our commitment to trust." }
];

export default function CareersPage() {
  return (
    <div id="careers">
      <PageHero 
        eyebrow="Personnel Growth"
        title="Join the high-integrity capability network."
        subtitle="We're looking for specialists who thrive at the intersection of security, digital innovation, and strategic delivery in Canberra's most secure environments."
      />

      <Section>
        <SectionHeader 
          title="Operational Network" 
          subtitle="We build networks of elite talent for high-trust environments."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 items-center">
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            Websoul Digital is built on a foundation of trusted people. We are always looking for professionals with experience in the Australian Government, Defence, and regulated industry sectors who want to apply their skills in a modern, agile consultancy environment. Our culture is one of technical discipline and radical transparency.
          </p>
          <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 border border-slate-200">
            <div className="bg-white p-12 text-center">
              <div className="text-brand-midnight font-black text-4xl mb-3 tracking-tighter">EXPERT</div>
              <div className="text-slate-400 uppercase text-[9px] font-black tracking-widest leading-none">Environment</div>
            </div>
            <div className="bg-brand-midnight p-12 text-center">
              <div className="text-white font-black text-4xl mb-3 tracking-tighter italic">MISSION</div>
              <div className="text-brand-slate-light uppercase text-[9px] font-black tracking-widest leading-none">Impact-Driven</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {positions.map((item, i) => (
            <div key={i} className="card-premium">
              <div className="mb-10 w-12 h-12 bg-brand-surface flex items-center justify-center border border-slate-100 text-brand-midnight">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">{item.desc}</p>
              <button className="text-brand-midnight font-black text-[10px] uppercase tracking-[0.3em] flex items-center group">
                Register Capability
                <div className="ml-4 w-1.5 h-1.5 bg-brand-midnight group-hover:scale-150 transition-transform"></div>
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface" containerClassName="text-center">
        <div className="max-w-3xl mx-auto border border-slate-200 bg-white p-16 md:p-24 shadow-2xl shadow-slate-100">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-slate-light mb-10">Recruitment</div>
          <h2 className="text-3xl font-black text-brand-midnight mb-10 uppercase tracking-tighter leading-tight">Initiate the conversation.</h2>
          <p className="text-slate-500 mb-16 font-light text-sm leading-relaxed max-w-xl mx-auto">
            Send your professional profile to our capability team. We evaluate candidates not just on technical skills, but on trust and alignment with our delivery mission.
          </p>
          <a href="mailto:careers@websoul.com.au" className="btn-primary !bg-brand-midnight !px-12">
            careers@websoul.com.au
          </a>
        </div>
      </Section>
    </div>
  );
}
