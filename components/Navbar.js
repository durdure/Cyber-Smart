import Link from 'next/link';
import Image from 'next/image';
import logo from './cyberSmartLogo.png';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-[80%] mx-auto bg-gradient-to-b from-orange-900 to-black p-4 shadow-2xl border-b border-orange-500 z-50 rounded-lg mt-10 h-[6%]" ><div className="flex items-center md:hidden">
    <button
      onClick={toggleMenu}
      className="text-orange-400 focus:outline-none"
    >

      {isOpen ? 'Close' : 'Menu'}
    </button>
  </div>
      <div className="flex justify-between items-center w-full" 
      style={
        {
          marginTop: "-15px",
        }
      }
      
      >
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Cyber Smart Logo" width={45} height={45} />
          <span className="text-white font-extrabold text-2xl tracking-widest">
            Cyber Smart
          </span>
        </div>
       
        <ul className={`flex-col  md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} md:space-x-8`}>
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
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-400 focus:outline-none"
          >

            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </nav>
  );
}