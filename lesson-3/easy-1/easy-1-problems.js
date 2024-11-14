let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty('Spot'))

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
function formatSentence(sentence) {
  let newSentence = sentence.toLowerCase();
  return newSentence[0].toUpperCase() + newSentence.slice(1);
}

//console.log(formatSentence(munstersDescription))

let additionalAges = { Marilyn: 22, Spot: 237 };

console.log(Object.assign(ages, additionalAges))

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
let index = advice.indexOf('house');
console.log(advice.slice(0, index));

