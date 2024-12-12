
In this program, we have two function bodies, three declared variables, and two invocations of the functions. We then `console.log` the variables to check their values. 

- The variable `word` is declared and initialized. `word` is never reassigned, so this value will be logged as `"hello"`. 
- The variable `capitalizedWord` is initialized to the return value of invoking `capitalize(word)`. Within that function, the first index of `word` is appended to the result of calling `.slice(1)` on word, which will evaluate to all characters except the first character of `word`. When these are appended, the value `"Hello"` will be returned and assigned to `capitalizedWord`. This is what will be logged to the console. 
- The variable `exclaimedWord` is declared and assigned to the result of invoking `exclaim(capitalizedWord)`. In this function invocation, we return the value of `word` appended to `"!!!"`. Here we must note that the function-scoped variable `word` hasn't been declared, nor initialized. Thus, Javascript will look outside the function scope, and find the value `"hello"` assigned to the global `word` variable. Thus, the result of the appended values is `"hello!!!"`, which will be logged to the console.

The key concept at play here is the use of parameters and arguments in function definitions and invocations. In this instance, Javascript ignores the passed in arguments, as the function definitions do not have parameters to match them with.
