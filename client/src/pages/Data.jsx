import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HighlightedText from "../components/HighlightedText";

function Home() {
  const [data, setData] = useState("");
  const [edata, setEData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const resetData = () => {
    setData("");
    setEData(false);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEData(true);
    }, 1000);
  };

  const handleOutput = (e) => {
    setData(e.target.value);
  };

  const displayData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {}, [loading]);

  return (
    <div className="h-[100vh] bg-gradient-to-r from-indigo-50 to-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl p-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Input Section */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-8 transform transition duration-300 min-h-[30rem]">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Enter Data</h2>
          <textarea
            onChange={handleOutput}
            value={data}
            className="w-full h-72 p-4 border border-gray-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            placeholder="Type something..."
          ></textarea>
          <div className="flex justify-between mt-6">
            <button
              onClick={resetData}
              className="py-3 px-8 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Reset
            </button>
            <button
              onClick={handleClick}
              disabled={loading}
              className={`py-3 px-8 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-8 transform transition duration-300 min-h-[30rem]">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Generated Data</h2>
          <div className="w-full h-72 p-4 border border-gray-300 rounded-lg text-lg overflow-auto bg-gray-50">
            {edata ? <HighlightedText /> : <span className="text-gray-400">No data generated yet</span>}
          </div>

          <div className="flex justify-between mt-6 relative">
            {/* Share Via Button with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="py-3 px-8 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
              >
                Share Via
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content absolute bg-white border rounded-lg shadow-lg mt-2 w-40 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">PrivacyShield</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Google Drive</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Copy</a>
                </div>
              )}
            </div>

            <button
              onClick={displayData}
              className="py-3 px-8 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Link to Dashboard */}
      <Link to={"/dashboard"} className="mt-8 text-indigo-600 hover:text-indigo-800 transition">
        Go To Dashboard
      </Link>
    </div>
  );
}

export default Home;
