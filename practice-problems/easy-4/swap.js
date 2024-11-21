function swap(sentence) {
  let words = sentence.split(" ");
  return words.map(word => {
    if (word.length === 1) return word;
    let firstChar = word[0];
    let lastChar = word[word.length - 1];
    let newWord = `${lastChar}${word.slice(1, -1)}${firstChar}`;
    return newWord;
  }).join(" ");
}

// doesn't work:
// function swap(sentence) {
//   let words = sentence.split(" ");
//   return words.map(word => {
//     let newWord = word.split("").reverse().join("");
//     return newWord;
//   }).join(" ");
// }

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"