import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../src/firebaseConfig"; // adjust if your path is different

export default async function handleFormSubmission(event) {
  event.preventDefault();

  const meal = event.target.meal.value;
  const calories = event.target.calories.value;

  const fileContent = `Meal: ${meal}, Calories: ${calories}`;
  const blob = new Blob([fileContent], { type: "text/plain" });

  const filename = `meals/${Date.now()}-${meal}.txt`;
  const fileRef = ref(storage, filename);

  try {
    await uploadBytes(fileRef, blob);
    alert("✅ Meal data uploaded successfully!");
  } catch (error) {
    console.error("❌ Upload error:", error);
    alert("Upload failed. Check the console.");
  }

  // Update user stats in localStorage
  const active = parseInt(localStorage.getItem("activeUsers") || "0") + 1;
  localStorage.setItem("activeUsers", active.toString());
}
