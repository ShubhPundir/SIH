import React from "react";
import { Link } from "react-router-dom";
import hometry from "../assets/hometry.gif";
import "./Home.css"; // Assuming you have CSS for animations in this file

function Home() {
  return (
    <div>
      <section className="hero-section bg-white text-blue-600 py-20 relative overflow-hidden font-tech z-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left side content */}
          <div className="text-center md:text-left animate-fadeInLeft space-y-8 z-30 relative">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Protect Your Personal Data
            </h1>
            <p className="text-lg mb-8 max-w-md text-gray-500">
              Keep your sensitive information safe and secure with cutting-edge data protection solutions.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/data"
                className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 animate-fadeInDown"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right side GIF */}
          <div className="relative z-20 flex justify-center md:justify-end items-center">
            <img
              className="gif-overlay w-4/5 h-auto max-w-lg rounded-lg object-cover animate-fadeInRight"
              src={hometry}
              alt="Data Protection GIF"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
