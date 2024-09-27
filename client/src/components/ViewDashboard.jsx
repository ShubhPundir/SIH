import React, { useState, useEffect } from "react";

const ViewDashboard = ({ items }) => {
  console.log(items);

  // JSON data
  const jsonData = {
    lower_level: {
      "HR Generalist": {
        "10-09-2024": [
          {
            ip: "192.168.1.100",
            mac: "00:11:22:33:44:55",
            time: "2024-09-25 18:07:31",
            location: "New York, NY, USA",
          },
          {
            ip: "192.168.1.101",
            mac: "BB:CC:DD:EE:FF:00",
            time: "2024-09-25 19:00:00",
            location: "Chicago, IL, USA",
          },
        ],
        "12-09-2024": [
          {
            ip: "192.168.1.105",
            mac: "FF:00:11:22:33:44",
            time: "2024-09-27 08:00:00",
            location: "Seattle, WA, USA",
          },
        ],
      },
      "HR Assistant": {
        "12-09-2024": [
          {
            ip: "10.0.0.125",
            mac: "FF:00:11:22:33:44",
            time: "2024-09-27 08:00:00",
            location: "Seattle, WA, USA",
          },
        ],
      },
    },
  };

  const [data, setData] = useState({});
  const [selectedRole, setSelectedRole] = useState(""); // State to hold the selected role

  // Load the data into state when component mounts
  useEffect(() => {
    // Set the data once component mounts
    setData(jsonData.lower_level);
  }, []);

  // Handle role change from the dropdown
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value); // Set selected role based on dropdown selection
  };

  return (
    <div className="container mx-auto p-4 ">
      {/* <h1 className="text-2xl font-bold mb-4">User Dashboard</h1> */}

      {/* Dropdown Menu for selecting a role */}
      <div className="flex gap-3 items-center justify-between mb-4">
        <label className="w-fit text-lg font-medium" htmlFor="role">
          Select a Role:
          <select
            id="role"
            value={selectedRole}
            onChange={handleRoleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select Role --</option>
            {Object.keys(data).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>

        {/* View Audit */}
        <button className="w-fit text-lg font-medium  bg-green-500 text-white rounded px-2 py-1">
          View Audit
        </button>
      </div>

      {/* Table to display the data for the selected role */}
      {selectedRole && (
        <div>
          <h2 className="text-xl font-semibold mb-2">{selectedRole}</h2>
          {Object.keys(data[selectedRole]).map((date) => (
            <div key={date} className="mb-4">
              <h3 className="text-sm font-medium mb-1">Date: {date}</h3>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">IP Address</th>
                    <th className="px-4 py-2 border-b">MAC Address</th>
                    <th className="px-4 py-2 border-b">Time</th>
                    <th className="px-4 py-2 border-b">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {data[selectedRole][date].map((entry, index) => (
                    <tr key={index} className="text-center">
                      <td className="px-4 py-2 border-b">{entry.ip}</td>
                      <td className="px-4 py-2 border-b">{entry.mac}</td>
                      <td className="px-4 py-2 border-b">{entry.time}</td>
                      <td className="px-4 py-2 border-b">{entry.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewDashboard;
