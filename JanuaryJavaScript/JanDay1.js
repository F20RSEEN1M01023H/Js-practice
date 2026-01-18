// *************************** Start Day 1 of January JavaScript Challenge ***************************
// =>1.Variables
//    Variables are the cotainers for storing data values.
//    =>1. let is the blocked Scope and can be reassigned not redeclared.
// let age = 23;
// age = 26; //so this is the reassignment and this is allowed using let keyword.

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
// console.log(name);
var name = "John Doe"; // this will give undefined because of the hoisting in var keyword.

// console.log(y); // Error! (let/const not accessible before declaration)
let y = 10;

// *************************** Data Types in JavaScript ***************************
// 1. Primitive Data Types
//    =>1.string (names, messages , texts)
// let firstName = "Hammad";
// console.log(typeof firstName);
// //    =>2.Number (integers and the floating point numbers)
// let score = 220;
// let temperature = 36.5;
// console.log(typeof temperature);
// //    =>3.Boolean(true/false)
// let isLoggedIn = true;
// let isAdmin = false;
// console.log(typeof isAdmin);
// //    =>4.Undefined (variable is decalared butt does not have any value assign to it))
// let address;
// console.log(typeof address);
// //    =>5.Null (means empty value)
// let middleName = null;
// console.log(typeof middleName);
// //    =>6.symbol (used to create unique identifiers for objects)
// let id = Symbol("id");
// console.log(typeof id);
// //    =>7.BigInt (used to represent integers larger than 2^53)
// let bigNumber = BigInt(123456789012345678901234567890);
// console.log(typeof bigNumber);

// 2. Non-Primitive Data Types( Reference Data Types)
//    =>1.Object(used to store collections of data and more complex entities)
// let person = {
//   name: "Ali",
//   age: 30,
//   isEployed: true,
// };
// console.log(typeof person);
// //    =>2.Array(used to store multiple values in a sigle array)
// const fruits = ["apple", "banana", "mangoe", "orange"];
// console.log(fruits, typeof fruits);

// function greet() {
//   console.log("Hello", typeof greet);
// }
// greet();

// ***************** Type Conversion and Coercion ***************************
//   =>1.Type Conversion (manually converting one data type to another)
// let num = "100";
// let convertedNum = Number(num); // converting string to number
// console.log(convertedNum, typeof convertedNum);
// let str = 50;
// let convertedStr = String(str); // converting number to string
// console.log(convertedStr, typeof convertedStr);

//    =>2.Type Coercion (automatically converting one data type to another)

// let result = "Hello Hammad" + 23; // number 23 is coerced to string
// console.log(result, typeof result);
// let subResult = "100" - 50; // string "100" is coerced to number
// console.log(subResult, typeof subResult);
// let mulResult = "5" * "4"; // both strings are coerced to numbers
// console.log(mulResult, typeof mulResult);
// let divResult = "20" / "4";
// console.log(divResult, typeof divResult);
// let some = "Hammad" * 3;
// console.log(some, typeof some);
// let bool = "true" + 1;
// console.log(bool, typeof bool);
// let bool2 = "false" * 1;
// console.log(bool2, typeof bool2);

// ************************** Operators in JavaScript ***************************
// 1.Arthematic Operators
// let a = 10;
// let b = 15;
// console.log("a+b =", a + b);
// console.log("a*b =", a * b);
// console.log("a-b =", a - b);
// console.log("a/b =", a / b);
// console.log("a%b =", a % b);
// console.log("a**b =", a ** b);

// 2.Assignment Operators
// let c = 20;
// c += 5;
// console.log("c += 5 :", c);
// c -= 5;
// console.log("c -= 5 :", c);
// c *= 5;
// console.log("c *= 5 :", c);
// c /= 5;
// console.log("c /= 5 :", c);

// 3.Comparison Operators
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 != "5");
// console.log(5 !== "5");
// console.log(10 > 5);
// console.log(10 <= 10);

// 4.Logical Operators
// console.log(true && false);
// console.log(true || false);
// console.log(!true);

// 5.Unary Operators
// let count = 5;
// count++;
// console.log(count);
// count--;
// console.log(count);

