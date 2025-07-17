import React from 'react'
import LandingHero from '../components/LandingHero'
import Partners from '../components/Partners'
import CompanyShowcase from '../components/CompaniesOverview'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'

export default function LandingPage() {
  return (
    <div>
        <LandingHero />
        <Partners />
        <CompanyShowcase />
        <Services />
        <Stats />
        <Testimonials />
    </div>
  )
}
