import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiMiniBars3 } from "react-icons/hi2";
import { data } from "./jsonData.js";
import Dashboard from "../components/ViewDashboard.jsx";
import HeroImage from "../assets/HeroImage.jpg";

import Card from "../components/Card.jsx";
import ViewDashboard from "../components/ViewDashboard.jsx";

const NewDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addTable = (data) => {
    setSelectedItem(data);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-200 to-slate-400">
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="w-64 bg-gray-900 text-white p-4 transition-all duration-500 transform ease-in-out">
          <ul>
            {data.map((item) =>
              item["items"].map((title) => (
                <li className="mb-4" key={Math.random()}>
                  <button
                    onClick={() => addTable(title)}
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    {title.title}
                  </button>
                </li>
              ))
            )}
          </ul>
        </aside>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-0 z-10 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300"
      >
        {isSidebarOpen ? (
          <MdOutlineClose className="text-3xl text-white" />
        ) : (
          <HiMiniBars3 className="text-3xl text-white" />
        )}
      </button>

      {/* Main Content */}
      {Object.keys(selectedItem).length === 0 ? (
        <main
          className={`flex-1 relative p-4 transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          {/* Hero Section */}
          <section className="py-10">
            <div className="container mx-auto px-6">
              <img
                src={HeroImage}
                alt="Dashboard Hero"
                className="w-full rounded-lg shadow-xl transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </section>

          {/* Welcome Section */}
          <div className="absolute top-1/3 left-1/4 right-1/4 bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-opacity duration-1000 opacity-90 hover:opacity-100">
            <h1 className="text-3xl font-extrabold mb-4 text-gray-900 tracking-wide">
              Welcome to Spane Dashboard!
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Manage your data and insights effortlessly with our sleek and
              user-friendly interface.
            </p>
          </div>
        </main>
      ) : (
        <div className="fade-in">
          {/* View Dashboard */}
          <ViewDashboard items={selectedItem["allowedUser"]} />

          {/* Selected Item Details */}
          <Card data={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default NewDashboard;
