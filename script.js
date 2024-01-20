//options for player and computer
const choice = ["rock", "paper", "scissors"]

//display scores
let playerScore = 0;
let computerScore = 0;
let gameScore = (playerScore + " - " + computerScore)
console.log(gameScore)





// random selection of 3 choices for player
function getPlayerChoice()  {
    return choice[(Math.floor(Math.random() * choice.length))];
}

// computer to randomly select one of the 3 choice options
function getComputerChoice() {
    return choice[(Math.floor(Math.random() * choice.length))];
}

// function game(){}

   
    // all possible plays, displays player & computer choice and round results message
    function playRound(playerSelection, computerSelection) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);

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

    // }


// adds points based on result of round
function scoring(roundResult) {
    if (roundResult === "You win! Rock beats scissors" || 
        roundResult === "You win! Paper beats Rock" || 
        roundResult === "You win! Scissors beats paper") {
        playerScore += 1;
    } else if (roundResult === "You lose! Paper beats Rock" ||
        roundResult === "You lose! Scissors beats paper" ||
        roundResult === "You lose! Rock beats scissors") {
        computerScore += 1;
    } else {

    }
}
    

// loop round play 5 times
for (let i = 0; i < 5; i++) {
    const roundResult = playRound();
    console.log(roundResult);
    scoring(roundResult);



}
