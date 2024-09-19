import React from "react";

function Stats({ pilData }) {
  console.log(pilData);

  return (
    <div>
      <div className="stats shadow w-full">
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
      {/* Pil Data */}
      <div className="flex justify-between my-5 gap-2">
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
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stats;
