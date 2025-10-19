// file: app/products/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

// Mock product data - you can replace this with data from your database/API
const products = [
  {
    id: 1,
    name: 'Event Pro Wristband',
    tagline: 'The Standard for Any Event.',
    description: 'Durable, waterproof, and perfect for single-day events. Available in 15 vibrant colors.',
    price: 'LKR 30.00',
    imageUrl: '/homepage1.jpg', // Make sure you have this image in your /public folder
  },
  {
    id: 2,
    name: 'VIP Custom Print',
    tagline: 'Exclusive Access, Premium Feel.',
    description: 'Feature your logo with high-quality printing. Ideal for VIP areas and special guests.',
    price: 'LKR 55.00',
    imageUrl: '/home2.jpg', // Make sure you have this image in your /public folder
  },
  {
    id: 3,
    name: 'Party Starter Neon',
    tagline: 'Glow Under the Lights.',
    description: 'Bright, fluorescent colors that are perfect for concerts, nightclubs, and parties.',
    price: 'LKR 35.00',
    imageUrl: '/home3.jpg', // Make sure you have this image in your /public folder
  },
  {
    id: 4,
    name: 'Secure Tabless Wristband',
    tagline: 'Maximum Security, No Litter.',
    description: 'Features a unique adhesive that leaves no waste tab behind. Best for eco-friendly events.',
    price: 'LKR 40.00',
    imageUrl: '/homepage1.jpg', // Replace with a unique image
  },
  {
    id: 5,
    name: 'Smart Access QR/NFC',
    tagline: 'The Future of Entry.',
    description: 'Integrate with our smart gate system for seamless, scannable access control.',
    price: 'Contact for Quote',
    imageUrl: '/home2.jpg', // Replace with a unique image
  },
  {
    id: 6,
    name: 'Multi-Day Vinyl',
    tagline: 'Tough Enough for a Festival.',
    description: 'A more durable vinyl material for multi-day events, ensuring season-long security.',
    price: 'LKR 120.00',
    imageUrl: '/home3.jpg', // Replace with a unique image
  },
];

export default function ProductsPage() {
  const listVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className="bg-black text-white">
      {/* --- Hero Section --- */}
      <section className="relative text-center py-20 sm:py-24 md:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            Our Wristband Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our range of high-quality Tyvek and vinyl wristbands, designed for every occasion.
          </motion.p>
        </div>
      </section>

      {/* --- Products Grid --- */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={listVariants}
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col group transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-sm font-semibold text-blue-400 mt-1">{product.tagline}</p>
                  <p className="text-gray-400 mt-3 flex-grow">{product.description}</p>
                  <p className="text-2xl font-semibold text-white mt-4">{product.price}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                    <Link href={`/products/${product.id}`} className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
                      <Eye size={18} />
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}