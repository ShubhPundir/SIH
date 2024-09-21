import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import HighlightedText from "./HighlightedText";

function Home() {
  const [data, setData] = useState("");
  const [edata, setEData] = useState(false);
  function resetData() {
    setData("");
  }

  function handleOutput(e) {
    setData(e.target.value);
  }

  function displayData() {
    setEData(true);
    //     setEData(`MASKED DATA:
    // My name is Sh** Pu*.
    // 120 *******,
    // Toll*******
    // AADHAR: ****4644

    // contact us at sh***.com`);
  }
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <div className="flex gap-2 justify-center w-screen">
        {/* Left Side */}
        <div className="w-2/5 bg-white h-[400px] flex flex-col p-3 rounded-md">
          <span className="text-2xl ml-1 mb-1 font-roboto">Enter data </span>
          <textarea
            onChange={handleOutput}
            value={data}
            className="w-full h-[300px] text-xl resize-none outline-none border rounded-md p-3"
            placeholder="..."
          ></textarea>
          <div className="flex justify-between">
            <button
              onClick={resetData}
              className="my-3 btn btn-outline btn-error rounded-xl py-2 px-5 text-xl  hover:text-white"
            >
              Reset
            </button>
            <button
              onClick={displayData}
              className=" hover:text-white my-3 btn btn-outline btn-success  rounded-xl py-2 px-5 text-xl "
            >
              Convert
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-2/5 bg-white h-[400px] flex flex-col p-3 rounded-md">
          <span className="text-2xl ml-1 mb-1 font-roboto">Generated Data</span>
          <div
            onChange={handleOutput}
            className="w-full h-[300px] text-xl resize-none outline-none border rounded-md p-3"
            placeholder="..."
          >
            {edata ? <HighlightedText /> : null}
          </div>
          <div className="flex justify-between">
            <button
              onClick={displayData}
              className="my-3 btn btn-outline btn-error rounded-xl py-2 px-5 text-xl  hover:text-white"
            >
              Regenerate
            </button>
            <button
              onClick={displayData}
              className=" hover:text-white my-3 btn btn-outline btn-info  rounded-xl py-2 px-5 text-xl "
            >
              Save
            </button>
          </div>
        </div>
        {/* Tags */}
        <div className="flex flex-col gap-2 bg-white rounded-md p-3">
          <div>
            <button className="btn btn-outline btn-sm w-full">TAGS</button>
          </div>
          <div className="flex  items-center gap-1 p-1 border rounded bg-red-500 hover:bg-red-300 cursor-pointer">
            <span>
              <FaCheck />
            </span>
            <span className="bg-white px-1 rounded-sm  w-full">Name</span>
          </div>
          <div className="w-full flex items-center gap-1 p-1 border rounded bg-yellow-500 hover:bg-red-300 cursor-pointer">
            <span>
              <FaCheck />
            </span>
            <span className="bg-white px-1 rounded-sm w-full">Mobile</span>
          </div>
          <div className="flex  items-center gap-1 p-1 border rounded bg-green-500 hover:bg-red-300 cursor-pointer">
            <span>
              <FaCheck />
            </span>
            <span className="bg-white px-1 rounded-sm w-full">Location</span>
          </div>
          <div className="flex  items-center gap-1 p-1 border rounded bg-pink-500 hover:bg-red-300 cursor-pointer">
            <span>
              <FaCheck />
            </span>
            <span className="bg-white px-1 rounded-sm w-full">IDENTIFICATION</span>
          </div>
          <div className="flex  items-center gap-1 p-1 border rounded bg-red-500 hover:bg-red-300 cursor-pointer">
            <span>
              <FaCheck />
            </span>
            <span className="bg-white px-1 rounded-sm w-full">DATE</span>
          </div>
        </div>
      </div>
      {/* Link to Dashboard */}
      <Link to={"/dashboard"} className="my-3 text-blue-500">
        Go To Dashboard
      </Link>
    </div>
  );
}

export default Home;
