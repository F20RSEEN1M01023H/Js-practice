// Array Methods //////////

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    category: "electronics",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Tablet",
    price: 25000,
    category: "electronics",
    inStock: false,
    rating: 4.0,
  },
  {
    id: 4,
    name: "Shirt",
    price: 1500,
    category: "clothing",
    inStock: true,
    rating: 3.8,
  },
  {
    id: 5,
    name: "Shoes",
    price: 3000,
    category: "clothing",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Watch",
    price: 5000,
    category: "accessories",
    inStock: false,
    rating: 4.1,
  },
  {
    id: 7,
    name: "Headphones",
    price: 2000,
    category: "electronics",
    inStock: true,
    rating: 4.6,
  },
];

// Part 1 . // .map() - Transform Every Element
// .map() creates a new array by Transforming each Element

// 1.By Map to get array of all products Names only
const productNames = products.map((product) => product.name);
console.log(productNames);

// 2. Use .map() to get array of all product PRICES only
const ProductPrices = products.map((product) => product.price);
console.log(ProductPrices);

// 3. Use .map() to create array of strings: "Product: [name] - Rs. [price]"
const productStrings = products.map(
  (product) => `Product: ${product.name} - Rs. ${product.price}`,
);
console.log(productStrings);

// 4.Use .map() to increase all prices by 10%
const PricesIncreased = products.map((product) => ({
  ...product,
  price: product.price * 1.1,
}));
console.log(PricesIncreased);

// 5. Use .map() to create array of objects with only id and name
const ObjectsArray = products.map(
  (product) => `{id: ${product.id} , name:${product.name}}`,
);
console.log(ObjectsArray);

// ==========================================
// PART 2: .filter() - Select Specific Elements
// ==========================================
//  1. Get only products that are IN STOCK
const GetInStock = products.filter((product) => product.inStock);
console.log(GetInStock);

// 2. Get only products with price LESS than 10000
const LowPrice = products.filter((product) => product.price < 10000);
console.log(LowPrice);

// 3. Get only ELECTRONICS category products
const CategoryCheck = products.filter(
  (product) => product.category === "electronics",
);
console.log(CategoryCheck);

// 4. Get only products with rating ABOVE 4.0
const RatingCheck = products.filter((product) => product.rating > 4.0);
console.log(RatingCheck);

// 5. Get only EXPENSIVE products (price > 20000) that are IN STOCK
const ExpensiveProducts = products.filter(
  (product) => product.price > 20000 && product.inStock,
);
console.log(ExpensiveProducts);

// 6. Get only products whose name contains letter "a" or "A"
// Hint: use .toLowerCase() and .includes()
const CheckLetter = products.filter((product) =>
  product.name.toLowerCase().includes("a"),
);
console.log(CheckLetter);

// ==========================================
// PART 3: .reduce() - Calculate Single Value
// ==========================================

// 1. Calculate TOTAL value of all products (sum of all prices)
const SumAll = products.reduce((sum, product) => sum + product.price, 0);
console.log(SumAll);

// 2. Find the HIGHEST price among all products
const HighestPrice = products.reduce(
  (highest, product) => (product.price > highest ? product.price : highest),
  0,
);
console.log(HighestPrice);

// 3. Find the LOWEST price among all products
const LowestPrice = products.reduce(
  (lowest, product) => (product.price < lowest ? product.price : lowest),
  products[0].price,
);
console.log(LowestPrice);

// 4. Count how many products are IN STOCK
const CountProduct = products.reduce(
  (count, product) => (product.inStock > 0 ? count + 1 : count),
  0,
);
console.log(CountProduct);

// 5. Calculate AVERAGE price of all products
const total = products.reduce((sum, product) => sum + product.price, 0);
const averagePrice = total / products.length;
console.log(averagePrice);

// 6. Count products by category
const CountCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = 0;
  }
  acc[product.category] += 1;
  return acc;
}, {});
console.log(CountCategory);
// i did not understand this above category count and i do this by Ai butt not understand

// Chaining Methods that are important
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNames = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => `Number ${num}`)
  .join(", ");
console.log(evenNames);

// 1. Get names of products that are IN STOCK
const GetNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name);

console.log(GetNames);

// 2. Get prices of ELECTRONICS, then calculate their sum
const GetPrices = products
  .filter((product) => product.category === "electronics")
  .map((product) => product.price)
  .reduce((sum, price) => sum + price, 0);
console.log(GetPrices);

// 3. Get products under Rs. 5000, then create array of their names in UPPERCASE

const LessPrices = products
  .filter((product) => product.price < 5000)
  .map((product) => product.name.toUpperCase());

