// file: components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        {/* --- Mobile Friendly Change: Grid stacks automatically. Added text alignment. --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 text-center md:text-left">
          
          {/* Column 1: Logo and Tagline */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/Tyvek.lk__1_removed2.png"
                alt="Tyvek.lk Logo"
                width={200}
                height={50} // Aspect ratio for optimization
                className="h-20 w-auto" // Visual size control
              />
            </Link>
            <p className="text-gray-400 max-w-xs">
              Your Trusted Wristband Partner in Sri Lanka.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">Wristbands</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="mailto:info@tyvek.lk" className="hover:text-blue-400 transition-colors">info@tyvek.lk</a></li>
              <li><a href="tel:+94771234567" className="hover:text-blue-400 transition-colors">+94 77 123 4567</a></li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            {/* --- Mobile Friendly Change: Centered social icons on mobile --- */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tyvek.lk. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}