// Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

const readline = require("readline-sync");

// Enter the numbers
let a = Number(readline.question());

//push all the numbers inside number array...
let number = [];
for (let i = 0; i < a; i++) {
  number.push(Number(readline.question()));
}
//console number array...
console.log(number);

//calculate sum of all numbers inside number array...
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}
console.log(sum);
