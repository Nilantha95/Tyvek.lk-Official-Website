// file: app/layout.tsx

import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Using Geist as per your file
import './globals.css';

// 1. Import your custom components
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// 2. Updated metadata for better SEO
export const metadata: Metadata = {
  title: 'Tyvek.lk - Custom Wristbands in Sri Lanka',
  description: 'Durable, waterproof, and custom-printed Tyvek wristbands for events, parties, and venues across Sri Lanka.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {/* 3. NavBar is placed at the top of every page */}
        <NavBar />

        <main>
          {/* Your page content (e.g., from page.tsx) will be rendered here */}
          {children}
        </main>

        {/* 4. Footer is placed at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}