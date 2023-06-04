let playerSelection = "";
let computerSelection = "";
let roundWinner = "";
let playerScore = 0;
let computerScore = 0;
// let gameOverBool = false;

// UI Buttons
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const resetBtn = document.querySelector('#resetBtn');
const scoreDisplay = document.querySelector('.scoreDisplay');
const winner = document.querySelector('.roundResult');
const selections = document.querySelector('.selections');
const gameResult = document.querySelector('.gameResult');

scoreDisplay.textContent = `Player: 0 VS Computer: 0`;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        return 'rock';
    } else if (randNum == 2) {
        return 'paper';
    } else if (randNum == 3) {
        return 'scissors';
    }
}

function playRound(player, cpu) {


    // if(gameOverBool){
    //     console.log("Game Over")
    //     gameResult.textContent = "";
    //     return
    // }

    if (player === cpu) {
        roundWinner = 'tie';
        updateScore();
    }

    if (
        (player === 'rock' && cpu === 'scissors') ||
        (player === 'paper' && cpu === 'rock') ||
        (player === 'scissors' && cpu === 'paper')
    ) {
        roundWinner = 'player';
        updateScore();
    }

    if (
        (cpu === 'rock' && player === 'scissors') ||
        (cpu === 'paper' && player === 'rock') ||
        (cpu === 'scissors' && player === 'paper')
    ) {
        roundWinner = 'computer';
        updateScore();
    }

    if (roundWinner === 'tie') {
        winner.textContent = `${roundWinner}`;
    } else {
        winner.textContent = `Round Winner: ${roundWinner}`;
    }


    scoreDisplay.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;
    selections.textContent = `${playerSelection} VS ${computerSelection}`;

    // if (playerScore === 5) {
    //     // console.log("------------Player wins with 5--------------");
    //     // gameResult.textContent = `You Win first to 5!`;
    //     gameOver();
    // } else if (computerScore === 5) {
    //     // console.log("----------Computer wins with 5-----------");
    //     // gameResult.textContent = `Computer Wins first to 5!`;
    //     gameOver();
    // }

    if (playerScore === 5 || computerScore === 5) {
        console.log("Game Over, Score reset");
        gameOver();
    }


}

function updateScore() {

    if (roundWinner === 'tie') {
        console.log('Tie');
    }

    if (roundWinner === 'player') {
        playerScore++;
        console.log('player wins');
    }

    if (roundWinner === 'computer') {
        computerScore++;
        console.log('computer wins');
    }

}


function gameOver() {

    if (playerScore === 5) {
        console.log("------------Player wins with 5--------------");
        gameResult.textContent = `You Win first to 5!`;
    } else if (computerScore === 5) {
        console.log("----------Computer wins with 5-----------");
        gameResult.textContent = `Computer Wins first to 5!`;
    }
    // gameOver = true;
    resetScore();
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = `Player: 0 VS Computer: 0`;

}

rockBtn.addEventListener('click', function () {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    displayData();
})

paperBtn.addEventListener('click', function () {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    displayData();
})

scissorsBtn.addEventListener('click', function () {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    displayData();
})

resetBtn.addEventListener('click', function () {
    resetScore();
    gameResult.textContent = '';
});





// Test Code for seeing Values
function displayData() {
    console.log('---------------------ROUND-----------------------');
    console.log(`Player: ${playerSelection}`);
    console.log(`CPU: ${computerSelection}`);
    console.log(`roundWinner: ${roundWinner}`);
    console.log(`playerScore: ${playerScore}`);
    console.log(`CPUScore: ${computerScore}`);
}


