// file: components/NavBar.tsx
'use client';

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle

// --- NEW: Reusable animated navigation item component ---
const NavItem = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <motion.div
      className="relative"
      whileHover="hover"
      animate="rest"
      initial="rest"
    >
      <Link href={href} className="px-2 py-1">
        {/* Animate text color on hover */}
        <motion.span
          variants={{
            rest: { color: '#d1d5db' }, // gray-300
            hover: { color: '#3b82f6' }, // blue-500
          }}
        >
          {children}
        </motion.span>
      </Link>
      {/* Animated underline */}
      <motion.div
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        // You can change the origin for a different effect, e.g., 'left' or 'right'
        style={{ transformOrigin: 'center' }}
        className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-blue-500"
      />
    </motion.div>
  );
};

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

        {/* --- MODIFIED: Desktop Navigation with new animation --- */}
        <nav className="hidden md:flex items-center space-x-8 text-base">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/products">Wristbands</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/contact">Contact</NavItem>
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