// -----------------------------
// 1. HTML ATTRIBUTE HANDLER
// -----------------------------
function htmlClick() {
  alert("Handled via HTML attribute");
}

// -----------------------------
// 2. DOM PROPERTY HANDLER
// -----------------------------
const domBtn = document.getElementById("domBtn");

domBtn.onclick = function () {
  alert("Handled via DOM property");
};

// ❗ Overwrites previous handler
domBtn.onclick = function () {
  console.log("Only this runs (overwrite demo)");
};

// -----------------------------
// 3. addEventListener (BEST)
// -----------------------------
const eventBtn = document.getElementById("eventBtn");

function handler1() {
  console.log("Handler 1");
}

function handler2() {
  console.log("Handler 2");
}

eventBtn.addEventListener("click", handler1);
eventBtn.addEventListener("click", handler2);

// -----------------------------
// 4. EVENT OBJECT
// -----------------------------
const box = document.getElementById("box");

box.addEventListener("click", function (event) {
  console.log("Event Type:", event.type);
  console.log("Element:", event.currentTarget);
  console.log("Mouse X:", event.clientX);
  console.log("Mouse Y:", event.clientY);
});

// -----------------------------
// 5. THIS KEYWORD
// -----------------------------
function showText(element) {
  alert("Button text: " + element.innerText);
}

// -----------------------------
// 6. REMOVE EVENT LISTENER
// -----------------------------
const removeBtn = document.getElementById("removeBtn");

function clickOnce() {
  alert("This runs only once");
  removeBtn.removeEventListener("click", clickOnce);
}

removeBtn.addEventListener("click", clickOnce);

// -----------------------------
// 7. OBJECT HANDLER
// -----------------------------
const objHandler = {
  handleEvent(event) {
    console.log("Object handled:", event.type);
  }
};

eventBtn.addEventListener("mouseover", objHandler);