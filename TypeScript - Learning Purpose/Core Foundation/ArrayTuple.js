/*
  ARRAYS & TUPLES IN TYPESCRIPT
  Run:
  tsc filename.ts
  node filename.js
*/
// 1. ARRAYS
var numberss = [1, 2, 3];
console.log(numberss);
var names = ["John", "Jane"];
console.log(names);
// Alternative syntax
var values = [10, 20];
console.log(values);
// 2. TYPE SAFETY
numberss.push(4);
// numberss.push("5"); ❌ Error
// 3. ARRAY OPERATIONS
var users = ["John", "Jane"];
users.push("Mike");
users.pop();
users.shift();
users.unshift("Sam");
console.log(users);
// 4. LOOPING
for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
}
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    console.log(user);
}
// 5. UNION TYPE ARRAY
var mixedd = ["A", 1, "B", 2];
console.log(mixedd);
// 6. READONLY ARRAY
var readonlyNumbers = [1, 2, 3];
// readonlyNumbers.push(4); ❌ Error
console.log(readonlyNumbers);
// 7. ARRAY OF OBJECTS
var userList = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 }
];
console.log(userList);
// 8. TUPLES
var userTuple = ["John", 25];
console.log(userTuple);
// 9. TUPLE WITH MULTIPLE TYPES
var data = ["A", true, 10];
console.log(data);
// 10. OPTIONAL TUPLE
var optionalTuple = ["John"];
console.log(optionalTuple);
// 11. REST IN TUPLE
var restTuple = ["A", 1, 2, 3];
console.log(restTuple);
// 12. NAMED TUPLE
var namedTuple = ["John", 25];
console.log(namedTuple);
// 13. REAL-TIME EXAMPLE (API RESPONSE)
function getResponse() {
    return [200, "Success"];
}
var response = getResponse();
console.log("Status: ".concat(response[0], ", Message: ").concat(response[1]));
// 14. COORDINATES EXAMPLE
var point = [10, 20];
console.log("X: ".concat(point[0], ", Y: ").concat(point[1]));
