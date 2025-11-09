// app.js

// 1️ Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// 2️ Assignment Operators
let x = 10;
x += 5;  // same as x = x + 5
console.log("\nAssignment Operator (x += 5):", x);

// 3️ Comparison Operators
let num1 = 20;
let num2 = '20';

console.log("\nComparison Operators:");
console.log("== :", num1 == num2);   // true (checks only value)
console.log("=== :", num1 === num2); // false (checks value + type)
console.log("> :", num1 > 10);
console.log("< :", num1 < 10);

// 4️ Logical Operators
let age = 25;
let hasLicense = true;

console.log("\nLogical Operators:");
if (age > 18 && hasLicense) {
  console.log("Eligible to drive");
}

if (age < 18 || !hasLicense) {
  console.log("Not eligible to drive");
} else {
  console.log("You can drive safely!");
}

// 5️ Spread Operator
console.log("\nSpread Operator:");
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log("Combined Array:", moreNumbers);

// 6️ Ternary Operator
console.log("\nTernary Operator:");
let marks = 80;
let result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);

// 7. TypeOf & instanceof
let str = "hello";
console.log(typeof str);          // "string"
console.log(str instanceof String); // false (because it's not a String object)

let strObj = new String("hello");
console.log(typeof strObj);       // "object"
console.log(strObj instanceof String); // true

