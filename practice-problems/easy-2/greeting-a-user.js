const rlSync = require("readline-sync");

function prompt(msg) {
  console.log("=> " + msg);
}

prompt("What is your name?");
let answer = rlSync.question();

if (answer[answer.length - 1] === "!") {
  console.log(`HELLO ${answer.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${answer}.`);
}