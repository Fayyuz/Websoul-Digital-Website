import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section, { SectionHeader } from '@/components/ui/Section';
import { Cloud, ShieldAlert, BarChart3, Rocket, Settings, Laptop } from 'lucide-react';

export const metadata = {
  title: "Digital Consultancy",
  description: "Strategic ICT advisory, cloud transformation, and cyber-aware consulting for high-trust environments.",
};

const capabilities = [
  { icon: Cloud, title: "Cloud Strategy", desc: "Modern cloud architecture and strategy designed for secure and regulated environments." },
  { icon: ShieldAlert, title: "Cyber-aware Digital", desc: "Consultancy that integrates security principles into the heart of digital service delivery." },
  { icon: BarChart3, title: "Transformation Advisory", desc: "Guided pathways for organisational change and technology uplift in complex sectors." },
  { icon: Rocket, title: "Service Delivery", desc: "Management of complex digital programs with a focus on outcome-driven success." },
  { icon: Settings, title: "Technical Advisory", desc: "Expert technical guidance on ICT infrastructure, systems architecture, and platform strategy." },
  { icon: Laptop, title: "System Design", desc: "Architectural integrity for modern enterprise systems in high-trust operating contexts." }
];

export default function DigitalConsultancyPage() {
  return (
    <div id="digital-consultancy">
      <PageHero 
        eyebrow="Capability Arm: 02"
        title="ICT Delivery & Digital Architecture."
        subtitle="Strategic ICT advisory, cloud transformation, and cyber-aware consulting for organisations navigating complex digital landscapes."
      />

      <Section>
        <SectionHeader 
          title="Delivery Capability" 
          subtitle="We specialize in bringing secure, scalable, and resilient digital solutions to high-trust environments."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
          {capabilities.map((item, i) => (
            <div key={i} className="p-12 border-r border-b border-slate-100 flex flex-col bg-white hover:bg-brand-surface transition-colors group">
              <div className="text-brand-midnight mb-10 bg-white w-12 h-12 flex items-center justify-center border border-slate-100 group-hover:border-brand-midnight transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-space font-medium mb-6 text-brand-midnight tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-sans text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <div className="bg-[#0A0A0F] text-white overflow-hidden border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-24">
              <div className="inline-flex items-center gap-3 mb-10">
                <div className="w-8 h-[1px] bg-white opacity-20"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate-light">Strategic Insight</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-space font-medium mb-12 leading-[1.1] tracking-tight">Delivery excellence for high-trust programs.</h2>
              <p className="text-slate-400 text-lg mb-16 leading-relaxed font-sans font-light">
                We understand the unique constraints of delivering technology into government and defence-adjacent industries. Our digital consultancy is built on practical experience in mission-critical environments.
              </p>
              <button className="btn-primary !bg-white !text-brand-midnight hover:!bg-slate-200">
                Advisory Engagement
              </button>
            </div>
            <div className="bg-[#0F0F16] p-12 md:p-24 flex flex-col justify-center border-l border-white/5">
              <div className="space-y-16">
                {[
                  { val: "99%+", label: "Security Compliance Baseline" },
                  { val: "ACT", label: "Strategic Canberra Proximity" },
                  { val: "24/7", label: "Mission Critical Availability" }
                ].map((stat, idx) => (
                  <div key={idx} className="border-l border-white/10 pl-8">
                    <div className="text-4xl md:text-5xl font-space font-medium mb-2 tracking-tighter">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-slate-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
