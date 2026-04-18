import React, { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Menu, X, Zap } from 'lucide-react'
import { useLeadModal } from '../../context/LeadModalContext'

const navLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openLeadModal } = useLeadModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 group"
            aria-label="LaunchFlow — наверх"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary-light transition-colors">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg text-text">
              Launch<span className="text-primary-light">Flow</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary" size="sm" href="#pricing">
              Тарифы
            </Button>
            <Button variant="primary" size="sm" onClick={() => openLeadModal('Header')}>
              Попробовать бесплатно
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-muted hover:text-text p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-surface border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="md"
              className="w-full mt-2"
              onClick={() => {
                setMenuOpen(false)
                openLeadModal('Header-Mobile')
              }}
            >
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
