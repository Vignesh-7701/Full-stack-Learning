/*****************************************
 CLOSURE 
******************************************/

/*
Closure = function remembers variables from outer scope

Definition:
A closure is a function that can access outer variables
even after the outer function has finished execution

In JavaScript, ALL functions are closures
*/


/*********************************
1. LEXICAL ENVIRONMENT (BASE)
**********************************/

let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(globalVar); // from global
    console.log(outerVar);  // from outer
  }

  inner();
}

outer();

/*
cmt:
- inner() can access outerVar
- because of lexical scope (where function is defined)
*/


/*********************************
2. BASIC CLOSURE
**********************************/

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

/*
cmt:
- inner function remembers count
- even after makeCounter() finished
*/


/*********************************
3. MULTIPLE INSTANCES
**********************************/

let c1 = makeCounter();
let c2 = makeCounter();

console.log(c1()); // 0
console.log(c1()); // 1

console.log(c2()); // 0 (separate memory)

/*
cmt:
- each call creates new lexical environment
- closures are independent
*/


/*********************************
4. SHARED CLOSURE (OBJECT STYLE)
**********************************/

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };
}

let c = new Counter();

console.log(c.up());   // 1
console.log(c.up());   // 2
console.log(c.down()); // 1

/*
cmt:
- both functions share same count
- same outer environment
*/


/*********************************
5. CLOSURE + PARAMETERS
**********************************/

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4

/*
cmt:
- first call stores a
- second call uses it later
*/


/*********************************
6. REAL USE CASE - FILTER
**********************************/

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // [3,4,5,6]

/*
cmt:
- closure stores a & b
- filter uses returned function
*/


/*********************************
7. SORT USING CLOSURE
**********************************/

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

let users = [
  { name: "John", age: 20 },
  { name: "Pete", age: 18 },
  { name: "Ann", age: 19 },
];

users.sort(byField("name"));
users.sort(byField("age"));

/*
cmt:
- fieldName remembered via closure
*/


/*********************************
8. COMMON INTERVIEW PROBLEM
**********************************/

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 3; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[1](); // 1
army[2](); // 2

/*
cmt:
- each loop creates new i (with let)
- each function gets its own copy
*/


/*********************************
9. WRONG VERSION (IMPORTANT)
**********************************/

function wrongArmy() {
  let shooters = [];
  let i = 0;

  while (i < 3) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let wrong = wrongArmy();

wrong[0](); // 3
wrong[1](); // 3
wrong[2](); // 3

/*
cmt:
- all functions share SAME i
- final value = 3
- classic closure mistake
*/


/*********************************
10. DATA PRIVACY (REAL USE CASE)
**********************************/

function createUser(name) {
  let secret = "12345";

  return {
    getName() {
      return name;
    },
    getSecret() {
      return secret;
    },
  };
}

let user = createUser("Vignesh");

console.log(user.getName());   // Vignesh
console.log(user.getSecret()); // 12345

/*
cmt:
- secret is private
- cannot access directly
- closure gives controlled access
*/


/*********************************
11. IMPORTANT NOTES
**********************************/

/*
✔ closure = function + outer variables
✔ created at function creation time
✔ uses lexical scope

USES:
- data hiding
- callbacks
- event handlers
- functional programming

PROBLEMS:
- memory usage
- tricky bugs (loops)
*/


/*********************************
12. QUICK REVISION
**********************************/

/*
- closure = remembers outer variables
- works due to lexical environment
- inner function → access outer scope
- survives after outer function ends
*/