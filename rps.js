// const rockButton = document.querySelector("#rock");
// const paperButton = document.querySelector("#paper");
// const scissorsButton = document.querySelector("#scissors");

// rockButton.addEventListener("click", function() {
//   const result = playRound(getComputerChoice(), "rock");
//   const roundResultDiv = document.querySelector("#roundResult");
//   roundResultDiv.textContent = `You ${result} this round!`;
// });

// paperButton.addEventListener("click", function() {
//   const result = playRound(getComputerChoice(), "paper");
//   const roundResultDiv = document.querySelector("#roundResult");
//   roundResultDiv.textContent = `You ${result} this round!`;
// });

// scissorsButton.addEventListener("click", function() {
//   const result = playRound(getComputerChoice(), "scissor");
//   const roundResultDiv = document.querySelector("#roundResult");
//   roundResultDiv.textContent = `You ${result} this round!`;
// });
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const roundResultDiv = document.querySelector("#roundResult");
const gameScoreDiv = document.querySelector("#gameScore");
const winnerDiv = document.querySelector("#winner");
const playerChoiceButtons = document.querySelectorAll(".playerSelectionButton");
const resetButton = document.querySelector("#resetButton");

playerChoiceButtons.forEach(button => button.addEventListener("click", function() {
  let computerSelection = getComputerChoice();
  let playerSelection = button.id;
  console.log(roundsPlayed);
  playRound(computerSelection, playerSelection);
  if (roundsPlayed === 5) {
    displayWinner();
    toggleResetButton();
  }
}));

resetButton.addEventListener("click", () => resetGame());

function getComputerChoice() {
  switch (Math.floor((Math.random() * 3) + 1)) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      console.log("Something terrible happened! The computer made an invalid choice...");
      break;
  }
}

function playRound(computerSelection, playerSelection) {
  ++roundsPlayed;
  if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
    roundResultDiv.textContent = `Computer played ${computerSelection}. You lose this round.`;
    updateScore("computer");
    return "lose";
  } else if (computerSelection === playerSelection) {
    roundResultDiv.textContent = `Computer played ${computerSelection}. This round is a draw.`;
    return "draw"
  } else {
    roundResultDiv.textContent = `Computer played ${computerSelection}. You win this round.`;
    updateScore("player");
    return "win";
  }
}

function updateScore(roundWinner) {
  if (roundWinner === 'computer') {
    ++computerScore;
  } else {
    ++playerScore;
  }
  gameScoreDiv.textContent = `Computer: ${computerScore} vs Player: ${playerScore}`;
}

function displayWinner() {
  if (computerScore > playerScore) {
    winnerDiv.textContent = "The computer wins the game!";
  } else {
    winnerDiv.textContent = "You win the game!";
  }
}

function toggleResetButton() {
  resetButton.classList.toggle("showButton");
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  roundResultDiv.textContent = "";
  gameScoreDiv.textContent = "";
  winnerDiv.textContent = "";
  toggleResetButton();
}