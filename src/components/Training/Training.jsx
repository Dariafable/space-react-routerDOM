import React from 'react'
import { Link } from 'react-router-dom'
import './TrainingStyles.scss'

import austronaut from '../../assets/austronaut.jpg'
import pod from '../../assets/pod.jpeg'


const Training = () => {
  return (
    <div className='training'>
        <div className='training__left'>
            <h1>Training</h1>
            <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>

        <div className='training__right'>
            <div className='training__container'>
                <div className='training__top'>
                    <img src={austronaut} className='training__img' alt='' />
                </div>
                <div className='training__bottom'>
                    <img src={pod} className='training__img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training