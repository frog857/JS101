
// Explain why the last line logs "Offline" instead of logging "Online".
  
```javascript
let status = "Offline";

function changeStatus(status) {
  status = "Online";
}
console.log(changeStatus(status)); // undefined
console.log(status); // Logs: "Offline"
```

This code logs "Offline" instead of "Online" due to variable shadowing.

We invoke `changeStatus()` passing in the global variable `status` by value. Within the function body, the function scoped variable `status` is assigned the string `"Offline"`. The function then reassigns this variable to `"Online"`. We must note that only the local variable is reassigned, and the global `status` remains unchanged, as it is blocked, or shadowed, by the variable in the inner scope.

Thus, when we log status on the last line, we will see the value `"Offline"`




---

What will be logged on the last line and why?

```javascript
let casts = ["Tokyo", "Berlin", "Rio"];

function addCast(list, name) {
	list = ["Tomato", "Potato", "Onion"];
	list.push(name);
	return list;
}

addCast(casts, "Denver");
console.log(casts); //
```

`["Tokyo", "Berlin", "Rio"]` will be logged on the last line. This is because, while `casts` is passed into a function by reference, where it could potentially be mutated, the function ultimately never does so.

When we invoke `addCast` passing in `casts` and `"Denver"` as an argument, the function parameter`list` receives a reference to that array in memory `["Tokyo", "Berlin", "Rio"]`. However, on the first line, the function-scoped variable `list` is reassigned to a new array `["Tomato", "Potato", "Onion"]`, in a new location in memory. This decouples the pointer from the reference to the array `["Tokyo", "Berlin", "Rio"]`

The function then mutates and returns that array, but ultimately, the return value is never assigned to a variable, nor is it logged.

---


  
```javascript
// Identify all of the primitives, variables, and objects in the code snippet below:

let languages = ["Spanish", "Hindi", "German"];
let bodyOfLanguages = languages.concat();

let unfamous = languages[1];
let famous = languages[2];

function identify(para) {
return `${para} is an Indian language!`;
}

console.log(identify(unfamous));
```


```javascript
/*
Objects:
- language array (ln 3)
- bodyOfLanguages array (ln 4)
- identify function body (ln 9)


Variables:
- languages (ln 3)
- bodyOfLanguagges (ln 4)
- unfamous (ln 6)
- famous (ln 7)
- identify, para (ln 9)
- 

Primitives:
- "Spanish", "German", "Hindi" (ln 3)
- "Spanish", "German", "Hindi" (ln 4)
- 1, "Hindi" (ln 6)
- 2, "German" (ln 7)
- "Hindi", "Hindi is an Indian Language!", undefined (ln 13)
*/
```
---

```javascript
// Identify all of the primitives, variables, and objects in the code snippet below:

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

let greeting = "Hello, ";

function greet(name) {
  return greeting + name + "!";
}

console.log(greet(person.name));
```

```javascript
/*
Objects:
- person object literal (ln 3)
- greet function body (ln 11)
- person (ln 15)

Variables:
- person (ln 3)
- greeting (ln 9)
- greet, name (ln 11)
- greeting, name (ln 12)


Primitives:
- "name", "Alice" (ln 4)
- "age", 30 (ln 5)
- "city", "New York" ln 6
- "Hello, " (ln 9)
- "Hello, " "Alice", "!" (ln 12)
- "Alice", "Hello, Alice!" (ln 15)

*/
```