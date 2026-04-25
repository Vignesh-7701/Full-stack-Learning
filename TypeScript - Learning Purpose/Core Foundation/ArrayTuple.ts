/*
  ARRAYS & TUPLES IN TYPESCRIPT
  Run:
  tsc filename.ts
  node filename.js
*/

// 1. ARRAYS

let numberss: number[] = [1, 2, 3];
console.log(numberss);

let names: string[] = ["John", "Jane"];
console.log(names);

// Alternative syntax
let values: Array<number> = [10, 20];
console.log(values);

// 2. TYPE SAFETY

numberss.push(4);
// numberss.push("5"); ❌ Error

// 3. ARRAY OPERATIONS

let users: string[] = ["John", "Jane"];

users.push("Mike");
users.pop();
users.shift();
users.unshift("Sam");

console.log(users);

// 4. LOOPING

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

for (let user of users) {
  console.log(user);
}

// 5. UNION TYPE ARRAY

let mixedd: (string | number)[] = ["A", 1, "B", 2];
console.log(mixedd);

// 6. READONLY ARRAY

let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); ❌ Error

console.log(readonlyNumbers);

// 7. ARRAY OF OBJECTS

let userList: { name: string; age: number }[] = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

console.log(userList);

// 8. TUPLES

let userTuple: [string, number] = ["John", 25];
console.log(userTuple);

// 9. TUPLE WITH MULTIPLE TYPES

let data: [string, boolean, number] = ["A", true, 10];
console.log(data);

// 10. OPTIONAL TUPLE

let optionalTuple: [string, number?] = ["John"];
console.log(optionalTuple);

// 11. REST IN TUPLE

let restTuple: [string, ...number[]] = ["A", 1, 2, 3];
console.log(restTuple);

// 12. NAMED TUPLE

let namedTuple: [name: string, age: number] = ["John", 25];
console.log(namedTuple);

// 13. REAL-TIME EXAMPLE (API RESPONSE)

function getResponse(): [number, string] {
  return [200, "Success"];
}

let response = getResponse();
console.log(`Status: ${response[0]}, Message: ${response[1]}`);

// 14. COORDINATES EXAMPLE

let point: [number, number] = [10, 20];
console.log(`X: ${point[0]}, Y: ${point[1]}`);