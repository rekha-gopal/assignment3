import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function TrackerPage() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const active = parseInt(localStorage.getItem("activeUsers") || "0");
    const total = parseInt(localStorage.getItem("totalUsers") || "5");
    setActiveUsers(active);
    setInactiveUsers(total - active);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const meal = formData.get('meal');
    const calories = formData.get('calories');
    const entry = { meal, calories };
    const old = JSON.parse(localStorage.getItem("meals") || "[]");
    localStorage.setItem("meals", JSON.stringify([...old, entry]));
    alert("✅ Meal submitted!");
  };

  const goToScorePage = () => {
    console.log("Navigating to /score..."); // Debug log
    router.push("/score");
  };

  return (
    <div className="p-4 bg-[#e0f2f1] min-h-screen text-center text-black">
      <h1 className="text-3xl font-extrabold mb-6">🍽️ Meal Submission</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-400">
        <input
          type="text"
          name="meal"
          placeholder="Enter your meal"
          required
          className="w-full border border-black rounded p-3 font-semibold bg-[#f1f1f1]"
        />
        <input
          type="number"
          name="calories"
          placeholder="Enter calories"
          required
          className="w-full border border-black rounded p-3 font-semibold bg-[#f1f1f1]"
        />
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded w-full shadow-md"
        >
          Submit Meal
        </button>
      </form>

      <div className="mt-6 text-black font-medium">
        👥 Active: {activeUsers} | 🚫 Inactive: {inactiveUsers}
      </div>

      <button
        onClick={goToScorePage}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-full font-bold shadow"
      >
        📊 Go to Score Page
      </button>
    </div>
  );
}
