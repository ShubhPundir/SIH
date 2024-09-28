import React from "react";
import { Link } from "react-router-dom";
import Finger from "../assets/Finger.mp4";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="hero-section bg-black text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Left side content */}
          <div className="text-center md:text-left animate-fadeInLeft">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Protect Your Personal Data
            </h1>
            <p className="text-lg mb-6 max-w-md text-gray-300">
              Keep your sensitive information safe and secure with cutting-edge data protection solutions.
            </p>
            <Link
              to="/data"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Right side video */}
          <div className="relative flex justify-end items-center">
            <video
              className="w-full h-auto max-w-md md:max-w-full rounded-lg object-cover shadow-lg animate-fadeInRight"
              src={Finger}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
