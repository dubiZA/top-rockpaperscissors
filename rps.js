function getComputerChoice() {
  switch (Math.floor((Math.random() * 3) + 1)) {
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
  const playerChoice = prompt('What is your selection?').toLowerCase();
  return playerChoice;
}

function playRound(computerSelection, playerSelection) {
  console.log(`Computer played: ${computerSelection}`)
  console.log(`Player played: ${playerSelection}`)
  if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {
    return `${computerSelection} beats ${playerSelection}. You lose this one.`;
  } else if (computerSelection === playerSelection) {
    return 'Round is a draw...'
  } else {
    return `${playerSelection} beats ${computerSelection}. You win this round!`;
  }
}

function game() {
  let roundResult = playRound(getComputerChoice(), getPlayerChoice());
  console.log(roundResult);


}

game()