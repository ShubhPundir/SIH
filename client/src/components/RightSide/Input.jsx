import React, { useEffect, useRef, useState } from "react";
import { FaFileUpload } from "react-icons/fa";
function Input() {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "28px"; // Reset height to auto to get the correct scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scro
    }
  }, [value]);

  return (
    <div
      style={{ width: "calc(100% - 30%)" }}
      className="fixed flex justify-center  items-center bottom-20 right-0"
    >
      <div className="flex gap-2 items-center bg-base-300 w-[80%] rounded-full p-2 px-5">
        <FaFileUpload className="text-4xl" />
        <form>
          <textarea
            ref={textareaRef}
            onChange={(e) => setValue(e.target.value)}
            placeholder="PIL details "
            name=""
            id=""
            className="resize-none bg-transparent py-1 px-2 w-full outline-none max-h-32  text-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default Input;
