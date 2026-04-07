import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const before = [
  'Ищешь продюсера месяцами',
  'Платишь 30–50% от выручки',
  'Готовишься 2–3 недели',
  'Каждый раз с нуля',
  'Зависишь от команды',
]

const after = [
  'Запускаешь сама, когда хочешь',
  '100% дохода остаётся тебе',
  'Готовишься за 1–2 дня',
  'Шаблоны сохраняются навсегда',
  'Полная независимость',
]

export function Solution() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="Решение"
            title={
              <>
                LaunchFlow — это твой{' '}
                <span className="text-gradient">продающий отдел</span>
                <br />в одном приложении
              </>
            }
            subtitle="Платформа, которая берёт на себя всё, что мешает тебе зарабатывать: структуру, дизайн, прогрев, продажи после эфира."
            center
          />
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Before */}
          <div className="bg-bg-card border border-red-500/15 rounded-2xl p-6">
            <p className="text-red-400 font-semibold text-sm mb-4 uppercase tracking-widest">Было</p>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-muted">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400 text-xs">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-bg-card border border-primary/20 rounded-2xl p-6 card-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <p className="text-primary-light font-semibold text-sm mb-4 uppercase tracking-widest">Стало</p>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text">
                  <CheckCircle2 size={18} className="text-primary-light flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big statement */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-display font-semibold text-text leading-snug mb-8">
            «Ты — эксперт. Твоя задача — давать ценность.{' '}
            <span className="text-gradient">Наша задача — чтобы за это платили.»</span>
          </blockquote>
          <Button variant="primary" size="lg" href="https://tally.so/r/GxDZxQ" target="_blank">
            Попробовать бесплатно
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
