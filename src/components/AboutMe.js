import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div 
      id="about" 
      className="relative flex items-center justify-center h-auto bg-gray-800 py-8 px-4"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl"
      >
        {/* About Me Text */}
        <div className="text-center md:text-left max-w-lg mb-6 md:mb-0" style={{ fontFamily: 'var(--font-2)' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100">About Me</h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400">
            Hello! I'm Rakesh Gupta, a passionate and innovative software developer with a knack for turning ideas into reality through code.
          </p>
        </div>

        {/* CV Download Button */}
        <div className="mt-4 md:mt-0">
          <a
            href="/RakeshGuptaCV.pdf"
            download="Rakesh_Gupta_CV.pdf"
            className="inline-block px-6 py-3 text-base sm:text-lg md:text-lg font-semibold text-gray-100 bg-gray-600 rounded-lg shadow-lg hover:text-gray-400 transition duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
