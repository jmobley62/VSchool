// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const numbers = [3, 6, 8, 2];
const fiveAndMore = numbers.filter((number) => number >= 5);

// console.log(fiveAndMore);

// 2) Given an array of numbers, return a new array that only includes the even numbers.
const evens = numbers.filter((number) => number % 2 === 0);

// console.log(evens);

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const words = ["dog", "wolf", "by", "family", "eaten", "camping"];
const fiveOrLess = words.filter((word) => word.length <= 5);

// console.log(fiveOrLess);

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

const members = people.filter((person) => person.member === true);

// console.log(members);

// 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
const people2 = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

const matrix = people2.filter((person) => person.age >= 18);

// console.log(matrix);
