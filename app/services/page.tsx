'use client';

import { motion } from 'framer-motion';
import { Music, Lightbulb, Drum, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Music,
      title: 'DJ Sound Systems',
      desc: 'High-quality audio equipment with powerful speakers, mixers, and sound engineering for crystal-clear music delivery.',
    },
    {
      icon: Lightbulb,
      title: 'LED & Stage Lighting',
      desc: 'Dynamic LED lights, spotlights, and stage setups to create an immersive atmosphere for your event.',
    },
    {
      icon: Drum,
      title: 'Dhol & Live Percussion',
      desc: 'Traditional dhol players and live percussionists to add cultural flair and energy to celebrations.',
    },
    {
      icon: Sparkles,
      title: 'Smoke, Sparkular & Special Effects (SFX)',
      desc: 'Fog machines, sparkular effects, confetti cannons, and other visual effects to wow your guests.',
    },
    {
      title: 'Wedding Packages',
      desc: 'Complete packages including DJ, lighting, and effects tailored for wedding ceremonies and receptions.',
    },
    {
      title: 'Party & Corporate Event Packages',
      desc: 'Customized entertainment solutions for birthdays, corporate gatherings, and special occasions.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-neon-purple mb-12"
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {service.icon && <service.icon className="text-neon-pink mb-4" size={48} />}
              <h3 className="text-2xl font-semibold text-neon-blue mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}