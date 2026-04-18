import React from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Pain } from './components/sections/Pain'
import { Solution } from './components/sections/Solution'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { Creator } from './components/sections/Creator'
import { Benefits } from './components/sections/Benefits'
import { ForWhom } from './components/sections/ForWhom'
import { Pricing } from './components/sections/Pricing'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { LeadModal } from './components/modal/LeadModal'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Features />
        <HowItWorks />
        <Creator />
        <Benefits />
        <ForWhom />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <LeadModal />
    </div>
  )
}
