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
---
### strings
---
### template literals
---
### boolean n vs. truthiness
---
### undefined and null
---
### array and object syntax
---
### array properties and methods: array.length, array.push, array.pop, array.reverse
---
### object methods: Object.keys
---
### operators
---
### numeric operators: +, -, *, /, %
---
### string operators: +
---
### conditional operators: ===, !==, <, >, <=, >=, ==, !=, ternary
---
### loose and strict equality
---
### logical operators and short-circuit evaluation: !, &&, ||
---
### the typeof operator
---
### operator precedence
---
### mutability, immutability, and const
---
### variables
---
### identifier: variable names, constant names, function names, property names
---
### variable and constant declarations
initialization, assignment, and reassignment
scope
variables as pointers
variable shadowing
conditionals and loops
console.log
readline-sync and the question method
require
functions
functions vs. methods
declarations, expressions, arrow functions
definition and invocation
default parameters
return values
parameters vs. arguments
function, block, local, and global scope
nested functions
function composition
output vs. return values, side effects
pass-by-reference and pass-by-value
first-class functions
the call stack
expressions and statements
exceptions: throwing and catching
common Math methods: Math.floor, Math.random, Math.pow
discuss a function's use and purpose (a "user-level" description) instead of its implementation