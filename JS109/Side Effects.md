

```javascript
let letters = ['a', 'b', 'c'];

function removeLast(array) {
  array = [1, 2, 3];
  return array;
}

console.log(removeLast(letters));
console.log(letters)
```

  

// - it reassigns any non local-variables
// - it mutates the value of an object referenced by a non-local variable
// - it reads from or writes to a file, network connection, browser, or the system hardware
// - it raises an exception without handling it
// - it calls another function that has a side-effect