const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function signedIntToStr(int) {
  let str = "";
  let positive = true;
  if (int !== Math.abs(int)) positive = false;
  if (!positive) int *= -1;
  if (int === 0) return "0";

  while (int > 0) {
    let lastDig = int % 10;
    str = DIGITS[lastDig] + str;
    int = Math.floor(int / 10);
  }
  return positive ? "+" + str : "-" + str;
}


console.log(signedIntToStr(4321) === "+4321");
console.log(signedIntToStr(-123) === "-123");
console.log(signedIntToStr(0) === "0");