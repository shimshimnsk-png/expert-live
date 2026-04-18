import React from 'react'

export function Badge({ children, variant = 'primary', size = 'default' }) {
  const variants = {
    primary: 'bg-primary/15 text-primary-light border border-primary/20',
    gold: 'bg-gold/15 text-gold-light border border-gold/20',
    goldSolid: 'bg-gold/10 text-gold border border-gold/20',
    muted: 'bg-white/5 text-text-muted border border-white/10',
  }

  const sizes = {
    default: 'tracking-wide',
    section: 'tracking-widest uppercase',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${sizes[size]} ${variants[variant]}`}>
      {children}
    </span>
  )
}
