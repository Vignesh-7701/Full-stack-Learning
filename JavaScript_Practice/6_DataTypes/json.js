/*
JSON METHODS

JSON = JavaScript Object Notation

JSON is a text format used to store and transfer data.
Commonly used in APIs, servers, databases, etc.

Main methods:
JSON.stringify() → object → JSON string
JSON.parse() → JSON string → object
*/




//1. BASIC JSON.STRINGIFY

let userObj = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null
};

let jsonString = JSON.stringify(userObj);

console.log("JSON string:", jsonString);
console.log("Type:", typeof jsonString); // string



//2. JSON.STRINGIFY WITH PRIMITIVES

console.log(JSON.stringify(1));
console.log(JSON.stringify("hello"));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1,2,3]));



//3. JSON FORMAT DIFFERENCE FROM OBJECT

/*
JSON rules:

1. Strings must use DOUBLE QUOTES
2. Property names must also use DOUBLE QUOTES
3. Only data allowed (no functions)

Example JSON:

{
  "name": "John",
  "age": 30
}
*/



//4. PROPERTIES IGNORED BY JSON.STRINGIFY

let ignoreExample = {
  name: "John",
  sayHi() {
    console.log("hello");
  },
  something: undefined,
  id: Symbol("id")
};

let ignoredResult = JSON.stringify(ignoreExample);

console.log("Ignored properties result:", ignoredResult);

// functions, symbols, undefined are ignored



// 5. NESTED OBJECT STRINGIFY

let meetupObj = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["John","Alice"]
  }
};

let meetupJSON = JSON.stringify(meetupObj);

console.log("Nested JSON:", meetupJSON);



//6. CIRCULAR REFERENCE ERROR

/*
JSON.stringify cannot handle circular references
*/

let roomObj = { number: 23 };

let meetingObj = {
  title: "Meeting"
};

meetingObj.place = roomObj;

// circular reference
roomObj.occupiedBy = meetingObj;

/*
JSON.stringify(meetingObj);

Would throw:
Error: Converting circular structure to JSON
*/



//7. JSON.STRINGIFY SYNTAX

/*
JSON.stringify(value, replacer, space)

value → object/value to convert
replacer → filter or transform properties
space → formatting (indentation)
*/



//8. REPLACER ARRAY

let studentObj = {
  name: "Alice",
  age: 21,
  city: "Paris"
};

let filteredJSON = JSON.stringify(studentObj, ["name","age"]);

console.log("Filtered JSON:", filteredJSON);



//9. REPLACER FUNCTION

let replacerExample = {
  name: "Bob",
  age: 25,
  password: "secret"
};

let safeJSON = JSON.stringify(replacerExample, function(key, value) {

  if (key === "password") {
    return undefined;
  }

  return value;

});

console.log("Password removed:", safeJSON);



//10. PRETTY PRINTING (SPACE PARAMETER)

let prettyObj = {
  name: "John",
  age: 25,
  role: {
    admin: false,
    editor: true
  }
};

let prettyJSON = JSON.stringify(prettyObj, null, 2);

console.log("Pretty JSON:");
console.log(prettyJSON);



//11. CUSTOM TOJSON METHOD

/*
If object has toJSON method,
JSON.stringify automatically calls it
*/

let customObj = {

  value: 100,

  toJSON() {
    return this.value;
  }

};

console.log(JSON.stringify(customObj));



//12. JSON.PARSE

let jsonData = '{"name":"John","age":35,"isAdmin":false}';

let parsedObj = JSON.parse(jsonData);

console.log(parsedObj);
console.log(parsedObj.name);



//13. PARSE ARRAY

let numbersJSON = "[0,1,2,3]";

let numbersArr = JSON.parse(numbersJSON);

console.log(numbersArr[1]);



//14. PARSE NESTED OBJECT

let complexJSON = `
{
  "name":"Alice",
  "age":28,
  "skills":["JS","React","Node"]
}
`;

let complexObj = JSON.parse(complexJSON);

console.log(complexObj.skills[1]);



//15. REVIVER FUNCTION

/*
JSON.parse(str, reviver)

reviver transforms values while parsing
*/

let eventJSON = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let eventObj = JSON.parse(eventJSON, function(key, value) {

  if (key === "date") {
    return new Date(value);
  }

  return value;

});

console.log(eventObj.date.getDate());



//16. CONVERT OBJECT → JSON → OBJECT

let originalUser = {
  name: "John Smith",
  age: 35
};

let copyUser = JSON.parse(JSON.stringify(originalUser));

console.log(copyUser);



//COMMON JSON MISTAKES

/*
Invalid JSON examples:

{
  name: "John"          ❌ key must be quoted
  "surname": 'Smith'    ❌ single quotes not allowed
  "age": undefined      ❌ undefined not allowed
  "date": new Date()    ❌ functions not allowed
}

JSON supports only:

Objects
Arrays
Strings
Numbers
Boolean
Null
*/



/**********************************************************************
REVISION SUMMARY
**********************************************************************/

/*
JSON.stringify(object)
→ convert object to JSON string

JSON.parse(jsonString)
→ convert JSON string to object

JSON.stringify(value, replacer, space)

replacer → filter properties
space → formatting indentation

JSON limitations:
no functions
no undefined
no symbols
no circular references
*/