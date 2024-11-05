const rlSync = require("readline-sync")

console.log('Welcome to the terminal calculator!')
console.log('What is the first number?')
let number1 = Number(rlSync.question())

console.log('What is the second number?')
let number2 = Number(rlSync.question())

console.log('What operation should be performed? \n 1) Add 2) Subtract 3) Multiply 4) Divide')
let operation = rlSync.question()

switch (operation) {
  case "1": console.log(`${number1} + ${number2} = ${number1 + number2}`); break
  case "2": console.log(`${number1} - ${number2} = ${number1 - number2}`); break
  case "3": console.log(`${number1} * ${number2} = ${number1 * number2}`); break
  case "4": console.log(`${number1} / ${number2} = ${number1 / number2}`); break
  default: console.log("That wasn't a valid selection")
}
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.