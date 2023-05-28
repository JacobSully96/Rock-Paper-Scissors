

let playerSelection = "";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    if (randNum == 1) {
        choice = "rock";
    } else if (randNum == 2) {
        choice = "paper";
    } else if (randNum == 3) {
        choice = "scissors";
    }
    console.log(`Computer: ${choice}`);
    return choice;
}


function playRound(player, cpu) {

    if (player === cpu) {
        console.log("Draw");
        return `Draw`;
    }

    if (player === "rock") {
        if (cpu === "scissors") {
            console.log(`You Win! ${player} beats ${cpu}`);
            playerScore++;
            return `You Win! ${player} beats ${cpu}`;
        } else if (cpu === "paper") {
            console.log(`You Lose! ${cpu} beats ${player}`);
            computerScore++;
            return `You Lose! ${cpu} beats ${player}`;
        }
    }

    if (player === "paper") {
        if (cpu === "rock") {
            console.log(`You Win! ${player} beats ${cpu}`);
            playerScore++;
            return `You Win! ${player} beats ${cpu}`;
        } else if (cpu === "scissors") {
            console.log(`You Lose! ${cpu} beats ${player}`);
            computerScore++;
            return `You Lose! ${cpu} beats ${player}`;
        }
    }

    if (player === "scissors") {
        if (cpu === "paper") {
            console.log(`You Win! ${player} beats ${cpu}`);
            playerScore++;
            return `You Win! ${player} beats ${cpu}`;
        } else if (cpu === "rock") {
            console.log(`You Lose! ${cpu} beats ${player}`);
            computerScore++;
            return `You Lose! ${cpu} beats ${player}`;
        }
    }

 

}

function game() {

    for (i = 1; i <= 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors");
        computerSelection = getComputerChoice();
        console.log(`Player: ${playerSelection}  Computer: ${computerSelection}`);
        playRound(playerSelection, computerSelection);
    }
    
    resetScore();

}


function resetScore() {
    playerScore = 0;
    computerScore = 0;
}


game();




