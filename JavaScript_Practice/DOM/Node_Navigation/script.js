let child2 = document.getElementById("child2");
let parent = document.getElementById("parent");
let output = document.getElementById("output");

function showParentNode(){

    let result = child2.parentNode;
    output.textContent = "parentNode: " + result.id;

}

function showChildNodes(){

    let result = parent.childNodes.length;
    output.textContent = "childNodes count (includes text nodes): " + result;

}

function showFirstChild(){

    let result = parent.firstChild;
    output.textContent = "firstChild may be a text node";

}

function showLastChild(){

    let result = parent.lastChild;
    output.textContent = "lastChild may include text node";

}

function showPrevSibling(){

    let result = child2.previousSibling;
    output.textContent = "previousSibling may return text node";

}

function showNextSibling(){

    let result = child2.nextSibling;
    output.textContent = "nextSibling may return text node";

}

function showParentElement(){

    let result = child2.parentElement;
    output.textContent = "parentElement: " + result.id;

}

function showChildren(){

    let result = parent.children.length;
    output.textContent = "children count (only elements): " + result;

}

function showFirstElement(){

    let result = parent.firstElementChild;
    output.textContent = "firstElementChild: " + result.textContent;

}

function showLastElement(){

    let result = parent.lastElementChild;
    output.textContent = "lastElementChild: " + result.textContent;

}

function showPrevElement(){

    let result = child2.previousElementSibling;
    output.textContent = "previousElementSibling: " + result.textContent;

}

function showNextElement(){

    let result = child2.nextElementSibling;
    output.textContent = "nextElementSibling: " + result.textContent;

}
