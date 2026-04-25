/*
  OBJECT TYPES + INTERFACE vs TYPE
  Safe, scoped version
*/

export {}; // avoids global conflicts

///////////////////////////////
// PART 1: OBJECT TYPES
///////////////////////////////

// 1. BASIC OBJECT TYPE

let userObj1: { userName: string; userAge: number } = {
  userName: "John",
  userAge: 25
};

console.log(userObj1);

// 2. OPTIONAL PROPERTY

type UserOptionalType = {
  userName: string;
  userAge?: number;
};

let userObj2: UserOptionalType = {
  userName: "Alice"
};

console.log(userObj2);

// 3. READONLY PROPERTY

type UserReadonlyType = {
  readonly userId: number;
  userName: string;
};

let userObj3: UserReadonlyType = {
  userId: 1,
  userName: "Bob"
};

// userObj3.userId = 2; ❌ Error

console.log(userObj3);

// 4. NESTED OBJECT

type UserNestedType = {
  userName: string;
  address: {
    cityName: string;
    pinCode: number;
  };
};

let userObj4: UserNestedType = {
  userName: "David",
  address: {
    cityName: "Chennai",
    pinCode: 600001
  }
};

console.log(userObj4);

// 5. INDEX SIGNATURE

type DictionaryType = {
  [key: string]: string;
};

let dictObj: DictionaryType = {
  key1: "Value1",
  key2: "Value2"
};

console.log(dictObj);

// 6. OBJECT WITH FUNCTION

type UserWithFunctionType = {
  userName: string;
  greet: () => void;
};

let userObj5: UserWithFunctionType = {
  userName: "Eve",
  greet: () => console.log("Hello Eve")
};

userObj5.greet();

///////////////////////////////
// PART 2: INTERFACES
///////////////////////////////

// 7. BASIC INTERFACE

interface IUserBasic {
  userName: string;
  userAge: number;
}

let userObj6: IUserBasic = {
  userName: "Frank",
  userAge: 30
};

console.log(userObj6);

// 8. EXTENDING INTERFACE

interface IPersonBase {
  personName: string;
}

interface IEmployee extends IPersonBase {
  salary: number;
}

let employeeObj: IEmployee = {
  personName: "George",
  salary: 50000
};

console.log(employeeObj);

// 9. INTERFACE WITH FUNCTION

interface ILogger {
  log(message: string): void;
}

let loggerObj: ILogger = {
  log: (msg) => console.log("Log:", msg)
};

loggerObj.log("Test message");

///////////////////////////////
// PART 3: TYPE vs INTERFACE
///////////////////////////////

// TYPE with UNION

type StatusType = "SUCCESS" | "ERROR";

let statusValue: StatusType = "SUCCESS";
console.log(statusValue);

// TYPE with INTERSECTION

type NamePart = { name: string };
type AgePart = { age: number };

type PersonCombined = NamePart & AgePart;

let personObj: PersonCombined = {
  name: "Henry",
  age: 40
};

console.log(personObj);

// REAL-TIME EXAMPLE

interface IApiUser {
  id: number;
  username: string;
}

type ApiResponseType = {
  status: number;
  data: IApiUser;
};

let apiResponseObj: ApiResponseType = {
  status: 200,
  data: {
    id: 1,
    username: "vignesh"
  }
};

console.log(apiResponseObj);