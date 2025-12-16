'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop', alt: 'DJ Setup' },
    { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop', alt: 'Lighting Effects' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop', alt: 'Wedding Event' },
    { src: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=400&h=300&fit=crop', alt: 'Party Celebration' },
    { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop', alt: 'DJ at Work' },
    { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop', alt: 'Stage Lighting' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop', alt: 'Wedding Dance' },
    { src: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=400&h=300&fit=crop', alt: 'Birthday Party' },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-neon-yellow mb-12"
        >
          Gallery
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:opacity-80 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}