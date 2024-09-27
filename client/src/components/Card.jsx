import React from "react";

const Card = ({ data }) => {
  return (
    <div className="shadow-lg rounded-lg p-6 max-w-md mx-auto mt-2 bg-white/30 backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{data.title}</h2>
      <p className="text-gray-600">
        <strong>ID:</strong> {data.id}
      </p>
      <p className="text-gray-600">
        <strong>Total Clicks:</strong> {data.totalClicks}
      </p>
      <p
        className={`mt-2 font-semibold ${
          data.status ? "text-green-500" : "text-red-500"
        }`}
      >
        {data.status ? "Active" : "Inactive"}
      </p>
      <div className="mt-4">
        <p className="text-gray-500 mb-1">
          <strong>Input:</strong> {data.input}
        </p>
        <p className="text-gray-500">
          <strong>Output:</strong> {data.output}
        </p>
        <div className="flex items-center justify-center gap-2 p-4">
          <span>Revoke Access</span>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={data.status}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
