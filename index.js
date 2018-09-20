var cols = document.querySelectorAll(".col1")
var currentColor = "whitesmoke"
var pixels = document.querySelectorAll(".col")

for (let i = 0; i < cols.length; i++) {
    cols[i].addEventListener("click", grabColor)
}

function grabColor(event) {
    currentColor = event.target.id
}

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("click", applyColor)
}

function applyColor(event) {    
    if (event.target.style.backgroundColor && event.target.style.backgroundColor != "whitesmoke") {
        event.target.style.backgroundColor = "whitesmoke"
    } else {
        event.target.style.backgroundColor = currentColor
    }
}