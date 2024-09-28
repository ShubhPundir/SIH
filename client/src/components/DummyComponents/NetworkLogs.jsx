// NetworkLogs.js
import React from "react";
import { useParams } from "react-router-dom";

// Dataset for different users
const dataset = {
  1: [
    {
      ip: "192.168.1.100",
      mac: "00:11:22:33:44:55",
      time: "2024-09-25 18:07:31",
      location: "New York, NY, USA",
    },
    {
      ip: "192.168.1.101",
      mac: "00:11:22:33:44:56",
      time: "2024-09-26 12:30:45",
      location: "San Francisco, CA, USA",
    },
  ],
  2: [
    {
      ip: "192.168.2.100",
      mac: "00:21:32:43:54:65",
      time: "2024-09-25 14:05:30",
      location: "Los Angeles, CA, USA",
    },
    {
      ip: "192.168.2.101",
      mac: "00:21:32:43:54:66",
      time: "2024-09-26 09:45:12",
      location: "Houston, TX, USA",
    },
  ],
};

const NetworkLogs = () => {
  const { userId } = useParams(); // Capture the userId from the URL

  // Fallback to dataset 1 if userId is not found
  const logs = dataset[userId] || dataset[1];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Network Logs for PIIL {userId}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">IP Address</th>
              <th className="border px-4 py-2">MAC Address</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{log.ip}</td>
                <td className="border px-4 py-2">{log.mac}</td>
                <td className="border px-4 py-2">{log.time}</td>
                <td className="border px-4 py-2">{log.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NetworkLogs;
