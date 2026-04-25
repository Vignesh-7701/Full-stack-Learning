//DESTRUCTURING ASSIGNMENT 

//1. ARRAY DESTRUCTURING

let arr = ["John", "Smith"];

let [firstName, lastName] = arr;

console.log(firstName);
console.log(lastName);



//2. WORKS WITH ANY ITERABLE

let [charA, charB, charC] = "abc";
console.log(charA, charB, charC);

let [num1, num2, num3] = new Set([1, 2, 3]);
console.log(num1, num2, num3);


//3. IGNORING ELEMENTS

let namesArr = ["Julius", "Caesar", "Consul"];

let [personName1, , title1] = namesArr;

console.log(personName1);
console.log(title1);



//4. REST OPERATOR (...)

let dataArr = ["Julius", "Caesar", "Consul", "Roman Republic"];

let [firstPerson, secondPerson, ...remainingItems] = dataArr;

console.log(firstPerson);
console.log(secondPerson);
console.log(remainingItems);


//5. SWAPPING VARIABLES

let guestUser = "Jane";
let adminUser = "Pete";

[guestUser, adminUser] = [adminUser, guestUser];

console.log(guestUser);
console.log(adminUser);


//6. ASSIGNING TO OBJECT PROPERTIES

let userObj = {};

[userObj.name, userObj.surname] = "John Smith".split(" ");

console.log(userObj);



//7. LOOPING WITH OBJECT.ENTRIES

let personObj = {
  name: "John",
  age: 30
};

for (let [keyName, valueData] of Object.entries(personObj)) {
  console.log(keyName, valueData);
}



//8. OBJECT DESTRUCTURING

let optionsObj = {
  title: "Menu",
  width: 100,
  height: 200
};

let { title: menuTitle1, width: menuWidth, height: menuHeight } = optionsObj;

console.log(menuTitle1);
console.log(menuWidth);
console.log(menuHeight);



//9. RENAME VARIABLES

let settingsObj = {
  width: 300,
  height: 200
};

let { width: pageWidth, height: pageHeight } = settingsObj;

console.log(pageWidth);
console.log(pageHeight);



//10. DEFAULT VALUES

let configObj = {
  title: "Menu"
};

let { title: configTitle, width: defaultWidth = 100, height: defaultHeight = 200 } = configObj;

console.log(configTitle);
console.log(defaultWidth);
console.log(defaultHeight);



//11. OBJECT REST (...)

let objExample = {
  title: "Menu",
  height: 200,
  width: 100
};

let { title: objTitle, ...otherProps } = objExample;

console.log(objTitle);
console.log(otherProps);



//12. ASSIGN WITHOUT LET (IMPORTANT)

let valueX, valueY;

({ valueX, valueY } = { valueX: 10, valueY: 20 });

console.log(valueX, valueY);



//13. NESTED DESTRUCTURING

let optionsNested = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

let {
  size: { width: nestedWidth, height: nestedHeight },
  items: [foodItem1, foodItem2],
  title: nestedTitle = "Menu"
} = optionsNested;

console.log(nestedWidth);
console.log(nestedHeight);
console.log(foodItem1);
console.log(foodItem2);
console.log(nestedTitle);



//14. FUNCTION PARAMETER DESTRUCTURING

function showMenuExample({
  title = "Untitled",
  width = 200,
  height = 100,
  items = []
}) {

  console.log(title, width, height);
  console.log(items);

}

let menuOptionsExample = {
  title: "My Menu",
  items: ["Item1", "Item2"]
};

showMenuExample(menuOptionsExample);



//15. DEFAULT EMPTY OBJECT

function showMenuSafe({
  title = "Menu",
  width = 100,
  height = 200
} = {}) {

  console.log(title, width, height);

}

showMenuSafe();



//16. PRACTICE TASK

let userPractice = {
  name: "John",
  years: 30
};

let { name: practiceName, years: practiceAge, isAdmin: practiceAdmin = false } = userPractice;

console.log(practiceName);
console.log(practiceAge);
console.log(practiceAdmin);



/*
REVISION SUMMARY

ARRAY
let [a, b] = arr
let [a, , b] = arr
let [a, ...rest] = arr

OBJECT
let {prop1, prop2} = obj

RENAME
let {width: w} = obj

DEFAULT
let {width = 100} = obj

REST
let {title, ...rest} = obj

SWAP
[a, b] = [b, a]

NESTED
let {size:{width,height}} = obj

FUNCTION PARAMS
function fn({title,width}) {}
*/