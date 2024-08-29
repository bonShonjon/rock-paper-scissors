//initialise scores
let humanScore = 0;
let computerScore = 0;

//add event listeners to onscreen buttons
const aBtns = document.querySelectorAll("button");
aBtns.forEach((btn) => { 
  btn.addEventListener('click', playRound)
});

  function playRound(event) {
    //get both player's choices
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    //initialise win booleans
    let humanWin = false;
    let computerWin = false;
  
    //compare player's choices and update winner's win boolean
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerWin = true;
      } else if (computerChoice === "scissors") {
        humanWin = true;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        humanWin = true;
      } else if (computerChoice === "scissors") {
        computerWin = true;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        computerWin = true;
      } else if (computerChoice === "paper") {
        humanWin = true;
      }
    }
    //increment winner's score and print win/loss/draw message for human player
    if (humanWin === true) {
      humanScore++;
      console.log(`You win: ${humanChoice} beats ${computerChoice}!`);
    } else if (computerWin === true) {
      computerScore++
      console.log(`You lose: ${humanChoice} loses to ${computerChoice}!`)
    } else {
      console.log(`Draw: ${humanChoice} against ${computerChoice}.`)
    }
    //print scores
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
  }  

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