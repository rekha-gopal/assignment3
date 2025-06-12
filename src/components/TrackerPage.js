// components/TrackerPage.js
import React, { useEffect, useState } from "react";
import handleFormSubmission from "./submissionHandler";

export default function TrackerPage() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);

  useEffect(() => {
    const form = document.getElementById("meal-form");
    if (form) {
      form.addEventListener("submit", handleFormSubmission);
    }

    const active = parseInt(localStorage.getItem("activeUsers") || "0");
    const total = parseInt(localStorage.getItem("totalUsers") || "5"); // Simulate total users
    setActiveUsers(active);
    setInactiveUsers(total - active);

    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmission);
      }
    };
  }, []);

  return (
    <div className="p-4 bg-[#e0f2f1] min-h-screen text-center text-black">
      <h1 className="text-3xl font-extrabold mb-6 text-black">🍽️ Meal Submission</h1>

      <form id="meal-form" className="space-y-4 max-w-md mx-auto bg-[#ffffff] p-6 rounded-2xl shadow-lg border border-gray-400">
        <input
          type="text"
          name="meal"
          placeholder="Enter your meal"
          required
          className="w-full border border-black rounded p-3 font-semibold text-black bg-[#f1f1f1]"
        />
        <input
          type="number"
          name="calories"
          placeholder="Enter calories"
          required
          className="w-full border border-black rounded p-3 font-semibold text-black bg-[#f1f1f1]"
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded w-full sm:w-auto shadow-md"
          >
            Submit Meal
          </button>

          <div className="text-sm font-semibold text-black">
            👥 Active: {activeUsers} | 🚫 Inactive: {inactiveUsers}
          </div>
        </div>
      </form>
    </div>
  );
}
