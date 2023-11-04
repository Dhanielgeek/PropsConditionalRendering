import React from 'react'
import './style.css'
import Curve from '../assets/logoCurve.jpeg'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={Curve} alt="thecurve" />
        </div>
        <div className='Nav'>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Register</li>
            <li>Support</li>
            <li>Contact</li>
           </ul>
        </div>
    </div>
  )
}

export default Header