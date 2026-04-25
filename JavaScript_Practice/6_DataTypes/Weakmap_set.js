/*
WeakMap

A WeakMap is a special type of Map where keys must be objects and those keys are weakly referenced.

Weak reference means:
If the object key is no longer used anywhere else in the program, JavaScript automatically removes it from the WeakMap during garbage collection.
This helps prevent memory leaks.
*/

/*
WeakMap & WeakSet 

JavaScript keeps values in memory as long as they are reachable.
If nothing references an object, the garbage collector removes it.

WeakMap and WeakSet are special collections that DO NOT prevent
garbage collection of objects stored inside them.
*/



//1. MEMORY & REFERENCE BASICS

// When an object has a reference, it stays in memory
let user = { name: "John" };

// If we remove the reference
user = null;

// Now the object becomes unreachable and can be garbage collected



//2. OBJECT STORED INSIDE ARRAY

let person = { name: "Alice" };

let arr = [person];

// Remove original reference
person = null;

// Object still exists because array holds a reference
console.log(arr[0]); // { name: "Alice" }


//3. OBJECT STORED INSIDE MAP

// Map stores strong references to keys
let john = { name: "John" };

let map = new Map();

map.set(john, "developer");

// Remove original reference
john = null;

// Object still exists because Map still references it
// This can lead to memory issues in large apps


//4. WEAKMAP

/*
WeakMap is similar to Map but with an important difference:

1. Keys must be objects (not primitives)
2. If the key object has no other references, it will be
   garbage collected automatically
3. WeakMap does NOT support iteration methods

Allowed methods:
- set(key, value)
- get(key)
- delete(key)
- has(key)
*/

let weakMap = new WeakMap();

let obj = { id: 1 };

weakMap.set(obj, "stored data");

console.log(weakMap.get(obj)); // "stored data"

obj = null;

// Once obj has no references, the entry is automatically removed
// from WeakMap by garbage collector


//5. WHY WEAKMAP DOES NOT SUPPORT ITERATION

/*
WeakMap does NOT have:

- keys()
- values()
- entries()
- size

Reason:
Garbage collection happens at unpredictable times,
so the exact number of elements is not reliable.

Because of that, JavaScript does not allow iteration
over WeakMap.
*/


//6. USE CASE: ADDITIONAL DATA STORAGE

/*
Suppose we want to store additional information about users,
but we don't want memory leaks when users disappear.
*/

let visitCount = new WeakMap();

function countUser(user) {

  let count = visitCount.get(user) || 0;

  visitCount.set(user, count + 1);
}

let user1 = { name: "Bob" };

countUser(user1);
countUser(user1);

console.log(visitCount.get(user1)); // 2

// When user1 becomes unreachable
user1 = null;

// visitCount entry will automatically disappear


//7. USE CASE: CACHING

/*
WeakMap is useful for caching expensive calculations.

If the object disappears, cached data also disappears.
*/

let cache = new WeakMap();

function process(obj) {

  if (!cache.has(obj)) {

    let result = obj.value * 2; // example calculation

    cache.set(obj, result);

    return result;
  }

  return cache.get(obj);
}

let data = { value: 10 };

console.log(process(data)); // calculated
console.log(process(data)); // from cache

data = null;

// cache entry will eventually disappear automatically


//8. WEAKSET

/*
WeakSet is similar to Set but:

1. Stores only objects
2. Objects are removed automatically when unreachable
3. Cannot iterate over it
4. No size property

Methods:
- add(value)
- has(value)
- delete(value)
*/

let visitedUsers = new WeakSet();

let u1 = { name: "John" };
let u2 = { name: "Pete" };
let u3 = { name: "Mary" };

visitedUsers.add(u1);
visitedUsers.add(u2);

console.log(visitedUsers.has(u1)); // true
console.log(visitedUsers.has(u3)); // false

// If object disappears
u1 = null;

// WeakSet will automatically remove it


//9. PRACTICAL EXAMPLE – TRACK READ MESSAGES

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// Store read messages
let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log(readMessages.has(messages[0])); // true

// If message removed from array
messages.shift();

// WeakSet entry disappears automatically


//10. PRACTICAL EXAMPLE – STORE READ DATE

/*
If we need additional data (not just true/false),
we use WeakMap instead of WeakSet.
*/

let readDates = new WeakMap();

readDates.set(messages[0], new Date());

console.log(readDates.get(messages[0]));


//11. QUICK COMPARISON

/*
Map
- keys can be primitives or objects
- iterable
- strong references

WeakMap
- keys must be objects
- not iterable
- weak references (auto cleanup)

Set
- stores unique values
- iterable

WeakSet
- stores only objects
- not iterable
- weak references
*/


/*METHODS SUMMARY (for quick revision)

WeakMap
-------
set(key, value)
get(key)
has(key)
delete(key)

WeakSet
-------
add(value)
has(value)
delete(value)

LIMITATIONS
-----------
No iteration
No size
Keys must be objects
*/