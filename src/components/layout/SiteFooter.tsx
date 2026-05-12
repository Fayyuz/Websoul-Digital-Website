import Link from 'next/link'
import { LogoMark } from '@/components/shared/LogoMark'
import { navigationItems } from '@/lib/constants'

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper selection:bg-paper selection:text-ink">
      <div className="container-premium py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <LogoMark size="sm" className="brightness-0 invert" />
              <span className="font-semibold text-lg tracking-tight uppercase">Websoul Digital</span>
            </div>
            <p className="text-body text-silver/60 max-w-sm mb-12">
              Empowering critical infrastructure and enterprise with sovereign-focused trust, security, and digital delivery.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-silver/40">Headquarters</p>
              <p className="text-sm text-silver/60">Canberra, Australian Capital Territory</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-silver/40">Capability</p>
              <ul className="space-y-4">
                <li><Link href="/trust-services" className="text-sm text-silver/60 hover:text-paper transition-colors">Trust Services</Link></li>
                <li><Link href="/digital-consultancy" className="text-sm text-silver/60 hover:text-paper transition-colors">Digital Delivery</Link></li>
                <li><Link href="/disp-advisory" className="text-sm text-silver/60 hover:text-paper transition-colors">DISP Advisory</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-silver/40">Company</p>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-sm text-silver/60 hover:text-paper transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-sm text-silver/60 hover:text-paper transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-silver/60 hover:text-paper transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-silver/40">Direct</p>
              <ul className="space-y-4">
                <li><a href="mailto:contact@websoul.digital" className="text-sm text-silver/60 hover:text-paper transition-colors">contact@websoul.digital</a></li>
                <li>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-charcoal rounded text-[10px] uppercase tracking-widest text-silver/80 border border-charcoal">DISP Accredited</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal/50 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase font-medium tracking-[0.2em] text-silver/30">
          <p>© {currentYear} Websoul Digital. Australian Owned & Operated.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-paper transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-paper transition-colors">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
