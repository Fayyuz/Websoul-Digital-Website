import React from 'react';
import { PageHero, PageSection } from '../components/ui/Layout';
import { UserPlus, Star, Users, Briefcase } from 'lucide-react';

export default function Careers() {
  return (
    <div id="careers-page">
      <PageHero 
        eyebrow="Personnel Growth"
        title="Join the high-integrity capability network."
        subtitle="We're looking for specialists who thrive at the intersection of security, digital innovation, and strategic delivery in Canberra's most secure environments."
      />

      <PageSection title="Operational Network" subtitle="We don't just hire; we build networks of elite talent for high-trust environments.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 items-center">
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            Websoul Digital is built on a foundation of trusted people. We are always looking for professionals with experience in the Australian Government, Defence, and regulated industry sectors who want to apply their skills in a modern, agile consultancy environment. Our culture is one of technical discipline and radical transparency.
          </p>
          <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 border border-slate-200">
            <div className="bg-white p-8 border border-slate-50 text-center">
              <div className="text-brand-midnight font-black text-3xl mb-2">EXPERT</div>
              <div className="text-slate-400 uppercase text-[9px] font-black tracking-widest leading-none">Environment</div>
            </div>
            <div className="bg-brand-midnight p-8 text-center">
              <div className="text-white font-black text-3xl mb-2 italic">IMPACT-DRIVEN</div>
              <div className="text-brand-slate-light uppercase text-[9px] font-black tracking-widest leading-none">Mission</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              icon: <Star className="text-brand-midnight w-6 h-6" />, 
              title: "Digital Consultants", 
              desc: "Cloud architects, delivery leads, and technical advisors with a security-first mindset and deep technical discipline."
            },
            { 
              icon: <Users className="text-brand-midnight w-6 h-6" />, 
              title: "Trust Specialists", 
              desc: "Vetting professionals, screening experts, and identity services specialists who understand regulated contexts."
            },
            { 
              icon: <Briefcase className="text-brand-midnight w-6 h-6" />, 
              title: "Advisory Leads", 
              desc: "Security governance experts and strategic advisors for secure operating contexts and mission-critical programs."
            },
            { 
              icon: <UserPlus className="text-brand-midnight w-6 h-6" />, 
              title: "Delivery Partners", 
              desc: "We also partner with specialist solo-operators and boutique firms who share our commitment to trust."
            }
          ].map((item, i) => (
            <div key={i} className="card-premium">
              <div className="mb-10 w-12 h-12 bg-brand-surface flex items-center justify-center border border-slate-100">{item.icon}</div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">{item.desc}</p>
              <button className="text-brand-midnight font-black text-[10px] uppercase tracking-[0.3em] flex items-center group">
                Register Capability
                <div className="ml-4 w-1 h-1 bg-brand-midnight group-hover:scale-150 transition-transform"></div>
              </button>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection bgWhite={false} className="text-center">
        <div className="max-w-3xl mx-auto border border-slate-200 bg-white p-16">
          <h2 className="text-2xl font-black text-brand-midnight mb-8 uppercase tracking-tighter">Initiate the conversation.</h2>
          <p className="text-slate-500 mb-12 font-light text-sm leading-relaxed">
            Send your professional profile to our capability team. We evaluate candidates not just on technical skills, but on trust and alignment with our delivery mission.
          </p>
          <a href="mailto:careers@websoul.com.au" className="btn-primary !bg-brand-midnight">
            careers@websoul.com.au
          </a>
        </div>
      </PageSection>
    </div>
  );
}
