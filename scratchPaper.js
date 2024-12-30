let arr = [1, 2, 3, 4];


arr.forEach((num, idx, arr) => {
  arr[idx] += 1;
});

console.log(arr);