

// what will this snippet log to the console

```javascript
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

This code snippet will log `"one is 'one'"` `"two is 'two'"` `"three is 'three'"` to the console. A key concept at play here is variable shadowing and variable scope.

We invoked the function `messWithVars(one, two, three)` with three global variables, `one`, `two`, and `three` assigned to arrays passed in as arguments. These arguments are resolved to the parameters, also `one`, `two`, and `three`. At this point in the execution, we have function-scoped variables `one`, `two`, and `three` as well as global variables `one`, `two`, and `three`.

Within the function body, the local variable `one` is reassigned to a new array `["two"]`. The local variables `two` and `three` are similarly reassigned to new arrays. These reassignments do not mutate the existing objects, but simply reassign the *local variables* to new arrays. Furthermore, we should also be aware that these local variables will block access to the outer-scoped variables, and thus our global `one`, `two`, and `three` variables will not be reassigned.

Thus, when we execute the last three lines of code, we are referring to the global variables, `one`, `two`, and `three`, which still contain references to the original arrays they were assigned.



// What does the last line in the following code output?

```javascript
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); // => "[1, 2]"
console.log(object);
```

The last line of code will output `{ first: [1, 2] }` The key concept at play here is variables as pointers, and how javascript stores references in memory for objects. Specifically, that a mutated object will be changed, no matter what alias we use to reference it.

We declare a global variable `object` which is initialized and contains a reference to the object `{ first: [1] }`. We then declare another variable `numArray` and initialize it to the value on the property `first`. This value is the array `[1]`. We must note that `numArray` contains a *reference* to this array. 

Thus, when we call the destructive `.push()` method on this variable, we are mutating the array `[1]` in global memory. We expect to see `[1, 2]` logged on the second to last line. We will also see the mutated array reflected when logging `object`. 
