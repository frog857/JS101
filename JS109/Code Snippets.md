Explain what's going on in the code. What gets logged to the console and why?

```javascript
function anyNegatives(arr) {
  return arr.forEach(num => {
    if (num < 0) return true;
  });
}
let numbers = [1, 2, 3, -5, 4];

if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}
```

The string `"The array contains no negatives!"` will be logged to the console.

On line 7, the a global variable `numbers` is declared and initialized to the arrray `[1, 2, 3, -5, 4]`. On line 9, we enter an `if/else` statement, checking the evaluation of `anyNegatives(numbers)`. 

Passing in `numbers` to the `arr` parameter, we then enter the function body. This function will return the result of calling the `.forEach()` method on the  function scoped `arr` variable. Within the `.forEach()` iteration, we check to see if each element is less than 0. If so, that iteration will return true. If all iterations are made, the default return will be `undefined`. 

However, since `.forEach()` is solely iterates over an array, the return value will be ignored. Instead, `.forEach()` will always return `undefined`. This value is returned from the `anyNegatives(numbers)` invocation on line 9, and the expression evaluates to falsey. 

This causes the thread of execution to skip the first block of code, and instead execute the line of code on line 12, resulting in ``"The array contains no negatives!"`` being logged to the console.


---
**WRONG**
The string `"The array contains at least one negative number!"` will be logged to the console. 

In this code snippet, we have a function `anyNegatives` which will return true if the passed in `arr` argument contains negatives, and will return `undefined` if not. The function implements this using the `.forEach` method to iterate through the array and perform a check on each element to see if the element is negative. If an element is negative, it will return true, breaking out of the iteration. If it makes it through all iterations, `.forEach` will return `undefined`, by default. This value is also returned from the `anyNegatives` function. 

Knowing this, when we call `anyNegatives(numbers)` within the `if/else` conditional statement, we know that it will evaluate to trie, since `numbers` does contain a negative number. This results in the log.

---
What is happening in this code?

```javascript
let arr1 = ["a", "b", "c"];
let arr2 = arr1.filter((letter, idx) => {
  return arr1.unshift(idx);
});
console.log(arr1); 
console.log(arr2); 
```

In this code, we declare and initialize a variable `arr1` to the array `["a", "b", "c"]`. We then declare a variable `arr2` and initialize it to the return value of calling the `filter()` method on `arr1`. The filter method will return a shallow copy of the array it is called upon, only including the elements which pass the test the callback function. 

Within the filter method, we pass in an anonymous callback function with parameters `(letter, idx)`. Within the filter invocation, will iterate three times over the elements in `arr1`. However, each time we iterate, we mutate `arr1`, adding the value of `idx` to the beginning of the array using the `unshift()` method. This results in `arr1` being assigned to a reference to the array `[2, 1, 0, 'a', 'b', 'c']` in memory. 

We are using filter, which only appends an element to the new array if the return value of the callback is truthy. To determine this, we must know that `.unshift()` will return the length of the mutated array it has been called upon. In our case, the length is always greater than 0, and will be truthy.

 Each time we iterate, our `idx` is incremented by 1. However, since the elements are being shifted to the right on each iteration, the iterations of `filter` will always be carried out on `"a"` We have determined that each iteration will pass the test for filter, and thus an array with three elements, `["a", "a", "a"]` will be assigned to `arr2`

On the last two lines of code, we log these arrays. `[2, 1, 0, 'a', 'b', 'c']` and `["a", "a", "a"]`
