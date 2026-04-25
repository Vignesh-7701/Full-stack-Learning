/*
  KEYOF + TYPEOF + INDEXED ACCESS TYPES
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: KEYOF
///////////////////////////////

type UserTypeKeyof = {
  userName: string;
  userAge: number;
};

// Extract keys
type UserKeysType = keyof UserTypeKeyof;

let keyVar1: UserKeysType;

keyVar1 = "userName";
keyVar1 = "userAge";
// keyVar1 = "invalid"; ❌ Error

console.log("Key:", keyVar1);

///////////////////////////////
// PART 2: GENERIC WITH KEYOF
///////////////////////////////

function getValueByKeyFn<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

let userObjKeyof = {
  userName: "Vignesh",
  userAge: 22
};

console.log(getValueByKeyFn(userObjKeyof, "userName"));
// console.log(getValueByKeyFn(userObjKeyof, "invalid")); ❌ Error

///////////////////////////////
// PART 3: TYPEOF
///////////////////////////////

const productObj = {
  productName: "Laptop",
  price: 50000
};

// Extract type from variable
type ProductType = typeof productObj;

let productVar: ProductType = {
  productName: "Phone",
  price: 20000
};

console.log(productVar);

///////////////////////////////
// PART 4: INDEXED ACCESS TYPES
///////////////////////////////

type UserTypeIndexed = {
  userName: string;
  userAge: number;
};

// Access single property type
type NameTypeIndexed = UserTypeIndexed["userName"];

// Access multiple properties
type MultiTypeIndexed = UserTypeIndexed["userName" | "userAge"];

// Access all values
type AllValuesIndexed = UserTypeIndexed[keyof UserTypeIndexed];

let nameVar: NameTypeIndexed = "Alice";
let multiVar: MultiTypeIndexed = 30;

console.log(nameVar, multiVar);

///////////////////////////////
// PART 5: ARRAY INDEXED ACCESS
///////////////////////////////

type NumberArrayType = number[];

type ElementType = NumberArrayType[number];

let elementVar: ElementType = 100;

console.log("Element:", elementVar);

///////////////////////////////
// PART 6: COMBINED (KEYOF + TYPEOF)
///////////////////////////////

const settingsObj = {
  theme: "dark",
  fontSize: 14
};

type SettingsKeysType = keyof typeof settingsObj;

let settingKeyVar: SettingsKeysType;

settingKeyVar = "theme";
settingKeyVar = "fontSize";

console.log("Setting Key:", settingKeyVar);

///////////////////////////////
// REAL-TIME EXAMPLE
///////////////////////////////

type ApiUserTypeKA = {
  id: number;
  username: string;
  isActive: boolean;
};

function getApiValueFn<K extends keyof ApiUserTypeKA>(
  user: ApiUserTypeKA,
  key: K
): ApiUserTypeKA[K] {
  return user[key];
}

let apiUserObjKA: ApiUserTypeKA = {
  id: 1,
  username: "vignesh",
  isActive: true
};

console.log(getApiValueFn(apiUserObjKA, "username"));