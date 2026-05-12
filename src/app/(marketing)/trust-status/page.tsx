'use client'

import React from 'react'
import { SiteHeader } from '@/components/modules/SiteHeader'
import { Footer } from '@/components/modules/Footer'
import { FadeIn } from '@/components/animations/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { CheckCircle2, Clock, ShieldCheck, Server } from 'lucide-react'

const systems = [
  { name: 'Core Infrastructure', status: 'operational', uptime: '99.99%' },
  { name: 'Secure Database Layer', status: 'operational', uptime: '100%' },
  { name: 'Personnel Verification Engine', status: 'operational', uptime: '99.95%' },
  { name: 'DISP Compliance Service', status: 'operational', uptime: '100%' },
  { name: 'Digital Advisory API', status: 'operational', uptime: '99.98%' },
]

export default function TrustStatusPage() {
  const lastUpdated = new Date().toLocaleTimeString()

  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32">
        <section className="px-6 md:px-12 py-20">
           <div className="max-w-7xl mx-auto">
              <FadeIn direction="up">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                       <Badge variant="premium" className="mb-6">Real-time Assurance</Badge>
                       <h1 className="text-display-2 font-bold tracking-tight">Trust Status</h1>
                       <p className="text-body-lg text-brand-muted mt-4">Operational transparency across our critical consulting engines.</p>
                    </div>
                    <div className="bg-signal-success/10 border border-signal-success/20 px-6 py-4 rounded-2xl flex items-center gap-4">
                       <div className="w-3 h-3 bg-signal-success rounded-full animate-pulse"></div>
                       <span className="text-sm font-bold text-signal-success uppercase tracking-widest">All Systems Operational</span>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <StatusCard icon={ShieldCheck} label="Security State" value="Hardened" color="teal" />
                    <StatusCard icon={Clock} label="System Latency" value="< 45ms" color="teal" />
                    <StatusCard icon={Server} label="Sovereign Loc" value="Australia" color="ink" />
                    <StatusCard icon={CheckCircle2} label="Last Audit" value="Apr 2024" color="teal" />
                 </div>

                 <div className="bg-brand-pure border border-brand-silver/50 rounded-3xl overflow-hidden shadow-sm">
                    <div className="px-8 py-6 bg-brand-silver/10 border-b border-brand-silver/30 flex items-center justify-between">
                       <h3 className="font-bold text-brand-ink uppercase tracking-widest text-xs">Operational Metrics</h3>
                       <span className="text-[10px] text-brand-muted font-mono uppercase">Last check: {lastUpdated}</span>
                    </div>
                    <div className="divide-y divide-brand-silver/30">
                       {systems.map((system) => (
                          <div key={system.name} className="px-8 py-6 flex items-center justify-between hover:bg-brand-silver/5 transition-colors">
                             <div className="flex items-center gap-4">
                                <span className="font-medium text-brand-ink">{system.name}</span>
                                <span className="text-[10px] font-mono text-brand-muted px-2 py-0.5 bg-brand-silver rounded uppercase">{system.uptime}</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-signal-success uppercase tracking-widest">Operational</span>
                                <div className="w-2 h-2 bg-signal-success rounded-full"></div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="mt-16 text-center">
                    <p className="text-caption text-brand-muted max-w-lg mx-auto">
                       Detailed operational logs and historical performance data are available to verified partners via the secure liaison portal.
                    </p>
                 </div>
              </FadeIn>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface StatusCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

function StatusCard({ icon: Icon, label, value, color }: StatusCardProps) {
   return (
      <div className="bg-brand-pure border border-brand-silver/50 p-8 rounded-2xl hover:border-accent-teal transition-all group">
         <Icon className="w-8 h-8 text-accent-teal mb-4 group-hover:scale-110 transition-transform" />
         <p className="text-caption text-brand-muted uppercase tracking-wider mb-1">{label}</p>
         <p className="text-2xl font-bold text-brand-ink tracking-tight">{value}</p>
      </div>
   )
}
