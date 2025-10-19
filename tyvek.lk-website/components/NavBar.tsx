// file: components/NavBar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/Tyvek.lk__1_removed2.png" 
            alt="Tyvek.lk Logo"
            width={200}
            height={50}
            // --- Mobile Friendly Change: Responsive logo size ---
            className="h-10 md:h-20 w-auto" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-base">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Wristbands</Link>
          <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
        <Link 
          href="/products" 
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          Shop Now
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-300 hover:text-white" aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800"
          >
            <nav className="flex flex-col items-center space-y-6 px-4 py-8">
              <Link href="/" className="text-xl text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link href="/products" className="text-xl text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Wristbands</Link>
              <Link href="/about" className="text-xl text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>About Us</Link>
              <Link href="/contact" className="text-xl text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</Link>
              <Link 
                href="/products" 
                className="w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                onClick={toggleMenu}
              >
                Shop Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}