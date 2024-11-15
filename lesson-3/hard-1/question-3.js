// Given the following similar sets of code, what will each code snippet print?
// a
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // 
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * Got stumped here. Got too focused on reassignment tag, failed to note
 * that they were all just reassignations regardless. The local variables
 * were reassigned, but the global variables experienced no change.
 *  
*/

// b
function messWithVars1(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars1(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * Same as last one. Failed to note that simple reassignations are happening.
 * In this snippet, however, it's useful to note that assignations are not reassigning
 * the pointers to the global objects, rather new objects are created.
 */

// c
function messWithVars2(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars2(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * Again, bit the dust! Sillier error here. Confused splice with slice, the method
 * for conveniently returning a copy of an array with no arguments. Splice
 * does indeed mutate an array. It is destructive. And EVEN THOUGH the local
 * function variables are shadowing the global variables, they STILL HAVE the
 * ability to mutate those objects via the pointer.
 */


