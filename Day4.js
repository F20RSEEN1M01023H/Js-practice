// Functions

// 1.create a function that greets a user
function greetUser(name) {
  return `Hello ${name}! Welcome to JavaScript`;
}
console.log(greetUser("Hammad Ashraf"));

// 2.create function that adds 2 numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 10));

// 3.create a function that checks if a number is even
function isEven(number) {
  if (number % 2 === 0) {
    return `${true} : This Number is Even`;
  } else {
    return `${false} : This Number is Odd`;
  }
}
console.log(isEven(28));

// Function Expression
// 1.create a function Expression that multiplies two numbers
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

// 2.create a  function that finds t6he larger of the two numbers
const findMax = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(findMax(0, 50));

// Arrow Functions
// 1.convert regular function to arrow function
// function square(num) {
//   return num * num;
// }

// Arrow Function Expression is
const sqaure = (num) => num * num;
console.log(sqaure(5));

// 2.Arrow function that claculates the area of the rectangle
const calculateArea = (length, width) => length * width;
console.log(calculateArea(25, 5));

// 3.Arrow function that checks the string is empty
const isEmpty = (str) => (str.length > 0 ? "false" : "true");
console.log(isEmpty(""));
console.log(isEmpty("hami"));

// Default parameters
// 1.create function that greets with custom message
function customGreet(name, greeting = "Hello") {
  return `${greeting} ${name}!`;
}
console.log(customGreet("Welcome", "hammad"));

// 2.create a function that calculates power
function power(base, exponent = 2) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}
console.log(power(2, 3));

// by Math.power method
function power1(base, exponent = 2) {
  return Math.pow(base, exponent);
}
console.log(power1(5, 2));

//by modern way another method is :
function power2(base, exponent = 2) {
  return base ** exponent;
}
console.log(power2(5, 3));

// Rest Parameters
function sumAll(...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumAll(2, 4, 5, 6, 7, 8));

// 2.find smallest number from any amount of the number
function findMin(...numbers) {
  let smallestnumber = numbers[0];
  for (const num of numbers) {
    if (num < smallestnumber) {
      smallestnumber = num;
    }
  }
  return smallestnumber;
}
console.log(findMin(2, 3, 5, 7, 8, 9, 40, 50, 90));

// Return Values and early return
const canVote = (age) => (age >= 18 ? "Eligible to vote" : "Too young to vote");
console.log(canVote(18));

// function that grade a scores
function getLetterGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score < 60) {
    return "F";
  } else {
    return "Invalid Number";
  }
}
console.log(getLetterGrade(60));

// Functions with Arrays
function getEven(...numbers2) {
  let evens = [];
  for (const num of numbers2) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(getEven(1, 2, 3, 4, 8, 9, 81, 34, 56, 78));

// 2.function that finds the longest word in array
function findLongestWord(words) {
  let largeWord = words[0];
  for (const word of words) {
    if (word.length > largeWord) {
      largeWord = word;
    }
  }
  return largeWord;
}
console.log(findLongestWord([("hammad", "ashraf", "Engrhammadashraf")]));

//function that counts products in stock
function countInStock(products) {
  let count = 0;
  for (const product of products) {
    if (product.inStock == true) {
      count++;
    }
  }
  return count;
}
const testProducts = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true },
];
console.log(countInStock(testProducts));

// Function with objects
// 1.function that creates a user object
function createUser(name, email, age) {
  return { name, email, age };
}
console.log(createUser("hammad", "hamamdchoudharry@gmail.com", 23));

// 2.function that calculates the total price with tax

function calculateTotal(price, taxRate = 0.18) {
  const tax = price * taxRate;
  return {
    subtotal: price,
    tax: tax,
    total: price + tax,
  };
}
console.log(calculateTotal(1200, 0.2));

// Higher order functions
// 1.function that takes another function as parameter
function doTwice(func, value) {
  return [func(value), func(value)];
}
function square(n) {
  return n * n;
}
console.log(doTwice(sqaure, 5));
// i have done this by Ai because i have no idea about the higher order functions so thats why

// function that returns another function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Real World Challenge
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    category: "electronics",
    inStock: true,
  },
  { id: 3, name: "Shirt", price: 1500, category: "clothing", inStock: false },
  { id: 4, name: "Shoes", price: 3000, category: "clothing", inStock: true },
  { id: 5, name: "Watch", price: 5000, category: "accessories", inStock: true },
];

function filterByCategory(products, category) {
  const result = [];
  for (const product of products) {
    if (product.category === category) {
      result.push(category);
    }
  }
  return result;
}
console.log(filterByCategory(products, "electronics"));

//function that apply discount
function applyDiscount(products, discountPercent) {
  const result = [];
  for (const product of products) {
    result.push({
      ...product,
      price: product.price - (product.price * discountPercent) / 100,
    });
  }
  return result;
}
console.log(applyDiscount(products, 10));

// function that calculate cart total
function calculateCartTotal(cart) {
  let total = 0;
  for (const item of cart) {
    total += item.product.price * item.quantity;
  }
  return total;
}

const cart = [
  { product: products[0], quantity: 1 }, // Laptop x1
  { product: products[1], quantity: 2 }, // Phone x2
];
console.log(calculateCartTotal(cart));

// function that creates product summary
function getProductSummary(products) {
  let totalProducts = products.length;
  let inStock = 0;
  let totalValue = 0;
  for (const product of products) {
    if (product.inStock) {
      inStock++;
    }
    totalValue += product.price;
  }
  return {
    totalProducts,
    inStock,
    totalValue,
  };
}
console.log(getProductSummary(products));
