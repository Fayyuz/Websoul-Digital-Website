import { PageHero, PageSection } from '../components/ui/Layout';
import { Laptop, Cloud, ShieldAlert, BarChart3, Settings, Rocket } from 'lucide-react';

export default function DigitalConsultancy() {
  return (
    <div id="digital-consultancy-page">
      <PageHero 
        eyebrow="Capability Arm: 02"
        title="ICT Delivery & Digital Architecture."
        subtitle="Strategic ICT advisory, cloud transformation, and cyber-aware consulting for organisations navigating complex digital landscapes."
      />

      <PageSection title="Delivery Capability" subtitle="We specialize in bringing secure, scalable, and resilient digital solutions to high-trust environments.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Cloud className="w-6 h-6" />,
              title: "Cloud Strategy",
              desc: "Modern cloud architecture and strategy designed for secure and regulated environments."
            },
            {
              icon: <ShieldAlert className="w-6 h-6" />,
              title: "Cyber-aware Digital",
              desc: "Consultancy that integrates security principles into the heart of digital service delivery."
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Transformation Advisory",
              desc: "Guided pathways for organisational change and technology uplift in complex sectors."
            },
            {
              icon: <Rocket className="w-6 h-6" />,
              title: "Service Delivery",
              desc: "Management of complex digital programs and services with a focus on outcome-driven success."
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Technical Advisory",
              desc: "Expert technical guidance on ICT infrastructure, systems architecture, and platform strategy."
            },
            {
              icon: <Laptop className="w-6 h-6" />,
              title: "System Design",
              desc: "Architectural integrity for modern enterprise systems in high-trust operating contexts."
            }
          ].map((item, i) => (
            <div key={i} className="card-premium">
              <div className="text-brand-midnight mb-8 bg-brand-surface w-12 h-12 flex items-center justify-center border border-slate-100">{item.icon}</div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-brand-midnight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection bgWhite={false}>
        <div className="bg-brand-midnight text-white border border-slate-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-slate-light mb-8">Strategic Insight</div>
              <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight uppercase tracking-tighter">Delivery excellence for high-trust programs.</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed font-light">
                We understand the unique constraints and requirements of delivering technology into government, defence-adjacent, and regulated industries. Our digital consultancy is built on practical experience in these specific environments.
              </p>
              <button className="btn-primary bg-white !text-brand-midnight hover:bg-slate-100">
                Contact Advisory Team
              </button>
            </div>
            <div className="bg-brand-navy p-12 flex flex-col justify-center border-l border-white/5">
              <div className="space-y-16">
                {[
                  { val: "99%+", label: "Security Compliance Baseline" },
                  { val: "ACT", label: "Strategic Canberra Proximity" },
                  { val: "24/7", label: "Mission Critical Availability" }
                ].map((stat, idx) => (
                  <div key={idx} className="border-l border-white/10 pl-8">
                    <div className="text-3xl font-black mb-2">{stat.val}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-slate-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
