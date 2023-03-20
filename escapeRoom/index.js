const readline = require("readline-sync");

const gameStart = readline.question(
  "Welcome Player! You find yourself locked in a room, in order to escape the room, you must find the key in the room and then open the door. Are you ready to play? (yes/no): "
);
const choices = readline.question(
  "You have 3 options to advance forward. The choice is yours... 1. Put hand in hole 2. Find the key 3. Open the door: "
);

// const choiceOne = () => "You have died!";
// const choiceTwo = () => "You have found the key!";
// const choiceThree = () => "Door is locked. You need a key!";

// function escapeRoom(choices) {
//   if (choices === "1") {
//     return choiceOne();
//   } else if (choices === "2") {
//     return choiceTwo();
//   } else if (choices === "3") {
//     return choiceThree();
//   }
// }

// console.log(escapeRoom(choices));

console.log(choices);
