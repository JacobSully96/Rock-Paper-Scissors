



function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let cpuChoice = '';
    // console.log(randNum);

    if(randNum == 1){
        cpuChoice = "Rock";
        console.log(cpuChoice);
    }else if(randNum == 2){
        cpuChoice = "Paper";
        console.log(cpuChoice);
    }else if(randNum == 3){
        cpuChoice = "Scissors";
        console.log(cpuChoice);
    }
}

// function playRound(playerSelection, computerSelection){

// }

for(i=0; i < 10; i++){
    getComputerChoice();
}
