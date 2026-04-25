// -----------------------------
// 1. MENU (data-action)
// -----------------------------
const menu = document.getElementById("menu");

const actions = {
  save() {
    alert("Saving...");
  },
  load() {
    alert("Loading...");
  },
  search() {
    alert("Searching...");
  }
};

// data attributes -> data-action -> dataset.action

menu.addEventListener("click", function (event) {
  const action = event.target.dataset.action;

  if (action && actions[action]) {
    actions[action]();
  }
});

// -----------------------------
// 2. LIST (DELEGATION + closest)
// -----------------------------

//closest li -> first matching parent li

const list = document.getElementById("list");

list.addEventListener("click", function (event) {
  const li = event.target.closest("li");

  if (!li) return;

  alert("Clicked: " + li.textContent);
});

// -----------------------------
// 3. DYNAMIC ELEMENTS
// -----------------------------
const addItem = document.getElementById("addItem");

addItem.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerHTML = "<strong>New Item</strong>";
  list.appendChild(li);
});

// -----------------------------
// 4. BEHAVIOR PATTERN (COUNTER)
// -----------------------------
document.addEventListener("click", function (event) {
  if (event.target.dataset.counter !== undefined) {
    event.target.innerText++;
  }
});