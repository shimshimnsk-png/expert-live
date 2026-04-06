import React from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { plans } from '../../data/pricing'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { CheckCircle2 } from 'lucide-react'

function PricingCard({ plan, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-600 ${
        plan.highlight
          ? 'bg-bg-elevated border-2 border-primary shadow-2xl shadow-primary/20 scale-[1.02]'
          : 'bg-bg-card border border-border'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-b-lg">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Glow for highlighted card */}
      {plan.highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}

      <div className="p-7 flex-1 flex flex-col" style={{ paddingTop: plan.badge ? '2rem' : undefined }}>
        {/* Plan name */}
        <h3 className="font-display font-bold text-text text-xl mb-1">{plan.name}</h3>
        <p className="text-text-muted text-sm mb-6">{plan.description}</p>

        {/* Price */}
        <div className="flex items-end gap-2 mb-8">
          <span className="font-display font-bold text-4xl text-text">{plan.price} ₽</span>
          <span className="text-text-muted mb-1">/ {plan.period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2
                size={16}
                className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-primary-light' : 'text-text-muted'}`}
              />
              <span className="text-text-muted text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={plan.highlight ? 'primary' : 'secondary'}
          size="md"
          href="#cta"
          className="w-full"
        >
          {plan.cta}
        </Button>

        {/* Trial note */}
        <p className="text-center text-text-faint text-xs mt-3">{plan.trialNote}</p>
      </div>
    </div>
  )
}

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="Тарифы"
            title={
              <>
                Честная цена за{' '}
                <span className="text-gradient">системный запуск</span>
              </>
            }
            subtitle="14 дней бесплатно на любом тарифе. Без карты. Без обязательств."
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-text-muted text-sm mt-10">
          Все цены указаны с НДС. Оплата — ежемесячно или ежегодно (скидка 20%).{' '}
          <a href="#faq" className="text-primary-light hover:underline">Есть вопросы?</a>
        </p>
      </div>
    </section>
  )
}
