import React from 'react'

/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * size: 'sm' | 'md' | 'lg'
 */
export function Button({ children, variant = 'primary', size = 'md', className = '', onClick, href, target }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none'

  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-transparent border border-primary/40 text-primary-light hover:border-primary hover:bg-primary/10 hover:-translate-y-0.5',
    ghost: 'bg-transparent text-text-muted hover:text-text hover:bg-white/5',
    gold: 'bg-gold hover:bg-gold-light text-bg font-bold shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
