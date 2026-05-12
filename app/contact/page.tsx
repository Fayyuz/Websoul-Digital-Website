import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: "Contact",
  description: "Connect with Websoul Digital for high-trust consultancy and digital capability.",
};

export default function ContactPage() {
  return (
    <div id="contact">
      <PageHero 
        eyebrow="Engagement"
        title="Initiate strategic dialogue."
        subtitle="Connect with our advisory team to discuss your operational trust or digital delivery requirements."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-brand-midnight opacity-10"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">Office of Operations</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-space font-medium text-brand-midnight mb-10 tracking-tight leading-[1.1]">Direct alignment <br /> with the mission.</h2>
            <p className="text-slate-500 font-sans text-lg leading-relaxed mb-16 font-light">
              We operate out of Australia&apos;s capital, providing direct alignment with government and defence-adjacent industries.
            </p>
            
            <div className="space-y-12">
              <ContactInfo 
                icon={<MapPin className="w-5 h-5" />}
                title="Location"
                detail="Canberra, ACT Australia"
              />
              <ContactInfo 
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                detail="hello@websoul.com.au"
                href="mailto:hello@websoul.com.au"
              />
              <ContactInfo 
                icon={<Phone className="w-5 h-5" />}
                title="Phone"
                detail="+61 (02) 6188 5440"
                href="tel:+61261885440"
              />
            </div>

            <div className="mt-20 p-12 bg-[#F8FAF8] border border-slate-100 flex flex-col gap-6 relative">
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Security Note</div>
               <p className="text-xs text-slate-600 leading-relaxed font-bold font-sans">
                 Personnel visiting Websoul premises or engaging in secure briefings must adhere to site-specific trust protocols.
               </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 p-8 md:p-20 shadow-2xl shadow-slate-200/50">
               <div className="mb-16">
                 <h3 className="text-2xl font-space font-medium text-brand-midnight mb-4 tracking-tight">Secure Enquiry</h3>
                 <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-slate">Capability Evaluation & Engagement</p>
               </div>
               <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href?: string;
}

function ContactInfo({ icon, title, detail, href }: ContactInfoProps) {
  const Content = (
    <div className="flex gap-8 group">
      <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-midnight border border-slate-100 group-hover:border-brand-midnight transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">{title}</h4>
        <p className="text-sm font-bold text-brand-midnight uppercase tracking-[0.1em] font-sans">{detail}</p>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{Content}</a> : Content;
}
