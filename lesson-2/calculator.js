// dependencies
const rlSync = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');
let LANGUAGE = 'en';

// functions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNum(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function displayMessage(message, lang = 'en') {
  return MESSAGES[lang][message];
}

// program body
console.log(displayMessage('welcomeMessage', LANGUAGE));
let tempLanguage = rlSync.question().toLowerCase();

while (tempLanguage !== 'en' && tempLanguage !== 'ru') {
  prompt(displayMessage('tryAgain', LANGUAGE));
  tempLanguage = rlSync.question().toLowerCase();
}
LANGUAGE = tempLanguage;

while (true) {
  prompt(displayMessage('firstMessage', LANGUAGE));
  let number1 = rlSync.question();

  while (invalidNum(number1)) {
    prompt(displayMessage('errorMessage', LANGUAGE));
    number1 = rlSync.question();
  }

  prompt(displayMessage('secondMessage', LANGUAGE));
  let number2 = rlSync.question();

  while (invalidNum(number2)) {
    prompt(displayMessage('errorMessage', LANGUAGE));
    number2 = rlSync.question();
  }

  prompt(displayMessage('thirdMessage', LANGUAGE));
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(displayMessage('operationErrorMessage', LANGUAGE));
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


  prompt(displayMessage('finalMessage1', LANGUAGE) +
    result +
    displayMessage('finalMessage2', LANGUAGE));
  let answer = rlSync.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt(displayMessage('tryAgainMessage', LANGUAGE));
    answer = rlSync.question().toLowerCase();
  }
  if (answer === 'n') {
    prompt(displayMessage('thankYouMessage', LANGUAGE));
    break;
  }
}


// Ask the user for the first number.
// validate
// Ask the user for the second number.
// validate
// Ask the user for an operation to perform.
// validate
// Perform the operation on the two numbers.
// Print the result to the terminal.
// ask user if they would like to start again?
// y - restart the program
// n - end the program