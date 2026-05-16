// Java Script core concepts and logic building

//Var VS Let VS Const
// #Rule => 01: Re-declaration
// Var

// var name = "hammad";
// var name = "Ali";
// console.log(name); // Allowed because variable allows re declaration

// Let
let book = "English";
// let book = "Urdu";
// console.log(book); //syntax error because book is already declared and let is not allowing re-decalaration.

// Const
// const age = 23;
// const age = 28;
// console.log(age); //syntax error becuase const also not allowing re-declaration

// #Rule=>2
// Re-Assignment

// Var
var x = 1;
x = 2;
// console.log(x); //Allowing also re-assignment

//Let
let y = 1;
y = 4;
// console.log(y); //Also allowing re-assigment

// Const
const z = 23;
// z = 33;
// console.log(z); //TypeError due to assignment to constant variable

// Rule=>3
// #Scope

// Var
if (true) {
  var list = "Hammad is here"; //As by this Var is functioned scope and leaked out of the box
}
// console.log(list);

// Let
if (true) {
  let listLet = "Let hammad is here";
  const listConst = "Const hammad is here";
}
// console.log(listLet); // As by this you see the Refrence error due to listLet is not defined bcz let is blocked scope and remain inside
// console.log(listConst) //As by same const is also a blocked scope and remain in the block so gives ReferenceError

// Data Types
// #Permitive Data types
// 1.String (Any chracters in quotes single , double or backticks that is call string data typeof.)
// 2.Number(Any numbers and NaN=> not a number and Infinity=> divide by 0)
// 3.Boolean(True or false values like coparison like 5>3)
// 4.Null(Null is the intentionaly empty set value to null means i know no value set)
// 5.Undefined(Only declared variable no value assigned.)
// 6.Symbol(means uniuqe identifier use for the id )
// 7.BigInt(means the larger number with n and having numbers larger than number )

//#Non-permitive Data types
// Objects (Key value pairs like {name:"hammad", age:23})

// Typeof

// console.log(typeof "hello");
// console.log(typeof 56);
// console.log(typeof 3.14);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function () {});
// console.log(typeof Symbol());
// console.log(typeof 678n);
// console.log(typeof null === "object");

// Concept 4 — Truthy & Falsy Values

// if (false) {
// }
// if (0) {
// }
// if (NaN) {
// }
// if (null) {
// }
// if (undefined) {
// }
// if ("") {
// }
// These all are above falsy value and else from these values all are truthy

// if (1)         { } // truthy
// if ("0")       { } // truthy — "0" is a non-empty string!
// if ([])        { } // truthy — empty array is truthy!
// if ({})        { } // truthy — empty object is truthy!
// if (-1)        { } // truthy — any non-zero number

// Example .........
// const userInput = "";

// if (userInput) {
//   console.log("Got user input"); // never runs bcz the when user input nothing
// }

// const count = 0;
// if (count) {
//   console.log("has count"); // never runs bcz count having 0 value is a falsy
// }

// if (count !== null && count !== undefined) {
//   console.log("count exists", count);
// }

//Concept 5
// Type coercion vs conversion
// 1.conversion
// let yz = Number("45");
// console.log(yz);
// Number(""); //0
// Number(null); //0
// Number(undefined); //0
// Number(true); //1
// Number(false); //0
// Number("348abc"); //NaN

// String(42)        // "42"
// String(true)      // "true"
// String(null)      // "null"

// Boolean(0)        // false
// Boolean("")       // false
// Boolean("hello")  // true
// Boolean(null)     // false
// Boolean(1)        // true

// 2.Coercion
// "5" + 3; //"53"
// "4" + null; //"4null"
// "5" + true; // "5true"

// "5" - 3; //2
// "5" * 3; //15
// "15" / 3; //5
// "5" - "3"; //2

// console.log(1 + 2 + "3"); //123
// console.log("3" + "3"); //33

// Concept 6 — == vs ===

// // == allows coercion — AVOID this
// "5" == 5       // true  — string converted to number
// 0 == false     // true  — false converted to 0
// "" == false    // true  — both convert to 0
// null == undefined // true — special rule
// null == 0      // false — null only equals undefined loosely

// // === strict — ALWAYS use this
// "5" === 5      // false — different types
// 0 === false    // false — different types
// "" === false   // false — different types
// null === undefined // false — different types

// Concept 7 — parseInt() vs Number()

// This is a common interview trick question:
// jsNumber("42")      // 42    — works
// Number("42abc")   // NaN   — fails, can't fully parse
// Number("")        // 0     — empty string = 0
// Number(" ")       // 0     — whitespace = 0

// parseInt("42")    // 42    — works
// parseInt("42abc") // 42    — takes what it can, ignores rest
// parseInt("")      // NaN   — empty = NaN
// parseInt("abc")   // NaN   — no number at start

// // parseInt also handles different bases (radix)
// parseInt("10", 2)  // 2  — read "10" as binary
// parseInt("ff", 16) // 255 — read "ff" as hexadecimal

// // parseFloat for decimals
// parseFloat("3.14abc")  // 3.14

// Concept 8 — Template Literals

// const name = "hammad";
// const age = 23;
// const city = "Rahim yar khan";

// const msg1 =
//   "My name is " + name + ", and i am " + age + " years old " + "from " + city;
// const msg2 = `My name is ${name}, i am ${age} years old from ${city}`;

// console.log(msg2);

// const msg3 = `Next year I'll be ${age + 1}`;
// const msg4 = `Is adult: ${age >= 18 ? "Yes" : "No"}`;
// const msg5 = `${name.toUpperCase()} from ${city.toLowerCase()}`;

// // Multi-line strings
// const html = `
//   <div class="user">
//     <h1>${name}</h1>
//     <p>Age: ${age}</p>
//   </div>
// `;
// console.log(html);

// Problem #1

// 1.var a=10;
// var a=20;
// console.log(a);// Prints 20 bcz variables accepts re-declaration so thats why

// 2.let b=10;
// let b=20; //Gives error bcz let does not allow re-declarations

// 3.const c = 30; console.log(typeof c); // Type is number .

// 4.const user = { name: "Ali" }; user.name = "Sara"; console.log(user.name); //Sara bcz name will reassign in object property.

// Problem # 2

// Part A — truthy/falsy

// console.log(Boolean(0)); // false

// console.log(Boolean("")); // false

// console.log(Boolean("0")); //true

// console.log(Boolean([])); // true

// console.log(Boolean(null)); // false

// console.log(Boolean(undefined)); // false

// console.log(Boolean(-1)); //true

//  Part B — typeof console.log(typeof null); // object

//  console.log(typeof []); // object

//  console.log(typeof NaN); // number

//  console.log(typeof undefined); // undefined

// // Part C — predict the if/else result

// const score = 0; if (score) { console.log("Has score"); } else { console.log("No score");} // else will run bcz of 0 in if does not runs the condition
