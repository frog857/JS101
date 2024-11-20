/* eslint-disable id-length */
function multisum(num) {
  // from 1 to num, inclusive, if the number is divisible by 3 or 5, sum it
  // can assume that the integer is 1 or greater.

  // initialize our sum variable to 0
  // iterate from 1 to num
  // check if the number is divisible by 3 or 5, if so
  // sum the number
  // return the value of the sum variable.
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168