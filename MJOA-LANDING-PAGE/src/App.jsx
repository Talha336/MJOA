import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { ScrollProgress, BackToTop, FloatingContact, StickyMobileCTA } from '@/components/floating/utilities'

const Introduction = lazy(() => import('@/components/sections/introduction').then(m => ({ default: m.Introduction })))
const Services = lazy(() => import('@/components/sections/services').then(m => ({ default: m.Services })))
const WhyChooseUs = lazy(() => import('@/components/sections/why-choose-us').then(m => ({ default: m.WhyChooseUs })))
const Process = lazy(() => import('@/components/sections/process').then(m => ({ default: m.Process })))
const CTASection = lazy(() => import('@/components/sections/cta-section').then(m => ({ default: m.CTASection })))
const Industries = lazy(() => import('@/components/sections/industries').then(m => ({ default: m.Industries })))
const Trust = lazy(() => import('@/components/sections/trust').then(m => ({ default: m.Trust })))
const FAQ = lazy(() => import('@/components/sections/faq').then(m => ({ default: m.FAQ })))
const Contact = lazy(() => import('@/components/sections/contact').then(m => ({ default: m.Contact })))

function SectionFallback() {
  return <div className="py-24" aria-hidden="true" />
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Introduction />
          <Services />
          <CTASection />
          <WhyChooseUs />
          <Process />
          <Industries />
          <Trust />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
      <StickyMobileCTA />
    </>
  )
}

export default App
