import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/HeroImage.jpg"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Protect Your Personal Data</h1>
          <p className="text-lg mb-6">
            Keep your sensitive information safe and secure with cutting-edge data protection solutions.
          </p>
          <Link to={"/data"} className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-100">
            Get Started
          </Link>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <img
            src={HeroImage} // Placeholder image URL, replace with actual image
            alt="Data Protection"
            className="w-full rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Our Data Protection?</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Top-Notch Security</h3>
                <p>
                  We use advanced encryption technologies to protect your personal data from unauthorized access.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Full Privacy Control</h3>
                <p>
                  You have complete control over your data, with tools to manage, delete, or export it at any time.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Compliance with Regulations</h3>
                <p>
                  Our system complies with major data protection regulations like GDPR, ensuring your data is handled legally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2024 Personal Data Protection. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="/" className="hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline">Terms of Service</a>
            <a href="/" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
