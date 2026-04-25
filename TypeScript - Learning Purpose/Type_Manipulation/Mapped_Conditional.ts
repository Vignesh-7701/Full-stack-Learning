/*
  MAPPED TYPES + CONDITIONAL TYPES
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: MAPPED TYPES
///////////////////////////////

type BaseUserMT = {
  userName: string;
  userAge: number;
};

// 1. MAKE ALL OPTIONAL

type OptionalUserMT = {
  [K in keyof BaseUserMT]?: BaseUserMT[K];
};

let optionalUserObj: OptionalUserMT = {
  userName: "Vignesh"
};

console.log(optionalUserObj);

// 2. MAKE ALL READONLY

type ReadonlyUserMT = {
  readonly [K in keyof BaseUserMT]: BaseUserMT[K];
};

let readonlyUserObj: ReadonlyUserMT = {
  userName: "John",
  userAge: 25
};

// readonlyUserObj.userAge = 30; ❌ Error

console.log(readonlyUserObj);

// 3. CUSTOM NULLABLE TYPE

type NullableMT<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUserMT = NullableMT<BaseUserMT>;

let nullableUserObj: NullableUserMT = {
  userName: null,
  userAge: 30
};

console.log(nullableUserObj);

///////////////////////////////
// PART 2: CONDITIONAL TYPES
///////////////////////////////

// 4. BASIC CONDITIONAL

type IsStringCT<T> = T extends string ? true : false;

type test1 = IsStringCT<string>; // true
type test2 = IsStringCT<number>; // false

// 5. CONDITIONAL WITH GENERIC

type LabelCT<T> = T extends number ? "NUMBER" : "OTHER";

type label1 = LabelCT<number>;
type label2 = LabelCT<string>;

///////////////////////////////
// 6. INFER (ADVANCED)
///////////////////////////////

type GetReturnTypeCT<T> =
  T extends (...args: any[]) => infer R ? R : never;

function sampleFnCT(): number {
  return 100;
}

type ReturnTypeResult = GetReturnTypeCT<typeof sampleFnCT>;

///////////////////////////////
// 7. DISTRIBUTIVE BEHAVIOR
///////////////////////////////

type CheckTypeCT<T> = T extends string ? "STRING" : "NOT_STRING";

type distributedResult = CheckTypeCT<string | number>;
// "STRING" | "NOT_STRING"

///////////////////////////////
// PART 3: COMBINED USAGE
///////////////////////////////

// 8. FILTER STRING PROPERTIES

type FilterStringPropsMT<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
};

type MixedType = {
  name: string;
  age: number;
  city: string;
};

type OnlyStringProps = FilterStringPropsMT<MixedType>;

let stringOnlyObj: OnlyStringProps = {
  name: "Alice",
  age: undefined as never,
  city: "Chennai"
};

console.log(stringOnlyObj);

///////////////////////////////
// 9. REAL-TIME EXAMPLE
///////////////////////////////

type ApiDataMT = {
  id: number;
  username: string;
};

// Partial update type (like PATCH API)

type PartialUpdateMT<T> = {
  [K in keyof T]?: T[K];
};

let updateObj: PartialUpdateMT<ApiDataMT> = {
  username: "newName"
};

console.log(updateObj);