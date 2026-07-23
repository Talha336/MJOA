import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/utils'
import { MotionDiv } from '@/components/ui/motion'

export function CTASection() {
  return (
    <Section variant="white" className="relative overflow-hidden">
      <div className="absolute inset-0 section-grid-bg opacity-50" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <MotionDiv className="relative text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Ready to Grow Your Business?
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
          Book a free consultation today and let&apos;s discuss how digital advertising can generate more leads and sales for your business.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollToSection('contact')}>
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </MotionDiv>
    </Section>
  )
}
