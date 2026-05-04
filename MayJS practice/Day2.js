// Operators
// 1. Arthematic operators(+,-,*,/,%,**)
const a = 10;
const b = 5;
console.log(a + b); // 15
console.log(a - b); //5
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0
console.log(a ** b); //100000

// 2.Assignment operators(=,+=,-=,*=,/=,%=)
let c = 10;
c += 5; //15
console.log(c);
c -= 5; //10
console.log(c);
c *= 5; //50
console.log(c);
c /= 5;
c = c / 5; //2
console.log(c);
c %= 5;
c = c % 5; //0
console.log(c);

// 3. Comparison operators(==, ===, !=, !==, > , <c, <=, >=)
const num1 = 30;
const num2 = "30";
console.log(num1 > num2); // false
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2);
console.log(num1 == num2); // true
console.log(num1 === num2); // false
console.log(num1 != num2); // false
console.log(num1 !== num2); // true

// 4.Logical operators(&&, ||, !)
const is