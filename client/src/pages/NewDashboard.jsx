import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiMiniBars3 } from "react-icons/hi2";
import { data } from "./jsonData.js";
import Dashboard from "../components/ViewDashboard.jsx";
import Card from "../components/Card.jsx";
import ViewDashboard from "../components/ViewDashboard.jsx";
const NewDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  //   console.log(data[0]["items"][0]["title"]);
  //   console.log(data["items"]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const addTable = (data) => {
    setSelectedItem(data);
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="w-64 bg-gray-800 text-white p-4 transition-all duration-300">
          {/* <div className="text-2xl font-semibold mb-6">Sidebar</div> */}
          <ul>
            {data.map((item) =>
              item["items"].map((title) => (
                <li className="mb-4" key={Math.random()}>
                  <button
                    onClick={() => addTable(title)}
                    className="hover:text-gray-400"
                  >
                    {title.title}
                  </button>
                </li>
              ))
            )}
          </ul>
        </aside>
      )}

      {/* Main content */}
      <main
        className={`flex-1 bg-gray-100 p-4 transition-all duration-300 ${
          isSidebarOpen ? "ml-0" : "ml-0"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="fixed top-1 z-10 left-0 hover:bg-slate-600 p-2 rounded-lg"
        >
          {isSidebarOpen ? (
            <MdOutlineClose className="text-3xl text-white" />
          ) : (
            <HiMiniBars3 className="text-3xl text-white" />
          )}
        </button>

        {/* Hero Section */}
        <div className="bg-white p-2 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to spane Dashboard!
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            iste.
          </p>
        </div>
        {/* ViewDashboard */}
        <ViewDashboard items={selectedItem["allowedUser"]} />
        {/* Selected Item*/}
        <Card data={selectedItem} />
      </main>
    </div>
  );
};

export default NewDashboard;
