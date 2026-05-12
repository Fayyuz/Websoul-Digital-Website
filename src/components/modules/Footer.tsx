'use client'

import React from 'react'
import Link from 'next/link'
import { Shield, Mail, MapPin, ExternalLink } from 'lucide-react'

const navigation = {
  capabilities: [
    { name: 'Trust Services', href: '/capabilities#trust' },
    { name: 'Digital Consultancy', href: '/capabilities#digital' },
    { name: 'DISP Advisory', href: '/capabilities#disp' },
    { name: 'Capability Statement', href: '/capabilities' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Trust Status', href: '/trust-status' },
    { name: 'Security Policy', href: '/privacy' },
  ],
  legal: [
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Security', href: '/security' },
  ],
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-pure border-t border-brand-silver/30 px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-ink text-brand-pure flex items-center justify-center rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-brand-ink uppercase">Websoul Digital</span>
            </Link>
            <p className="text-body text-brand-muted max-w-sm leading-relaxed">
              Australian-owned consultancy delivering mission-critical ICT and security advisory for regulated environments and national infrastructure.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               {['LinkedIn', 'Twitter'].map(social => (
                  <button key={social} className="w-10 h-10 rounded-full border border-brand-silver/50 flex items-center justify-center text-brand-muted hover:bg-brand-silver/20 transition-all">
                     <span className="sr-only">{social}</span>
                     <div className="w-1.5 h-1.5 bg-brand-muted rounded-full"></div>
                  </button>
               ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-caption font-bold uppercase tracking-widest text-brand-ink mb-8">Capabilities</h4>
            <ul className="space-y-4">
              {navigation.capabilities.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-caption text-brand-muted hover:text-accent-teal transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-caption font-bold uppercase tracking-widest text-brand-ink mb-8">Resources</h4>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-caption text-brand-muted hover:text-accent-teal transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-caption font-bold uppercase tracking-widest text-brand-ink mb-8">Operations HQ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent-teal shrink-0" />
                <p className="text-caption text-brand-muted">
                  Nishi Building, 2 Phillip Law St<br/>
                  Canberra, ACT 2601<br/>
                  Australia
                </p>
              </div>
              <div className="flex gap-4">
                 <Mail className="w-5 h-5 text-accent-teal shrink-0" />
                 <a href="mailto:hello@websoul.digital" className="text-caption text-brand-muted hover:text-accent-teal transition-all">
                    hello@websoul.digital
                 </a>
              </div>
            </div>
            <div className="mt-8 p-4 bg-brand-silver/30 rounded-xl border border-brand-silver/50">
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-signal-success rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink">Operational Status</span>
               </div>
               <Link href="/trust-status" className="group flex items-center justify-between text-[10px] text-brand-muted hover:text-brand-ink transition-all">
                  All systems mission ready <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
               </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-silver/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">
            © {currentYear} Websoul Digital Pty Ltd. ABN 29 168 626 507
          </div>
          <div className="flex gap-10">
            {navigation.legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-[10px] uppercase tracking-widest text-brand-muted hover:text-accent-teal transition-colors font-bold">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
