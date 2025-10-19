// file: app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Zap, Truck, Star, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// The main component for your Home Page
export default function HomePage() {
  const titleContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const titleWord: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  const headline = 'Durable & Custom Tyvek Wristbands';

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

  const floating: Variants = {
    animate: {
      y: ["-8px", "8px"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };


  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative text-center py-20 md:py-32 bg-black overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.h1
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            {headline.split(' ').map((word, index) => (
              <motion.span key={index} variants={titleWord} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            The perfect solution for your events, parties, and venues. Secure, waterproof, and fully customizable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Explore Designs
            </Link>
            <Link href="/contact" className="w-full sm:w-auto bg-transparent text-blue-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 border-2 border-blue-400">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="py-20 bg-gray-900"
        aria-labelledby="features-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 id="features-heading" className="text-3xl font-bold text-white mb-2">Why Choose Tyvek.lk?</h2>
          <p className="text-gray-400 mb-12">We provide unmatched quality and service.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="p-8 rounded-xl bg-gray-950/50 hover:bg-gray-800/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-800">
              <div className="bg-gray-800 inline-block p-4 rounded-full mb-4"><ShieldCheck className="w-8 h-8 text-blue-400" /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Tough & Waterproof</h3>
              <p className="text-gray-400">Our Tyvek wristbands are tear-resistant and perfect for any weather or water-based events.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-8 rounded-xl bg-gray-950/50 hover:bg-gray-800/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-800">
              <div className="bg-gray-800 inline-block p-4 rounded-full mb-4"><Zap className="w-8 h-8 text-blue-400" /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Vibrant Custom Prints</h3>
              <p className="text-gray-400">Add your logo, text, or any design with our high-quality printing for a professional look.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-8 rounded-xl bg-gray-950/50 hover:bg-gray-800/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-800">
              <div className="bg-gray-800 inline-block p-4 rounded-full mb-4"><Truck className="w-8 h-8 text-blue-400" /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Islandwide Fast Delivery</h3>
              <p className="text-gray-400">We ensure your order reaches you quickly and safely, anywhere in Sri Lanka.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Product Showcase Section --- */}
      <section className="bg-black py-20 overflow-x-hidden" aria-labelledby="showcase-heading">
        <div className="container mx-auto px-4">
          <motion.div initial="initial" whileInView="animate" variants={fadeIn} viewport={{ once: true, amount: 0.5 }} className="text-center mb-12">
            <h2 id="showcase-heading" className="text-3xl font-bold text-white">Explore Our Popular Styles</h2>
            <p className="text-gray-400">A look at some of our customer favorites.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* These would eventually be mapped from product data */}
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <motion.div variants={floating} animate="animate">
                <Image src="/homepage1.jpg" alt="Blue Tyvek Wristband" width={300} height={300} className="mx-auto mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">Event Pro Blue</h3>
              <div className="flex justify-center my-2"><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }} className="bg-gray-900 p-6 rounded-lg text-center border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              <motion.div variants={floating} animate="animate">
                <Image src="/home2.jpg" alt="Green Tyvek Wristband" width={300} height={300} className="mx-auto mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">VIP Access Green</h3>
              <div className="flex justify-center my-2"><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <motion.div variants={floating} animate="animate">
                <Image src="/home3.jpg" alt="Red Tyvek Wristband" width={300} height={300} className="mx-auto mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">Party Starter Red</h3>
              <div className="flex justify-center my-2"><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-yellow-400" /><Star className="w-5 h-5 text-gray-700" /></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="bg-blue-600 text-white"
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-2">Ready to Secure Your Event?</motion.h2>
          <motion.p variants={fadeIn} transition={{ delay: 0.2 }} className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get the best quality Tyvek wristbands in Sri Lanka. Click below to explore all our products or contact us for a custom quote.
          </motion.p>
          <motion.div variants={fadeIn} transition={{ delay: 0.4 }}>
            <Link href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
              Shop All Wristbands <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}