/*****************************************
 FUNCTION OBJECT 
******************************************/

/*
IMPORTANT IDEA:

In JavaScript, FUNCTIONS ARE OBJECTS

That means:
✔ can be called
✔ can have properties
✔ can be passed around

Difference:
- normal object → cannot call
- function → callable object
*/


/*********************************
1. FUNCTION IS OBJECT
**********************************/

function sayHi() {
  console.log("Hi");
}

console.log(typeof sayHi); // function

/*
cmt:
- internally it's an object
- special ability → can be called
*/


/*********************************
2. "name" PROPERTY
**********************************/

function greet() {}

console.log(greet.name); // greet

/*
cmt:
- every function has name property
- JS auto assigns name
*/


// even works in assignment
let hello = function () {};

console.log(hello.name); // hello


/*********************************
3. CONTEXTUAL NAME
**********************************/

function test(fn = function () {}) {
  console.log(fn.name);
}

test(); // fn

/*
cmt:
- JS guesses name from context
*/


/*********************************
4. "length" PROPERTY
**********************************/

function f1(a) {}
function f2(a, b) {}
function f3(a, b, ...rest) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(f3.length); // 2

/*
cmt:
- length = number of parameters
- rest params NOT counted
*/


/*********************************
5. USING length (ADVANCED)
**********************************/

function ask(question, ...handlers) {
  let isYes = true; // simulate answer

  for (let handler of handlers) {
    if (handler.length === 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

ask(
  "Question?",
  () => console.log("Yes"),
  (result) => console.log(result)
);

/*
cmt:
- handler.length used to decide behavior
- kind of polymorphism
*/


/*********************************
6. FUNCTION CUSTOM PROPERTIES
**********************************/

function counterFn() {
  counterFn.count++;
}

counterFn.count = 0;

counterFn();
counterFn();

console.log(counterFn.count); // 2

/*
cmt:
- functions can store data as properties
- behaves like object
*/


/*********************************
7. PROPERTY ≠ VARIABLE
**********************************/

function demo() {
  // no variable named "count" here
}

demo.count = 5;

console.log(demo.count); // 5

/*
cmt:
- function property is separate from variables
- different memory
*/


/*********************************
8. CLOSURE vs FUNCTION PROPERTY
**********************************/

// closure version
function makeCounter1() {
  let count = 0;

  return function () {
    return count++;
  };
}

// function property version
function makeCounter2() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  return counter;
}

let c1 = makeCounter1();
let c2 = makeCounter2();

console.log(c1()); // 0
console.log(c2()); // 0

/*
cmt:
- closure → private (safe)
- property → public (can be modified)
*/


/*********************************
9. PROPERTY CAN BE MODIFIED
**********************************/

let c = makeCounter2();

c.count = 10;

console.log(c()); // 10

/*
cmt:
- external code can change function property
- not safe compared to closure
*/


/*********************************
10. NAMED FUNCTION EXPRESSION (NFE)
**********************************/

let sayHello = function func(name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    func("Guest"); // self-call
  }
};

sayHello(); // Hello Guest

/*
cmt:
- func is internal name
- used for recursion
*/


/*********************************
11. NFE SCOPE
**********************************/

// console.log(func); ❌ error

/*
cmt:
- func is NOT accessible outside
- only inside function
*/


/*********************************
12. WHY NFE IS IMPORTANT
**********************************/

let sayHi2 = function (name) {
  if (name) {
    console.log(name);
  } else {
    sayHi2("Guest");
  }
};

let newFn = sayHi2;
sayHi2 = null;

// newFn(); ❌ error

/*
cmt:
- sayHi2 lost → breaks recursion
*/


// FIX using NFE
let sayHi3 = function func(name) {
  if (name) {
    console.log(name);
  } else {
    func("Guest"); // safe
  }
};

let newFn2 = sayHi3;
sayHi3 = null;

newFn2(); // Guest

/*
cmt:
- func is stable reference
- works even if outer variable changes
*/


/*********************************
13. REAL-WORLD USAGE
**********************************/

function main() {}

main.helper = function () {
  console.log("helper");
};

main.helper();

/*
cmt:
- libraries attach methods to functions
- reduces global variables
*/


/*********************************
14. QUICK SUMMARY
**********************************/

/*
✔ functions are objects
✔ have properties:
   - name
   - length

✔ can add custom properties
✔ can act like storage

✔ NFE → internal function name
   - used for safe recursion

IMPORTANT:
- closure → private data
- function property → public data
*/