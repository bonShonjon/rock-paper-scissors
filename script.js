//initialise scores
let humanScore = 0;
let computerScore = 0;
const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");
const roundAnnounceText = document.querySelector("#round-announcer");
const heading = document.querySelector("h1");

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
      humanScoreText.textContent = humanScore;
      roundAnnounceText.textContent = 
        `You Win: ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}!`;
    } else if (computerWin === true) {
      computerScore++
      computerScoreText.textContent = computerScore;
      roundAnnounceText.textContent = 
        `You Lose: ${capitalise(humanChoice)} loses to ${capitalise(computerChoice)}!`;
    } else {
      roundAnnounceText.textContent = 
        `Draw: ${capitalise(humanChoice)} against ${capitalise(computerChoice)}.`;
    }

    if (humanScore >= 5) {
      heading.textContent = 'You Win!';
      aBtns.forEach((btn) => {btn.removeEventListener('click', playRound)})
    }

    if (computerScore >= 5) {
      heading.textContent = 'You Lose!';
      aBtns.forEach((btn) => {btn.removeEventListener('click', playRound)})
    }
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

function capitalise(string) {
  let firstLetter = string.slice(0, 1).toUpperCase();
  let restOfString = string.slice(1).toLowerCase();

  return firstLetter + restOfString;
}