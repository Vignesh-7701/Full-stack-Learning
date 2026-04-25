let box = document.querySelector("#box");
let output = document.querySelector("#output");

function setClassName(){
    box.className = 'box active';
    output.textContent = "className replaced classes with 'box active'";
}

function addClass(){
    box.classList.add("round");
    output.textContent = "classList.add('round') applied";
}

function removeClass(){
    box.classList.remove("round");
    output.textContent = "classList.remove('round') removed";
}

function toggleClass(){
    box.classList.toggle("active");
    output.textContent = "classList.toggle('active') triggered";
}

function checkClass(){
    let result = box.classList.contains("active");
    output.textContent = "Contains 'active' ? " + result;
}

function setInlineStyle(){
    box.style.backgroundColor = "purple";
    box.style.color = "white";
    box.style.fontSize = "20px";
    output.textContent = "Inline styles applied";
}

function removeInlineStyle(){
    box.style.removeProperty("background-color");
    box.style.removeProperty("color");
    output.textContent = "Inline styles removed";
}

function setCssText(){
    box.style.cssText = `
    background:green;
    color:white;
    border:4px solid black;
    `;
    output.textContent = "cssText replaced styles";
}

function readComputedStyle(){
    let style = getComputedStyle(box);
    output.textContent =
    "Width: " + style.width +
    " | Background: " + style.backgroundColor;
}