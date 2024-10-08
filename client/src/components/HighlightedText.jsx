import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// Data object (as provided)
const initialData = {
  "0,12": ["Shubh Pundir", "NAME"],
  "47,72": ["120 Deshparan Sasmal Road", "LOCATION 1"],
  "74,81": ["Tollygunge,Kolkata - 700033", "LOCATION 2"],
  "110,122": ["+91 5956554665", "MOBILE"],
  "181,185": ["credit card", "IDENTIFICATION"],
  "199,209": ["CVV: 784", "IDENTIFICATION"],
  "215,223": ["09/26\n\n\n", "DATE"],
};

// Original full text
const fullText = `Shubh Pundir is listed at 120 Deshparan Sasmal Road, Tollygunge, Kolkata - 700033. 
He can be contacted at +91 5956554665. His credit card information is stored. 
Card details: CVV: 784 Expiry date: 09/26`;

// Color map for different types
const colorMap = {
  NAME: "yellow",
  "LOCATION 1": "lightgreen",
  "LOCATION 2": "lightblue",
  MOBILE: "lightcoral",
  IDENTIFICATION: "lightpink",
  DATE: "lightgray",
};

const HighlightedText = () => {
  const [data, setData] = useState(initialData); // Store current data
  const [selectedTag, setSelectedTag] = useState(null); // Track selected tag

  // Function to handle removing a highlighted item
  const handleRemoveItem = (keyToRemove) => {
    const updatedData = { ...data };
    delete updatedData[keyToRemove];
    setData(updatedData); // Update the state to reflect the removal
  };

  const renderHighlightedText = () => {
    let highlightedElements = [];
    let lastIndex = 0;

    // Convert key object keys into an array of entries (start, end, [value, label])
    const entries = Object.entries(data).map(([key, value]) => {
      const [start, end] = key.split(",").map(Number); // Convert string range back to numbers
      return { start, end, value, key }; // Include the key in the entry
    });

    // Sort entries by their start position to ensure text is processed in order
    entries.sort((a, b) => a.start - b.start);

    entries.forEach((entry) => {
      // Push unhighlighted text before the highlighted part
      if (entry.start > lastIndex) {
        highlightedElements.push(
          <span key={lastIndex}>{fullText.slice(lastIndex, entry.start)}</span>
        );
      }

      // Highlight the text if the selected tag matches, or if "All" is selected
      if (!selectedTag || selectedTag === entry.value[1] || selectedTag === "ALL") {
        highlightedElements.push(
          <span
            key={entry.start}
            className="text-sm rounded-sm px-2 border-[1px] border-black relative"
            style={{
              backgroundColor: colorMap[entry.value[1]],
            }}
          >
            {fullText.slice(entry.start, entry.end)}
            <span className="ml-2 bg-slate-200 text-[9px] rounded-sm px-1 py-[1px]">
              {entry.value[1]}
            </span>
            {/* Cross button to remove the item */}
            <button
              className="absolute top-0 right-0 text-red-500 text-xs hover:text-red-700"
              onClick={() => handleRemoveItem(entry.key)}
            >
              <IoClose />
            </button>
          </span>
        );
      } else {
        // If tag doesn't match, push the text without highlight
        highlightedElements.push(
          <span key={entry.start}>
            {fullText.slice(entry.start, entry.end)}
          </span>
        );
      }

      // Update the last processed index
      lastIndex = entry.end;
    });

    // Push remaining unhighlighted text, if any
    if (lastIndex < fullText.length) {
      highlightedElements.push(
        <span key={lastIndex}>{fullText.slice(lastIndex)}</span>
      );
    }

    return highlightedElements;
  };

  const renderLegend = () => {
    const uniqueTypes = new Set(Object.values(data).map((item) => item[1]));

    return (
      <div className="mb-4 flex items-center flex-wrap gap-2 text-sm">
        {/* Add the "Select All" option */}
        <div
          onClick={() => setSelectedTag(selectedTag === "ALL" ? null : "ALL")}
          className={`flex items-center w-fit gap-1 p-1 border rounded cursor-pointer ${
            selectedTag === "ALL" ? "opacity-100" : "opacity-60"
          }`}
          style={{
            backgroundColor: "lightyellow",
            border: `1px solid black`,
          }}
        >
          <FaCheck />
          <span className="bg-white px-1 text-sm rounded-sm">ALL</span>
        </div>

        {/* Render other tags */}
        {Array.from(uniqueTypes).map((type) => (
          <div
            key={type}
            onClick={() => setSelectedTag(selectedTag === type ? null : type)} // Toggle tag on click
            className={`flex items-center w-fit gap-1 p-1 border rounded cursor-pointer ${
              selectedTag === type ? "opacity-100" : "opacity-60"
            }`}
            style={{
              backgroundColor: colorMap[type],
              border: `1px solid black`,
            }}
          >
            <FaCheck />
            <span className="bg-white px-1 text-sm rounded-sm">{type}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Legend for types */}
      {renderLegend()}

      {/* Highlighted Text */}
      <div>{renderHighlightedText()}</div>
    </div>
  );
};

export default HighlightedText;
