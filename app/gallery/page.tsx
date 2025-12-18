'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: '/gallery/gallery1.jpeg', alt: 'DJ Aman event 1' },
    { src: '/gallery/gallery2.jpeg', alt: 'DJ Aman event 2' },
    { src: '/gallery/gallery3.jpeg', alt: 'DJ Aman event 3' },
    { src: '/gallery/gallery4.jpeg', alt: 'DJ Aman event 4' },
    { src: '/gallery/gallery5.jpeg', alt: 'DJ Aman event 5' },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/5">
            <Image src="/logo.jpeg" alt="DJ Aman logo" width={48} height={48} className="object-contain" />
          </span>
          <span className="text-lg font-semibold text-neon-purple">DJ Aman</span>
        </div>
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
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(index)}
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

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
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

            <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={900}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}