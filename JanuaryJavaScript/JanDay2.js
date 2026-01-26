// let fruits = ["appple", "banana", "mango", "orange"];
// // console.log(fruits);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(numbers);

// let mixedArray = [1, "hammad", true, null, { name: "hammad", age: 23 }];
// // console.log(mixedArray);

// let usingConstructor = new Array("one", "two", "three", "four");
// // console.log(usingConstructor);

// let nestedArray = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [true, false, true],
// ];
// // console.log(nestedArray);

// let emptyArray = [];
// // console.log(emptyArray);

// let largeArray = new Array(100).fill(10);
// // console.log(largeArray);

// let sparseArray = [];
// sparseArray[0] = "start";
// sparseArray[5] = "middle";
// sparseArray[10] = "end";
// // console.log(sparseArray);

// // Array indexing
// // console.log(fruits[0]);
// // console.log(numbers[4]);
// // console.log(mixedArray[3]);
// // console.log(nestedArray[1][2]);

// // Array Length
// // console.log(fruits.length);

// //Modifying Arrays
// fruits[1] = "grapes";
// // console.log(fruits);

// // Basic Arrays

// let colors = ["red", "blue", "white", "orange", "purpule"];

// // Push
// colors.push("NavyBlue");
// // console.log(colors);

// // Pop
// colors.pop("");
// // console.log(colors);

// //Unshift
// colors.unshift("black");
// // console.log(colors);

// //Shift
// colors.shift();
// // console.log(colors);

// // Splice
// colors.splice(2, 1, "yellow");
// // console.log(colors);

// colors.splice(2, 0, "yellow");
// // console.log(colors);

// colors.splice(3, 2);
// // console.log(colors);

// // Slice
// let citrus = fruits.slice(1, 3);
// console.log(citrus);

// let simpleColors = colors.slice(2, 4);
// console.log(simpleColors);

// //Concat
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 10];
// let merged = num1.concat(num2);
// console.log(merged);

// // indexOf
// console.log(fruits.indexOf("banana"));
// console.log(colors.indexOf("yellow"));
// console.log(merged.indexOf(7));

// //Includes
// console.log(fruits.includes("mango"));
// console.log(colors.includes("pink"));

// //Reverse
// let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// counting.reverse();
// console.log(counting);

// //Join
// let words = ["Hello", "world", "this", "is", "JavaScript"];
// let sentence = words.join(" ");
// console.log(sentence);

// // Fill
// let filledArray = new Array(5).fill("filled");
// console.log(filledArray);

// // Sort
// let unsortedNumbers = [5, 2, 9, 1, 5, 6];
// unsortedNumbers.sort((a, b) => a - b);
// console.log(unsortedNumbers);

// let unsortedFruits = ["banana", "apple", "orange", "mango"];
// unsortedFruits.sort();
// console.log(unsortedFruits);

// // Advance Arrays Methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Map(Transform each element)
// let squared = arr.map((num) => num * num);
// console.log(squared);

// let doubled = arr.map((num) => num * 2);
// console.log(doubled);

// let toStrings = arr.map((num) => num.toString());
// console.log(toStrings);

// const users = [
//   { name: "Hammad", age: 23 },
//   { name: "Ali", age: 25 },
//   { name: "Ayesha", age: 22 },
// ];
// let names = users.map((user) => user.name);
// console.log(names);
// let ages = users.map((user) => user.age);
// console.log(ages);

// // Filter (Filter elements based on condition)
// let evens = arr.filter((num) => num % 2 === 0);
// console.log(evens);

// let greaterThanFive = arr.filter((num) => num > 5);
// console.log(greaterThanFive);

// const users2 = [
//   { name: "hammad", age: 23 },
//   { name: "Ali", age: 24 },
//   { name: "Aysha", age: 16 },
// ];
// let adults = users2.filter((user) => user.age >= 18);
// console.log(adults);

// // Filter by string length
// let words2 = ["hi", "hello", "hey", "goodbye"];
// let longWords = words2.filter((word) => word.length > 4);
// console.log(longWords);

// //Reduce array to single value
// let numbering = [1, 2, 3, 4, 5, 6, 7, 8];
// let total = numbering.reduce((total, num) => total + num, 0);
// console.log(total);

// // Find Maximum
// let maximum = numbering.reduce((max, num) => (num > max ? num : max));
// console.log(maximum);

