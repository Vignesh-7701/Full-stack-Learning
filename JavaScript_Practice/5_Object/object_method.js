"use strict";

// 1. Object Methods

let user = {
  name: "John",
  age: 30
};

// add a function to the object
user.sayHi = function () {
  console.log("Hello!");
};

// calling the method
user.sayHi();
// A function inside an object property is called a METHOD.


// 2. Using an existing function as a method

function greet() {
  console.log("Hi there!");
}

let person = {
  name: "Alex"
};

// attach the function to object
person.sayHello = greet;

person.sayHello();
// same function reused as a method


// 3. Method shorthand

let student = {
  name: "David",

  // method shorthand
  sayName() {
    console.log("Student name is " + this.name);
  }
};

student.sayName();

// this refers to the object calling the method


// 4. Using "this" inside object methods

let car = {
  brand: "Toyota",
  model: "Camry",

  showCar() {
    console.log(this.brand + " " + this.model);
  }
};

car.showCar();
// "this" refers to the object before the dot.


// 5. Why NOT to use object variable instead of "this"

let user2 = {
  name: "John",

  sayHi() {
    console.log(user2.name); // BAD practice
  }
};

let admin = user2;

// removing original reference
user2 = null;

// admin.sayHi(); ❌ would cause error


// 6. "this" is evaluated at runtime

function sayHi() {
  console.log(this.name);
}

let user3 = { name: "John" };
let admin2 = { name: "Admin" };

user3.f = sayHi;
admin2.f = sayHi;

user3.f();   // John
admin2.f();  // Admin

// same function used by two objects
// "this" becomes the object before the dot


// 7. Dot vs bracket calling

admin2["f"]();

// same result as admin2.f()


// 8. Calling function without object

function showThis() {
  console.log(this);
}

showThis();

// in strict mode → undefined
// without strict mode → window object


// 9. Arrow functions and "this"

let user4 = {
  firstName: "Ilya",

  sayHi() {

    // arrow function inherits "this"
    let arrow = () => {
      console.log(this.firstName);
    };

    arrow();
  }
};

user4.sayHi();

// arrow functions DO NOT have their own "this"
// they use the outer function's "this"


// 10. Calculator example (from the page task)

let calculator = {

  read() {
    this.a = 10;   
    this.b = 5;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();

console.log("Sum:", calculator.sum());
console.log("Multiply:", calculator.mul());


// 11. Method chaining

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep();

// returning "this" allows method chaining