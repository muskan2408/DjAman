'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-neon-purple">
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/5">
            <Image src="/logo.jpeg" alt="DJ Aman logo" width={40} height={40} className="object-contain" />
          </span>
          DJ Aman
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-neon-pink transition-colors">Home</Link>
          <Link href="/services" className="hover:text-neon-pink transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-neon-pink transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-neon-pink transition-colors">Contact Us</Link>
        </nav>
        <button
          className="md:hidden text-neon-purple"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-2">
          <Link href="/" className="block py-2 hover:text-neon-pink">Home</Link>
          <Link href="/services" className="block py-2 hover:text-neon-pink">Services</Link>
          <Link href="/gallery" className="block py-2 hover:text-neon-pink">Gallery</Link>
          <Link href="/contact" className="block py-2 hover:text-neon-pink">Contact Us</Link>
        </div>
      )}
    </header>
  );
}