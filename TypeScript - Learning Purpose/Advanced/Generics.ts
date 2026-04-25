/*
  GENERICS + CONSTRAINTS
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: BASIC GENERICS
///////////////////////////////

// 1. GENERIC FUNCTION

function identityFn<T>(inputVal: T): T {
  return inputVal;
}

console.log(identityFn<string>("Hello"));
console.log(identityFn<number>(100));

// Type inference
console.log(identityFn("Auto Infer"));

///////////////////////////////
// 2. GENERICS WITH ARRAYS
///////////////////////////////

function getFirstElementFn<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElementFn<number>([1, 2, 3]));
console.log(getFirstElementFn<string>(["A", "B"]));

///////////////////////////////
// 3. GENERICS WITH MULTIPLE TYPES
///////////////////////////////

function createPairFn<T, U>(val1: T, val2: U): [T, U] {
  return [val1, val2];
}

console.log(createPairFn<string, number>("Age", 25));

///////////////////////////////
// 4. GENERICS IN TYPE ALIAS
///////////////////////////////

type ApiResponseTypeGen<T> = {
  data: T;
  status: number;
};

let responseObj: ApiResponseTypeGen<string> = {
  data: "Success",
  status: 200
};

console.log(responseObj);

///////////////////////////////
// 5. GENERICS IN INTERFACE
///////////////////////////////

interface BoxGen<T> {
  value: T;
}

let box1: BoxGen<number> = { value: 10 };
let box2: BoxGen<string> = { value: "Hello" };

console.log(box1, box2);

///////////////////////////////
// PART 2: GENERIC CONSTRAINTS
///////////////////////////////

// 6. BASIC CONSTRAINT

function printLengthFn<T extends { length: number }>(item: T): void {
  console.log("Length:", item.length);
}

printLengthFn("Hello");
printLengthFn([1, 2, 3]);
// printLengthFn(100); ❌ Error

///////////////////////////////
// 7. KEYOF CONSTRAINT
///////////////////////////////

function getObjectValueFn<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

let userObjGen = {
  userName: "Vignesh",
  userAge: 22
};

console.log(getObjectValueFn(userObjGen, "userName"));
// console.log(getObjectValueFn(userObjGen, "invalid")); ❌ Error

///////////////////////////////
// 8. DEFAULT GENERIC TYPE
///////////////////////////////

type WrapperGen<T = string> = {
  value: T;
};

let wrap1: WrapperGen = { value: "Default String" };
let wrap2: WrapperGen<number> = { value: 123 };

console.log(wrap1, wrap2);

///////////////////////////////
// 9. REAL-TIME EXAMPLE
///////////////////////////////

type ApiResultGen<T> = {
  success: boolean;
  payload: T;
};

function handleApiResultFn<T>(result: ApiResultGen<T>): void {
  if (result.success) {
    console.log("Data:", result.payload);
  } else {
    console.log("Request failed");
  }
}

handleApiResultFn<string>({ success: true, payload: "Loaded" });
handleApiResultFn<number>({ success: true, payload: 42 });