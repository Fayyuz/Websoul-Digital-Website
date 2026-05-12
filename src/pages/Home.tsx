import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="home-page">
      {/* Strategic Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-brand-midnight text-white" id="hero">
        <div className="absolute inset-0 z-0 opacity-10 hero-grid"></div>
        
        <div className="section-container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-slate-light mb-8 block">
              Websoul Digital consultancy
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-10 uppercase">
              Trusted people.<br/>
              Secure delivery.<br/>
              <span className="text-brand-slate">Stronger organisations.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl font-light">
              We provide the strategic capability and high-trust pathways required to operate effectively in Australia's most secure and regulated environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/trust-services" className="btn-primary !bg-white !text-brand-midnight hover:!bg-slate-100 px-10">
                Explore Trust Services
              </Link>
              <Link to="/contact" className="btn-outline !border-slate-700 !text-white hover:!border-white px-10">
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Band */}
      <section className="bg-brand-surface border-y border-slate-200 py-8" id="trust-band">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Ownership", val: "Australian-Owned" },
              { label: "Operation", val: "Canberra-Based" },
              { label: "Compliance", val: "Defence-Aware" },
              { label: "Focus", val: "Secure Environments" }
            ].map((item) => (
              <div key={item.label} className="border-l border-slate-200 pl-6">
                <div className="data-accent mb-1">{item.label}</div>
                <div className="text-xs font-black uppercase text-brand-midnight">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capability Arms */}
      <section className="py-32 bg-white" id="services-overview">
        <div className="section-container">
          <div className="mb-20">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-midnight mb-4">Integrated Strategic Capability</h2>
            <p className="text-slate-500 max-w-2xl font-medium uppercase tracking-widest text-xs">Our three primary service arms work in synergy to enable complex delivery.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <ServiceCard 
              to="/trust-services"
              icon={<Shield className="w-8 h-8 text-brand-midnight" />}
              title="Trust Services"
              description="Trusted screening, identity verification, and document trust services for secure workforce integrity and onboarding."
              actionLabel="Verify Capability"
            />
            <ServiceCard 
              to="/digital-consultancy"
              accent
              icon={<Globe className="w-8 h-8 text-brand-midnight" />}
              title="Digital Consultancy"
              description="ICT strategy, cloud transformation, and cyber-aware consulting tailored for government and regulated sectors."
              actionLabel="View Strategy"
            />
            <ServiceCard 
              to="/disp-advisory"
              icon={<Briefcase className="w-8 h-8 text-brand-midnight" />}
              title="DISP Advisory"
              description="Practical security maturity, governance uplift, and readiness support for organisations in secure operating contexts."
              actionLabel="Audit Readiness"
            />
          </div>
        </div>
      </section>

      {/* Authoritative Differentiation */}
      <section className="py-32 bg-brand-midnight text-white overflow-hidden" id="why-websoul">
        <div className="section-container relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
              <defs>
                <pattern id="grid-large" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid-large)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight uppercase tracking-tighter">
                Bridging the Gap<br/>
                Between Security<br/>
                And Delivery.
              </h2>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light">
                Operating in Australia's high-trust sectors requires more than technical skill. It requires an integrated understanding of personnel integrity, security governance, and digital architecture.
              </p>
              
              <div className="grid gap-10">
                {[
                  { title: "Strategic Proximity", desc: "Canberra-rooted perspective with direct alignment to government delivery standards." },
                  { title: "Operational Integrity", desc: "Personnel and organisational trust pathways that meet rigorous secure-environment criteria." },
                  { title: "Proven Excellence", desc: "Decades of experience delivering ICT transformation within complex regulatory frameworks." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-2xl font-black text-slate-800 group-hover:text-white transition-colors">0{i+1}</div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-xs mb-3">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/5 border border-white/10 p-12 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full border border-white/20 flex flex-col justify-center items-center gap-10">
                   <div className="h-0.5 w-1/2 bg-white/40"></div>
                   <div className="h-0.5 w-1/3 bg-white/20"></div>
                   <div className="h-0.5 w-2/3 bg-white/30"></div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white text-brand-midnight p-10 shadow-2xl">
                   <div className="text-sm font-black uppercase tracking-widest mb-1">Strategic Presence</div>
                   <div className="text-xs text-slate-500 font-bold">ACT • CANBERRA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: High Confidence */}
      <section className="py-40 bg-white" id="final-cta">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="data-accent mb-8 block">Ready for Engagement</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-midnight mb-12 uppercase tracking-tighter">
              Trusted capability Starts here.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="btn-primary !px-12 !py-6 !text-lg">
                Talk to Us
              </Link>
              <Link to="/about" className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-brand-midnight transition-colors">
                About the websoul model
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, to, accent, actionLabel }: any) {
  return (
    <Link to={to} className={`group border border-slate-200 p-12 flex flex-col hover:border-brand-midnight transition-all duration-500 ${accent ? 'bg-brand-surface shadow-2xl shadow-slate-200 lg:-translate-y-4' : ''}`}>
      <div className={`w-14 h-14 flex items-center justify-center mb-10 ${accent ? 'bg-brand-midnight text-white' : 'bg-slate-100 text-brand-midnight'}`}>
        {React.cloneElement(icon, { className: accent ? "text-white" : "text-brand-midnight" })}
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-midnight mb-6">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-10 flex-grow">
        {description}
      </p>
      <div className="mt-auto text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 text-brand-slate group-hover:text-brand-midnight transition-colors">
        {actionLabel} <span className="text-lg leading-none opacity-40 group-hover:opacity-100 transition-all">→</span>
      </div>
    </Link>
  );
}
