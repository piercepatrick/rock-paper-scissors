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
    if (playerWins >= 5)
    {
        return 'Press replay!';
    }
    if (computerWins >= 5)
    {
        return 'Press replay!';
    }
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) return 'Tie!';
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerWins++;
        displayRunningScore(playerWins, computerWins);
        return 'You Lose! Paper beats Rock';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerWins++;
        displayRunningScore(playerWins, computerWins);
        return 'You Win! Rock beats Scissors!';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWins++;
        displayRunningScore(playerWins, computerWins);
        return 'You Lose! Scissors beats Paper';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerWins++;
        displayRunningScore(playerWins, computerWins);
        return 'You Win! Paper beats Rock';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerWins++;
        displayRunningScore(playerWins, computerWins);
        return 'You Win! Scissors beats Paper';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerWins++;
        displayRunningScore(playerWins, computerWins);
        return 'You Lose! Rock beats Scissors';
    }
}

function displayRunningScore(playerWins, computerWins) {
    if (playerWins >= 5)
    {
        document.getElementById('runningScoreText').innerHTML = 'You win the game! Press the replay button to play again.';
    }
    else if (computerWins >= 5)
    {
        document.getElementById('runningScoreText').innerHTML = 'The computer wins the game! Press the replay button to play again.';
    }
    else
    {
        document.getElementById('runningScoreText').innerHTML = `Your wins: ${playerWins} Computer wins: ${computerWins}`
    }
}


// declarations for displaying results
const results = document.querySelector('#results');
let headingVar = document.createElement('H5');
headingVar.id = 'headingText';
results.appendChild(headingVar);

// declarations for displaying running score 
const runningScore = document.querySelector('#runningscore');
let runningScoreHeadingVar = document.createElement('H5');
runningScoreHeadingVar.id = 'runningScoreText';
runningScore.appendChild(runningScoreHeadingVar);


// event listeners
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

const playagainbtn = document.getElementsByClassName('playagain')[0];
playagainbtn.addEventListener( 'click', () => {
    playerWins = 0;
    computerWins = 0;
    document.getElementById('headingText').innerHTML = '';
    document.getElementById('runningScoreText').innerHTML = '';
});