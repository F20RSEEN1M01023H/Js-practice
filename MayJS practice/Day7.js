//*************This keyword************* */

// // In browser
// console.log(this); // Window object — the global object

// // In Node.js
// console.log(this); // {} — empty module object

// // In strict mode
// "use strict";
// console.log(this); // undefined

// Concept 2 This in a Object Method*******************************
// const user = {
//   name: "Hammad",
//   age: 23,
//   greet() {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.age);
//   },
// };
// user.greet();

//Another Example *************
// const car = {
//   brand: "Hundayi",
//   speed: 0,
//   accelration() {
//     this.speed += 10;
//     console.log(`${this.brand} going ${this.speed} km/h`);
//   },
// };
// car.accelration();
// car.accelration();
// car.accelration();

// Concept 3 *****************************
// const user = {
//   name: "Hammad Ashraf",
//   age: 23,
//   greet() {
//     console.log(this.name);
//   },
// };
// user.greet();
// const fn = user.greet();
// fn(); // error that fn is not a function

// Another example *******************
// const timer = {
//   message: "This message is timer",
//   start() {
//     setTimeout(function() {
//       console.log(this.message);
//     }, 1000);
//   },
// };
// timer.start();

//Concept 4**************************** This in regular functions
// function showThis() {
//   console.log(this);
// }

// showThis();
// const object = { showThis };
// object.showThis();

// Nested Regular functions
// const user = {
//   name: "Hami",
//   outer() {
//     console.log(this.name);

//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   },
// };

// user.outer();

// Concept 5 — this in Arrow Functions *******************
// const user = {
//   name: "Hammad",
//  greetRegular() {
//     console.log(`Regular: ${this.name}`);
//   },
//   Arrowfunction: () => {
//     console.log(`Arrow: ${this.name}`);
//   },
//
// };
// user.greetRegular();
// user.Arrowfunction();

// Arrow solve the nested problem ****************
// const timer = {
//   message: "This is the timer Arrow",
//   start() {
//     setTimeout(() => {
//       console.log(this.message);
//     }, 1000);
//   },
// };
// timer.start();

// Concept 6 — call()************************
// Lets you call a function with a custom this:
// function greet(greeting, punctuation) {
//   console.log(`${greeting} ${this.name}${punctuation}`);
// }
// const user1 = { name: "Ali" };
// const user2 = { name: "Hammad" };

// greet.call(user1, "Hello", "!");
// greet.call(user2, "Hi", ".");

// Borrow method ****************
// const animal = {
//   type: "Dog",
//   describe() {
//     console.log(`I am a ${this.type}`);
//   },
// };
// const cat = { type: "cat" };

// animal.describe.call(cat);

// Concept 7 — apply()******************
// Same as call() but arguments passed as an array:
