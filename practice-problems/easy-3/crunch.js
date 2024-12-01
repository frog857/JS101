// function crunch(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== newStr[newStr.length - 1]) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// function crunch(text) {
//   let index = 0;
//   let crunchText = '';

//   while (index <= text.length) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }


function crunch(string) {
  let pattern = /(.)(?=\1)/g;
  return string.replace(pattern, ""); 
  // let newStr = "";
  // for (let idx = 0; idx < string.length; idx++) {
  //   if (string[idx] !== string[idx + 1]) {
  //     newStr += string[idx];
  //   }
  // }
  // return newStr;
}

let dailyDouble = ['ddaaiillyy ddoouubbllee'];
dailyDouble[0] = crunch(dailyDouble[0]);    // "daily double"
console.log(dailyDouble[0]);

console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""