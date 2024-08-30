import React from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import profileImage from '../images/dbzbg.jpg';  // Ensure this is the correct path to the image

const HeroSection = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 h-screen flex flex-col justify-center items-center relative overflow-hidden px-4"style={{ fontFamily: 'var(--font-2)' }}>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 z-20 relative text-center"
        style={{ fontFamily: 'var(--font-2)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
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
        <Typical
          steps={[
            "Hi, I'm React Developer",
            2000, // Pause for 2 seconds at the end
          ]}
          loop={1}
          wrapper="p"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8"
          style={{ fontFamily: 'var(--font-1)' }}
        />
      </motion.div>
      <motion.img
        src={profileImage}  // Use the imported image
        alt="Profile"
        className="absolute w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto object-cover z-10 opacity-70 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
};

export default HeroSection;
