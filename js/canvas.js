// Variables!
var color = "clr"
var radius = 15;
var x = 50;
var y = 150;

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
        x = e.x - 40;
        y = e.y - 40;
        draw();
    }
})

//Add a listener for the color picker
clr.addEventListener("input", function(e) {
    console.log("Color Picker");
    console.log(this);
    ctx.fillStyle = clr.value;
})


// Functions!
// I would add a function for draw
function draw() {
    console.log("I am going to draw!");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}
