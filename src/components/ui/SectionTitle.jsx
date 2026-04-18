import React from 'react'
import { Badge } from './Badge'

export function SectionTitle({ badge, title, subtitle, center = false, titleGradient = false }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {badge && (
        <div className={`mb-4 ${center ? 'flex justify-center' : ''}`}>
          <Badge variant="primary" size="section">{badge}</Badge>
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${titleGradient ? 'text-gradient' : 'text-text'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-muted text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
