function getComputerChoice() {
  let computerChoice = Math.floor((Math.random() * 3) + 1);
  switch (computerChoice) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
    default:
      console.log('Something terrible happened! The computer made an invalid choice...');
      break;
  }
}

function getPlayerChoice() {
  return playerChoice;
}

function playRound(computerSelection, playerSelection) {

  return roundWinner;
}

function game() {
  let roundResult = playRound(getComputerChoice(), getPlayerChoice());


}
