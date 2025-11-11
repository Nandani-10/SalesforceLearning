

//  Create a JavaScript object
let person = {
  name: "Alice",
  age: 25,
  skills: ["JavaScript", "HTML", "CSS"],
  isActive: true,
  address: {
    city: "Delhi",
    zip: 110001
  }
};

console.log("Original JS Object:", person);

//  Convert object to JSON string (stringify)
let jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

//  Pretty print JSON string with indentation
let prettyJSON = JSON.stringify(person, null, 2);
console.log("Pretty JSON:\n", prettyJSON);

//  Convert JSON string back to JS object (parse)
let parsedObj = JSON.parse(jsonString);
console.log("Parsed JS Object:", parsedObj);

//  Accessing nested properties
console.log("Name:", parsedObj.name);
console.log("City:", parsedObj.address.city);
console.log("First Skill:", parsedObj.skills[0]);

//  Using JSON with arrays
let numbers = [1, 2, 3, 4, 5];
let numbersJSON = JSON.stringify(numbers);
console.log("Array as JSON:", numbersJSON);

let parsedNumbers = JSON.parse(numbersJSON);
console.log("Parsed Array:", parsedNumbers);

//  Optional: JSON.stringify with filtering (replacer)
let filteredJSON = JSON.stringify(person, ["name", "skills"], 2);
console.log("Filtered JSON (only name and skills):\n", filteredJSON);
