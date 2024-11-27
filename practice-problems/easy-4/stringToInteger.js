function stringToInteger(str) {
  let multiplier = 1;
  let total = 0;
  while (str.length > 0) {
    let strNum = str.slice(str.length - 1);
    total += returnInt(strNum) * multiplier;
    str = str.slice(0, str.length - 1);
    multiplier *= 10;
  }
  return total;
}


function returnInt(strNum) {
  switch (strNum) {
    case "0": return 0;
    case "1": return 1;
    case "2": return 2;
    case "3": return 3;
    case "4": return 4;
    case "5": return 5;
    case "6": return 6;
    case "7": return 7;
    case "8": return 8;
    case "9": return 9;
  }
  return "Non-valid str";
}

console.log(stringToInteger("004321")); // logs true
console.log(stringToInteger("0057122310")); // logs true

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToSignedInteger(strNum) {
  let positive = true;
  if (strNum[0] === "-") {
    strNum = strNum.slice(1);
    positive = false;
  } else if (strNum[0] === "+") {
    strNum = strNum.slice(1);
  }

  let arrOfDigits = strNum.split("").map(char => DIGITS[char]);
  let total = 0;
  arrOfDigits.forEach(digit => (total = (total * 10) + digit));

  return positive ? total : -total;
}

console.log(stringToSignedInteger("4321")); // logs true
console.log(stringToSignedInteger("-570")); // logs true
console.log(stringToSignedInteger("+100")); // logs true