// file: components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Tyvek.lk. All rights reserved.</p>
        <p className="text-gray-400 mt-2">Your Trusted Wristband Partner in Sri Lanka.</p>
      </div>
    </footer>
  );
}