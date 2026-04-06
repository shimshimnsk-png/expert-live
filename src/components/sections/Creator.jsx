import React from 'react'
import { Quote, Star, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const achievements = [
  '8 лет в онлайн-образовании',
  'Более 200 запусков вебинаров',
  '12 млн рублей — суммарный доход учеников за 2024 год',
  'Основатель методологии «Запуск без хаоса»',
]

export function Creator() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-padding bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Photo side */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            {/* Photo frame */}
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border border-gold/10" />
              <div className="absolute -inset-8 rounded-3xl border border-gold/5" />

              {/* Photo placeholder */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] rounded-2xl overflow-hidden card-glow-gold">
                {/* Gradient placeholder representing the creator */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-800 to-amber-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gold/20 border-2 border-gold/40 mx-auto flex items-center justify-center mb-3">
                      <span className="text-4xl font-display font-bold text-gold-light">ОЛ</span>
                    </div>
                    <p className="text-white/60 text-xs">Фото появится здесь</p>
                  </div>
                </div>

                {/* Name tag at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-display font-bold text-xl">Лиханова Олеся</p>
                  <p className="text-gold-light text-sm">Основатель LaunchFlow</p>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -right-4 sm:-right-8 top-8 bg-bg-elevated border border-border rounded-xl p-3 shadow-lg w-48">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-text text-xs font-medium">«Заработала 340 тыс. на первом самостоятельном запуске»</p>
                <p className="text-text-muted text-xs mt-1">— Анастасия, коуч</p>
              </div>

              {/* Stats card */}
              <div className="absolute -left-4 sm:-left-8 bottom-16 bg-bg-elevated border border-primary/20 rounded-xl p-3 shadow-lg">
                <p className="text-text-faint text-xs mb-1">Запусков проведено</p>
                <p className="text-text font-display font-bold text-2xl">200+</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 mb-6">
              Создатель платформы
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-2">
              Лиханова Олеся
            </h2>
            <p className="text-primary-light font-medium mb-6">
              Эксперт по системным запускам · Методолог онлайн-образования
            </p>

            {/* Quote */}
            <div className="relative bg-bg-card border border-gold/15 rounded-2xl p-6 mb-8">
              <Quote size={24} className="text-gold/40 mb-3" />
              <p className="text-text leading-relaxed">
                Я прошла путь от эксперта, который зависел от продюсеров и технарей, до создания
                системы, которая позволяет запускать вебинары самостоятельно — быстро, красиво
                и без хаоса. Теперь я хочу, чтобы этот путь прошла каждая из вас.
              </p>
            </div>

            {/* Achievements */}
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
