const playerChoice = '';
const computerChoice = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;
let roundsPlayed = 0;

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
  playerChoice = prompt('Choose Rock, Paper or Scissors');
  computerChoice = getComputerChoice();

  let playerChoiceLowerCase = playerChoice.toLowerCase();
  let result = '';
  
  if (playerChoiceLowerCase === 'rock') {

    if (computerChoice === 'rock') {
      result = "It's a Tie";
    } else if (computerChoice === 'paper') {
      result = "You Lose the Round"
    } else if (computerChoice === 'scissors') {
      result = "You Win the Round"
    }

  } else if (playerChoiceLowerCase === 'paper') {

    if (computerChoice === 'rock') {
      result = "You Win the Round";
    } else if (computerChoice === 'paper') {
      result = "It's a Tie"
    } else if (computerChoice === 'scissors') {
      result = "You Lose the Round"
    }

  } else if (playerChoiceLowerCase === 'scissors') {

    if (computerChoice === 'rock') {
      result = "You Lose the Round";
    } else if (computerChoice === 'paper') {
      result = "You Win the Round"
    } else if (computerChoice === 'scissors') {
      result = "It's a Tie"
    }

  } else {
    roundsPlayed--
    return 'You need to choose Rock, Paper or Scissors'
  }

  if (result === 'You Win the Round') {
    playerScore++
  } else if ( result === 'You Lose the Round') {
    computerScore++
  }

  let playerChoiceCapitalised = playerChoiceLowerCase.charAt(0).toUpperCase() + playerChoiceLowerCase.slice(1);
  let computerChoiceCapitalised = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  let message = `You chose ${playerChoiceCapitalised}, the Computer chose ${computerChoiceCapitalised}, ${result}!`;
  // let message = `You chose ${playerChoiceCapitalised}, the Computer chose ${computerChoiceCapitalised}, ${result}! \n Player Score: ${playerScore} Computer Score: ${computerScore}`;

  return message;
};

function playGame() {

  totalRounds = +prompt('How many rounds would you like to Play?');
  let result = '';

  if (isNaN(totalRounds)) {
    console.log('You need to enter a valid number');
    playGame();
  } else {

    for (roundsPlayed = 1; roundsPlayed < (totalRounds + 1); roundsPlayed++) {
      console.log(playRound(playerChoice, computerChoice));
    }
    
    if (playerScore > computerScore) {
      result = "You Win!"
    } else if (playerScore < computerScore) {
      result = "You Lose!"
    } else {
      result = "It's a Tie!"
    }
  
    let message = `After ${totalRounds} rounds, you scored ${playerScore}, the Computer scored ${computerScore}, ${result}`
    console.log(message);
  }
}

playGame();