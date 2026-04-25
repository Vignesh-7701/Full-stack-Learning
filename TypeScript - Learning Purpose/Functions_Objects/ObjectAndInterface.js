"use strict";
/*
  OBJECT TYPES + INTERFACE vs TYPE
  Safe, scoped version
*/
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
// PART 1: OBJECT TYPES
///////////////////////////////
// 1. BASIC OBJECT TYPE
var userObj1 = {
    userName: "John",
    userAge: 25
};
console.log(userObj1);
var userObj2 = {
    userName: "Alice"
};
console.log(userObj2);
var userObj3 = {
    userId: 1,
    userName: "Bob"
};
// userObj3.userId = 2; ❌ Error
console.log(userObj3);
var userObj4 = {
    userName: "David",
    address: {
        cityName: "Chennai",
        pinCode: 600001
    }
};
console.log(userObj4);
var dictObj = {
    key1: "Value1",
    key2: "Value2"
};
console.log(dictObj);
var userObj5 = {
    userName: "Eve",
    greet: function () { return console.log("Hello Eve"); }
};
userObj5.greet();
var userObj6 = {
    userName: "Frank",
    userAge: 30
};
console.log(userObj6);
var employeeObj = {
    personName: "George",
    salary: 50000
};
console.log(employeeObj);
var loggerObj = {
    log: function (msg) { return console.log("Log:", msg); }
};
loggerObj.log("Test message");
var statusValue = "SUCCESS";
console.log(statusValue);
var personObj = {
    name: "Henry",
    age: 40
};
console.log(personObj);
var apiResponseObj = {
    status: 200,
    data: {
        id: 1,
        username: "vignesh"
    }
};
console.log(apiResponseObj);
