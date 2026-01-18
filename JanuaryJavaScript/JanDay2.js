// ************************ Day 2 January ***********************
// Arrays Basics
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(`Array of Fruits : ${fruits} , Length:${fruits.length}`);
const numbers = [10, 12, 13, 40, 50, 600];
console.log(`Array of Numbers : ${numbers}, Length:${numbers.length}`);
const mixedArrays = [1, "hello", true, null, { name: "John" }, [1, 2, 3]];
console.log(`Mixed Arrays : ${mixedArrays}, Length:${mixedArrays.length}`);

// Arrays Indexing
console.log(`First Element of fruits: ${fruits[0]}`);
console.log(`Last Element of fruits: ${fruits[fruits.length - 1]}`);
console.log(`Second Element of numbers: ${numbers[1]}`);
console.log(`Third Element of mixedArrays: ${mixedArrays[2]}`);

// Basic Methods
// Adding Elements
fruits.push("Grapes");
fruits.unshift("Strawberry");
console.log(`Fruits after adding elements: ${fruits}`);

// Removing Elements
fruits.pop();
fruits.shift();
console.log(`Arrays after removing Elements: ${fruits}`);

//Splice Method
// Add remove at any position
fruits.splice(2, 0, "Pineapple"); // Adding at index 2
console.log(`Fruits after splice add: ${fruits}`);
fruits.splice(2, 1); // Removing at index 3
console.log(`Fruits after splice remove: ${fruits}`);

// Slice Method
// copy a portion of an array and does not modify the original array
const citrusFruits = fruits.slice(1, 3);
console.log(`Citrus Fruits (sliced): ${citrusFruits}`);
console.log(`Original Fruits after slice: ${fruits}`);

//Concat Method(Addig 2 Arrays)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = arr1.concat(arr2);
console.log(`Combined Array: ${combinedArray}`);

// IndexOf Method and Includes Method
const indexofMango = fruits.indexOf("Mango");
console.log(`Index of Mango: ${indexofMango}`);
// const hasBanana = fruits.includes("Banana");
// console.log(`Include method to see you have banana: ${hasBanana}`);
console.log(
  `Include method to see you have banana: ${fruits.includes("Gauvava")}`,
);

// Reverse Method
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number2.reverse();
console.log(number2);

// Join Method
const words = ["Hello", "World", "from", "JavaScript"];
console.log(`Array to string with join: ${words.join(" ")}`);
