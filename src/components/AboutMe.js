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
      className="relative flex items-center justify-center h-80 bg-gray-800"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="flex items-center justify-between w-full max-w-4xl px-8"
      >
        {/* About Me Text */}
        <div className="text-left max-w-lg" style={{ fontFamily: 'var(--font-2)' }}>
          <h2 className="text-3xl font-bold text-gray-100">About Me</h2>
          <p className="mt-4 text-xl text-gray-400">
            Hello! I'm Rakesh Gupta, a passionate and innovative software developer with a knack for turning ideas into reality through code.
          </p>
        </div>

        {/* CV Download Button */}
        <div>
          <a
            href="/RakeshGuptaCV.pdf"
            download="Rakesh_Gupta_CV.pdf"
            className="inline-block px-8 py-4 text-lg font-semibold text-gray-100 bg-gray-600 rounded-lg shadow-lg hover:text-gray-400 transition duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
