'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const serviceImages = {
  'DJ Setups': [
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?w=800',
    'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?w=800',
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=800',
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?w=800',
  ],
  'Professional Lighting': [
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?w=800',
    'https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?w=800',
    'https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?w=800',
    'https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?w=800',
  ],
  'Dhol Services': [
    '/services/dhol/dhol1.avif',
    '/services/dhol/dhol2.avif',
    '/services/dhol/dhol1.avif',
    '/services/dhol/dhol2.avif',
  ],
  'Special Effects': [
    'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?w=800',
    'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?w=800',
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?w=800',
    'https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg?w=800',
  ],
};

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openServiceGallery = (serviceName: string) => {
    setSelectedService(serviceName);
    setCurrentImageIndex(0);
  };

  const closeServiceGallery = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const goToPrevious = () => {
    if (selectedService) {
      const images = serviceImages[selectedService as keyof typeof serviceImages];
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const goToNext = () => {
    if (selectedService) {
      const images = serviceImages[selectedService as keyof typeof serviceImages];
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };
  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundImage: "url('/gallery/gallery3.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/gallery/gallery3.jpeg"
          alt="Hero background"
          fill
          className="object-cover opacity-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center h-full px-4 relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neon-yellow mb-4 drop-shadow-lg">
            Make Your Event Unforgettable with DJ Aman
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 drop-shadow opacity-90">
            Professional DJ setups, stunning lighting, and special effects for weddings, parties, and corporate events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/919888967397?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20services%3F"
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
                onClick={() => openServiceGallery(service.title)}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors border border-neon-pink border-opacity-20 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-neon-blue mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeServiceGallery}
            className="absolute top-4 right-4 text-white hover:text-neon-pink transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-neon-pink transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-neon-pink transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-neon-yellow mb-6">{selectedService}</h2>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={serviceImages[selectedService as keyof typeof serviceImages][currentImageIndex]}
                alt={`${selectedService} ${currentImageIndex + 1}`}
                width={1200}
                height={900}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-gray-300">
              {currentImageIndex + 1} / {serviceImages[selectedService as keyof typeof serviceImages].length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
