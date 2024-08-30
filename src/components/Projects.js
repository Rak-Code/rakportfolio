import React from 'react';
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
    title: 'TAsk Management App',
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
  return (
    <div id="projects" className="bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 py-16">
      <h2 className="text-center text-4xl text-teal-900 font-bold mt-5 mb-8" style={{ fontFamily: 'var(--font-2)' }}>Projects I Have Worked On.</h2>
      <div className="flex ml-20 flex-wrap gap-8">
        {projects.map((project, index) => (
          <div key={index} className="w-40% max-w-2xl transform transition-transform duration-300 hover:scale-105">
            <a href={project.link}>
              <img src={project.image} alt={project.title} className="w-40% h-3/4 rounded-lg shadow-md" />
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">{project.type} Project Link</p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedProjects;
