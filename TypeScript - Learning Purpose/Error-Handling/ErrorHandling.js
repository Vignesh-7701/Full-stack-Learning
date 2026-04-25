"use strict";
/*
  ERROR HANDLING + BEST PRACTICES
  Safe, scoped version
*/
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
// PART 1: AVOID ANY vs UNKNOWN
///////////////////////////////
// BAD (any)
var unsafeValue = 10;
// unsafeValue.toUpperCase(); ❌ runtime error
// GOOD (unknown)
var safeValue = "Hello";
if (typeof safeValue === "string") {
    console.log(safeValue.toUpperCase());
}
///////////////////////////////
// PART 2: TYPE GUARDS
///////////////////////////////
// Custom type guard
function isStringFn(val) {
    return typeof val === "string";
}
function processValueFn(input) {
    if (isStringFn(input)) {
        console.log("String:", input.toUpperCase());
    }
    else {
        console.log("Not a string");
    }
}
processValueFn("TypeScript");
processValueFn(100);
///////////////////////////////
// PART 3: ERROR HANDLING
///////////////////////////////
function riskyOperationFn() {
    throw new Error("Something went wrong");
}
function handleErrorFn() {
    try {
        riskyOperationFn();
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Error Message:", error.message);
        }
        else {
            console.log("Unknown error");
        }
    }
}
handleErrorFn();
function handleApiResponseFn(response) {
    if (response.status === "success") {
        console.log("Data:", response.data);
    }
    else {
        console.log("Error:", response.message);
    }
}
handleApiResponseFn({ status: "success", data: "Loaded" });
handleApiResponseFn({ status: "error", message: "Failed" });
///////////////////////////////
// PART 5: SAFE UNKNOWN HANDLING
///////////////////////////////
function parseJsonFn(input) {
    return JSON.parse(input);
}
function processJsonFn() {
    var rawData = '{"name":"Vignesh"}';
    var parsedData = parseJsonFn(rawData);
    if (typeof parsedData === "object" &&
        parsedData !== null &&
        "name" in parsedData) {
        var nameValue = parsedData.name;
        console.log("Name:", nameValue);
    }
}
processJsonFn();
