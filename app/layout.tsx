import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: {
    default: "Websoul Digital | Trusted People. Secure Delivery.",
    template: "%s | Websoul Digital",
  },
  description: "Websoul Digital is an Australian-owned consultancy supporting trust services, digital delivery, cyber assurance and DISP readiness for government, defence and regulated sectors.",
  keywords: ["Digital Consultancy", "Cyber Security", "DISP Advisory", "Trust Services", "Canberra", "Government ICT"],
  authors: [{ name: "Websoul Digital" }],
  robots: "index, follow",
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://websoul.com.au',
    siteName: 'Websoul Digital',
    title: 'Websoul Digital | Trusted People. Secure Delivery.',
    description: 'High-trust ICT consultancy and security advisory for Australia\'s most sensitive and regulated operating environments.',
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
    title: 'Websoul Digital | Trusted People. Secure Delivery.',
    description: 'High-trust ICT consultancy and security advisory for Australia\'s most sensitive and regulated operating environments.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}>
      <body className="font-sans bg-white text-slate-900 min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