// //Problems practice
// // 1.
// let cities = ["ryk", "lahore", "Islamabad", "peshawar", "quetta"];
// console.log(cities[0]);
// console.log(cities[4]);

// //2.
// console.log(cities.splice(2, 1, "Karachi"));
// console.log(cities);

// // 3.From a nested array [[10,20],[30,40],[50,60]], print 40.
// let nestedArr = [
//   [10, 20],
//   [30, 40],
//   [50, 60],
// ];
// console.log(nestedArr[1][1]);

// // PART 2: push, pop, shift, unshift
// let emptyArr = [];
// emptyArr.push(1);
// emptyArr.push(2);
// emptyArr.push(3);
// console.log(emptyArr);
// emptyArr.pop();
// console.log(emptyArr);

// // Add "start" at the beginning of an array using unshift, then remove it using shift.
// emptyArr.unshift("Start");
// console.log(emptyArr);
// emptyArr.shift();
// console.log(emptyArr);

// // 🔹 PART 3: splice (VERY IMPORTANT)
// let coloredArr = ["red", "blue", "green", "yellow"];
// coloredArr.splice(2, 1);
// console.log(coloredArr);
// coloredArr.splice(2, 0, "black", "white");
// console.log(coloredArr);
// coloredArr.splice(1, 1, "navy");
// console.log(coloredArr);

// // 🔹 PART 4: slice & concat
// let numberedArr = [1, 2, 3, 4, 5, 6];
// let slicedArr = numberedArr.slice(3, 5);
// console.log(slicedArr);

// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "e", "f"];
// let arr3 = ["g", "h", "i"];

// let farr = arr1.concat(arr2).concat(arr3);
// console.log(farr);

// // 🔹 PART 5: indexOf & includes
// let fruitedArr = ["apple", "banana", "mangoe", "orange"];
// let MangoeInc = fruitedArr.includes("mangoe");
// console.log(MangoeInc);

// let givenArr = [5, 10, 15, 20];
// console.log(givenArr.indexOf(15));

// // 🔹 PART 6: reverse, join, fill
// // Reverse a sentence stored as words array.
// let intro = ["software", "Engineer."];
// let reversedArr = intro.reverse();
// console.log(reversedArr);

// // Convert ["JS","is","awesome"] into a single string.
// let JsArr = ["JS", "is", "awesome"];
// console.log(JsArr.join(" "));

// // Create an array of length 7 filled with 0.
// let arrFilled = new Array(7).fill(0);
// console.log(arrFilled);

// // 🔹 PART 7: sort
// // Sort numbers [100, 25, 1, 50, 10] correctly.
// let unsortArr = [100, 25, 1, 50, 10];
// let sortedArr = unsortArr.sort((a, b) => a - b);
// console.log(sortedArr);

// // Sort names alphabetically (case-sensitive).
// let alphabetsArr = ["a", "c", "d", "e", "n", "p", "l", "m", "b", "r", "g"];
// console.log(alphabetsArr.sort());

// // ⭐ ADVANCED ARRAY METHODS (CRITICAL)
// // 🔹 PART 8: map

// // Convert [1,2,3,4] into [10,20,30,40].
// let mapingArr = [1, 2, 3, 4];
// let newarr = mapingArr.map((p) => p * 10);
// console.log(newarr);

// // Convert an array of numbers into strings.
// let str = mapingArr.map((num) => num.toString());
// console.log(str);

// let arrObj = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "bushra", age: 12 },
//   { name: "bilal", age: 16 },
// ];
// let nameArr = arrObj.map((p) => p.name);
// console.log(nameArr);

// // 🔹 PART 9: filter

// // Get all numbers greater than 50.
// let numbArr = [1, 2, 3, 45, 50, 51, 52, 67, 75, 85, 98, 103, 108];
// console.log(numbArr.filter((num) => num > 50));

// // Filter odd numbers from [1–20].
// let numbered = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// console.log(numbered.filter((num) => num % 2 !== 0));

// // From users array, get users whose age is below 18.
// console.log(arrObj.filter((user) => user.age < 18));

// // Filter words having length exactly 4.

// let arrayWords = ["hello", "hey", "how", "hi", "Hammad", "Software Engineer"];
// console.log(arrayWords.filter((word) => word.length > 4));

// // PART 10: reduce (MOST IMPORTANT 🔥)

// // Find the sum of all numbers.
// let nums = [1, 2, 80, 90, 70];
// console.log(`Sum of All Nums: ${nums.reduce((sum, num) => sum + num, 0)}`);

