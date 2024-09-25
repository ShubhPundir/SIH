import React from "react";
import { Link } from "react-router-dom";
import UserDataComponent from "./UserDataComponent";

function Stats({ pilData }) {
  console.log(pilData);
  const users = {
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
        // ... existing data
      ],
      "11-09-2024": [
        // ... existing data
      ],
      "12-09-2024": [
        {
          ip: "192.168.1.105",
          mac: "FF:00:11:22:33:44",
          time: "2024-09-27 08:00:00",
          location: "Seattle, WA, USA",
        },
        // ... more data points
      ],
    },
    "HR Assistant": {
      "10-09-2024": [
        // ... existing data
      ],
      "11-09-2024": [
        // ... existing data
      ],
      "12-09-2024": [
        {
          ip: "10.0.0.125",
          mac: "FF:00:11:22:33:44",
          time: "2024-09-27 08:00:00",
          location: "Seattle, WA, USA",
        },
        // ... more data points
      ],
    },
    Recruiter: {
      "10-09-2024": [
        {
          ip: "172.16.10.200",
          mac: "11:22:33:44:55:66",
          time: "2024-09-25 18:07:31",
          location: "Tokyo, N/A, Japan",
        },
        {
          ip: "172.16.10.201",
          mac: "55:66:77:88:99:AA",
          time: "2024-09-25 19:00:00",
          location: "Seoul, N/A, South Korea",
        },
        // ... existing data
      ],
      "11-09-2024": [
        // ... existing data
      ],
      "12-09-2024": [
        {
          ip: "172.16.10.202",
          mac: "00:11:22:33:44:55",
          time: "2024-09-27 08:00:00",
          location: "Seoul, N/A, South Korea",
        },
        // ... more data points
      ],
    },
    "Benefits Specialist": {
      "10-09-2024": [
        {
          ip: "192.168.0.254",
          mac: "55:66:77:88:99:AA",
          time: "2024-09-25 18:07:31",
          location: "Sydney, NSW, Australia",
        },
        {
          ip: "192.168.0.255",
          mac: "DD:EE:FF:00:11:22",
          time: "2024-09-25 19:00:00",
          location: "Melbourne, VIC, Australia",
        },
        // ... existing data
      ],
      "11-09-2024": [
        // ... existing data
      ],
      "12-09-2024": [
        {
          ip: "192.168.0.256",
          mac: "00:11:22:33:44:55",
          time: "2024-09-27 08:00:00",
          location: "Sydney, NSW, Australia",
        },
        // ... more data points
      ],
    },
  };

  // console.log(users.);

  return (
    <div>
      <div className="stats shadow ">
        <div className="stat place-items-center">
          <div className="stat-title">Total Clicks</div>
          <div className="stat-value">{pilData.totalClicks || 0}</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Status</div>
          <div className="stat-value text-secondary">
            {pilData.status ? "Active" : "Inactive"}
          </div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Allowed Users</div>
          <div className="stat-value">{pilData.allowedUser}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <hr />
      {/* DropDown */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 w-full">
          Select Allowed users
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {/* {users.map(
            (data) => console.log(data)

            <li>
           <Link>{data}</Link>
           </li>
          )} */}
        </ul>
      </div>
      {/* Pil Data */}
      {/* <div className="flex justify-between my-5 gap-2">
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Input Data</h2>
            <p>{pilData.input}</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body ">
            <h2 className="card-title">Masked Data</h2>
            <p>{pilData.output}</p>
          </div>
        </div>
      </div> */}
      {/* Table Stats */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Location</th>
              <th>Ip</th>
              <th>Mac</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <UserDataComponent />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stats;
