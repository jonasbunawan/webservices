/*var firstName = "Jonas";
var lastName = "Bunawan";
var active = true;
var age = 24;
var ageString = "24";

var user = {
    firstName: "Jonas",
    lastName: "Bunawan",
    active: true,
    age: 24,
    address: {
        line1: "Unit 7 / 45",
        line2: "Mount Pleasant Road",
        city: "Nunawading",
        postCode: "3131",
        state: "Victoria",
        country: "Australia"
    },
    sayHello: function() {
        return "Hello " + this.firstName + " and my profession is " + this.profession;
    },
    hobbies: ["working", "covering music"],
    printHobbies: function() {
        console.log("Hobbies length: " + this.hobbies.length);
        for (var i = 0; i < this.hobbies.length; i++){
            console.log(this.hobbies[i]);
        }
    }
}

if (age < 20){
    console.log(firstName + " is very young");
}else if (age > 20 && age < 50){
    console.log(firstName + " is middle age");
}else{
    console.log(firstName + " is enjoying the twilight of his life");
}

console.log(age == ageString);
console.log(age === ageString);

// Loops

var max = 5;
var i = 0;

for (i=0; i < max; i++) {
    console.log("for" + firstName + i);
}

i = 0;

while (i < max) {
    console.log("while" + firstName + i);
    i++;
}

i = 0;

do {
    console.log("doWhile" + firstName + i);
    i++;
}while(i < max);

switch (firstName) {
    case "Marco":
        console.log("Hello instructor!");
        break;
    case "Jonas":
        console.log("Hello Jonas");
        break;
    default:
        console.log("Sorry, don't recognise the name!");
}

function sayHello(name) {
    return "Hello " + name;
}

console.log(sayHello(firstName));

// Profession should be declared before involved function is called to avoid undefined property being displayed as a result
user.profession = "Developer";
console.log(user.sayHello());
console.log(user);
console.log(user.address);
user.printHobbies();
user.hobbies[user.hobbies.length] = "learning";
user.printHobbies();

function addName() {
    var firstName = prompt("Please type your first name");
    var data = document.getElementById("data");
    var dataDiv = document.createElement("div");
    dataDiv.innerHTML = firstName;
    data.appendChild(dataDiv);
}*/

// jquery
$(document).ready(function() {
    console.log("Document loaded");
    
    $("#nameButton").click(function() {
        var name = prompt("Please enter a name to add");
        console.log("Name: " + name);
        $( "#data" ).append("<div>" + name + "</div>");
    });
    
    $("#greenColourButton").click(function(){
        var dataDiv = $("#data");
        if (dataDiv.hasClass("red")){
            dataDiv.removeClass("red");
        }
        dataDiv.addClass("green");
    });
    
    $("#redColourButton").click(function(){
        var dataDiv = $("#data");
        if (dataDiv.hasClass("green")){
            dataDiv.removeClass("green");
        }
        dataDiv.addClass("red");
    });
});