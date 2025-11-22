import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/nikhil-gupta-4248a320b/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Nikhil1479" target='_blank' rel="noreferrer"><BsGithub /></a>
      <a href="https://nikhil1479.github.io/personal-portfolio/" target='_blank' rel="noreferrer"><CgWebsite /></a>
    </div>
  )
}

export default HeaderSocials