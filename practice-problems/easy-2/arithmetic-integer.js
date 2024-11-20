const rlSync = require("readline-sync");

function prompt(msg) {
  console.log("=> " + msg);
}

prompt("type a number");
let num1 = Number(rlSync.question());

prompt("type another number");
let num2 = Number(rlSync.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${num1 / num2}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
