// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them.
// If any argument is not a whole number, skip it. Do not support negative numbers.

// Understand the problem

// 1. take in an unlimited number of args
// how to remove an element from an array
const args = process.argv;
// args.shift()
// args.shift()

const copy = args.slice(2);

// [1, 2, 3] = 6
// 2. prints out the sum of them

// c-style loop
// for(let i = 0; i < copy.length; i++) {
// 	console.log(copy[i])
// }

// for-in loop
// for(let id in copy) {
// 	console.log(copy[id])
// }

// for-of
let sum = 0;

for (let arg of copy) {
  const number = Number(arg);

  // 3. If any argument is not a whole number
  if (Number.isInteger(number) && number >= 0) {
    // Do not support negative numbers
    sum += number;
  }
}

console.log(sum);
// undefined123

// 2. print out the sum of them
// 3. skip any number that is not a whole number
// 4. skip any negative number
