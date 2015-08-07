function hoistingTest(boo)
{
    var myNumber = 10;
    var myColor;
    if(boo){
     myNumber = 3;
     myColor = "red";
        document.write("Value of myNumber in condition: ", myNumber, myColor, "<br />");
    }
    document.write("Value of myNumber after condition: ", myNumber, myColor, "<br />");
}

hoistingTest(true);
//hoistingTest(false);