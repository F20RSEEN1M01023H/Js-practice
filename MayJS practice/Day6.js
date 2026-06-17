// *****************Closures ****************

// for (var i = 0; i < 4; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0);
// }

// 1:What prints and why?
// 4,4,4,4 bcz of var and the loop ends on the 4 so prints 4 for each.

// 2:for (let i = 0; i < 4; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0);
// }
// now it print (0,1,2,3)

// for (var i = 0; i < 4; i++) {
//   (setTimeout(function (capturedI) {
//     console.log(capturedI);
//   }, 0),
//     i);
// }

// So this also prints 0 ,1 ,2,3,4 bcz having seprate independent

// Problem 3 — Build from scratch

// Write makeCounter() that returns an object with:
// increment() — adds 1
// decrement() — subtracts 1
// reset()     — sets back to 0
// getValue()  — returns current count
// The count variable must be private — not accessible outside

// function makeCounter() {
//   let count = 0;
//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     reset() {
//       count = 0;
//     },
//     getValue() {
//       return count;
//     },
//   };
// }
// // Test it like this:
// const counter = makeCounter();
// console.log(counter.getValue()); // 0
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // 3
// counter.decrement();
// console.log(counter.getValue()); // 2
// counter.reset();
// console.log(counter.getValue()); // 0
// console.log(counter.count); // undefined — private

// Problem 4 — Predict output
// What prints? Explain each line
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(3)); // 8
// console.log(add5(7)); // 12
// console.log(add10(3)); // 13
// console.log(add10(7)); // 17
// console.log(add5(add10(2))); // 17 ← tricky

// Problem 5 — Find the bug
// This code has a closure bug — find it and fix it
// function makeGreeter(name) {
//   let message = "Hello";

//   return {
//     greet() {
//       return message + " " + name;
//     },
//     setMessage(newMessage) {
//       let message = newMessage; // bcz let is the blocked scope and only exist mesage in the set message not outside.
//     },
//   };
// }
// const greeter = makeGreeter("Ali");
// console.log(greeter.greet()); // "Hello Ali"
// greeter.setMessage("Hi");
// console.log(greeter.greet());// "Hello Ali" bcz gets the closest scope as well so thats why.

// Problem 6 — Write from scratch
// Build a function 'makePocket'
// Returns an object with:
// add(item)    — adds item to private list
// remove(item) — removes item from private list
// getAll()     — returns copy of private list
// count()      — returns number of items
// Private list must NOT be accessible directly

// function makePocket() {
//   let privateList = [];
//   return {
//     add(item) {
//       privateList.push(item);
//     },
//     remove(item) {
//       privateList = privateList.filter((i) => i !== item);
//     },
//     getAll(item) {
//       return [...privateList];
//     },
//     count(item) {
//       return privateList.length;
//     },
//   };
// }

// const pocket = makePocket();
// pocket.add("phone");
// pocket.add("wallet");
// pocket.add("keys");
// console.log(pocket.count()); // 3
// console.log(pocket.getAll()); // ["phone", "wallet", "keys"]
// pocket.remove("wallet");
// console.log(pocket.getAll()); // ["phone", "keys"]
// console.log(pocket.items); // undefined — private

// Problem 7 — Memoize
// Build memoize(fn) from scratch
// Caches results so same input never calculated twice
// Works for any single-argument function

// function memoize(fn) {
//   const cache = {};
//   return function (n) {
//     if (cache[n] !== undefined) {
//       console.log("from caches");
//       return cache[n];
//     }
//     const result = fn(n);
//     cache[n] = result;
//     return result;
//   };
// }

// const memoSquare = memoize((n) => n * n);
// console.log(memoSquare(4)); // calculates: 16
// console.log(memoSquare(4)); // from cache: 16
// console.log(memoSquare(5)); // calculates: 25
// console.log(memoSquare(5)); // from cache: 25

// This not much understand i have help from your learning code

// Problem 8 — Senior interview question
// What prints? Explain exactly why
function outer() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function getCount() {
    return count;
  }

  return { increment, decrement, getCount };
}

const obj1 = outer();
const obj2 = outer();

console.log(obj1.increment()); // 1
console.log(obj1.increment()); // 2
console.log(obj2.increment()); // 1
console.log(obj1.getCount()); // 2
console.log(obj2.getCount()); // 1
obj1.decrement();
console.log(obj1.getCount()); // 1
console.log(obj2.getCount()); // 1
