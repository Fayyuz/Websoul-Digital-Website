import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ArrowRight } from 'lucide-react'

const insights = [
  {
    title: 'The State of DISP Readiness for Australian SMEs in 2026',
    category: 'Advisory',
    summary: 'Practical security maturity, governance, personnel and cyber readiness for defence-adjacent suppliers.',
    href: '/insights/disp-readiness-2026'
  },
  {
    title: 'Why Workforce Trust Matters in Regulated Digital Delivery',
    category: 'Trust Services',
    summary: 'Trusted onboarding, identity assurance, privacy-aware verification and secure operating models.',
    href: '/insights/workforce-trust'
  },
  {
    title: 'Secure-by-Design Delivery: Turning ISM and Essential Eight into Controls',
    category: 'Digital Delivery',
    summary: 'Translating cyber frameworks into delivery backlogs, governance checkpoints and evidence.',
    href: '/insights/secure-by-design'
  }
]

export const InsightsPreview = () => {
  return (
    <Section background="mist" spacing="lg" className="border-y border-silver">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60">Knowledge & Leadership</span>
            </div>
            <h2 className="text-h1 font-display font-bold tracking-tight text-ink">
              Adherent to the latest<br />governance standards.
            </h2>
          </div>
          <Link 
            href="/insights" 
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-ink hover:text-slate transition-colors"
          >
            Explore all Insights
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {insights.map((article, index) => (
            <article key={index} className="flex flex-col h-full group">
              <div className="mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-ink/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate/60">
                  {article.category}
                </span>
              </div>
              <h3 className="text-h4 font-display font-bold text-ink mb-4 group-hover:text-slate transition-colors leading-tight">
                <Link href="/insights">{article.title}</Link>
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-8">
                {article.summary}
              </p>
              <div className="mt-auto pt-6 border-t border-silver">
                <Link 
                  href="/insights" 
                  className="text-[10px] font-bold uppercase tracking-widest text-ink/40 group-hover:text-ink transition-colors"
                >
                  Read Analysis
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
