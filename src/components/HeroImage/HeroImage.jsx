import React from 'react'
import './HeroImageStyles.scss'

const HeroImage = ( {heading, text} ) => {
  return (
    <div className='hero-image'>
        <div className='hero-image__heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImage