import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 py-8">
      <div className="container mx-auto px-4">
        {/* Centered Content Section */}
        <div className="flex flex-col items-center text-center">
          {/* Contact Info */}
          <div className="mb-6">
            <p className="text-teal-700 mb-2">
              Email: <a href="mailto:rakeshgupta136a@gmail.com" className="hover:text-teal-600">rakeshgupta136a@gmail.com</a>
            </p>
            <p className="text-teal-700">
              Phone: <a href="tel:+917715820632" className="hover:text-teal-600">+91-7715820632</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-800 hover:text-teal-600 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-800 hover:text-teal-600 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-800 hover:text-teal-600 transition duration-300"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-300 my-6"></div>

        {/* Bottom Section - Copyright */}
        <div className="text-center">
          <p className="text-teal-700 text-sm">
            © {new Date().getFullYear()} Rakesh Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
