import React from 'react';
import {  FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 py-5 px-9 flex justify-between items-center z-50">
      <div className="text-3xl" style={{ fontFamily: 'var(--font-2)' }}>
        <span className="text-teal-800">Port</span>
        <span className="text-teal-900">Folio</span>
      </div>
      <div className="flex space-x-8"style={{ fontFamily: 'var(--font-2)' }}>
        <button onClick={() => scrollToSection('home')} className="text-teal-800 text-xl hover:text-teal-600 transition duration-300">
          Home
        </button>
        <button onClick={() => scrollToSection('skills')} className="text-teal-800 text-xl hover:text-teal-600 transition duration-300">
          Skills
        </button>
        <button onClick={() => scrollToSection('projects')} className="text-teal-800 text-xl hover:text-teal-600 transition duration-300">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="text-teal-800 text-xl hover:text-teal-600 transition duration-300">
          Contact
        </button>
      </div>
      <div className="flex space-x-4">
        
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-teal-800 hover:text-teal-600 transition duration-300" size={25} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-teal-800 hover:text-teal-600 transition duration-300" size={25} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-teal-800 hover:text-teal-600 transition duration-300" size={25} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
