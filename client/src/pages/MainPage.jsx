import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Sidebar from "../components/Sidebar";

function MainPage() {
  return (
    <main className="flex min-h-screen w-full">
      <Sidebar />
      {/* <section className="w-[30%]  dark:bg-base-300 px-4 py-4"> */}
        {/* <LeftSide /> */}
      {/* </section> */}
      {/* <section className="w-[70%]"> */}
        {/* <RightSide /> */}
      {/* </section> */}
    </main>
  );
}

export default MainPage;
