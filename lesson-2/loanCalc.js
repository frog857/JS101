// dependencies
let rlSync = require('readline-sync');

// functions
function prompt(msg) {
  console.log('=> ' + msg);
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
  prompt("Welcome to loan calc!\nLet's start off with your loan amount. How much do you owe?");
  let loanAmount = formatLoan(rlSync.question());

  while (Number.isNaN(loanAmount) || loanAmount <= 0) {
    prompt('Type a valid number');
    loanAmount = formatLoan(rlSync.question());
  }

  prompt('What is your APR? (Example: type "12" for a 12% APR)');
  let APR = parseFloat(rlSync.question(), 10) / 100; // parseFloat cuts off trailing symbols. i.e. %

  while (!(APR > 0 && APR < 1)) {
    prompt('Please type a valid APR.');
    APR = parseFloat(rlSync.question(), 10) / 100;
  }

  prompt("Lastly, what is your Loan's duration, in years?");
  let loanDurationMonths = Number(rlSync.question()) * 12;

  while (!(loanDurationMonths > 0 && loanDurationMonths < 1201)) {
    prompt("Please type a valid duration. Max: 100 years");
    loanDurationMonths = Number(rlSync.question()) * 12;
  }

  let monthlyPayment = loanAmount * ((APR / 12) /
    (1 - Math.pow((1 + (APR / 12)), (-loanDurationMonths))));

  let totalPayment = monthlyPayment * loanDurationMonths;
  let totalInterest = totalPayment - loanAmount;

  prompt("With a loan amount of $" + (loanAmount.toFixed(2)) + " at " + (APR * 100) + "% APR:" +
    "\nYour monthly payment comes out to: $" + monthlyPayment.toFixed(2) +
    "\nYour total amount paid after " + (loanDurationMonths / 12) +
      " years will be $" + totalPayment.toFixed(2) +
    "\nYour total interest paid will be $" + totalInterest.toFixed(2) + "\n");

  prompt("Need another calculation? y/n");
  let answer = rlSync.question();
  if (answer === 'n') {
    prompt("Thanks for stopping by!");
    break;
  }
}
