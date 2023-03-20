const form = document.calc;
const addition = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");

// Addition
function add(num1, num2) {
  return +num1 + +num2;
}

addition.addEventListener("submit", function (event) {
  event.preventDefault();
  const add1 = document.getElementById("addOne").value;
  const add2 = document.getElementById("addTwo").value;
  const result = add(add1, add2);

  return result;
  console.log(result);
});

// Subtraction
function sub(num1, num2) {
  return num1 - num2;
}

subtract.addEventListener("submit", sub);

// Multiplication
function mul(num1, num2) {
  return num1 * num2;
}

multiply.addEventListener("submit", mul);
