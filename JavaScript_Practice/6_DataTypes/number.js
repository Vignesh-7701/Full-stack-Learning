/*
JAVASCRIPT NUMBERS

Here I'm covering :
1. Number basics
2. Numeric separators
3. Rounding numbers
4. NaN and Infinity
5. Checking numbers (isNaN, isFinite)
6. parseInt and parseFloat
7. Math object
8. Random numbers
9. Number base conversion
*/

console.log("1. NUMBER BASICS");

// JavaScript has only ONE number type (both integer and float)
let intNumber = 10;
let floatNumber = 10.55;

console.log("Integer:", intNumber);
console.log("Float:", floatNumber);

// Scientific notation
let scientific = 1e6; // 1 * 10^6
console.log("Scientific notation:", scientific);

// Numeric separators (for readability)
let bigNumber = 1_000_000;
console.log("Numeric separator:", bigNumber);



console.log("\n2. ROUNDING NUMBERS");

// Math.floor → round down
console.log("Math.floor(3.9):", Math.floor(3.9));

// Math.ceil → round up
console.log("Math.ceil(3.1):", Math.ceil(3.1));

// Math.round → nearest integer
console.log("Math.round(3.5):", Math.round(3.5));

// Math.trunc → remove decimal part
console.log("Math.trunc(3.9):", Math.trunc(3.9));



console.log("\n3. DECIMAL PRECISION ISSUE");

// JavaScript uses floating-point numbers internally
// so some decimals cannot be represented exactly

let sum = 0.1 + 0.2;

console.log("0.1 + 0.2 =", sum); // 0.30000000000000004

// Fix using toFixed
console.log("Fixed:", sum.toFixed(2)); // "0.30"



console.log("\n4. NaN AND INFINITY");

// NaN means "Not a Number"

console.log("NaN example:", "abc" / 2); // NaN

// Infinity example
console.log("Infinity example:", 1 / 0);
console.log("Negative Infinity:", -1 / 0);



console.log("\n5. CHECKING NUMBERS");

// isNaN → checks if value is NaN
console.log("isNaN('abc'):", isNaN("abc"));

// isFinite → checks if value is finite number
console.log("isFinite(10):", isFinite(10));
console.log("isFinite(Infinity):", isFinite(Infinity));



console.log("\n6. STRING TO NUMBER CONVERSION");

// Strict conversion
console.log("Number('123'):", Number("123"));

// strict conversion fails if not pure number
console.log("Number('123px'):", Number("123px")); // NaN



console.log("\n7. parseInt");

// Reads integer until invalid character appears
console.log("parseInt('100px'):", parseInt("100px"));
console.log("parseInt('12.5'):", parseInt("12.5"));

// Radix (base)
console.log("parseInt('ff', 16):", parseInt("ff", 16)); // hexadecimal



console.log("\n8. parseFloat");

// Reads floating number
console.log("parseFloat('12.5em'):", parseFloat("12.5em"));
console.log("parseFloat('12.3.4'):", parseFloat("12.3.4"));



console.log("\n9. MATH OBJECT");

// random number between 0 and 1
console.log("Random:", Math.random());

// max value
console.log("Math.max:", Math.max(3, 10, -5));

// min value
console.log("Math.min:", Math.min(3, 10, -5));

// power
console.log("Math.pow(2,5):", Math.pow(2,5));



console.log("\n10. BASE CONVERSION");

// convert number to binary
let num = 255;

console.log("Binary:", num.toString(2));
console.log("Hex:", num.toString(16));
console.log("Base 36:", num.toString(36));



