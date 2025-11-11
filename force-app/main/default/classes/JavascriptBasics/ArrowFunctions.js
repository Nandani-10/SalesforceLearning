// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function (shorter)
const addArrow = (a, b) => a + b;

// no parameter 
const greet = () => console.log("Hello!");
greet(); // Hello!


// single parameter
const square = x => x * x;
console.log("Square of 4:", square(4)); // 16

// multiple parameters
const multiply = (x, y) => x * y;
console.log("Multiply 3 and 5:", multiply(3, 5)); // 15

// multi-line arrow function
const factorial = n => {
  let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i; 
    }
    return result;
}

console.log("Factorial of 5:", factorial(5)); // 120

// Arrow function with array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6, 8, 10]  

// Arrow function with filter
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens); // [2, 4]

// Arrow function with reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum); // 15

// Arrow functions do not have their own 'this'
const obj = {
  value: 42,
    regularFunction: function() {
        console.log("Regular Function this.value:", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow Function this.value:", this.value);
    }
};
obj.regularFunction(); // 42
obj.arrowFunction(); // undefined (or window.value in non-strict mode)

// Using arrow function in setTimeout
setTimeout(() => {
  console.log("Arrow function in setTimeout");
}, 1000);


// call back function example
function fetchData(callback) {
  setTimeout(() => {
    const data = "Sample Data";
    callback(data);
  }, 1000);
}
fetchData(data => {
  console.log("Fetched Data:", data);
});

//

