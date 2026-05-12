import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://websoul.com.au'),
  title: {
    default: 'Websoul Digital | Secure Delivery & Trusted Capability',
    template: '%s | Websoul Digital',
  },
  description: 'An Australian-owned consultancy combining secure digital delivery, workforce trust pathways and DISP readiness for regulated and defence-aware environments.',
  keywords: ['trust services', 'digital consultancy', 'DISP advisory', 'cyber security', 'Australian consultancy', 'secure delivery', 'Canberra consultancy'],
  authors: [{ name: 'Websoul Digital' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://websoul.com.au',
    siteName: 'Websoul Digital',
    title: 'Websoul Digital | Secure Delivery & Trusted Capability',
    description: 'Trusted capability for secure Australian environments.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Websoul Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websoul Digital | Secure Delivery & Trusted Capability',
    description: 'Trusted capability for secure Australian environments.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="flex flex-col min-h-screen font-sans antialiased text-ink">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-paper focus:text-ink focus:border focus:border-silver focus:rounded-lg">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
