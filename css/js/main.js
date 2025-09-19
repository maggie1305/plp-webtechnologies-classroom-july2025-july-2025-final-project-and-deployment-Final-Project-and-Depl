// Simple interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted! (This is just a demo)");
    });
  }
});
