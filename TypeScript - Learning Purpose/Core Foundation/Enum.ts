/*
  ENUMS IN TYPESCRIPT
  Run:
  tsc filename.ts
  node filename.js
*/

// 1. NUMERIC ENUM

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log("Direction:", move); // 0

// 2. CUSTOM NUMERIC ENUM

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

console.log("Status:", StatusCode.Success);

// 3. STRING ENUM (BEST PRACTICE)

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;
console.log("Role:", userRole);

// 4. USING ENUM IN FUNCTION

function checkAccess(role: Role) {
  if (role === Role.Admin) {
    console.log("Full access granted");
  } else {
    console.log("Limited access");
  }
}

checkAccess(Role.Admin);
checkAccess(Role.User);

// 5. REVERSE MAPPING (ONLY NUMERIC)

enum Test {
  A = 1,
  B = 2
}

console.log(Test[1]); // "A"
console.log(Test["A"]); // 1

// 6. REAL-TIME EXAMPLE (ORDER STATUS)

enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED"
}

function trackOrder(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Order is pending");
      break;
    case OrderStatus.Shipped:
      console.log("Order shipped");
      break;
    case OrderStatus.Delivered:
      console.log("Order delivered");
      break;
    default:
      console.log("Unknown status");
  }
}

trackOrder(OrderStatus.Pending);
trackOrder(OrderStatus.Delivered);

// 7. CONST ENUM (PERFORMANCE)

const enum FastDirection {
  Up,
  Down
}

let dir = FastDirection.Up;
console.log("Fast Direction:", dir);

// 8. UNION TYPE (MODERN ALTERNATIVE)

type UserRole = "ADMIN" | "USER" | "GUEST";

let newUserRole: UserRole = "ADMIN";

function checkRole(role: UserRole) {
  if (role === "ADMIN") {
    console.log("Admin access");
  } else {
    console.log("User access");
  }
}

checkRole(newUserRole);