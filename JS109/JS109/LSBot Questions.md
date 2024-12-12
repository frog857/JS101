

1. Explain what this code does and what it will output:

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);
```
In this code snippet, we will see `[2, 4, 6, 8, 10]` logged to the console.

We first declare the variable `numbers`, and initialize it's value to `[1, 2, 3, 4, 5]`. We then declare another variable `doubled` and initialize its value to the results of  calling the `.map()` method on the `numbers` variable. 

`.map()` iterates over an array, and applied a callback function on each element, returning a new array with the modified values. In our example, each element is multiplied by 2 using the code `num * 2`. Thus, the new array will have the same number of elements, with each element modified by the callback function.

---
2. What will be the value of `result` after this code runs? Explain why:

```javascript
let result = ['a', 'b', 'c'].filter(char => char > 'b');
```
The value of `result` after this code runs will be `['c']`, or an array containing one element, the string `'c'`.

We declare result and initialize it to the returned value of invoking `.filter()` on the array `['a', 'b', 'c']`. Filter will iterate through the array it is invoked on, performing a provided callback function on each element. If the callback function returns a truthy value, the element will be appending to a *new* array. If the callback returns falsy, it will not be included.

In the callback function in this snippet, we test if the variable `char` is `>` or "greater than" the string `"b"`. When javascript compares strings with operators, it will compare them in alphabetical order using their character codes. This causes only the 3rd element `"c"` to pass the test, and thus we return an array with one element: `['c']`.

---
3. Describe what this function does and give an example of how you would call it:

```javascript
function repeat(string, times) {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}
```

This function has two parameters, `string` and `times`, and will return a string concatenated to itself `times` times. For example if we passed in the string `"bunny"` and the number `3`, we would expect the function to return `"bunnybunnybunny"`.

The function achieves this by declaring a variable result and initializing it to an empty string  `''`. We then enter a for loop, iterating through the loop as many times as the passed in `times` argument indicates. On each iteration, we reassign `result` to be its current value appended to the passed in argument `string`. 

When all iterations are done, we expect to have the value associated with`string` repeated as many times as the passed in `times` argument.

---
-  What is type coercion in JavaScript? Provide an example of implicit type coercion.

Type coercion in Javascript refers to the way Javascript will attempt to compare data of different types. Since Javascript is a weakly typed language, it will not always throw errors when an operation is attempted on data of the wrong type. For example,

```javascript
let myVar = 6 + "x"
console.log(myVar) // "6x"
typeof myVar // 'string'
```

In this instance, when attempting to use the `+` operator on a string and a number, the number operand is first coerced into a string before using the `+` operator to append the strings together.

In general, we should avoid implicit coercion, as it is difficult to remember the precise rules, and can lead to unpredictable behavior.

We also have explicit type coercion. We can purposefully coerce one type of data to another:

```javascript
let myStringNum = String(400);
console.log(myStringNum); '400'
typeof myStringNum; // 'string'
```

There are built in methods and constructors, such as `String()`, that we can use to reliable and predictably coerce data to another type. These are encouraged.


### HARD

1. Explain what this code does and what it will output:

```javascript
let obj = { a: 1, b: 2, c: 3 };
let result = Object.entries(obj).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});
console.log(result);
```

This code makes use of the `Object.entries()` static method, as well as the `reduce()` method to swap keys and values in an object. This code will log `{ 1: "a", 2: "b, 3: "c" };`

We first call the static method `Object.entries()` passing in `obj` as an argument. This creates a 2-D array of key/value pairs: `[["a", 1], ["b", 2], ["c", 3]]`. We then apply the `reduce` method to this 2-D array, passing in an anonymous callback function. We set the accumulator `acc` to an empty object `{}`, and the current value to `[key, value]`. 

Within the callback, we use bracket notation to access and create new properties on our empty `acc` object. By writing `acc[value] = key;`, we swap the position of the key and the value on each iteration. We do this for each nested array, which leaves us with a single object, which is then logged to the console.


2. What will this code output and why? Explain the concept it demonstrates:

```javascript
let arr = [1, 2, 3, 4, 5];
arr.forEach(num => {
  if (num % 2 === 0) {
    arr.shift();
  }
});
console.log(arr);
```

This code will log the array `[3, 4, 5]`. This is due to the mutative method `.shift()` being called within a `.forEach()` loop.

We declare and initialize an array with 5 elements, `[1, 2, 3, 4, 5]`. Three of these elements are odd, and two are even. We invoke a `.foreach()` loop on this array, checking to see if each element is even. If the element is even, we run the code `arr.shift()`. This method will remove the element at the 0th index of the array, mutating the original array.

As mentioned earlier, since two element will pass this conditional, the `shift()` method will be invoked two times. Thus, we will see two elements removed from the beginning of the array, and this is logged to the console.

---
3. Describe what this function does and explain its time complexity:

```javascript
function mystery(arr) {
  return arr.reduce((result, num, index) => {
    if (index % 2 === 0) {
      result.push(num);
    } else {
      result[result.length - 1] *= num;
    }
    return result;
  }, []);
}
console.log(mystery([1, 2, 3, 4, 5, 6]))
```

This function makes clever use of the `reduce` method to create and return an array of roughly half the length of the original array, comprised of the products of multiplied pairs of numbers. The pairs will be determined by using even and odd indexes. The result logged here will be `[2, 12, 30]` or `[(1 * 2), (3 * 4), (5 * 6)]`

Within the callback of reduce, we make use of three parameters, `result, num, index`. `result` is set to an empty array `[]`. On each iteration, we test if the `index` is an even or odd number. If so, we push the current value `num` to the accumulator `result`. If not, we will access the last element in the `result` array using the length property. We will then multiply that last element by the current value `num`. 

In the first two iterations this results in the elements `1` and `2` being multiplied. In the second iteration, `3` and `4`, and so on. Note that if the original array `arr` has an odd length, the last element will only be pushed to the accumulator, but not multiplied by any value. 

The length of the returned array will either be exactly half of the passed in array (in the case of an even number of elements), or half of the length + 1 (in the case of an odd number of elements.).

