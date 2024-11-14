// #1
let numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice();
console.log(numbers.splice());

// #2
/**
 * This problem looks as though it will concatenate the two arrays. However, in
 * Javascript, we can't do this with the + operator. The + operator will instead
 * coerce the arrays into strings, and return a concatenated string.
 */

// #3
/**
 * hello there. On line 1, we declare a variable str1 and initialize it
 * to the string "hello there" On line 2, we declare another variable str2
 * and initialize it to the value of str1. Since str1 is a primitive, we know
 * that str2 is initialized to a COPY of the value of str1, in a DIFFERENT
 * address in memory. Therefore, when we reassign str2 on line 3, it has
 * no effect on the value assocaited with str1. They're independent.
 */

// #4
/**
 * Nothing will chance. the slice method returns a shallow copy of the array.
 * Therefore, any modifications on the copied array have no bearing.
 * EDIT: I was correct in understanding slice returns a shallow copy. I was
 * incorrect in believing that meant that pointers within the shallow copy
 * point to different subobjects... A DEEP COPY would create new values for
 * those subobjects.
 */

// #5
function isColorValid(color) {
  return color === "blue" || color === "green";
}
const isColorValid2 = color => color === "blue" || color === "green";
const isColorValid3 = color => ["blue", "green", "fuschia"].includes(color);

console.log(isColorValid2('green'));
console.log(isColorValid('green'));
console.log(isColorValid3('green'));

// #6
/**
 * variables: arr, newArr, num, newNum, double, num(parameter)
 * primtives: 1, 2, 3, num->1, index0 newNum->1, 2(in function),
 * arg num->1, returnvalue2 MISSED: 2 in function... duh. got the param tho
 * objs: [1, 2, 3], function body of double
 */

