// 1. Creating an Object (Object Literal)

let user = {
  name: "John",     // property: name
  age: 30           // property: age
};

console.log("1. Initial object:", user);


// 2. Accessing Object Properties

console.log("2. Access using dot notation:", user.name);  // Using dot notation
console.log("2. Access using bracket notation:", user["age"]);   // Using bracket notation


// 3. Adding New Properties

user.isAdmin = true;
console.log("3. After adding new property:", user);


// 4. Deleting Properties

delete user.age;
console.log("4. After deleting age:", user);


// 5. Multiword Property Names

// Property name with spaces must be in quotes
user["likes birds"] = true;

// Must use bracket notation to access
console.log("5. Multiword property:", user["likes birds"]);


// 6. Computed Properties

// Property name comes from a variable
let fruit = "apple";

let bag = {
  [fruit]: 5   // creates property apple: 5
};

console.log("6. Computed property object:", bag);


// 7. Property Value Shorthand

let city = "Chennai";
let country = "India";

// Instead of city: city, country: country
// JavaScript allows shorthand
let location = {
  city,
  country
};

console.log("7. Shorthand properties:", location);


// 8. Property Names as Numbers

// Numbers become strings internally
// But they will be in order 
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "UK",
  1: "USA"
};

console.log("8. Object with numeric keys:", codes);


// 9. Checking Property Existence

// "in" operator checks if property exists
console.log("9. name exists:", "name" in user);
console.log("9. age exists:", "age" in user);



// 10. undefined vs Property Check

// Property exists but value is undefined
user.test = undefined;

// this is to get the value
console.log("10. user.test value:", user.test);

// Correct way to check property existence
console.log("10. test property exists:", "test" in user);


// 11. Looping Through Object (for..in)

console.log("11. Looping through user object:");

for (let key in user) {
  console.log("Key:", key);
  console.log("Value:", user[key]); 
}
/* user.key -> undefined bcoz it'll not assign 
   the value of key instead it'll search for obj.key in
*/   


// 12. Property Order in Objects

let phoneCodes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "UK",
  "1": "USA"
};

// Numeric keys are sorted automatically
console.log("12. Property order:");

for (let code in phoneCodes) {
  console.log(code + " -> " + phoneCodes[code]);
}


// 13. Empty Object Creation

let emptyObj = {}; // creating empty object

emptyObj.name = "Alex"; // adding property later
emptyObj.age = 25;

console.log("13. Empty object after adding properties:", emptyObj);


// 14. Objects vs Primitive Values

// Primitive value
let number = 10;

// Object value
let person = {
  name: "David",
  age: 40
};

console.log("14. Primitive value:", number);
console.log("14. Object value:", person);



