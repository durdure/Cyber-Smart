import Navbar from '@/components/Navbar';

import { FaTelegramPlane, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Social() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <Navbar />
        <h1 className="text-4xl font-extrabold mb-6 text-orange-400">Connect with Us!</h1>
        <p className="text-lg mb-12 text-gray-400">
          Follow us on social media and become a part of the Cyber Smart community!
        </p>

       
        <div className="flex justify-center space-x-12">
          <a
            href="https://t.me/cybersmart"
            target="_blank"
            className="text-5xl text-orange-400 hover:text-orange-300 transition duration-300 ease-in-out"
          >
            <FaTelegramPlane />
            <p className="text-sm mt-2">Telegram</p>
          </a>
          
          <a
            href="https://www.instagram.com/cybersmart"
            target="_blank"
            className="text-5xl text-orange-400 hover:text-orange-300 transition duration-300 ease-in-out"
          >
            <FaInstagram />
            <p className="text-sm mt-2">Instagram</p>
          </a>
         
          <a
            href="https://www.tiktok.com/@cybersmart"
            target="_blank"
            className="text-5xl text-orange-400 hover:text-orange-300 transition duration-300 ease-in-out"
          >
            <FaTiktok />
            <p className="text-sm mt-2">TikTok</p>
          </a>
        </div>
      </div>
    </section>
  );
}
