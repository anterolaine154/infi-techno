/* 
   Filename: ComplexProgram.js

   Description: 
   This complex program demonstrates various advanced JavaScript concepts such as classes,
   closures, async/await, recursion, generators, and event handling.

   Note: This code is purely for demonstrative purposes and does not perform any actual functionality.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to calculate factorial recursively
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

// Async function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Generator function that yields numbers from 1 to 10
function* generateNumbers() {
  for (let i = 1; i <= 10; i++) {
    yield i;
  }
}

// Event handling example
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Complex logic using closures
function outerFunction() {
  const outerVariable = 'Outer';

  function innerFunction() {
    const innerVariable = 'Inner';
    console.log(`${outerVariable} ${innerVariable}`);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();

// Main program
const person = new Person('John Doe', 30);
person.greet();

console.log(`Factorial of 5: ${factorial(5)}`);

fetchData('https://api.example.com/data')
  .then(data => console.log(data));

const numbersGenerator = generateNumbers();
console.log(numbersGenerator.next());
console.log(numbersGenerator.next());

// ... continue with additional code as needed

// End of complex program