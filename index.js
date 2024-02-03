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

const computerChoice = getComputerChoice();
console.log(computerChoice);