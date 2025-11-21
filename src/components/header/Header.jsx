import React from 'react'
import CTA from "./CTA"
import ME from "../../assets/Gemini nikhil.png"
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
            <span className="typing__text">Full Stack Developer</span>
            <span className="typing__cursor">|</span>
          </h5>
          <p className="header__subtitle">
            Building scalable applications with React, Node.js, and AI/ML technologies
          </p>
        </div>

        <CTA />

        <HeaderSocials />

        <div className="me">
          <div className="me__glow"></div>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header