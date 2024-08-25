function getComputerChoice() {
  //Generate random number between 0 and 3
  let randomNumber = Math.random() * 3;
  let computerChoice;

  //randomNumber determines computer choice
  if (randomNumber >= 0 && randomNumber < 1) {
    computerChoice = "rock";
  } else if (randomNumber >= 1 && randomNumber < 2) {
    computerChoice = "paper";
  } else if (randomNumber >= 2 && randomNumber<= 3) {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  //Get player's input and convert to lowercase
  let playerInput = prompt("Which do you choose: Rock, Paper or Scissors?").toLowerCase();
  let playerChoice;
  
  //check player's input is valid, otherwise alert and recursively call this function again
  if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
    playerChoice = playerInput;
  } else {
    alert("Your choice is invalid. Please try again.")
    playerChoice = getHumanChoice();
  }

  return playerChoice;
}