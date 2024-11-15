function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

/**
 * The code above will have different outcomes. This is due to Automatic
 * Semicolon Insertion in Javascript as it relates to the return keyword.
 * the function first will return the object literal with prop1: "hi there",
 * while the second function will return undefined, and the object literal
 * will never be evaluated. Semicolon's will automatically be inserted at
 * the end of line 8 and the end of line 11.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return#automatic_semicolon_insertion
 */

