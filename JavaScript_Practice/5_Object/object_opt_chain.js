"use strict";

// 1. THE PROBLEM (without optional chaining)

let user = {}; // user has no address

// console.log(user.address.street);
// ERROR: Cannot read property 'street'
// because user.address is undefined

// If an intermediate property is undefined/null
// JavaScript throws an error.



// 2. OPTIONAL CHAINING ?. (modern solution)

let street2 = user?.address?.street;
console.log(street2); // undefined

// ?. checks if the value before it exists
// if not → stops execution and returns undefined

// Equivalent logic internally:
// if(user != null)
//   return user.address
// else
//   return undefined


// 3. OPTIONAL CHAINING WITH NULL OBJECT

let person = null;

console.log(person?.name); // undefined
console.log(person?.address?.city); // undefined

// Instead of crashing, it safely returns undefined.


// 4. IMPORTANT RULE

let obj = null;

// console.log(obj?.address.city);

// ❌ This would still crash if address is undefined
// because only obj is optional here

// Correct version:
console.log(obj?.address?.city);

// Each level must use ?. if it might not exist.


// 5. SHORT-CIRCUITING BEHAVIOR

let account = null;
let counter = 0;

account?.update(counter++);
console.log(counter);

// counter remains 0
// because optional chaining stopped execution

// JS stops evaluating when it sees null/undefined.


// 6. OPTIONAL FUNCTION CALL ?.()

let adminUser = {
  admin() {
    console.log("I am admin");
  }
};

let guestUser = {};
adminUser.admin?.(); // runs function
guestUser.admin?.(); 
// nothing happens (function doesn't exist)
// no error occurs


// 7. OPTIONAL BRACKET ACCESS ?.[]

let key = "name";
let user1 = {
  name: "John"
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined
// Useful when property name is dynamic.


// 8. OPTIONAL CHAINING WITH DELETE

let profile = {
  name: "Alice"
};

delete profile?.name;

console.log(profile); // {}

// If object existed → property removed
// If object didn't exist → nothing happens


// 9. OPTIONAL CHAINING CANNOT BE USED FOR ASSIGNMENT

let student = null;

// student?.name = "Mike";
// ❌ ERROR

// Optional chaining is only for reading or calling
// NOT for writing values.



// 10. REAL WORLD EXAMPLE (API DATA)

let apiResponse = {
  user: {
    profile: {
      email: "john@email.com"
    }
  }
};

console.log(apiResponse.user?.profile?.email);

// if profile or user is missing
// it simply returns undefined instead of crashing
