/* eslint-disable no-trailing-spaces */
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

/**
 * Variables: boo line 2, scare line 2, myBoo line 3,
 * halloweenCollection line 7, greet, scare wish (prop names), global myBoo
 * 
 * Primitives: "!!!", myBoo line 4, "Happy Halloween", "Boo", "May...glowing"
 * greet, scare, wish?, "greet"
 * 
 * Objects: boo function definition, halloween Object.
 */
