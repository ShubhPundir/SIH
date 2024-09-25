import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">PrivacyShield</Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
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
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-gray-300 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/data-protection"
            className="hover:text-gray-300 transition duration-300"
          >
            Data Protection
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-indigo-600 shadow-lg">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/data-protection"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Data Protection
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
