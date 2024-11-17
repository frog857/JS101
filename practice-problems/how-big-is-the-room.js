// constants and depedencies
const rlSync = require("readline-sync");
const SQ_METERS_TO_SQFEET = 10.7639;

//functions
function promptUser(msg) {
  console.log("=> " + msg);
}

//program flow

promptUser("Is your room measured in meters or feet?");
let answer = rlSync.question();

promptUser("How long is the room?");
let width = parseInt(rlSync.question(), 10);

promptUser("How wide is the room?");
let height = parseInt(rlSync.question(), 10);


let areaInSquareMeters;
let areaInSquareFeet;
if (answer === "meters") {
  areaInSquareMeters = width * height;
  areaInSquareFeet = areaInSquareMeters * SQ_METERS_TO_SQFEET;
  promptUser(`The area is ${areaInSquareMeters.toFixed(2)} square meters, or ${areaInSquareFeet.toFixed(2)} square feet.\n`);
}

if (answer === "feet") {
  areaInSquareFeet = width * height;
  areaInSquareMeters = areaInSquareFeet / SQ_METERS_TO_SQFEET;
  promptUser(`The area is ${areaInSquareFeet.toFixed(2)} square feet, or ${areaInSquareMeters.toFixed(2)} square meters.\n`);
}


