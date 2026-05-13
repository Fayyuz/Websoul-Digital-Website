'use client'

import Link from 'next/link'
import { LogoMark } from '@/components/shared/LogoMark'

const footerLinks = {
  services: [
    { label: 'Trust Services', href: '/trust-services' },
    { label: 'Digital Consultancy', href: '/digital-consultancy' },
    { label: 'DISP Advisory', href: '/disp-advisory' },
  ],
  resources: [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Security', href: '/security' },
    { label: 'Capability Statement', href: '/capability-statement' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Responsible Disclosure', href: '/security' },
  ],
}

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-silver bg-paper">
      <div className="container-premium py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <LogoMark size="lg" variant="dark" />
              <div className="flex flex-col">
                <span className="font-bold text-[11px] tracking-[0.5em] text-ink uppercase leading-tight">Websoul Digital</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[1px] w-4 bg-silver" />
                  <span className="text-[8px] font-bold tracking-[0.6em] text-slate/60 uppercase">Australia</span>
                  <div className="h-[1px] w-4 bg-silver" />
                </div>
              </div>
            </div>
            <p className="text-sm text-slate max-w-md">
              Trusted capability for a more secure Australia.
            </p>
            <div className="mt-4 text-xs text-slate space-y-1">
              <p>Websoul Digital Pty Ltd</p>
              <p>ABN 44 656 760 146</p>
              <p>Canberra, ACT, Australia</p>
              <p>
                <a href="mailto:hello@websoul.com.au" className="hover:text-ink transition-colors">
                  hello@websoul.com.au
                </a>
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-ink mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate hover:text-ink transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-ink mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate hover:text-ink transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-ink mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate hover:text-ink transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate hover:text-ink transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-silver flex flex-col md:flex-row justify-between gap-4 text-xs text-slate">
          <p>© {currentYear} Websoul Digital Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
            <Link href="/security" className="hover:text-ink">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
