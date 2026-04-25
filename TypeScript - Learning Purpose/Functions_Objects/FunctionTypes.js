"use strict";
/*
  FUNCTION TYPES + OPTIONAL & DEFAULT PARAMS
  Safe, scoped, production-ready
*/
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
// PART 1: FUNCTION TYPES
///////////////////////////////
// 1. BASIC FUNCTION
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log("Add:", addNumbers(5, 10));
var addFn = function (x, y) { return x + y; };
console.log("AddFn:", addFn(3, 7));
// 3. VOID FUNCTION
function logMessageFn(message) {
    console.log("Log:", message);
}
logMessageFn("Hello TS");
// 4. NEVER FUNCTION
function throwErrorFn(errorMsg) {
    throw new Error(errorMsg);
}
function printUserFn(user) {
    console.log("User: ".concat(user.userName, ", Age: ").concat(user.userAge));
}
printUserFn({ userName: "John", userAge: 25 });
///////////////////////////////
// PART 2: OPTIONAL PARAMETERS
///////////////////////////////
function greetUserFn(userName) {
    if (userName) {
        console.log("Hello " + userName);
    }
    else {
        console.log("Hello Guest");
    }
}
greetUserFn("Vignesh");
greetUserFn();
///////////////////////////////
// PART 3: DEFAULT PARAMETERS
///////////////////////////////
function greetWithDefaultFn(userName) {
    if (userName === void 0) { userName = "Guest"; }
    console.log("Hi " + userName);
}
greetWithDefaultFn("John");
greetWithDefaultFn();
///////////////////////////////
// COMBINED EXAMPLE
///////////////////////////////
function createUserFn(userName, userAge, isActive) {
    if (userAge === void 0) { userAge = 18; }
    console.log("Name: ".concat(userName, ", Age: ").concat(userAge, ", Active: ").concat(isActive !== null && isActive !== void 0 ? isActive : false));
}
createUserFn("Alice", 25, true);
createUserFn("Bob");
createUserFn("Charlie", 30);
function handleApiResponseFn(response, showLog) {
    if (showLog === void 0) { showLog = true; }
    if (showLog) {
        console.log("Status: ".concat(response.status, ", Message: ").concat(response.message));
    }
}
handleApiResponseFn({ status: 200, message: "Success" });
handleApiResponseFn({ status: 500, message: "Error" }, false);
