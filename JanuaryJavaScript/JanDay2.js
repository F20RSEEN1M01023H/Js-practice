let fruits = ["appple", "banana", "mango", "orange"];
// console.log(fruits);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

let mixedArray = [1, "hammad", true, null, { name: "hammad", age: 23 }];
// console.log(mixedArray);

let usingConstructor = new Array("one", "two", "three", "four");
// console.log(usingConstructor);

let nestedArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false, true],
];
// console.log(nestedArray);

let emptyArray = [];
// console.log(emptyArray);

let largeArray = new Array(100).fill(10);
// console.log(largeArray);

let sparseArray = [];
sparseArray[0] = "start";
sparseArray[5] = "middle";
sparseArray[10] = "end";
// console.log(sparseArray);

// Array indexing
// console.log(fruits[0]);
// console.log(numbers[4]);
// console.log(mixedArray[3]);
// console.log(nestedArray[1][2]);

// Array Length
// console.log(fruits.length);

//Modifying Arrays
fruits[1] = "grapes";
// console.log(fruits);

// Basic Arrays

let colors = ["red", "blue", "white", "orange", "purpule"];

// Push
colors.push("NavyBlue");
// console.log(colors);

// Pop
colors.pop("");
// console.log(colors);

//Unshift
colors.unshift("black");
// console.log(colors);

//Shift
colors.shift();
// console.log(colors);

// Splice
colors.splice(2, 1, "yellow");
// console.log(colors);

colors.splice(2, 0, "yellow");
// console.log(colors);

colors.splice(3, 2);
// console.log(colors);

// Slice
let citrus = fruits.slice(1, 3);
console.log(citrus);

let simpleColors = colors.slice(2, 4);
console.log(simpleColors);

//Concat
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
let merged = num1.concat(num2);
console.log(merged);

// indexOf
console.log(fruits.indexOf("banana"));
console.log(colors.indexOf("yellow"));
console.log(merged.indexOf(7));

//Includes
console.log(fruits.includes("mango"));
console.log(colors.includes("pink"));

//Reverse
let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
counting.reverse();
console.log(counting);

//Join
let words = ["Hello", "world", "this", "is", "JavaScript"];
let sentence = words.join(" ");
console.log(sentence);

// Fill
let filledArray = new Array(5).fill("filled");
console.log(filledArray);

// Sort
let unsortedNumbers = [5, 2, 9, 1, 5, 6];
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers);

let unsortedFruits = ["banana", "apple", "orange", "mango"];
unsortedFruits.sort();
console.log(unsortedFruits);

// Advance Arrays Methods

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map(Transform each element)
let squared = arr.map((num) => num * num);
console.log(squared);

let doubled = arr.map((num) => num * 2);
console.log(doubled);

let toStrings = arr.map((num) => num.toString());
console.log(toStrings);

const users = [
  { name: "Hammad", age: 23 },
  { name: "Ali", age: 25 },
  { name: "Ayesha", age: 22 },
];
let names = users.map((user) => user.name);
console.log(names);
let ages = users.map((user) => user.age);
console.log(ages);

// Filter (Filter elements based on condition)
let evens = arr.filter((num) => num % 2 === 0);
console.log(evens);

let greaterThanFive = arr.filter((num) => num > 5);
console.log(greaterThanFive);

const users2 = [
  { name: "hammad", age: 23 },
  { name: "Ali", age: 24 },
  { name: "Aysha", age: 16 },
];
let adults = users2.filter((user) => user.age >= 18);
console.log(adults);

// Filter by string length
let words2 = ["hi", "hello", "hey", "goodbye"];
let longWords = words2.filter((word) => word.length > 4);
console.log(longWords);

//Reduce array to single value
let numbering = [1, 2, 3, 4, 5, 6, 7, 8];
let total = numbering.reduce((total, num) => total + num, 0);
console.log(total);

// Find Maximum
let maximum = numbering.reduce((max, num) => (num > max ? num : max));
console.log(maximum);

//Problems practice
// 1.
let cities = ["ryk", "lahore", "Islamabad", "peshawar", "quetta"];
console.log(cities[0]);
console.log(cities[4]);

//2.
console.log(cities.splice(2, 1, "Karachi"));
console.log(cities);

// 3.From a nested array [[10,20],[30,40],[50,60]], print 40.
let nestedArr = [
  [10, 20],
  [30, 40],
  [50, 60],
];
console.log(nestedArr[1][1]);

// PART 2: push, pop, shift, unshift
let emptyArr = [];
emptyArr.push(1);
emptyArr.push(2);
emptyArr.push(3);
console.log(emptyArr);
emptyArr.pop();
console.log(emptyArr);

// Add "start" at the beginning of an array using unshift, then remove it using shift.
