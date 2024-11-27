const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString2(num) {
  if (num === 0) return "0";
  let strArr = [];
  while (num > 0) {
    let lastDig = num % 10;
    strArr.unshift(DIGITS[lastDig]);
    num = (num - lastDig) / 10;
  }
  return strArr.join("");
}

console.log(integerToString2(4321));        // "4321"
console.log(integerToString2(0));           // "0"
console.log(integerToString2(5000));        // "5000"
console.log(integerToString2(1234567890));  // "1234567890"


function integerToString(num) {
  let str = '';
  if (num === 0) return "0";
  while (num > 0) {
    let lastDig = num % 10;
    str += returnStr(lastDig);
    num = (num - lastDig) / 10;
  }
  return str.split("").reverse().join("");
}

function returnStr(num) {
  switch (num) {
    case 0: return "0";
    case 1: return "1";
    case 2: return "2";
    case 3: return "3";
    case 4: return "4";
    case 5: return "5";
    case 6: return "6";
    case 7: return "7";
    case 8: return "8";
    case 9: return "9";
  }
  return "invalid integer";
}

console.log(integerToString(4321) === "4321");        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

