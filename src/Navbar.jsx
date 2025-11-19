import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Aniq shb</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg">
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">About</a></li>
        <li><a href="#" className="hover:text-blue-400">Services</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-7 h-1 bg-white rounded"></span>
        <span className="w-7 h-1 bg-white rounded"></span>
        <span className="w-7 h-1 bg-white rounded"></span>
      </button>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-16 right-0 bg-gray-900 w-48 p-6 flex flex-col gap-4 text-lg transition-all duration-300 md:hidden ${
          open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"
        }`}
      >
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">About</a></li>
        <li><a href="#" className="hover:text-blue-400">Services</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
