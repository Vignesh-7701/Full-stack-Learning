// 1. Objects are stored by REFERENCE

let user = {
  name: "John"
};

// another variable pointing to same object
let admin = user;

// changing admin changes user also
admin.name = "Mike";

console.log(user.name); // Mike
console.log(admin.name); // Mike

// WHY?
// both variables point to the SAME object in memory 


// 2. Comparing objects

let a = {};
let b = {};

console.log(a === b); // false

// Even though they look identical,
// they are two DIFFERENT objects in memory.


// 3. Copying object manually (clone) using for..in loop

let original = {
  name: "John",
  age: 30
};

let clone = {};

// copy properties one by one
for (let key in original) {
  clone[key] = original[key];
}

clone.name = "Alex";

console.log(original.name); // John
console.log(clone.name);    // Alex

// Now they are separate objects.


// 4. Using Object.assign() for copying - this is shallow copy

let user1 = {
  name: "John",
  age: 25
};

let copy = Object.assign({}, user1);

copy.name = "David";

console.log(user1.name); // John
console.log(copy.name);  // David


// 5. Merging multiple objects

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

let userPermissions = Object.assign({}, permissions1, permissions2);

console.log(userPermissions);

// result
// {canView: true, canEdit: true}


// 6. Shallow copy problem

let user2 = {
  name: "John",
  sizes: {
    height: 180,
    width: 50
  }
};

// shallow copy
let clone2 = Object.assign({}, user2);

// modify nested object
clone2.sizes.width = 60;

console.log(user2.sizes.width); // 60
console.log(clone2.sizes.width); // 60

// PROBLEM:
// nested object is still shared.

// This is called SHALLOW COPY.
// Only first level properties are copied. (primiteves)


// 7. Spread operator (modern shallow copy)

let user3 = {
  name: "John",
  age: 30
};

let copy2 = { ...user3 };

copy2.age = 40;

console.log(user3.age); // 30
console.log(copy2.age); // 40


// 8. Deep cloning using structuredClone()

let user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

// deep copy
let deepClone = structuredClone(user4);

// change nested property
deepClone.sizes.width = 70;

console.log(user4.sizes.width); // 50
console.log(deepClone.sizes.width); // 70

// structuredClone copies ALL nested objects too.


// 9. Circular reference cloning

let obj = {};
obj.self = obj;

let clonedObj = structuredClone(obj);

console.log(clonedObj.self === clonedObj); // true

// structuredClone handles circular references.


// 10. Limitation of structuredClone

let example = {
  name: "John",
  sayHi: function() {
    console.log("Hello");
  }
};

// structuredClone(example)  ERROR
// functions cannot be cloned with structuredClone