// // Q1 — Predict every output
// function test() {
//     console.log(a);  // Q1a => undefined
//     console.log(b);  // Q1b=>Refrence error TDZ
//     console.log(c);  // Q1c=> Refrence error TDZ

//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// test();

// // Q2 — Scope chain — what prints?
// const val = "global";

// function level1() {
//     const val = "level1";
//     function level2() {
//         function level3() {
//             console.log(val); // Q2 — which val? =>level1 bcz closest scope
//         }
//         level3();
//     }
//     level2();
// }
// level1();

// // Q3 — Tricky hoisting
// // What prints?
// console.log(typeof foo); // Q3a => undefined
// console.log(typeof bar); // Q3b => function
// console.log(foo()); // Q3c => type error bcz foo is not a function.

// var foo = function () {
//   return "foo expression";
// };
// function bar() {
//   return "bar declaration";
// }

// Q4 — Call stack order
// Write exact output in order
// function start() {
//   console.log("start"); //1.=> Start
//   middle();
//   console.log("start done"); //4.start done
// }
// function middle() {
//   console.log("middle"); //2.middle
//   end();
// }
// function end() {
//   console.log("end"); //3.end
// }
// start();

// // Q5 — Find ALL problems — how many and what are they?
// function broken() {
//   console.log(x); //=>undefined
//   console.log(y); //=>Refrence error TDZ
//   console.log(z); //=>Refrence error TDZ
//   console.log(double(5)); // Type error double is not a function
//   console.log(triple(5)); // 15

//   var x = 1;
//   let y = 2;
//   const z = 3;
//   var double = (n) => n * 2;
//   function triple(n) {
//     return n * 3;
//   }
// }
// broken();

// Q6 — Write from scratch
// A function that demonstrates ALL of these in one:
// 1. A var variable accessed before declaration
// 2. A function declaration called before definition
// 3. A let variable that causes TDZ error
// Show all 3 behaviors with console.log
// and comments explaining each output

// function DemoAll() {
//   console.log(myvar); //=> undefined bcz of var is hoisted
//   //   console.log(mylet); //=> Refrence error bcz let is not accessible before intilization
//   console.log(sayHello()); //=>//This is me function bcz function declarations are fully hoisted

//   var myvar = "i am var";
//   let mylet = "i am let";
//   function sayHello() {
//     console.log("This is me function");
//   }

// }
// DemoAll();
// // Q7 — Real scenario
// // This code has scope and hoisting bugs
// // Fix ALL bugs and explain each fix

const CONFIG = {
  taxRate: 0.17,
  discount: 0.1,
};

function calculateFinal(price) {
  //   console.log(result); // This gives error bcz const is not accessible before initialization.        // Bug 1
  // i have remove this console log of result bcz this cause error
  if (price > 10000) {
    var bigOrder = true;
  }

  const result = price - price * CONFIG.discount + price * CONFIG.taxRate;

  if (bigOrder) {
    // Bug 2 => works bcz var leaked out from block.
    // result = result * 0.95; // Bug 3=> same variable use as bcz above const result this is not works and gives error.Not allowed assignment to constant variable.
    let result2 = result * 0.95;
  }

  return result;
}
console.log(calculateFinal(15000));
