import Navbar from '@/components/Navbar';
import { FaTelegramPlane, FaInstagram, FaTiktok } from 'react-icons/fa';
import Footer from './footer';

const socialLinks = [
  {
    href: "https://t.me/cybersmart",
    icon: <FaTelegramPlane />,
    label: "Telegram",
  },
  {
    href: "https://www.instagram.com/cybersmart",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@cybersmart",
    icon: <FaTiktok />,
    label: "TikTok",
  },
];

export default function Social() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <Navbar />
        <h1 className="text-4xl font-extrabold mb-6 text-orange-400">Connect with Us!</h1>
        <p className="text-lg mb-12 text-gray-400">
          Follow us on social media and become a part of the Cyber Smart community!
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
          {socialLinks.map(({ href, icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-5xl text-orange-400 hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
              aria-label={`Follow us on ${label}`}
            >
              {icon}
              <p className="text-sm mt-2">{label}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
