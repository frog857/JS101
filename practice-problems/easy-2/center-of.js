function centerOf(str) {
  // if string is odd, return the char at index of half the length
  if (str.length % 2 === 0) {
    return str[(str.length / 2) - 1] + str[str.length / 2];
  } else {
    return str[Math.floor(str.length / 2)];
  }
  // even return the char at index of half th length and the char before
  // edge case: if there is one char, return that char
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"