import React from 'react';

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
  return (
    <div id="skills" className="bg-gradient-to-r  from-teal-100 via-teal-200 to-teal-300 py-16" >
      <h2 className="text-3xl font-bold text-teal-900 text-center mt-5  mb-8">SKILLS & EXPERTISE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 text-teal-800">{`0${index + 1}.`}</div>
            <div className="flex-grow">
              <div className="text-white-800">{skill.name}</div>
              <div className="w-full bg-white-300 h-1 mt-1">
                <div className={`bg-black h-1 ${skill.level}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsExpertise;
