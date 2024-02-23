const playerChoice = '';
const computerChoice = getComputerChoice();

function getComputerChoice() {
  let randomNumber = Math.random();
  let result = '';

  if (randomNumber < 1/3) {
    result = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    result = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    result = 'scissors';
  }
  return result;
};

function playRound(playerChoice, computerChoice) {
  playerChoice = prompt();
  computerChoice = getComputerChoice();

  let playerChoiceLowerCase = playerChoice.toLowerCase();
  let result = '';
  
  if (playerChoiceLowerCase === 'rock') {

    if (computerChoice === 'rock') {
      result = "It's a Tie";
    } else if (computerChoice === 'paper') {
      result = "You Lose"
    } else if (computerChoice === 'scissors') {
      result = "You Win"
    }

  } else if (playerChoiceLowerCase === 'paper') {

    if (computerChoice === 'rock') {
      result = "You Win";
    } else if (computerChoice === 'paper') {
      result = "It's a Tie"
    } else if (computerChoice === 'scissors') {
      result = "You Lose"
    }

  } else if (playerChoiceLowerCase === 'scissors') {

    if (computerChoice === 'rock') {
      result = "You Lose";
    } else if (computerChoice === 'paper') {
      result = "You Win"
    } else if (computerChoice === 'scissors') {
      result = "It's a Tie"
    }

  } else {
    return 'You need to choose Rock, Paper or Scissors'
  }

  let message = `You chose ${playerChoice}, the Computer chose ${computerChoice}, ${result}!`;

  return message;
};

console.log(playRound(playerChoice, computerChoice));

