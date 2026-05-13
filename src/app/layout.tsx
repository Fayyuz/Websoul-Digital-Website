import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SkipLink } from '@/components/ui/SkipLink'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: {
    default: 'Websoul Digital | Trusted Capability for a More Secure Australia',
    template: '%s | Websoul Digital',
  },
  description: 'Websoul Digital provides Trust Services, Digital Consultancy, and DISP Advisory. Australian-owned, Canberra-based consultancy for trusted environments.',
}

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={cn(inter.variable, outfit.variable)}>
      <body className="flex flex-col min-h-screen bg-paper text-ink font-sans">
        <SkipLink />
        <SiteHeader />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
