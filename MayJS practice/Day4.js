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

// Arrow Functions
const added = (a, b) => a + b;
console.log(added(4, 7)); // 11

// One parameter
const double = (n) => n * 2;

// No parameters
const greetings = () => "Hello Hammad";

// Returning an object
const getUser = () => ({ name: "hammad", age: 22 });
