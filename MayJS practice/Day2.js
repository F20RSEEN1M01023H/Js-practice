// Operators
// 1. Arthematic operators(+,-,*,/,%,**)
// let a = 10;
// let b = 5;
// console.log(a + b); // 15
// console.log(a - b); //5
// console.log(a * b); //50
// console.log(a / b); //2
// console.log(a % b); //0
// console.log(a ** b); //100000

// // Trap 1:
// console.log(a++);
// console.log(a);
// console.log(++b);

// 2.Assignment operators(=,+=,-=,*=,/=,%=)

// let c = 10;
// c += 5; //15
// console.log(c);
// c -= 5; //10
// console.log(c);
// c *= 5; //50
// console.log(c);
// c /= 5;
// c = c / 5; //10
// console.log(c);
// c %= 5;
// c = c % 5; //2
// console.log(c);

// 3. Comparison operators(==, ===, !=, !==, > , <, <=, >=)

// const num1 = 30;
// const num2 = "30";
// console.log(num1 > num2); // false
// console.log(num1 < num2); // false
// console.log(num1 >= num2); // true
// console.log(num1 <= num2); // true
// console.log(num1 == num2); // true
// console.log(num1 === num2); // false
// console.log(num1 != num2); // false
// console.log(num1 !== num2); // true

// // trap 2:
// console.log("b" > "a"); // true
// console.log("10" > "9"); // false
// console.log(10 > 9); // true

// 4.Logical operators(&&, ||, !)

// const x = true;
// const y = false;
// console.log(x && y); // false
// console.log(x || y); // true
// console.log(!x); // false
// console.log(!y); // true

// console.log(!true)           // false
// console.log(!false)          // true
// console.log(!0)              // true  — 0 is falsy, !falsy = true
// console.log(!"")             // true
// console.log(!"hello")        // false — "hello" is truthy

// const username = null;
// const display = username || "Guest";  // "Guest"

// const isLoggedIn = true;
// const role = "admin";
// isLoggedIn && role === "admin" && openDashboard(); // runs only if both true

// Concept 4 — Ternary Operator

// Syntax: condition ? valueIfTrue : valueIfFalse

// const age = 20;
// const result = age >= 18 ? "Adult" : "Minor";
// console.log(result);  // "Adult"

// // Instead of this:
// let label;
// if (age >= 18) {
//     label = "Adult";
// } else {
//     label = "Minor";
// }

// // Write this:
// const label2 = age >= 18 ? "Adult" : "Minor";

// // Real use — inside template literals
// console.log(`User is ${age >= 18 ? "an adult" : "a minor"}`);

// // Nested ternary — readable limit
// const score = 85;
// const grade = score >= 90 ? "A"
//             : score >= 80 ? "B"
//             : score >= 70 ? "C"
//             : "F";
// console.log(grade); // "B"

// Concept 5 — ?? Nullish Coalescing

// This is new and very important. It looks like || but behaves differently:
// js// || falls back on ANY falsy value (0, "", false, null, undefined)
// console.log(0 || "default")      // "default" ← wrong if 0 is valid
// console.log("" || "default")     // "default" ← wrong if "" is valid
// console.log(null || "default")   // "default" ← correct
// console.log(false || "default")  // "default" ← wrong if false is valid

// // ?? falls back ONLY on null or undefined — nothing else
// console.log(0 ?? "default")      // 0         ← keeps 0
// console.log("" ?? "default")     // ""        ← keeps empty string
// console.log(false ?? "default")  // false     ← keeps false
// console.log(null ?? "default")   // "default" ← null triggers fallback
// console.log(undefined ?? "default") // "default" ← undefined triggers fallback

// // Real world — user settings
// const userVolume = 0;  // user set volume to 0 intentionally

// const volume = userVolume || 50;   // 50 ← WRONG, ignores valid 0
// const volume2 = userVolume ?? 50;  // 0  ← CORRECT, respects 0

// Concept 6 — ?. Optional Chaining()

// Safely access nested properties without crashing:
// const user = {
//     name: "Ali",
//     address: {
//         city: "Lahore"
//     }
// };

// // Without optional chaining — crashes if address is missing
// const city = user.address.city;        // "Lahore" — works here
// const zip = user.address.zipcode;      // undefined — no crash but undefined
// const phone = user.contact.phone;      // TypeError: Cannot read properties of undefined

// // With optional chaining — never crashes
// const city2  = user?.address?.city;    // "Lahore"
// const phone2 = user?.contact?.phone;   // undefined — safe, no crash
// const zip2   = user?.address?.zipcode; // undefined — safe

// // Works on methods too
// const name = user?.getName?.();        // undefined — safe if method missing

// // Combined with ?? for clean defaults
// const city3 = user?.address?.city ?? "City not found";
// console.log(city3);  // "Lahore"

// const phone3 = user?.contact?.phone ?? "No phone";
// console.log(phone3); // "No phone"

// Concept 7 — if / else & Guard Clauses

// Basic if/else
// const age = 20;

// if (age >= 18) {
//     console.log("Adult");
// } else if (age >= 13) {
//     console.log("Teenager");
// } else {
//     console.log("Child");
// }

// // Guard clause — exit early instead of nesting
// // MESSY — deeply nested
// function processUser(user) {
//     if (user) {
//         if (user.isActive) {
//             if (user.age >= 18) {
//                 console.log("Process:", user.name);
//             }
//         }
//     }
// }

// // CLEAN — guard clauses, flat code
// function processUser(user) {
//     if (!user) return;           // exit early
//     if (!user.isActive) return;  // exit early
//     if (user.age < 18) return;   // exit early

//     console.log("Process:", user.name);  // only runs if all pass
// }
