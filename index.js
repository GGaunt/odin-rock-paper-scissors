let humanScore = 0;
let computerScore = 0;
let round = 1;

function getHumanChoice() {

    let userInput;

    userInput = prompt("Please enter 'rock', 'paper' or 'scissors':");
    while (userInput.toLowerCase() != 'rock' && userInput.toLowerCase() != 'paper' && userInput.toLowerCase() != 'scissors') {
      userInput = prompt("Choose a valid option! Please enter 'rock', 'paper' or 'scissors':");
    }
    return userInput;
};

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = "Rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "Paper";
    }
    else if (computerChoice === 3) {
        computerChoice = "Scissors";
    }

    return computerChoice;
};

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        if (round === 5) {
            gameWinner(humanScore, computerScore);
        }

        round = ++round;
    }

    function gameWinner(humanScore, computerScore) {
        if (humanScore > computerScore) {
            return console.log("You won the game!");
        }
        else if (computerScore > humanScore) {
            return console.log("You lost the game!");
        }
        else if (humanScore === computerScore) {
            return console.log("Game is a draw!");
        }
    }

    function playRound(humanChoice, computerChoice) {
        console.log("You have chosen", humanChoice);
        console.log("Computer has chosen", computerChoice);

        if (humanChoice === "rock" && computerChoice === "Rock") {
            console.log("You draw!");
        }
        else if (humanChoice === "rock" && computerChoice === "Paper") {
            computerScore = ++computerScore;
            console.log("You lose! Paper beats Rock!");
        }
        else if (humanChoice === "rock" && computerChoice === "Scissors") {
            humanScore = ++humanScore;
            console.log("You win! Rock beats Scissors!");
        }

        if (humanChoice === "paper" && computerChoice === "Rock") {
            humanScore = ++humanScore;
            console.log("You win! Paper beats Rock");
        }
        else if (humanChoice === "paper" && computerChoice === "Paper") {
            console.log("You draw!");
        }
        else if (humanChoice === "paper" && computerChoice === "Scissors") {
            computerScore = ++computerScore;
            console.log("You lose! Scissors beats Paper!");
        }

        if (humanChoice === "scissors" && computerChoice === "Rock") {
            computerScore = ++computerScore;
            console.log("You lose! Rock beats Scissors!");
        }
        else if (humanChoice === "scissors" && computerChoice === "Paper") {
            humanScore = ++humanScore;
            console.log("You win! Scissors beats Paper!");
        }
        else if (humanChoice === "scissors" && computerChoice === "Scissors") {
            console.log("You draw!");
        }

        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
        console.log("Round:", round);
    }
}

playGame();
