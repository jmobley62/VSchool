// 1) Make an array of numbers that are doubles of the first array
let singleArr = [2, 5, 100];
let doubleArr = singleArr.map((num) => num * 2);

console.log(doubleArr);

// 2) Take an array of numbers and make them strings
let numArr = [2, 5, 100];
let strArr = numArr.map((num) => JSON.stringify(num));

// console.log(strArr);

// 3) Capitalize each of an array of names
let names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

let capNames = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
});

// console.log(capNames);

// 4) Make an array of strings of the names
let users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

let namesOnly = users.map((user) => user.name);

// console.log(namesOnly);

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
let users5 = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];
let Matrix = users.map((user) => {
  if (user.age >= 18) {
    return `${user.name} can go to the Matrix`;
  } else {
    return `${user.name} is under age!!`;
  }
});

// console.log(Matrix);

// 6) Make an array of the names in h1s, and the ages in h2s
let users6 = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

let biggerArr = users.map((user) => {
  return `<h1>${user.name}</h1><h2>${user.age}</h2>`;
});

// console.log(biggerArr);
