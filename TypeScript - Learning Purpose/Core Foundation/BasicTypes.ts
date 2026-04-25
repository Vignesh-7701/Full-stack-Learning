/*
  BASIC TYPES IN TYPESCRIPT 
  Run:
  tsc filename.ts
  node filename.js
*/

// 1. STRING
let firstName: string = "Vignesh";
let greeting: string = `Hello, ${firstName}`;
console.log(greeting);

// 2. NUMBER
let agee: number = 22;
let price: number = 199.99;
console.log(agee, price);

// 3. BOOLEAN
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
console.log(isLoggedIn, isAdmin);

// 4. ANY (SAFE USAGE)
let randomValue: any = "Hello";
console.log(randomValue);

// Changing types
randomValue = 100;
console.log(randomValue);

randomValue = true;
console.log(randomValue);

// ⚠️ SAFE CHECK before using
let anyValue: any = 10;

// ❌ DON'T DO THIS (causes crash)
// anyValue.toUpperCase();

// ✅ SAFE WAY
if (typeof anyValue === "string") {
  console.log(anyValue.toUpperCase());
} else {
  console.log("anyValue is not a string, current type:", typeof anyValue);
}

// 5. UNKNOWN (BEST PRACTICE)
let userInput: unknown = "TypeScript";

// ❌ Direct use not allowed
// console.log(userInput.toUpperCase());

// ✅ Safe usage
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

// Another example
let apiResponse: unknown = 50;

if (typeof apiResponse === "number") {
  console.log(apiResponse + 10);
}

// 6. ANY vs UNKNOWN (REAL SAFE COMPARISON)

let anyVal: any = "hello";

// Works but unsafe
console.log(anyVal.toUpperCase());

let unknownVal: unknown = "hello";

// ❌ Not allowed directly
// console.log(unknownVal.toUpperCase());

// ✅ Safe
if (typeof unknownVal === "string") {
  console.log(unknownVal.toUpperCase());
}

// 7. TYPE INFERENCE

let city = "Chennai"; // inferred string
let score = 100;      // inferred number

console.log(city.toUpperCase());
console.log(score + 50);

// 8. REAL-TIME FUNCTION (SAFE HANDLING)

function processInput(input: unknown) {
  if (typeof input === "string") {
    console.log("String:", input.toUpperCase());
  } else if (typeof input === "number") {
    console.log("Number:", input * 2);
  } else if (typeof input === "boolean") {
    console.log("Boolean:", input);
  } else {
    console.log("Unknown type");
  }
}

processInput("hello");
processInput(10);
processInput(true);