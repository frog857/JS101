// requirements
const rlSync = require("readline-sync");

// functions

function prompt(msg) {
  return "=> " + msg;
}

function computeSum(num) {
  let sum = 0;
  for (let index = 1; index <= num; index++) {
    sum += index;
  }
  return sum;
}

function computeProduct(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
while (true) {
  let userNum = rlSync.question(prompt("Enter a positive integer\n"));
  let operation = rlSync.question(prompt("Enter 's' to compute the sum, or 'p' to compute the product."));

  if (operation === "s") {
    console.log(`The sum of the integers between 1 and ${userNum} is ${computeSum(userNum)}`);
  } else if (operation === "p") {
    console.log(`The product of the integers between 1 and ${userNum} is ${computeProduct(userNum)}`);
  } else {
    console.log("Something went wrong");
  }
}
