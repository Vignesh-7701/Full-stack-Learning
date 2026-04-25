/*
  ERROR HANDLING + BEST PRACTICES
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: AVOID ANY vs UNKNOWN
///////////////////////////////

// BAD (any)
let unsafeValue: any = 10;
// unsafeValue.toUpperCase(); ❌ runtime error

// GOOD (unknown)
let safeValue: unknown = "Hello";

if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase());
}

///////////////////////////////
// PART 2: TYPE GUARDS
///////////////////////////////

// Custom type guard
function isStringFn(val: unknown): val is string {
  return typeof val === "string";
}

function processValueFn(input: unknown): void {
  if (isStringFn(input)) {
    console.log("String:", input.toUpperCase());
  } else {
    console.log("Not a string");
  }
}

processValueFn("TypeScript");
processValueFn(100);

///////////////////////////////
// PART 3: ERROR HANDLING
///////////////////////////////

function riskyOperationFn(): void {
  throw new Error("Something went wrong");
}

function handleErrorFn(): void {
  try {
    riskyOperationFn();
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error Message:", error.message);
    } else {
      console.log("Unknown error");
    }
  }
}

handleErrorFn();

///////////////////////////////
// PART 4: CLEAN TYPE DESIGN
///////////////////////////////

type ApiSuccessBT = {
  status: "success";
  data: string;
};

type ApiErrorBT = {
  status: "error";
  message: string;
};

type ApiResponseBT = ApiSuccessBT | ApiErrorBT;

function handleApiResponseFn(response: ApiResponseBT): void {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.message);
  }
}

handleApiResponseFn({ status: "success", data: "Loaded" });
handleApiResponseFn({ status: "error", message: "Failed" });

///////////////////////////////
// PART 5: SAFE UNKNOWN HANDLING
///////////////////////////////

function parseJsonFn(input: string): unknown {
  return JSON.parse(input);
}

function processJsonFn(): void {
  const rawData = '{"name":"Vignesh"}';

  const parsedData: unknown = parseJsonFn(rawData);

  if (
    typeof parsedData === "object" &&
    parsedData !== null &&
    "name" in parsedData
  ) {
    const nameValue = (parsedData as { name: string }).name;
    console.log("Name:", nameValue);
  }
}

processJsonFn();