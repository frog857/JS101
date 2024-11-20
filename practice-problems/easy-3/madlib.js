let rlSync = require("readline-sync");

console.log("Please provide a noun");
let noun = rlSync.question();
console.log("Please provide a verb");
let verb = rlSync.question();
console.log("Please provide a adjective");
let adjective = rlSync.question();
console.log("Please provide a adverb");
let adverb = rlSync.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle. `);