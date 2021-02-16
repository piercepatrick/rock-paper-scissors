let playerWins = 0;
let computerWins = 0;
function computerPlay() {
    let num = Math.floor(Math.random() * 3); 
    if (num == 0) return 'Rock';
    if (num == 1) return 'Paper';
    if (num == 2) return 'Scissors';
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) return 'Tie!';
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerWins++;
        return 'You Lose! Paper beats Rock';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerWins++;
        return 'You Win! Rock beats Scissors!';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWins++;
        return 'You Lose! Scissors beats Paper';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerWins++;
        return 'You Win! Paper beats Rock';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerWins++;
        return 'You Win! Scissors beats Paper';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerWins++;
        return 'You Lose! Rock beats Scissors';
    }
}

function game()
{
    let playerSelection = window.prompt('Rock, Paper, or Scissors?');
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    if (playerWins > computerWins) console.log('You win the game!');
    else if (computerWins > playerWins) console.log('You lose the game!');
    else console.log('Your game ended with tie!');
}

const results = document.querySelector('#results');
let headingVar = document.createElement('H5');
headingVar.id = 'headingText';
results.appendChild(headingVar);

const rockbtn = document.getElementsByClassName('rock')[0];
rockbtn.addEventListener( 'click', () => {

    playerSelection = 'Rock';
    computerSelection = computerPlay();
    document.getElementById('headingText').innerHTML = playRound(playerSelection, computerSelection);
});

const paperbtn = document.getElementsByClassName('paper')[0];
paperbtn.addEventListener( 'click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    document.getElementById('headingText').innerHTML = playRound(playerSelection, computerSelection)
});

const scissorsbtn = document.getElementsByClassName('scissors')[0];
scissorsbtn.addEventListener( 'click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    document.getElementById('headingText').innerHTML = playRound(playerSelection, computerSelection)
});