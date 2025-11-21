import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com" target='_blank' rel="noreferrer"><BsGithub /></a>
      <a href="https://nikhil1479.github.io/personal-portfolio/" target='_blank' rel="noreferrer"><CgWebsite /></a>
    </div>
  )
}

export default HeaderSocials