// dependencies
const rlSync = require('readline-sync');
const MESSAGES = require('./loanCalc_messages.json')
let lang = "en"

// functions
function prompt(msg) {
  console.log('=> ' + msg);
}

const invalidAPR = (APR) => (!(APR > 0 && APR < 1));
const invalidLoan = (loanAmount) => (Number.isNaN(loanAmount) || loanAmount <= 0);
const invalidLoanDuration = (loanDurationMonths) => !(loanDurationMonths > 0 && loanDurationMonths < 1201);

function returnMessage(message, lang) {
  return MESSAGES[lang][message];
}

function clearLastLine() {
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine(1);
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine(1);
}

function formatLoan(input) {
  if (input[0] === "$") input = input.slice(1);
  if (input.includes(",")) {
    input = input.split(",").join("");
  }
  return Number(input);
}

// program body
while (true) {
  prompt(returnMessage("welcomeMessage", lang));
  let loanAmount = formatLoan(rlSync.question());

  while (invalidLoan(loanAmount)) {
    prompt(returnMessage("invalidLoan", lang));
    loanAmount = formatLoan(rlSync.question());
    if (invalidLoan(loanAmount)) clearLastLine();
  }

  prompt(returnMessage("promptAPR", lang));
  let APR = parseFloat(rlSync.question(), 10) / 100; // parseFloat cuts off trailing symbols. i.e. %

  while (invalidAPR(APR)) {
    prompt(returnMessage("invalidAPR", lang));
    APR = parseFloat(rlSync.question(), 10) / 100;
    if (invalidAPR(APR)) clearLastLine();
  }

  prompt(returnMessage("promptDuration", lang));
  let loanDurationMonths = Number(rlSync.question()) * 12;

  while (invalidLoanDuration(loanDurationMonths)) {
    prompt(returnMessage("invalidDuration", lang));
    loanDurationMonths = Number(rlSync.question()) * 12;
    if (invalidLoanDuration(loanDurationMonths)) clearLastLine();
  }
  // calculate results
  let monthlyPayment = loanAmount * ((APR / 12) /
    (1 - Math.pow((1 + (APR / 12)), (-loanDurationMonths))));

  let totalPayment = monthlyPayment * loanDurationMonths;
  let totalInterest = totalPayment - loanAmount;
  // display results
  prompt("With a loan amount of $" + (loanAmount.toFixed(2)) + " at " + (APR * 100) + "% APR:\n");
  console.log("Your monthly payment comes out to: $" + monthlyPayment.toFixed(2));
  console.log("Your total amount paid after " + (loanDurationMonths / 12) + " years will be $" + totalPayment.toFixed(2));
  console.log("Your total interest paid will be $" + totalInterest.toFixed(2) + "\n");

  //end sequence
  prompt(returnMessage("endMessage", lang));
  let answer = rlSync.question().toLowerCase();

  while (answer !== 'n' && answer !== 'y') {
    prompt(returnMessage("comeAgain", lang));
    answer = rlSync.question().toLowerCase();
    if (answer !== 'n' && answer !== 'y') clearLastLine();
  }

  if (answer === 'n') {
  clearLastLine();
  prompt("Thanks for stopping by, and good luck on that loan!")
  break;
  }
}
