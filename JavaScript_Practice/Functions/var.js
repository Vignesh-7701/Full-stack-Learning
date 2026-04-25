/*****************************************
 VAR (OLD JAVASCRIPT) 
******************************************/

/*
var = old way to declare variables

Now replaced by:
- let (modern)
- const (constant)

But var is still important for understanding old code
*/


/*********************************
1. BASIC USAGE
**********************************/

var message = "Hello";
console.log(message);

/*
cmt:
- var declares a variable
- default value = undefined if not assigned
*/


/*********************************
2. NO BLOCK SCOPE
**********************************/

if (true) {
  var test = "I am inside block";
}

console.log(test); // works!

/*
cmt:
- var ignores block {}
- accessible outside block
- unlike let/const
*/


/*********************************
3. FUNCTION SCOPE
**********************************/

function demo() {
  var inside = "inside function";
  console.log(inside);
}

demo();
// console.log(inside); ❌ error

/*
cmt:
- var is scoped to function
- not available outside function
*/


/*********************************
4. VAR IN LOOPS
**********************************/

for (var i = 0; i < 3; i++) {
  // loop
}

console.log(i); // 3

/*
cmt:
- i is still accessible after loop
- because var has no block scope
*/


/*********************************
5. HOISTING (IMPORTANT)
**********************************/

console.log(a); // undefined
var a = 10;

/*
cmt:
- var declarations are "hoisted" to top
- JS internally does:
    var a;
    console.log(a);
    a = 10;
*/


/*********************************
6. HOISTING IN FUNCTION
**********************************/

function testHoist() {
  console.log(x); // undefined
  var x = 5;
}

testHoist();

/*
cmt:
- declaration moves up
- assignment stays in place
*/


/*********************************
7. REDECLARATION ALLOWED
**********************************/

var user = "John";
var user = "Pete";

console.log(user); // Pete

/*
cmt:
- var allows redeclaration
- can overwrite silently
*/


/*********************************
8. VAR VS LET (KEY DIFFERENCE)
**********************************/

// var
if (true) {
  var a1 = 1;
}
console.log(a1); // 1

// let
if (true) {
  let b = 2;
}
// console.log(b); ❌ error

/*
cmt:
- var → no block scope
- let → block scope
*/


/*********************************
9. GLOBAL OBJECT (WINDOW / GLOBAL)
**********************************/

var globalVar = "hello";

// ❌ Browser only (will fail in Node.js)
// console.log(window.globalVar);

// ✅ Node.js
console.log(global.globalVar);

// ✅ Universal (works everywhere)
console.log(globalThis.globalVar);

/*
cmt:
- var attaches to global object
- Browser → window
- Node.js → global
- Best practice → use globalThis
- let/const do NOT attach to global object
*/


/*********************************
10. DANGEROUS PATTERN
**********************************/

function bad() {
  var x = y = 10;
}

bad();

// console.log(x); ❌ error
console.log(globalThis.y); // 10

/*
cmt:
- x is local (var)
- y becomes global (no var!)
- very dangerous bug
*/


/*********************************
11. VAR INSIDE BLOCK = FUNCTION LEVEL
**********************************/

function example() {
  if (true) {
    var msg = "hello";
  }

  console.log(msg); // works
}

example();

/*
cmt:
- block does NOT create scope for var
- function does
*/


/*********************************
12. QUICK SUMMARY
**********************************/

/*
✔ var = function scoped
✔ no block scope
✔ hoisted
✔ allows redeclaration
✔ attaches to global object

❌ can cause bugs
❌ not used in modern JS

👉 Use let / const instead
*/