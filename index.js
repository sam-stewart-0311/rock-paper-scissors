function getComputerChoice() {
  let randomNumber = Math.random();
  let result = '';

  if (randomNumber < 1/3) {
    result = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    result = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    result = 'Scissors';
  }
  return result;
};

console.log(getComputerChoice());