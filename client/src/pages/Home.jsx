import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState("");
  const [edata, setEData] = useState("");
  function handleOutput(e) {
    setData(e.target.value);
  }
  console.log(data);

  function displayData(params) {
    setEData(`MASKED DATA:
My name is Sh** Pu*.
120 *******,
Toll*******
AADHAR: ****4644

contact us at sh***.com`);
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex gap-2 ">
        <div>
          <textarea
            onChange={handleOutput}
            className="textarea textarea-secondary w-[400px] h-[400px] text-xl "
            placeholder="Enter your Data"
          ></textarea>
        </div>
        <div>
          <textarea
            // onChange={displayData}
            readOnly
            value={edata}
            className="textarea textarea-secondary w-[400px] h-[400px] text-xl "
            placeholder="Masked Data.."
          ></textarea>
        </div>
      </div>
      <button
        onClick={displayData}
        className="my-3 bg-green-400 w-[400px] rounded-xl py-2 px-5 text-xl"
      >
        Convert
      </button>
      <Link
      to={'/dashboard'}
        className="my-3 text-blue-500"
      >
        Go To Dashboard
      </Link>
    </div>
  );
}

export default Home;
