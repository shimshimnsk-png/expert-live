import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useLeadModal } from '../../context/LeadModalContext'

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const { openLeadModal } = useLeadModal()

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-bg to-bg-surface pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Icon */}
          <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 items-center justify-center mb-8 animate-glow-pulse">
            <Zap size={28} className="text-primary-light" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
            Первый самостоятельный запуск —{' '}
            <span className="text-gradient">уже через 2 дня</span>
          </h2>

          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Начни бесплатно. Без продюсера, без команды, без хаоса.
            Просто ты, твоя экспертиза и система, которая знает, что делать дальше.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="primary" size="lg" onClick={() => openLeadModal('FinalCTA')}>
              Начать 14 дней бесплатно
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" href="#how-it-works">
              Посмотреть демо
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              Карта не нужна
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              Отмена в любое время
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              Поддержка за 2 часа
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              1 200+ экспертов уже запускают
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
