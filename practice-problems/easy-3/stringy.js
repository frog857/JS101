function stringy(num) {
  let str = "";
  // for (let i = 1; i <= num; i++) {
  //   if (i % 2 === 1) {
  //     str += "1";
  //   } else {
  //     str += "0";
  //   }
  // }

  for (let i = 0; i < num; i++) {
    let number = (i % 2 === 0) ? 1 : 0;
    str += number;
  }
  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"