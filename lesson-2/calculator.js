// dependencies, constants
const rlSync = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');
const VALID_LANGUAGES = ['en', 'ru'];

// functions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNum(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function returnMessage(message, lang) {
  return MESSAGES[lang][message];
}

// program body
prompt(returnMessage('welcomeMessage', 'en'));
let language = rlSync.question().toLowerCase();

while (!VALID_LANGUAGES.includes(language)) {
  prompt(returnMessage('tryAgain', language = "en"));
  language = rlSync.question().toLowerCase();
}

while (true) {

  prompt(returnMessage('firstMessage', language));
  let firstNum = rlSync.question();
  while (invalidNum(firstNum)) {
    prompt(returnMessage('invalidNum', language));
    firstNum = rlSync.question();
  }

  prompt(returnMessage('secondMessage', language));
  let secondNum = rlSync.question();
  while (invalidNum(secondNum)) {
    prompt(returnMessage('invalidNum', language));
    secondNum = rlSync.question();
  }

  prompt(returnMessage('thirdMessage', language));
  let operation = rlSync.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(returnMessage('invalidOperation', language));
    operation = rlSync.question();
  }

  let result;
  switch (operation) {
    case "1": result = Number(firstNum) + Number(secondNum);
      break;
    case "2": result = Number(firstNum) - Number(secondNum);
      break;
    case "3": result = Number(firstNum) * Number(secondNum);
      break;
    case "4": result = Number(firstNum) / Number(secondNum);
      break;
  }
  prompt(returnMessage('resultMessage1', language) +
    result +
    returnMessage('resultMessage2', language));

  let answer = rlSync.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt(returnMessage('tryAgain', language));
    answer = rlSync.question().toLowerCase();
  }

  if (answer === 'n') {
    prompt(returnMessage('thankYouMessage', language));
    break;
  }
}
