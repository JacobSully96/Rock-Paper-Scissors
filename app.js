let playerSelection = "";
let computerSelection = "";
let roundWinner = "";
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        return "rock";
    } else if (randNum == 2) {
        return 'paper'
    } else if (randNum == 3) {
        return 'scissors'
    }
}


function playRound(player, cpu) {

    if (player === cpu) {
        roundWinner = 'tie';
    }

    if (
        (player === 'rock' && cpu === 'scissors') ||
        (player === 'paper' && cpu === 'rock') ||
        (player === 'scissors' && cpu === 'paper')
    ) {
        // playerScore++;
        roundWinner = 'player'
    }

    if (
        (cpu === 'rock' && player === 'scissors') ||
        (cpu === 'paper' && player === 'rock') ||
        (cpu === 'scissors' && player === 'paper')
    ) {
        // computerScore++;
        roundWinner = 'computer'
    }

    updateScore();

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


function game() {
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}


function resetScore() {
    playerScore = 0;
    computerScore = 0;
}


function gameOver(){
    if(playerScore === 5 || computerScore === 5){
        console.log("Game Over, Score reset");
        resetScore();
    }
}


// UI Buttons
 const rockBtn = document.querySelector('#rockBtn');
 const paperBtn = document.querySelector('#paperBtn');
 const scissorsBtn = document.querySelector('#scissorsBtn');

 rockBtn.addEventListener('click', function (){
    playerSelection = 'rock'
    game();
    displayData();
})

paperBtn.addEventListener('click', function (){
    playerSelection = 'paper';
    game();
    displayData();
})

scissorsBtn.addEventListener('click', function (){
    playerSelection = 'scissors';
    game();
    displayData();
 })




// Test Code for seeing Values
    function displayData(){
        console.log(`Player: ${playerSelection}`);
        console.log(`CPU: ${computerSelection}`);
        console.log(`roundWinner: ${roundWinner}`);
        console.log(`playerScore: ${playerScore}`);
        console.log(`CPUScore: ${computerScore}`);
    }
 

