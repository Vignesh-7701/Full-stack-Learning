/*
  BASIC TYPES IN TYPESCRIPT (FIXED VERSION)
  Run:
  tsc filename.ts
  node filename.js
*/
// 1. STRING
var firstName = "Vignesh";
var greeting = "Hello, ".concat(firstName);
console.log(greeting);
// 2. NUMBER
var age = 22;
var price = 199.99;
console.log(age, price);
// 3. BOOLEAN
var isLoggedIn = true;
var isAdmin = false;
console.log(isLoggedIn, isAdmin);
// 4. ANY (SAFE USAGE)
var randomValue = "Hello";
console.log(randomValue);
// Changing types
randomValue = 100;
console.log(randomValue);
randomValue = true;
console.log(randomValue);
// ⚠️ SAFE CHECK before using
var anyValue = 10;
// ❌ DON'T DO THIS (causes crash)
// anyValue.toUpperCase();
// ✅ SAFE WAY
if (typeof anyValue === "string") {
    console.log(anyValue.toUpperCase());
}
else {
    console.log("anyValue is not a string, current type:", typeof anyValue);
}
// 5. UNKNOWN (BEST PRACTICE)
var userInput = "TypeScript";
// ❌ Direct use not allowed
// console.log(userInput.toUpperCase());
// ✅ Safe usage
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
// Another example
var apiResponse = 50;
if (typeof apiResponse === "number") {
    console.log(apiResponse + 10);
}
// 6. ANY vs UNKNOWN (REAL SAFE COMPARISON)
var anyVal = "hello";
// Works but unsafe
console.log(anyVal.toUpperCase());
var unknownVal = "hello";
// ❌ Not allowed directly
// console.log(unknownVal.toUpperCase());
// ✅ Safe
if (typeof unknownVal === "string") {
    console.log(unknownVal.toUpperCase());
}
// 7. TYPE INFERENCE
var city = "Chennai"; // inferred string
var score = 100; // inferred number
console.log(city.toUpperCase());
console.log(score + 50);
// 8. REAL-TIME FUNCTION (SAFE HANDLING)
function processInput(input) {
    if (typeof input === "string") {
        console.log("String:", input.toUpperCase());
    }
    else if (typeof input === "number") {
        console.log("Number:", input * 2);
    }
    else if (typeof input === "boolean") {
        console.log("Boolean:", input);
    }
    else {
        console.log("Unknown type");
    }
}
processInput("hello");
processInput(10);
processInput(true);
