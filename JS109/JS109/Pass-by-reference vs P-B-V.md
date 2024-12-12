
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);
```

Answer 2: 
This code will log `'Hello'` to the console, twice. The main reason it will not log `"HELLO"`, as one might think, is because JS treats variable containing primitive values as pass-by-value.

When we invoke `changeMyWord(myWord)`, we pass a copy of the value assigned to `myWord` into the function. This argument is resolved with the parameter, `word`, creating a locally scoped variable with the value `"Hello"`. This value is logged in the first line of the function body. 

We then reassign the local `word` variable to a new string, `"HELLO"`. However, this does nothing to the global `myWord` variable, because these variables are independent. We do not return this value. Thus when we call `console.log(myWord)`, we see `"Hello"` again logged.

Answer 1:
This code will log `'Hello'` to the console, twice. The first log occurs within the function invocation of `changeMyWord` with the argument `myWord` passed in. `myWord` holds the value `'Hello'`, which is logged to the console on the first line of the function body. the locally defined variable word is then reassigned to a new value. However, this has no effect on the global myWord variable, since primitives are passed-by-value. Thus, when we hit `console.log(myWord)` in the program, the value assigned to `myWord` will remain unchanged, again logging `'Hello'`.

---
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);
```



This code will first log `Hello` and then log `HELLO`. The program first declares and initializes the global variable `myWord` to the string `"Hello"`. When `changeMyWord()` is invoked, `myWord` is passed in as an argument, and resolved to the `word` parameter. This, in effect, creates a function-scoped `word` variable that refers to the string `'Hello'`, which is logged within the function. This is the first logged value we will see.

The function scoped variable `word` then is reassigned to a new value `"HELLO"` by use of the `toUpperCase()` method being called on `word`. Lastly, the reassigned `word` is returned from the function, and assigned to the global variable `myWord`. On the last line of the program, this value is logged.

A key concept to remember here

---
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);
```


This code will log `'Hello'` twice and then `'HELLO'` once. 

When `changeMyWord(myWord)` is called, the value of `myWord` (`"Hello"`) is passed by value to the functions `word` parameter. On the first line of the function body, this value is logged, and thus we see the first log of `"Hello"`

The function then reassigns the function-scoped variable `word` to `"HELLO"` by using the `.toUpperCase()` method. This value is returned from the function, and assigned to the global variable `myOtherWord`. 

We then log the value of the global `myWord` variable, which is still `"Hello"` due to variables being pass-by-value.

Lastly, we log the value of `myOtherWord`. As mentioned above, this is the returned value from the function, `"HELLO"`. This is the 3rd log.

---
The first log will happen within the function invocation of `changeMyWord()` with `myWord` passed in as an argument. The parameter `word` acts as a local variable pointing to the value `'Hello'`, which is logged within the function body. The function-scoped variable `word` is then reassigned to a capitalized version of that string using the `toUpperCase()` method. This value of `"HELLO"` is then returned from the function, and assigned to the variable `myOtherWord`.

We then log the global variable `myWord` on the second to last line of code. Since primitives are passed-by-value, the global variable is unchanged, despite it being reassigned within the function body. Thus we see ere the second log of  `"Hello"`.

Lastly, we log `myOtherWord`. As discussed above, this value of `"HELLO"` will be logged to the console.

---

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
```


This code will log `['Hello', 'Goodbye']` and then `['Hi', 'Goodbye']`. 

We declare a variable `myWords` and initialize it to an array, `['Hello', 'Goodbye']`. We then invoke `changeMyWords`, passing in `myWords` as an argument. The parameter `words` now recieved a pointer, or a reference to that global `myWords` array. The first thing the function does is log this array to the console. Thus, we see our first log.

The function then mutates the array referenced by `words` using bracket notation. It changes the element at index 0 to be the string `"Hi"`. This mutates the array referenced by the function-scoped `words` variable as well as the globally-scoped `myWords` variable. Thus, on the last line, we see `['Hi', 'Goodbye']` logged to the console.

---
What will the following code log to the console and why? Don't run it until you have tried to answer.
```javascript
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
```

This code will log the array `['Hello', 'Goodbye']` twice to the console. 

We first declare a variable `myWords` and initialize it to the array `['Hello', 'Goodbye']`. We then invoke the `changeMyWords` function, passing in `myWords` as an argument. Since arrays are pass-by-reference in Javascript, the parameter `words` now points to the same array within the function. Firstly, we log this variable, resulting in the first log of `['Hello', 'Goodbye']` to the console.

We then reassign the function-scoped `words` variable to a new array `['Hi', 'Goodbye']`. This reassignment of the variable does not mutate the global `myWords` array. Thus, when we log this variable on the last line, we will again see `['Hello', 'Goodbye']` logged to the console.

A key concept at play here is pass-by-reference and variable reassignment. When passing objects into a function, if we mutate that object in memory, it will be reflected everywhere. However, if we reassign a variable to a new reference to an object, this will not affect other variables that reference the original array.


