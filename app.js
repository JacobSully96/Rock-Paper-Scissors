
let playerSelection = "Paper";
let computerSelection = getComputerChoice();


function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    if (randNum == 1) {
        choice = "Rock";
    } else if (randNum == 2) {
        choice = "Paper";
    } else if (randNum == 3) {
        choice = "Scissors";
    }
    return choice;
}


// let computerSelection = "Paper";

function playRound(player, cpu) {

    if(player === cpu){
        console.log("Draw");
        return `Draw`;
    }

    if (player === "Rock") {
        if (cpu === "Scissors") {
            console.log(`You Win! ${player} beats ${cpu}`);
            return `You Win! ${player} beats ${cpu}`;
        } else if (cpu === "Paper") {
            console.log(`You Lose! ${cpu} beats ${player}`);
            return `You Lose! ${cpu} beats ${player}`;
        }
    }

    if(player === "Paper"){
        if(cpu === "Rock"){
            console.log(`You Win! ${player} beats ${cpu}`);
            return `You Win! ${player} beats ${cpu}`;
        }else if(cpu === "Scissors"){
            console.log(`You Lose! ${cpu} beats ${player}`);
            return `You Lose! ${cpu} beats ${player}`;
        }
    }

    if(player === "Scissors"){
        if(cpu === "Paper"){
            console.log(`You Win! ${player} beats ${cpu}`);
            return `You Win! ${player} beats ${cpu}`;
        }else if(cpu === "Rock"){
            console.log(`You Lose! ${cpu} beats ${player}`);
            return `You Lose! ${cpu} beats ${player}`;
        }
    }

}


// function game(){
//     playerScore = 0;
//     cpuScore = 0;

//     let player = prompt("Rock, Paper, or Scissors");

//     console.log(player);


//     for(i = 1; i <= 5; i++){
//         playRound(player, cpu);
        
//     }

// }

console.log(game());

// playRound(playerSelection, getComputerChoice());
// playRound(playerSelection, getComputerChoice());
// playRound(playerSelection, getComputerChoice());



// for(i=0; i < 10; i++){
//     getComputerChoice();
// }
