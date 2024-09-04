import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectImage1 from '../images/Project5.png';
import projectImage2 from '../images/Project2.png';
import projectImage3 from '../images/Image1.png';
import projectImage4 from '../images/Project3.png';

const projects = [
  {
    title: 'React Dashboard',
    type: 'Web Page',
    link: 'https://rak-code.github.io/PortFolio/',
    image: projectImage1,
  },
  {
    title: 'BlaXcut',
    type: 'Website',
    link: 'https://rak-code.github.io/PortFolio/',
    image: projectImage2,
  },
  {
    title: 'Task Management App',
    type: 'App',
    link: 'https://rak-code.github.io/PortFolio/',
    image: projectImage3,
  },
  {
    title: 'SecureAuth',
    type: 'Authentication',
    link: 'https://rak-code.github.io/PortFolio/',
    image: projectImage4,
  },
  // Add more projects as needed
];

const SelectedProjects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div id="projects" className="bg-gray-800 py-16">
      <motion.h2
        className="text-center text-4xl text-gray-100 font-bold mt-5 mb-8"
        style={{ fontFamily: 'var(--font-2)' }}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        Projects I Have Worked On
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href={project.link} className="block">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-400">{project.type} Project Link</p>
                <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SelectedProjects;
