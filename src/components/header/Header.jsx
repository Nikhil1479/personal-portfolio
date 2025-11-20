import React from 'react'
import CTA from "./CTA"
import ME from "../../assets/Gemini nikhil.png"
import HeaderSocials from './HeaderSocials'

import "./header.css"
const Header = () => {
  return (
    <header id='header'>
      <div className='container container__header'>
        <h5>Hello I'am</h5>
        <h1>Nikhil Gupta</h1>
        <h5 className='text-light'>I am a Python Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header