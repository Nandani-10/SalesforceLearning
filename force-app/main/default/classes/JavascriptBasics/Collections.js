// Array 
let fruits = ['apple', 'banana', 'mango'];

// Access
console.log(fruits[0]); // apple

// Add & Remove
fruits.push('orange');   // add at end
fruits.pop();            // remove last

// Loop
for (let fruit of fruits) {
  console.log(fruit);
}

// Map, Filter, Reduce
let upperFruits = fruits.map(f => f.toUpperCase());
console.log(upperFruits);

//object 
let person = {
  name: "John",
  age: 25,
  city: "Delhi"
};

// Access
console.log(person.name);

// Add
person.email = "john@example.com";

// Loop
for (let key in person) {
  console.log(key, person[key]);
}

// Destructuring
let { name, age } = person;
console.log(name, age);

// map -Similar to objects, but keys can be any type (objects, numbers, etc.)& maintain insertion order 

let map = new Map();

map.set('name', 'Alice');
map.set(1, 'Number Key');
map.set({ id: 1 }, 'Object Key');

// Access
console.log(map.get('name'));

// Loop
for (let [key, value] of map) {
  console.log(key, value);
}

// Check size
console.log(map.size);

// Set -Collection of unique values
let numbers = new Set([1, 2, 2, 3, 4, 4]);
console.log(numbers); // {1, 2, 3, 4}

// Add & Delete
numbers.add(5);
numbers.delete(2);

// Loop
for (let num of numbers) {
  console.log(num);
}

// Convert Set → Array
let numArray = [...numbers];
console.log(numArray);

//weakMap -Similar to Map, but keys must be objects & do not prevent garbage collection
// Create a WeakSet
let weakSet = new WeakSet();

let user1 = { name: "John" };
let user2 = { name: "Mary" };

// Add objects to WeakSet
weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1)); // true

// Remove reference to user1
user1 = null;

// user1 will be garbage collected automatically
// weakSet will no longer contain it

//weakSet -Similar to Set, but only holds objects & do not prevent garbage collection
// Create a WeakSet
let weakSet = new WeakSet();

let user1 = { name: "John" };
let user2 = { name: "Mary" };

// Add objects to WeakSet
weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1)); // true

// Remove reference to user1
user1 = null;

// user1 will be garbage collected automatically
// weakSet will no longer contain it



