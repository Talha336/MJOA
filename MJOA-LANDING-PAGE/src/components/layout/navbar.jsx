import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/lib/constants'
import { cn, scrollToSection } from '@/lib/utils'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import logo1 from '@/assets/logo1.png'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(20)
  const sectionIds = NAV_LINKS.map((l) => l.href)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-16 md:h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <button
  onClick={() => handleNavClick('home')}
  className="flex items-center gap-3 group"
  aria-label="MJOA Home"
>
  <img
    src={logo1}
    alt="MJOA Consulting"
    className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />

</button>
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                    activeSection === link.href ? 'text-primary' : 'text-muted hover:text-foreground'
                  )}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button onClick={() => handleNavClick('contact')} size="default">
              Book Free Consultation
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl hover:bg-background-secondary transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-xl font-bold">MJOA</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-xl hover:bg-background-secondary">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'text-left px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      activeSection === link.href ? 'bg-primary-muted text-primary' : 'text-foreground hover:bg-background-secondary'
                    )}
                  >
                    {link.label}
                  </button>
                ))}
                <Button onClick={() => handleNavClick('contact')} className="mt-4 w-full">
                  Book Free Consultation
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
