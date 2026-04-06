import React from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Lightbulb, PenLine, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Выбери тему и формат',
    description:
      'Отвечаешь на несколько вопросов о своей нише и продукте. Платформа предлагает оптимальный формат эфира и готовую структуру.',
  },
  {
    icon: PenLine,
    number: '02',
    title: 'Собери запуск за 1–2 дня',
    description:
      'Берёшь шаблон презентации, добавляешь свой контент. Система генерирует прогрев: посты, сторис, сообщения — остаётся только отправить.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Проведи эфир и продай',
    description:
      'Следуешь сценарию внутри платформы. После эфира — автоматический дожим: серия касаний с теми, кто не купил сразу.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Анализируй и масштабируй',
    description:
      'Видишь, что сработало, сохраняешь лучшие запуски как шаблоны. Следующий запуск занимает не дни, а часы.',
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="Как это работает"
            title={
              <>
                От идеи до первых продаж —{' '}
                <span className="text-gradient">4 шага</span>
              </>
            }
            subtitle="Никакого хаоса. Только чёткая последовательность действий, которую ты повторяешь снова и снова."
            center
          />
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StepCard key={i} {...step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ icon: Icon, number, title, description, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`relative text-center transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon circle */}
      <div className="relative inline-flex w-[100px] h-[100px] items-center justify-center mb-6">
        <div className="absolute inset-0 rounded-full bg-bg-elevated border border-primary/20" />
        <div className="absolute inset-2 rounded-full bg-primary/10" />
        <Icon size={32} className="relative text-primary-light" />
        {/* Number badge */}
        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
          {index + 1}
        </span>
      </div>

      <h3 className="font-display font-semibold text-text mb-2 text-lg">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  )
}
