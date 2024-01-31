const choice = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const text = document.querySelector("#text");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

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


function restart() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    text.innerText = "Welcome to Rock, Paper, Scissors. Here you will play head-to-head against the computer";
    rock.innerText = "Rock";
    paper.innerText = "Paper";
    scissors.innerText = "Scissors";
    rock.addEventListener('click', function() {
        playRound("rock")});
    paper.addEventListener('click', function() {
        playRound("paper")});
    scissors.addEventListener('click', function() {
        playRound("scissors")});
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
        playerScoreText.innerText = playerScore;
    } else {
        text.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        computerScoreText.innerText = computerScore;
    }

    // when player or computer reaches score limit, displays message of win or lose
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5){        
        text.innerText = "You win. Play again?";
        rock.innerText = "Restart";
        paper.innerText = "Restart";
        scissors.innerText = "Restart";
        rock.addEventListener('click', function() {
            restart()});

            paper.addEventListener('click', function() {
                restart()});
                scissors.addEventListener('click', function() {
                    restart()});


        } else {
        text.innerText = "You lose. Play again?"
        rock.innerText = "Restart";
        paper.innerText = "Restart";
        scissors.innerText = "Restart";
        rock.addEventListener('click', function() {
            restart()});
            paper.addEventListener('click', function() {
                restart()});
                scissors.addEventListener('click', function() {
                    restart()});

    }
}
}




