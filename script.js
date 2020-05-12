var text = document.querySelector("h3")
var color1 = document.querySelector("#color1")
var color2 = document.querySelector("#color2")
var body = document.getElementById("gradiente")
var button = document.querySelector("#random")


function setStyle() {
    body.style.background =
        "linear-gradient(to right, "  /*i dont undestent this */
        + color1.value
        + ", "
        + color2.value
        + ")";

    text.textContent = body.style.background + ";" //add content to text obj/var


}

function randomNumber() {
    return parseInt(Math.random() * 256)

}

function randomHex() {
    var hex = randomNumber().toString(16)
    if (hex.length === 1) {
        return "0" + hex
    }
    return hex

}

function randomColor() {
    return "#" + randomHex() + randomHex() + randomHex()
}

button.addEventListener("click", function () {
    color1.value = randomColor()
    color2.value = randomColor()
    setStyle()

})


color1.addEventListener("input", setStyle)
color2.addEventListener("input", setStyle)
