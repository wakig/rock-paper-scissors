let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function game() {
    function playRound(playerSelection, computerSelection) {
        let result = 0; // 0 means draw, 1 means win, -1 means lose

        if (playerSelection == computerSelection) result = 0;
        else if (playerSelection == "Rock") result = (computerSelection == "Scissors") ? 1 : -1;
        else if (playerSelection == "Paper") result = (computerSelection == "Rock") ? 1 : -1;
        else if (playerSelection == "Scissors") result = (computerSelection == "Paper") ? 1 : -1;
        
        if (result == 0) return "Draw!";
        if (result == 1) {
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        if (result == -1) {
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection;
        while (true) {
            playerSelection = prompt("Rock, Paper, or Scissors?");
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
            if (choices.includes(playerSelection)) break;
            alert("Invalid input!");
        };
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    }

    if (playerScore == 5) console.log("You win!");
    else console.log("You lose!");
}

game();