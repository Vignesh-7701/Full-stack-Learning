/*
  UNION & INTERSECTION TYPES (SAFE VERSION)
  No variable conflicts
  Run:
  tsc filename.ts
  node filename.js
*/

export {}; // ensures module scope (VERY IMPORTANT)

///////////////////////////////
// PART 1: UNION TYPES
///////////////////////////////

// 1. BASIC UNION

let unionValue: string | number;

unionValue = 100;
console.log("Union number:", unionValue);

unionValue = "Hello";
console.log("Union string:", unionValue);

// 2. TYPE SAFETY (NARROWING)

let unionData: string | number = "TypeScript";

if (typeof unionData === "string") {
  console.log("Upper:", unionData.toUpperCase());
} else {
  console.log("Number:", unionData + 10);
}

// 3. UNION ARRAY

let unionArrayData: (string | number)[] = [1, "A", 2, "B"];
console.log("Mixed Array:", unionArrayData);

// 4. UNION IN FUNCTION

function printUnionId(inputId: string | number) {
  console.log("ID:", inputId);
}

printUnionId(101);
printUnionId("ABC123");

///////////////////////////////
// PART 2: INTERSECTION TYPES
///////////////////////////////

// 5. BASE TYPES

type NameType = {
  personName: string;
};

type AgeType = {
  personAge: number;
};

// 6. INTERSECTION TYPE

type PersonType = NameType & AgeType;

let personData: PersonType = {
  personName: "John",
  personAge: 30
};

console.log("Person:", personData);

// 7. INTERSECTION WITH MORE TYPES

type RoleType = {
  role: string;
};

type FullUserType = PersonType & RoleType;

let fullUserData: FullUserType = {
  personName: "Alice",
  personAge: 28,
  role: "Admin"
};

console.log("Full User:", fullUserData);

// 8. FUNCTION WITH INTERSECTION

function printFullUser(user: PersonType & RoleType) {
  console.log(
    `Name: ${user.personName}, Age: ${user.personAge}, Role: ${user.role}`
  );
}

printFullUser(fullUserData);

// 9. REAL-TIME EXAMPLE

type ApiUserBase = {
  id: string | number;
};

type ApiUserDetails = {
  username: string;
  isActive: boolean;
};

type ApiUserComplete = ApiUserBase & ApiUserDetails;

let apiUserData: ApiUserComplete = {
  id: 1,
  username: "vignesh",
  isActive: true
};

console.log("API User:", apiUserData);