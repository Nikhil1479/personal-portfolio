import React from 'react'
import CTA from "./CTA"
import ME from "../../assets/nikhil-beach.jpg"
import HeaderSocials from './HeaderSocials'

import "./header.css"
const Header = () => {
  return (
    <header id='header'>
      <div className='container container__header'>
        <div className="header__content">
          <h5 className="header__greeting">Hello I'm</h5>
          <h1 className="header__name">
            <span className="name__gradient">Nikhil Gupta</span>
          </h1>
          <h5 className='text-light header__title'>
            <span className="typing__text">Python Developer</span>
            <div className='block__cursor'></div>
          </h5>
          <p className="header__subtitle">
            Building AI-driven systems with advanced machine learning
          </p>
        </div>

        <CTA />

        <HeaderSocials />

        <div className="me">
          <div className="me__glow"></div>
          <img src={ME} alt="me" />
        </div>
        <a href="#experience" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header