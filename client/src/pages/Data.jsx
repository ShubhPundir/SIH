import React, { useState } from "react";
import { Link } from "react-router-dom";
import HighlightedText from "../components/HighlightedText";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState("");
  const [edata, setEData] = useState(false);
  const [loading, setLoading] = useState(false);
  function resetData() {
    setData("");
  }
  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEData(true);
    }, 1000);
  };

  function handleOutput(e) {
    setData(e.target.value);
  }

  function displayData() {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }
  useEffect(() => {}, [loading]);
  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center bg-slate-100">
      <div className="flex gap-2 justify-center w-screen">
        {/* Left Side */}
        <div className="w-2/5 bg-white h-[400px] flex flex-col p-3 rounded-md ">
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
              onClick={handleClick}
              disabled={loading}
              className={`my-3 btn btn-outline btn-success rounded-xl py-2 px-5 text-xl  hover:text-white ${
                loading ? "bg-green-500 cursor-not-allowed" : ""
              } relative`}
            >
              {loading ? (
                <span className="spinner">Loading...</span>
              ) : (
                "Generate"
              )}
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
            {/* <button
              onClick={displayData}
              className="my-3 btn btn-outline btn-error rounded-xl py-2 px-5 text-xl  hover:text-white"
            >
              Regenerate
            </button> */}
            <Link
              to={"/dashboard"}
              className=" hover:text-white my-3 btn btn-outline btn-info  rounded-xl py-2 px-5 text-xl "
            >
              Save
            </Link>
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
