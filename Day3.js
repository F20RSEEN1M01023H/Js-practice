// Basic Loops :
//print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// print only even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even Numbers:", i);
  }
}

// print numbers in reverse 10 to 1;
for (let i = 10; i >= 1; i--) {
  console.log("Reverse Numbers:", i);
}

//while loop
//find sum of numbers from 1 to 100 using while Loop
let i = 1;
let sum = 0;
while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log("Sum of the 1 to 100 is :", sum);

// using while that prints 2,4,6,8,16,32,64,128

let j = 2;
while (j <= 128) {
  console.log(j);
  j = j * 2;
}

// Array Loops
// use for loop to print each fruit with its index
const fruits = ["apple", "banana", "mango", "orange", "grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, ":", fruits[i]);
}

//Using for off loop to print each fruit in upperCase

for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}

//count how many fruits having more than 5 letters
let count = 0;
for (const fruit of fruits) {
  if (fruit.length > 5) {
    count++;
  }
}
console.log(count);

// Object Loops
// for in loop use for the objects

const student = {
  name: "Hammad",
  age: 20,
  city: "Rahim Yar Khan",
  course: "MERN Stack",
  isActive: true,
};

for (const key in student) {
  console.log(key + ": " + student[key]);
}

let count2 = 0;
for (const key in student) {
  if (typeof student[key] === "string") {
    count2++;
  }
}
console.log("Number of string properties:", count2);

//Break and continue
// print numbers from 1 to 20,butt skip multiples of 3
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }

  console.log(i);
}

// print 1 t 100 and break on 50:
for (let i = 1; i <= 100; i++) {
  if (i === 50) {
    break;
  }
  console.log(i);
}

// Nested loops:
// create multiplication table 1 to 10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const result = i * j;
    console.log(`${i} x ${j} = ${result}`);
  }
}

// Real world challenge Shopping Cart
const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
  { name: "Monitor", price: 15000, quantity: 2 },
];

let totalCost = 0;
for (const item of cart) {
  totalCost = totalCost + item.price * item.quantity;
}
console.log(totalCost);

// Pattern Printing Challenge
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }

  console.log(stars);
}

// pyaramid structure of the stars by js

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let line = "";
  // space
  for (let s = 1; s <= rows - i; s++) {
    line += " ";
  }
  // stars print
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
  }
  console.log(line);
}

// diffrence between for, while and do while loops
// for:	considtion checkes Before	, Runs at least ones: No	best for: Known iterations
// while:	considtion checkes Before	Runs at least ones:No,	Unknown best for:iterations
// do...while:	considtion checkes After	Runs at least ones: Yes,	best for:Run at least once

//when you would use for off or for in loops
("You are using for of loops for the Arrays");
("And You are using for in loops for the objects");

//what happens if you forget to increment counter in a while loop?
("The condition never becomes false.The loop runs indefinitely, causing an infinite loop. ");

//Can you use break in for of loop ?
// yes
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  if (number > 3) {
    break;
  }
  console.log(number);
}

// in React which loop method do you used most often

("we use .map method for arrays");

// Challenges
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// find the largest number in the array using loop
const numbers2 = [45, 23, 89, 12, 67, 34, 91, 28];
let max = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > max) {
    max = numbers2[i];
  }
}
console.log(`Largest Number is : ${max}`);

//Challenge task
const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true, rating: 4.5 },
  { id: 2, name: "Phone", price: 30000, inStock: true, rating: 4.2 },
  { id: 3, name: "Tablet", price: 25000, inStock: false, rating: 4.0 },
  { id: 4, name: "Watch", price: 5000, inStock: true, rating: 3.8 },
  { id: 5, name: "Headphones", price: 3000, inStock: true, rating: 4.7 },
];

//show all the products of the array
for (const product of products) {
  console.log(product);
}

//show only the products that will be in  the stock
for (const product of products) {
  if (product.inStock) {
    console.log(product.name);
  }
}

// prodcucts with rating > 4.0
for (const product of products) {
  if (product.rating > 4.0) {
    console.log(product.name, "-", product.rating);
  }
}

// calculate average price
