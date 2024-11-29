const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const stats = document.querySelector('#stats');
const res = document.querySelector('#result');

rock.addEventListener('click', () => {
  playRound('rock');
});

paper.addEventListener('click', () => {
  playRound('paper');
});

scissors.addEventListener('click', () => {
  playRound('scissors');
});

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  const result = getRoundResult(playerSelection, computerSelection);
  res.textContent = result;
}

function computerPlay() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
}

function getRoundResult(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return 'It\'s a tie!';
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	}
}