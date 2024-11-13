// dependencies and constants
const rlSync = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'Spock', 'lizard'];
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'Spock'],
  Spock: ['scissors', 'rock'],
  lizard: ['Spock', 'paper']
}

const SCORE = {
  player: 0,
  computer: 0,
  tie: 0,
}

// functions
function keepScore(choice, computerChoice) {
  if (choice === computerChoice) {
    SCORE.tie += 1;
  } else if (playerWins(choice, computerChoice)) {
    SCORE.player += 1;
  } else {
    SCORE.computer += 1;
  }
  console.log(SCORE);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function determineWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (choice === computerChoice) {
    prompt('It\'s a tie!');
  } else if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else {
    prompt("You lose!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

// program loop
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = rlSync.question();

  switch (choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 's':
      choice = 'scissors';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'S':
      choice = 'Spock';
      break;
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice! (Case sensitive)");
    choice = rlSync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  determineWinner(choice, computerChoice);
  keepScore(choice, computerChoice);  
  
  if (SCORE.computer === 3) {
    prompt('That\'s best 3/5! Computer is the grand winner! Resetting score...')
    SCORE.computer = 0;
    SCORE.player = 0;
    SCORE.tie = 0;
  }

  if (SCORE.player === 3) {
    prompt('That\'s best 3/5! You\'re the grand winner! Resetting score...')
    SCORE.computer = 0;
    SCORE.player = 0;
    SCORE.tie = 0;
  }
  
  prompt("Do you want to play again? (y/n)");
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}

// OLD LOGIC determineWinner, before refactoring.

// function determineWinner(choice, computerChoice) {
//   prompt(`You chose ${choice}, computer chose ${computerChoice}`);

//   if ((choice === 'rock' &&
//         (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
//       (choice === 'scissors' &&
//         (computerChoice === 'paper' || computerChoice === 'lizard')) ||
//       (choice === 'paper' &&
//         (computerChoice === 'rock' || computerChoice === 'Spock')) ||
//       (choice === 'Spock' &&
//         (computerChoice === 'scissors' || computerChoice === 'rock')) ||
//       (choice === 'lizard' &&
//         (computerChoice === 'Spock' || computerChoice === 'paper'))) {
//     prompt('You Win!');
//   } else if ((choice === 'rock' &&
//       (computerChoice === 'paper' || computerChoice === 'Spock')) ||
//     (choice === 'scissors' &&
//       (computerChoice === 'rock' || computerChoice === 'Spock')) ||
//     (choice === 'paper' &&
//       (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
//     (choice === 'Spock' &&
//       (computerChoice === 'lizard' || computerChoice === 'paper')) ||
//     (choice === 'lizard' &&
//       (computerChoice === 'scissors' || computerChoice === 'rock'))) {
//     prompt('You Lose!');
//   } else {
//     prompt("It's a tie!");
//   }