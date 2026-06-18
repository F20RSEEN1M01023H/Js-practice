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
