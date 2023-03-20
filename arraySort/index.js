// 1) Sort an array from smallest number to largest
const numbers = [1, 3, 5, 2, 90, 20];
numbers.sort((a, b) => a - b);

// console.log(numbers);

// 2) Sort an array from largest number to smallest
numbers.sort((a, b) => b - a);

// console.log(numbers);

// 3) Sort an array from shortest string to longest
const words = ["dog", "wolf", "by", "family", "eaten"];
words.sort((a, b) => a.length - b.length);

// console.log(words);

// 4) Sort an array alphabetically
words.sort();

// console.log(words);

// 5) Sort the objects in the array by age
const people = [
  { name: "Quiet Samurai", age: 22 },
  { name: "Arrogant Ambassador", age: 100 },
  { name: "Misunderstood Observer", age: 2 },
  { name: "Unlucky Swami", age: 77 },
];

people.sort((a, b) => a.age - b.age);

// console.log(people);
