import { motion } from 'framer-motion'
import { ArrowRight, Check, TrendingUp, Users, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/layout/container'
import { TRUST_INDICATORS, HERO_STATS } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'
import { useCounter } from '@/hooks/useCounter'
import { fadeInLeft, fadeInRight, MotionDiv } from '@/components/ui/motion'

function StatCounter({ value, suffix, label }) {
  const { count, ref } = useCounter(value, 2000)
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-muted mt-1">{label}</div>
    </div>
  )
}

function FloatingCard({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white section-grid-bg">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <MotionDiv variants={fadeInLeft}>
              <Badge className="mb-6">Digital Marketing Agency</Badge>
            </MotionDiv>

            <MotionDiv variants={fadeInLeft} delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1]">
                Grow Your Business with{' '}
                <span className="text-gradient">Digital Marketing</span>{' '}
                That Delivers Results
              </h1>
            </MotionDiv>

            <MotionDiv variants={fadeInLeft} delay={0.2}>
              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl">
                We help small businesses generate more leads, increase sales, and grow their online presence through targeted advertising and high-converting marketing strategies.
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeInLeft} delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => scrollToSection('contact')}>
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="lg" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('about')}>
                  About Us
                </Button>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeInLeft} delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {TRUST_INDICATORS.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 text-success shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeInLeft} delay={0.5}>
              <div className="mt-10 grid grid-cols-3 gap-4 p-6 rounded-2xl border border-border bg-white/80 backdrop-blur-sm shadow-[var(--shadow-soft)]">
                {HERO_STATS.map((stat) => (
                  <StatCounter key={stat.label} {...stat} />
                ))}
              </div>
            </MotionDiv>
          </div>

          <MotionDiv variants={fadeInRight} className="relative hidden lg:block">
            <div className="relative mx-auto max-w-lg">
              <div className="rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] overflow-hidden">
                <div className="bg-background-secondary px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-xs text-muted ml-2">Campaign Dashboard</span>
                </div>
                <div className="p-6 space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Marketing analytics dashboard showing campaign performance metrics"
                    className="w-full h-48 object-cover rounded-xl"
                    loading="eager"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Leads', value: '+247%', icon: Users, color: 'text-primary' },
                      { label: 'ROAS', value: '4.2x', icon: TrendingUp, color: 'text-success' },
                      { label: 'Conv. Rate', value: '8.4%', icon: BarChart3, color: 'text-primary-light' },
                      { label: 'Ad Spend', value: '$12.4K', icon: BarChart3, color: 'text-muted' },
                    ].map((metric) => (
                      <div key={metric.label} className="p-3 rounded-xl bg-background-secondary border border-border">
                        <div className="flex items-center gap-2 mb-1">
                          <metric.icon className={`h-3.5 w-3.5 ${metric.color}`} />
                          <span className="text-xs text-muted">{metric.label}</span>
                        </div>
                        <span className="text-lg font-bold text-foreground">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <FloatingCard className="absolute -top-4 -right-8" delay={0.6}>
                <div className="px-4 py-3 rounded-xl bg-white border border-border shadow-[var(--shadow-card)] flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Leads Increased</p>
                    <p className="text-sm font-bold text-foreground">+247% this month</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="absolute -bottom-12 -left-8" delay={0.8}>
                <div className="px-4 py-3 rounded-xl bg-white border border-border shadow-[var(--shadow-card)] flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary-muted flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Campaign Performance</p>
                    <p className="text-sm font-bold text-foreground">Above target</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="absolute top-1/2 -right-12" delay={1}>
                <div className="px-4 py-3 rounded-xl bg-white border border-border shadow-[var(--shadow-card)]">
                  <p className="text-xs text-muted">Conversion Rate</p>
                  <p className="text-lg font-bold text-primary">8.4%</p>
                </div>
              </FloatingCard>
            </div>
          </MotionDiv>

          {/* Mobile hero visual */}
          <MotionDiv variants={fadeInRight} className="lg:hidden">
            <div className="rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Marketing analytics dashboard showing campaign performance metrics"
                className="w-full h-56 object-cover"
                loading="eager"
              />
              <div className="p-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'Leads', value: '+247%' },
                  { label: 'ROAS', value: '4.2x' },
                  { label: 'Conv. Rate', value: '8.4%' },
                  { label: 'Ad Spend', value: '$12.4K' },
                ].map((metric) => (
                  <div key={metric.label} className="p-3 rounded-xl bg-background-secondary border border-border text-center">
                    <span className="text-xs text-muted block">{metric.label}</span>
                    <span className="text-lg font-bold text-foreground">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  )
}
