/*
  ENUMS IN TYPESCRIPT
  Run:
  tsc filename.ts
  node filename.js
*/
// 1. NUMERIC ENUM
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log("Direction:", move); // 0
// 2. CUSTOM NUMERIC ENUM
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log("Status:", StatusCode.Success);
// 3. STRING ENUM (BEST PRACTICE)
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log("Role:", userRole);
// 4. USING ENUM IN FUNCTION
function checkAccess(role) {
    if (role === Role.Admin) {
        console.log("Full access granted");
    }
    else {
        console.log("Limited access");
    }
}
checkAccess(Role.Admin);
checkAccess(Role.User);
// 5. REVERSE MAPPING (ONLY NUMERIC)
var Test;
(function (Test) {
    Test[Test["A"] = 1] = "A";
    Test[Test["B"] = 2] = "B";
})(Test || (Test = {}));
console.log(Test[1]); // "A"
console.log(Test["A"]); // 1
// 6. REAL-TIME EXAMPLE (ORDER STATUS)
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
function trackOrder(status) {
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
var dir = 0 /* FastDirection.Up */;
console.log("Fast Direction:", dir);
var newUserRole = "ADMIN";
function checkRole(role) {
    if (role === "ADMIN") {
        console.log("Admin access");
    }
    else {
        console.log("User access");
    }
}
checkRole(newUserRole);
