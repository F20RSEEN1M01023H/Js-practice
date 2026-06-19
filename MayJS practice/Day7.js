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

// function greet(greeting, punctuation) {
//   console.log(`${greeting} ${this.name}${punctuation}`);
// }

// const user = { name: "Hamo" };
// greet.call(user, "Hello", "!");

// // apply
// greet.apply(user, ["Hello", "!"]);

// const args = ["Hello", "!"];
// greet.apply(user, args);

// // classic Apply
// const numbers = [3, 1, 4, 70, 55, 67, 98];
// console.log(Math.max.apply(null, numbers));

// Concept 8 — bind()

// function greet() {
//   console.log(`Hello ${this.name}!`);
// }
// const user = { name: "Hammad" };

// const boundGreet = greet.bind(user);
// boundGreet();

// const rebind = boundGreet.bind({ name: "Hammad Ashraf now" });
// rebind();

// const timer = {
//   message: "Done!",
//   start() {
//     setTimeout(
//       function () {
//         console.log(this.message);
//       }.bind(this),
//       1000,
//     ); // bind this (timer) to the callback
//     // "Done!" ✅
//   },
// };

// // bind with partial arguments — currying-like
// function multiply(a, b) {
//   return a * b;
// }
// const double = multiply.bind(null, 2); // a is permanently 2
// console.log(double(5)); // 10
// console.log(double(8)); // 16

// ******************************* Solved Functions ****************************

// Q1 — Predict output, explain each
// const person = {
//   name: "Ali",
//   regular() {
//     console.log(this.name); // Q1a Ali
//   },
//   arrow: () => {
//     console.log(this.name); // Q1b undefined bcz arrow borrow this from surrounding scope
//   },
//   outer() {
//     const inner = () => {
//       console.log(this.name); // Q1c Ali
//     };
//     inner();
//   },
// };
// person.regular();
// person.arrow();
// person.outer();

// Q2 — Lost context
// What prints and why?
// const car = {
//   brand: "Toyota",
//   getBrand() {
//     return this.brand;
//   },
// };
// const fn = car.getBrand;
// console.log(car.getBrand()); // Q2a toyota
// console.log(fn()); // Q2b undefined bcz of there is not object before .

// Q3 — Fix with arrow function
// This has a this bug — fix it using arrow function
// const counter = {
//   count: 0,
//   start() {
//     setInterval(() => {
//       this.count++;
//       console.log(this.count);
//     }, 1000);
//   },
// };
// counter.start();

// // Q4 — call and apply
// function introduce(city, country) {
//   console.log(`${this.name} from ${city}, ${country}`);
// }
// const user = { name: "Ali" };

// // Call using call()
// introduce.call(user, "Rahim Yar Khan", "Pakistan");
// // Call using apply()
// introduce.apply(user, ["Rahim Yar Khan", "Pakistan"]);
// const argsUser = ["Rahim Yar Khan", "Pakistan"];
// introduce.apply(user, argsUser);
// // Both should print: "Ali from Lahore, Pakistan"

// Q5 — bind
// Fix this lost context using bind
// const restaurant = {
//   name: "Lahori Karahi",
//   getMenu() {
//     console.log(`${this.name}'s menu`);
//   },
// };
// const getMenu = restaurant.getMenu.bind({ name: "Lahori Karahi" });
// getMenu(); // undefined's menu — fix this with bind

// Q6 — Tricky — predict output
// function showName() {
//   console.log(this.name);
// }
// const obj1 = { name: "Ali", show: showName };
// const obj2 = { name: "Sara", show: showName };

// obj1.show(); // Q6a Ali
// obj2.show(); // Q6b Sara
// obj1.show.call(obj2); // Q6c Sara
// obj2.show.bind(obj1)(); // Q6d Ali

// Q7 — Real world
// Build an object 'bankAccount' with:
// owner — string (private via closure or just property)
// balance — starts at 0
// deposit(amount) — adds to balance, uses this
// withdraw(amount) — subtracts, check sufficient funds, uses this
// getInfo() — returns "owner: X, balance: Y" using this

// function bankAccount(owner, balance = 0) {
//   return {
//     owner,
//     balance,

//     deposit(amount) {
//       this.balance += amount;
//     },

//     withdraw(amount) {
//       if (amount > this.balance) {
//         console.log("Insufficient fund");
//         return;
//       }
//       this.balance -= amount;
//     },
//     getInfo() {
//       return `owner:${this.owner}, balance:${this.balance}`;
//     },
//   };
// }

// const account = bankAccount("Ali", 1000);
// account.deposit(500);
// account.withdraw(200);
// console.log(account.getInfo()); // "owner: Ali, balance: 1300"
//  Q7 : With help of Ai i did not understood this

// Q8 — explain in plain English
// Why does this work:
// const obj = {
//   name: "Ali",
//   greet() {
//     setTimeout(() => {
//       console.log(this.name); // "Ali" This work bcz of arrow function that borrow scope from surrounding.
//     }, 1000);
//   },
// };
// // But this does NOT work:
// const obj2 = {
//   name: "Ali",
//   greet() {
//     setTimeout(function () {
//       console.log(this.name); // undefined And this regular gives error becuase of the this depends on how the function is called
//     }, 1000);
//   },
// };
