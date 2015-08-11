var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d"); // rendering context

imgFrog = new Image(); // preloading image
imgFrog.src = "img/mikethefrog.png";
imgFrog.addEventListener("load", init, false);

var requestAnimFrame = 
			window.requestAnimationFrame || // animation planing (redraw)
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
				window.setTimeout(callback, 1000/60);
			}

var frogX = 65;
var frogY = 65;

function init( ){
	requestAnimFrame(update); // redraw
}

function update(){
	frogY += 3;
	context.clearRect( 0, 0, 400, 400); // each frame redraw frog
	context.drawImage(imgFrog, frogX, frogY, 100, 77); // put frog
	context.fillRect(  10,  10,  40, 380, "#000000");
	context.fillRect(  10,  10, 380,  40, "#000000");
	context.fillRect(  10, 350, 380,  40, "#000000");
	context.fillRect( 350,  10,  40, 380, "#000000");
	context.fillRect( 180,  10,  40, 180, "#000000");
	requestAnimFrame(update); // redraw again
}