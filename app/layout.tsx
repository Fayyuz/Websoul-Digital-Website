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
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
