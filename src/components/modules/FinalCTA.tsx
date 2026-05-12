import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const FinalCTA = () => {
  return (
    <Section background="ink" spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto text-center py-12 md:py-20 border border-white/10 rounded-[3rem] relative overflow-hidden">
          {/* Background subtle texture or pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="absolute top-0 right-0 w-[40%] h-[40%] border border-white rounded-full translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 left-0 w-[30%] h-[30%] border border-white rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <div className="inline-block mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-paper/40">Engagement</span>
            </div>
            <h2 className="text-h1 font-display font-bold mb-6 text-paper tracking-tight">
              Trusted capability starts here.
            </h2>
            <p className="text-body-lg text-paper/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Partner with an integrated consultancy that understands the intersection of security, workforce trust, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" className="bg-paper text-ink hover:bg-silver h-14 px-12">
                Consult our Specialists
              </Button>
              <Button href="/about" variant="ghost" className="text-paper hover:bg-white/10 h-14 px-10">
                Company Profile
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
