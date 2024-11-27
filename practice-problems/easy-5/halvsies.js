function halvsies(arr) {
  let arr1 = [];
  let arr2 = [];
  let halfwayIndex = Math.ceil(arr.length / 2);

  for (let idx = 0; idx < arr.length; idx++) {
    if (idx < halfwayIndex) {
      arr1.push(arr[idx]);
    } else {
      arr2.push(arr[idx]);
    }
  }

  return [arr1, arr2];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

let myArr = [1,2,3,4,5];

console.log(halvsies(myArr));
console.log(myArr);