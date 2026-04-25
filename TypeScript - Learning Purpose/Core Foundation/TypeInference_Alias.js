/*
  TYPE INFERENCE & TYPE ALIASES
  Run:
  tsc filename.ts
  node filename.js
*/
///////////////////////////////
// PART 1: TYPE INFERENCE
///////////////////////////////
// 1. BASIC INFERENCE
var namee = "Vignesh"; // inferred as string
var age = 22; // inferred as number
var isActive = true; // inferred as boolean
console.log(namee, age, isActive);
// 2. ARRAY INFERENCE
var numbers = [1, 2, 3]; // number[]
var mixed = [1, "A"]; // (string | number)[]
console.log(numbers, mixed);
// 3. FUNCTION INFERENCE
function add(a, b) {
    return a + b; // return type inferred as number
}
console.log(add(10, 20));
// 4. WHEN NOT TO USE INFERENCE
// ❌ Avoid this
// function greet(name) {
//   return "Hello " + name;
// }
// ✅ Correct
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Vignesh"));
var myName = "Vignesh";
console.log(myName);
var user1 = {
    name: "John",
    age: 25
};
console.log(user1);
var sum = function (x, y) { return x + y; };
console.log(sum(5, 10));
var userId = 101;
console.log(userId);
userId = "ABC123";
console.log(userId);
var person = {
    name: "Alice",
    age: 30
};
console.log(person);
function printUser(user) {
    console.log("User: ".concat(user.username, ", Active: ").concat(user.isActive));
}
var apiUser = {
    id: 1,
    username: "vignesh",
    isActive: true
};
printUser(apiUser);