// // Find the product of numbers.
// const product = nums.reduce((acc, curr) => acc * curr, nums[0]);
// console.log(`Product of Nums: ${product}`);

// // Find the maximum number.
// const maxNum = nums.reduce((max, num) => (num > max ? num : max));
// console.log(`Max Value: ${maxNum}`);

// // Count how many numbers are even.
// const evenCount = nums.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     return acc + 1;
//   }
//   return acc;
// }, 0);
// console.log(evenCount);

// const evenCount2 = nums.reduce(
//   (acc, curr) => (curr % 2 === 0 ? acc + 1 : acc),
//   0,
// );
// console.log(evenCount2);

// // Convert ["a","b","c"] into "abc" using reduce.
// // in reduce you check what you want in the end
// const letters = ["a", "b", "c", "d"];
// const str2 = letters.reduce((acc, curr) => {
//   return acc + curr;
// }, "");
// console.log(str2);

// // problems to solve
// // 1️⃣ Sum of odd numbers
// let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const addedArr = numbs.reduce((acc, curr) => {
//   if (curr % 2 !== 0) {
//     return acc + curr;
//   }
//   return acc;
// }, 0);
// console.log(addedArr);

// // const countedNum = numbs.reduce((acc, curr) => (curr > 5 ? acc + 1 : acc), 0);
// // console.log(countedNum);

// const countedNum = numbs.reduce((acc, curr) => {
//   if (curr > 5) {
//     return acc + 1;
//   }
//   return acc;
// }, 0);
// console.log(countedNum);

// // Join characters into a word
// const charArr = ["J", "S", " ", "R", "o", "c", "k", "s"];
// const strArr = charArr.reduce((acc, curr) => {
//   return acc + curr;
// }, "");

// console.log(strArr);

// // 4️⃣ Find the minimum number
// let minArr = [30, 5, 9, 100, 2];
// const minimum = minArr.reduce(
//   (min, curr) => (curr < min ? curr : min),
//   Infinity,
// );
// console.log(minimum);

// let simpleNum = [1, 2, 3, 4, 5, 6];
// // const squaredArr = simpleNum.reduce(
// //   (acc, curr) => (curr % 2 === 0 ? (acc.push(curr * curr), acc) : acc),
// //   [],
// // );
// // console.log(squaredArr);

// const squaredArr = simpleNum.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     return (acc.push(curr * curr), acc);
//   }
//   return acc;
// }, []);
// console.log(squaredArr);

// // 6️⃣ Remove duplicate values
// let dup = [1, 2, 2, 3, 4, 4, 5];
// const removedup = dup.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(removedup);

// // 🔹 4. find() - Find first matching element
// let numbersfind = [5, 12, 8, 130, 44];
// const found = numbersfind.find((num) => num > 10);
// console.log(found);

// //Not found
// const notFound = numbersfind.find((num) => num > 200);
// console.log(notFound);

// let findusers = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Ahmed" },
// ];
// const foundUsers = findusers.find((user) => user.id === 2);
// console.log(foundUsers);

// let usersprob = [
//   { name: "Ali", age: 22, role: "user" },
//   { name: "Sara", age: 30, role: "admin" },
//   { name: "Ahmed", age: 28, role: "user" },
//   { name: "Zara", age: 35, role: "admin" },
// ];
// const foundprob = usersprob.find(
//   (user) => user.age > 25 && user.role === "admin",
// );
// console.log(foundprob);

// let products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Phone", price: 500, inStock: false },
//   { name: "Mouse", price: 50, inStock: true },
//   { name: "Keyboard", price: 80, inStock: false },
//   { name: "USB Cable", price: 10, inStock: true },
// ];
// const findProd = products.find((p) => p.price < 100 && p.inStock);
// console.log(findProd);

// let students = [
//   { name: "Ali", scores: [50, 65, 70] },
//   { name: "Sara", scores: [88, 76, 90] },
//   { name: "Ahmed", scores: [60, 85, 45] },
// ];
// const foundstud = students.find((stud) =>
//   stud.scores.some((score) => score > 80),
// );
// console.log(foundstud);

// let fIndex = [1, 12, 15, 34, 67, 78];
// const foundIndex = fIndex.findIndex((num) => num > 20);
// console.log(foundIndex);

// const notFoundIndex = fIndex.findIndex((num) => num > 100);
// console.log(notFoundIndex);

// //  6. forEach() - Execute function for each element
// let forColors = ["red", "blue", "green"];

