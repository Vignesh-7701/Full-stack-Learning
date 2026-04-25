"use strict";
/*
  UTILITY TYPES (Partial, Required, Pick, Omit, Record)
  Safe, scoped version
*/
Object.defineProperty(exports, "__esModule", { value: true });
var partialUserObj = {
    userName: "Vignesh"
};
console.log("Partial:", partialUserObj);
var requiredUserObj = {
    userName: "John",
    userEmail: "john@mail.com"
};
console.log("Required:", requiredUserObj);
var userPreviewObj = {
    userName: "Alice",
    userEmail: "alice@mail.com"
};
console.log("Pick:", userPreviewObj);
var userWithoutEmailObj = {
    id: 1,
    userName: "Bob",
    isActive: true
};
console.log("Omit:", userWithoutEmailObj);
var rolePermissionObj = {
    admin: true,
    user: true,
    guest: false
};
console.log("Record:", rolePermissionObj);
///////////////////////////////
// REAL-TIME EXAMPLES
///////////////////////////////
// API UPDATE (Partial)
function updateUserFnUT(update) {
    console.log("Updating:", update);
}
updateUserFnUT({ userEmail: "new@mail.com" });
// API RESPONSE FILTER (Pick)
function getUserPreviewFnUT(user) {
    return {
        userName: user.userName,
        userEmail: user.userEmail
    };
}
console.log(getUserPreviewFnUT({
    id: 1,
    userName: "Vignesh",
    userEmail: "v@mail.com",
    isActive: true
}));
var featureConfigObj = {
    darkMode: true,
    betaAccess: false
};
console.log("Feature Config:", featureConfigObj);