console.log(LessPrices);

// 4. Get IN STOCK products, calculate average price

const averageInStock = products
  .filter((product) => product.inStock)
  .reduce((sum, product) => sum + product.price, 0);

console.log(averageInStock);

// 5. Get products with rating > 4.0, then sort by price (low to high)
const RatingProduct = products
  .filter((product) => product.rating > 4.0)
  .sort((a, b) => a.price - b.price);

console.log(RatingProduct);

// ==========================================
// PART 5: Real-World React Patterns
// ==========================================

// 1. Display products with their formatted prices
const FormattedPrices = products.map(
  (product) => `${product.name}: Rs. ${product.price}`,
);
console.log(FormattedPrices);

// 2. Create shopping cart items display
// For products in stock, create: "✓ Laptop (Rs. 50,000)"
// For out of stock: "✗ Tablet (Rs. 25,000)"
const cartDisplay = products.map((product) =>
  product.inStock
    ? `✓ ${product.name} (Rs. ${product.price})`
    : `✗ ${product.name} (Rs. ${product.price})`,
);

console.log(cartDisplay);

// 3. Create category tags for each product
// Output: "Laptop [electronics]"

const categoryTag = products.map(
  (product) => `${product.name} [${product.category}]`,
);
console.log(categoryTag);

// 4. Create product cards with rating stars

const productCards = products.map((product) => {
  const stars = "⭐".repeat(Math.floor(product.rating));
  return `${product.name} ${stars} (${product.rating})`;
});
console.log(productCards);

// ==========================================
// PART 6: Practice Challenge - E-Commerce
// ==========================================

// Task 1: Get all product names for search autocomplete
const searchAutoComplete = products.map((product) =>
  product.name.toLowerCase(),
);
console.log(searchAutoComplete);

// Task 2: Calculate total cart value for in-stock electronics
const totalValue = products
  .filter(
    (product) => product.category === "electronics" && product.inStock > 0,
  )
  .reduce((total, product) => total + product.price, 0);

console.log(totalValue);

// Task 3: Create discount labels
const discountLabels = products.map((product) => {
  if (product.price > 10000) {
    return `Save BIG on ${product.name}`;
  } else {
    return product.name;
  }
});
console.log(discountLabels);

// Task 4: Create product summary statistics
// Return object with:
// {
//   totalProducts: number,
//   inStock: number,
//   outOfStock: number,
//   totalValue: number,
//   averagePrice: number,
//   highestPrice: number
// }

const totalProducts = products.length;
const inStockProducts = products.filter((product) => product.inStock).length;
const outOfStock = products.filter((product) => (product.inStock = 0));
const totalValue2 = products.reduce((sum, product) => sum + product.price, 0);
const averagePrice2 = products.reduce(
  (totalValue2, product) => totalValue2 / products.length,
  0,
);
const highestPrice = products.reduce((max, p) => Math.max(max, p.price), 0);

const summary = {
  totalProducts,
  inStockProducts,
  outOfStock,
  totalValue2,
  averagePrice2,
};

console.log(summary);

const groupedByPrice = {
  budget: products.filter((p) => p.price < 5000),
  mid: products.filter((p) => p.price >= 5000 && p.price <= 20000),
  premium: products.filter((p) => p.price > 20000),
};

console.log(groupedByPrice);

// ==========================================
// PART 7: Performance & Best Practices
// ==========================================

// Question 1: Which is better?
// Option A:
const option_a = products.filter((p) => p.inStock).map((p) => p.name);

// Option B:
const option_b = [];
for (const product of products) {
  if (product.inStock) {
    option_b.push(product.name);
  }
}

// Option A is Better

const productSummary = {
  // 1. Names (UPPERCASE) of all IN-STOCK products
  availableProductNames: products
    .filter((product) => product.inStock > 0)
    .map((product) => product.name.toUpperCase()),

  // 2. Total price of IN-STOCK ELECTRONICS
  electronicsTotalValue: products
    .filter((product) => product.inStock && product.category === "electronics")
    .reduce((sum, product) => sum + product.price, 0),

  // 3. Average price of all IN-STOCK products
  averageInStockPrice: (() => {
    const inStockProducts = products.filter((product) => product.inStock);
    const total = inStockProducts.reduce(
      (sum, product) => sum + product.price,
      0,
    );
    return total / inStockProducts.length;
  })(),

  // 4. Name of product with HIGHEST rating
  highestRatedProductName: products.reduce((best, product) =>
    product.rating > best.rating ? product : best,
  ).name,

  // 5. Count of products per category
  categoryCount: products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {}),
};

console.log(productSummary);
