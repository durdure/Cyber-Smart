import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-orange-900 to-black p-6 md:p-4 shadow-2xl border-b border-orange-500 mb-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/cyber.jpg" alt="Cyber Smart Logo" width={50} height={50} />
          <span className="text-white font-extrabold text-2xl tracking-widest">
            Cyber Smart
          </span>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-400 focus:outline-none"
          >

            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} md:space-x-8`}>
          {['/', '/about', '/volunteer', '/social', '/contact'].map((path, index) => {
            const labels = ['Home', 'About', 'Volunteer', 'Social Media', 'Contact'];
            return (
              <li key={index}>
                <Link href={path} className="text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 ease-in-out">
                  {labels[index]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}