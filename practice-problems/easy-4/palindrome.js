function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else if (str.length) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return true;
}


// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

function isRealPalindrome(str) {
  let trimmedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log(trimmedStr)
  return isPalindrome(trimmedStr);
}

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

function isPalindromicNumber(num) {
  console.log(num.toString())
  return isPalindrome(num.toString());
}

console.log(isPalindromicNumber(003454300));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true