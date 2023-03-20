// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw "Error: Arguments must be numbers";
  }
  return num1 + num2;
}

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

try {
  sum(1, 2);
} catch (error) {
  console.log(error);
}

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

const user = { username: "sam", password: "123abc" };

function login(username, password) {
  if (username !== user.username || password !== user.password) {
    throw "Error: Incorrect username or password";
  } else {
    console.log("Login successful!");
  }
}

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

// try {
//   login("sam", "123abc");
// } catch (error) {
//   console.log(error);
// }

try {
  login("san", "123abc");
} catch (error) {
  console.log(error);
}
