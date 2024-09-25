import React from "react";
import { useNavigate } from "react-router-dom";

// Import your images here or use URLs
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
        // Add more items...
      ],
    },
    // Add more date-based items...
  ],
};

// Function to map titles to images
const getImageForTitle = (title) => {
  switch (title) {
    case "License":
      return licenseImg;
    case "Phone Number":
      return phoneImg;
    case "Social Media":
      return socialMediaImg;
    case "Email Address":
      return emailImg;
    // Add more cases for other titles and images...
    default:
      return null; // Or provide a default image
  }
};

const CardsByDate = () => {
  const handleCard = (id) => {
    console.log("data", id);
    navigate("/list");
  };
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8">
      {data.pils.map((section) => (
        <div key={section.date} className="mb-8">
          {/* Date Section */}
          <h2 className="text-2xl font-bold mb-4">{section.date}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Cards */}
            {section.items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCard(item.id)}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:opacity-50 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">
                  Total Clicks: {item.totalClicks}
                </p>
                <p className="text-gray-600">
                  Status:{" "}
                  <span
                    className={`${
                      item.status ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.status ? "Active" : "Inactive"}
                  </span>
                </p>
                {/* Display output if active, else display input */}
                <p className="mt-2">{item.status ? item.output : item.input}</p>
                {/* Image */}
                <div className="mt-4">
                  <img
                    // src={getImageForTitle(item.title)}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsByDate;
