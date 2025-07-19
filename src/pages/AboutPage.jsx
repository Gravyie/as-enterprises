import React from 'react'
import AboutHero from '../components/AboutHero'
import CardFan from '../components/CardFan'
import SuccessStories from '../components/SuccessStories'
import VisionBoard from '../components/VisionBoard'
import TeamAndLeadership from '../components/TeamAndLeadership'

export default function AboutPage() {
  return (
    <div>
        <AboutHero />
        <CardFan /> 
        <SuccessStories />
        <VisionBoard />
        <TeamAndLeadership />
    </div>
  )
}
