import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, MessageCircle, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent" aria-hidden="true">
      <motion.div
        className="h-full bg-primary origin-left"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-border text-muted shadow-[var(--shadow-card)] transition-all duration-300 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 lg:bottom-8"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export function FloatingContact() {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={() => scrollToSection('contact')}
      className="fixed bottom-6 right-6 z-40 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-primary-light hover:scale-105 hover:shadow-[0_6px_28px_rgba(37,99,235,0.5)]"
      aria-label="Contact us"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.button>
  )
}

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/90 backdrop-blur-xl border-t border-border lg:hidden"
        >
          <Button className="w-full" size="lg" onClick={() => scrollToSection('contact')}>
            <Calendar className="h-4 w-4" />
            Book Free Consultation
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
