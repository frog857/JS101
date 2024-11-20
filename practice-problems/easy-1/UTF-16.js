function utf16Value(str) {
  // input: string
  // output: the sum of the individual UTF string values
  // edge cases: string of length 0, characters without numeric values, spaces?
  if (!str.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    sum += char.charCodeAt();
  }
  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA ));                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811