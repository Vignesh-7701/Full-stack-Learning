//1. CONSTRUCTOR FUNCTION

// Constructor functions usually start with CAPITAL letter (not mandatory)
function User(name) {

  // "this" refers to the new object being created
  this.name = name;
  this.isAdmin = false;
}

// create objects using new
let userA = new User("John");
let userB = new User("Alice");

console.log(userA);
console.log(userB);

// both objects are created using same constructor


//2. WHAT "new" ACTUALLY DOES INTERNALLY

/*
When we call:

new User("Jack")

JavaScript does something like:

1. create empty object {}
2. set this = that object
3. run function body
4. return that object
*/

function Demo(name) {

  // imagine JS already did:
  // let this = {}

  this.name = name;

  // JS automatically returns "this"
}

let demoUser = new Demo("Mike");
console.log(demoUser);


//3. ADDING METHODS INSIDE CONSTRUCTOR

function Person(name) {
  this.name = name;

  // method added to object
  this.sayHi = function () {
    console.log("My name is " + this.name);
  };
}

let p1 = new Person("David");
p1.sayHi();

// resulting object looks like
/*
{
 name: "David",
 sayHi: function(){}
}
*/


//4. CALLING CONSTRUCTOR WITHOUT "new"

function Test(name) {
  // check if constructor was called with "new"
  if (!new.target) {
    console.log("Function called without new");

    // fix it automatically
    return new Test(name);
  }

  this.name = name;
}

let t1 = Test("Jack"); // no "new"
console.log(t1.name);

// new.target helps detect constructor mode


//5. CONSTRUCTOR USED ONLY ONCE

// immediately create object with constructor
let singleUser = new function () {

  this.name = "Temporary User";

  this.isAdmin = false;

};
console.log(singleUser);
// this constructor cannot be reused


//6. RETURN FROM CONSTRUCTOR

function BigUser() {
  this.name = "John";

  // returning object overrides "this"
  return { name: "Godzilla" };
}

console.log(new BigUser().name); // Godzilla


function SmallUser() {

  this.name = "John";
  // returning primitive is ignored
  return 10;
}
console.log(new SmallUser().name); // John


// 7. PARENTHESES AFTER NEW ARE OPTIONAL

function Animal() {
  this.type = "Dog";
}

// both are valid
let a1 = new Animal();
let a2 = new Animal;

console.log(a1.type);
console.log(a2.type);


// 8. CONSTRUCTOR THAT ACCUMULATES VALUES

function Accumulator(startingValue) {

  // store starting value
  this.value = startingValue;

  this.read = function () {

    let input = 5; 
    this.value += input;

  };

}

let acc = new Accumulator(1);

acc.read();
acc.read();

console.log("Accumulated value:", acc.value);
