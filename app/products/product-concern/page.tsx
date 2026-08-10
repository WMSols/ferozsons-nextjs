import PageHero from '@/components/layout/PageHero'
import React from 'react'
import HeroSection from './components/HeroSection'
import SafetySupportSection from './components/SafetySupportSection'
import SafetyReportingForm from './components/SafetyReportingForm'

const page = () => {
  return (
    <>
    <HeroSection
    title='Report a Ferozsons product concern'
    backgroundImage='/images/product-concern/Hero.webp'/>
    <SafetySupportSection/>
    <SafetyReportingForm/>
    </>
  )
}

export default page