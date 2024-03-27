"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-opacity-50 backdrop-filter backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <Image src="/Logo.png" alt="Logo" width={45} height={45} />
                <span className="font-semibold text-white text-lg">Berdegeus.dev</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="#Home" className="py-4 px-2 text-white font-semibold">Home</Link>
            <Link href="#About" className="py-4 px-2 text-white font-semibold">Sobre</Link>
            <Link href="#Experience" className="py-4 px-2 text-white font-semibold">Experiencia</Link>
            <Link href="#Projects" className="py-4 px-2 text-white font-semibold">Projetos</Link>
            <Link href="#Contact" className="py-4 px-2 text-white font-semibold">Contato</Link>
          </div>
          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="w-6 h-6 text-white" /> : <FaBars className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mo bile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="#Home" className="block py-2 px-4 text-sm text-white">Home</Link>
        <Link href="#About" className="block py-2 px-4 text-sm text-white">Sobre</Link>
        <Link href="#Experience" className="block py-2 px-4 text-sm text-white">Projetos</Link>
        <Link href="#Contact" className="block py-2 px-4 text-sm text-white">Contato</Link>
      </div>
    </nav>
  );
};

export default Nav;