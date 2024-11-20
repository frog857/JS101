function negative(num) {
  //return Math.abs(num) * -1;
  return (num === Math.abs(num)) ? -num : num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0