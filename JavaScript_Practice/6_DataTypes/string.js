/*
JAVASCRIPT STRINGS 

Topics covered:
1. Creating strings
2. Quotes and template literals
3. Escape characters
4. String length
5. Accessing characters
6. Iterating over strings
7. Changing case
8. Searching inside strings
9. Extracting substrings
10. Replacing text
11. Splitting and joining
12. Trimming spaces
*/

console.log("1. CREATING STRINGS");

// Strings can be created with "", '' or ``
let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;

console.log(str1, str2, str3);

// Template literals allow embedding variables
let language = "JavaScript";
let message = `I am learning ${language}`;
console.log(message);



console.log("\n2. TEMPLATE EXPRESSIONS");

// Expressions can be evaluated inside ${}
console.log(`2 + 2 = ${2 + 2}`);

let user = "Vignesh";
console.log(`Hello ${user}, welcome!`);



console.log("\n3. ESCAPE CHARACTERS");

// Used to include special characters in strings

let quote = "He said: \"JavaScript is awesome\"";
console.log(quote);

// newline
console.log("Line1\nLine2");

// tab
console.log("Name\tAge");



console.log("\n4. STRING LENGTH");

// length property gives number of characters
let text = "JavaScript";
console.log("Length:", text.length);



console.log("\n5. ACCESSING CHARACTERS");

// Access using index
console.log(text[0]); // J
console.log(text[4]); // S

// Using charAt
console.log(text.charAt(2));



console.log("\n6. ITERATING STRINGS");

// Strings can be looped using for...of

for (let char of "Hello") {
  console.log(char);
}



console.log("\n7. CHANGING CASE");

let word = "JavaScript";

console.log(word.toUpperCase());
console.log(word.toLowerCase());



console.log("\n8. SEARCHING STRINGS");

let sentence = "I love JavaScript programming";

// indexOf → first occurrence
console.log(sentence.indexOf("JavaScript"));

// includes → true/false
console.log(sentence.includes("love"));

// startsWith
console.log(sentence.startsWith("I"));

// endsWith
console.log(sentence.endsWith("programming"));



console.log("\n9. EXTRACTING PARTS");

let sample = "JavaScript";

// slice(start, end)
console.log(sample.slice(0,4));

// substring(start, end)
console.log(sample.substring(4,10));

// substr(start, length)
console.log(sample.substr(4,6));



console.log("\n10. REPLACING TEXT");

let text2 = "I like Java";

console.log(text2.replace("Java","JavaScript"));

// replace all occurrences
let text3 = "JS is cool. JS is powerful";
console.log(text3.replaceAll("JS","JavaScript"));



console.log("\n11. SPLIT AND JOIN");

// split converts string → array
let names = "Vignesh,Arun,Ravi";

let arr = names.split(",");
console.log(arr);

// join converts array → string
console.log(arr.join(" | "));



console.log("\n12. TRIMMING SPACES");

let userInput = "   hello world   ";

console.log(userInput.trim());
console.log(userInput.trimStart());
console.log(userInput.trimEnd());



console.log("\n13. STRING COMPARISON");

// Strings are compared lexicographically
console.log("a" > "Z"); // true because lowercase > uppercase

// localeCompare gives proper comparison
console.log("a".localeCompare("b"));



console.log("\nEND OF STRING DEMO");