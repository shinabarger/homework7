// Variables!
var color;
var radius = 15;
var x = 50;
var y = 150;
var toggle;

//set up canvas size to be 75% of the width and height of the screen
var canvasWidth = (window.innerWidth) * .75;
var canvasHeight = (window.innerHeight) * .75;
document.querySelector('canvas').width = canvasWidth;
document.querySelector('canvas').height = canvasHeight;
//You will want to add more

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var clr = document.querySelector("#clr")
var AllowDrawing = false;

//Listeners!!
//Add a listener for loading the window
window.addEventListener('load', function(e) {
    console.log("window loaded");
    ctx.fillStyle = color;
})

//detect mouse down
canvas.addEventListener('mousedown', function(e) {
    AllowDrawing = true;
})

//detect mouse up
canvas.addEventListener('mouseup', function(e) {
    AllowDrawing = false;
})

//Add a listener for the mouse movement
canvas.addEventListener('mousemove', function(e) {
    if (AllowDrawing == true) {
        x = e.x - 50;
        y = e.y - 50;
        draw();
    }
})

document.getElementById("erase").addEventListener("click", function(e) {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    canvasWidth = (window.innerWidth) * .75;
    canvasHeight = (window.innerHeight) * .75;
    document.querySelector('canvas').width = canvasWidth;
    document.querySelector('canvas').height = canvasHeight;
    ctx.beginPath();
    console.log("Erase");
})


// Functions!
// I would add a function for draw
function draw() {
    console.log("I am going to draw!");
    console.log("Color value is" + clr.value)
    ctx.fillStyle = getColor();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function getColor() {
    color = clr.value;
    return color;
}
