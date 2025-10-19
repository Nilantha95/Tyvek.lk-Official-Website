// file: app/contact/page.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  const headline = "Let's Create Together";

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-black text-white">
      {/* --- Hero Section --- */}
      <section className="relative text-center py-20 sm:py-24 md:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            variants={sentence}
            initial="hidden"
            animate="visible"
            // --- Mobile Friendly Change: Responsive font sizes ---
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            {headline.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter} style={{ display: 'inline-block' }}>
                  {char === " " ? "\u00A0" : char} {/* Handles spaces correctly */}
                </motion.span>
              )
            })}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            // --- Mobile Friendly Change: Responsive text sizes ---
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have a question or a project in mind? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* --- Contact Form & Info Section --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* This layout stacks automatically on mobile (flex-col) and goes side-by-side on large screens (lg:flex-row) */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Column 1: Contact Information & Map */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-2/5"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Details</h2>
              <motion.div variants={fadeIn} className="flex items-start gap-4 mb-6">
                <div className="bg-gray-800 p-3 rounded-full flex-shrink-0"><Mail className="w-6 h-6 text-blue-400" /></div>
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <a href="mailto:info@tyvek.lk" className="text-gray-400 hover:text-blue-400 transition-colors">info@tyvek.lk</a>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-start gap-4 mb-8">
                <div className="bg-gray-800 p-3 rounded-full flex-shrink-0"><Phone className="w-6 h-6 text-blue-400" /></div>
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <a href="tel:+94771234567" className="text-gray-400 hover:text-blue-400 transition-colors">+94 77 123 4567</a>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <div className="flex items-start gap-4 mb-4">
                   <div className="bg-gray-800 p-3 rounded-full flex-shrink-0"><MapPin className="w-6 h-6 text-blue-400" /></div>
                   <div>
                    <h3 className="text-xl font-semibold">Our Office</h3>
                    <p className="text-gray-400">Colombo, Sri Lanka</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253482.1458217234!2d79.68280231899148!3d6.921838233983487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1729322047055!5m2!1sen!2slk"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Colombo, Sri Lanka"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>

            {/* Column 2: Contact Form */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              variants={fadeIn}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full lg:w-3/5 p-6 sm:p-8 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-gray-950/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input type="email" name="email" id="email" required className="w-full bg-gray-950/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input type="text" name="subject" id="subject" required className="w-full bg-gray-950/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea name="message" id="message" rows={4} required className="w-full bg-gray-950/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] inline-flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}