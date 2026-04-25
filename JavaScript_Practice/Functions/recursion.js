 //RECURSION 

/*
Recursion = a function calling itself

Used when:
- Problem can be broken into smaller same problems
- Tree / nested structure
- Divide & conquer

IMPORTANT:
Every recursion must have:
1. Base case (stop condition)
2. Recursive case (call itself)

Otherwise → infinite recursion → stack overflow
*/



//1. SIMPLE EXAMPLE (POWER FUNCTION)
// Iterative (loop)
function powLoop(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// Recursive
function powRec(x, n) {
  // base case
  if (n === 1) return x;

  // recursive case
  return x * powRec(x, n - 1);
}

console.log(powRec(2, 4)); // 16

/*
FLOW:
pow(2,4)
= 2 * pow(2,3)
= 2 * 2 * pow(2,2)
= 2 * 2 * 2 * pow(2,1)
= 2 * 2 * 2 * 2

*/


//2. EXECUTION CONTEXT + CALL STACK

/*
Each function call creates an "execution context"

When recursion happens:
- current function pauses
- pushed into CALL STACK
- new function runs
- after finish → stack pops → resume previous

STACK (example pow(2,3)):
top → pow(2,1)
       pow(2,2)
       pow(2,3)

Depth = number of nested calls
*/


//3. RECURSION DEPTH LIMIT

/*
JS engines have limit (~10k calls usually)

Too deep recursion →
maximum call stack exceeded

*/


//4. SUM TO N (3 METHODS)

// recursion
function sumToRec(n) {
  if (n === 1) return 1;
  return n + sumToRec(n - 1);
}

// loop
function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// formula (best)
function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToRec(5)); // 15

/*
Formula is fastest (constant time)
Recursion is slower (stack overhead)
*/

//5. FIBONACCI (IMPORTANT)

function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // 8

/*
Problem:
- very slow for large n
*/


// optimized (loop)
function fibFast(n) {
  let a = 1,
    b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fibFast(10)); // 55


//6. IMPORTANT NOTES

/*
✔ Recursion = elegant & short code
✔ Good for trees, nested data
✔ Always define base case

❌ Uses more memory (stack)
❌ Can cause stack overflow
❌ Sometimes slower than loops

✔ Any recursion can be rewritten as loop
*/


//7. QUICK SUMMARY (REVISION)

/*
- recursion = function calling itself
- base case → stop
- recursive case → reduce problem
- uses call stack
- depth = number of calls
- good for trees & nested objects
- avoid deep recursion (limit issue)
*/