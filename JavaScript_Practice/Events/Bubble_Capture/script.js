// MAKE SURE UBDERSTANDING OF WHY CAPTURE , BUBBLE 
// WHAT IS TARGET , CURRTARGET , THIS POINTS TO CURRTARGET
// DOM BASIC IN 1.1

const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

// -----------------------------
// 1. BUBBLING (default)
// -----------------------------
outer.addEventListener("click", function () {
  console.log("Outer (bubbling)");
});

middle.addEventListener("click", function () {
  console.log("Middle (bubbling)");
});

inner.addEventListener("click", function () {
  console.log("Inner (bubbling)");
});

// -----------------------------
// 2. CAPTURING
// -----------------------------
outer.addEventListener("click", function () {
  console.log("Outer (capturing)");
}, true);

middle.addEventListener("click", function () {
  console.log("Middle (capturing)");
}, true);

inner.addEventListener("click", function () {
  console.log("Inner (capturing)");
}, true);

// -----------------------------
// 3. event.target vs this
// -----------------------------
outer.addEventListener("click", function (event) {
  console.log("TARGET:", event.target.id);
  console.log("CURRENT:", this.id);
});

// -----------------------------
// 4. stopPropagation
// -----------------------------
const stopBtn = document.getElementById("stopBtn");

stopBtn.addEventListener("click", function (event) {
  console.log("Stop button clicked");
  event.stopPropagation();
});

// -----------------------------
// 5. stopImmediatePropagation
// -----------------------------
inner.addEventListener("click", function () {
  console.log("Handler 1");
});

inner.addEventListener("click", function (event) {
  console.log("Handler 2 (stops others)");
  event.stopImmediatePropagation();
});

inner.addEventListener("click", function () {
  console.log("Handler 3 (won’t run)");
});

// -----------------------------
// 6. eventPhase
// -----------------------------
document.addEventListener("click", function (event) {
  console.log("Event Phase:", event.eventPhase);
});