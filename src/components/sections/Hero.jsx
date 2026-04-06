import React from 'react'
import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <Badge variant="primary">
              <Star size={12} className="fill-current" />
              Новый способ запускать вебинары
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up">
            Запускай продающие эфиры{' '}
            <span className="text-gradient">без продюсера,</span>
            <br />
            дизайнера и технаря
          </h1>

          {/* Subheadline */}
          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            LaunchFlow — платформа, которая ведёт тебя от идеи до продажи.
            Структура, прогрев, презентация, дожим — всё готово. Ты просто эксперт.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="primary" size="lg" href="#cta">
              Начать бесплатно
              <ArrowRight size={18} />
            </Button>
            <Button variant="ghost" size="lg" href="#how-it-works">
              <Play size={16} className="text-primary-light" />
              Как это работает
            </Button>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  'bg-violet-500',
                  'bg-pink-500',
                  'bg-amber-500',
                  'bg-emerald-500',
                  'bg-sky-500',
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-bg flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {['А', 'М', 'О', 'Е', 'Н'][i]}
                  </div>
                ))}
              </div>
              <span className="text-text-muted text-sm">
                <span className="text-text font-semibold">1 200+</span> экспертов уже запускают
              </span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-border" />

            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
              <span className="text-text-muted text-sm ml-1">
                <span className="text-text font-semibold">4.9</span> / 5.0
              </span>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-2xl overflow-hidden card-glow bg-bg-card border border-border/50">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="ml-4 flex-1 bg-bg-surface rounded-md px-3 py-1 text-xs text-text-faint">
                app.launchflow.ru/dashboard
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left sidebar */}
              <div className="md:col-span-1 space-y-3">
                <div className="bg-bg-elevated rounded-xl p-4">
                  <p className="text-xs text-text-faint mb-1">Следующий запуск</p>
                  <p className="text-text font-semibold">Вебинар «Ресурс»</p>
                  <p className="text-primary-light text-sm mt-1">Через 3 дня</p>
                </div>
                <div className="bg-bg-elevated rounded-xl p-4">
                  <p className="text-xs text-text-faint mb-2">Готовность</p>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-text-muted">Прогрев</span>
                    <span className="text-xs text-emerald-400">✓ Готово</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-text-muted">Презентация</span>
                    <span className="text-xs text-emerald-400">✓ Готово</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text-muted">Дожим</span>
                    <span className="text-xs text-gold">→ В работе</span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="md:col-span-2 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Регистраций', value: '847', trend: '+23%' },
                    { label: 'Пришло', value: '412', trend: '+18%' },
                    { label: 'Продаж', value: '38', trend: '+41%' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-bg-elevated rounded-xl p-3">
                      <p className="text-xs text-text-faint mb-1">{stat.label}</p>
                      <p className="text-text font-bold text-lg">{stat.value}</p>
                      <p className="text-emerald-400 text-xs">{stat.trend}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-bg-elevated rounded-xl p-4">
                  <p className="text-xs text-text-faint mb-3">Этапы запуска</p>
                  <div className="space-y-2">
                    {[
                      { step: 'Структура вебинара', done: true },
                      { step: 'Презентация', done: true },
                      { step: 'Прогрев (7 дней)', done: true },
                      { step: 'Проведение эфира', done: false, active: true },
                      { step: 'Дожим (3 дня)', done: false },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                            item.done
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : item.active
                              ? 'bg-primary/20 border border-primary text-primary-light'
                              : 'bg-bg border border-border'
                          }`}
                        >
                          {item.done ? '✓' : item.active ? '●' : ''}
                        </div>
                        <span className={`text-xs ${item.done ? 'text-text-muted' : item.active ? 'text-text' : 'text-text-faint'}`}>
                          {item.step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow under dashboard */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