// // Basic forEach
// forColors.forEach((color, index) => {
//   console.log(`${index}:${color}`);
// });

// // Note: forEach doesn't return anything!
// let result = forColors.forEach((color) => color.toUpperCase());
// console.log(result); // undefined

// let fresult = forColors.map((color) => color.toUpperCase());
// console.log(fresult);

// // 🔹 7. some() - Check if at least ONE passes test
// let Somenumbers = [1, 2, 3, 4, 5, 6, 7];
// let fSomeResult = Somenumbers.some((num) => num % 2 === 0);
// console.log(fSomeResult);

// // Is there any number > 10?
// const greaterNum = Somenumbers.some((num) => num > 10);
// console.log(greaterNum);

// let someUsers = [
//   { name: "Ali", role: "user" },
//   { name: "Sara", role: "admin" },
//   { name: "Ahmed", role: "user" },
// ];
// const fsomeUser = someUsers.some((user) => user.role === "admin");
// console.log(fsomeUser);

// // 🔹 8. every() - Check if ALL pass test
// let evenNums = [2, 4, 6, 8, 10];
// const everyOutput = evenNums.every((num) => num % 2 === 0);
// console.log(everyOutput);

// //All numbers greater than 5
// const greaterNums = evenNums.every((num) => num > 5);
// console.log(greaterNums);

// // 🔹 9. sort() - Sort array

// let sortNums = [1, 2, 3, 3, 5, 6, 8, 9, 3, 6, 8, 5, 9];
// //Ascending
// const sortArr = sortNums.sort((a, b) => a - b);
// console.log(sortArr);

// // Decending
// const sortArrDec = sortNums.sort((a, b) => b - a);
// console.log(sortArrDec);

// // Sort strings (alphabetically)
// let strnames = ["Zain", "Ali", "Sara", "Ahmed"];
// const sortString = strnames.sort();
// console.log(sortString);

// let productsSort = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Monitor", price: 25000 },
// ];
// const sortedProducts = productsSort.sort((a, b) => a.price - b.price);
// console.log(sortedProducts);

// // 🔹 10. flat() - Flatten nested arrays
// let nested = [1, 2, [3, 4], [5, [6, 7]], [8, 9], [10, 11]];
// console.log(nested.flat());
// console.log(nested.flat(2));

// // 🔹 11. flatMap() - Map then flatten

// let sentences = ["Hello World", "JavaScript Rocks"];
// const wordsOutput = sentences.flatMap((sentence) => sentence.split(" "));
// console.log(wordsOutput);

// // 🎯 CHECKPOINT 2: Advanced Methods Practice
// // Challenge: Build Data Processing System

// let studentsArr = [
//   { name: "Ali", marks: 85, attendance: 90 },
//   { name: "Sara", marks: 92, attendance: 95 },
//   { name: "Ahmed", marks: 78, attendance: 85 },
//   { name: "Fatima", marks: 88, attendance: 92 },
//   { name: "Zain", marks: 65, attendance: 70 },
// ];

// // 1. Get all names
// let namestudent = studentsArr.map((user) => user.name);
// console.log(namestudent);

// // 2. Get students who passed (marks >= 80)
// let passed = studentsArr.filter((user) => user.marks >= 80);
// console.log(passed);

// // 3. Calculate average marks
// let avgMarks =
//   studentsArr.reduce((acc, curr) => curr.marks + acc, 0) / students.length;
// console.log(avgMarks);

// // 4. Find student with highest marks
// let topStudent = studentsArr.reduce(
//   (max, curr) => (curr.marks > max.marks ? curr : max),
//   studentsArr[0],
// );
// console.log(topStudent);

// // 5. Check if any student has perfect attendance (100)
// let hasPerfect = studentsArr.some((user) => user.attendance === 100);
// console.log(hasPerfect);

// // 6. Check if all students passed (marks >= 60)
// let allPassed = studentsArr.every((user) => user.marks >= 60);
// console.log(allPassed);

// Loops

// Basic for loops
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// Loop through arrays
let fruits = ["apple", "banana", "orange", "mangoe"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Loop Backwards
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 🟢 Problem 1: Sum of Even Numbers

// Write a for loop to calculate the sum of even numbers from 1 to 20.
let sum = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// 🟢 Problem 2: Count Vowels

// Given a string:

let word = "javascript";
let Vowels = "aeiou";

for (let i = 0; i <= word.length; i++) {
  console.log(word);
}
