### naming conventions: legal vs. idiomatic, illegal vs. non-idiomatic

In javascript, legal and illegal naming conventions refer to hard rules that you must follow for your code to be syntactically valid. This includes things such as not naming a variable with a number as the first character, or with a hyphen, such as `1myVariable` or `my-variable`. These names are invalid and won't be processed by Javascript.

Idiomatic and non-idiomatic naming conventions refer to making sensible variables that are easy to understand, which improves code maintainability. if a functions user-level description is along the lines of "takes a number as an input and returns the number multiplied by two, we should not name the function `x` or `something` or even `multiply`. `multiplyBy2` would be best.

---
### primitive values vs. objects
Primitive values in javascript are immutable, and passed by value. JavaScript primitives: string, number, boolean, undefined, null, symbol, and BigInt. 

Objects, on the other hand, are mutable data types, and passed by reference. Most common objects are object literals, arrays, and functions. 

---
### type coercions: explicit and implicit
type coercions are a feature of JavaScript as a weakly typed language. When we attempt to compare two differing types, such as a number and a string, Javascript will attempt to implicitly coerce one type to another before making a comparison.
```javascript
"42" >= 42 // returns true, comparison operator
"100" == 100 // returns true, loose equality
40 + 1 // returns 41
40 + "1" // return "401" operands coerced to strings.
```
Here, will attempt to coerce the value of one operand to compare it successfuly with the other.
---
### numbers, including NaN and Infinity
Numbers are a primitive type in Javascript. Examples are 13, -5, 0, 2.56, Infinity, -Infinity, and NaN. Numbers are sometimes coerced from strings, either explicitly, or implicitly, by Javscript. Common operands for numbers are *, +, /, -, and %.
---
### strings
Strings are a data type in Javascript. Strings can contain alphanumeric characters, and special characters. We can also indicate control characters in a string by escaping them with a \ symbol. Strings 
---
### template literals
Template literals are similar to strings, but use backticks instead of quotes or single quotes. With template literals, we can easily insert variables, values, or even expressions `${myVariable}` `${myExpression}`
---
### boolean n vs. truthiness
The difference between truthiness and booleans in Javascript is sometimes difficult to distinguish. A boolean value is either `true` or `false` as reserved by Javascript keywords. There are other values that can be implicity coerced to "truthy" or "falsy" values. Falsy values include null, undefined, 0, -1, 0n, "" (empty string), and NaN. When evaluated in a boolean context, these values or evaluated expressions will behave like the Boolean value False. All other evaluated expressions or values not included in the above are truthy, and behave like Boolean true.
---
### undefined and null
undefined and null are each types in Javascript. Both types have one possible value, null or undefined. These values are primitives, though a long-standing bug in javascript will return object when running `typeof null`. Some say that null indicates the absence of value in an object context, while undefined indicates abscence of value in a primitive context.
---
### array and object syntax
Arrays use brackets with commas to separate individual elements `[1, 2, 3]`. 
---
### array properties and methods: array.length, array.push, array.pop, array.reverse
Arrays have several built-in props and methods that are very useful for manipulating or using the data in arrays. array.length is a property, which will return the number of elements in the arr.
array.push and array.pop are both destructive methods which add and remove an element at the end of an array. This mutates the original array. array.reverse is also a destructive method, which will reverse the order of the array, effectively reversing the indexes.
---
### object methods: Object.keys
Object methods are available on all object prototypes within a JS program. Object.keys(obj), for instance, will return an array of all the keys of the obj passed in as an argument to the method. Other object methods exist as well, such as Object.assign(), Object.freeze(), and others. Static object methods are different from object instance methods, which can be denoted as Object.prototype.hasOwnProperty() or Object.prototype.toString()
---
### operators
Operators are symbols that perform operations on operands (values or variables). 
---
### numeric operators: +, -, *, /, %
---
### string operators: +
---
### conditional operators: ===, !==, <, >, <=, >=, ==, !=, ternary
---
### loose and strict equality
The strict equality operator will not attempt to coerce data types in Javascript, and will simply return false when presented with operands of different data types. Loose equality operators will attempt to coerce operands of different types, which can lead to unpredictable or misunderstood behavior. It is generally discouraged to use the loose equality operator to increase maintainability and reliability of code.
---
### logical operators and short-circuit evaluation: !, &&, ||
Bang operator, And operator, and Or operator. ! is a unary operator, and returns the opposite boolean-ish value of the expression or value which it prepends. I.e. (!"") will return true, since an empty string is falsy. 

&& and || are binary operators. && requires both operands to be truthy to return true, which || requires just one oeprand to be truthy to return true. && exhibits short-circuit evaluation when the first evaluated operand is falsty, as it doesn't matter what the second operand will evaluate to. || exhibits a similar behavior when the first operand is truthy, as it does not matter what the second operand evaluates to.
---
### the typeof operator
the typeof operator is a unary operator which will return the type of the operand in string form. typeof 5 will return 'number'. typeof "meow" will return "string"
---
### operator precedence
Operator precedence refers to the order in which Javascript will evaluate expressions with multiple operators and operands. A simple case would be 5 + 7 * 6. In this case, JS will treat the expression as 5 + (7 * 6), since the * operator has a higher precedence than +. The orders of precedence can be memorized, but it is encouraged to simply use parentheticals to avoid confusion or misunderstood behavior.

In a case of multiple identical operators (5 + 5 + 5), operators typically demonstrate left-to-right associativity. However, in the case of certain operators, they can demonstrate right-to-left associativity, such as in the case of b = a = 5, and 4 ** 3 ** 2.
---
### mutability, immutability, and const
In Javascript, primitaves are immutable, while objects are mutable. if we mutate a value in JS, we change the actual value that is stored in a given memory location. If a value is immutable, that value in a given memory location can never be changed. This does not mean we cannot reassign a variable to a new immutable value. One way to achieve different behavior, is if we initialize a variable with const. `const a = 5` would create the constant a, with a value of 5. If we tried to reassign a to another value, we would throw an error.
---
### variables
variables in javascript allow us to bind values to certain words, such as `let myVar = 5` or `let myVar2 = {cat: "freddy"}`. Variables declared with the let keyword are block scoped, and able to be reassigned.
---
### identifier: variable names, constant names, function names, property names

---
### variable and constant declarations
---
### initialization, assignment, and reassignment
---
### scope
---
### variables as pointers
---
### variable shadowing
---
### conditionals and loops
---
### console.log
---
### readline-sync and the question method
---
### require
---
### functions
---
### functions vs. methods
---
### declarations, expressions, arrow functions
---
### definition and invocation
---
### default parameters
---
### return values
---
### parameters vs. arguments
---
### function, block, local, and global scope
---
### nested functions
---
### function composition
---
### output vs. return values, side effects
---
### pass-by-reference and pass-by-value
---
### first-class functions
---
### the call stack
---
### expressions and statements
---
### exceptions: throwing and catching
---
### common Math methods: Math.floor, Math.random, Math.pow
---
### discuss a function's use and purpose (a "user-level" description) instead of its implementation