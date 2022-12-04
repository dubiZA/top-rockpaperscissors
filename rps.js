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


const playerChoiceButtons = document.querySelectorAll(".playerSelectionButton");

playerChoiceButtons.forEach(button => button.addEventListener("click", function() {
  let computerSelection = getComputerChoice();
  let playerSelection = button.id;
  playRound(computerSelection, playerSelection);
}));

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

// function getPlayerChoice() {
//   const playerChoice = prompt("What is your selection?").toLowerCase();
//   return playerChoice;
// }

function playRound(computerSelection, playerSelection) {
  const roundResultDiv = document.querySelector("#roundResult");
  if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
    roundResultDiv.textContent = `Computer played ${computerSelection}. You lose this round.`;
    return "lose";
  } else if (computerSelection === playerSelection) {
    roundResultDiv.textContent = `Computer played ${computerSelection}. This round is a draw.`;
    return "draw"
  } else {
    roundResultDiv.textContent = `Computer played ${computerSelection}. You win this round.`;
    return "win";
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  // for (let i = 0; i < 5; i++) {
  let roundResult = playRound(getComputerChoice(), getPlayerChoice());
  switch (roundResult) {
    case "win":
      console.log("You win this round!");
      playerScore++
      break;
    case "lose":
      console.log("You lose this round!");
      computerScore++
      break;
    case "draw":
      console.log("This round was a draw!");
      break;
  }
  // }

  if (computerScore > playerScore) {
    console.log(`Computer wins the game with a score of ${computerScore}`);
  } else {
    console.log(`You win the game with a score of ${playerScore}`);
  }
}

// game()