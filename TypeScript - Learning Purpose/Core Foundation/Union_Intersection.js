"use strict";
/*
  UNION & INTERSECTION TYPES (SAFE VERSION)
  No variable conflicts
  Run:
  tsc filename.ts
  node filename.js
*/
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
// PART 1: UNION TYPES
///////////////////////////////
// 1. BASIC UNION
var unionValue;
unionValue = 100;
console.log("Union number:", unionValue);
unionValue = "Hello";
console.log("Union string:", unionValue);
// 2. TYPE SAFETY (NARROWING)
var unionData = "TypeScript";
if (typeof unionData === "string") {
    console.log("Upper:", unionData.toUpperCase());
}
else {
    console.log("Number:", unionData + 10);
}
// 3. UNION ARRAY
var unionArrayData = [1, "A", 2, "B"];
console.log("Mixed Array:", unionArrayData);
// 4. UNION IN FUNCTION
function printUnionId(inputId) {
    console.log("ID:", inputId);
}
printUnionId(101);
printUnionId("ABC123");
var personData = {
    personName: "John",
    personAge: 30
};
console.log("Person:", personData);
var fullUserData = {
    personName: "Alice",
    personAge: 28,
    role: "Admin"
};
console.log("Full User:", fullUserData);
// 8. FUNCTION WITH INTERSECTION
function printFullUser(user) {
    console.log("Name: ".concat(user.personName, ", Age: ").concat(user.personAge, ", Role: ").concat(user.role));
}
printFullUser(fullUserData);
var apiUserData = {
    id: 1,
    username: "vignesh",
    isActive: true
};
console.log("API User:", apiUserData);
