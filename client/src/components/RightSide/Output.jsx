import React from "react";
import Stats from "./Stats";

function Output() {
  return (
    <div className="flex mt-8 px-8 flex-col min-h-screen items-center mx-auto">
        <Stats/>
      <div>
        <h1 className="text-black dark:text-white text-3xl mb-2">Welcome to PIL Manager!</h1>
        <p className="text-black dark:text-white mb-10">
          Securely manage your personal identification details. Store your phone
          numbers, licenses, and sensitive information safely with encryption.
          Easily access your data when needed, share it confidently with trusted
          contacts, and receive timely reminders for document renewals.
        </p>
        <span className="text-yellow-400">Let’s get started!</span>
      </div>
    </div>
  );
}

export default Output;
