// dependencies and constants
const rlSync = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

// functions
function determineWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock')) {
      prompt('You Win!');
    } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'scissors')) {
      prompt('You Lose!');
    } else {
      prompt("It's a tie!")
    }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

// program loop
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = rlSync.question();
  
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = rlSync.question();
  }
  
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length)
  let computerChoice = VALID_CHOICES[randomIndex]
  
  determineWinner(choice, computerChoice)

  prompt("Do you want to play again? (y/n)")
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
}

