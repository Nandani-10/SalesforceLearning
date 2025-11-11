// Set Methods Demo

//  Creating a new Set
let set = new Set();
console.log("Empty Set:", set);

//  add() - Add values to the set (unique only)
set.add(1);
set.add(2);
set.add(3);
set.add(2); // duplicate ignored
set.add("Hello");
console.log("After add():", set);

//  has() - Check if value exists
console.log("Has 2?", set.has(2));
console.log("Has 5?", set.has(5));

//  delete() - Remove value
set.delete(2);
console.log("After delete(2):", set);

//  size - Get number of elements
console.log("Set size:", set.size);

//  clear() - Remove all elements
let set2 = new Set(set); // clone set for demonstration
set2.clear();
console.log("After clear():", set2);

//  keys() - Returns iterator of keys (same as values for Set)
console.log("Set keys:");
for (let key of set.keys()) {
  console.log(key);
}

//  values() - Returns iterator of values
console.log("Set values:");
for (let value of set.values()) {
  console.log(value);
}

//  entries() - Returns iterator of [value, value] pairs (for compatibility with Map)
console.log("Set entries:");
for (let entry of set.entries()) {
  console.log(entry);
}

//  forEach() - Iterate over set
console.log("Using forEach():");
set.forEach(value => console.log(value));

//  Convert Set to Array
let arrFromSet = [...set];
console.log("Set to array:", arrFromSet);

//  Initialize Set from Array (duplicates removed automatically)
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueSet = new Set(arrayWithDuplicates);
console.log("Set from array (duplicates removed):", uniqueSet);

//  Check unique filtering using Set
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log("Unique numbers from array:", uniqueNumbers);


