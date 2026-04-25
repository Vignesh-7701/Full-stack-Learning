/*
  TYPE NARROWING (typeof, in, instanceof)
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: TYPEOF NARROWING
///////////////////////////////

function handlePrimitiveFn(inputValue: string | number): void {
  if (typeof inputValue === "string") {
    console.log("String:", inputValue.toUpperCase());
  } else {
    console.log("Number:", inputValue + 10);
  }
}

handlePrimitiveFn("hello");
handlePrimitiveFn(20);

///////////////////////////////
// PART 2: IN OPERATOR
///////////////////////////////

type AdminTypeNarrow = {
  adminName: string;
  role: string;
};

type UserTypeNarrow = {
  userName: string;
  age: number;
};

function handleUserTypeFn(inputObj: AdminTypeNarrow | UserTypeNarrow): void {
  if ("role" in inputObj) {
    console.log("Admin Role:", inputObj.role);
  } else {
    console.log("User Age:", inputObj.age);
  }
}

handleUserTypeFn({ adminName: "Alice", role: "Admin" });
handleUserTypeFn({ userName: "Bob", age: 25 });

///////////////////////////////
// PART 3: INSTANCEOF
///////////////////////////////

class DogClass {
  bark(): void {
    console.log("Bark");
  }
}

class CatClass {
  meow(): void {
    console.log("Meow");
  }
}

function handleAnimalFn(animal: DogClass | CatClass): void {
  if (animal instanceof DogClass) {
    animal.bark();
  } else {
    animal.meow();
  }
}

handleAnimalFn(new DogClass());
handleAnimalFn(new CatClass());

///////////////////////////////
// PART 4: COMBINED EXAMPLE
///////////////////////////////

type ApiSuccessType = {
  status: "success";
  data: string;
};

type ApiErrorType = {
  status: "error";
  errorMessage: string;
};

function handleApiFn(response: ApiSuccessType | ApiErrorType): void {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.errorMessage);
  }
}

handleApiFn({ status: "success", data: "Loaded" });
handleApiFn({ status: "error", errorMessage: "Failed" });

///////////////////////////////
// PART 5: UNKNOWN TYPE NARROWING
///////////////////////////////

function processUnknownFn(inputVal: unknown): void {
  if (typeof inputVal === "string") {
    console.log("String:", inputVal.toUpperCase());
  } else if (typeof inputVal === "number") {
    console.log("Number:", inputVal * 2);
  } else {
    console.log("Unknown type");
  }
}

processUnknownFn("TS");
processUnknownFn(100);
processUnknownFn(true);