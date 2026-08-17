import PageHero from '@/components/layout/PageHero'
import React from 'react'
import HeroSection from './components/HeroSection'
import SafetySupportSection from './components/SafetySupportSection'
import SafetyReportingForm from './components/SafetyReportingForm'

const page = () => {
  return (
    <div className='bg-[#F7F7F7]'>
    <HeroSection
    title='Report a Ferozsons product concern'
    backgroundImage='/images/product-concern/Hero.webp'/>
    <SafetySupportSection/>
    <SafetyReportingForm/>
    </div>
  )
}

export default page