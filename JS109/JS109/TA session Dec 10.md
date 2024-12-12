
// What will be logged to the console and why? -- Nick
  
```javascript
const original = {
  a: 1,
  b: { c: 2 },
};

const shallowCopy = { ...original };

shallowCopy.a = 10;
shallowCopy.b.c = 20;
shallowCopy.b = {a: "hello"};

console.log(original.a, original.b.c);
console.log(shallowCopy.a, shallowCopy.b.c);
```

The code will log `1 20` and then `10 20` when logging the `original` and `shallowCopy` objects. The concept at play here is variables as pointers, or in this case, properties as pointers. 

We have two objects in this code, referenced by two variables. The objects contain two properties, `a: 1` and `b: {c: 2}`. Since variables are pointers, we must note that the second property `b: {c: 2}` contains a reference the same object in both `original` and `shallowCopy`. Thus `original.b` and `shallowCopy.b` share the same reference.

When we reassign the value of property `a` to `10` on `shallowCopy`, this change is reflected only in the `shallowCopy`object. However, when we reassign the value of property `c` to `20` within the nested object `b`, we are reassigning the object in both outer objects. Thus, we will see it reflected in the console.logs.

  

// What is logged on the last line? Explain -- MOnte

  
```javascript
const a = 1 && 2;
const b = 0 || 3;

if (a > b) {
c = a;
} else {
c = b;
}
console.log(c);
```

`3` will be logged in this code. This is due to how the binary `&&` and `||` operators evaluate. We also should take note of implicit declaration of a variable in global scope when omitting the `let` or `const` keywords.

In the expression `1 && 2`, both operands are truthy. When this is the case with the `&&` operator, the last operand is evaluated (returned), and in this case assigned to variable `a`.  In the expression `0 || 3` The first truthy operator is returned, and assigned to `b`. 

When performing the comparison in the `if/else` block, our expression will evaluate falsy, as 2 is not greater than 3. Thus we execute `c = b`, which will implicity declare `c` in the global scope and assign it to the value of `b`, or `3`. 

In OR operators, the first truthy or last falsy value is evaluated. In AND operators, the first falsy or last truthy value is evaluated. This is due to short circuit behavior.
  

// What is the output? Explain why. -- Xavier

```javascript
const person = {
  name: 'Alice',
  age: 30
};

function updateAge(obj) {
  obj = { name: 'Alice', age: 31 };
}

updateAge(person);
console.log(person);
```

This code will log `{name: 'Alice', age: 30}` to the console.

We pass in the `person` object by reference as an argument in the `updateAge` function. Within the function, the local variable `obj` now shares a reference with the global `person` variable. However, when we perform reassignment in the function, this simply breaks the linkage between this local variable and the global variable. 

Thus, we won't see any changes reflected in the object referenced by `person` when we log it to the console.

  

// What will be the output on the last line of code? What concept does it demonstrate? -- Quinlan

```javascript
function addOne(num) {
  return num + 1
}

function mutater(adder) {
  adder['a'] = 'mutated'
}

mutater(addOne);
console.log(addOne.a);
```

The output of this code will be `mutated`.

We invoked the `mutater` function, passing in `addOne` by reference. We then add a property `'a'` to this object, with the value `mutated`. The reason this is possible is because all functions in Javascript are objects. Furthermore, they are first-class objects. This means then can be passed into functions or returned from functions, just like a standard objects.

The function `addOne` will retain its original functionality, but will now have an additional property available on it
  

// What is the output? Explain what is going in the code.


```javascript
const world = () => 'world';
const shout = (toShout) => `${toShout().toUpperCase()}!`;

console.log(shout(world));
```


This will output `WORLD!` to the console. We have two functions here. We invoke the `shout` function, passing in `world` function as its argument. This is possible because **Javascript functions are first class objects**.

The `toShout` parameter now references the `world` function, and is invoked within the function execution context. This returns the string `world`, which is then chained to the `toUpperCase()` method, evaluating to `WORLD`. Lastly, this string is appended to the `!` via string interpolation. This entire value is returned from the `shout` function.

Additional concepts at play here: 
- functions being used as callback functions.
- Implicit return values in arrow functions.

/*

This code will output WORLD! to the console. In this code we have two function expressions.

The first function expression is a function world, which takes no arguments, and returns the string

'world'. The second is function shout, which has one parameter, toShout. This function returns

the invocation of the passed in function toShout, chained to a second method, toUpperCase(),

and finally, appended with a '!' string, using string interpolation.

  

We invoke shout, passing in the function world as an argument. Within the function body, we invoke the passed in

callback function, which returns the string 'world'. When we pass this string to the .toUpperCase()

method, this will return a copy of that string in uppercase characters. Finally, we append the '!'

to this string, returning "WORLD!". Since this is wrapped in a console log, this is logged to the console.

  

This code snipped demonstrates the concept of functions as first class objects in Javascript. We

are able to pass a function into another function, and use that passed-in function in an outer function.

  

*/