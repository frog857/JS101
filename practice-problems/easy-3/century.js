function century(year) {
  let century = Math.ceil(year / 100);
  let centuryString = century.toString();
  let lastDigCentury = centuryString[centuryString.length - 1];
  let lastTwoDigCentury =
    centuryString[centuryString.length - 2] +
    centuryString[centuryString.length - 1];


  if (Number(lastTwoDigCentury) > 10 && Number(lastTwoDigCentury) < 14) {
    return centuryString + "th";
  }

  switch (lastDigCentury) {
    case "1": return centuryString + "st";
    case "2": return centuryString + "nd";
    case "3": return centuryString + "rd";
    default: return centuryString + "th";
  }

  // 1st 2nd 3rd 4th 5th 6th 7th 8th 9th

}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(21201));       // "113th"