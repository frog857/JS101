let munstersDescription = "The Munsters are creepy and spooky.";
let lowerRegex = /[a-z]/;
let upperRegex = /[A-Z]/;

let splitString = munstersDescription.split("");
let newStr = "";

splitString.forEach(char => {
  if (lowerRegex.test(char)) {
    newStr += char.toUpperCase();
  } else if (upperRegex.test(char)) {
    newStr += char.toLowerCase();
  } else {
    newStr += char;
  }
});

console.log(newStr);

// I know this is ugly, just messing around to understand arrow functions...

// munstersDescription
//   .split("")
//   .map(char => (char.toLowerCase() === char) ?
//   char.toUpperCase() :
//   char.toLowerCase())
//   .join("");
//     // if (char === char.toLowerCase()) {
//     //   return char.toUpperCase();
//     // } else {
//     //   return char.toLowerCase();
//     // }
// console.log(munstersDescription);

/** For fun, considered solving with a 'data structure'... sputtered out, though
function swapCase(char) {
  return letterCodes.lowerCaseCodes[char] ?
    letterCodes.upperCaseCodes[char] :
    letterCodes.lowerCaseCodes[char];
}
const letterCodes = {
  lowerCaseCodes: {
    a: 97,
    b: 98,
    c: 99,
    d: 100,
    e: 101,
    f: 102,
    g: 103,
    h: 104,
    i: 105,
    j: 106,
    k: 107,
    l: 108,
    m: 109,
    n: 110,
    o: 111,
    p: 112,
    q: 113,
    r: 114,
    s: 115,
    t: 116,
    u: 117,
    v: 118,
    w: 119,
    x: 120,
    y: 121,
    z: 122
  },
  upperCaseCodes: {
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90
  }
};
 */