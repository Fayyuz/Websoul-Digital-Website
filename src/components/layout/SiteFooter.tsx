import React from 'react';
import Link from 'next/link';
import { LogoMark } from './LogoMark';
import { footerNavigation } from '@/data/navigation';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0F] text-white border-t border-white/5" id="site-footer">
      <div className="section-container py-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-2">
            <LogoMark inverse className="mb-10" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-sans font-light">
              Websoul Digital is an Australian-owned consultancy supporting national interest industries with specialist trust services, digital delivery, and security governance.
            </p>
            <div className="mt-12 flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-700">Strategic HQ</span>
              <span className="text-xs font-bold text-white tracking-widest uppercase">Canberra • ACT • Australia</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white opacity-20 mb-10">Navigation</h4>
            <ul className="space-y-6">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs text-slate-500 hover:text-white transition-colors tracking-widest uppercase font-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white opacity-20 mb-10">Capabilities</h4>
            <ul className="space-y-6">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs text-slate-500 hover:text-white transition-colors tracking-widest uppercase font-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-slate-700 font-bold">
            © {currentYear} Websoul Digital Pty Ltd. ABN 29 168 626 507
          </div>
          <div className="flex gap-10">
            {footerNavigation.legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-[10px] uppercase tracking-[0.3em] text-slate-700 hover:text-white transition-colors font-bold">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
