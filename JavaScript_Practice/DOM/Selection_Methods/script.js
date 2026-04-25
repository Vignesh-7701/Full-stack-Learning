const title = document.getElementById("main-title");
title.textContent = "Title Changed"    // title changed..


//The below 2 returns HTML Collections
const paragraph = document.getElementsByClassName("text");
for(let i = 0; i < paragraph.length; i++){
    paragraph[i].style.color = "blue";
} // Color changed

const boxes = document.getElementsByTagName("div");
for(let i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = "yellow";
} // bc color updated

const firstParagraph = document.querySelector(".text");
firstParagraph.style.fontWeight = "bold";    
// here we have to give i/p like css selector (. for class # for id)


//The below one will return NodeList
const allParagraphs = document.querySelectorAll(".text");
allParagraphs.forEach(function(p){
    p.style.backgroundColor = "lightblue"
})