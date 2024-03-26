"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; 

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
              {/* TODO: add logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <Image src="/Logo.png" alt="Logo" width={45} height={45} />
                <span className="font-semibold text-white text-lg">Berdegeus.dev</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-4 px-2 text-white font-semibold">Home</a>
            <a href="#" className="py-4 px-2 text-white font-semibold">Sobre</a>
            <a href="#" className="py-4 px-2 text-white font-semibold">Experiencia</a>
            <a href="#" className="py-4 px-2 text-white font-semibold">Projetos</a>
            <a href="#" className="py-4 px-2 text-white font-semibold">Contato</a>
          </div>
          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="w-6 h-6 text-white" /> : <FaBars className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm text-white">Home</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Sobre</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Projetos</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Contato</a>
      </div>
    </nav>
  );
};

export default Nav;