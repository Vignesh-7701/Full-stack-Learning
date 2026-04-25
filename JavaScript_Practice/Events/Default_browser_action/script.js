// -----------------------------
// 1. PREVENT LINK
// -----------------------------
const link = document.getElementById("link");

link.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Link navigation prevented");
});

// -----------------------------
// 2. PREVENT FORM SUBMIT
// -----------------------------
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submission stopped");
});

// -----------------------------
// 3. FOLLOW-UP EVENT
// -----------------------------
const input2 = document.getElementById("input2");

input2.addEventListener("mousedown", function(event) {
  event.preventDefault(); // prevents focus
});

// -----------------------------
// 4. CONTEXT MENU
// -----------------------------
const btn = document.getElementById("btn");

btn.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  alert("Custom right-click menu");
});

// -----------------------------
// 5. defaultPrevented
// -----------------------------
document.addEventListener("contextmenu", function(event) {
  if (event.defaultPrevented) return;

  alert("Document menu");
});