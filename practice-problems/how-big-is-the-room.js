// constants and depedencies
const rlSync = require("readline-sync");

//functions
function promptUser(msg) {
  console.log("=> " + msg);
}

//program flow
while (true) {
  promptUser("Let's see how big that ROOM is, sir.");
  promptUser("How long is the room? (in meters)");
  let width = rlSync.question();

  promptUser("How wide is the room? (in meters)");
  let height = rlSync.question();

  let areaInSquareMeters = Number(width) * Number(height);
  promptUser(`The area is ${areaInSquareMeters} square meters,
     or ${areaInSquareMeters * 10.7639} square feet.`);
  break;
}
