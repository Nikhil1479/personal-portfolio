import React from 'react'
import './about.css'
import ME from "../../assets/nikhil-about1.jpg"
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id="about">
      <h5 className="section__subtitle">Get to Know</h5>
      <h2 className="section__title">
        <span className="title__gradient">About Me</span>
      </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-glow"></div>
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="card__icon-wrapper">
                <FaAward className='about__icon' />
              </div>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <div className="card__icon-wrapper">
                <FaUsers className='about__icon' />
              </div>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <div className="card__icon-wrapper">
                <VscFolderLibrary className='about__icon' />
              </div>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            I'm a Full Stack Developer passionate about building scalable web applications
            and AI/ML solutions. With expertise in React, Node.js, Python, and modern DevOps
            practices, I create innovative solutions that drive business growth. Currently working
            at Highradius Technologies, I focus on delivering high-quality code and mentoring
            fellow developers.
          </p>
          <a href='#contact' className='btn btn-primary about__cta'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About