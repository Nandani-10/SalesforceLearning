// Creating an object
const person = {
  name: "Nandani",
  age: 25,
  city: "Pune"
};

// Accessing values
console.log(person.name);     // Dot notation
console.log(person["city"]);  // Bracket notation

// Adding new property
person.country = "India";

// Updating value
person.age = 26;

// Deleting property
delete person.city;

console.log(person);
// spread operator 

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combine two objects
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Overriding properties
const obj3 = { a: 10, b: 20 };
const result = { ...obj1, ...obj3 };
console.log(result); // { a: 10, b: 20 }

// Copy object
const copy = { ...obj1 };
console.log(copy);

// spread for nested object

const user = {
  name: "John",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const newUser = { ...user };
newUser.address.city = "Mumbai";

console.log(user.address.city); // ❗ Output: "Mumbai" — changed in both

// destructing object : Destructuring lets you extract properties from objects into variables easily.

const employee = {
  id: 101,
  names: "Riya",
  role: "Developer",
  address: {
    city: "Bangalore",
    country: "India"
  }
};

// Basic destructuring
const { id, names } = employee;
console.log(id, names); // 101 "Riya"

// Rename variables
const { role: jobTitle } = employee;
console.log(jobTitle); // Developer

// Nested destructuring
const { address: { city, country } } = employee;
console.log(city, country); // Bangalore India

// Default values
const { salary = 50000 } = employee;
console.log(salary); // 50000 (default value)

// Array destructing 
const colors = ["red", "green", "blue"];

// Basic
const [first, second] = colors;
console.log(first, second); // red green

// Skip elements
const [, , third] = colors;
console.log(third); // blue

// Default value
const [a, b, c, d = "yellow"] = colors;
console.log(d); // yellow

//spread with array +object 
const fruits = ["apple", "banana"];
const moreFruits = ["mango", ...fruits, "kiwi"];
console.log(moreFruits); // ["mango", "apple", "banana", "kiwi"]

const baseUser = { name: "Aarav", role: "Tester" };
const fullUser = { ...baseUser, age: 23, city: "Indore" };
console.log(fullUser);

 // destructing functions 

const displayUser = ({ name, city }) => {
  console.log(`User: ${name}, City: ${city}`);
};

const userInfo = { name: "Tina", age: 28, city: "Delhi" };
displayUser(userInfo); // User: Tina, City: Delhi

// JSON.stringify() and JSON.parse()
const user = {
  name: "Nandani",
  age: 25,
  skills: ["HTML", "CSS", "JS"],
  address: {
    city: "Pune",
    country: "India"
  }
};

// Convert JS object → JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);

const jsonData = '{"name":"Nandani","age":25,"city":"Pune"}';

// Convert JSON string → JS object
const userObj = JSON.parse(jsonData);

console.log(userObj.name);  // Nandani
console.log(userObj.age);   // 25

let mystring = 'Nandani';
let SpreadString=[...mystring];
console.log(SpreadString); //['N','a','n','d','a','n','i']

// string interpolation
let a = 10;
let b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
// Output: The sum of 10 and 20 is 30





