// // Functions

// // => Function Declaration
// function greet(name) {
//   return "Hello" + name;
// }
// console.log(greet(" Hammad Ashraf"));

// // Function Declaration is hoisted  bcz this runs function before declaration JS automatically gets function on top when running
// console.log(Add(2, 5));

// function Add(a, b) {
//   return a + b;
// }

// // Function Expression
// const greeting = function (name) {
//   return "Hello " + name + " This is the function Expression";
// };
// console.log(greeting("Engr Hammad Ashraf"));

// //Function Expression is not hoisted bcz this gives error when running function before defination.
// // console.log(Multiply(5, 5)); // Gives Error not access to before initialization

// const Multiply = function (a, b) {
//   return a * b;
// };

// //=> Arrow Functions
// const added = (a, b) => a + b;
// console.log(added(4, 7)); // 11

// // One parameter
// const double = (n) => n * n;
// console.log(double(5));

// // No parameters
// const greetings = () => "Hello Hammad";
// console.log(greetings());

// // Returning an object
// const getUser = () => ({ name: "hammad", age: 22 });
// console.log(getUser());

// // => IIFE(immediately invoked function Expression)
// (function () {
//   console.log("Please run this immediately!");
// })();

// // With Arrow function
// (() => console.log("This use with arrow function"))();

// // With parameters in arrow function
// ((name) => console.log("Hello " + name))("Hammad here");

// // Real Use is to make for the private scope dont pollute global scope
// (function () {
//   const secret = "nobody sees this inside";
//   console.log(secret);
// })();

// // Concept 5: default Parameters

// function start(name = "Guest") {
//   return "Hello " + name;
// }
// console.log(start("check what shows"));

// function val(value = "default") {
//   return value;
// }
// console.log(val(undefined));
// console.log(val(null));
// console.log(val(0));
// console.log(val(""));

// // Multiple defaults
// function createUser(name = "Guest", role = "viewer", active = true) {
//   return { name, role, active };
// }
// console.log(createUser()); // {name:"Guest", role:"viewer", active:true}
// console.log(createUser("Ali", "admin"));

// // Concept 6:rest parameters

// function sumOf(...nums) {
//   let total = 0;
//   for (const n of nums) {
//     total += n;
//   }
//   return total;
// }
// console.log(sumOf(1, 2, 3, 4, 5, 6, 7, 8));

// // First param normal, rest collected

// function introduce(greeting, ...names) {
//   for (const name of names) {
//     console.log(greeting + " " + name);
//   }
// }
// introduce("Hello", "Ali", "Ahmad", "Rahman");

// // Concept 7:First class functions
// // Treating functions as values like numbers , strings and arrays

// const sayHi = function () {
//   return "Hi";
// };
// console.log(sayHi());

// /////////////////?///////////////////////

// function Run(fn) {
//   return fn();
// }
// console.log(Run(sayHi));

// ////////////////////>/////////////////
// function greeter(greet) {
//   return function (name) {
//     return greet + name;
//   };
// }
// const hello = greeter("Hello");
// const hi = greeter("SayHi");
// console.log(hello("Hammad"));
// console.log(hi("Sundari"));

// // Concept 8 — Pure Functions

// // PURE — no side effects, predictable
// function add(a, b) {
//   return a + b;
// }
// add(2, 3); // always 5, no matter what
// add(2, 3); // always 5
// add(2, 3); // always 5

// // IMPURE — depends on outside variable
// let tax = 0.1;
// function getPrice(price) {
//   return price + price * tax; // depends on outer 'tax'
// }
// // If tax changes, same input gives different output — unpredictable

// // IMPURE — modifies something outside
// const cart = [];
// function addItem(item) {
//   cart.push(item); // modifies outer array — side effect
// }

// // PURE version — returns new array, never mutates
// function addItem(cart, item) {
//   return [...cart, item]; // returns new array
// }
// const newCart = addItem(cart, "apple");

// // Concept 9 — Higher Order Functions
// // A function that takes another function as argument OR returns a function:
// js; // Takes a function as argument
// function doTwice(fn, value) {
//   return fn(fn(value));
// }
// const double = (n) => n * 2;
// console.log(doTwice(double, 3)); // 12 — doubles twice: 3→6→12

// // Returns a function
// function multiplier(factor) {
//   return (n) => n * factor;
// }
// const triple = multiplier(3);
// const quadruple = multiplier(4);

// console.log(triple(5)); // 15
// console.log(quadruple(5)); // 20

// // map, filter, reduce are all higher order functions
// // They take a function as argument
// [1, 2, 3].map((n) => n * 2); // [2, 4, 6]
// [1, 2, 3].filter((n) => n > 1); // [2, 3]
// [1, 2, 3].reduce((sum, n) => sum + n, 0); // 6

// Q1 — Declaration vs Expression
// Predict output — explain why
// console.log(double(4));

// var double = function (n) {
//   return n * 2; // =>TypeError:Double is not a function
// };

// Q2 — Arrow functions
// Convert this to an arrow function
// with implicit return
// function multiply(a, b) {
//   return a * b;
// }
const multiply = (a, b) => {
  return a * b;
};

// Q3 — IIFE
// What does this print and why?
const result = ((a, b) => a + b)(10, 20);
console.log(result); // =>This prints 10+20 is 30 bcz this is the immediately invoke function expression

// Q4 — Default parameters
// What does each line print?
function createTag(text, tag = "p") {
  return `<${tag}>${text}</${tag}>`;
}
console.log(createTag("Hello")); //=><p>Hello</p>
console.log(createTag("Hello", "h1")); //=><h1>Hello</h1>
console.log(createTag("Hello", null)); //=><>Hello</>
console.log(createTag("Hello", undefined)); //=><p>Hello</p>

// Q5 — Rest parameters
// Write a function 'average'
// Takes any number of arguments
// Returns their average (sum / count)
// average(10, 20, 30) → 20
// average(5, 15)      → 10

function average(...nums) {
  if (nums.length === 0) return 0;

  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum / nums.length;
}
console.log(average(1, 2, 5, 6, 7, 6, 45, 67, 34));

// Q6 — First class functions
// What prints and why — trace each line
function apply(fn, value) {
  return fn(value);
}
const square = (n) => n * n;
const negate = (n) => -n;

console.log(apply(square, 5)); //=>25
console.log(apply(negate, 5)); //=>-5
console.log(apply((n) => n + 100, 5)); //=>105

// Q7 — Pure vs Impure
// Is this function pure or impure?
// Give ONE reason why
let discount = 20;
function finalPrice(price) {
  return price - discount;
} //=> This is the impure functioon due to outside effect by let discount

// Q8 — Higher order functions
// Write a function 'repeat(fn, n)'
// It calls fn exactly n times
// repeat(() => console.log("hello"), 3)
// prints "hello" three times

// "I did not understand this complete higher order function topic"
