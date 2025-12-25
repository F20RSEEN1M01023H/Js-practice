// Day 1 to 4 practice projects
let name = "Hammad";
// data types are ?
// Number,String,Boolean,Null,undefined,symbol : // these are the permitive data types
// Arrays and the objects are the Refrence data types

// Part 1:Create an array of the products
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    inStock: 2,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bad Habits",
    price: 3000,
    category: "Books",
    inStock: 4,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Track Suit",
    price: 2000,
    category: "Clothes",
    inStock: 7,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Keyboard",
    price: 3000,
    category: "Electronics",
    inStock: 0,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Mouse",
    price: 1000,
    category: "Electronics",
    inStock: 5,
    rating: 4.3,
  },
];

//Create Variables for Shop information
const shopName = "SemiColons Software Company";
const shopOwner = "Engr Hammad Ashraf";
let totalSales = 10000;

console.log(`Welcome to ${shopName}!`);
console.log(`Owner: ${shopOwner}`);

// Part 2
function displayAllproducts(products) {
  for (const product of products) {
    const stockStatus = product.inStock > 0 ? "In Stock" : "Out of Stock";

    console.log(
      `ID: ${product.id} | Name: ${product.name} | Price: ${product.price} | Stock: ${stockStatus}`
    );
  }
}
console.log(displayAllproducts(products));

// Function 2: Display single product details
function singleProduct(product) {
  const stockStatus = product.inStock > 0 ? "InStock" : "Out of Stock";
  return `Product Details
    ----------
    Name :${product.name}
    Price :${product.price}
    Rating :${product.rating}
    Stock :${stockStatus}
    Category :${product.category}`;
}
console.log(singleProduct(products[3]));

//Part 3 Search and filter functions

// find product id
function findProductById(products, productId) {
  for (const product of products) {
    if (productId === product.id) {
      return product;
    }
  }
  return "product not found";
}
console.log(findProductById(products, 3));
