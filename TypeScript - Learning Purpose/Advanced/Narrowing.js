"use strict";
/*
  TYPE NARROWING (typeof, in, instanceof)
  Safe, scoped version
*/
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
// PART 1: TYPEOF NARROWING
///////////////////////////////
function handlePrimitiveFn(inputValue) {
    if (typeof inputValue === "string") {
        console.log("String:", inputValue.toUpperCase());
    }
    else {
        console.log("Number:", inputValue + 10);
    }
}
handlePrimitiveFn("hello");
handlePrimitiveFn(20);
function handleUserTypeFn(inputObj) {
    if ("role" in inputObj) {
        console.log("Admin Role:", inputObj.role);
    }
    else {
        console.log("User Age:", inputObj.age);
    }
}
handleUserTypeFn({ adminName: "Alice", role: "Admin" });
handleUserTypeFn({ userName: "Bob", age: 25 });
///////////////////////////////
// PART 3: INSTANCEOF
///////////////////////////////
var DogClass = /** @class */ (function () {
    function DogClass() {
    }
    DogClass.prototype.bark = function () {
        console.log("Bark 🐶");
    };
    return DogClass;
}());
var CatClass = /** @class */ (function () {
    function CatClass() {
    }
    CatClass.prototype.meow = function () {
        console.log("Meow 🐱");
    };
    return CatClass;
}());
function handleAnimalFn(animal) {
    if (animal instanceof DogClass) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
handleAnimalFn(new DogClass());
handleAnimalFn(new CatClass());
function handleApiFn(response) {
    if (response.status === "success") {
        console.log("Data:", response.data);
    }
    else {
        console.log("Error:", response.errorMessage);
    }
}
handleApiFn({ status: "success", data: "Loaded" });
handleApiFn({ status: "error", errorMessage: "Failed" });
///////////////////////////////
// PART 5: UNKNOWN TYPE NARROWING
///////////////////////////////
function processUnknownFn(inputVal) {
    if (typeof inputVal === "string") {
        console.log("String:", inputVal.toUpperCase());
    }
    else if (typeof inputVal === "number") {
        console.log("Number:", inputVal * 2);
    }
    else {
        console.log("Unknown type");
    }
}
processUnknownFn("TS");
processUnknownFn(100);
processUnknownFn(true);
