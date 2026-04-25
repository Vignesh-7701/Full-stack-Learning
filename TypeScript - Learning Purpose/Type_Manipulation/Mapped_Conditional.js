"use strict";
/*
  MAPPED TYPES + CONDITIONAL TYPES
  Safe, scoped version
*/
Object.defineProperty(exports, "__esModule", { value: true });
var optionalUserObj = {
    userName: "Vignesh"
};
console.log(optionalUserObj);
var readonlyUserObj = {
    userName: "John",
    userAge: 25
};
// readonlyUserObj.userAge = 30; ❌ Error
console.log(readonlyUserObj);
var nullableUserObj = {
    userName: null,
    userAge: 30
};
console.log(nullableUserObj);
function sampleFnCT() {
    return 100;
}
var stringOnlyObj = {
    name: "Alice",
    age: undefined,
    city: "Chennai"
};
console.log(stringOnlyObj);
var updateObj = {
    username: "newName"
};
console.log(updateObj);
