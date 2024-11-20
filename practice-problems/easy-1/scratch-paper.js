// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

for (let i = 1; i < 100; i++) {
  if (isOdd(i)) console.log(i);
}

let index = 1;
while (index < 100) {
  // console.log(index);
  index += 2
}

for (let i = 1; i <= 99; i++) {
  if (!isOdd(i)) console.log(i);
}
