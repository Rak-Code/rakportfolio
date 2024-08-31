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
    link: '/path-to-project',
    image: projectImage1,
  },
  {
    title: 'BlaXcut',
    type: 'Website',
    link: '/path-to-project',
    image: projectImage2,
  },
  {
    title: 'Task Management App',
    type: 'App',
    link: '/path-to-project',
    image: projectImage3,
  },
  {
    title: 'SecureAuth',
    type: 'Authentication',
    link: '/path-to-project',
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
        Projects I Have Worked On.
      </motion.h2>
      <motion.div
        className="flex ml-20 flex-wrap gap-8"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-40% max-w-2xl transform transition-transform duration-300 hover:scale-105"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <a href={project.link}>
              <img src={project.image} alt={project.title} className="w-full h-3/4 rounded-lg shadow-md" />
              <div className="mt-4 text-center">
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
