
Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
```javascript
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let newStr = munstersDescription[0].toUpperCase() + munstersDescription.slice(1);
```

We can create a new string that contains all lowercase letters, except for the first character, by declaring a new variable and assigning it to an expression. Within this expression, we access the first character of `munstersDescription` using bracket notation, and call the `toUpperCase()` method. We then concatenate the remaining characters by using the `slice(1)` method on `munstersDescription`. Note we must pass in `1` as an argument to slice, to access only characters from the first index (inclusive) to the end.


Add entries for Marilyn and Spot to the object:
```javascript
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges)
console.log(ages);

```


Determine whether the name `Dino` appears in the strings below -- check each string separately

```javascript
let str1 = "Few things in life are as important as house training your pet dinosaur.";

let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function containsDino(str) {
	return (str.includes("Dino"));
}
console.log(containsDino(str1));
console.log(containsDino(str2));
```

Return a new version of this sentence that ends just before the word `house`. Don't worry about spaces or punctuation: remove everything starting from the beginning of `house` to the end of the sentence.

```javascript
let advice = "Few things in life are as important as house training your pet dinosaur.";

let indexOfHouse = advice.indexOf("house");
```
