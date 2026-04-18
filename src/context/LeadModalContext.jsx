import React, { createContext, useContext, useState, useCallback } from 'react'

const LeadModalContext = createContext(null)

export function LeadModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState('')

  const openLeadModal = useCallback((src = '') => {
    setSource(src)
    setOpen(true)
  }, [])

  const closeLeadModal = useCallback(() => setOpen(false), [])

  return (
    <LeadModalContext.Provider value={{ open, source, openLeadModal, closeLeadModal }}>
      {children}
    </LeadModalContext.Provider>
  )
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext)
  if (!ctx) throw new Error('useLeadModal must be used within LeadModalProvider')
  return ctx
}
