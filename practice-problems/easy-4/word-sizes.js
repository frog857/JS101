function wordSizes(sentence) {
  if (!sentence) return {};
  const wordLengths = {};
  let wordsArr = sentence.split(" ");

  wordsArr.forEach(word => {
    word = trimWord(word);
    if (wordLengths[word.length]) {
      wordLengths[word.length] += 1;
    } else {
      wordLengths[word.length] = 1;
    }
  });
  return wordLengths;
}

function trimWord(word) {
  return word.replace(/[^a-z]/gi, "");
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}