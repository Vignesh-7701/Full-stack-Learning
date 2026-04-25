//Symbol is used to create a unique and hidden property key in an object.

/*
Used internally by JS
JavaScript uses Symbols for special behaviors like:
Symbol.iterator
Symbol.toPrimitive
*/

"use strict";


// 1. CREATING A SYMBOL

// Symbol() creates a UNIQUE identifier
let id = Symbol();
console.log(id); 
// Symbol()
// Symbols are primitive values used as unique identifiers


// 2. SYMBOL WITH DESCRIPTION

// Description is just for debugging
let userId = Symbol("userId");
console.log(userId);
// Symbol(userId)
console.log(userId.description);
// userId


// 3. SYMBOLS ARE ALWAYS UNIQUE

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);
// false

// Even though description is same,
// symbols are always different values.


// 4. SYMBOLS DO NOT AUTO-CONVERT TO STRING

let sym = Symbol("test");

// console.log("symbol is " + sym);
// ❌ TypeError (cannot convert symbol automatically)

console.log(sym.toString());
// Symbol(test)

console.log(sym.description);
// test


// 5. USING SYMBOL AS OBJECT KEY

let user = {
  name: "John"
};
let secretId = Symbol("id");

// using symbol as property key
user[secretId] = 123;
console.log(user[secretId]); // 123
console.log(user);


// Important:
// symbol keys cannot be accessed accidentally
// because nobody else has the symbol reference


// 6. SYMBOL PROPERTIES ARE HIDDEN FROM LOOPS

let hidden = Symbol("hidden");

let account = {
  username: "admin",
  password: "1234",
  [hidden]: "secret data"
};

for (let key in account) {
  console.log(key);
}

// output:
// username
// password

// Symbol property does NOT appear in for..in loop


// 7. OBJECT.KEYS ALSO IGNORES SYMBOLS

console.log(Object.keys(account));

// ["username", "password"]
// Symbol properties stay hidden from normal enumeration


// 8. OBJECT.ASSIGN COPIES SYMBOL PROPERTIES

let clone = Object.assign({}, account);
console.log(clone[hidden]);
// secret data
// Object.assign copies both string keys and symbol keys


//9. GLOBAL SYMBOL REGISTRY (Symbol.for)

// create or read symbol from global registry
let globalId = Symbol.for("globalID");

// get same symbol again
let globalIdAgain = Symbol.for("globalID");
console.log(globalId === globalIdAgain);
// true
// Symbol.for ensures same symbol across application


// 10. GETTING SYMBOL NAME (Symbol.keyFor)

let symGlobal = Symbol.for("appKey");
console.log(Symbol.keyFor(symGlobal));
// appKey
// only works for GLOBAL symbols


// 11. LOCAL SYMBOL VS GLOBAL SYMBOL

let localSymbol = Symbol("localKey");
console.log(Symbol.keyFor(localSymbol));
// undefined

// because it is NOT from global registry

console.log(localSymbol.description);
// localKey


// 12. GETTING SYMBOL PROPERTIES FROM OBJECT

let secret = Symbol("secret");

let obj = {
  name: "Alice",
  [secret]: "hidden value"
};

// get symbol keys
console.log(Object.getOwnPropertySymbols(obj));

// returns array of symbol keys


// 13. REFLECT.OWNKEYS RETURNS ALL KEYS

console.log(Reflect.ownKeys(obj));

// returns:
// ["name", Symbol(secret)]

// includes both string and symbol keys


// 14. SYSTEM SYMBOLS (WELL-KNOWN SYMBOLS)

// JavaScript has built-in symbols
// Example: Symbol.iterator

let numbers = [1,2,3];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Symbol.iterator defines how iteration works

