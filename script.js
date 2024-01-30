//options for player and computer
const choice = ["rock", "paper", "scissors"]

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const text = document.querySelector("#text");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

//display scores
let playerScore = 0;
let computerScore = 0;







rock.onclick = function() {
    playRound("rock");
};

paper.onclick = function() {
    playRound("paper");
};

scissors.onclick = function() {
    playRound("scissors");
};





// //displays and updates score
// function updateGameScore() {
//     gameScore = `${playerScore} - ${computerScore}`;
//     console.log(gameScore);
// }

function playerChoice()  {
    const choices = ['rock', 'paper', 'scissors'];
}

// computer to randomly select one of the 3 choice options
function getComputerChoice() {
    return choice[(Math.floor(Math.random() * choice.length))];
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (playerSelection === computerSelection) {
      text.innerText = "It's a draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        text.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        playerScoreText.innerText += playerScore;
    } else {
        text.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        computerScoreText.innerText += computerScore;
    }
// // adds points based on result of round
// function scoring(roundResult) {
//     if (roundResult === "You win! Rock beats scissors" || 
//     roundResult === "You win! Paper beats Rock" || 
//     roundResult === "You win! Scissors beats paper") {
//     playerScore += 1;
//     } else if (roundResult === "You lose! Paper beats Rock" ||
//     roundResult === "You lose! Scissors beats paper" ||
//     roundResult === "You lose! Rock beats scissors") {
//     computerScore += 1;
//     } else {

//     }
// }
}