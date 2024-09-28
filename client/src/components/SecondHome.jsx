import React from "react";
import { Link } from "react-router-dom";
import secondtry from "../assets/secondtry.gif";
import "./Home.css"; // Assuming you're reusing the same CSS

function SecondHome() {
  return (
    <div>
      <section className="hero-section bg-white text-blue-600 py-20 relative overflow-hidden font-tech">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left side GIF */}
          <div className="relative flex justify-end items-center">
            <img
              className="w-full h-auto max-w-lg rounded-lg object-cover animate-fadeInLeft"
              src={secondtry} // Correctly using the imported GIF file
              alt="Data Protection GIF"
            />
          </div>

          {/* Right side content */}
          <div className="text-center md:text-left space-y-8 animate-fadeInRight">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Keep Your Personal Information to Yourself
            </h1>
            <p className="text-lg mb-8 max-w-md text-gray-500">
              Manage your data with ease and full control.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondHome;
