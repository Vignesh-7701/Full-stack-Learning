/*
JAVASCRIPT ARRAY METHODS - MASTER FILE

Topics covered:
1. Add / remove elements
2. splice
3. slice
4. concat
5. Searching methods
6. Iteration methods
7. map
8. filter
9. reduce
10. sort
11. reverse
12. split & join
13. Array.isArray
14. some & every
15. flat & flatMap
*/

console.log("1. PUSH / POP");

let arr = [1,2,3];

arr.push(4); // add element at end
console.log(arr);

arr.pop(); // remove last element
console.log(arr);



console.log("\n2. SHIFT / UNSHIFT");

arr.unshift(0); // add at beginning
console.log(arr);

arr.shift(); // remove first element
console.log(arr);



console.log("\n3. SPLICE (INSERT / DELETE / REPLACE)");

/*
splice(start, deleteCount, items...)
modifies original array
*/

let users = ["John","Pete","Mary"];

users.splice(1,1); // remove "Pete"

console.log(users);

users.splice(1,0,"Alice"); // insert

console.log(users);



console.log("\n4. SLICE");

/*
slice(start,end)

Creates new array
Does NOT modify original
*/

let numbers = [1,2,3,4,5];

let part = numbers.slice(1,4);

console.log(part);



console.log("\n5. CONCAT");

/*
Combines arrays
Returns new array
*/

let a = [1,2];
let b = [3,4];

let result = a.concat(b);

console.log(result);



console.log("\n6. INDEXOF / INCLUDES");

let fruits = ["apple","banana","orange"];

console.log(fruits.indexOf("banana"));

console.log(fruits.includes("apple"));



console.log("\n7. FIND");

/*
find returns FIRST matching element
*/

let people = [
 {name:"John", age:25},
 {name:"Mary", age:30},
 {name:"Alex", age:20}
];

let person = people.find(p => p.age === 30);

console.log(person);



console.log("\n8. FILTER");

/*
filter returns ALL matching elements
*/

let nums = [1,2,3,4,5,6];

let even = nums.filter(n => n % 2 === 0);

console.log(even);



console.log("\n9. FOREACH");

/*
forEach runs function for every element
*/

nums.forEach(num => console.log(num));



console.log("\n10. MAP");

/*
map transforms each element
returns new array
*/

let squared = nums.map(n => n*n);

console.log(squared);



console.log("\n11. REDUCE");

/*
reduce calculates single value
*/

let sum = nums.reduce((total,n) => total + n,0);

console.log(sum);



console.log("\n12. SORT");

/*
default sorting is STRING based
*/

let arr2 = [1,15,2];

arr2.sort();

console.log(arr2);

// numeric sort

arr2.sort((a,b) => a - b);

console.log(arr2);



console.log("\n13. REVERSE");

arr2.reverse();

console.log(arr2);



console.log("\n14. SPLIT & JOIN");

let names = "John,Peter,Mary";

let nameArr = names.split(",");

console.log(nameArr);

let str = nameArr.join(" - ");

console.log(str);



console.log("\n15. ARRAY.ISARRAY");

console.log(Array.isArray([1,2]));

console.log(Array.isArray({}));



console.log("\n16. SOME");

/*
returns true if ANY element matches condition
*/

console.log(nums.some(n => n > 5));



console.log("\n17. EVERY");

/*
returns true if ALL elements match condition
*/

console.log(nums.every(n => n > 0));



console.log("\n18. FLAT");

let nested = [1,[2,3],[4,[5]]];

console.log(nested.flat());



console.log("\n19. FLATMAP");

/*
map + flat combined
*/

let words = ["hello","world"];

let letters = words.flatMap(word => word.split(""));

console.log(letters);






/*

Quick Developer Cheat Sheet (Very Important)

Add / Remove
push()
pop()
shift()
unshift()
splice()

Copy / Merge

slice()
concat()

Search

indexOf()
includes()
find()
filter()

Iterate

forEach()
map()

Transform / Compute

reduce()
sort()
reverse()

Other

some()
every()
Array.isArray()
flat()
flatMap()

*/