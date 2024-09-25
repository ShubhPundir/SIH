import { useDispatch, useSelector } from "react-redux";
import { printData } from "../store/slices/outputSlice";
import { useState } from "react";

function AllData() {
  const [highlight, setHighlight] = useState();
  const handlePIL = (id) => {
    setHighlight(id);
    dispatch(printData(id));
  };
  const pilData = useSelector((state) => state.pilData.pils);
  const dispatch = useDispatch();

  return (
    <div style={{ height: "calc(100vh - 20vh)" }} className="overflow-y-scroll">
      {pilData.map((item) => (
        <div key={item.date}>
          <hr className="bg-black my-2 dark:bg-white h-[2px]" />
          <h1 className="text-sm my-2 font-semibold">{item.date}</h1>
          <div className="rounded-md">
            {item.items.map((pil) => (
              <button
                onClick={() => handlePIL(pil)}
                key={pil.id}
                className="w-full text-left block font-roboto cursor-pointer hover:bg-slate-300  text-base text-black leading-tight tracking-wider font-semibold my-2 py-2 px-2"
              >
                {pil.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllData;
