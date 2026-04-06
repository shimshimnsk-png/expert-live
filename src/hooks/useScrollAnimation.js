import { useEffect, useRef, useState } from 'react'

/**
 * Хук для анимации при скролле.
 * Возвращает ref (прикрепи к элементу) и isVisible (true когда элемент в зоне видимости).
 * threshold — насколько элемент должен быть виден чтобы сработало (0.1 = 10%)
 */
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [threshold])

  return { ref, isVisible }
}
