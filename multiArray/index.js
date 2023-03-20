// You should use multiple array methods to solve these problems. Don't use `for` loops!

// Using the provided `peopleArray` (bottom of this article), write a function that:

const peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

// 1. Returns a list of everyone older than 18, which is

const olderThan18 = peopleArray.filter((person) => person.age > 18);

// console.log(olderThan18);

// 2. sorted alphabetically by last name, and where

peopleArray.sort((a, b) => (a.lastName < b.lastName ? -1 : 1));

console.log(peopleArray);

// 3. each name and age is embedded in a string that looks like an HTML `<li>` elemen

const li = peopleArray.map((person) => {
  return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`;
});

// console.log(li);
