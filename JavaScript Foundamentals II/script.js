var myHeading = document.createElement("h3");
var myParagraph = document.createElement("p");

var h3Text = document.createTextNode("1933 MG J2 Facts");
var pText = document.createTextNode("The MG J2 the first sports car by MG");

myHeading.appendChild(h3Text);
myParagraph.appendChild(pText);

document.getElementById("sideNote").appendChild(myHeading);
document.getElementById("sideNote").appendChild(myParagraph);

/*var myElement = document.getElementById("myList");
var myNewElement = document.createElement("li");
myElement.appendChild(myNewElement);
myElement.innerHTML = "Text Goes Here";

var myText = document.createTextNode("New li Text");
myNewElement.appendChild(myText);*/

var myElement = document.getElementById("myList");
var myNewElement = document.createElement("li");
var secondListItem = myElement.getElementByTagName("li")[1]; //second element li
myElement.insertBefore(myNewElement, secondListItem);