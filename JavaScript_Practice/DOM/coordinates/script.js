const btn = document.getElementById("btn")
const box = document.getElementById("box")

// CLICK POSITION
document.addEventListener("click", (e)=>{

  console.log("client:", e.clientX, e.clientY)
  console.log("page:", e.pageX, e.pageY)

})

// ELEMENT COORDINATES
btn.addEventListener("click", ()=>{

  let rect = btn.getBoundingClientRect()

  console.log("Top:", rect.top)
  console.log("Left:", rect.left)
  console.log("Bottom:", rect.bottom)
  console.log("Right:", rect.right)

})

// ELEMENT FROM POINT
document.addEventListener("mousemove",(e)=>{

  let elem = document.elementFromPoint(e.clientX, e.clientY)

  if(elem){
    elem.style.outline = "2px solid red"
  }

})


/*
clientX/Y → position relative to visible screen
pageX/Y   → position relative to full page
*/