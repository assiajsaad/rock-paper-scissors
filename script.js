
function getUserChoice() {
    // let userChoice = prompt('Enter Your Choice to start the game').toLowerCase();

    // return userChoice
}


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

function playGame() {
    let userPoints = 0;
    let computerPoints = 0;
    let userChoice;
    let computerChoice;
    let result;
    for (let index = 0; index < 5; index++) {
         userChoice = getUserChoice();
         computerChoice = getComputerChoice();
         result = getSecondWord(playRound(userChoice,computerChoice));
        if (result == "win") {
            userPoints++;
        }else if(result == "lose") {
            computerPoints++;
        }
    }
    if (userPoints == computerPoints) {
        result = `User = ${userPoints} Computer = ${computerPoints} This is Draw !`
    } else if (userPoints <= computerPoints) {
        result = `User = ${userPoints} Computer = ${computerPoints} Computer Wins !`
    }else {
        result = `User = ${userPoints} Computer = ${computerPoints} You Win !`
    }
    return result;
}

function getSecondWord (str){
    let words = str.split(" ");
    let secondWord = words[1];
    return secondWord;
}

function showResult (result) {
    let divResult = document.createElement('h3')
    divResult.textContent = result;
    divResult.style.cssText = "";
    
    document.body.removeChild(document.body.lastChild);
    document.body.appendChild(divResult)
}

let divButtons = document.querySelector('.buttons');

divButtons.addEventListener('click',(e)=>{
    let target = e.target
    let result= ''

    switch (target.id) {
        case 'rock':
           result = playRound(target.id,getComputerChoice());
            showResult(result);
            break;
        case 'paper':
           result = playRound(target.id,getComputerChoice());
            showResult(result);
            break;
        case 'scissors':
           result = playRound(target.id,getComputerChoice());
            showResult(result);
            break;
    
        default:
            break;
    }
})

// Implementation
// console.log("Welcome to Rock Paper Scissors");

// let result = playGame();
// console.log(result);