Yes, there is a difference in the implementation. In the first implementation using the `.push()` method, she is mutating the array referenced by buffer. The array returned will be the same array in memory, with modified elements.

In the second implementation, she reassigns the `buffer` variable to a new array, which is the return value of invoking the `.concat()` method on the array referenced by `buffer`. The concat method will merge an array to a new array, and return a new array. The original array in memory is not modified in this instance.

If we passed in an array to the second implementation, this array would be modified in global memory. Example:

```javascript
let arr = [1, 2, 3];
addToRollingBuffer2(arr, 4, 3);
console.log(arr); // logs [1, 2, 3]
```

However, if we use the first implementation, we will see the array in global memory mutated. Example:

```javascript
let arr = [1, 2, 3];
addToRollingBuffer1(arr, 4, 4);
console.log(arr); // logs [1, 2, 3, 4]
```
---

What will the following two lines of code output:

```javascript
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```
The first output will be a number very close to `0.9`. The second output will be `false`. This is because Javascript approximates floats.