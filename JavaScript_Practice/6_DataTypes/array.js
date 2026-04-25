/*
JAVASCRIPT ARRAYS - COMPLETE DEMO FILE

Topics covered:
1. Creating arrays
2. Accessing elements
3. Updating elements
4. Array length
5. push / pop
6. shift / unshift
7. Iterating arrays
8. at() method
9. Arrays are objects (reference behavior)
10. Array comparison
11. Simple algorithm example
*/

console.log("1. CREATING ARRAYS");

// Array using square brackets (most common)
let fruits = ["Apple", "Orange", "Mango"];

// Array constructor
let numbers = new Array(1, 2, 3);

console.log(fruits);
console.log(numbers);



console.log("\n2. ACCESSING ELEMENTS");

// Array index starts from 0
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange

// Access last element
console.log(fruits[fruits.length - 1]);



console.log("\n3. MODIFYING ARRAY ELEMENTS");

fruits[1] = "Banana"; // replace value
console.log(fruits);

fruits[3] = "Pineapple"; // add new element
console.log(fruits);



console.log("\n4. ARRAY LENGTH");

console.log("Length:", fruits.length);

// shortening array manually
fruits.length = 2;

console.log("After truncating:", fruits);



console.log("\n5. PUSH AND POP");

// push → add element to end
fruits.push("Grapes");

console.log("After push:", fruits);

// pop → remove last element
let removed = fruits.pop();

console.log("Removed:", removed);
console.log("After pop:", fruits);



console.log("\n6. SHIFT AND UNSHIFT");

// unshift → add element to beginning
fruits.unshift("Kiwi");

console.log("After unshift:", fruits);

// shift → remove first element
let first = fruits.shift();

console.log("Removed first:", first);
console.log("After shift:", fruits);



console.log("\n7. at() METHOD");

// at() allows negative indexes
let arr = ["A", "B", "C", "D"];

console.log(arr.at(0));   // A
console.log(arr.at(-1));  // D
console.log(arr.at(-2));  // C



console.log("\n8. LOOPING ARRAYS");

// Traditional for loop
for (let i = 0; i < arr.length; i++) {
  console.log("Index:", i, "Value:", arr[i]);
}

// for...of loop (recommended for arrays)
for (let item of arr) {
  console.log("Item:", item);
}

// Avoid using for...in for arrays



console.log("\n9. ARRAYS ARE OBJECTS");

// Arrays are actually objects internally
// So they are copied by reference

let a = ["JS"];

let b = a; // reference copy

b.push("Node");

console.log(a); // ["JS","Node"]
console.log(b); // ["JS","Node"]



console.log("\n10. ARRAY COMPARISON");

let arr1 = [1,2,3];
let arr2 = [1,2,3];

// comparing arrays directly does not work
console.log(arr1 == arr2); // false



console.log("\n11. MAX SUB ARRAY EXAMPLE");

/*
Algorithm from javascript.info example

Goal:
Find maximum sum of contiguous subarray
*/

function getMaxSubSum(array) {

  let maxSum = 0;
  let partialSum = 0;

  for (let item of array) {

    partialSum += item;

    maxSum = Math.max(maxSum, partialSum);

    if (partialSum < 0) {
      partialSum = 0;
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1,2,3,-9])); // 5
console.log(getMaxSubSum([-1,2,3,-9,11])); // 11



console.log("\nEND OF ARRAY DEMO");