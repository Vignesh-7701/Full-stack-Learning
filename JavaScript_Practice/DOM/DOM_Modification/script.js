let list = document.querySelector("#list");
let target = document.querySelector("#target");

function createItem(text){
    let li = document.createElement("li");
    li.textContent = text;
    return li;    
}

function addAppend(){
    let li = createItem("Append Item");
    list.append(li);
}

function addPrepend(){
let li = createItem("Prepended Item");
list.prepend(li);
}

function addBefore(){
let li = createItem("Before Target");
target.before(li);
}

function addAfter(){
let li = createItem("After Target");
target.after(li);
}

function replaceItem(){
let li = createItem("Replaced Item");
target.replaceWith(li);
target = li;
}

function removeItem(){
target.remove();
}

function cloneItem(){
let clone = target.cloneNode(true);
clone.textContent = "Cloned Item";
list.append(clone);
}

function insertHTML(){
list.insertAdjacentHTML(
"beforeend",
"<li>Inserted via HTML</li>"
);
}

function addFragment(){

let fragment = new DocumentFragment();

for(let i=1;i<=3;i++){
let li = createItem("Fragment Item " + i);
fragment.append(li);
}

list.append(fragment);

}
