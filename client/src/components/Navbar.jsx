import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <Link to="/" className="tracking-wide">PrivacyShield</Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition transform duration-300 ease-in-out"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-lg">
          {['Home', 'Dashboard', 'Data Protection', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-gray-300 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-slate-800 transition-transform duration-500 ease-in-out ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          } shadow-lg z-40`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {['Home', 'Dashboard', 'Data Protection', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
