import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  audience: string
  why: string
  href: string
}

export const ServiceCard = ({ title, description, audience, why, href }: ServiceCardProps) => {
  return (
    <div className="group relative bg-paper border border-silver rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-charcoal/20">
      <h3 className="text-h3 font-display font-semibold mb-3">{title}</h3>
      <p className="text-body text-slate mb-4">{description}</p>
      <div className="space-y-2 mb-6">
        <p className="text-sm font-medium text-ink">{audience}</p>
        <p className="text-sm text-slate">{why}</p>
      </div>
      <Link 
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:gap-3 transition-all"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
