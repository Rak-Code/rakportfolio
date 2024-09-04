import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../images/dbzbg.jpg';  // Ensure this is the correct path to the image

const HeroSection = () => {
  const [text, setText] = useState('');
  const steps = [" I'm a React Developer"];
  const typingSpeed = 100;  // Speed of typing in milliseconds
  const typingRef = useRef(null);  // Ref for managing typing effect

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    
    const type = () => {
      typingRef.current = setInterval(() => {
        if (charIndex < steps[index].length) {
          setText((prev) => prev + steps[index].charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typingRef.current);
          typingRef.current = setTimeout(() => {
            setText('');  // Clear text for the next step
            charIndex = 0;
            index = (index + 1) % steps.length;
            type();
          }, 2000);  // Pause for 2 seconds before starting the next step
        }
      }, typingSpeed);
    };

    setText('');  // Initialize the text as empty
    type();

    // Cleanup function to clear the interval if the component unmounts
    return () => {
      clearInterval(typingRef.current);
      clearTimeout(typingRef.current);
    };
  }, []);

  return (
    <div 
      id="home" 
      className="bg-gray-800 h-screen flex flex-col justify-center items-center relative overflow-hidden px-4"
      style={{ fontFamily: 'var(--font-2)' }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-4 z-20 relative text-center text-gray-200"
        style={{ fontFamily: 'var(--font-2)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Rakesh Gupta
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-20 relative text-center"
      >
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-400 mb-8"
          style={{ fontFamily: 'var(--font-1)' }}
        >
          {text}
        </p>
      </motion.div>
      <motion.img
        src={profileImage}  // Use the imported image
        alt="Profile"
        className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto object-cover z-10 opacity-70 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
};

export default HeroSection;
