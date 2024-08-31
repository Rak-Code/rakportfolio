import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <div id="contact" className="h-screen flex flex-col items-center justify-center bg-gray-800 ">
        <motion.h3
          className="text-gray-100 text-2xl text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Feel free to reach out if you wanna collaborate with me, or simply have a chat.
        </motion.h3>
        
        <motion.div
          className="w-full max-w-lg bg-gray-700 rounded-lg shadow-lg p-8"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-100 text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-100 bg-gray-100 focus:outline-none focus:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-100 bg-gray-100 focus:outline-none focus:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-100 bg-gray-100 focus:outline-none focus:border-gray-600"
                rows="5"
                required
              />
            </div>
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="bg-gray-600 rounded-lg shadow-lg hover:bg-gray transition duration-300 transform hover:scale-105 px-6 py-3 text-gray-100 font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
          {status && <p className="text-center mt-4 text-lg text-gray-100">{status}</p>}
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
