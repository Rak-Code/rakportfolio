import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

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
      setFormData({ name: '', email: '', message: '' });  // Clear the form after submission
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <h3 className="text-teal-900 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 text-2xl text-center" style={{ fontFamily: 'var(--font-2)' }}>
        Feel free to reach out if you wanna collaborate with me, or simply have a chat.
      </h3>
      <div id="contact" className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                rows="5"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105 px-6 py-3 text-white font-bold"
              >
                Send Message
              </button>
            </div>
          </form>
          {status && <p className="text-center mt-4 text-lg">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
