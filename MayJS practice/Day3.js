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
for (let i = 1; i <= 10; i++) {
  for (let j = 5; j <= 5; j++) {
    console.log(`${j} x ${i} = ${i * j}`);
  }
}
