// Normal declaration of variable in ES5
var x = 2;
console.log("Result(x) = " + x); // Result(x) = 2

// Normal declaration of variable in ES6
let y = "Three";
console.log("Result(y) = " + y); // Result(y) = Three

// Declaring without initialisation
// Everything in JS that is not initialized automatically becomes type undefined
let z;
console.log("Result(z) = " + z); //Result(z) = undefined

// Declaration with initialisation and operation
let k = 22 + 12 / 4;
console.log("Result(k) = " + k); //Result(k) = 25

// Declaration of variable of another variable
let r = k;
console.log("Result(r) = " + r); //Result(r) = 25

// Declaration of a variable with many rows
let q = `
 <h1> Test </h1>
 <p> Hello </p>
 <p> Wow </p>
`;
console.log("Result 6(q) = " + q);

// Declaring multiple variables at once
let person = "hello",
  dog = "rawr",
  cat = "meow";
console.log("Result(person) = " + person); //Result(human) = hello
console.log("Result(dog,cat) = " + dog + " " + cat); //Result(dog,cat) = rawr meow

// Re-Declaration will not lose value
// If you use let it will lose value
var t = "This will be repeated";
var t;
console.log("Result(t) = " + t); //Result(t) = This will be repeated

// Javascript initialization starts from left to right
// Here it will do 5 + 5 and then 10 + "Hello"
let o = 5 + 5 + "Hello";
console.log("Result(o) = " + o); //Result(o) = 10Hello

// Javascript resolves strings and numbers by turning everything into a string
let a1 = 50 + " cent";
let a2 = 2 + "3";
console.log("Result(a1) = " + a1); //Result(a1) = 50 cent
console.log("Result(a2) = " + a2); //Result(a2) = 23

// Javascript types are dynamic
let e = 5; // here is a number
e = "Awesome"; // changed into string
console.log("Result(e) = " + e); //Result(e) = Awesome

// Javascript variable can contain a function
// Whenever you use this variable it will call the function and return the result of that function
let i = () => {
  console.log("This is a function that calls console log!");
  return 2 + 2;
}
console.log(i()); //This is a function that calls console log! 4