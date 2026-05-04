// Again starting to strong concepts

// Difference between let , var and const

// Var is function scoped and can be redeclared and updated and gets hoisted.
var x = 10;
console.log(x); // 10
var x = 20;
console.log(x); //20

// let is a blocked scope and can be reassigned but not be redeclared.
let name = "Hammad";
console.log(name);
name = "Choudhary";
console.log(name);

let students = { name: "Hammad", age: 23 };
console.log(students);

students.name = "Ali";
console.log(students);

// const is a blocled scope and canot be redeclared and not reassigned but if it is an object or array we can change the properties of that object or array.
const name2 = "Hammad";
console.log(name2);
// name2 = "Ali"; // This will throw an error
const numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5);
numbers5.push(6);
console.log(numbers5);
numbers5.pop();
console.log(numbers5);

// Data Types in Javascript
// 1.permitive data types (Stored by Value)
// 1.String
const namestr = "Hammad";
console.log(namestr);
//2.Number
const numnm = 33;
console.log(numnm);
//3.Boolean
const isStudent = true;
console.log(isStudent);
// 4.Null
const nullValue = null;
console.log(nullValue);
// 5.Undefined
let undefindValue;
console.log(undefindValue);

// 2.Non-Permitive and Refrence data types (Stored by refrence)
//1.Object
const std1 = { name: "Abdul", age: 22 };
const std2 = std1;
std2.name = "bhalu";
console.log(std1);

// 2.Array
const arr = [1, 2, 3, 4, 5];
console.log(arr);
