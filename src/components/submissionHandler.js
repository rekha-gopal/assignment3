// components/submissionHandler.js
import db from "../lib/firebaseConfig"; // Correct import path
import { ref, push } from "firebase/database";

export default function handleFormSubmission(e) {
  e.preventDefault();

  const meal = e.target.meal.value;
  const calories = e.target.calories.value;

  if (!meal || !calories) {
    alert("Please fill in all fields");
    return;
  }

  const mealData = {
    meal,
    calories,
    timestamp: new Date().toISOString(),
  };

  // Push to Firebase
  const mealRef = ref(db, "meals");
  push(mealRef, mealData)
    .then(() => {
      alert("Meal submitted successfully!");
      // Optionally reset the form
      e.target.reset();

      // You can update localStorage or navigation here
      let active = parseInt(localStorage.getItem("activeUsers") || "0");
      localStorage.setItem("activeUsers", active + 1);
    })
    .catch((error) => {
      console.error("Firebase write error:", error);
      alert("Error submitting meal");
    });
}
