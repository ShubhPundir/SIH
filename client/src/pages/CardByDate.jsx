import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Example placeholder images
// import licenseImg from './assets/license.png';
// import phoneImg from './assets/phone.png';
// import socialMediaImg from './assets/social_media.png';
// import emailImg from './assets/email.png';
// Add more images as needed...

const data = {
  pils: [
    {
      date: "2024-09-10",
      items: [
        {
          id: 1,
          title: "License",
          totalClicks: 5,
          status: true,
          allowedUser: 101,
          input: "License No: 123456789",
          output: "License No: ******789",
        },
        {
          id: 2,
          title: "Phone Number",
          totalClicks: 3,
          status: false,
          allowedUser: 102,
          input: "Phone: 9876543210",
          output: "Phone: ******3210",
        },
        {
          id: 3,
          title: "Social Media",
          totalClicks: 7,
          status: true,
          allowedUser: 103,
          input: "Username: social_user",
          output: "Username: *********user",
        },
      ],
    },
    {
      date: "2024-09-16",
      items: [
        {
          id: 4,
          title: "Email Address",
          totalClicks: 6,
          status: true,
          allowedUser: 104,
          input: "Email: user@example.com",
          output: "Email: u***@example.com",
        },
      ],
    },
  ],
};

// Function to map titles to images (you can add images here)
const getImageForTitle = (title) => {
  switch (title) {
    case "License":
      return "https://via.placeholder.com/150"; // Example image URL
    case "Phone Number":
      return "https://via.placeholder.com/150";
    case "Social Media":
      return "https://via.placeholder.com/150";
    case "Email Address":
      return "https://via.placeholder.com/150";
    default:
      return "https://via.placeholder.com/150"; // Fallback image
  }
};

const CardsByDateWithToggleTable = () => {
  const navigate = useNavigate();

  const [visibleDetails, setVisibleDetails] = useState({});

  // Toggle button handler
  const handleToggle = (id) => {
    setVisibleDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle visibility for this item
    }));
  };
  const handleCardClick = (id) => {
    console.log("data", id);
    navigate("/list");
  };

  return (
    <div className="container mx-auto py-8">
      {data.pils.map((section) => (
        <div key={section.date} className="mb-8">
          {/* Date Section */}
          <h2 className="text-2xl font-bold mb-4">{section.date}</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Total Clicks
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Details</th>
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">Toggle</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-300 duration-150 cursor-pointer "
                    onClick={handleCardClick}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {item.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.totalClicks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <span
                        className={
                          item.status ? "text-green-500" : "text-red-500"
                        }
                      >
                        {item.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {visibleDetails[item.id] ? item.output : item.input}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={getImageForTitle(item.title)}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        className="toggle toggle-info"
                        defaultChecked
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsByDateWithToggleTable;
