// This is the updated, more animated homepage: app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Zap, Truck, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// The main component for your Home Page
export default function HomePage() {
  
  // --- NEW: Animation variants for the staggered headline ---
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const titleWord = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const headline = "Durable & Custom Tyvek Wristbands";

  // --- Animation variant for fading in sections ---
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">

      {/* ========== Header Section (No changes here) ========== */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Tyvek.lk Logo" width={120} height={40} priority />
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

      <main className="flex-grow">
        
        {/* --- Hero Section --- */}
        <section className="relative text-center py-20 md:py-32 bg-gray-50 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          <div className="container mx-auto px-4 relative">
            {/* --- NEW: Staggered word animation for the headline --- */}
            <motion.h1 
              variants={titleContainer}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              {headline.split(" ").map((word, index) => (
                <motion.span key={index} variants={titleWord} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The perfect solution for your events, parties, and venues. Secure, waterproof, and fully customizable.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/products" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg">
                Explore Designs
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-transform hover:scale-105 border border-gray-200 shadow-lg">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- Features Section with Interactive Hover Effects --- */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Why Choose Tyvek.lk?</h2>
            <p className="text-gray-500 mb-12">We provide unmatched quality and service.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* --- NEW: motion.div with hover animations --- */}
              <motion.div variants={fadeIn} className="p-8 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
                <div className="bg-blue-100 inline-block p-4 rounded-full mb-4"><ShieldCheck className="w-8 h-8 text-blue-600" /></div>
                <h3 className="text-xl font-semibold mb-2">Tough & Waterproof</h3>
                <p className="text-gray-600">Our Tyvek wristbands are tear-resistant and perfect for any weather or water-based events.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
                <div className="bg-blue-100 inline-block p-4 rounded-full mb-4"><Zap className="w-8 h-8 text-blue-600" /></div>
                <h3 className="text-xl font-semibold mb-2">Vibrant Custom Prints</h3>
                <p className="text-gray-600">Add your logo, text, or any design with our high-quality printing for a professional look.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
                <div className="bg-blue-100 inline-block p-4 rounded-full mb-4"><Truck className="w-8 h-8 text-blue-600" /></div>
                <h3 className="text-xl font-semibold mb-2">Islandwide Fast Delivery</h3>
                <p className="text-gray-600">We ensure your order reaches you quickly and safely, anywhere in Sri Lanka.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* --- NEW: Product Showcase with Scroll-Triggered Animations --- */}
        <section className="bg-gray-50 py-20 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <motion.div initial="initial" whileInView="animate" variants={fadeIn} viewport={{ once: true, amount: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl font-bold">Explore Our Popular Styles</h2>
              <p className="text-gray-500">A look at some of our customer favorites.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Product 1 - Slides from left */}
              <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image src="/wristband-blue.png" alt="Blue Tyvek Wristband" width={300} height={300} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Event Pro Blue</h3>
                <div className="flex justify-center my-2"><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /></div>
              </motion.div>
              {/* Product 2 - Scales up */}
              <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-blue-500">
                <Image src="/wristband-green.png" alt="Green Tyvek Wristband" width={300} height={300} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold">VIP Access Green</h3>
                <div className="flex justify-center my-2"><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /></div>
              </motion.div>
              {/* Product 3 - Slides from right */}
              <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image src="/wristband-red.png" alt="Red Tyvek Wristband" width={300} height={300} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Party Starter Red</h3>
                <div className="flex justify-center my-2"><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" /></div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== Footer Section (No changes here) ========== */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Tyvek.lk. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Your Trusted Wristband Partner in Sri Lanka.</p>
        </div>
      </footer>
    </div>
  );
}