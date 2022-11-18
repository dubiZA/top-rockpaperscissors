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
  if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {
    return 'lose';
  } else if (computerSelection === playerSelection) {
    return 'draw'
  } else {
    return 'win';
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound(getComputerChoice(), getPlayerChoice());
    switch (roundResult) {
      case 'win':
        console.log('You win this round!');
        playerScore++
        break;
      case 'lose':
        console.log('You lose this round!');
        computerScore++
        break;
      case 'draw':
        console.log('This round was a draw!');
        break;
    }
  }

  if (computerScore > playerScore) {
    console.log(`Computer wins the game with a score of ${computerScore}`);
  } else {
    console.log(`You win the game with a score of ${playerScore}`);
  }
}

game()