const btn = document.getElementById("btn");
const trigger = document.getElementById("trigger");
const box = document.getElementById("box");

// -----------------------------
// 1. DISPATCH BUILT-IN EVENT
// -----------------------------
btn.addEventListener("click", () => {
  console.log("Button clicked");
});

trigger.addEventListener("click", () => {
  const event = new Event("click");
  btn.dispatchEvent(event); // triggers click
});

// -----------------------------
// 2. CUSTOM EVENT
// -----------------------------
box.addEventListener("hello", function (event) {
  console.log("Custom event received:", event.detail.name);
});

trigger.addEventListener("click", () => {
  const custom = new CustomEvent("hello", {
    detail: { name: "Vignesh" },
    bubbles: true
  });

  box.dispatchEvent(custom);
});

// -----------------------------
// 3. PREVENT DEFAULT (CUSTOM)
// -----------------------------
box.addEventListener("hide", function (event) {
  const stop = confirm("Prevent hide?");
  if (stop) {
    event.preventDefault();
  }
});

function hideBox() {
  const event = new CustomEvent("hide", {
    cancelable: true
  });

  if (!box.dispatchEvent(event)) {
    console.log("Hide prevented");
  } else {
    box.style.display = "none";
  }
}

// -----------------------------
// 4. SYNCHRONOUS DEMO
// -----------------------------
btn.addEventListener("custom", () => {
  console.log("Custom inside click");
});

btn.onclick = function () {
  console.log("1");

  btn.dispatchEvent(new Event("custom"));

  console.log("2");
};