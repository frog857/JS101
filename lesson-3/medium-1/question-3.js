function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(10));
console.log(factors(0));
console.log(factors(-10));

/**
 * The purpose of number % divisor === 0 is the essential logic of
 * checking whether a given divisor will yield a factor for the number.
 * If the remainder of the number / divisor is 0, then we know this divisor
 * is a factor of number.
 */

/**
 * If you change line 6 to factors.push(divisor), you will get the same values
 * in the reversed order. The divisor and the factor multiply to equal the
 * number. in essence, the divisor is a factor...
 */

