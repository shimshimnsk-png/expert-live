import React, { useEffect, useRef, useState } from 'react'
import { X, ChevronRight, ArrowLeft, Send, CheckCircle2, Loader2, MessageSquare, Sparkles } from 'lucide-react'
import { useLeadModal } from '../../context/LeadModalContext'

const niches = [
  { id: 'psychologist', title: 'Психолог' },
  { id: 'coach', title: 'Коуч' },
  { id: 'mentor', title: 'Наставник' },
  { id: 'energy', title: 'Энергопрактик' },
  { id: 'teacher', title: 'Преподаватель' },
  { id: 'other', title: 'Эксперт в нише / Другое' },
]

const situations = [
  { id: 'start', title: 'Только начинаю, ещё не проводил(а) эфиры' },
  { id: 'chaos', title: 'Провожу эфиры, но без системы' },
  { id: 'team', title: 'Работаю с командой, хочу уйти от зависимости' },
  { id: 'regular', title: 'Запускаю регулярно, хочу больше конверсии' },
]

const TG_CONTACT_URL = 'https://t.me/webinar_launchflow_bot'

export function LeadModal() {
  const { open, source, closeLeadModal } = useLeadModal()
  const [step, setStep] = useState('niche')
  const [niche, setNiche] = useState('')
  const [situation, setSituation] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const firstFieldRef = useRef(null)

  const resetForm = () => {
    setStep('niche')
    setNiche('')
    setSituation('')
    setName('')
    setContact('')
    setError('')
    setSending(false)
  }

  const handleClose = () => {
    if (sending) return
    closeLeadModal()
    setTimeout(resetForm, 200)
  }

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, sending])

  useEffect(() => {
    if (step === 'contact' && firstFieldRef.current) {
      setTimeout(() => firstFieldRef.current?.focus(), 100)
    }
  }, [step])

  async function handleSubmit() {
    if (!contact.trim()) {
      setError('Укажите Telegram или телефон для связи')
      return
    }
    setError('')
    setSending(true)

    try {
      const res = await fetch('/.netlify/functions/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          niche,
          situation,
          name: name.trim(),
          contact: contact.trim(),
          source,
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStep('success')
    } catch {
      setError('Не удалось отправить. Напиши напрямую в Telegram — ссылка ниже.')
    } finally {
      setSending(false)
    }
  }

  if (!open) return null

  const stepNumber = step === 'niche' ? 1 : step === 'situation' ? 2 : step === 'contact' ? 3 : 3
  const progress = step === 'success' ? 100 : (stepNumber / 3) * 100

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Оставить заявку"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          {step !== 'niche' && step !== 'success' ? (
            <button
              onClick={() => {
                if (step === 'situation') setStep('niche')
                else if (step === 'contact') setStep('situation')
              }}
              className="text-text-muted hover:text-text p-1 -ml-1 transition-colors"
              aria-label="Назад"
            >
              <ArrowLeft size={18} />
            </button>
          ) : (
            <div className="w-6" />
          )}
          <span className="font-display font-bold text-text">
            Launch<span className="text-primary-light">Flow</span>
          </span>
          <button
            onClick={handleClose}
            className="text-text-muted hover:text-text p-1 -mr-1 transition-colors"
            aria-label="Закрыть"
            disabled={sending}
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        {step !== 'success' && (
          <div className="h-1 bg-bg-elevated">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {step === 'niche' && (
            <div className="animate-fade-in">
              <p className="text-xs text-text-faint mb-1">Шаг 1 из 3</p>
              <h3 className="font-display text-xl font-bold text-text mb-1">
                Кто ты по нише?
              </h3>
              <p className="text-text-muted text-sm mb-5">
                Подберём шаблоны под твою аудиторию.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {niches.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => {
                      setNiche(n.title)
                      setStep('situation')
                    }}
                    className="p-4 rounded-xl bg-bg-elevated border border-border hover:border-primary/40 hover:bg-bg-card text-left transition-all group"
                  >
                    <span className="text-sm text-text group-hover:text-primary-light transition-colors">
                      {n.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'situation' && (
            <div className="animate-fade-in">
              <p className="text-xs text-text-faint mb-1">Шаг 2 из 3</p>
              <h3 className="font-display text-xl font-bold text-text mb-1">
                Где ты сейчас?
              </h3>
              <p className="text-text-muted text-sm mb-5">
                Поймём, с какого этапа стартовать.
              </p>
              <div className="space-y-2">
                {situations.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSituation(s.title)
                      setStep('contact')
                    }}
                    className="w-full flex items-center justify-between gap-3 p-4 rounded-xl bg-bg-elevated border border-border hover:border-primary/40 hover:bg-bg-card text-left transition-all group"
                  >
                    <span className="text-sm text-text group-hover:text-primary-light transition-colors">
                      {s.title}
                    </span>
                    <ChevronRight size={16} className="text-text-faint group-hover:text-primary-light flex-shrink-0 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'contact' && (
            <div className="animate-fade-in">
              <p className="text-xs text-text-faint mb-1">Шаг 3 из 3</p>
              <h3 className="font-display text-xl font-bold text-text mb-1">
                Как с тобой связаться?
              </h3>
              <p className="text-text-muted text-sm mb-5">
                Напишу в течение часа и отправлю доступ к платформе.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-text-muted mb-1.5">Имя</label>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как к тебе обращаться"
                    className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border focus:border-primary outline-none text-text placeholder:text-text-faint transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-1.5">
                    Telegram или телефон <span className="text-primary-light">*</span>
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value)
                      if (error) setError('')
                    }}
                    placeholder="@username или +7..."
                    className={`w-full px-4 py-3 rounded-xl bg-bg-elevated border outline-none text-text placeholder:text-text-faint transition-colors ${
                      error ? 'border-red-500' : 'border-border focus:border-primary'
                    }`}
                  />
                  {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={sending}
                className="w-full mt-6 py-3 bg-primary hover:bg-primary-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                {sending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <Send size={16} />
                  </>
                )}
              </button>
              <p className="text-xs text-text-faint text-center mt-3">
                Нажимая «Отправить», ты соглашаешься с обработкой персональных данных.
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="animate-fade-in text-center py-4">
              <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 items-center justify-center mb-5">
                <CheckCircle2 size={32} className="text-primary-light" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text mb-2">
                Заявка принята <Sparkles size={20} className="inline text-gold ml-1" />
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Напишу тебе в течение часа. Чтобы ускорить — можешь сразу написать в Telegram.
              </p>
              <div className="space-y-2">
                <a
                  href={TG_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare size={16} />
                  Написать в Telegram
                </a>
                <button
                  onClick={handleClose}
                  className="w-full py-3 bg-transparent border border-border hover:border-border-light text-text-muted hover:text-text font-medium rounded-xl transition-all"
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
