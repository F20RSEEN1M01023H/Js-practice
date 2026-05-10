// Java Script core concepts and logic building

//Var VS Let VS Const
// #Rule => 01: Re-declaration
// Var

var name = "hammad";
var name = "Ali";
// console.log(name); // Allowed because variable allows re declaration

// Let
let book = "English";
// let book = "Urdu";
// console.log(book); //syntax error because book is already declared and let is not allowing re-decalaration.

// Const
const age = 23;
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
