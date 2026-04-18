import React from 'react'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2"
            aria-label="LaunchFlow — наверх"
          >
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-display font-bold text-text">
              Launch<span className="text-primary-light">Flow</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <a href="#features" className="hover:text-text transition-colors">Возможности</a>
            <a href="#pricing" className="hover:text-text transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-text transition-colors">FAQ</a>
            <a href="#cta" className="hover:text-text transition-colors">Начать</a>
          </nav>

          <p className="text-xs text-text-faint">
            © 2026 LaunchFlow. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
