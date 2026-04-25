const box = document.getElementById("box")
const result = document.getElementById("result")

function showSizes(){

    const offsetWidth = box.offsetWidth
    const clientWidth = box.clientWidth
    const scrollWidth = box.scrollWidth

    const offsetHeight = box.offsetHeight
    const clientHeight = box.clientHeight
    const scrollHeight = box.scrollHeight

    const scrollTop = box.scrollTop

    result.innerHTML = `
    offsetWidth : ${offsetWidth} <br>
    clientWidth : ${clientWidth} <br>
    scrollWidth : ${scrollWidth} <br><br>

    offsetHeight : ${offsetHeight} <br>
    clientHeight : ${clientHeight} <br>
    scrollHeight : ${scrollHeight} <br><br>

    scrollTop : ${scrollTop}
    `
}

function expandHeight(){

    // expands box to show full content
    box.style.height = box.scrollHeight + "px"
}


// offsetWidth  = content + padding + border + scrollbar
// offsetHeight = content + padding + border + scrollbar

// clientWidth  = content + padding (no border, no scrollbar)
// clientHeight = content + padding (no border, no scrollbar)

// scrollWidth  = total content width including hidden overflow (no border , no scrollbar)
// scrollHeight = total content height including hidden overflow (no border , no scrollbar)

// scrollTop  = pixels scrolled vertically
// scrollLeft = pixels scrolled horizontally

// Uses to add stuffs like Readmore.. , etc