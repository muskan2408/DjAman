'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=1080&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=1920&h=1080&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neon-yellow mb-4 drop-shadow-lg">
            Make Your Event Unforgettable with DJ Aman
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 drop-shadow">
            Professional DJ setups, stunning lighting, and special effects for weddings, parties, and corporate events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/1234567890"
              className="bg-neon-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-neon-blue transition-colors shadow-lg"
            >
              Book Now on WhatsApp
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-neon-pink text-neon-pink px-8 py-3 rounded-full font-semibold hover:bg-neon-pink hover:text-white transition-colors shadow-lg"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Intro */}
      <section className="py-16 px-4 bg-black bg-opacity-70">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-neon-purple mb-8"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'DJ Setups', desc: 'State-of-the-art sound systems' },
              { title: 'Professional Lighting', desc: 'LED and stage lighting' },
              { title: 'Dhol Services', desc: 'Live percussion entertainment' },
              { title: 'Special Effects', desc: 'Smoke, sparkular, and SFX' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors border border-neon-pink border-opacity-20"
              >
                <h3 className="text-xl font-semibold text-neon-blue mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
