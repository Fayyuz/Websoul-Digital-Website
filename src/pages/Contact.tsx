import { PageHero, PageSection } from '../components/ui/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact-page">
      <PageHero 
        eyebrow="Communication"
        title="Connect with our personnel integrity team."
        subtitle="Discuss how Websoul Digital can support your services, delivery, and security governance requirements."
      />

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-black text-brand-midnight mb-12 uppercase tracking-tighter">Direct Channels</h2>
              <div className="space-y-12">
                <div className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-brand-surface border border-slate-100 text-brand-midnight flex items-center justify-center shrink-0 group-hover:bg-brand-midnight group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Electronic</h4>
                    <a href="mailto:hello@websoul.com.au" className="text-xl font-black text-brand-midnight hover:underline decoration-2 tracking-tight">hello@websoul.com.au</a>
                  </div>
                </div>
                <div className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-brand-surface border border-slate-100 text-brand-midnight flex items-center justify-center shrink-0 group-hover:bg-brand-midnight group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Voice</h4>
                    <span className="text-xl font-black text-brand-midnight tracking-tight">+61 1300 WEBSOUL</span>
                  </div>
                </div>
                <div className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-brand-surface border border-slate-100 text-brand-midnight flex items-center justify-center shrink-0 group-hover:bg-brand-midnight group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Location</h4>
                    <span className="text-xl font-black text-brand-midnight tracking-tight">Canberra, Australia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 bg-brand-midnight text-white border border-slate-900">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-slate-light mb-6">Partnerships</div>
                <h3 className="text-xl font-black mb-6 uppercase tracking-tighter text-white">Strategic Collaborations.</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-light text-sm">
                   Interested in partnering with Websoul Digital? We collaborate with organisations that share our commitment to secure, high-trust delivery.
                </p>
                <a href="mailto:partners@websoul.com.au" className="flex items-center font-black text-[10px] uppercase tracking-[0.3em] border-b border-white/20 pb-3 self-start hover:border-white transition-all">
                  partner with us
                </a>
            </div>
          </div>

          <div className="bg-brand-surface p-10 md:p-16 border border-slate-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-midnight/5 -translate-y-1/2 translate-x-1/2"></div>
             
             <h3 className="text-2xl font-black text-brand-midnight mb-10 uppercase tracking-tighter">Engagement Inquiry</h3>
             <form className="space-y-8" id="contact-form">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-500" htmlFor="first-name">First Name</label>
                   <input type="text" id="first-name" className="w-full bg-white border border-slate-200 px-5 py-4 focus:outline-none focus:border-brand-midnight transition-all text-sm" placeholder="John" required />
                 </div>
                 <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-500" htmlFor="last-name">Last Name</label>
                   <input type="text" id="last-name" className="w-full bg-white border border-slate-200 px-5 py-4 focus:outline-none focus:border-brand-midnight transition-all text-sm" placeholder="Doe" required />
                 </div>
               </div>
               <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-500" htmlFor="email">Work Email</label>
                 <input type="email" id="email" className="w-full bg-white border border-slate-200 px-5 py-4 focus:outline-none focus:border-brand-midnight transition-all text-sm" placeholder="john@company.com.au" required />
               </div>
               <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-500" htmlFor="service">Operational Area</label>
                 <select id="service" className="w-full bg-white border border-slate-200 px-5 py-4 focus:outline-none focus:border-brand-midnight transition-all text-sm">
                    <option>Trust Services</option>
                    <option>Digital Consultancy</option>
                    <option>DISP Advisory</option>
                    <option>General Inquiry</option>
                 </select>
               </div>
               <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-500" htmlFor="message">Brief</label>
                 <textarea id="message" rows={4} className="w-full bg-white border border-slate-200 px-5 py-4 focus:outline-none focus:border-brand-midnight transition-all text-sm" placeholder="Outline your requirements..."></textarea>
               </div>
               <button type="submit" className="w-full btn-primary bg-brand-midnight text-white py-6 flex items-center justify-center font-black uppercase tracking-widest text-sm" id="submit-button">
                 Submit Briefing Request
                 <Send className="ml-4 h-4 w-4" />
               </button>
               <p className="text-[9px] text-slate-400 text-center uppercase tracking-[0.2em] mt-8 leading-relaxed">
                 All data is handled according to our secure information handling protocols. Responding within 24 business hours.
               </p>
             </form>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
