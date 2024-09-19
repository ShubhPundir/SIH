function AllData() {
  const data = [
    { id: 1, title: "License", date: "2024-09-10" },
    { id: 2, title: "Phone Number", date: "2024-09-10" },
    { id: 3, title: "Social Media", date: "2024-09-10" },
    { id: 4, title: "Email Address", date: "2024-09-16" },
    { id: 5, title: "Passport", date: "2024-09-16" },
    { id: 6, title: "Credit Card", date: "2024-09-26" },
    { id: 7, title: "Driver’s License", date: "2024-09-22" },
    { id: 8, title: "Health Insurance", date: "2024-09-24" },
    { id: 9, title: "Vehicle Registration", date: "2024-09-26" },
    { id: 10, title: "Bank Account", date: "2024-09-28" },
    { id: 11, title: "Student ID", date: "2024-09-30" },
    { id: 12, title: "Voter Registration", date: "2024-10-02" },
    { id: 13, title: "Library Card", date: "2024-10-04" },
    { id: 14, title: "Membership ID", date: "2024-10-06" },
    { id: 15, title: "Utility Bill", date: "2024-10-08" },
  ];
  const pilData = [
    {
      date: "2024-09-10",
      items: [
        { id: 1, title: "License" },
        { id: 2, title: "Phone Number" },
        { id: 3, title: "Social Media" },
      ],
    },
    {
      date: "2024-09-16",
      items: [
        { id: 4, title: "Email Address" },
        { id: 5, title: "Passport" },
      ],
    },
    {
      date: "2024-09-22",
      items: [{ id: 7, title: "Driver’s License" }],
    },
    {
      date: "2024-09-24",
      items: [{ id: 8, title: "Health Insurance" }],
    },
    {
      date: "2024-09-26",
      items: [
        { id: 6, title: "Credit Card" },
        { id: 9, title: "Vehicle Registration" },
      ],
    },
    {
      date: "2024-09-28",
      items: [{ id: 10, title: "Bank Account" }],
    },
    {
      date: "2024-09-30",
      items: [{ id: 11, title: "Student ID" }],
    },
    {
      date: "2024-10-02",
      items: [{ id: 12, title: "Voter Registration" }],
    },
    {
      date: "2024-10-04",
      items: [{ id: 13, title: "Library Card" }],
    },
    {
      date: "2024-10-06",
      items: [{ id: 14, title: "Membership ID" }],
    },
    {
      date: "2024-10-08",
      items: [{ id: 15, title: "Utility Bill" }],
    },
  ];
  const handlePIL = (id) => {
    console.log(id);
  };

  return (
    <div style={{ height: "calc(100vh - 20vh)" }} className="overflow-y-scroll">
      {pilData.map((item) => (
        <div key={item.date}>
          <h1 className="text-sm my-1">{item.date}</h1>
          <div className=" my-2 rounded-md font-">
            {/* {console.log(item.items)} */}
            {item.items.map((pil) => (
              <button
                onClick={() => handlePIL(pil.id)}
                key={pil.id}
                className="block cursor-pointer hover:bg-base-100 bg-base-200 text-xl dark:text-white text-black leading-tight font-semibold px-2 py-1 mx-2 my-1"
              >
                {pil.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllData;
