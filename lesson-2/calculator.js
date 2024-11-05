// dependencies
const rlSync = require("readline-sync");

// functions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNum(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

// program body
console.log('Welcome to the terminal calculator!');
prompt('What is the first number?');
let number1 = rlSync.question();

while (invalidNum(number1)) {
  prompt("That's not a number! Try again...");
  number1 = rlSync.question();
}

prompt('What is the second number?');
let number2 = rlSync.question();

while (invalidNum(number2)) {
  prompt("That's not a number! Try again...");
  number2 = rlSync.question();
}

prompt('What operation should be performed? \n 1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Not a valid operation! Enter 1, 2, 3 or 4 plz");
  operation = rlSync.question();
}

let result;

switch (operation) {
  case "1": result = Number(number1) + Number(number2);
    break;
  case "2": result = Number(number1) - Number(number2);
    break;
  case "3": result = Number(number1) * Number(number2);
    break;
  case "4": result = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${result}!`);
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.