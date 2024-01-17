let playerScore = 0;
let computerScore = 0;

//options for player and computer
const choice = ["rock", "paper", "scissors"]

console.log(choice[1]);

// computer to randomly select one of the 3 choice options
function getComputerChoice() {
    console.log(choice[(Math.floor(Math.random() * choice.length))]);
}
 getComputerChoice()



// function playRound(playerSelection, computerSelection) {
//    if 
//   } else {

//     return = "You Lose! Paper beats Rock";
//   }