import React from 'react'

export function Badge({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-primary/15 text-primary-light border border-primary/20',
    gold: 'bg-gold/15 text-gold-light border border-gold/20',
    muted: 'bg-white/5 text-text-muted border border-white/10',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  )
}
