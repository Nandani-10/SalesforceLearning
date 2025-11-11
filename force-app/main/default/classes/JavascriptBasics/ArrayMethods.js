
// Original array
let numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);

// push() - Add element(s) to the end
numbers.push(6, 7);
console.log("After push:", numbers);

// pop() - Remove last element
let popped = numbers.pop();
console.log("After pop:", numbers, "| Popped element:", popped);

//  unshift() - Add element(s) to the beginning
numbers.unshift(0);
console.log("After unshift:", numbers);

//  shift() - Remove first element
let shifted = numbers.shift();
console.log("After shift:", numbers, "| Shifted element:", shifted);

//  indexOf() - Returns first index of element
console.log("Index of 3:", numbers.indexOf(3));

//  lastIndexOf() - Returns last index of element
numbers.push(3);
console.log("After adding 3 again:", numbers);
console.log("Last index of 3:", numbers.lastIndexOf(3));

//  includes() - Check if array contains element
console.log("Includes 4?", numbers.includes(4));
console.log("Includes 10?", numbers.includes(10));

//  find() - Returns first element matching condition
let found = numbers.find(num => num > 3);
console.log("First number > 3:", found);

//  findIndex() - Returns index of first element matching condition
let foundIndex = numbers.findIndex(num => num > 3);
console.log("Index of first number > 3:", foundIndex);

//  filter() - Returns a new array with elements matching condition
let filtered = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", filtered);

//  map() - Returns new array with modified elements
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

//  forEach() - Executes function for each element
console.log("Using forEach:");
numbers.forEach(num => console.log(num));

//  reduce() - Reduce array to single value (sum in this case)
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

//  reduceRight() - Reduce from right to left
let reduceRightExample = numbers.reduceRight((acc, num) => acc - num, 0);
console.log("ReduceRight result:", reduceRightExample);

//  some() - Returns true if at least one element satisfies condition
let hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even number?", hasEven);

//  every() - Returns true if all elements satisfy condition
let allPositive = numbers.every(num => num > 0);
console.log("All numbers positive?", allPositive);

//  sort() - Sorts array (alphabetically or with compare function)
let fruits = ['banana', 'apple', 'mango'];
fruits.sort();
console.log("Sorted fruits:", fruits);

let numsForSort = [3, 1, 4, 2];
numsForSort.sort((a, b) => a - b);
console.log("Sorted numbers ascending:", numsForSort);

//  reverse() - Reverses array
numbers.reverse();
console.log("Reversed numbers:", numbers);

//  slice() - Returns a portion of the array
let sliced = numbers.slice(1, 4);
console.log("Sliced numbers (1-3):", sliced);

//  splice() - Adds/removes elements
// splice(startIndex, deleteCount, item1, item2,...)
let spliced = numbers.splice(1, 2, 10, 20);
console.log("After splice:", numbers, "| Removed:", spliced);

// concat() - Merge arrays
let moreNumbers = [100, 200];
let merged = numbers.concat(moreNumbers);
console.log("Merged array:", merged);

//  join() - Convert array to string
//  flat() - Flatten nested arrays
//  flatMap() - Map + flatten one level
//  fill() - Fill array with static value
//  copyWithin() - Copy part of array to another position


