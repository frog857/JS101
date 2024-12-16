```javascript
let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);
```
What will the following code log to the console and why? Don't run it until you have tried to answer.

Answer 1:
This code will log the array  `["red", "green", "blue", "yellow"]`. The main concept at play here is how objects are passed-by-reference in Javascript. 

When we invoke `updateColors(colors)` we are passing in the global variable `colors` as an argument, which contains a reference to the array `["red", "green", "blue"]`. Within the function, the parameter `colors` is assigned a reference to the *same* array in memory. Thus, when the destructive `.push()` method is called on this array, both the function scoped `colors` and the global scoped `colors` now point to the same mutated array. This is the value we see logged.

Note that there is variable shadowing at play here, where the function scoped `colors` blocks the global variable `colors`. However, since both variables are assigned to a reference to the same array, this doesn't prevent the array from being changed.

Answer 2:
This code will log the array  `["red", "green", "blue", "yellow"]`. This will happen because of the function invocation of `updateColors` with the argument `colors` passed in as a reference. Within the function body of `updateColors`, we call the .push() method on the variable colors, which points to the object in global memory `["red", "green", "blue"]`. When this happens, this object is mutated, and the string `"yellow"` is appended to it at the 3rd index. The concept at play here is that objects are "passed-by-reference". So even though there is a local variable `colors` shadowing the global variable `colors`, both variables are pointing toward the very same object in memory, which is mutated within the function.



```javascript
let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);
```
What will the following code log to the console and why? Don't run it until you have tried to answer.

This will output `["red", "green", "blue", undefined]` to the console. In the function body of updateColors, we are mutating the array referenced by the `colors` variable (the same array referenced by global `colors` variable). We are passing the variable `color` into the `.push()` method. Javascript will look in the local (function) scope first, where it finds the `color` varaible. However, since no argument was passed in, and no default parameters are provided, the value of `color` will be `undefined`. Thus, when we pass it into the `.push()` method,  `undefined` is appended to the array. The concept at play here is understanding that Javascript will look in local memory (scope) first before looking into global memory for a variable. If there are variables of the same name, the local variable will shadow the global variable.


```javascript
let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);
```

What will the following code log to the console and why? Don't run it until you have tried to answer.

We invoked the function `updateColors` twice in this program. On the first invocation, we pass in the arguments `colors` and `color1`. Since objects are pass-by-reference in Javascript, when we invoke the `.push()` method on the function scoped variable `colors`, this will mutate the global object (array) `colors` by adding the passed-in-value of `color1`, `"purple"`. After the first invocation, the array referenced by `colors` will be `["red", "green", "blue", "purple"]`.

We then invoke `updateColors` once more, passing in `colors` and `color2` as arguments. Following the same logic as above, global `colors` now points to the array: `["red", "green", "blue", "purple", "pink"]`. This is what will be logged on the last line.


```javascript
let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);
```

What will the following code log to the console and why? Don't run it until you have tried to answer.

This code will log `["red", "green", "blue", "purple", "pink"]` to the console. 

On the first invocation of `updateColors`, we pass in `colors` and `color1` as arguments. Within the function body, we call the `.push()` method on the local variable `colors`, passing in `color1` which contains a copy of `"purple"`. Since objects are passed-by-reference in Javascript, this method will mutate the array in global memory. Additionally, the function also returns `colors`. This will result in the `newColors` variable also pointing to that same object (array) in memory, which at this point in the program, is `["red", "green", "blue", "purple"]`.

On the second invocation of `updateColors`, we pass in `newColors` and `color2`. Since `newColors` references the same object (array) in memory, this will result in that object being modified. At the end of the program, `newColors` and `colors` reference the same array, which will be logged to the console.



```javascript
function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize();
let exclaimedWord = exclaim();

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
```

What will the following code log to the console and why? Don't run it until you have tried to answer.

**REDO**
In this program, we first declare and initialize the variable `word` to `"hello"`. Then we declare the variable `capitalizedWord` and initialize it's value to the result of the invocation `capitalize(word)`. Within this invocation, we return the result of appending the capitalized first character of the global `word` variable to the remaining characters, making use of two methods. This will result in `"Hello"` being assigned to `captizalizedWord`. Lastly, we invoke `exclaim(capitalizedWord)`. However, we should note that since the function definition `exclaim()` does not have any parameters, the global variable `word` is being handled. When we reassign this global variable with the code `(word += "!!!")` this will be reflected both by the global `word` variable as well as being assigned to the `exclaimedWord` variable. 

Thus, when we log the three variables, we will see `"hello!!!"`, `"Hello"` and `"hello!!!"`.



**WRONG ANSWER BELOW**
In this program, we have two function bodies, three declared variables, and two invocations of the functions. We then `console.log` the variables to check their values. 

- The variable `word` is declared and initialized. `word` is never reassigned, so this value will be logged as `"hello"`. 
- The variable `capitalizedWord` is initialized to the return value of invoking `capitalize(word)`. Within that function, the first index of `word` is appended to the result of calling `.slice(1)` on word, which will evaluate to all characters except the first character of `word`. When these are appended, the value `"Hello"` will be returned and assigned to `capitalizedWord`. This is what will be logged to the console. 
- The variable `exclaimedWord` is declared and assigned to the result of invoking `exclaim(capitalizedWord)`. In this function invocation, we return the value of `word` appended to `"!!!"`. Here we must note that the function-scoped variable `word` hasn't been declared, nor initialized. Thus, Javascript will look outside the function scope, and find the value `"hello"` assigned to the global `word` variable. Thus, the result of the appended values is `"hello!!!"`, which will be logged to the console.

The key concept at play here is the use of parameters and arguments in function definitions and invocations. In this instance, Javascript ignores the passed in arguments, as the function definitions do not have parameters to match them with.


```javascript
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
```

This function will log `"hello"`, `"Hello"`, and `"Hello!!!"` to the console. 

First, the program declares and initialized the variable `word` to `"hello"`. Since this global variable is never reassigned, this value will be logged.

Secondly, the program declares and initializes the variable `capitalizedWord` to the return value of invoking `capitalize(word)`. When `word` is passed into the function, it is passed by value. The function then returns the result of concatenating the capitalized first character of the string to the remaining letters in the string. This returned result is `"Hello"` and is assigned to the variable `capitalizedWord`.

Lastly, the program declares and initializes the variable `exclaimedWord` to the result of invoking `exclaim(capitalizedWord)`. within the function the parameter word is assigned to the value of `capitalizedWord`. The function-scoped variable `word` is then reassigned to itself concatenated to `"!!!"` This value of `"Hello!!!"` is returned and assigned to `exclaimedWord`.

A key concept at play here is variable scoping. Since each function as a parameter `word`, any mutations made on this local variable will not affect global variables.



