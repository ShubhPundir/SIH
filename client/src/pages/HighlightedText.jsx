import React from "react";

// Data object (as provided)
const data = {
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

const HighlightedText = () => {
  const renderHighlightedText = () => {
    let highlightedElements = [];
    let lastIndex = 0;

    // Convert key object keys into an array of entries (start, end, [value, label])
    const entries = Object.entries(data).map(([key, value]) => {
      const [start, end] = key.split(",").map(Number); // Convert string range back to numbers
      // console.log(start, end, value);

      return { start, end, value };
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

      // Push highlighted text with appropriate styles
      highlightedElements.push(
        <span
          key={entry.start}
          className="rounded-md px-2 border-[2px] border-black"
          style={{
            backgroundColor:
              entry.value[1] === "NAME"
                ? "yellow"
                : entry.value[1] === "LOCATION 1"
                ? "lightgreen"
                : entry.value[1] === "LOCATION 2"
                ? "lightblue"
                : entry.value[1] === "MOBILE"
                ? "lightcoral"
                : entry.value[1] === "IDENTIFICATION"
                ? "lightpink"
                : entry.value[1] === "DATE"
                ? "lightgray"
                : "transparent",
            fontWeight: "bold",
          }}
        >
          {fullText.slice(entry.start, entry.end)}
          <span className="ml-2 bg-slate-200 text-[9px] rounded-sm px-1 py-[1px]">{entry.value[1]}</span>
        </span>
      );

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

  return <div>{renderHighlightedText()}</div>;
};

export default HighlightedText;
