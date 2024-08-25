function getComputerChoice () {
  //Create variable called randomNumber and assign it to a random number between 0 and 3
  let randomNumber = Math.random() * 3;
  //Create output variable called computerChoice
  let computerChoice;

  //randomNumber determines computer choice
  if (randomNumber >= 0 && randomNumber < 1) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 && randomNumber < 2) {
    computerChoice = "Paper";
  } else if (randomNumber >= 2 && randomNumber<= 3) {
    computerChoice = "Scissors";
  }

  return computerChoice;
}