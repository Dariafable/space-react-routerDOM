import React from 'react'
import { Link } from 'react-router-dom'
import './HeroVideoStyles.scss'

import space from '../../assets/space.mp4'

const HeroVideo = () => {
  return (
    <div className='hero'>
      <video className='hero__video' autoPlay loop muted id='video'>
        <source src={space} type='video/mp4' />
      </video>

      <div className='hero__content'>
        <h1>Galaxy Travel</h1>
        <p>World's first civilian space travel</p>

        <div>
          <Link to='/training' className='btn'>Training</Link>
          <Link to='/contact' className='btn'>Launch</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroVideo