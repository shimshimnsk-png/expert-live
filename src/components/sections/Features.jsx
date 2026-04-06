import React from 'react'
import { features } from '../../data/features'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function FeatureCard({ icon: Icon, title, description, tag, index }) {
  const { ref, isVisible } = useScrollAnimation(0.08)

  return (
    <div
      ref={ref}
      className={`group relative bg-bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:bg-bg-elevated transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Tag */}
      <span className="inline-block text-xs font-medium text-primary-light bg-primary/10 border border-primary/15 rounded-full px-2.5 py-0.5 mb-4">
        {tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:scale-105 transition-all">
        <Icon size={22} className="text-primary-light" />
      </div>

      <h3 className="font-display font-semibold text-text mb-2 text-lg">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>

      {/* Hover gradient corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

export function Features() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="features" className="section-padding bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="Возможности"
            title={
              <>
                Всё, что нужно для запуска —{' '}
                <span className="text-gradient">уже внутри</span>
              </>
            }
            subtitle="Не набор инструментов, а цельная система. Каждая функция решает конкретную задачу в цепочке запуска."
            center
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
