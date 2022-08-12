import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import PricingCards from '../components/Pricing/PricingCards'
import Footer from '../components/Footer/Footer'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='PRICING' text='Choose your trip' />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing