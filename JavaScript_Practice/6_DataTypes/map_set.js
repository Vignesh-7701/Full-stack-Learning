/*
JAVASCRIPT MAP & SET 
*/


console.log("\n---- 1. Creating a Map ----\n");

const map = new Map();

map.set("name", "John");
map.set("age", 25);

console.log(map);


/*
Map stores key-value pairs.
Keys can be any type.
*/


console.log("\n---- 2. Getting Value from Map ----\n");

console.log(map.get("name"));
console.log(map.get("age"));


console.log("\n---- 3. Checking if Key Exists ----\n");

console.log(map.has("name"));
console.log(map.has("city"));


console.log("\n---- 4. Map Size ----\n");

console.log(map.size);


console.log("\n---- 5. Deleting a Key ----\n");

map.delete("age");

console.log(map);


console.log("\n---- 6. Clearing Map ----\n");

const tempMap = new Map();

tempMap.set("a",1);
tempMap.set("b",2);

console.log("Before clear:", tempMap);

tempMap.clear();

console.log("After clear:", tempMap);



console.log("\n---- 7. Map with Different Key Types ----\n");

const mixedMap = new Map();

mixedMap.set(1,"number key");
mixedMap.set(true,"boolean key");
mixedMap.set("1","string key");

console.log(mixedMap);



console.log("\n---- 8. Using Object as Map Key ----\n");

const user = {name:"Alex"};

const visitMap = new Map();

visitMap.set(user,5);

console.log(visitMap.get(user));



console.log("\n---- 9. Chaining Map.set ----\n");

const chainMap = new Map();

chainMap
.set("a",1)
.set("b",2)
.set("c",3);

console.log(chainMap);



console.log("\n---- 10. Iterating Map (for..of) ----\n");

const foodMap = new Map([
["apple",100],
["banana",200],
["orange",150]
]);

for(const [key,value] of foodMap){
console.log(key,value);
}



console.log("\n---- 11. Map.keys() ----\n");

for(const key of foodMap.keys()){
console.log(key);
}



console.log("\n---- 12. Map.values() ----\n");

for(const value of foodMap.values()){
console.log(value);
}



console.log("\n---- 13. Map.entries() ----\n");

for(const entry of foodMap.entries()){
console.log(entry);
}



console.log("\n---- 14. Map.forEach ----\n");

foodMap.forEach((value,key)=>{
console.log(key,value);
});



console.log("\n---- 15. Creating Map from Object ----\n");

const obj = {
name:"Sam",
age:30
};

const mapFromObj = new Map(Object.entries(obj));

console.log(mapFromObj);



console.log("\n---- 16. Convert Map to Object ----\n");

const backToObject = Object.fromEntries(mapFromObj);

console.log(backToObject);



/* 
SET
 */


console.log("\n---- 17. Creating a Set ----\n");

const set = new Set();

set.add(10);
set.add(20);
set.add(30);

console.log(set);



console.log("\n---- 18. Duplicate Values Not Allowed ----\n");

set.add(10);
set.add(20);

console.log(set);



console.log("\n---- 19. Checking Value in Set ----\n");

console.log(set.has(20));
console.log(set.has(50));



console.log("\n---- 20. Deleting Value ----\n");

set.delete(20);

console.log(set);



console.log("\n---- 21. Set Size ----\n");

console.log(set.size);



console.log("\n---- 22. Iterating Set (for..of) ----\n");

for(const value of set){
console.log(value);
}



console.log("\n---- 23. Set.forEach ----\n");

set.forEach((value)=>{
console.log(value);
});



console.log("\n---- 24. Removing Duplicates from Array ----\n");

const numbers = [1,2,3,2,4,1,5];

const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);



console.log("\n---- 25. Convert Set to Array ----\n");

const uniqueArray = Array.from(uniqueNumbers);

console.log(uniqueArray);



/*
RECOLLECTION – ALL METHODS


MAP METHODS
-----------

new Map()
map.set(key,value)
map.get(key)
map.has(key)
map.delete(key)
map.clear()
map.size

Iteration

map.keys()
map.values()
map.entries()
map.forEach()


Conversion

Object.entries(obj)
Object.fromEntries(map)



SET METHODS
-----------

new Set()
set.add(value)
set.delete(value)
set.has(value)
set.clear()
set.size

Iteration

set.keys()
set.values()
set.entries()
set.forEach()


COMMON USE CASES
----------------

Remove duplicates
const unique = [...new Set(arr)]

Convert object → map
new Map(Object.entries(obj))

Convert map → object
Object.fromEntries(map)


*/