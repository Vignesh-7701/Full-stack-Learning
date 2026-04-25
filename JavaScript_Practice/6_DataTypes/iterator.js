 /*
ITERABLES - ESSENTIAL USAGE ONLY
(Real Project Focus)
*/

// for of -> iterables
// for in -> objects

console.log("\n--- 1. for...of with Array ---\n");

const users = ["John", "Sam", "Alex"];

for (const user of users) {
    console.log(user);
}

/*
Used in real projects when looping API data,
arrays, lists etc.
*/


console.log("\n--- 2. for...of with String ---\n");

const word = "HELLO";

for (const letter of word) {
    console.log(letter);
}

/*
Strings are iterable.
Each character can be looped.
*/


console.log("\n--- 3. for...of with Set ---\n");

const numbers = new Set([10, 20, 30]);

for (const num of numbers) {
    console.log(num);
}

/*
Set stores unique values.
for...of directly works.
*/


console.log("\n--- 4. for...of with Map ---\n");

const userRoles = new Map([
    ["John", "Admin"],
    ["Sam", "Editor"],
    ["Alex", "User"]
]);

for (const [name, role] of userRoles) {
    console.log(name, ":", role);
}

/*
Map stores key-value pairs.
Very common in backend logic.
*/


console.log("\n--- 5. Looping API Response (Real Project Example) ---\n");

const apiUsers = [
    {name: "John", age: 25},
    {name: "Sam", age: 28},
    {name: "Alex", age: 30}
];

for (const user of apiUsers) {
    console.log(user.name, user.age);
}

/*
Typical backend/frontend usage
when handling JSON response.
*/


console.log("\n--- 6. DOM Elements Example (Frontend) ---\n");

/*
Example in browser:

const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
    btn.style.color = "red";
}

NodeList is iterable.
*/


console.log("\n--- 7. Array.from() (Important) ---\n");

const arrayLike = {
    0: "A",
    1: "B",
    2: "C",
    length: 3
};

const arr = Array.from(arrayLike);

console.log(arr);

/*
Array.from converts:
Array-like → Real Array

Common when working with DOM collections.
*/


console.log("\n--- SUMMARY ---\n");

console.log(`
Important things to know:

1. for...of → loops values
2. Works with iterable objects

Common iterables:
- Array
- String
- Map
- Set
- NodeList (DOM)

3. Array.from()
Used to convert array-like objects into arrays
`);
 
 
 
 /* 
    Interator is implemented internally using 
    [Symbol.iterator]() 
    next() 
*/