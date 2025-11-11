// Map Methods Demo

//  Creating a new Map
let map = new Map();
console.log("Empty Map:", map);

//  set() - Add or update key-value pair
map.set("name", "Alice");
map.set("age", 25);
map.set(1, "Number Key");
map.set(true, "Boolean Key");
console.log("After set():", map);

//  get() - Get value by key
console.log("Get 'name':", map.get("name"));
console.log("Get 1:", map.get(1));

//  has() - Check if key exists
console.log("Has 'age'?", map.has("age"));
console.log("Has 'email'?", map.has("email"));

//  delete() - Remove a key-value pair
map.delete(true);
console.log("After delete(true):", map);

//  size - Get number of entries
console.log("Map size:", map.size);

//  clear() - Remove all entries
let map2 = new Map(map); // clone map for demonstration
map2.clear();
console.log("After clear():", map2);

//  keys() - Get iterator of keys
console.log("Map keys:");
for (let key of map.keys()) {
  console.log(key);
}

//  values() - Get iterator of values
console.log("Map values:");
for (let value of map.values()) {
  console.log(value);
}

//  entries() - Get iterator of [key, value] pairs
console.log("Map entries:");
for (let [key, value] of map.entries()) {
  console.log(key, ":", value);
}

//  forEach() - Iterate over map
console.log("Using forEach():");
map.forEach((value, key) => {
  console.log(key, "=>", value);
});

//  Using spread operator - Convert Map to Array
let mapArray = [...map]; // array of [key, value]
console.log("Map as array:", mapArray);

//  Convert Map keys/values to array
let keysArray = [...map.keys()];
let valuesArray = [...map.values()];
console.log("Keys as array:", keysArray);
console.log("Values as array:", valuesArray);

//  Convert array of key-value pairs to Map
let arr = [["x", 10], ["y", 20]];
let mapFromArr = new Map(arr);
console.log("Map from array:", mapFromArr);
