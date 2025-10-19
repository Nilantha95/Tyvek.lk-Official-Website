// file: app/about/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Paintbrush, ScanLine, Users, ArrowRight } from 'lucide-react';

export default function AboutUsPage() {
  const fadeIn: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <div className="bg-black text-white">
      {/* --- Hero Section --- */}
      <section className="relative text-center py-20 sm:py-24 md:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // --- Mobile Friendly Change: Adjusted font sizes for smaller screens ---
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            Pioneering Event Access in Sri Lanka
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            // --- Mobile Friendly Change: Adjusted text size and max-width ---
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From vibrant, custom wristbands to intelligent gate access systems, we are the architects of seamless event experiences.
          </motion.p>
        </div>
      </section>

      {/* --- Our Story Section --- */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
        className="py-16 md:py-20"
      >
        {/* --- Mobile Friendly Change: Added flex-col and md:flex-row for stacking on mobile --- */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* --- Mobile Friendly Change: Image appears first on mobile (order-first) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="relative w-full md:w-1/2 order-first md:order-last"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
              <Image 
                src="/about-us-image.jpg" 
                alt="Vibrant event managed by Tyvek.lk" 
                layout="fill"
                objectFit="cover"
                className="shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              />
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded with the vision to revolutionize event management, Tyvek.lk started by providing high-quality, durable wristbands. We quickly realized that a great event is about more than just entry; it&apos;s about a smooth, secure, and memorable experience for every guest.
            </p>
            <p className="text-gray-300">
              Today, we&apos;ve expanded our expertise to integrate technology with tradition. We empower event organizers with comprehensive solutions that handle everything from custom branding to sophisticated, smart gate access control.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* --- What We Do Section --- */}
      <section className="py-16 md:py-20 bg-gray-900" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="services-heading" className="text-3xl font-bold text-white mb-2">Our Core Services</h2>
          <p className="text-gray-400 mb-12">Comprehensive solutions for events of any scale.</p>
          {/* This grid is already mobile friendly, as it defaults to one column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="p-8 rounded-xl bg-gray-950/50 hover:bg-gray-800/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-800">
              <div className="bg-gray-800 inline-block p-4 rounded-full mb-4"><Paintbrush className="w-8 h-8 text-blue-400" /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Wristbands</h3>
              <p className="text-gray-400">Design and print stunning, tear-proof Tyvek wristbands with your branding, logos, and event details.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="p-8 rounded-xl bg-gray-950/50 hover:bg-gray-800/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-800">
              <div className="bg-gray-800 inline-block p-4 rounded-full mb-4"><ScanLine className="w-8 h-8 text-blue-400" /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Gate Access</h3>
              <p className="text-gray-400">Implement intelligent access control with QR codes or NFC-enabled wristbands for fast, secure entry.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="p-8 rounded-xl bg-gray-950/50 hover:bg-gray-800/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-800">
              <div className="bg-gray-800 inline-block p-4 rounded-full mb-4"><Users className="w-8 h-8 text-blue-400" /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Full Event Support</h3>
              <p className="text-gray-400">From initial consultation to on-site support, we partner with you to ensure your event&apos;s success.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="initial" whileInView="animate" variants={fadeIn} viewport={{ once: true, amount: 0.8 }}>
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Create an Unforgettable Event</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you need 100 wristbands for a party or a full access solution for a festival, we&apos;re ready to help.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg inline-flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}