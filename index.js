let humanScore = 0;
let computerScore = 0;
let round = 1;

function updateScores() {
    document.getElementById("player-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("round-number").textContent = round;
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerChoice = getComputerChoice();
        const result = playRound(playerSelection, computerChoice);
        
        resultDiv.textContent = `You chose ${playerSelection}, computer chose ${computerChoice}. ${result}`;
        
        updateScores();

        if (round === 5) {
            setTimeout(() => {
                gameWinner();
            }, 500);
        }

        round++;
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function gameWinner() {
    let finalMessage = "";
    if (humanScore > computerScore) {
        finalMessage = "You won the game!";
    } else if (computerScore > humanScore) {
        finalMessage = "You lost the game!";
    } else {
        finalMessage = "The game is a draw!";
    }

    alert(finalMessage);
    resetGame();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 1;
    resultDiv.textContent = "New game started!";
}
