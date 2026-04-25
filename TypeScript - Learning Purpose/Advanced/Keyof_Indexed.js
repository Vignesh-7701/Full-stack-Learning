"use strict";
/*
  KEYOF + TYPEOF + INDEXED ACCESS TYPES
  Safe, scoped version
*/
Object.defineProperty(exports, "__esModule", { value: true });
var keyVar1;
keyVar1 = "userName";
keyVar1 = "userAge";
// keyVar1 = "invalid"; ❌ Error
console.log("Key:", keyVar1);
///////////////////////////////
// PART 2: GENERIC WITH KEYOF
///////////////////////////////
function getValueByKeyFn(obj, key) {
    return obj[key];
}
var userObjKeyof = {
    userName: "Vignesh",
    userAge: 22
};
console.log(getValueByKeyFn(userObjKeyof, "userName"));
// console.log(getValueByKeyFn(userObjKeyof, "invalid")); ❌ Error
///////////////////////////////
// PART 3: TYPEOF
///////////////////////////////
var productObj = {
    productName: "Laptop",
    price: 50000
};
var productVar = {
    productName: "Phone",
    price: 20000
};
console.log(productVar);
var nameVar = "Alice";
var multiVar = 30;
console.log(nameVar, multiVar);
var elementVar = 100;
console.log("Element:", elementVar);
///////////////////////////////
// PART 6: COMBINED (KEYOF + TYPEOF)
///////////////////////////////
var settingsObj = {
    theme: "dark",
    fontSize: 14
};
var settingKeyVar;
settingKeyVar = "theme";
settingKeyVar = "fontSize";
console.log("Setting Key:", settingKeyVar);
function getApiValueFn(user, key) {
    return user[key];
}
var apiUserObjKA = {
    id: 1,
    username: "vignesh",
    isActive: true
};
console.log(getApiValueFn(apiUserObjKA, "username"));
