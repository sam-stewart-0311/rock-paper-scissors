let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;
let roundsPlayed = 0;

// Handle Player Choice

const playerChoiceInput = document.querySelector('#player-choice-input');
const playerChoiceImg = document.querySelector('#player-choice-img');

playerChoiceInput.addEventListener('change', getPlayerChoice);

function getPlayerChoice() {
  let result = playerChoiceInput.value;

  if (playerChoiceInput.value === 'rock') {
    playerChoiceImg.src = './images/rock.png';
  } else if (playerChoiceInput.value === 'paper') {
    playerChoiceImg.src = './images/paper.png';
  } else if (playerChoiceInput.value === 'scissors') {
    playerChoiceImg.src = './images/scissors.png';
  }

  return result;
};

// Handle Computer Choice

const computerChoiceImg = document.querySelector('#computer-choice-img');
const computerChoiceText = document.querySelector('#computer-choice-text');

function getComputerChoice() {
  let randomNumber = Math.random();
  let result = '';

  if (randomNumber < 1/3) {
    result = 'rock';
    computerChoiceImg.src = './images/rock.png';
    computerChoiceText.textContent = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    result = 'paper';
    computerChoiceImg.src = './images/paper.png';
    computerChoiceText.textContent = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    result = 'scissors';
    computerChoiceImg.src = './images/scissors.png';
    computerChoiceText.textContent = 'Scissors';
  }
  return result;
};

// Handle Play Round

const playBtn = document.querySelector('#play-btn');
playBtn.addEventListener('click', playRound);

const playerScoreReadout = document.querySelector('#player-score-readout');
const computerScoreReadout = document.querySelector('#computer-score-readout');
const messageReadout = document.querySelector('#message-readout');

function playRound(playerChoice, computerChoice) {
  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();

  //let playerChoiceLowerCase = playerChoice.toLowerCase();
  let result = '';
  
  if (playerChoice === 'rock') {

    if (computerChoice === 'rock') {
      result = "It's a Tie";
    } else if (computerChoice === 'paper') {
      result = "You Lose"
    } else if (computerChoice === 'scissors') {
      result = "You Win"
    }

  } else if (playerChoice === 'paper') {

    if (computerChoice === 'rock') {
      result = "You Win";
    } else if (computerChoice === 'paper') {
      result = "Its a Tie"
    } else if (computerChoice === 'scissors') {
      result = "You Lose"
    }

  } else if (playerChoice === 'scissors') {

    if (computerChoice === 'rock') {
      result = "You Lose";
    } else if (computerChoice === 'paper') {
      result = "You Win"
    } else if (computerChoice === 'scissors') {
      result = "It's a Tie"
    }

  } 

  if (result === 'You Win') {
    playerScore++
  } else if ( result === 'You Lose') {
    computerScore++
  }

  playerScoreReadout.textContent = playerScore;
  computerScoreReadout.textContent = computerScore;

  let playerChoiceCapitalised = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  let computerChoiceCapitalised = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  let message = `You chose ${playerChoiceCapitalised}, the Computer chose ${computerChoiceCapitalised}, ${result}!`;

  messageReadout.textContent = message;
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

