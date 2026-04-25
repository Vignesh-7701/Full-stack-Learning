/*

Code Examples (Simplified)

✅ Basic Click
button.addEventListener("click", () => {
  console.log("Clicked!");
});

✅ Detect Right Click
button.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("Right click!");
});

✅ Mouse Position Tracker
document.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});

✅ Ctrl + Click
element.addEventListener("click", (e) => {
  if (e.ctrlKey || e.metaKey) {
    console.log("Multi select");
  }
});

*/