

function init() {
	var myButton = document.getElementById("myBtn");
	myButton.onclick = function(){
	alert("You clicked the button");
	}
}

window.onload = function(){
	init();
}

/*document.onclick  = function () {
	alert("You clicked the document");
}*/