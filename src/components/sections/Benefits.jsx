import React from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Shield, Clock, Wallet, Layers, Sparkles, Lock } from 'lucide-react'

const benefits = [
  {
    icon: Wallet,
    title: 'Оставляешь 100% дохода',
    description: 'Никакого продюсера — никакого процента. Всё, что ты заработала, принадлежит тебе.',
  },
  {
    icon: Clock,
    title: 'Готовишься в 10 раз быстрее',
    description: 'Шаблоны, сценарии и прогрев — готовы. Запуск занимает 1–2 дня вместо 2–3 недель.',
  },
  {
    icon: Layers,
    title: 'Система, которая масштабируется',
    description: 'Каждый запуск — это кирпич. Со временем ты строишь машину, которая работает без твоего постоянного участия.',
  },
  {
    icon: Shield,
    title: 'Никакой зависимости',
    description: 'Никто не может уйти в отпуск в день запуска. Ты сама управляешь каждым этапом.',
  },
  {
    icon: Sparkles,
    title: 'Профессиональный результат',
    description: 'Презентации, которые выглядят как от дизайнера. Прогрев, который написан как у маркетолога.',
  },
  {
    icon: Lock,
    title: 'Знания остаются с тобой',
    description: 'Ты сама понимаешь, что работает в твоих запусках. Это не чужой опыт — это твоя система.',
  },
]

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="Преимущества"
            title={
              <>
                Что ты получаешь,{' '}
                <span className="text-gradient">когда запускаешь сама</span>
              </>
            }
            subtitle="Не просто экономию на продюсере. А новое ощущение от своего бизнеса."
            center
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item, i) => (
            <BenefitCard key={i} {...item} index={i} />
          ))}
        </div>

        {/* Big metric strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '2× ', label: 'больше дохода с запуска в среднем' },
            { value: '10 ч', label: 'экономии на каждый запуск' },
            { value: '0 ₽', label: 'на команду продюсеров' },
            { value: '14 дн', label: 'бесплатного доступа' },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-bg-card border border-border rounded-2xl p-5">
              <p className="font-display text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon: Icon, title, description, index }) {
  const { ref, isVisible } = useScrollAnimation(0.08)

  return (
    <div
      ref={ref}
      className={`group flex gap-4 bg-bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:bg-bg-elevated transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors mt-0.5">
        <Icon size={18} className="text-primary-light" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-text mb-1">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
