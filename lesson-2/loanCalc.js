// dependencies & constants
let rlSync = require('readline-sync');

// functions
function prompt(msg) {
  console.log('=> ' + msg);
}

let loanAmount;
let APR;
let loanDurationMonths;

// basic program loop
while (true) {
  // welcome and first prompt
  prompt("Welcome to loan calc!\nLet's start off with your loan amount. How much do you owe?")
  loanAmount = rlSync.question();

  if (loanAmount[0] === "$") {
    loanAmount = loanAmount.slice(1)
  }
  loanAmount = Number(loanAmount);

  // validation
  while (Number.isNaN(loanAmount) || loanAmount === 0) {
    prompt('Type a valid number')
    loanAmount = Number(rlSync.question());
  }

  prompt('What is your APR? (Example: type "12" for a 12% APR)')
  APR = parseInt(rlSync.question()) / 100;

  while (!(APR > 0 && APR < 1)) {
    prompt('Please type a valid APR.');
    APR = Number(rlSync.question()) / 100;
  }

  prompt("Lastly, what is your Loan's duration, in years?")
  loanDurationMonths = Number(rlSync.question()) * 12;

  while (!(loanDurationMonths > 0 && loanDurationMonths < 1201)) {
    prompt("Please type a valid duration. Max: 100 years")
  }

  let monthlyPayment = loanAmount * ((APR/12) / (1 - Math.pow((1 + (APR/12)), (-loanDurationMonths))));
  let totalPayment = monthlyPayment*loanDurationMonths
  let totalInterest = totalPayment - loanAmount;

  prompt("\nYour monthly payment comes out to: $" + monthlyPayment.toFixed(2) + 
    "\nYour total amount paid will be $" + totalPayment.toFixed(2) + 
    "\nYour total interest paid will be $" + totalInterest.toFixed(2) + "\n");

  prompt("Need another calculation? y/n") 
  let answer = rlSync.question() 
  if (answer === 'n') {
    prompt("Thanks for stopping by!") 
    break;
  }
}
