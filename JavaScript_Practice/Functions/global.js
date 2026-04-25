/*****************************************
 GLOBAL OBJECT 
******************************************/

/*
Global Object = an object that is available everywhere

It contains:
- built-in functions (parseInt, setTimeout)
- built-in objects (Math, JSON)
- global variables

👉 It is created automatically when JS starts
*/

/*
Different names based on environment:
- Browser → window
- Node.js → global
- Universal → globalThis (recommended)
*/


/*********************************
1. ACCESS GLOBAL OBJECT
**********************************/

console.log(globalThis); // works everywhere

/*
cmt:
- globalThis is standard way
- always points to global object
*/


/*********************************
2. GLOBAL FUNCTIONS BELONG TO IT
**********************************/

console.log(globalThis.parseInt("10")); // 10

/*
cmt:
- parseInt is inside global object
- we usually call it directly
*/


/*********************************
3. SAME AS DIRECT ACCESS
**********************************/

console.log(parseInt("20")); // 20

/*
cmt:
- global object properties can be accessed directly
*/


/*********************************
4. VAR CREATES GLOBAL PROPERTY (IMPORTANT NOTE)
**********************************/

var gVar = 5;

console.log(globalThis.gVar); // undefined in Node.js

/*
cmt:
- In browser → var attaches to global object
- In Node.js → var is module-scoped (NOT global)
*/


/*********************************
5. LET / CONST DO NOT ATTACH
**********************************/

let gLet = 10;
const gConst = 20;

console.log(globalThis.gLet);   // undefined
console.log(globalThis.gConst); // undefined

/*
cmt:
- let/const never attach to global object
*/


/*********************************
6. FUNCTION DECLARATION (NODE DIFFERENCE)
**********************************/

function sayHi() {
  return "Hi";
}

// ❌ This will FAIL in Node.js
// console.log(globalThis.sayHi());

// ✅ Fix: manually attach
globalThis.sayHi = sayHi;

console.log(globalThis.sayHi()); // Hi

/*
cmt:
- In browser → function becomes global
- In Node.js → function is module-scoped
- So we must attach manually
*/


/*********************************
7. CREATE GLOBAL VARIABLE MANUALLY
**********************************/

globalThis.user = {
  name: "Vignesh"
};

console.log(user.name); // Vignesh

/*
cmt:
- explicitly adding to global object
- accessible everywhere
*/


/*********************************
8. SAFE ACCESS
**********************************/

let userLocal = { name: "Local" };

console.log(globalThis.user.name);

/*
cmt:
- avoids conflicts with local variables
*/


/*********************************
9. AVOID GLOBAL VARIABLES
**********************************/

/*
cmt:
- global variables are dangerous
- can be modified anywhere
- hard to debug

BEST PRACTICE:
✔ keep globals minimum
✔ use modules/functions instead
*/


/*********************************
10. POLYFILL USE CASE
**********************************/

if (!globalThis.myFeature) {
  globalThis.myFeature = function () {
    console.log("Polyfill feature");
  };
}

globalThis.myFeature();

/*
cmt:
- used to add missing features
*/


/*********************************
11. GLOBAL OBJECT SELF REFERENCE
**********************************/

console.log(globalThis === globalThis.globalThis); // true

/*
cmt:
- global object references itself
*/


/*********************************
12. QUICK SUMMARY
**********************************/

/*
✔ global object = available everywhere

ENVIRONMENTS:
- window (browser)
- global (Node.js)
- globalThis (best)

NODE SPECIAL RULE:
- var/function → NOT global
- must attach manually

BEST PRACTICE:
- avoid globals
- use globalThis only if needed
*/