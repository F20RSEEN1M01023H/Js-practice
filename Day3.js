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
