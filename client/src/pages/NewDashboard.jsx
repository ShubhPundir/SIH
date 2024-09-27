import React, { useEffect, useState } from "react";
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
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const addTable = (data) => {
    setSelectedItem(data);
    setIsSidebarOpen((prev) => !prev);
  };
  useEffect(() => {
    setSelectedItem(data[0]["items"][0]);
    setShow(true)
  }, []);

  return (
    <div className="flex min-h-screen  bg-slate-300 ">
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="w-64 bg-gray-800 text-white p-4 transition-all duration-300">
          {/* <div className="text-2xl font-semibold mb-6">Sidebar</div> */}
          <ul>
            {data.map((item) =>
              item["items"].map((title) => (
                <li
                  className="p-1 hover:bg-gray-900 rounded-md"
                  key={Math.random()}
                >
                  <button
                    onClick={() => addTable(title)}
                    className="hover:text-gray-400"
                  >
                    {title.id}
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
        className="fixed top-1 z-10 left-0 hover:bg-slate-600 p-2 rounded-lg"
      >
        {isSidebarOpen ? (
          <MdOutlineClose className="text-3xl text-white" />
        ) : (
          <HiMiniBars3 className="text-3xl text-white" />
        )}
      </button>

      {/* Main content */}
      <div className="flex bg-slate-300 flex-col justify-center items-center w-full h-full">
        {/* ViewDashboard */}
        {show  ? (
          <ViewDashboard items={selectedItem["allowedUser"]} />
        ) : null}
        ;{/* Selected Item*/}
        {selectedItem ? <Card data={selectedItem} /> : null}
      </div>

      {/*Optional Extra render */}
      {/* {selectedItem && Object.keys(selectedItem).length === 0 ? (
        <main
          className={`flex-1 relative bg-gray-300  p-4 transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          <section className="py-2">
            <div className="container mx-auto px-6 ">
              <img
                src={HeroImage} 
                alt="Data Protection"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </section>
          <div className="absolute top-1/4 left-1/4 right-1/4  bg-white/30 backdrop-blur-md  p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">
              Welcome to spane Dashboard!
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              iste.
            </p>
          </div>
        </main>
      ) : (
        <div className="flex bg-slate-300 flex-col justify-center items-center w-full h-full">
          <ViewDashboard items={selectedItem["allowedUser"]} />
          <Card data={selectedItem} />
        </div>
      )} */}
    </div>
  );
};

export default NewDashboard;
