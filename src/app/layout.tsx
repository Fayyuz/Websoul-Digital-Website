import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SkipLink } from '@/components/ui/SkipLink'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Websoul Digital | Trusted Capability for a More Secure Australia',
    template: '%s | Websoul Digital',
  },
  description: 'Websoul Digital provides Trust Services, Digital Consultancy, and DISP Advisory. Australian-owned, Canberra-based consultancy for trusted environments.',
  keywords: ['trust services', 'digital consultancy', 'DISP advisory', 'cyber security', 'Australian consultancy', 'Essential Eight', 'ISM'],
  authors: [{ name: 'Websoul Digital Pty Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://websoul.com.au',
    siteName: 'Websoul Digital',
    title: 'Websoul Digital',
    description: 'Trusted capability for a more secure Australia.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html lang="en-AU" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
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
