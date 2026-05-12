import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import { LogoMark } from './LogoMark';

const footerLinks = {
  services: [
    { name: 'Trust Services', href: '/trust-services' },
    { name: 'Digital Consultancy', href: '/digital-consultancy' },
    { name: 'DISP Advisory', href: '/disp-advisory' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Capability Statement', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-midnight text-slate-500 pt-32 pb-16 overflow-hidden relative border-t border-slate-900" id="main-footer">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-10">
              <LogoMark inverse />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-xs font-light">
              Trusted people. Secure delivery. Stronger organisations. Delivering high-trust digital capability for complex environments.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-800 rounded-sm hover:border-slate-500 hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-10">Primary Services</h3>
            <ul className="space-y-5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-500 hover:text-white transition-colors uppercase tracking-widest font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-10">Capabilities</h3>
            <ul className="space-y-5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-500 hover:text-white transition-colors uppercase tracking-widest font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-10">Global Presence</h3>
            <ul className="space-y-8">
              <li className="flex gap-5 items-start">
                <MapPin className="h-4 w-4 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Australia</span>
                  <span className="text-xs text-slate-600">Canberra Head Office</span>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <Mail className="h-4 w-4 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Engagement</span>
                  <a href="mailto:hello@websoul.com.au" className="text-xs text-slate-600 hover:text-white transition-colors">hello@websoul.com.au</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-700">
              © {new Date().getFullYear()} Websoul Digital Pty Ltd. ABN 89 635 159 364
            </p>
            <p className="text-[10px] uppercase tracking-widest text-slate-800">
              Websoul Digital is a 100% Australian Owned and Operated Business.
            </p>
          </div>
          
          <div className="flex gap-10">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.href} className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
