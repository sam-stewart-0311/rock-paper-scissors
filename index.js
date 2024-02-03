const computerChoice = getComputerChoice();
const playersChoice = prompt('Rock, Paper or Scissors?')
let score = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  
  if (randomNumber > 0 && randomNumber < 1/3) {
    return 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    return 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber <= 1) {
    return 'Scissors'
  } else {
    throw Error("No Computer Choice");
  }
  
}

function playRound(playerChoice, computerChoice) {
  let player = playerChoice.toLowerCase();
  let computer = computerChoice.toLowerCase();
  let result = '';
  

  if (player === 'rock') {
    if (computer === 'rock') {
      result = "It's a tie"
    } else if (computer === 'paper') {
      result = "You Lose"
    } else if (computer === 'scissors') {
      result = "You Win"
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      result = "You Win"
    } else if (computer === 'paper') {
      result = "It's a Tie"
    } else if (computer === 'scissors') {
      result = "You Lose"
    }
  } else if (player === 'scissors') {
    if (computer === 'rock') {
      result = "You Lose"
    } else if (computer === 'paper') {
      result = "You Win"
    } else if (computer === 'scissors') {
      result = "It's a Tie"
    } 
  } else {
    return 'You need to choose a valid option'
  }
  
  player = player.charAt(0).toUpperCase() + player.slice(1);
  computer = computer.charAt(0).toUpperCase() + computer.slice(1);

  let message = `You chose ${player}, Computer chose ${computer}, ${result}`;
  return message;
}

console.log(playRound(playersChoice, computerChoice));




