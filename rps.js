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
  // This is temporary hardcoded for now until I get to coding out this function
  const playerChoice = 'rock';
  return playerChoice;
}

function playRound(computerSelection, playerSelection) {
  console.log(`Computer played: ${computerSelection}`)
  console.log(`Player played: ${playerSelection}`)
  if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {
    return 'Computer wins this round';
  } else if (computerSelection === playerSelection) {
    return 'Round is a draw'
  } else {
    return 'You win the round!';
  }
}

function game() {
  let roundResult = playRound(getComputerChoice(), getPlayerChoice());
  console.log(roundResult);


}

game()