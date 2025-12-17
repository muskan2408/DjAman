import Image from 'next/image';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/5">
            <Image src="/logo.jpeg" alt="DJ Aman logo" width={40} height={40} className="object-contain" />
          </span>
          <span className="text-lg font-semibold text-neon-purple">DJ Aman</span>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/djamandhuri/" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-neon-pink transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/p/Dj-Aman-Dhuri-100063959413987/" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-neon-pink transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://www.youtube.com/@djamandhuri4996" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-neon-pink transition-colors">
            <Youtube size={24} />
          </a>
        </div>
        <p className="text-gray-400">© DJ Aman. All rights reserved.</p>
      </div>
    </footer>
  );
}