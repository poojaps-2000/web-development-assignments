var fname=prompt("Hello and Welcoome.Please enter your first name:");
var lname=prompt("Please enter your last name:");
var age=prompt("How old are you?");
var h=prompt("How tall are you in centimeters?");
var pet=prompt("What is the name of your pet?");
if((fname[0]=="J")&&(lname[0]=="J")&&(20<=age<=30)&&(h>=170)&&(pet[pet.length-1])=="y")
{
  console.log("Welcome Comrade! You've passed the Spy Test");
}
else {
  console.log("Nothing to see here");
}
alert("Thank you so much for the information.");
