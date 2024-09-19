import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        {
          id: 5,
          title: "Passport",
          totalClicks: 2,
          status: false,
          allowedUser: 105,
          input: "Passport No: X1234567",
          output: "Passport No: X******7",
        },
      ],
    },
    {
      date: "2024-09-22",
      items: [
        {
          id: 7,
          title: "Driver’s License",
          totalClicks: 8,
          status: true,
          allowedUser: 106,
          input: "License No: A98765432",
          output: "License No: ******432",
        },
      ],
    },
    {
      date: "2024-09-24",
      items: [
        {
          id: 8,
          title: "Health Insurance",
          totalClicks: 4,
          status: false,
          allowedUser: 107,
          input: "Insurance No: H123456789",
          output: "Insurance No: ******789",
        },
      ],
    },
    {
      date: "2024-09-26",
      items: [
        {
          id: 6,
          title: "Credit Card",
          totalClicks: 10,
          status: true,
          allowedUser: 108,
          input: "Card No: 4111111111111111",
          output: "Card No: **** **** **** 1111",
        },
        {
          id: 9,
          title: "Vehicle Registration",
          totalClicks: 3,
          status: false,
          allowedUser: 109,
          input: "Reg No: ABC123456",
          output: "Reg No: ***123456",
        },
      ],
    },
    {
      date: "2024-09-28",
      items: [
        {
          id: 10,
          title: "Bank Account",
          totalClicks: 9,
          status: true,
          allowedUser: 110,
          input: "Account No: 987654321",
          output: "Account No: ******4321",
        },
      ],
    },
    {
      date: "2024-09-30",
      items: [
        {
          id: 11,
          title: "Student ID",
          totalClicks: 2,
          status: false,
          allowedUser: 111,
          input: "ID No: ST123456",
          output: "ID No: ****3456",
        },
      ],
    },
    {
      date: "2024-10-02",
      items: [
        {
          id: 12,
          title: "Voter Registration",
          totalClicks: 6,
          status: true,
          allowedUser: 112,
          input: "Voter ID: V1234567",
          output: "Voter ID: *****567",
        },
      ],
    },
    {
      date: "2024-10-04",
      items: [
        {
          id: 13,
          title: "Library Card",
          totalClicks: 1,
          status: false,
          allowedUser: 113,
          input: "Card No: L9876543",
          output: "Card No: ****6543",
        },
      ],
    },
    {
      date: "2024-10-06",
      items: [
        {
          id: 14,
          title: "Membership ID",
          totalClicks: 5,
          status: true,
          allowedUser: 114,
          input: "Membership No: M1234567",
          output: "Membership No: ******567",
        },
      ],
    },
    {
      date: "2024-10-08",
      items: [
        {
          id: 15,
          title: "Utility Bill",
          totalClicks: 4,
          status: true,
          allowedUser: 115,
          input: "Account No: 1234567890",
          output: "Account No: ******7890",
        },
      ],
    },
  ],
};
export const pilSilce = createSlice({
  name: "pil",
  initialState,
  reducers: {
    print: (state, action) => {
      //   console.log(action.payload);
    },
  },
});

export const { print } = pilSilce.actions;
export default pilSilce.reducer;
