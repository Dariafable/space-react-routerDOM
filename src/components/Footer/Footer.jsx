import React from 'react'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import './FooterStyles.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>

            <div className='footer__left'>
                <div className='footer__location'>
                    <FaSearchLocation size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                    <div>
                        <p>123 Acme St</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className='footer__phone'>
                    <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} /> 1-800-123-1234</h4>
                </div>
                <div className='footer__email'>
                    <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} /> trips@galaxy.com</h4>
                </div>
            </div>

            <div className='footer__right'>
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptates obcaecati cupiditate molestias error repudiandae et molestiae, consequatur totam quibusdam maiores, culpa harum, pariatur architecto mollitia odit rem perferendis nobis?</p>

                <div className='footer__social'>
                    <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem', cursor: 'pointer'}} />
                    <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem', cursor: 'pointer'}} />
                    <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem', cursor: 'pointer'}} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer