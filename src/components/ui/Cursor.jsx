import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './cursor.css';

const Cursor = () => {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isClicked, setIsClicked] = useState(false);
    const [particles, setParticles] = useState([]);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig); useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = (e) => {
            setIsClicked(true);
            // Create particles on click
            const newParticles = Array.from({ length: 8 }, (_, i) => ({
                id: Date.now() + i,
                x: e.clientX,
                y: e.clientY,
                angle: (Math.PI * 2 * i) / 8,
            }));
            setParticles(prev => [...prev, ...newParticles]);

            // Remove particles after animation
            setTimeout(() => {
                setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
            }, 600);
        };

        const handleMouseUp = () => setIsClicked(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [cursorX, cursorY]);

    useEffect(() => {
        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('btn') ||
                target.tagName.toLowerCase() === 'input' ||
                target.tagName.toLowerCase() === 'textarea' ||
                target.classList.contains('clickable')
            ) {
                setCursorVariant("hover");
            } else {
                setCursorVariant("default");
            }
        };
        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, []);

    const variants = {
        default: {
            width: 30,
            height: 30,
            backgroundColor: "transparent",
            border: "2px solid var(--color-primary)",
            borderRadius: "50%",
            rotate: 0,
        },
        hover: {
            width: 60,
            height: 60,
            backgroundColor: "rgba(138, 43, 226, 0.1)",
            border: "2px solid #8a2be2",
            borderRadius: "30%",
            rotate: 45,
        },
        click: {
            width: 28,
            height: 28,
            backgroundColor: "rgba(138, 43, 226, 0.4)",
            border: "2px solid #8a2be2",
            borderRadius: "50%",
            rotate: 180,
        }
    };

    return (
        <>
            {/* Trailing particles on click */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="cursor-particle"
                    initial={{
                        x: particle.x,
                        y: particle.y,
                        scale: 1,
                        opacity: 1,
                    }}
                    animate={{
                        x: particle.x + Math.cos(particle.angle) * 50,
                        y: particle.y + Math.sin(particle.angle) * 50,
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    style={{
                        position: 'fixed',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #8a2be2, #4169e1)',
                        pointerEvents: 'none',
                        zIndex: 9999,
                    }}
                />
            ))}

            {/* Main cursor dot with gradient */}
            <motion.div
                className="cursor-dot"
                animate={{
                    scale: isClicked ? 0.5 : 1,
                }}
                transition={{ duration: 0.1 }}
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%",
                    background: 'linear-gradient(135deg, #8a2be2, #4169e1)',
                }}
            />

            {/* Animated cursor ring */}
            <motion.div
                className="cursor-outline"
                variants={variants}
                animate={isClicked ? "click" : cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    rotate: { duration: 0.3 }
                }}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%"
                }}
            />
        </>
    );
};

export default Cursor;
