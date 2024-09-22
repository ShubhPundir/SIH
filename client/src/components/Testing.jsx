import React from "react";

function Testing() {
  const data = [
    { start: 0, end: 12, text: "Shubh Pundir", type: "NAME" },
    {
      start: 46,
      end: 71,
      text: "120 Deshparan Sasmal Road",
      type: "LOCATION 1",
    },
    {
      start: 73,
      end: 101,
      text: "Tollygunge,\nKolkata - 700033",
      type: "LOCATION 2",
    },
    { start: 110, end: 124, text: "+91 5956554665", type: "MOBILE" },
    { start: 177, end: 189, text: "credit card\n", type: "IDENTIFICATION" },
    { start: 201, end: 209, text: "CVV: 784", type: "IDENTIFICATION" },
    { start: 215, end: 223, text: "09/26\n\n\n", type: "DATE" },
  ];

  const fullText = `Shubh Pundir is listed at 120 Deshparan Sasmal Road, Tollygunge, Kolkata - 700033.He can be contacted at +91 5956554665. His credit card information is stored.Card details: CVV: 784 Expiry date: 09/26 ksjdkkla alkflkad fla lakakl  lkf alak afafjal lakjpoe temrtlrje r`;
  //   const highlight =

  console.log();

  return (
    <div>
      {data.map(
        (item, index) => (
          <span key={index} className="bg-red-500">
            {item.range}
          </span>
        )
        // console.log(item,index)
      )}
    </div>
  );
}

export default Testing;
