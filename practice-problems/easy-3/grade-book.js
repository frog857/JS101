function getGrade(...nums) {
  let total = nums.reduce((acc, cVal) => acc + cVal);
  let avgScore = total / nums.length;

  if (avgScore >= 90 && avgScore <= 100) {
    return 'A';
  } else if (avgScore >= 80 && avgScore < 90) {
    return 'B';
  } else if (avgScore >= 70 && avgScore < 80) {
    return 'C';
  } else if (avgScore >= 60 && avgScore < 70) {
    return 'D';
  } else if (avgScore >= 0 && avgScore < 60) {
    return 'F';
  } else {
    return 'Invalid score'; // Handle out-of-range scores
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"