"use strict";
/*
  CLASSES + OOP IN TYPESCRIPT
  Safe, scoped version
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
// PART 1: BASIC CLASS
///////////////////////////////
var UserClass = /** @class */ (function () {
    function UserClass(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    UserClass.prototype.greet = function () {
        console.log("Hello, ".concat(this.userName));
    };
    UserClass.prototype.getAge = function () {
        return this.userAge;
    };
    return UserClass;
}());
var userObjClass = new UserClass("Vignesh", 22);
userObjClass.greet();
console.log("Age:", userObjClass.getAge());
///////////////////////////////
// PART 2: INHERITANCE
///////////////////////////////
var AdminClass = /** @class */ (function (_super) {
    __extends(AdminClass, _super);
    function AdminClass(userName, userAge, role) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.role = role;
        return _this;
    }
    AdminClass.prototype.showRole = function () {
        console.log("Role:", this.role);
    };
    return AdminClass;
}(UserClass));
var adminObj = new AdminClass("AdminUser", 30, "SuperAdmin");
adminObj.greet();
adminObj.showRole();
///////////////////////////////
// PART 3: GETTERS & SETTERS
///////////////////////////////
var ProductClass = /** @class */ (function () {
    function ProductClass(price) {
        this._price = price;
    }
    Object.defineProperty(ProductClass.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value > 0) {
                this._price = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return ProductClass;
}());
var productObj = new ProductClass(1000);
console.log(productObj.price);
productObj.price = 2000;
console.log(productObj.price);
///////////////////////////////
// PART 4: STATIC MEMBERS
///////////////////////////////
var CounterClass = /** @class */ (function () {
    function CounterClass() {
        CounterClass.count++;
    }
    CounterClass.count = 0;
    return CounterClass;
}());
new CounterClass();
new CounterClass();
console.log("Count:", CounterClass.count);
///////////////////////////////
// PART 5: ABSTRACT CLASS
///////////////////////////////
var ShapeClass = /** @class */ (function () {
    function ShapeClass() {
    }
    ShapeClass.prototype.describe = function () {
        console.log("This is a shape");
    };
    return ShapeClass;
}());
var CircleClass = /** @class */ (function (_super) {
    __extends(CircleClass, _super);
    function CircleClass(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    CircleClass.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return CircleClass;
}(ShapeClass));
var circleObj = new CircleClass(5);
console.log("Area:", circleObj.getArea());
circleObj.describe();
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log("Log:", message);
    };
    return ConsoleLogger;
}());
var loggerObj = new ConsoleLogger();
loggerObj.log("App started");
///////////////////////////////
// PART 7: POLYMORPHISM
///////////////////////////////
var AnimalBase = /** @class */ (function () {
    function AnimalBase() {
    }
    AnimalBase.prototype.speak = function () {
        console.log("Animal sound");
    };
    return AnimalBase;
}());
var DogDerived = /** @class */ (function (_super) {
    __extends(DogDerived, _super);
    function DogDerived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogDerived.prototype.speak = function () {
        console.log("Bark");
    };
    return DogDerived;
}(AnimalBase));
var CatDerived = /** @class */ (function (_super) {
    __extends(CatDerived, _super);
    function CatDerived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CatDerived.prototype.speak = function () {
        console.log("Meow");
    };
    return CatDerived;
}(AnimalBase));
function makeSound(animal) {
    animal.speak();
}
makeSound(new DogDerived());
makeSound(new CatDerived());
