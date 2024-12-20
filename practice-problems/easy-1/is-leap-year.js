function isLeapYear(year) {
  // ## rules to be a leap year
  // year is divisible by 4
  // year is not divisible by 100
  // year is divisible by 400
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function isLeapYear2(year) {
  return year < 1752 ? year % 4 === 0 : isLeapYear(year);
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

console.log(isLeapYear2(1700));      // false
console.log(isLeapYear2(1));         // false
console.log(isLeapYear2(100));       // false
console.log(isLeapYear2(400));       // true