import {
  Search, Megaphone, Camera, Briefcase, Play, Music2, MapPin, Layout, ArrowRight,
} from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/section'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'
import { StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion'

const iconMap = { Search, Facebook: Megaphone, Instagram: Camera, Linkedin: Briefcase, Youtube: Play, Music2, MapPin, Layout }

export function Services() {
  return (
    <Section id="services" variant="white">
      <SectionHeader
        badge="Our Services"
        title="Full-Spectrum Digital Advertising"
        description="From search to social, we manage every channel your customers use — with campaigns built to convert."
      />

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon]
          return (
            <StaggerItem key={service.title} variants={fadeInUp}>
              <Card className="group h-full hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 cursor-default">
                <CardContent className="p-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                    <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
                  <Button
                    variant="link"
                    className="mt-4 p-0 h-auto font-semibold group/btn"
                    onClick={() => scrollToSection('contact')}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </Section>
  )
}
