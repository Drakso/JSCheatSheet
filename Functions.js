// Function parametars are for declaring function
// Function arguments are data you pass to a function
// Function Declaration
// Must have a name and can be stand alone
// When parser reads function keyword alone it assumes its a function declaration
function Salute(who) {
  console.log(`Yes sir, ${who}, sir!!!`); // ES6 string. Must be with ``
}
Salute("Lee Oliver");

// Function Expression
// Don't have a name but must be in a closure
// To use this function alone use ()
if (function () { // expression with no parameter
    return true;
  }) {
  console.log(`Hello!`);
}

if (function (who) { // expression with parameter
    return who;
  }("Lee Oliver") == "Lanius") { // giving argument for "who" parameter and comparing the output of the function with a string
  console.log("Yes sir, general Lee sir!!!");
} else {
  console.log("You are not general Lee! Intruder!");
};
// Fat arrow Function ( Lambda function )
// Its shorter and simpler function expression introduced in ES6
var Salute = (who) => {
  console.log(`Yes sir, captain ${who}, sir!!!`); // ES6 string. Must be with ``
}
Salute("Lee Oliver"); // writes Yes sir, captain Lee Oliver, sir!!! in console

// Function in a function
// You can pass function as paramter
function SumNumbers(first, second) {
  return first + second;
}

function DivideNumbers(first, second) {
  return first * second;
}
console.log(`Result: ${DivideNumbers(SumNumbers(2,5), 4)}`); //Result: 28

// Function default parameter
// You can set default parameter and if no argument is passed it will use the one you set
function Salute(who = "Captain Kirk") {
  console.log(`Yes, Sir ${who} Sir!!!`);
}
Salute(); // Yes, Sir Captain Kirk Sir!!!

// Recursion ( function that calls it self )
function countTo(num) {
  if (num != 0) {
    console.log(num);
    countTo(num - 1);
  }
}
countTo(4); // 4 3 2 1