/*
Uses of strict: 
Preventing accidental globals
Making code safer
Catching silent errors
Enabling JavaScript optimizations
*/

"use strict";

/* 1 - Variable must be declared
a = 10;
console.log(a);
*/

/* 2 - Duplicate Parameters not allowed
function add(a , a){
    return a+a;
}
add(5,5);
*/

/* 3 - this -> undefined , without strict this -> global object
   function greet(){
        console.log("Hello " + this);  
    };

greet()
*/

//uncomment and test we'll get errors.




