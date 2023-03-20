const myString = "Hello World";

const myNumber = 26;

const myBoolean = true;

const myArray = [05, 10, 1991];

const myObject = {
  name: "JaQuan Mobley",
  age: 31,
  CodingSkills: "Low",
};

const dotNotation = myObject.name;

const bracketNotation = myArray[2];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

if (myArray.length > 4) {
  console.log("too many indexes");
} else {
  console.log("perfrct amount of indexes");
}

document.getElementById("myString").innerHTML = myString;
document.getElementById("myNumber").innerHTML = myNumber;
document.getElementById("myBoolean").innerHTML = myBoolean;
document.getElementById("myArray").innerHTML = myArray[0];
document.getElementById("myObject").innerHTML = myObject.CodingSkills;
document.getElementById("dotNotation").innerHTML = dotNotation;
document.getElementById("bracketNotation").innerHTML = bracketNotation;

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("end").innerHTML = "Project Complete";
}
