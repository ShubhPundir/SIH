import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function MainPage() {
  return (
    <main className="flex min-h-screen w-full">
      <section className="w-[30%] bg-base-300 text-white px-4 py-4">
        <LeftSide />
      </section>
      <section className="w-[70%]">
        <RightSide />
      </section>
    </main>
  );
}

export default MainPage;
