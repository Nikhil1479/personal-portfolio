import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import './experience.css';

const Experience = () => {
    return (
        <section id='experience'>
            <h5 className="section__subtitle">What Skills I Have</h5>
            <h2 className="section__title">
                <span className="title__gradient">My Experience</span>
            </h2>

            <div className="container experience__container">
                <div className="experience__frontend experience__card">
                    <div className="card__glow"></div>
                    <h3>
                        <span className="card__icon">💻</span>
                        Frontend Development
                    </h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                    </div>
                </div>

                <div className="experience__backend experience__card">
                    <div className="card__glow"></div>
                    <h3>
                        <span className="card__icon">⚙️</span>
                        Backend Development
                    </h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>Docker</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>Kubernetes</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <RiVerifiedBadgeFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Expert</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience