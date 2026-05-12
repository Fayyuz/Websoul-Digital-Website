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
  title: {
    default: 'Websoul Digital | Trusted Capability for a More Secure Australia',
    template: '%s | Websoul Digital',
  },
  description: 'Websoul Digital provides Trust Services, Digital Consultancy, and DISP Advisory. Australian-owned, Canberra-based consultancy for trusted environments.',
  keywords: ['trust services', 'digital consultancy', 'DISP advisory', 'cyber security', 'Australian consultancy'],
  authors: [{ name: 'Websoul Digital' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://websoul.digital',
    siteName: 'Websoul Digital',
    title: 'Websoul Digital',
    description: 'Trusted capability for a more secure Australia.',
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
      <body className="flex flex-col min-h-screen font-sans">
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
