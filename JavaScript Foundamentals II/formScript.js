var nameFiled = document.getElementById("name");
var subminBtn = document.getElementById("submit");
var emailField = document.getElementById("email");

nameFiled.onblur = function(){
	if(nameFiled.value != ""){
		subminBtn.disabled = false;
	}
}

emailField.onfocus = function() {
	if (emailField.value = "email address") {
		emailField.value = "";
	};
}