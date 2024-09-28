import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import SecondHome from "../components/SecondHome";
import Home from "../components/Home";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Sections */}
      <Home />
      <SecondHome />

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Our Data Protection?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4">
              <div className="p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4">Top-Notch Security</h3>
                <p className="text-gray-300">
                  We use advanced encryption technologies to protect your personal data from unauthorized access.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4">
              <div className="p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4">Full Privacy Control</h3>
                <p className="text-gray-300">
                  You have complete control over your data, with tools to manage, delete, or export it at any time.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4">
              <div className="p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4">Compliance with Regulations</h3>
                <p className="text-gray-300">
                  Our system complies with major data protection regulations like GDPR, ensuring your data is handled legally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2024 Personal Data Protection. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="/" className="hover:underline text-gray-300">Privacy Policy</a>
            <a href="/" className="hover:underline text-gray-300">Terms of Service</a>
            <a href="/" className="hover:underline text-gray-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
