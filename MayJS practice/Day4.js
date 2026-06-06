// Functions

// => Function Declaration
function greet(name) {
  return "Hello" + name;
}
console.log(greet(" Hammad Ashraf"));

// Function Declaration is hoisted  bcz this runs function before declaration JS automatically gets function on top when running
console.log(Add(2, 5));

function Add(a, b) {
  return a + b;
}

// Function Expression
const greeting = function (name) {
  return "Hello " + name + " This is the function Expression";
};
console.log(greeting("Engr Hammad Ashraf"));

//Function Expression is not hoisted bcz this gives error when running function before defination.
// console.log(Multiply(5, 5)); // Gives Error not access to before initialization

const Multiply = function (a, b) {
  return a * b;
};

//=> Arrow Functions
const added = (a, b) => a + b;
console.log(added(4, 7)); // 11

// One parameter
const double = (n) => n * n;
console.log(double(5));

// No parameters
const greetings = () => "Hello Hammad";
console.log(greetings());

// Returning an object
const getUser = () => ({ name: "hammad", age: 22 });
console.log(getUser());

// => IIFE(immediately invoked function Expression)
(function () {
  console.log("Please run this immediately!");
})();

// With Arrow function
(() => console.log("This use with arrow function"))();

// With parameters in arrow function
((name) => console.log("Hello " + name))("Hammad here");

// Real Use is to make for the private scope dont pollute global scope
(function () {
  const secret = "nobody sees this inside";
  console.log(secret);
})();

// Concept 5: default Parameters

function start(name = "Guest") {
  return "Hello " + name;
}
console.log(start("check what shows"));

function val(value = "default") {
  return value;
}
console.log(val(undefined));
console.log(val(null));
console.log(val(0));
console.log(val(""));

// Multiple defaults
function createUser(name = "Guest", role = "viewer", active = true) {
  return { name, role, active };
}
console.log(createUser()); // {name:"Guest", role:"viewer", active:true}
console.log(createUser("Ali", "admin"));

// Concept 6:rest parameters

function sumOf(...nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}
console.log(sumOf(1, 2, 3, 4, 5, 6, 7, 8));

// First param normal, rest collected

function introduce(greeting, ...names) {
  for (const name of names) {
    console.log(greeting + " " + name);
  }
}
introduce("Hello", "Ali", "Ahmad", "Rahman");

// Concept 7:First class functions
// Treating functions as values like numbers , strings and arrays

const sayHi = function () {
  return "Hi";
};
console.log(sayHi());

/////////////////?///////////////////////

function Run(fn) {
  return fn();
}
console.log(Run(sayHi));

////////////////////>/////////////////
function greeter(greet) {
  return function (name) {
    return greet + name;
  };
}
const hello = greeter("Hello");
const hi = greeter("SayHi");
console.log(hello("Hammad"));
console.log(hi("Sundari"));

// Concept 8 — Pure Functions

function addu(a, b) {
  return a + b;
}
console.log(addu(2, 9));

//Impure function

// Concept 9 — Higher Order Functions
// A function that takes another function as argument OR returns a function:
js; // Takes a function as argument
function doTwice(fn, value) {
  return fn(fn(value));
}
const double = (n) => n * 2;
console.log(doTwice(double, 3)); // 12 — doubles twice: 3→6→12

// Returns a function
function multiplier(factor) {
  return (n) => n * factor;
}
const triple = multiplier(3);
const quadruple = multiplier(4);

console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

// map, filter, reduce are all higher order functions
// They take a function as argument
[1, 2, 3].map((n) => n * 2); // [2, 4, 6]
[1, 2, 3].filter((n) => n > 1); // [2, 3]
[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
