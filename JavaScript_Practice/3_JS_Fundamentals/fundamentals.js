// 1 - if-else
let marks = 82;
let name = "Viki"

if (marks >= 90 && name === "Viki") {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} 
  else {
    console.log("Fail");
}

// Nullisg Coalesing -> to skip null and undef if null / undef gives the value
let nickName = null;
console.log(nickName ?? "Vignesh"); 


// 2 - ternary
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";


// 3 - Loops

let i = 0;
do{
    console.log("I'm do loop");
    i++;
}
while(i<1);   // Mistake made here While will not have body

for (let i = 1; i <= 3; i++) {
    console.log(i);
}


// 4 Switch
let choice = 1;
let a=10 , b=5;

switch (choice) {
    case 1:
        console.log("Addition:", a + b);
        break;

    case 2:
        console.log("Subtraction:", a - b);
        break;

    default:
        console.log("Invalid option");
}


// 5 - Function

function greet(){
    return "Declaration"
};

const fun = function greetUser(a , b=25){
    return a+b;
};

//arrow function

const ar = (a ,b = 5)=>a+b;  // always keep default parameter at last..

console.log(fun(25));
console.log(ar(8 , undefined)); // default parameter in first can be used is undef is passed.