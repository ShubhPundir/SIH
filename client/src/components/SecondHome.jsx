import React from "react";
import { Link } from "react-router-dom";
import homedna from "../assets/homedna.mp4";
import "./Home.css";

function SecondHome() {
  return (
    <div>
      <section className="hero-section bg-black text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left side video */}
          <div className="relative flex justify-start items-center">
            <video
              className="w-full h-auto max-w-md md:max-w-full object-cover rounded-lg shadow-lg animate-fadeInLeft"
              src={homedna}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          {/* Right side content */}
          <div className="text-center md:text-left animate-fadeInRight">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Keep your Personal Information to Yourself
            </h1>
            <p className="text-lg mb-6 max-w-md text-gray-300">
              Manage your data all by yourself.
            </p>
            <Link
              to="/dashboard"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondHome;
