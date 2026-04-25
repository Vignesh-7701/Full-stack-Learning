/*
  READONLY & OPTIONAL PROPERTIES
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: OPTIONAL PROPERTIES
///////////////////////////////

// 1. BASIC OPTIONAL

type UserOptionalProps = {
  userName: string;
  userAge?: number;
};

let userOpt1: UserOptionalProps = {
  userName: "John"
};

let userOpt2: UserOptionalProps = {
  userName: "Alice",
  userAge: 25
};

console.log(userOpt1);
console.log(userOpt2);

// 2. HANDLING OPTIONAL

function printUserAgeFn(user: UserOptionalProps): void {
  if (user.userAge !== undefined) {
    console.log("Age:", user.userAge);
  } else {
    console.log("Age not provided");
  }
}

printUserAgeFn(userOpt1);
printUserAgeFn(userOpt2);

// 3. OPTIONAL CHAINING

type AddressType = {
  cityName?: string;
};

type UserWithAddress = {
  userName: string;
  address?: AddressType;
};

let userWithAddr: UserWithAddress = {
  userName: "David"
};

console.log(userWithAddr.address?.cityName ?? "City not available");

///////////////////////////////
// PART 2: READONLY PROPERTIES
///////////////////////////////

// 4. BASIC READONLY

type UserReadonlyProps = {
  readonly userId: number;
  userName: string;
};

let userRead1: UserReadonlyProps = {
  userId: 1,
  userName: "Eve"
};

// userRead1.userId = 2; ❌ Error

console.log(userRead1);

// 5. READONLY ARRAY

let readonlyArr: readonly number[] = [1, 2, 3];

// readonlyArr.push(4); ❌ Error

console.log(readonlyArr);

// Alternative
let readonlyArr2: ReadonlyArray<string> = ["A", "B"];

console.log(readonlyArr2);

///////////////////////////////
// PART 3: COMBINED USAGE
///////////////////////////////

type UserSafeModel = {
  readonly id: number;
  userName: string;
  userEmail?: string;
};

let safeUserObj: UserSafeModel = {
  id: 101,
  userName: "Vignesh"
};

console.log(safeUserObj);

///////////////////////////////
// REAL-TIME EXAMPLE
///////////////////////////////

type ApiUserModel = {
  readonly id: number;
  username: string;
  email?: string;
};

function printApiUserFn(user: ApiUserModel): void {
  console.log(
    `ID: ${user.id}, Name: ${user.username}, Email: ${
      user.email ?? "Not provided"
    }`
  );
}

printApiUserFn({ id: 1, username: "user1" });
printApiUserFn({ id: 2, username: "user2", email: "user2@mail.com" });