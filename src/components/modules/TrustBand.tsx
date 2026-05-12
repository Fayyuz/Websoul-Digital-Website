import { Container } from '@/components/ui/Container'
import { trustIndicators } from '@/lib/constants'

export const TrustBand = () => {
  return (
    <div className="border-y border-silver bg-mist/50 py-6">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">Credential Indicators</span>
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-ink/20" />
              <span className="text-xs font-medium tracking-tight text-slate group">
                {indicator}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
