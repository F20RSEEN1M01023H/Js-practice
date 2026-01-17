// *************************** Start Day 1 of January JavaScript Challenge ***************************
// =>1.Variables
//    Variables are the cotainers for storing data values.
//    =>1. let is the blocked Scope and can be reassigned not redeclared.
let age = 23;
age = 26; //so this is the reassignment and this is allowed using let keyword.

//    =>2.const is the bocked scopr butt cant be reassigned or redeclared.
const pi = 3.14159;
// pi = 3.14; // this will gives an error because of the reassignment using const keyword.
//    =>3.var is the function that is reassigned and redeclared.
var city = "New York";
var city = "Los Angeles"; // this is redeclaration and this is allowed using var keyword.
city = "Chicago"; // this is reassignment and this is allowed using var keyword.

//Variables Must start with letter, underscore and the $ sign.
// Can contain letters, numbers, underscores, dollar signs
// Cannot use reserved keywords (like let, if, function)
// Case-sensitive (myVar ≠ myvar)

//=>2.Hoisting
// hoisting is the javscript move the decalaration to the top of the scope.
console.log(name);
var name = "John Doe"; // this will give undefined because of the hoisting in var keyword.

// console.log(y); // Error! (let/const not accessible before declaration)
let y = 10;

// *************************** Data Types in JavaScript ***************************
// 1. Primitive Data Types
//    =>1.string (names, messages , texts)
let firstName = "Hammad";
console.log(typeof firstName);
//    =>2.Number (integers and the floating point numbers)
let score = 220;
let temperature = 36.5;
console.log(typeof temperature);
//    =>3.Boolean(true/false)
let isLoggedIn = true;
let isAdmin = false;
console.log(typeof isAdmin);
//    =>4.Undefined (variable is decalared butt does not have any value assign to it))
let address;
console.log(typeof address);
//    =>5.Null (means empty value)
let middleName = null;
console.log(typeof middleName);
//    =>6.symbol (used to create unique identifiers for objects)
let id = Symbol("id");
console.log(typeof id);
//    =>7.BigInt (used to represent integers larger than 2^53)
let bigNumber = BigInt(123456789012345678901234567890);
console.log(typeof bigNumber);

// 2. Non-Primitive Data Types( Reference Data Types)
//    =>1.Object(used to store collections of data and more complex entities)
let person = {
  name: "Ali",
  age: 30,
  isEployed: true,
};
console.log(typeof person);
//    =>2.Array(used to store multiple values in a sigle array)
const fruits = ["apple", "banana", "mangoe", "orange"];
console.log(fruits, typeof fruits);

function greet() {
  console.log("Hello", typeof greet);
}
greet();

// ***************** Type Conversion and Coercion ***************************
//   =>1.Type Conversion (manually converting one data type to another)
let num = "100";
let convertedNum = Number(num); // converting string to number
console.log(convertedNum, typeof convertedNum);
let str = 50;
let convertedStr = String(str); // converting number to string
console.log(convertedStr, typeof convertedStr);

//    =>2.Type Coercion (automatically converting one data type to another)
let result = "Hello Hammad" + 23; // number 23 is coerced to string
console.log(result, typeof result);
let subResult = "100" - 50; // string "100" is coerced to number
console.log(subResult, typeof subResult);
