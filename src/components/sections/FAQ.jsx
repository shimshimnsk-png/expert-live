import React, { useState } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { faqItems } from '../../data/faq'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { ChevronDown } from 'lucide-react'

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`border border-border rounded-2xl overflow-hidden transition-all duration-500 ${
        open ? 'border-primary/30 bg-bg-elevated' : 'bg-bg-card hover:border-border-light'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-display font-semibold text-text pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-text-muted flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-primary-light' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-text-muted leading-relaxed px-6 pb-6">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="faq" className="section-padding bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionTitle
            badge="FAQ"
            title="Частые вопросы"
            subtitle="Если не нашла ответ — пиши в поддержку, ответим за 2 часа."
            center
          />
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <FAQItem key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
