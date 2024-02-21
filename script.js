function getComputerChoice() {
  let computerChoice;
  let rndInt = Math.floor(Math.random() * 3) + 1;

  if (rndInt == 1) {
    computerChoice = "rock";
  } else if (rndInt == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "It's a Draw !";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = `You win ! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = `You win ! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = `You win ! ${playerSelection} beats ${computerSelection}`;
  } else {
    result = `CPU wins ! ${computerSelection} beats ${playerSelection}`;
  }
  return result;
}

function playGame(userInput) {
  let userChoice;
  let computerChoice;
  let result;

  if (userInput <= 5 || computerPoints <= 5) {
    userChoice = userInput;
    computerChoice = getComputerChoice();
    result = getSecondWord(playRound(userChoice, computerChoice));
    if (result === "You") {
      userPoints++;
    } else if (result === "CPU") {
      computerPoints++;
    }
  }

  displayWinner();

  return result;
}

function curentScore() {
    let score = document.querySelector('.score');
    if(score.lastChild != null){
        score.removeChild(score.lastChild);
    }

    let currScore = document.createElement("h3");
    currScore.textContent = `User: ${userPoints} CPU: ${computerPoints}`;

  
    score.appendChild(currScore);
}

function displayWinner() {
  if (userPoints == 5) {
    showResult("You Win!");
    userPoints = 0;
    computerPoints = 0;
  } else if (computerPoints == 5) {
    showResult("CPU Wins!");
    userPoints = 0;
    computerPoints = 0;
  }
}

function getSecondWord(str) {
  let words = str.split(" ");
  let secondWord = words[0];
  return secondWord;
}

function showResult(result) {
  let divResult = document.createElement("h3");
  divResult.textContent = result;
  divResult.style.cssText = "";

  document.body.removeChild(document.body.lastChild);
  document.body.appendChild(divResult);
}

let divButtons = document.querySelector(".buttons");

divButtons.addEventListener("click", (event) => {
  let target = event.target;
  let result = "";

  switch (target.id) {
    case "rock":
      result = playGame(target.id);
      curentScore();
      break;
    case "paper":
      result = playGame(target.id);
      curentScore();
      break;
    case "scissors":
      result = playGame(target.id);
      curentScore();
      break;

    default:
      break;
  }
});

// Variables

let userPoints = 0;
let computerPoints = 0;

// Implementation

// let result = playGame();
// console.log(result);
