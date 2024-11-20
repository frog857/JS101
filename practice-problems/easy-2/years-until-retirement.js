let todaysDate = new Date();
console.log(todaysDate);
const rlSync = require("readline-sync");

console.log("How old are you?");
let age = Number(rlSync.question());

console.log("When do you want to retire?");
let retirementAge = Number(rlSync.question());
let yearsToRetirement = retirementAge - age;

console.log(`Today is ${todaysDate.getFullYear()}. You can retire in ${todaysDate.getFullYear() + yearsToRetirement}.`);