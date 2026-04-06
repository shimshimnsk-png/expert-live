import React from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { CheckCircle2, XCircle } from 'lucide-react'

const audiences = [
  {
    emoji: '🧠',
    title: 'Психолог',
    description: 'Проводишь разборы, вебинары по темам отношений, тревоги, самооценки и хочешь продавать программы через эфиры.',
  },
  {
    emoji: '🌿',
    title: 'Коуч',
    description: 'Работаешь с мышлением, карьерой или целями. Знаешь свой метод, но не знаешь, как упаковать его в продающий эфир.',
  },
  {
    emoji: '✨',
    title: 'Наставник',
    description: 'Ведёшь наставничество в своей нише и хочешь набирать учеников через живые эфиры без хаоса и зависимости от команды.',
  },
  {
    emoji: '🔮',
    title: 'Энергопрактик',
    description: 'Проводишь мастер-классы по расстановкам, реки, астрологии или телесным практикам. Нужна система продаж, которая тебя не стыдит.',
  },
  {
    emoji: '📚',
    title: 'Преподаватель',
    description: 'Преподаёшь языки, рисование, музыку, финансы или любой другой навык и хочешь монетизировать это через вебинары.',
  },
  {
    emoji: '🚀',
    title: 'Эксперт в нише',
    description: 'У тебя есть сильная экспертиза в любой теме — и ты хочешь научиться продавать её через систему, а не на удачу.',
  },
]

const yesItems = [
  'Уже проводил(а) хотя бы один эфир',
  'Есть аудитория или начинаешь её строить',
  'Хочешь продавать своё обучение',
  'Готова вкладываться в систему',
]

const noItems = [
  'Никогда не работал(а) с аудиторией',
  'Нет никакого продукта или экспертизы',
  'Ищешь волшебную кнопку «деньги сами»',
  'Не готова проводить живые эфиры',
]

export function ForWhom() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-padding bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="Для кого"
            title={
              <>
                Платформа создана{' '}
                <span className="text-gradient">специально для тебя,</span>
                <br />если ты…
              </>
            }
            subtitle="LaunchFlow работает для экспертов с живой аудиторией, которые хотят превратить свои знания в стабильный доход."
            center
          />
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {audiences.map((item, i) => (
            <AudienceCard key={i} {...item} index={i} />
          ))}
        </div>

        {/* Yes / No */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-bg-card border border-primary/20 rounded-2xl p-6">
            <p className="text-primary-light font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} />
              Платформа тебе подойдёт, если
            </p>
            <ul className="space-y-2">
              {yesItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                  <span className="text-primary-light mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-card border border-border rounded-2xl p-6">
            <p className="text-text-muted font-semibold mb-4 flex items-center gap-2">
              <XCircle size={18} className="text-text-faint" />
              Платформа не подойдёт, если
            </p>
            <ul className="space-y-2">
              {noItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-text-faint text-sm">
                  <span className="mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function AudienceCard({ emoji, title, description, index }) {
  const { ref, isVisible } = useScrollAnimation(0.08)

  return (
    <div
      ref={ref}
      className={`group bg-bg-card border border-border rounded-2xl p-5 hover:border-primary/25 hover:bg-bg-elevated transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-display font-semibold text-text mb-1">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  )
}
