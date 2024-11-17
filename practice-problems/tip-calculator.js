let rlSync = require("readline-sync");

function prompt(msg) {
  console.log("=> " + msg);
}

prompt("What is the bill?");
let bill = parseFloat(rlSync.question(), 10);


prompt("What percentage you tryna tip?");
let tipPercentage = parseFloat(rlSync.question(), 10);

let tip = bill * (tipPercentage / 100);
let total = tip + bill;

prompt(`The tip on your $${bill.toFixed(2)} bill is $${tip.toFixed(2)}. That brings the total to $${total.toFixed(2)}.`);


