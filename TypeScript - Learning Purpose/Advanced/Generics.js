"use strict";
/*
  GENERICS + CONSTRAINTS
  Safe, scoped version
*/
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
// PART 1: BASIC GENERICS
///////////////////////////////
// 1. GENERIC FUNCTION
function identityFn(inputVal) {
    return inputVal;
}
console.log(identityFn("Hello"));
console.log(identityFn(100));
// Type inference
console.log(identityFn("Auto Infer"));
///////////////////////////////
// 2. GENERICS WITH ARRAYS
///////////////////////////////
function getFirstElementFn(arr) {
    return arr[0];
}
console.log(getFirstElementFn([1, 2, 3]));
console.log(getFirstElementFn(["A", "B"]));
///////////////////////////////
// 3. GENERICS WITH MULTIPLE TYPES
///////////////////////////////
function createPairFn(val1, val2) {
    return [val1, val2];
}
console.log(createPairFn("Age", 25));
var responseObj = {
    data: "Success",
    status: 200
};
console.log(responseObj);
var box1 = { value: 10 };
var box2 = { value: "Hello" };
console.log(box1, box2);
///////////////////////////////
// PART 2: GENERIC CONSTRAINTS
///////////////////////////////
// 6. BASIC CONSTRAINT
function printLengthFn(item) {
    console.log("Length:", item.length);
}
printLengthFn("Hello");
printLengthFn([1, 2, 3]);
// printLengthFn(100); ❌ Error
///////////////////////////////
// 7. KEYOF CONSTRAINT
///////////////////////////////
function getObjectValueFn(obj, key) {
    return obj[key];
}
var userObjGen = {
    userName: "Vignesh",
    userAge: 22
};
console.log(getObjectValueFn(userObjGen, "userName"));
var wrap1 = { value: "Default String" };
var wrap2 = { value: 123 };
console.log(wrap1, wrap2);
function handleApiResultFn(result) {
    if (result.success) {
        console.log("Data:", result.payload);
    }
    else {
        console.log("Request failed");
    }
}
handleApiResultFn({ success: true, payload: "Loaded" });
handleApiResultFn({ success: true, payload: 42 });
