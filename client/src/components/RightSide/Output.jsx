import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Stats from "../Stats";
import Dashboard from "../Dashboard";

function Output() {
  const pilData = useSelector((state) => state.outputData.data);
  return (
    <div className="flex mt-8 px-8 flex-col min-h-screen items-center mx-auto">
      {pilData && pilData.id === undefined ? (
        <div>
          <h1 className="text-black  text-3xl mb-2">Welcome to PIL Manager!</h1>
          <p className="text-black mb-10">
            Securely manage your personal identification details. Store your
            phone numbers, licenses, and sensitive information safely with
            encryption. Easily access your data when needed, share it
            confidently with trusted contacts, and receive timely reminders for
            document renewals.
          </p>
          <span className="text-yellow-400">Let’s get started!</span>
        </div>
      ) : (
        // <Stats pilData={pilData} />
        <Dashboard />
      )}
    </div>
  );
}

export default Output;
