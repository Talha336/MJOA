import {
  Hammer, Building2, Stethoscope, UtensilsCrossed, Sparkles, Home, ShoppingBag, Briefcase, Rocket, Store,
} from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/section'
import { INDUSTRIES } from '@/lib/constants'
import { StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion'

const iconMap = {
  Hammer, Building2, Stethoscope, UtensilsCrossed, Sparkles, Home, ShoppingBag, Briefcase, Rocket, Store,
}

export function Industries() {
  return (
    <Section id="industries" variant="white">
      <SectionHeader
        badge="Industries"
        title="Industries We Help"
        description="Specialized marketing strategies tailored to the unique needs of your industry."
      />

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {INDUSTRIES.map((industry) => {
          const Icon = iconMap[industry.icon]
          return (
            <StaggerItem key={industry.title} variants={fadeInUp}>
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 cursor-default">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={`${industry.title} digital marketing`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-sm">{industry.title}</h3>
                </div>
              </div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </Section>
  )
}
