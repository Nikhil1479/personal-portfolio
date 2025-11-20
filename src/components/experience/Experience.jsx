import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import './experience.css';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
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

                <div className="experience__backend">
                    <h3>Frontend Development</h3>
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