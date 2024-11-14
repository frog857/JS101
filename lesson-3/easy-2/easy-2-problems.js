/* eslint-disable no-unused-vars */
// #1
let advice = "Few things in life are as important as house training your pet dinosaur.";
(advice.replace(/important/g, 'urgent'));

// #2
let numbers = [1, 2, 3, 4, 5];
([...numbers].reverse());

numbers = [1, 2, 3, 4, 5];
(numbers.slice().sort((num1, num2) => num2 - num1));

numbers = [1, 2, 3, 4, 5];
let newArr = [];
numbers.forEach(num => {
  newArr.unshift(num);
});

// #3
let numbersAgain = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbersAgain.includes(number1);
numbersAgain.includes(number2);

// #4
let famousWords = "seven years ago...";
"Four score and ".concat(famousWords);
let completeWords = ("Four score and " + famousWords);

// #5

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr);

// #6

let flintstones1 = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones1.flat();

let flintstones2 = ["Fred", "Wilma"];
flintstones2 = flintstones2.concat(["Barney", "Betty"]);
flintstones2 = flintstones2.concat(["Bambam", "Pebbles"]);

let flintstones3 = ["Fred", "Wilma"];
flintstones3.push(...["Barney", "Betty"]);
console.log(flintstones3);
flintstones3.push(...["Bambam", "Pebbles"]);
console.log(flintstones3);

// #7
let flintstones = { Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

console.log(Object.entries(flintstones)[2]);

// #8
let numbers3 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

//console.log(Array.isArray(numbers3));
//console.log(Array.isArray(table));

// #9
let title = "Flintstone Family Members";
let bufferSpaces = Math.floor((40 - title.length) / 2);
console.log(bufferSpaces);
let paddedStartTitle = title.padStart(40 - bufferSpaces, ".");
let paddedTitle = paddedStartTitle.padEnd(40, ".");
console.log(paddedTitle.length);
console.log(paddedTitle);
// did too much. Don't need to pad on the right, of course...
// also better to do it with addition title.length + buffer. No hardcoding 40.

// #10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.match(/t/g).length);
console.log(statement2.matchAll('t').length); // must use matchAll for case: no matches. Otherwise null.length throws type error


