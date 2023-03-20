// // Prelims
// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }

// for (let i = 9; i >= 0; i--) {
//   console.log(i);
// }

// const fruit = ["banana", "orange", "apple", "kiwi"];
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// // Bronze
// const numbers = [];
// for (let i = 0; i <= 9; i++) {
//   numbers.push(i);
// }
// console.log(numbers);

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// const moreFruit = [];
// for (let i = 0; i < fruit2.length; i++) {
//   if (i % 2 === 0) {
//     moreFruit.push(fruit2[i]);
//   }
// }

// console.log(moreFruit);

// Silver
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

for (let i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}

const names = [];
const occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

const skipNames = [];
const skipOccupations = [];
for (let i = 0; i < names.length; i++) {
  if (i % 2 === 0) {
    skipNames.push(names[i]);
  }
}

for (let i = 1; i < occupations.length; i++) {
  if (i % 2 !== 0) {
    skipOccupations.push(occupations[i]);
  }
}

console.log(skipNames);
console.log(skipOccupations);
