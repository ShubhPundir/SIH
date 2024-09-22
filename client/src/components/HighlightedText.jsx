import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

// Data object with array ranges as keys
const data = [
  { range: [0, 12], text: "Shubh Pundir", type: "NAME" },
  { range: [33, 45], text: "Shubh Pundir", type: "NAME" },
  { range: [46, 71], text: "120 Deshparan Sasmal Road", type: "LOCATION 1" },
  {
    range: [73, 101],
    text: "Tollygunge,\nKolkata - 700033",
    type: "LOCATION 2",
  },
  { range: [110, 124], text: "+91 5956554665", type: "MOBILE" },
  { range: [177, 189], text: "credit card\n", type: "IDENTIFICATION" },
  { range: [201, 209], text: "CVV: 784", type: "IDENTIFICATION" },
  { range: [215, 223], text: "09/26\n\n\n", type: "DATE" },
];

// Full text
const fullText = `Shubh Pundir is listed at 120 Deshparan Sasmal Road, Tollygunge, Kolkata - 700033. 
He can be contacted at +91 5956554665. His credit card information is stored. 
Card details: CVV: 784 Expiry date: 09/26 ksjdkkla alkflkad fla lakakl  lkf alak afafjal lakjpoe temrtlrje r`;

// Function to generate punchy dark color
const getRandomPunchyColor = () => {
  const r = Math.floor(50 + Math.random() * 205); // 50-255
  const g = Math.floor(50 + Math.random() * 205); // 50-255
  const b = Math.floor(50 + Math.random() * 205); // 50-255
  return `rgb(${r}, ${g}, ${b})`; // Return the RGB color string
};

// Assign random punchy colors to each type
const colorMap = {
  NAME: getRandomPunchyColor(),
  "LOCATION 1": getRandomPunchyColor(),
  "LOCATION 2": getRandomPunchyColor(),
  MOBILE: getRandomPunchyColor(),
  IDENTIFICATION: getRandomPunchyColor(),
  DATE: getRandomPunchyColor(),
};

const HighlightedText = () => {
  const [highlightedElements, setHighlightedElements] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState(new Set());

  useEffect(() => {
    const elements = [];
    let currentWord = "";
    let currentType = null;
    let delay = 0;

    for (let i = 0; i < fullText.length; i++) {
      let char = fullText[i];
      let highlight = null;

      // Check if this character is within a highlight range
      for (let entry of data) {
        const [start, end] = entry.range;
        if (i >= start && i < end) {
          highlight = entry.type;
          uniqueTypes.add(highlight); // Add type to the set
          break;
        }
      }

      // If character is part of a highlight
      if (highlight) {
        if (currentType !== highlight) {
          // Push previous word if type has changed
          if (currentWord) {
            elements.push(
            //   <motion.span
            //     //   className="m-5"
            //     key={elements.length + 94893}
            //     initial={{ opacity: 0, scale: 0.5 }}
            //     animate={{ opacity: 1, scale: 1 }}
            //     transition={{ duration: 0.2, delay }}
            //     style={{
            //       // backgroundColor: colorMap[currentType],
            //     }}
            //   >
            //     {currentWord}
            //     <small className="bg-red-700">({currentType},Hello)</small>
            //   </motion.span>
            );
            currentWord = ""; // Reset current word
            delay += 0.5; // Increment delay for the next word
          }
          currentType = highlight; // Update current type
        }
        currentWord += char; // Accumulate highlighted characters
      } else {
        // If a highlight was active, push the last word and reset
        if (currentWord) {
          elements.push(
            <motion.span
              key={elements.length + 84934}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay }}
              style={{
                backgroundColor: colorMap[currentType],
              }}
            >
              {currentWord}
              <small>({currentType})</small>
            </motion.span>
          );
          currentWord = ""; // Reset current word
          currentType = null; // Reset current type
          delay += 0.5; // Increment delay for the next word
        }
        // Render non-highlighted characters normally
        elements.push(char === " " ? " " : <span key={i + 4893}>{char}</span>);
      }
    }

    // Push any remaining word
    if (currentWord) {
      elements.push(
        <motion.span
          key={elements.length + 2901}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay }}
          style={{
            backgroundColor: colorMap[currentType],
          }}
        >
          {currentWord}
          <small>({currentType})</small>
        </motion.span>
      );
    }

    setHighlightedElements(elements);
    setUniqueTypes(uniqueTypes); // Update the unique types set
    // console.log(elements);
  }, []);

  return (
    <div>
      {/* Tags */}
      <div className="mb-4 flex items-center flex-wrap gap-2 text-sm">
        {Array.from(uniqueTypes).map((type) => (
          <span
            key={type + 99}
            style={{
              backgroundColor: colorMap[type],
              border: `2px solid ${colorMap[type]}`,
              color: "black",
            }}
            className="flex items-center w-fit gap-1 p-1 border rounded cursor-pointer"
          >
            <span>
              <FaCheck />
            </span>
            <span className="bg-white px-1 text-sm rounded-sm w-full">
              {type}
            </span>
          </span>
        ))}
      </div>
      {/* Highlighted Text */}
      <div>{highlightedElements}</div>
    </div>
  );
};

export default HighlightedText;
