// WINDOW SIZE
// clientWidth  = visible page width (no scrollbar)
// clientHeight = visible page height (no scrollbar)

// innerWidth  = window width including scrollbar
// innerHeight = window height including scrollbar

// CURRENT SCROLL
// scrollY / pageYOffset = pixels scrolled from top

//window                 // entire browser window
//document              // DOM of the page
//document.documentElement // root <html> element



function showWindowSize(){

let width = document.documentElement.clientWidth    
let height = document.documentElement.clientHeight

alert("Window Size\nWidth: "+width+"\nHeight: "+height)

}

function showScroll(){

let scrollY = window.scrollY

alert("Scrolled from top: "+scrollY)

}

function scrollDown(){

window.scrollBy(0,200)

}

function goTop(){

window.scrollTo(0,0)

}

function gotoSection(){

let target = document.getElementById("target")

target.scrollIntoView()

}