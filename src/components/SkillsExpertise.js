import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML & CSS', level: 'w-full' },
  { name: 'Bootstrap & Tailwind CSS', level: 'w-3/4' },
  { name: 'JavaScript ES6+', level: 'w-4/5' },
  { name: 'Node JS & Express', level: 'w-3/4' },
  { name: 'Python & Django', level: 'w-4/5' },
  { name: 'MySQL & MongoDB', level: 'w-3/4' },
  { name: 'React JS', level: 'w-4/5' },
  { name: 'C++', level: 'w-2/3' },
];

const SkillsExpertise = () => {
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
    <div id="skills" className="bg-gray-800 py-16">
      <motion.h2
        className="text-3xl font-bold text-gray-100 text-center mt-5 mb-8"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        SKILLS & EXPERTISE
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 text-gray-100">{`0${index + 1}.`}</div>
            <div className="flex-grow">
              <div className="text-gray-400">{skill.name}</div>
              <div className="w-full bg-gray-700 h-1 mt-1">
                <div className={`bg-gray-100 h-1 ${skill.level}`}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsExpertise;
