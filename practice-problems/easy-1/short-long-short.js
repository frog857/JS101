function shortLongShort(str1, str2) {
  // determine which string is longer
  // return a concatenated string...

  if (str1.length > str2.length) {
    return str2 + str1 + str2
  } else {
    return str1 + str2 + str1
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"