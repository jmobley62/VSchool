const readline = require("readline-sync");

const num1 = readline.question("Please enter your first number: ");
const num2 = readline.question("Please enter your second number: ");
const operation = readline.question(
  "Please enter the operation to perform: add(+), sub(-), mul(*), div(/): "
);

function add(num1, num2) {
  return +num1 + +num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function calculator(operation) {
  if (operation === "+") {
    return "The result is: " + add(num1, num2);
  } else if (operation === "-") {
    return "The result is: " + sub(num1, num2);
  } else if (operation === "*") {
    return "The result is: " + mul(num1, num2);
  } else if (operation === "/") {
    return "The result is: " + div(num1, num2);
  }
}

console.log(calculator(operation));
