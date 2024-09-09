import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-orange-900 to-black p-4 shadow-2xl border-b border-orange-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
         <Image src="/cyber.jpg" alt="Cyber Smart Logo" width={50} height={50} />
         <span className="text-white font-extrabold text-2xl tracking-widest">
            Cyber Smart
          </span>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 ease-in-out">
              About
            </Link>
          </li>
          <li>
            <Link href="/volunteer" className="text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 ease-in-out">
              Volunteer
            </Link>
          </li>
          <li>
            <Link href="/social"className="text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 ease-in-out">
              Social Media
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
