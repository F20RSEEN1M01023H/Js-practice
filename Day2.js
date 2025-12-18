// comparison operators
console.log(5 == "5"); // true, because values are equal after type coercion
console.log(5 === "5"); // false, because types are different
console.log(0 == false); // true, because values are equal after type coercion
console.log(0 === false); // false, because types are different
console.log(null == undefined); // true, because both represent 'no value'
console.log(null === undefined); // false, because types are different

// diffrence between == and ===
// == checks for value equality after type coercion
// === checks for both value and type equality without type coercion

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log("Grade for 95:", getGrade(95));
console.log("Grade for 85:", getGrade(82));
console.log("Grade for 75:", getGrade(58));

// Rewrite the function using ternary operator

function checkEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

// Ternary Operator
function checkEligibility1(age) {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}

console.log("Eligibility for age 20:", checkEligibility(20));
console.log("Eligibility for age 16:", checkEligibility(16));
console.log("Eligibility for age 20 (ternary):", checkEligibility1(20));
console.log("Eligibility for age 16 (ternary):", checkEligibility1(16));

// logcal operator challenge
function canAccessContact(hassubsciption, isverified, age) {
  return age >= 18 && (hassubsciption || isverified);
}
console.log("Can access (true, false, 20):", canAccessContact(true, false, 20)); // true
console.log("Can access (false, true, 20):", canAccessContact(false, true, 20)); // true
console.log(
  "Can access (false, false, 20):",
  canAccessContact(false, false, 20)
); // false
console.log("Can access (true, true, 16):", canAccessContact(true, true, 16)); // false

// Switch Statement
function getDayName(num) {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}
console.log("Day 1:", getDayName(1));
console.log("Day 5:", getDayName(5));
console.log("Day 8:", getDayName(8));

//function to calculate discount :
function calculateDiscount(price, customerType) {
  if (customerType === "Member") {
    return price - price * 0.1;
  } else if (customerType === "VIP") {
    return price - price * 0.2;
  } else {
    return price;
  }
}
console.log(
  "Discounted price for Member on $100:",
  calculateDiscount(100, "Member")
); // $90
console.log("Discounted price for VIP on $100:", calculateDiscount(100, "VIP")); // $80
console.log(
  "Discounted price for Regular on $100:",
  calculateDiscount(100, "Regular")
); // $100

//function to calculate discount using switch
function calculateDiscount(price, customerType) {
  switch (customerType) {
    case "Member":
      return price - price * 0.1;
    case "VIP":
      return price - price * 0.2;
    default:
      return price;
  }
}
console.log(
  "Discounted price for Member on $100 (switch):",
  calculateDiscount(100, "Member")
); // $90
console.log(
  "Discounted price for VIP on $100 (switch):",
  calculateDiscount(100, "VIP")
); // $80
console.log(
  "Discounted price for Regular on $100 (switch):",
  calculateDiscount(100, "Regular")
); // $100

// false,0, null,undefined, NaN, "" (empty string) are falsy values
// Truthy values are all values that are not falsy

//Always use === to check both type and values and this make code safer and bug fixes

//Yes we use multiple conditions in ternary operator:
age >= 18
  ? isverified
    ? "Access granted"
    : "Verification required"
  : "under age";
