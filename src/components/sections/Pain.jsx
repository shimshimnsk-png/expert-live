import React from 'react'
import { painPoints } from '../../data/pain'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function PainCard({ icon: Icon, title, description, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`group relative bg-bg-card border border-border rounded-2xl p-6 transition-all duration-500 hover:border-red-500/30 hover:bg-bg-elevated ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
        <Icon size={18} className="text-red-400" />
      </div>
      <h3 className="font-display font-semibold text-text mb-2">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function Pain() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-padding bg-bg-surface relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="Это знакомо"
            title={
              <>
                Почему эксперты застревают{' '}
                <span className="text-gradient-soft">на одном уровне дохода</span>
              </>
            }
            subtitle="Не потому что мало знаний. А потому что запуск — это хаос, который пожирает время, деньги и энергию."
            center
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point, i) => (
            <PainCard key={i} {...point} delay={i * 80} />
          ))}
        </div>

        {/* Bottom emphasis */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-lg">
            Знакомо хотя бы одно?{' '}
            <span className="text-text font-semibold">Значит, это не твоя проблема — это проблема системы.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
