// // Loops and iterations
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // Looping An Array
// let fruits = ["Apple", "Banana", "Mangoe", "Water-melon"];

// for (let j = 0; j < fruits.length; j++) {
//   console.log(fruits[j]);
// }

// // Looping backwards
// for (let j = fruits.length - 1; j >= 0; j--) {
//   console.log(`Looping Back Array: ${fruits[j]}`);
// }

// Concept 2 -- While Loop

// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// let number = 0;

// while (number <= 0) {
//   number = 10;
// }
// console.log(number);

// // Concept 3 ---Do While Loop

// let i = 10;

// do {
//   console.log("Do While:", i);
//   i++;
// } while (i < 5);

// do {
//   console.log("Showing menu");
// } while (userWantToRepeat);

// Concept 4 -- break & continue

// for (let i = 0; i < 10; i++) {
//   if (i === 6) break; //stops at 5  // break
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue; // skips even numbers // continue
//   console.log(i);
// }

// Concept 5--- For of loop
// work on arrays , strings and iterable objects
// const fruits = ["bnana", "Apple", "orange"];
// for (fruit of fruits) {
//   console.log(fruit);
// }

// for (char of "Hammad") {
//   console.log(char);
// }

// // with index
// for (const [index, fruit] of fruits.entries()) {
//   console.log(index, fruit);
// }

// Concept --6 for in loop
// user = { name: "Hammad", age: "23", Designation: "Developer" };
// for (const key in user) {
//   console.log(`${key}:${user[key]}`);
// }

// Why NOT on arrays
// const arr = ["a", "b", "c"];
// for (const key in arr) {
//   console.log(key); // "0", "1", "2" ← gives INDEX as string, not value
// }

// Concept 7:Nested Loops
// for (let i = 1; i <= 10; i++) {
//   for (let j = 5; j <= 5; j++) {
//     console.log(`${j} x ${i} = ${i * j}`);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${j} x ${i} = ${i * j}`);
//   }
// }

// Lesson End Example to solve

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Examples test

// 1.

// const scores = [10, 25, 8, 40, 15];

// // Without using any array method
// // Using only a for loop
// // Find and print the LARGEST number

// let largest = scores[0];
// for (let i = 1; i < scores.length; i++) {
//   if (scores[i] > largest) {
//     largest = scores[i];
//   }
// }
// console.log(largest);

// Q2 — while loop
// Print numbers 1 to 10 using a while loop
// BUT stop completely if you hit a number divisible by both 2 and 3

// let count = 1;
// while (count <= 10) {
//   if (count % 2 === 0 && count % 3 === 0) {
//     break;
//   }
//   console.log(count);
//   count++;
// }

// Q2 — do...while
// You have this variable:
// let attempts = 0;
// // Using do...while, keep incrementing attempts
// // Stop when attempts reaches 5
// // Print attempts after every increment
// // How many times does the body run?

// do {
//   console.log("Print", attempts);
//   attempts++;
// } while (attempts < 5);

// The body will be run 6 times

// Q3 — break and continue
// const numbers = [3, 7, 2, 9, 4, 11, 6, 5];
// Loop through numbers
// Skip any number less than 5
// Stop completely when you find a number greater than 10
// Print every number that passes both rules
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 5) {
//     continue;
//   }
//   if (numbers[i] > 10) {
//     break;
//   }
//   console.log(numbers[i]);
// }
// // with 2 methods

// for (const num of numbers) {
//   if (num < 5) {
//     continue;
//   }
//   if (num > 10) {
//     break;
//   }
//   console.log(num);
// }
// // Q4 — for...of
// const sentence = "hello";
// // // Loop over each character
// // // Print each character in UPPERCASE
// for (const char of sentence) {
//   console.log(char.toUpperCase());
// }

// // Q5 — for...in
// const product = {
//   name: "Laptop",
//   price: 150000,
//   brand: "Dell",
//   inStock: true,
// };
// // // Print every key and value like this:
// // // "name: Laptop"
// // // "price: 150000"
// // // etc
// for (const key in product) {
//   console.log(`"${key} : ${product[key]}"`);
// }

// // Q6 — putting it together
// const students = [
//   { name: "Ali", grade: 55 },
//   { name: "Sara", grade: 82 },
//   { name: "Ahmed", grade: 40 },
//   { name: "Zara", grade: 91 },
// ];
// // // Loop over students using for...of
// // // Skip any student with grade below 50
// // // Print: "Sara passed" / "Zara passed" etc
// // // Stop completely after finding 2 passing students
// let passedCount = 0;
// for (const student of students) {
//   if (student.grade < 50) {
//     continue;
//   }
//   console.log(`${student.name} passed`);
//   passedCount++;

//   if (passedCount === 2) {
//     break;
//   }
// }

// Scenario 1
// You receive this from an API:
const response = {
  user: null,
};
// Safely get response.user.address.city
// If anything is missing print "Location unknown"
// One line only
console.log(response.user?.adress?.city ?? "Location none");
// so in our case  this will Location none bcz we have user null

// Scenario 2
// A function receives a price parameter
// price can be 0 (valid) or undefined (not provided)
// If not provided default should be 99
// Print "Price: X" in both cases
// Write the complete function
let price = 0;
function showPrice(price) {
  console.log("Price:", price ?? 99);
}

// Scenario 3
// Loop over this array
// Skip negative numbers
// Stop when you find a number greater than 20
// Print every valid number
const nums = [-3, 5, -1, 8, 12, 25, 6];

for (const num of nums) {
  if (num > 20) {
    break;
  }
  if (num < 0) {
    continue;
  }
  console.log(num);
}

// Scenario 4
// Loop over this object and print only values that are strings
const person = {
  name: "Ali",
  age: 22,
  city: "Lahore",
  isActive: true,
  score: 95,
};

for (const key in person) {
  if (typeof person[key] !== "string") {
    continue;
  }
  console.log(`${key} : ${person[key]}`);
}

// Scenario 5
// Without using Math.max()
// Find the largest number using a loop
const values = [14, 3, 77, 42, 9, 55];
let largest = values[0];

for (const value of values) {
  if (value > largest) {
    largest = value;
  }
}
console.log(largest);

let a = 5;
console.log(a++);
console.log(a);
console.log(++a);

const username = "";
if (username) {
  console.log("Username:", username);
} else {
  console.log("No username provided");
}
