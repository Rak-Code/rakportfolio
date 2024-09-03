import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full bg-gray-800 py-5 px-9 flex justify-between items-center z-50"
    >
      <div className="text-3xl" style={{ fontFamily: 'var(--font-2)' }}>
        <span className="text-gray-100">Port</span>
        <span className="text-gray-100">Folio</span>
      </div>
      
      {/* Hamburger Menu Icon */}
      <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes className="text-gray-100 text-2xl" /> : <FaBars className="text-gray-100 text-2xl" />}
      </div>

      {/* Menu Items */}
      <div className={`lg:flex lg:space-x-8 space-y-4 lg:space-y-0 lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => scrollToSection('home')} className="text-gray-100 text-xl hover:text-gray-400 transition duration-300">
          Home
        </button>
        <button onClick={() => scrollToSection('skills')} className="text-gray-100 text-xl hover:text-gray-400 transition duration-300">
          Skills
        </button>
        <button onClick={() => scrollToSection('projects')} className="text-gray-100 text-xl hover:text-gray-400 transition duration-300">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="text-gray-100 text-xl hover:text-gray-400 transition duration-300">
          Contact
        </button>
      </div>
      
      {/* Social Media Icons */}
      <div className="hidden lg:flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-100 hover:text-gray-400 transition duration-300" size={25} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-100 hover:text-gray-400 transition duration-300" size={25} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-100 hover:text-gray-400 transition duration-300" size={25} />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
