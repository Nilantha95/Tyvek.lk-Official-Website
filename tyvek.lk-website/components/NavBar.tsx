// file: components/NavBar.tsx
'use client'; // Needed for animations and interactivity

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Tyvek.lk Logo" 
            width={120} 
            height={40}
            priority 
          />
        </Link>
        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Wristbands</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
        </nav>
        <Link href="/products" className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105">
          Shop Now
        </Link>
      </div>
    </motion.header>
  );
}