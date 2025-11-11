

console.log("=== 1️ IF Statement ===");
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

console.log("\n=== 2️ IF...ELSE Statement ===");
let temperature = 15;

if (temperature > 25) {
  console.log("It's hot outside.");
} else {
  console.log("It's cool outside.");
}

console.log("\n=== 3️ IF...ELSE IF...ELSE Statement ===");
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: Fail");
}

console.log("\n=== 4️ Nested IF Statement ===");
let username = "Nandani";
let password = "1234";

if (username === "Nandani") {
  if (password === "1234") {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password!");
  }
} else {
  console.log("User not found!");
}

console.log("\n=== 5️ SWITCH Statement ===");
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number!");
}

console.log("\n=== 6️ SWITCH with Multiple Cases Combined ===");
let fruit = "apple";

switch (fruit) {
  case "apple":
  case "mango":
  case "banana":
    console.log("This is a tropical fruit!");
    break;
  case "orange":
    console.log("This is a citrus fruit!");
    break;
  default:
    console.log("Unknown fruit!");
}

console.log("\n=== 7️ Ternary Operator (Short IF...ELSE) ===");
let isMember = true;
let discount = isMember ? "10% discount applied" : "No discount";
console.log(discount);

console.log("\n=== 8️ Nested Ternary Example ===");
let score = 82;
let grade =
  score >= 90
    ? "A+"
    : score >= 75
    ? "A"
    : score >= 60
    ? "B"
    : "Fail";
console.log("Grade:", grade);
