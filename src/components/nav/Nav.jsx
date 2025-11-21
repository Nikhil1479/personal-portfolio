import React, { useState, useEffect } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaTimeline } from "react-icons/fa6";



import "./nav.css"
import NavItem from './NavItem';

const Nav = () => {
    const [isActive, setIsActive] = useState("#header")

    useEffect(() => {
        // Get all sections that have an ID defined
        const sections = document.querySelectorAll('section[id]');

        // Create an Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    setIsActive(`#${id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        sections.forEach((section) => observer.observe(section));

        // Handle edge case: when scrolled to the very top
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsActive('#header');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <nav>
            <NavItem Icon={AiOutlineHome} setIsActive={setIsActive} isActive={isActive} id="#header" className="home" label="Home" />
            <NavItem Icon={AiOutlineUser} setIsActive={setIsActive} isActive={isActive} id="#about" label="About" />
            <NavItem Icon={FaTimeline} setIsActive={setIsActive} isActive={isActive} id="#timeline" label="Timeline" />
            <NavItem Icon={BiBook} setIsActive={setIsActive} isActive={isActive} id="#experience" label="Experience" />
            <NavItem Icon={BiMessageSquareDetail} setIsActive={setIsActive} isActive={isActive} id="#contact" label="Contact" />
        </nav>
    )
}

export default Nav