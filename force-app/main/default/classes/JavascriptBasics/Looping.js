
// Sample data
const numbers = [10, 20, 30, 40, 50];
const person = { name: "Nandani", age: 25, city: "Pune" };

console.log("=== 1️ For Loop ===");
// Classic for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}:`, numbers[i]);
}

console.log("\n=== 2️ For...of Loop ===");
// Iterates over array values
for (const num of numbers) {
  console.log("Value:", num);
}

console.log("\n=== 3️ For...in Loop ===");
// Iterates over object keys (or array indexes)
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log("\n=== 4️ While Loop ===");
// Loop runs while condition is true
let count = 0;
while (count < 3) {
  console.log("While count:", count);
  count++;
}

console.log("\n=== 5️ Do...While Loop ===");
// Runs once even if condition is false
let x = 5;
do {
  console.log("Do...While value:", x);
  x++;
} while (x < 8);

console.log("\n=== 6️ forEach Loop ===");
// Array specific loop (callback for each element)
numbers.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});

console.log("\n=== 7️ Loop with break and continue ===");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping number 3 using continue");
    continue; // skips this iteration
  }
  if (i === 5) {
    console.log("Stopping at 5 using break");
    break; // exits loop completely
  }
  console.log("Current i:", i);
}

console.log("\n=== 8️ Nested Loop Example ===");
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
