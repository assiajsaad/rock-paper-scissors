console.log("Welcome to Rock Paper Scissors");

// let userChoice = prompt('Enter Your Choice to start the game').toLowerCase();
// console.log(userInput);

function getComputerChoice (){
    let computerChoice;
    let rndInt = Math.floor(Math.random() * 3) + 1;

    if(rndInt== 1) {
        computerChoice = 'rock';
    }else if(rndInt== 2){
        computerChoice= 'paper';
    }else{
        computerChoice='scissors'
    }
    return computerChoice
}

function playRound (playerSelection, computerSelection) {
    let result ='';
    if (playerSelection === computerSelection) {
        result= "It's a Draw !";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        result = `You win ! ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection == "paper" && computerSelection == "rock") {
        result = `You win ! ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection == "scissors" && computerSelection == "paper") {
        result = `You win ! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You Lose ! ${computerSelection} beats ${playerSelection}`;
    }
    return result;
}

let userChoice = prompt('Enter Your Choice to start the game').toLowerCase();
let computerChoice = getComputerChoice();
let result = playRound(userChoice,computerChoice);
console.log(result);