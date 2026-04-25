const {sum} = require('./script2');
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener('click' , ()=>{
    const answer = sum(10,5);
    result.innerText = answer;
})