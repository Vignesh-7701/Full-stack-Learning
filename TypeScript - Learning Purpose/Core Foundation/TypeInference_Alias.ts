/*
  TYPE INFERENCE & TYPE ALIASES
  Run:
  tsc filename.ts
  node filename.js
*/

///////////////////////////////
// PART 1: TYPE INFERENCE
///////////////////////////////

// 1. BASIC INFERENCE

let namee = "Vignesh"; // inferred as string
let age = 22;         // inferred as number
let isActive = true;  // inferred as boolean

console.log(namee, age, isActive);

// 2. ARRAY INFERENCE

let numbers = [1, 2, 3]; // number[]
let mixed = [1, "A"];    // (string | number)[]

console.log(numbers, mixed);

// 3. FUNCTION INFERENCE

function add(a: number, b: number) {
  return a + b; // return type inferred as number
}

console.log(add(10, 20));

// 4. WHEN NOT TO USE INFERENCE

// ❌ Avoid this
// function greet(name) {
//   return "Hello " + name;
// }

// ✅ Correct
function greet(name: string): string {
  return "Hello " + name;
}

console.log(greet("Vignesh"));

///////////////////////////////
// PART 2: TYPE ALIASES
///////////////////////////////

// 5. BASIC TYPE ALIAS

type UserName = string;

let myName: UserName = "Vignesh";
console.log(myName);

// 6. OBJECT TYPE ALIAS

type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "John",
  age: 25
};

console.log(user1);

// 7. FUNCTION TYPE ALIAS

type AddFunction = (a: number, b: number) => number;

let sum: AddFunction = (x, y) => x + y;

console.log(sum(5, 10));

// 8. UNION TYPE ALIAS

type ID = string | number;

let userId: ID = 101;
console.log(userId);

userId = "ABC123";
console.log(userId);

// 9. INTERSECTION TYPE ALIAS

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

let person: Person = {
  name: "Alice",
  age: 30
};

console.log(person);

// 10. REAL-TIME EXAMPLE (API USER)

type ApiUser = {
  id: ID;
  username: string;
  isActive: boolean;
};

function printUser(user: ApiUser) {
  console.log(`User: ${user.username}, Active: ${user.isActive}`);
}

let apiUser: ApiUser = {
  id: 1,
  username: "vignesh",
  isActive: true
};

printUser(apiUser);