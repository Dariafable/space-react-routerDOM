import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import TrainingSection from '../components/Training/Training'
import Footer from '../components/Footer/Footer'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='TRAINING' text='Pre-Flight & In-Flight training'/>
        <TrainingSection  />
        <Footer />
    </div>
  )
}

export default Training