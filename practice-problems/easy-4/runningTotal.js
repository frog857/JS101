function runningTotal(arr) {
  let newArr = [];

  if (!arr.length) return newArr;

  let lastEl = arr.reduce((acc, cval) => {
    newArr.push(acc);
    acc += cval;
    return acc;
  });

  newArr.push(lastEl);
  return newArr;
}

// function runningTotal(arr) {
//   let newArr = [];
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     newArr.push(total);
//   }
//   return newArr;
// }

//bobs solution!
// function runningTotal(arr) {
//   let total = 0;
//   return arr.map(num => total += num);
// }

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []