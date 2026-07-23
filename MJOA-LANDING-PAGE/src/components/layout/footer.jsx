import { ArrowUp } from 'lucide-react'
import { Container } from './container'
import { scrollToSection } from '@/lib/utils'
import { SOCIAL_LINKS } from '@/lib/constants'
import { SOCIAL_ICON_MAP } from '@/components/ui/social-icons'

export function Footer() {
  const footerLinks = {
    Quick: [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Services', id: 'services' },
      { label: 'Contact', id: 'contact' },
    ],
    Services: [
      { label: 'Google Ads', id: 'services' },
      { label: 'Facebook Ads', id: 'services' },
      { label: 'Instagram Ads', id: 'services' },
      { label: 'Landing Pages', id: 'services' },
    ],
    Legal: [
      { label: 'Privacy Policy', id: 'contact' },
      { label: 'Terms of Service', id: 'contact' },
    ],
  }

  return (
    <footer className="bg-foreground text-white/80" role="contentinfo">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-bold text-sm">M</div>
              <span className="text-xl font-bold text-white">MJOA</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Helping small businesses grow through targeted digital advertising and high-converting marketing strategies.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title} Links</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} MJOA Consulting. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-primary group-hover:-translate-y-0.5">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  )
}
