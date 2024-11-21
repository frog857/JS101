// function logInBox2(message, maxWidth = Infinity) {
//   if (maxWidth > message.length) maxWidth = message.length;

//   let arrOfStrings = [];
//   let currentLine = '';

//   for (let word of message.split(' ')) {
//     if ((currentLine + word).length <= maxWidth) {
//       currentLine += (currentLine ? ' ' : '') + word; // Add the word with a space if the line isn't empty
//     } else {
//       arrOfStrings.push(currentLine.padEnd(maxWidth)); // Push the current line, padded to maxWidth
//       currentLine = word; // Start a new line with the current word
//     }
//   }
//   if (currentLine) {
//     arrOfStrings.push(currentLine.padEnd(maxWidth)); // Add the last line
//   }

//   displayBanner(arrOfStrings, maxWidth);
// }

// function displayBanner(messages, maxWidth) {
//   let horizontalRule = `+${'-'.repeat(maxWidth + 2)}+`;
//   let emptyLine = `|${' '.repeat(maxWidth + 2)}|`;

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   for (let line of messages) {
//     console.log(`| ${line} |`);
//   }
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

// // Test Cases
// logInBox2('To boldly go where no one has gone before. And further yet! For we must keep on living, and striving! Otherwise, what then?!!?!?', 30);
// logInBox2("yer", 30);


function logInBox2(message, maxWidth = Infinity) {
  if (maxWidth > message.length) maxWidth = message.length;

  let lines = [];
  let currentLine = '';

  for (let word of message.split(' ')) {
    if (currentLine.length + word.length + (currentLine ? 1 : 0) <= maxWidth) {
      // Add word to the current line (account for the space if currentLine isn't empty)
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      // Push the current line and start a new one with the current word
      lines.push(currentLine.padEnd(maxWidth));
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine.padEnd(maxWidth)); // Add the last line
  }

  displayBanner(lines, maxWidth);
}

function displayBanner(messages, maxWidth) {
  let horizontalRule = `+${'-'.repeat(maxWidth + 2)}+`;
  let emptyLine = `|${' '.repeat(maxWidth + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  for (let line of messages) {
    console.log(`| ${line} |`);
  }
  console.log(emptyLine);
  console.log(horizontalRule);
}

// Test Cases
logInBox2('To boldly go where no one has gone before. And further yet! For we must keep on living, and striving! Otherwise, what then?!!?!?', 30);
logInBox2("yer", 30);
