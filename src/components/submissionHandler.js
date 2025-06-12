// components/submissionHandler.js

export default function handleFormSubmission(e) {
  e.preventDefault();

  // Increment submission count
  let count = localStorage.getItem('submissionCount');
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem('submissionCount', count);

  // Optionally: show feedback or reset form
  alert("Meal submitted!");
}
