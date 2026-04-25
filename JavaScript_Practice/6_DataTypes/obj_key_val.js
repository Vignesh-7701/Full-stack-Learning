/*
Object.keys(), Object.values(), Object.entries()
These methods are used to extract data from objects.

Object.keys(obj)    → returns array of keys
Object.values(obj)  → returns array of values
Object.entries(obj) → returns array of [key, value] pairs

Important:
Unlike Map methods (map.keys()), these are called as
Object.keys(obj) NOT obj.keys().

Also, Object.* methods return a REAL ARRAY.
*/



//1. BASIC OBJECT

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};


//2. Object.keys()

/*
Object.keys(obj)

Returns an array containing all property names (keys)
of the object.
*/

let keys = Object.keys(user);

console.log(keys);
// ["name", "age", "isAdmin"]

// Example usage: loop through keys

for (let key of Object.keys(user)) {
  console.log(key);
}

// Access value using key

for (let key of Object.keys(user)) {
  console.log(key, user[key]);
}


//3. Object.values()

/*
Object.values(obj)
Returns an array containing all property values.
*/

let values = Object.values(user);

console.log(values);
// ["John", 30, true]

// Loop through values

for (let value of Object.values(user)) {
  console.log(value);
}


//4. Object.entries()

/*
Object.entries(obj)
Returns an array of [key, value] pairs.
Each element itself is an array.

*/

let entries = Object.entries(user);

console.log(entries);


//5. LOOPING USING ENTRIES

/*
Object.entries is very useful when we want both
key and value while looping.
*/

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}



//6. IMPORTANT DIFFERENCE: MAP vs OBJECT

/*
MAP

map.keys()
map.values()
map.entries()

OBJECT

Object.keys(obj)
Object.values(obj)
Object.entries(obj)

Reason:
Objects are base structures in JS and may have their own
methods, so JS keeps these as static Object methods.
*/


//7. IGNORING SYMBOL KEYS

/*
Object.keys / values / entries ignore Symbol properties.

Example:
*/

let id = Symbol("id");

let person = {
  name: "Alice",
  age: 25,
  [id]: 123
};

console.log(Object.keys(person));
// ["name","age"]
// Symbol key not included


//8. TRANSFORMING OBJECTS

/*
Objects don't have array methods like:

map()
filter()
reduce()

So the common pattern is:

1. Convert object → array using Object.entries()
2. Apply array methods
3. Convert back → object using Object.fromEntries()
*/


let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

/*
Goal:
Double all prices
*/

let doublePrices = Object.fromEntries(

  Object.entries(prices).map(([key, value]) => {
    return [key, value * 2];
  })

);

console.log(doublePrices);


//9. PRACTICAL TASK — SUM PROPERTIES

/*
Problem:
Sum all salaries in object
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(obj) {

  let sum = 0;

  for (let value of Object.values(obj)) {
    sum += value;
  }

  return sum;
}

console.log(sumSalaries(salaries));
// 650


//10. USING REDUCE

function sumSalaries2(obj) {

  return Object.values(obj).reduce((a, b) => a + b, 0);

}

console.log(sumSalaries2(salaries));


//11. COUNT OBJECT PROPERTIES

/*
Count number of properties in object
*/

function count(obj) {

  return Object.keys(obj).length;

}

console.log(count(user));
// 3


//REVISION SUMMARY

/*
Object.keys(obj)
----------------
Returns array of property names.

Example:
["name","age"]


Object.values(obj)
------------------
Returns array of values.

Example:
["John",30]


Object.entries(obj)
-------------------
Returns array of key-value pairs.

Example:
[
 ["name","John"],
 ["age",30]
]


Common Pattern
--------------
Object.entries(obj)
      ↓
Array methods (map/filter)
      ↓
Object.fromEntries()


Common Uses
-----------
Loop object
Transform object
Sum values
Count properties
Convert object → array
Convert array → object
*/


/*
Using for of in object : 
Object → for...in

Object + for...of →
Object.keys()
Object.values()
Object.entries()
*/