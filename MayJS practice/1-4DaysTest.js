// ======= DAY 1 — Variables & Types =======

// // Q1 — What prints?
// const a = null;
// const b = undefined;
// const c = "0";
// const d = 0;

// console.log(typeof a); //Object
// console.log(typeof b); //undefined
// console.log(Boolean(c)); //True
// console.log(Boolean(d)); //false
// console.log(a ?? "fallback"); //Fallback
// console.log(d ?? "fallback"); //0
// console.log(d || "fallback"); //fallback
// console.log(a === b); //False
// console.log(a == b); //True

// // ======= DAY 2 — Operators =======

// // Q2 — What prints?
// const user = {
//   name: "Ali",
//   address: null,
// };
// console.log(user?.address?.city ?? "No city"); //No city
// console.log(user?.phone ?? "No phone"); //No phone

// const age = 17;
// const score = 0;
// console.log(age >= 18 && score > 0); //false
// console.log(age >= 18 || score > 0); //false
// console.log(age >= 18 ? "Adult" : "Minor"); //Minor

// Q3 — Fix the bug
// function getLabel(value) {
//   if (value == null) return "Empty";
//   if (value < 0) return "Negative";
//   return "Value: " + value;
// }
// console.log(getLabel(0)); //Value:0
// console.log(getLabel(null)); // Empty
// console.log(getLabel(undefined)); //Value:undefined
// // Bug: getLabel(0) should print "Value: 0" but doesn't
// // Fix it

// ======= DAY 3 — Loops =======

// // Q4 — What prints?
// for (let i = 0; i < 6; i++) {
//   if (i % 2 === 0) continue;
//   if (i === 5) break;
//   console.log(i); //1,3
// }

// // Q5 — Write from scratch
// // Loop over this array
// // Build new array with only names of active users
// // whose age is 18 or above
// // Use for...of only — no array methods
// const users = [
//   { name: "Ali", age: 17, active: true },
//   { name: "Sara", age: 22, active: true },
//   { name: "Ahmed", age: 19, active: false },
//   { name: "Zara", age: 25, active: true },
//   { name: "Bilal", age: 16, active: true },
// ];

// const activeUsers = [];
// for (const user of users) {
//   if (user.active && age>=18) {
//     activeUsers.push(user.name);
//   }
// }
// console.log(activeUsers);

// // Expected: ["Sara", "Zara"]

// // ======= DAY 4 — Functions =======

// // Q6 — Write all 3
// // // A pure function 'discount'
// // // Takes price and percent
// // // Returns discounted price
// // // discount(1000, 10) → 900
// // // discount(500, 20)  → 400
// function discount(price, percent) {
//   return price - (price * percent) / 100;
// }
// console.log(discount(1000, 10));

// // A rest function 'sumAll'
// // Takes any number of arguments
// // Returns their sum
// function sumAll(...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(sumAll(1, 2, 3, 4, 5));

// // A HOF 'applyDiscount'
// // Takes array of prices and a discount function
// // Returns new array with discounted prices
// // applyDiscount([1000,2000,500], p => p * 0.9)
// // → [900, 1800, 450]

// function applyDiscount(prices, disfn) {
//   const result = [];
//   for (const item of prices) {
//     result.push(disfn(item));
//   }
//   return result;
// }
// console.log(applyDiscount([1000, 2000, 500], (p) => p * 0.9));

// // Q7 — What prints? Explain why
// function make(x) {
//   return function (y) {
//     return x * y;
//   };
// }
// const triple = make(3);
// const double = make(2);

// console.log(triple(5)); //15
// console.log(double(5)); //10
// console.log(make(4)(5)); //20

// // ======= COMBINED =======

// // Q8 — Real scenario — uses ALL 4 days
const inventory = [
  { name: "Phone", price: 80000, active: true, quantity: 0 },
  { name: "Laptop", price: 150000, active: true, quantity: 5 },
  { name: "Tablet", price: null, active: false, quantity: 3 },
  { name: "Watch", price: 25000, active: true, quantity: 2 },
  { name: "Earbuds", price: 8000, active: true, quantity: 0 },
];

// // Task A
// // Loop and collect names of items that are:
// // active AND quantity > 0
// // Expected: ["Laptop", "Watch"]

// const ActiveUsers = [];
// for (const each of inventory) {
//   if (each.active && each.quantity > 0) {
//     ActiveUsers.push(each.name);
//   }
// }
// console.log(ActiveUsers);

// // Task B
// // Find total value of active items (price * quantity)
// // If price is null treat it as 0
// // Expected: 150000*5 + 25000*2 + 8000*0 + 80000*0 = 800000

// let total = 0;
// for (const item of inventory) {
//   if (item.active) {
//     total += (item.price ?? 0) * item.quantity;
//     console.log(`${item.price ?? 0}*${item.quantity} = ${total}`);
//   }
// }

// // Task C
// // Write a function applyTax(inventory, taxFn)
// // Returns new array — each item gets a new property 'totalPrice'
// // totalPrice = price * quantity (treat null price as 0)
// // Do not mutate original
// // Call it with: applyTax(inventory, (p, q) => (p ?? 0) * q)

function applyTax(inventory, taxFn) {
  let result = [];
  for (const item of inventory) {
    result.push({
      ...item,
      totalPrice: taxFn(item.price, item.quantity),
    });
  }
  return result;
}
console.log(applyTax(inventory, (p, q) => (p ?? 0) * q));

// Q6 — Hoisting — tricky
// Predict output
var score = 10;
function getScore() {
  console.log(score); // Q6a — careful
  var score = 20;
  console.log(score); // Q6b
}
getScore();
console.log(score); // Q6c
