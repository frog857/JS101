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

The string `"The array contains no negatives!"` will be logged to the console. This is due to the fact that the `.forEach` method in Javascript will always return `undefined`. 

Within the `if/else` block, we invoke the `anyNegatives` function passing in `numbers`, as an argument. Within the function body, we iterate over each of the elements of the passed in array `arr`, and check to see if the element is less than 0. If so, we return `true`. Otherwise we do nothing.

However, as noted at the beginning, regardless of what happens in a `.forEach` loop, the value returned will be undefined. Since this is what is returned from the function `anyNegatives`, the `if/else` conditional will evaluate as falsey, and we will enter the else block. Thus, we see the corresponding log.

This code illustrates we must understand return values and how where they are placed in code determines what is evaluated. 

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

---
What does the following code do? What gets logged to the console and why?
```javascript
function hasEvenNumber(arr) {
  return arr.map(num => {
    if (num % 2 === 0) return true;
  });
}
let values = [1, 3, 5, 8, 11];

if (hasEvenNumber(values)) {
  console.log("The array contains an even number!");
} else {
  console.log("The array contains no even numbers!");
}

```

In this code, we have a function declaration, a variable declaration with the value of an array, and an `if/else` conditional statement. This code will log `"The array contains an even  number!"` to the console. 

In the first test case of the `if/else` block, we invoke `hasEvenNumber` passing in the argument `values`. Within the function body, we return the result of invoking the `.map()` method on the local variable `arr`. The map method will return a new array with the return values of a callback function, which is called on each element of the calling array. 

In our case, the array will contain a mixture of `true` and `undefined` values, given that any even numbers will return `true`, and otherwise the function's default return value is `undefined`. Regardless, an array is returned from `hasEvenNumber`, and thus, is a truthy value. This causes the code to execute the first block of code in the `if/else` conditional, and thus we see the log.

Furthermore, it is pertinent to note than even an empty array will evaluate as truthy. We might append the `.length` property to an evaluated array to determine whether we want to represent truthiness or falsiness based on some data.

The key concepts at play here are:
- understanding the map method and it's return value
- understanding how truthy and falsy vales will affect an `if/else` conditional.