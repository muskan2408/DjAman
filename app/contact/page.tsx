'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static site, just log or alert
    alert('Form submitted! In a real app, this would send data to a server.');
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-neon-purple mb-12"
        >
          Contact Us
        </motion.h1>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-neon-pink mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-neon-purple focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-neon-pink mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-neon-purple focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block text-neon-pink mb-2">Event Type</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-neon-purple focus:outline-none"
              required
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="party">Party</option>
              <option value="corporate">Corporate Event</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-neon-pink mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-neon-purple focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-neon-purple text-white py-3 rounded-full font-semibold hover:bg-neon-pink transition-colors"
          >
            Send Message
          </button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-gray-300 mb-4">Or contact us directly on WhatsApp:</p>
          <a
            href="https://wa.me/1234567890"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            WhatsApp Business
          </a>
        </motion.div>
      </div>
    </div>
  );
}