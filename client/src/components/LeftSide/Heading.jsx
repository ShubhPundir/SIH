import { FaRegSquarePlus } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Heading() {
  return (
    <div className="flex justify-between items-center w-full">
      <button>
        <h1 className="text-4xl">PIL</h1>
        {/* <image className="w-20 h-20" alt="Loading.." /> */}
      </button>
      <button>
        <FaRegSquarePlus className="text-4xl text-white"/>
      </button>
    </div>
  );
}

export default Heading;
