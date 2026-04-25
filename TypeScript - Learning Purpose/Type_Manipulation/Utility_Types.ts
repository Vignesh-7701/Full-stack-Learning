/*
  UTILITY TYPES (Partial, Required, Pick, Omit, Record)
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// BASE TYPE
///////////////////////////////

type UserBaseUT = {
  id: number;
  userName: string;
  userEmail: string;
  isActive: boolean;
};

///////////////////////////////
// 1. PARTIAL
///////////////////////////////

type PartialUserUT = Partial<UserBaseUT>;

let partialUserObj: PartialUserUT = {
  userName: "Vignesh"
};

console.log("Partial:", partialUserObj);

///////////////////////////////
// 2. REQUIRED
///////////////////////////////

type OptionalUserUT = {
  userName?: string;
  userEmail?: string;
};

type RequiredUserUT = Required<OptionalUserUT>;

let requiredUserObj: RequiredUserUT = {
  userName: "John",
  userEmail: "john@mail.com"
};

console.log("Required:", requiredUserObj);

///////////////////////////////
// 3. PICK
///////////////////////////////

type UserPreviewUT = Pick<UserBaseUT, "userName" | "userEmail">;

let userPreviewObj: UserPreviewUT = {
  userName: "Alice",
  userEmail: "alice@mail.com"
};

console.log("Pick:", userPreviewObj);

///////////////////////////////
// 4. OMIT
///////////////////////////////

type UserWithoutEmailUT = Omit<UserBaseUT, "userEmail">;

let userWithoutEmailObj: UserWithoutEmailUT = {
  id: 1,
  userName: "Bob",
  isActive: true
};

console.log("Omit:", userWithoutEmailObj);

///////////////////////////////
// 5. RECORD
///////////////////////////////

type RoleKeysUT = "admin" | "user" | "guest";

type RolePermissionsUT = Record<RoleKeysUT, boolean>;

let rolePermissionObj: RolePermissionsUT = {
  admin: true,
  user: true,
  guest: false
};

console.log("Record:", rolePermissionObj);

///////////////////////////////
// REAL-TIME EXAMPLES
///////////////////////////////

// API UPDATE (Partial)

function updateUserFnUT(update: Partial<UserBaseUT>) {
  console.log("Updating:", update);
}

updateUserFnUT({ userEmail: "new@mail.com" });

// API RESPONSE FILTER (Pick)

function getUserPreviewFnUT(user: UserBaseUT): UserPreviewUT {
  return {
    userName: user.userName,
    userEmail: user.userEmail
  };
}

console.log(
  getUserPreviewFnUT({
    id: 1,
    userName: "Vignesh",
    userEmail: "v@mail.com",
    isActive: true
  })
);

// CONFIG MAP (Record)

type FeatureFlagsUT = "darkMode" | "betaAccess";

let featureConfigObj: Record<FeatureFlagsUT, boolean> = {
  darkMode: true,
  betaAccess: false
};

console.log("Feature Config:", featureConfigObj);