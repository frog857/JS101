let rlSync = require("readline-sync");

let numArr = [];

console.log("How many numbers should we test?");
let iterations = Number(rlSync.question());

while (iterations > 0) {
  console.log("provide a number");
  numArr.push(Number(rlSync.question()));
  iterations--;
}

console.log("provide a number");
let testNum = Number(rlSync.question());

console.log(numArr.includes(testNum) ?
  `The number ${testNum} appears in ${numArr.join(", ")}.` :
  `The number ${testNum} does not appear in ${numArr.join(", ")}.`);


