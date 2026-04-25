let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let box = document.getElementById("box");
let btn7 = document.getElementById("btn7");


function htmlEvent(){
alert("HTML handler triggered");
}

btn2.onclick = function(){
alert("DOM property event");
};

btn3.addEventListener("click", function(){
alert("addEventListener event");
});

btn4.addEventListener("click", function(){
alert("First listener");
});

btn4.addEventListener("click", function(){
alert("Second listener");
});


function activeEvent(){
    alert("Active event");
}

btn5.addEventListener("click" , activeEvent);

setTimeout(function(){
    btn5.removeEventListener("click" , activeEvent);
    console.log("Event removed");
} , 5000);

function showText(element){
alert(element.innerText);
}


box.onclick = function(event){
    console.log("Event type:", event.type);
    console.log("Mouse X:", event.clientX);
    console.log("Mouse Y:", event.clientY);
};


let handlerObj = {
handleEvent(event){
alert("Handled by object");
}};

btn7.addEventListener("click", handlerObj);


//runs when DOM fully loaded

document.addEventListener("DOMContentLoaded", function(){
console.log("DOM fully loaded");
});