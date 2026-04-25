/*
  CLASSES + OOP IN TYPESCRIPT
  Safe, scoped version
*/

export {}; // prevents global conflicts

///////////////////////////////
// PART 1: BASIC CLASS
///////////////////////////////

class UserClass {
  public userName: string;
  private userAge: number;

  constructor(userName: string, userAge: number) {
    this.userName = userName;
    this.userAge = userAge;
  }

  greet(): void {
    console.log(`Hello, ${this.userName}`);
  }

  getAge(): number {
    return this.userAge;
  }
}

const userObjClass = new UserClass("Vignesh", 22);
userObjClass.greet();
console.log("Age:", userObjClass.getAge());

///////////////////////////////
// PART 2: INHERITANCE
///////////////////////////////

class AdminClass extends UserClass {
  private role: string;

  constructor(userName: string, userAge: number, role: string) {
    super(userName, userAge);
    this.role = role;
  }

  showRole(): void {
    console.log("Role:", this.role);
  }
}

const adminObj = new AdminClass("AdminUser", 30, "SuperAdmin");
adminObj.greet();
adminObj.showRole();

///////////////////////////////
// PART 3: GETTERS & SETTERS
///////////////////////////////

class ProductClass {
  private _price: number;

  constructor(price: number) {
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    }
  }
}

const productObj = new ProductClass(1000);
console.log(productObj.price);

productObj.price = 2000;
console.log(productObj.price);

///////////////////////////////
// PART 4: STATIC MEMBERS
///////////////////////////////

class CounterClass {
  static count: number = 0;

  constructor() {
    CounterClass.count++;
  }
}

new CounterClass();
new CounterClass();

console.log("Count:", CounterClass.count);

///////////////////////////////
// PART 5: ABSTRACT CLASS
///////////////////////////////

abstract class ShapeClass {
  abstract getArea(): number;

  describe(): void {
    console.log("This is a shape");
  }
}

class CircleClass extends ShapeClass {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circleObj = new CircleClass(5);
console.log("Area:", circleObj.getArea());
circleObj.describe();

///////////////////////////////
// PART 6: INTERFACE IMPLEMENTATION
///////////////////////////////

interface LoggerInterface {
  log(message: string): void;
}

class ConsoleLogger implements LoggerInterface {
  log(message: string): void {
    console.log("Log:", message);
  }
}

const loggerObj = new ConsoleLogger();
loggerObj.log("App started");

///////////////////////////////
// PART 7: POLYMORPHISM
///////////////////////////////

class AnimalBase {
  speak(): void {
    console.log("Animal sound");
  }
}

class DogDerived extends AnimalBase {
  speak(): void {
    console.log("Bark");
  }
}

class CatDerived extends AnimalBase {
  speak(): void {
    console.log("Meow");
  }
}

function makeSound(animal: AnimalBase): void {
  animal.speak();
}

makeSound(new DogDerived());
makeSound(new CatDerived());