import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.scss'

const Navbar = () => {

    const [click, setClick] = useState(false)
    //toggle-function (hamburger - navmenu)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    //changing menu color (scroll)
    const changeMenuColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeMenuColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'><h1>GLX TRVL</h1></Link>

        <ul className={click ? 'header__navmenu active' : 'header__navmenu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
                <Link to='/training'>Training</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>

        <div className='header__hamburger' onClick={handleClick}>{click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}</div>
    </div>
  )
}

export default Navbar