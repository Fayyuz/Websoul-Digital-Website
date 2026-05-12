import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://websoul.digital'),
  title: {
    default: 'Websoul Digital | Australian Cyber & Digital Consultancy',
    template: '%s | Websoul Digital',
  },
  description: 'Enterprise-grade digital integrity, trust services, and DISP advisory. Australian-owned, Silicon Valley rigor.',
  keywords: ['cyber security', 'DISP', 'trust services', 'digital consultancy', 'Australia'],
  authors: [{ name: 'Websoul Digital' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://websoul.digital',
    siteName: 'Websoul Digital',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1 },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0B0D',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
