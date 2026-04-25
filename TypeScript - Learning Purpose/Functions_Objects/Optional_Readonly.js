"use strict";
/*
  READONLY & OPTIONAL PROPERTIES
  Safe, scoped version
*/
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var userOpt1 = {
    userName: "John"
};
var userOpt2 = {
    userName: "Alice",
    userAge: 25
};
console.log(userOpt1);
console.log(userOpt2);
// 2. HANDLING OPTIONAL
function printUserAgeFn(user) {
    if (user.userAge !== undefined) {
        console.log("Age:", user.userAge);
    }
    else {
        console.log("Age not provided");
    }
}
printUserAgeFn(userOpt1);
printUserAgeFn(userOpt2);
var userWithAddr = {
    userName: "David"
};
console.log((_b = (_a = userWithAddr.address) === null || _a === void 0 ? void 0 : _a.cityName) !== null && _b !== void 0 ? _b : "City not available");
var userRead1 = {
    userId: 1,
    userName: "Eve"
};
// userRead1.userId = 2; ❌ Error
console.log(userRead1);
// 5. READONLY ARRAY
var readonlyArr = [1, 2, 3];
// readonlyArr.push(4); ❌ Error
console.log(readonlyArr);
// Alternative
var readonlyArr2 = ["A", "B"];
console.log(readonlyArr2);
var safeUserObj = {
    id: 101,
    userName: "Vignesh"
};
console.log(safeUserObj);
function printApiUserFn(user) {
    var _a;
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.username, ", Email: ").concat((_a = user.email) !== null && _a !== void 0 ? _a : "Not provided"));
}
printApiUserFn({ id: 1, username: "user1" });
printApiUserFn({ id: 2, username: "user2", email: "user2@mail.com" });
