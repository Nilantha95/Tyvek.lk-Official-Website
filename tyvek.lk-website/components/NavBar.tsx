// file: components/NavBar.tsx
'use client';

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// --- MODIFIED: Import the 'Variants' type ---
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Data for navigation links for easier mapping
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Wristbands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

// Reusable animated navigation item component
const NavItem = ({ href, children, isActive }: { href: string; children: ReactNode; isActive: boolean }) => {
  return (
    <Link href={href} className="relative px-3 py-2 text-sm transition-colors duration-300">
      <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
        {children}
      </span>
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 z-0 bg-blue-600 rounded-md"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- MODIFIED: Added the 'Variants' type annotation ---
  const navContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // --- MODIFIED: Added the 'Variants' type annotation to fix the error ---
  const navItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  };
  
  // --- MODIFIED: Added the 'Variants' type annotation for consistency ---
  const mobileMenuVariants: Variants = {
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
            className="h-10 md:h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center space-x-2 text-base"
        >
          {navLinks.map((link) => (
            <motion.div variants={navItemVariants} key={link.href}>
              <NavItem href={link.href} isActive={pathname === link.href}>
                {link.label}
              </NavItem>
            </motion.div>
          ))}
        </motion.nav>

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
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800"
          >
            <nav className="flex flex-col items-center space-y-6 px-4 py-8">
              {navLinks.map(link => (
                 <Link key={link.href} href={link.href} className="text-xl text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>{link.label}</Link>
              ))}
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