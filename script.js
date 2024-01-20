//options for player and computer
const choice = ["rock", "paper", "scissors"]

//display scores
let playerScore = 0;
let computerScore = 0;
const gameScore = (playerScore + " - " + computerScore)
console.log(gameScore)






// random selection of 3 choices for player
function getPlayerChoice()  {
    return choice[(Math.floor(Math.random() * choice.length))];
}

// computer to randomly select one of the 3 choice options
function getComputerChoice() {
    return choice[(Math.floor(Math.random() * choice.length))];
}

// function game(){

   
    
// }


// all possible plays and their results message
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a draw";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a draw";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper";
    }


}



const roundResult = playRound();
console.log(roundResult);

// function addPoint() {
//     if (roundResult === "You win! Paper beats Rock" || "You win! Rock beats scissors" || "You win! Scissors beats paper") {
//         playerScore += playerScore + 1;
//     }
// }
// addPoint();