// 6.Ternary Operator
// let age = 20;
// const canVote =
//   age >= 18 ? "Yes You can Give your vote" : "No you are not eligible";
// console.log(canVote);

//**************** Functions **************************/
// Function Declarations
// function greet(name) {
//   console.log("Hello " + name + "!");
// }
// greet("Hammad Ashraf");

// // Function Expressions
// const add = function (a, b) {
//   console.log(a + b);
// };
// add(5, 10);

// // Arrow Functions
// const result = (x, y) => x + y;
// console.log(result(7, 3));

// Anonymous Functions
// setTimeout(function () {
//   console.log("This is an anonymous function executed after 2 seconds");
// }, 2000);

// Default Parameters
// function greet(name = "Hammad") {
//   console.log("Hello " + name + "!");
// }
// greet();

// Callback Functions
// function fetchDataa(Callback) {
//   console.log("hello");
//   Callback();
// }
// function displayData() {
//   console.log("you can Display your data here!");
// }

// fetchDataa(displayData);

// *************************** End of Day 1 of January JavaScript Challenge ***************************

// practice Questions
// Problem 1: Variable Swap(a=5, b=10) => after swap (a=10, b=5)
// function swapVar(a, b) {
//   a = a + b;
//   b = a - b;
//   a = a - b;
//   console.log("a =", a, "b =", b);
// }
// swapVar(5, 10);

// // Problem 2: Type Detective Create a function that takes any input and returns an object with:
// - The value
// - Its type
// - Whether it's truthy or falsy
// function typeDetective(input) {
//   console.log(
//     "value =",
//     input,
//     "typeof =",
//     typeof input,
//     "truthy/falsy =",
//     Boolean(input),
//   );
// }
// typeDetective(0);
// typeDetective("Hello");
// typeDetective(null);
// typeDetective(42);

// Level 2: Operators (Medium)
// Problem 3: Calculator Function
// Build a calculator function that takes two numbers and an operator string.
// Input: calculate(10, 5, '+')
// function calculator(num1, num2, operator) {
//   let result;
//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else {
//     result = "Invalid operator";
//   }
//   console.log("Result =", result);
// }
// calculator(10, 5, "+");
// calculator(10, 5, "-");
// calculator(10, 5, "*");
// calculator(10, 5, "/");

// Problem 4: Grade Evaluator
// Write a function using ternary operators to assign grades:
// 90-100: 'A'
// 80-89: 'B'
// 70-79: 'C'
// 60-69: 'D'
// Below 60: 'F'

// function gradeEvaluator(score) {
//   const grade =
//     score >= 90
//       ? "A"
//       : score >= 80
//         ? "B"
//         : score >= 70
//           ? "C"
//           : score >= 60
//             ? "D"
//             : "F";

//   console.log("Score =", score, "Grade =", grade);
// }
// gradeEvaluator(95); // A
// gradeEvaluator(85); // B
// gradeEvaluator(75); // C
// gradeEvaluator(65); // D
// gradeEvaluator(55); // F

// Level 3: Functions (Challenging)
// Problem 5: Temperature Converter
// Create functions to convert:
// - Celsius to Fahrenheit
// - Fahrenheit to Celsius
// Use arrow functions and default parameters.
// const celsiustoFarenheit = (celsius = 0) => {
//   const Fahrenheit = (celsius * 9) / 5 + 32;
//   return Fahrenheit;
// };
// const fahrenheittoCelsius = (farenheit = 32) => {
//   const Celsius = ((farenheit - 32) * 5) / 9;
//   return Celsius;
// };
// console.log("25°C to °F =", celsiustoFarenheit(25));
// console.log("77°F to °C =", fahrenheittoCelsius(77));

// Write a function to calculate factorial of a number.
// Input: factorial(5)
// Output: 120
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log("Factorial of 5 =", factorial(5));
// console.log("Factorial of 0 =", factorial(0));
// console.log("Factorial of 1 =", factorial(1));

// Level 4: Combined Concepts (Advanced)
// Problem 7: Palindrome Checker
// Create a function that checks if a given string is a palindrome.
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar"));

// Print numbers 1-100:
// - "Fizz" for multiples of 3
// - "Buzz" for multiples of 5
// - "FizzBuzz" for multiples of both
// - The number otherwise
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
