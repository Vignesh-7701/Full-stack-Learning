/*
  FUNCTION TYPES + OPTIONAL & DEFAULT PARAMS
  Safe, scoped, production-ready
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: FUNCTION TYPES
///////////////////////////////

// 1. BASIC FUNCTION

function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

console.log("Add:", addNumbers(5, 10));

// 2. FUNCTION TYPE VARIABLE

type AddFunctionType = (a: number, b: number) => number;

let addFn: AddFunctionType = (x, y) => x + y;

console.log("AddFn:", addFn(3, 7));

// 3. VOID FUNCTION

function logMessageFn(message: string): void {
  console.log("Log:", message);
}

logMessageFn("Hello TS");

// 4. NEVER FUNCTION

function throwErrorFn(errorMsg: string): never {
  throw new Error(errorMsg);
}

// Uncomment to test
// throwErrorFn("Something went wrong");

// 5. FUNCTION WITH OBJECT PARAM

type UserTypeFn = {
  userName: string;
  userAge: number;
};

function printUserFn(user: UserTypeFn): void {
  console.log(`User: ${user.userName}, Age: ${user.userAge}`);
}

printUserFn({ userName: "John", userAge: 25 });

///////////////////////////////
// PART 2: OPTIONAL PARAMETERS
///////////////////////////////

function greetUserFn(userName?: string): void {
  if (userName) {
    console.log("Hello " + userName);
  } else {
    console.log("Hello Guest");
  }
}

greetUserFn("Vignesh");
greetUserFn();

///////////////////////////////
// PART 3: DEFAULT PARAMETERS
///////////////////////////////

function greetWithDefaultFn(userName: string = "Guest"): void {
  console.log("Hi " + userName);
}

greetWithDefaultFn("John");
greetWithDefaultFn();

///////////////////////////////
// COMBINED EXAMPLE
///////////////////////////////

function createUserFn(
  userName: string,
  userAge: number = 18,
  isActive?: boolean
): void {
  console.log(
    `Name: ${userName}, Age: ${userAge}, Active: ${isActive ?? false}`
  );
}

createUserFn("Alice", 25, true);
createUserFn("Bob");
createUserFn("Charlie", 30);

///////////////////////////////
// REAL-TIME FUNCTION EXAMPLE
///////////////////////////////

type ApiResponseFn = {
  status: number;
  message: string;
};

function handleApiResponseFn(
  response: ApiResponseFn,
  showLog: boolean = true
): void {
  if (showLog) {
    console.log(`Status: ${response.status}, Message: ${response.message}`);
  }
}

handleApiResponseFn({ status: 200, message: "Success" });
handleApiResponseFn({ status: 500, message: "Error" }, false);