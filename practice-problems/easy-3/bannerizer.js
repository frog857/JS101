function logInBox2(message, maxWidth = Infinity) {
  if (maxWidth > message.length) maxWidth = message.length;
  
  let numOfLines = !message.length ? 1 : Math.ceil(message.length / maxWidth);

  while (numOfLines > 0) {
    message = message.padEnd(maxWidth);
    arrOfStrings.push(message.slice(0, maxWidth));
    message = message.slice(maxWidth);
    numOfLines--;
  }

  displayBanner(arrOfStrings, maxWidth);
}

function displayBanner(lines, maxWidth) {
  let horizontalRule = `+${"-".repeat(maxWidth + 2)}+`;
  let emptyLine = `|${" ".repeat(maxWidth + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  while (lines.length) {
    console.log(`| ${lines.shift()} |`);
  }
  console.log(emptyLine);
  console.log(horizontalRule);
}



function returnLines(str, maxWidth) {
  // takes in a long string, and a max width
  // returns an array of strings
  // each element includes whole words, and a padded end to maxWidth

  //initialize resultStirngs tto an empty array
  // split the str into words

  // while the strArray has length
    // initialize an empty str
    // while str.length < maxWidth
      // unshift elements of the array to the str
      // add a space to the str
    // push the string with padded end of maxWidth to resutlsStrings

  // return resultsStrings
  let resultsStrings = [];
  let words = str.split(" ");
  words = words.map(word => {
    word += " ";
    return word;
  });

  while (words.length) {
    let line = "";
    while ((words[0] !== undefined && words[0].length + line.length) < maxWidth) {
      line += words.shift();
    }
    resultsStrings.push(line);
  }
  return resultsStrings;
}


// logInBox('To boldly go where no one has gone before.');
// logInBox("yer");
// logInBox("");


logInBox2('To boldly go where no one has gone before. And further yet! For we must keep on living, and striving! Otherwise, what then?!!?!?', 30);
logInBox2("yer", 30);
logInBox2("", 30);

// let arr = returnLines("yo yo yo yeeeo yo yeeeo yorr yo!", 10);
// console.log(arr);

// get arr of wrapped strings
// console.log horizontal line of length maxWidth
// console.log blank like with of length maxWidth
// console.log each elemtn of the arr of wrapped strings
// console.log blank like with of length maxWidth
// console.log horizontal line of length maxWidth