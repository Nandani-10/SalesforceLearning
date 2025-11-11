// String Methods Demo

let str = "  Hello, JavaScript World!  ";
console.log("Original String:", str);

//  length - Get string length
console.log("Length:", str.length);

//  charAt() - Returns character at index
console.log("Character at index 7:", str.charAt(7));

//  charCodeAt() - Returns Unicode of character at index
console.log("Char code at index 7:", str.charCodeAt(7));

//  indexOf() - Returns first index of substring
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));

//  lastIndexOf() - Returns last index of substring
console.log("Last index of 'o':", str.lastIndexOf("o"));

//  includes() - Check if string contains substring
console.log("Includes 'World'? ", str.includes("World"));

//  startsWith() - Check if string starts with substring
console.log("Starts with 'Hello'? ", str.startsWith("Hello"));

//  endsWith() - Check if string ends with substring
console.log("Ends with 'World!'? ", str.endsWith("World!"));

//  slice() - Extracts a section of the string
console.log("Slice (7, 17):", str.slice(7, 17));

//  substring() - Extract substring (like slice but no negative indexes)
console.log("Substring (7, 17):", str.substring(7, 17));

//  substr() - Extract substring from start index with given length
console.log("Substr (7, 10):", str.substr(7, 10));

//  trim() - Remove whitespace from both ends
console.log("Trimmed:", str.trim());

//  trimStart() / trimLeft() - Remove leading whitespace
console.log("Trim Start:", str.trimStart());

//  trimEnd() / trimRight() - Remove trailing whitespace
console.log("Trim End:", str.trimEnd());

//  toUpperCase() - Convert to uppercase
console.log("Uppercase:", str.toUpperCase());

//  toLowerCase() - Convert to lowercase
console.log("Lowercase:", str.toLowerCase());

//  split() - Split string into array
let words = str.trim().split(" ");
console.log("Split by space:", words);

//  replace() - Replace first occurrence
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));

//  replaceAll() - Replace all occurrences
let text = "apple banana apple mango";
console.log("Replace all 'apple' with 'orange':", text.replaceAll("apple", "orange"));

//  concat() - Concatenate strings
let str2 = " Have a nice day!";
console.log("Concat strings:", str.concat(str2));

//  repeat() - Repeat string n times
console.log("Repeat 3 times:", "Hi! ".repeat(3));

//  match() - Returns array of matches for regex
let matchExample = "The rain in SPAIN stays mainly in the plain";
console.log("Match 'ain':", matchExample.match(/ain/g));

//  matchAll() - Returns all matches (iterator)
let matches = [...matchExample.matchAll(/ain/g)];
console.log("MatchAll 'ain':", matches.map(m => m[0]));

//  search() - Returns index of match with regex
console.log("Search 'SPAIN':", matchExample.search(/SPAIN/));

//  startsWith() & endsWith() - Already shown above

//  localeCompare() - Compare strings
console.log("'a' vs 'b':", "a".localeCompare("b")); // -1 if a < b

//  repeat() - Already shown above

//  toString() - Converts value to string
console.log("Number 123 to string:", (123).toString());

//  valueOf() - Returns primitive value of string object
let strObj = new String("Hello");
console.log("ValueOf:", strObj.valueOf());

