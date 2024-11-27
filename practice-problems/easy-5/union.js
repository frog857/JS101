function union(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return [... new Set(newArr)];
  
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]