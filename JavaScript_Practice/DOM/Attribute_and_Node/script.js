let container = document.getElementById("container");
let para = document.getElementById("para");
let input = document.getElementById("inputField");
let checkbox = document.getElementById("checkbox");

function nodeInfo(){
    console.dir(container);
    console.log("nodeType:", container.nodeType);  // 1 3 9 - old way
    console.log("nodeName:", container.nodeName);  // for all node
    console.log("tagName:", container.tagName);    // only for element
}

function contentTest(){
    console.log(para.innerHTML);
    console.log(para.outerHTML);
    console.log(para.textContent);
    console.log(para.firstChild.nodeValue);
}

function treeTest(){
  console.log("parentNode:", para.parentNode);
  console.log("childNodes:", container.childNodes);
  console.log("firstChild:", container.firstChild);
  console.log("lastChild:", container.lastChild);
  console.log("previousSibling:", para.previousSibling);
  console.log("nextSibling:", para.nextSibling);
}

function attributeTest(){
   console.log("hasAttribute:", container.hasAttribute("class"));
   console.log("getAttribute:", container.getAttribute("class"));
   container.setAttribute("title","sample box");
   console.log("after setAttribute:", container.getAttribute("title"));
   container.removeAttribute("title");
   console.log("after remove:", container.getAttribute("title"));
   console.log("all attributes:", container.attributes);
}

function propertyVsAttribute(){
  console.log("input value property:", input.value);
  console.log("input value attribute:", input.getAttribute("value"));

  input.value = "Changed using property";

  console.log("after change property:", input.value);
  console.log("attribute still:", input.getAttribute("value"));
  console.log("checkbox property:", checkbox.checked);
  console.log("checkbox attribute:", checkbox.getAttribute("checked"));
  console.log("dataset value:", container.dataset.user);
}