//Implicit Converson

//string followed by number -> number
//else string mostly

//implicit conversion
console.log("10 + '20");
console.log("'5' * 2 =", "5" * 2); 
console.log("'6' - 1 =", "6" - 1);
console.log("'6' / 2 =", "6" / 2);

//explicit conversion

let a = 10;
let b = "Hello"
let c = true

let a1 = String(a);
let b1 = Number(b);
let c1 = Number(c);

console.log(typeof(a1) , typeof(b1) , typeof(c1));

// boolean produce true -> valid value
// false -> falsy value (0 , null , '' , undef , nan)

// undef to number -> nan
// undef to string -> "undefined"
// undef to boolean -> false

// Number returns nan where there is no valid number eg. "Hello"

//Special Cases

console.log([] + []); 
console.log([] + {}); 
console.log({} + []);


/*
Important Interview Table : 
Value	Number()	Boolean()	String()
"123"	123	true	"123"
"abc"	NaN	true	"abc"
0	0	false	"0"
1	1	true	"1"
null	0	false	"null"
undefined	NaN	false	"undefined"
*/

let counter = 5;
let pre = ++counter;
console.log(pre);

let post = counter++;
console.log(post);
console.log(counter);

// exit outer for from inner for

let value = '';
outer : for(i=0; i<5; i++){
    for(j=0; j<5; j++){
        value += "* ";

        if(i==3){
            break outer;    // breaking outer
        }
    }
    console.log(value + '\n');
    value = ''
}

// functions

const fun = function greet(){
    return "Hello";
}

console.log(fun());
//console.log(greet());  // value passed to variable u can't call using greet();


// as callbacks

function question(q , yes , no){
    if(q) y();
    else n();
}

function y(){
    console.log("Yes");
}

function n(){
    console.log("no");
}

question(0 , y , n);

// arrow function

let v = 2;
const welcome = (v > 5) ? ()=>console.log("Greater") : ()=>console.log("Lesser");
welcome();

